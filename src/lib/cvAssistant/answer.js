// Intent detection + strict, source-grounded answer building for the CV assistant.
// All answers are derived only from the portfolio's own site data.

import { contactData, experienceData, startupData } from '../../data/siteData.js'
import { containsAny, normalizeText, tokenize } from './text.js'
import { compareMonthYear, formatMonthYear, monthsInclusive, parseDateRange } from './dates.js'

const GREETING_REGEX = /(hi|hello|hey|namaste|wassup|what\s*up|sup|yo|hola)\b/
const APPRECIATION_REGEX = /(thanks|thank you|awesome|great|nice|cool|perfect|appreciate)/
const CASUAL_OK_REGEX = /^(ok|okay|alright|fine|cool|nice|good|great|hmm|hmmm|got it|understood|there)$/i
const NEGATIVE_FEEDBACK_REGEX = /\b(bad|not good|terrible|wrong|issue|problem)\b/i
const PROFILE_QUERY_REGEX =
  /(tell me about sushan|tell me more about him|tell me about him|who is sushan|who is he|about sushan|about him)/
const STARTUP_QUERY_REGEX = /(startup|startups|company|companies|cofound|founded|founder|started a company)/
const CONTACT_QUERY_REGEX = /(contact|email|phone|location|where is he|where is sushan|where does he live|reach him)/
const NAVIGATION_REGEX = /\b(take|go|open|navigate|scroll|jump|show)\b/
const EMAIL_ONLY_REGEX = /(only email|just email|email only|email address|e mail|mail id|gmail)/
const PHONE_ONLY_REGEX = /(only phone|just phone|phone only|phone number|phone num|phone numner|mobile number|contact number|call him)/
const LOCATION_ONLY_REGEX = /(only location|just location|where does he live|where is he|where is sushan|location only)/
const SELF_QUERY_REGEX = /(what are you|who are you|what can you do|what do you do|help me|help)/
const STARTUP_FOUNDED_QUERY_REGEX =
  /(when was .* started|when did .* start|when was .* founded|when did .* found|founded when|started when)/

export const QUICK_QUESTIONS = [
  'Tell me about Sushan.',
  'Which companies has Sushan co-founded?',
  'What are Sushan\'s research publications?',
  'What is Sushan\'s latest experience?',
  'Only email please.',
  'How long did he work at KyraWorks?',
  'Take me to portfolio section.',
]

const INTENT_ALIASES = {
  profile: ['about sushan', 'who is sushan', 'introduce sushan', 'profile', 'summary'],
  research: ['research', 'publication', 'publications', 'paper', 'papers', 'scholar', 'journal', 'conference'],
  experience: ['experience', 'intern', 'internship', 'work', 'role', 'kyraworks', 'mlops', 'latest experience'],
  education: ['education', 'degree', 'cgpa', 'iit', 'kathmandu university', 'semester'],
  skills: ['skill', 'skills', 'tech stack', 'technology', 'tools', 'framework'],
  projects: ['project', 'projects', 'portfolio', 'build', 'built'],
  startups: ['startup', 'startups', 'founder', 'cofound', 'company', 'companies', 'nurvexa', 'prepgraduate'],
  certifications: ['certification', 'certifications', 'course', 'courses', 'certificate'],
  achievements: ['achievement', 'achievements', 'award', 'awards', 'winner', 'finalist'],
  contact: ['contact', 'email', 'phone', 'location', 'address', 'linkedin', 'github', 'reach'],
  cv: ['cv', 'resume', 'download cv', 'view cv'],
  blog: ['blog', 'article', 'articles', 'medium'],
}

const INTENT_TO_CATEGORIES = {
  profile: ['profile'],
  research: ['research'],
  experience: ['experience'],
  education: ['education'],
  skills: ['skills'],
  projects: ['projects'],
  startups: ['startups'],
  certifications: ['certifications'],
  achievements: ['achievements'],
  contact: ['contact'],
  cv: ['cv'],
  blog: ['blog'],
}

const SECTION_ALIASES = [
  { id: 'home', names: ['home', 'top'] },
  { id: 'about', names: ['about'] },
  { id: 'portfolio', names: ['portfolio', 'projects', 'project'] },
  { id: 'research', names: ['research', 'publications', 'papers'] },
  { id: 'experience', names: ['experience', 'education', 'timeline'] },
  { id: 'startups', names: ['startups', 'startup'] },
  { id: 'contact', names: ['contact'] },
]

