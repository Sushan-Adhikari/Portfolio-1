import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { buildKnowledgeBase, buildStrictAnswer, QUICK_QUESTIONS } from '../src/lib/cvAssistant/index.js'

const kb = buildKnowledgeBase()

describe('buildKnowledgeBase', () => {
  it('produces docs with a precomputed searchText and known categories', () => {
    assert.ok(kb.length > 10, 'expected a populated knowledge base')
    assert.ok(
      kb.every((doc) => typeof doc.searchText === 'string' && doc.searchText.length > 0),
      'every doc should have searchText',
    )
    const categories = new Set(kb.map((doc) => doc.category))
    for (const expected of ['profile', 'research', 'experience', 'startups', 'contact']) {
      assert.ok(categories.has(expected), `expected category "${expected}"`)
    }
  })
})

describe('buildStrictAnswer', () => {
  it('returns the email for an email-only request', () => {
    const { answer } = buildStrictAnswer('Only email please.', kb)
    assert.match(answer, /sushan\.adhikari2060@gmail\.com/)
  })

  it('greets without inventing sources', () => {
    const res = buildStrictAnswer('hi', kb)
    assert.match(res.answer, /CV Assistant/)
    assert.deepEqual(res.citations, [])
  })

  it('answers a startup founding-year question from the data', () => {
    const { answer } = buildStrictAnswer('When was Nurvexa founded?', kb)
    assert.match(answer, /Nurvexa/)
    assert.match(answer, /2025/)
  })

  it('emits a navigate action for section navigation', () => {
    const res = buildStrictAnswer('Take me to portfolio section.', kb)
    assert.equal(res.action?.type, 'navigate')
    assert.equal(res.action?.targetId, 'portfolio')
  })

  it('computes the KyraWorks tenure across roles', () => {
    const { answer } = buildStrictAnswer('How long did he work at KyraWorks?', kb)
    assert.match(answer, /KyraWorks/)
    assert.match(answer, /months/)
  })

  it('lists research publications with a source citation', () => {
    const res = buildStrictAnswer("What are Sushan's research publications?", kb)
    assert.match(res.answer, /Based on Sushan's CV and portfolio/)
    assert.ok(res.citations.some((c) => /Research/.test(c)), 'expected a research citation')
  })

  it('stays in scope for an empty question', () => {
    const { answer } = buildStrictAnswer('', kb)
    assert.match(answer, /CV and portfolio/)
  })

  it('ships quick questions the engine can actually answer', () => {
    assert.ok(QUICK_QUESTIONS.length > 0)
    for (const q of QUICK_QUESTIONS) {
      const { answer } = buildStrictAnswer(q, kb)
      assert.ok(typeof answer === 'string' && answer.length > 0, `no answer for: ${q}`)
    }
  })
})
