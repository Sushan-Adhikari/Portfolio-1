import { useEffect, useMemo, useRef, useState } from 'react'
import { track } from '../lib/analytics'
import { buildKnowledgeBase, buildStrictAnswer, QUICK_QUESTIONS } from '../lib/cvAssistant'

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
        "Hi, I’m Sushan’s CV Assistant. Ask me about his research, experience, projects, skills, certifications, or contact details.",
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
    track('chatbot-question', { title: 'CV assistant question' })

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
    <div className={`cv-chatbot${open ? ' open' : ''}`}>
      {!open ? (
        <button className="cv-chatbot-toggle" onClick={() => setOpen(true)} aria-label="Open CV assistant">
          <i className="fas fa-comment-dots"></i>
          <span>CV Assistant</span>
        </button>
      ) : null}

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