function getContactValue(label) {
  return contactData.methods.find((method) => method.label.toLowerCase() === label.toLowerCase())?.value
}

function isKyraWorksDurationQuery(normalizedQuestion) {
  if (!normalizedQuestion.includes('kyraworks')) return false

  return containsAny(normalizedQuestion, [
    'how long',
    'how much',
    'duration',
    'tenure',
    'time',
    'months',
    'years',
    'worked',
    'work in',
    'experience in',
  ])
}

function buildKyraWorksDurationAnswer() {
  const kyraEntries = experienceData.timeline.filter((item) => /kyraworks/i.test(item.org))
  if (!kyraEntries.length) return null

  const parsedRanges = kyraEntries
    .map((item) => ({ item, range: parseDateRange(item.date) }))
    .filter((entry) => entry.range)

  if (!parsedRanges.length) {
    return {
      answer: [
        "Sushan's listed KyraWorks roles are:",
        ...kyraEntries.map((item) => `- ${item.role}: ${item.date}`),
      ].join('\n'),
      citations: ['CV · Experience & Education'],
    }
  }

  const earliest = parsedRanges
    .map((entry) => entry.range.start)
    .reduce((min, current) => (compareMonthYear(current, min) < 0 ? current : min))

  const latest = parsedRanges
    .map((entry) => entry.range.end)
    .reduce((max, current) => (compareMonthYear(current, max) > 0 ? current : max))

  const totalMonths = monthsInclusive(earliest, latest)

  return {
    answer: [
      `Sushan worked at KyraWorks from ${formatMonthYear(earliest)} to ${formatMonthYear(latest)} (about ${totalMonths} months) across two roles:`,
      ...kyraEntries.map((item) => `- ${item.role}: ${item.date}`),
    ].join('\n'),
    citations: ['CV · Experience & Education'],
  }
}

function getStartupFromQuestion(normalizedQuestion) {
  return startupData.items.find((item) => normalizedQuestion.includes(normalizeText(item.name)))
}

function getStartupFoundedYear(startup) {
  return startup?.metrics?.find((metric) => /founded/i.test(metric.label))?.value
}

function isBroadContactRequest(normalizedQuestion) {
  return containsAny(normalizedQuestion, [
    'contact details',
    'contact detail',
    'contact info',
    'contact information',
    'how can i contact',
    'reach him',
    'reach sushan',
    'contact',
  ])
}

function isEmailQuery(normalizedQuestion) {
  return /\b(email|e mail|mail id|gmail)\b/.test(normalizedQuestion)
}

function isPhoneQuery(normalizedQuestion) {
  return /\b(phone|mobile|phone number|contact number|phone num|phone numner|call)\b/.test(normalizedQuestion)
}

function isLocationQuery(normalizedQuestion) {
  return /\b(location|address|where|live)\b/.test(normalizedQuestion)
}

function detectIntents(normalizedQuestion) {
  const intentScores = {}

  Object.entries(INTENT_ALIASES).forEach(([intent, aliases]) => {
    aliases.forEach((alias) => {
      if (normalizedQuestion.includes(normalizeText(alias))) {
        intentScores[intent] = (intentScores[intent] || 0) + 1
      }
    })
  })

  if (PROFILE_QUERY_REGEX.test(normalizedQuestion)) {
    intentScores.profile = (intentScores.profile || 0) + 3
  }

  if (STARTUP_QUERY_REGEX.test(normalizedQuestion)) {
    intentScores.startups = (intentScores.startups || 0) + 3
  }

  if (CONTACT_QUERY_REGEX.test(normalizedQuestion)) {
    intentScores.contact = (intentScores.contact || 0) + 2
  }

  return Object.entries(intentScores)
    .sort((a, b) => b[1] - a[1])
    .map(([intent]) => intent)
}

function detectSectionNavigation(normalizedQuestion) {
  if (!NAVIGATION_REGEX.test(normalizedQuestion) && !normalizedQuestion.includes('section')) {
    return null
  }

  const match = SECTION_ALIASES.find((section) =>
    section.names.some((name) => normalizedQuestion.includes(normalizeText(name))),
  )

  return match ? match.id : null
}

