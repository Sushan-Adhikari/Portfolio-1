// Builds the searchable knowledge base from the portfolio's site data.
// Each doc carries a precomputed `searchText` for cheap substring scoring.

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
} from '../../data/siteData.js'
import { normalizeText } from './text.js'

export function buildKnowledgeBase() {
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
    const paperSummary = paper.descriptionLines?.length
      ? paper.descriptionLines.join(' ')
      : paper.description || ''

    docs.push({
      id: `research-${index}`,
      category: 'research',
      source: 'CV · Research & Publications',
      title: paper.title,
      summary: `${paper.venue} · ${paper.date}. ${paperSummary}`,
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
