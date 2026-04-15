import { useEffect, useMemo, useRef, useState } from 'react'
import {
  aboutData,
  achievementData,
  blogData,
  certificationData,
  contactData,
  experienceData,
  heroData,
  projectData,
  researchData,
  startupData,
} from '../data/siteData'

const STOP_WORDS = new Set([
  'the',
  'a',
  'an',
  'is',
  'are',
  'am',
  'was',
  'were',
  'to',
  'of',
  'in',
  'for',
  'on',
  'at',
  'and',
  'or',
  'as',
  'by',
  'with',
  'from',
  'can',
  'you',
  'your',
  'me',
  'i',
  'my',
  'about',
  'what',
  'which',
  'who',
  'when',
  'where',
  'how',
  'tell',
  'please',
  'do',
  'does',
  'did',
])

const GREETING_REGEX = /(hi|hello|hey|namaste|wassup|what\s*up|sup|yo|hola)\b/
const PROFILE_QUERY_REGEX =
  /(tell me about sushan|tell me more about him|tell me about him|who is sushan|who is he|about sushan|about him)/
const STARTUP_QUERY_REGEX = /(startup|startups|company|companies|cofound|founded|founder|started a company)/
const CONTACT_QUERY_REGEX = /(contact|email|phone|location|where is he|where is sushan|where does he live|reach him)/
const NAVIGATION_REGEX = /(take me to|go to|open|navigate|scroll to|jump to|show me)/

const QUICK_QUESTIONS = [
  'Tell me about Sushan.',
  'Which companies has Sushan co-founded?',
  'What are Sushan\'s research publications?',
  'What is Sushan\'s latest experience?',
  'How can I contact Sushan?',
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

function normalizeText(input) {
  return (input || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s+]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenize(input) {
  return normalizeText(input)
    .split(' ')
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token))
}

function containsAny(normalizedQuestion, terms) {
  return terms.some((term) => normalizedQuestion.includes(normalizeText(term)))
}