function scoreDoc(doc, tokens, normalizedQuestion, detectedIntents) {
  let score = 0

  tokens.forEach((token) => {
    if (doc.searchText.includes(token)) {
      score += 2
    }
  })

  if (normalizedQuestion.includes(normalizeText(doc.title))) {
    score += 5
  }

  detectedIntents.forEach((intent) => {
    const categories = INTENT_TO_CATEGORIES[intent] || []
    if (categories.includes(doc.category)) {
      score += 4
    }
  })

  if (/latest|recent|current/.test(normalizedQuestion) && doc.category === 'experience' && doc.order === 0) {
    score += 3
  }

  return score
}

function formatDocsAsBullets(docs) {
  return docs.map((doc) => `- ${doc.title}: ${doc.summary}`)
}

export function buildStrictAnswer(question, knowledgeBase) {
  const normalizedQuestion = normalizeText(question)
  const tokens = tokenize(question)
  const intents = detectIntents(normalizedQuestion)
  const navigationTarget = detectSectionNavigation(normalizedQuestion)
  const emailValue = getContactValue('email')
  const phoneValue = getContactValue('phone')
  const locationValue = getContactValue('location')

  if (GREETING_REGEX.test(normalizedQuestion)) {
    return {
      answer:
        "Hey, I’m Sushan’s CV Assistant. I can help with his research, experience, projects, skills, certifications, and contact details.",
      citations: [],
    }
  }

  if (SELF_QUERY_REGEX.test(normalizedQuestion)) {
    return {
      answer:
        "I’m here to answer questions from Sushan’s CV and portfolio. You can ask about his experience, research, projects, achievements, certifications, or contact info.",
      citations: [],
    }
  }

  if (APPRECIATION_REGEX.test(normalizedQuestion) && tokens.length <= 2) {
    return {
      answer: 'Glad that helped. If you want, ask me anything specific and I’ll keep it concise.',
      citations: [],
    }
  }

  if (CASUAL_OK_REGEX.test(question.trim())) {
    return {
      answer: 'Nice. If you want, I can give a quick summary of research, experience, or startups next.',
      citations: [],
    }
  }

  if (NEGATIVE_FEEDBACK_REGEX.test(question.trim()) && tokens.length <= 4) {
    return {
      answer: 'Thanks for the direct feedback. Tell me what to fix, and I’ll answer in a cleaner way.',
      citations: [],
    }
  }

  if (normalizedQuestion === 'only') {
    return {
      answer: 'Specify what you want only: email, phone, or location.',
      citations: [],
    }
  }

  if (navigationTarget) {
    return {
      answer: `Sure — I have moved you to the ${navigationTarget} section.`,
      citations: ['Portfolio · Navigation'],
      action: { type: 'navigate', targetId: navigationTarget },
    }
  }

  if (isKyraWorksDurationQuery(normalizedQuestion)) {
    const kyraAnswer = buildKyraWorksDurationAnswer()
    if (kyraAnswer) return kyraAnswer
  }

  const startupInQuestion = getStartupFromQuestion(normalizedQuestion)
  if (startupInQuestion && STARTUP_FOUNDED_QUERY_REGEX.test(normalizedQuestion)) {
    const foundedYear = getStartupFoundedYear(startupInQuestion)

    if (foundedYear) {
      return {
        answer: `${startupInQuestion.name} was founded in ${foundedYear}.`,
        citations: ['Portfolio · Startups'],
      }
    }

    return {
      answer: `The exact founding date for ${startupInQuestion.name} is not explicitly listed in Sushan's CV/portfolio.`,
      citations: ['Portfolio · Startups'],
    }
  }

  const asksEmail = isEmailQuery(normalizedQuestion)
  const asksPhone = isPhoneQuery(normalizedQuestion)
  const asksLocation = isLocationQuery(normalizedQuestion)
  const broadContactRequest = isBroadContactRequest(normalizedQuestion)

  if (asksEmail && !asksPhone && !asksLocation && !broadContactRequest && emailValue) {
    return {
      answer: `Sushan's email is ${emailValue}.`,
      citations: ['CV · Contact'],
    }
  }

  if (asksPhone && !asksEmail && !asksLocation && !broadContactRequest && phoneValue) {
    return {
      answer: `Sushan's phone number is ${phoneValue}.`,
      citations: ['CV · Contact'],
    }
  }

  if (asksLocation && !asksEmail && !asksPhone && !broadContactRequest && locationValue) {
    return {
      answer: `Sushan's listed location is ${locationValue}.`,
      citations: ['CV · Contact'],
    }
  }

  if (EMAIL_ONLY_REGEX.test(normalizedQuestion) && emailValue) {
    return {
      answer: `Sushan's email is ${emailValue}.`,
      citations: ['CV · Contact'],
    }
  }

  if (PHONE_ONLY_REGEX.test(normalizedQuestion) && phoneValue) {
    return {
      answer: `Sushan's phone number is ${phoneValue}.`,
      citations: ['CV · Contact'],
    }
  }

  if (LOCATION_ONLY_REGEX.test(normalizedQuestion) && locationValue) {
    return {
      answer: `Sushan's listed location is ${locationValue}.`,
      citations: ['CV · Contact'],
    }
  }

  if (PROFILE_QUERY_REGEX.test(normalizedQuestion) || containsAny(normalizedQuestion, ['tell me more about him'])) {
    const profileDocs = knowledgeBase
      .filter((doc) => ['profile', 'experience', 'startups'].includes(doc.category))
      .sort((a, b) => a.order - b.order)
      .slice(0, 6)

    return {
      answer: [
        "Here is a quick profile from Sushan's CV and portfolio:",
        ...formatDocsAsBullets(profileDocs),
      ].join('\n'),
      citations: [...new Set(profileDocs.map((doc) => doc.source))],
    }
  }

  if (STARTUP_QUERY_REGEX.test(normalizedQuestion)) {
    const startupDocs = knowledgeBase.filter((doc) => doc.category === 'startups').slice(0, 4)
    return {
      answer: [
        "From Sushan's CV and portfolio, these are the startups he has co-founded:",
        ...formatDocsAsBullets(startupDocs),
      ].join('\n'),
      citations: ['Portfolio · Startups'],
    }
  }

  if (CONTACT_QUERY_REGEX.test(normalizedQuestion)) {
    const contactDoc = knowledgeBase.find((doc) => doc.category === 'contact')

    if (/where is he|where is sushan|where is he now/.test(normalizedQuestion) && locationValue) {
      return {
        answer: `Based on Sushan's CV, his listed location is ${locationValue}.`,
        citations: ['CV · Contact'],
      }
    }

    return {
      answer: ["Based on Sushan's CV and portfolio:", `- ${contactDoc.title}: ${contactDoc.summary}`].join('\n'),
      citations: ['CV · Contact'],
    }
  }

  if (containsAny(normalizedQuestion, ['download cv', 'view cv', 'resume', 'curriculum vitae'])) {
    return {
      answer:
        "You can access Sushan's CV at /Sushan_Adhikari_CV.pdf. In the hero section, the main button opens it and the round icon downloads it directly.",
      citations: ['Portfolio · CV File'],
    }
  }

  if (!tokens.length && !intents.length) {
    return {
      answer:
        "I can help with questions about Sushan's CV and portfolio only. Try asking about research, experience, skills, projects, startups, certifications, achievements, or contact details.",
      citations: [],
    }
  }

  let candidateDocs = knowledgeBase
  if (intents.length) {
    const allowed = new Set(intents.flatMap((intent) => INTENT_TO_CATEGORIES[intent] || []))
    candidateDocs = knowledgeBase.filter((doc) => allowed.has(doc.category))
  }

  const broadResearchRequest =
    intents.includes('research') && containsAny(normalizedQuestion, ['all publications', 'list publications', 'research publications', 'papers'])

  let topDocs = []

  if (broadResearchRequest) {
    topDocs = knowledgeBase.filter((doc) => doc.category === 'research').slice(0, 7)
  } else {
    const scored = candidateDocs
      .map((doc) => ({ doc, score: scoreDoc(doc, tokens, normalizedQuestion, intents) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score
        return a.doc.order - b.doc.order
      })

    topDocs = scored.slice(0, 4).map((entry) => entry.doc)
  }

  if (!topDocs.length) {
    return {
      answer:
        "I can only answer from Sushan's CV and portfolio. Please ask about his research, experience, skills, projects, startups, certifications, achievements, or contact details.",
      citations: [],
    }
  }

  return {
    answer: ["Based on Sushan's CV and portfolio:", ...formatDocsAsBullets(topDocs)].join('\n'),
    citations: [...new Set(topDocs.map((doc) => doc.source))],
  }
}