function buildKnowledgeBase() {
  const docs = []

  docs.push({
    id: 'profile-0',
    category: 'profile',
    source: 'CV · Profile',
    title: 'Profile Summary',
    summary: heroData.description,
    keywords: ['profile', 'summary', 'ai', 'ml', 'nlp', 'computer vision', 'mlops'],
    order: 0,
  })

  docs.push({
    id: 'profile-1',
    category: 'profile',
    source: 'CV · Profile',
    title: 'Core Focus',
    summary: `Focus areas include ${aboutData.skills
      .slice(0, 4)
      .map((group) => group.title)
      .join(', ')}.`,
    keywords: ['focus', 'interests', 'specialization'],
    order: 1,
  })

  experienceData.timeline.forEach((item, index) => {
    const isEducation = /b\.eng|exchange semester|iit|university/i.test(item.role) ||
      /iit|university/i.test(item.org)

    docs.push({
      id: `timeline-${index}`,
      category: isEducation ? 'education' : 'experience',
      source: 'CV · Experience & Education',
      title: `${item.role} at ${item.org}`,
      summary: `${item.date}. ${item.summary}`,
      keywords: ['experience', 'education', 'timeline', 'career', 'internship', 'work', item.role, item.org],
      order: index,
    })
  })

  researchData.papers.forEach((paper, index) => {
    docs.push({
      id: `research-${index}`,
      category: 'research',
      source: 'CV · Research & Publications',
      title: paper.title,
      summary: `${paper.venue} · ${paper.date}. ${paper.description}`,
      keywords: ['research', 'publication', 'paper', 'scholar', ...paper.tags],
      order: index,
    })
  })

  startupData.items.forEach((startup, index) => {
    docs.push({
      id: `startup-${index}`,
      category: 'startups',
      source: 'Portfolio · Startups',
      title: startup.name,
      summary: `${startup.tagline}. ${startup.description}`,
      keywords: ['startup', 'founder', 'cofounder', startup.name, ...startup.tech],
      order: index,
    })
  })

  aboutData.skills.forEach((group, index) => {
    docs.push({
      id: `skills-${index}`,
      category: 'skills',
      source: 'CV · Technical Skills',
      title: group.title,
      summary: `Skills: ${group.tags.join(', ')}.`,
      keywords: ['skills', 'tech stack', 'tools', ...group.tags, group.title],
      order: index,
    })
  })

  certificationData.items.forEach((certification, index) => {
    docs.push({
      id: `cert-${index}`,
      category: 'certifications',
      source: 'CV · Certifications',
      title: certification.title,
      summary: `${certification.issuer} · ${certification.date}. ${certification.description}`,
      keywords: ['certification', 'certificate', certification.issuer, certification.title],
      order: index,
    })
  })

  achievementData.items.forEach((item, index) => {
    docs.push({
      id: `achievement-${index}`,
      category: 'achievements',
      source: 'CV · Achievements',
      title: item.title,
      summary: `${item.event}. ${item.description}`,
      keywords: ['achievement', 'award', 'winner', 'finalist', item.event, item.title],
      order: index,
    })
  })

  projectData.items.forEach((project, index) => {
    docs.push({
      id: `project-${index}`,
      category: 'projects',
      source: 'Portfolio · Projects',
      title: project.title,
      summary: `${project.description} Tech: ${project.tech.join(', ')}.`,
      keywords: ['project', 'portfolio', ...project.tech, project.title],
      order: index,
    })
  })

  blogData.items.forEach((post, index) => {
    docs.push({
      id: `blog-${index}`,
      category: 'blog',
      source: 'Portfolio · Blog',
      title: post.title,
      summary: `${post.category} · ${post.date}. ${post.excerpt}`,
      keywords: ['blog', 'article', post.category, post.title],
      order: index,
    })
  })

  docs.push({
    id: 'contact-0',
    category: 'contact',
    source: 'CV · Contact',
    title: 'Contact Information',
    summary: contactData.methods.map((method) => `${method.label}: ${method.value}`).join(' | '),
    keywords: ['contact', 'email', 'phone', 'location', 'linkedin', 'github', 'scholar'],
    order: 0,
  })

  docs.push({
    id: 'cv-0',
    category: 'cv',
    source: 'Portfolio · CV File',
    title: 'CV Access',
    summary: 'CV is available at /Sushan_Adhikari_CV.pdf. Use View CV to open or Download CV to save it locally.',
    keywords: ['cv', 'resume', 'download', 'view', 'pdf'],
    order: 0,
  })

  return docs.map((doc) => ({
    ...doc,
    searchText: normalizeText(`${doc.title} ${doc.summary} ${doc.keywords.join(' ')}`),
  }))
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

function buildStrictAnswer(question, knowledgeBase) {
  const normalizedQuestion = normalizeText(question)
  const tokens = tokenize(question)
  const intents = detectIntents(normalizedQuestion)
  const navigationTarget = detectSectionNavigation(normalizedQuestion)

  if (GREETING_REGEX.test(normalizedQuestion)) {
    return {
      answer:
        "Hi! I am Sushan's CV Assistant. I answer only from his CV and portfolio. Ask me about research, experience, skills, projects, startups, certifications, or contact info.",
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
    const locationValue = contactData.methods.find((method) => method.label.toLowerCase() === 'location')?.value

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
        "You can access Sushan's CV at /Sushan_Adhikari_CV.pdf. Use View CV to open it in-browser or Download CV to save it.",
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

function renderMessageContent(message) {
  const lines = message.split('\n')
  const blocks = []
  let currentList = []

  const flushList = () => {
    if (currentList.length) {
      blocks.push({ type: 'list', items: currentList })
      currentList = []
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('- ')) {
      currentList.push(trimmed.slice(2))
    } else {
      flushList()
      if (trimmed) {
        blocks.push({ type: 'paragraph', text: trimmed })
      }
    }
  })

  flushList()

  return blocks.map((block, index) => {
    if (block.type === 'list') {
      return (
        <ul key={`list-${index}`}>
          {block.items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      )
    }

    return <p key={`paragraph-${index}`}>{block.text}</p>
  })
}

export default function CVChatbot() {
  const knowledgeBase = useMemo(() => buildKnowledgeBase(), [])
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "I am Sushan's CV Assistant. I answer only from his CV and portfolio. Ask me about research, experience, skills, projects, startups, or contact details.",
      citations: [],
    },
  ])
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (!open) return
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, open])

  const goToSection = (targetId) => {
    const section = document.getElementById(targetId)
    if (!section) return

    const headerOffset = 100
    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  const sendQuestion = (rawQuestion) => {
    const question = (rawQuestion || input).trim()
    if (!question) return

    const result = buildStrictAnswer(question, knowledgeBase)

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: question, citations: [] },
      { role: 'assistant', content: result.answer, citations: result.citations || [] },
    ])

    if (result.action?.type === 'navigate' && result.action.targetId) {
      setTimeout(() => goToSection(result.action.targetId), 120)
    }

    setInput('')
    setOpen(true)
  }

  return (
    <div className="cv-chatbot">
      <button
        className="cv-chatbot-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle CV chatbot"
      >
        <i className="fas fa-comment-dots"></i>
        <span>CV Assistant</span>
      </button>

        <div className={`cv-chatbot-panel${open ? ' open' : ''}`}>
          <div className="cv-chatbot-header">
            <div>
              <h4>CV Assistant</h4>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot">
              <span aria-hidden="true">×</span>
            </button>
          </div>

        <div className="cv-chatbot-messages">
          {messages.map((message, index) => (
            <div className={`cv-chatbot-message ${message.role}`} key={`${message.role}-${index}`}>
              <div className="bubble">{renderMessageContent(message.content)}</div>
              {message.citations?.length ? (
                <div className="citations">Sources: {message.citations.join(' · ')}</div>
              ) : null}
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="cv-chatbot-quick-strip">
          <div className="cv-chatbot-quick-questions">
            {QUICK_QUESTIONS.map((question) => (
              <button key={question} onClick={() => sendQuestion(question)}>
                {question}
              </button>
            ))}
          </div>
        </div>

        <form
          className="cv-chatbot-input"
          onSubmit={(event) => {
            event.preventDefault()
            sendQuestion()
          }}
        >
          <input
            type="text"
            placeholder="Ask about CV or portfolio..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" aria-label="Send question">
            <span aria-hidden="true">➤</span>
          </button>
        </form>
      </div>
    </div>
  )
}
