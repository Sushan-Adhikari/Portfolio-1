import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const RATE_LIMIT_STORAGE_KEY = 'contact-form-rate-v1'
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_SUBMISSIONS = 3
const RATE_LIMIT_COOLDOWN_MS = 45 * 1000
const MIN_FILL_TIME_MS = 3500
const BOT_COOLDOWN_MS = 2 * 60 * 1000

function sanitizeText(value, maxLen = 200) {
  return (value || '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen)
}

function sanitizeMessage(value, maxLen = 1200) {
  return (value || '')
    .replace(/[<>]/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/\u0000/g, '')
    .trim()
    .slice(0, maxLen)
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value || '')
}

function readRateState() {
  if (typeof window === 'undefined') return []
  try {
    const parsed = JSON.parse(window.localStorage.getItem(RATE_LIMIT_STORAGE_KEY) || '[]')
    return Array.isArray(parsed) ? parsed.filter((v) => Number.isFinite(v)) : []
  } catch {
    return []
  }
}

function writeRateState(values) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(values))
  } catch {
    // ignore storage failures
  }
}

function formatWaitTime(ms) {
  const seconds = Math.ceil(ms / 1000)
  if (seconds < 60) return `${seconds}s`
  const minutes = Math.ceil(seconds / 60)
  return `${minutes}m`
}

export default function ContactSection({ data }) {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [cooldownUntil, setCooldownUntil] = useState(0)
  const [cooldownSeconds, setCooldownSeconds] = useState(0)
  const [humanInteracted, setHumanInteracted] = useState(false)
  const formRef = useRef(null)
  const formStartedAtRef = useRef(Date.now())

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5aezc4f'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_cedjp6g'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8hPm8pzSoClj_uwHF'
  const isCoolingDown = cooldownSeconds > 0
  const isSubmitBlocked = status === 'loading' || isCoolingDown

  useEffect(() => {
    const now = Date.now()
    const recentSubmissions = readRateState().filter((stamp) => now - stamp <= RATE_LIMIT_WINDOW_MS)
    const lastSubmission = recentSubmissions[recentSubmissions.length - 1]
    if (lastSubmission && now - lastSubmission < RATE_LIMIT_COOLDOWN_MS) {
      const remaining = RATE_LIMIT_COOLDOWN_MS - (now - lastSubmission)
      setCooldownUntil(now + remaining)
      setStatus('info')
      setMessage(`Please wait ${formatWaitTime(remaining)} before sending another message.`)
    }
  }, [])

  useEffect(() => {
    const markHuman = () => setHumanInteracted(true)
    window.addEventListener('pointerdown', markHuman, { passive: true, once: true })
    window.addEventListener('keydown', markHuman, { once: true })
    window.addEventListener('touchstart', markHuman, { passive: true, once: true })

    return () => {
      window.removeEventListener('pointerdown', markHuman)
      window.removeEventListener('keydown', markHuman)
      window.removeEventListener('touchstart', markHuman)
    }
  }, [])

  useEffect(() => {
    if (!cooldownUntil) {
      setCooldownSeconds(0)
      return
    }

    const update = () => {
      const msLeft = Math.max(0, cooldownUntil - Date.now())
      setCooldownSeconds(Math.ceil(msLeft / 1000))
      if (msLeft <= 0) {
        setCooldownUntil(0)
      }
    }

    update()
    const timerId = window.setInterval(update, 300)
    return () => window.clearInterval(timerId)
  }, [cooldownUntil])

  useEffect(() => {
    if (cooldownUntil || status === 'loading') return
    const normalized = (message || '').toLowerCase()
    const isCooldownMessage =
      normalized.startsWith('please wait') || normalized.startsWith('too many submissions')

    if (isCooldownMessage) {
      setStatus('idle')
      setMessage('')
    }
  }, [cooldownUntil, status, message])

  const activateCooldown = (durationMs, nextStatus, nextMessage) => {
    if (durationMs > 0) {
      setCooldownUntil(Date.now() + durationMs)
    }
    setStatus(nextStatus)
    setMessage(nextMessage)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formRef.current) return

    const now = Date.now()
    const formData = new FormData(formRef.current)
    const recentSubmissions = readRateState().filter((stamp) => now - stamp <= RATE_LIMIT_WINDOW_MS)
    const lastSubmission = recentSubmissions[recentSubmissions.length - 1]

    if (cooldownUntil && now < cooldownUntil) {
      activateCooldown(cooldownUntil - now, 'info', `Please wait ${formatWaitTime(cooldownUntil - now)} before sending again.`)
      return
    }

    if (!humanInteracted) {
      activateCooldown(
        12 * 1000,
        'error',
        'Human verification failed. Please click or type on the page, then try again.',
      )
      return
    }

    const honeypot = sanitizeText(formData.get('company') || '', 120)
    const honeypotWebsite = sanitizeText(formData.get('website') || '', 120)
    if (honeypot || honeypotWebsite) {
      // Treat bot submissions as successful without sending.
      writeRateState([...recentSubmissions, now])
      activateCooldown(BOT_COOLDOWN_MS, 'success', "Message sent successfully! I'll get back to you soon.")
      formRef.current.reset()
      formStartedAtRef.current = Date.now()
      return
    }

    if (now - formStartedAtRef.current < MIN_FILL_TIME_MS) {
      activateCooldown(10 * 1000, 'info', 'Please take a few seconds to review your message before sending.')
      return
    }

    if (lastSubmission && now - lastSubmission < RATE_LIMIT_COOLDOWN_MS) {
      const waitMs = RATE_LIMIT_COOLDOWN_MS - (now - lastSubmission)
      activateCooldown(waitMs, 'error', `Please wait ${formatWaitTime(waitMs)} before sending again.`)
      return
    }

    if (recentSubmissions.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
      const waitMs = Math.max(0, RATE_LIMIT_WINDOW_MS - (now - recentSubmissions[0]))
      activateCooldown(waitMs, 'error', `Too many submissions from this browser. Please try again in ${formatWaitTime(waitMs)}.`)
      return
    }

    const name = sanitizeText(formData.get('name') || '', 80)
    const email = sanitizeText(formData.get('email') || '', 120)
    const subject = sanitizeText(formData.get('subject') || '', 140)
    const body = sanitizeMessage(formData.get('message') || '', 1200)

    if (name.length < 2 || subject.length < 3 || body.length < 20) {
      setStatus('error')
      setMessage('Please provide a valid name, subject, and a message with at least 20 characters.')
      return
    }

    if (!isValidEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    const urlMatches = body.match(/(?:https?:\/\/|www\.)/gi) || []
    if (urlMatches.length > 3) {
      setStatus('error')
      setMessage('Message rejected due to too many links. Please keep it concise.')
      return
    }

    const nameInput = formRef.current.elements.namedItem('name')
    const emailInput = formRef.current.elements.namedItem('email')
    const subjectInput = formRef.current.elements.namedItem('subject')
    const messageInput = formRef.current.elements.namedItem('message')
    const fromNameInput = formRef.current.elements.namedItem('from_name')
    const emailIdInput = formRef.current.elements.namedItem('email_id')
    const replyToInput = formRef.current.elements.namedItem('reply_to')
    if (nameInput) nameInput.value = name
    if (emailInput) emailInput.value = email
    if (subjectInput) subjectInput.value = subject
    if (messageInput) messageInput.value = body
    if (fromNameInput) fromNameInput.value = name
    if (emailIdInput) emailIdInput.value = email
    if (replyToInput) replyToInput.value = email

    setStatus('loading')
    setMessage('Sending message...')

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      writeRateState([...recentSubmissions, now])
      setStatus('success')
      setMessage("Message sent successfully! I'll get back to you soon.")
      formRef.current.reset()
      formStartedAtRef.current = Date.now()
    } catch (error) {
      console.error('Email send failed:', error)
      setStatus('error')
      setMessage('Failed to send message. Please try again or contact me directly.')
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-text">
              <h3>Ready to collaborate?</h3>
              <p>{data.lead}</p>
            </div>

            <div className="contact-info">
              {data.methods.map((method) => (
                <div className="contact-method" key={method.label}>
                  <div className="contact-icon">
                    <i className={method.iconClass}></i>
                  </div>
                  <div className="contact-method-info">
                    <h4>{method.label}</h4>
                    <p>{method.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h4>Find me on social media</h4>
              <div className="social-links">
                {data.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit} ref={formRef} onFocusCapture={() => setHumanInteracted(true)}>
              <input type="hidden" name="from_name" />
              <input type="hidden" name="email_id" />
              <input type="hidden" name="reply_to" />
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />
              <div className="form-group">
                <div className="input-group">
                  <input type="text" name="name" required placeholder=" " maxLength={80} minLength={2} />
                  <label>Your Name</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input type="email" name="email" required placeholder=" " maxLength={120} />
                  <label>Your Email</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input type="text" name="subject" required placeholder=" " maxLength={140} minLength={3} />
                  <label>Subject</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <textarea name="message" rows="5" required placeholder=" " maxLength={1200} minLength={20}></textarea>
                  <label>Your Message</label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitBlocked}>
                <span>
                  {status === 'loading' ? 'Sending...' : isCoolingDown ? `Retry in ${cooldownSeconds}s` : 'Send Message'}
                </span>
                <i className={status === 'loading' ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'}></i>
              </button>

              {isCoolingDown ? (
                <div className="mt-2 text-sm font-medium text-[var(--text-muted)]" aria-live="polite">
                  Cooldown active: {cooldownSeconds}s
                </div>
              ) : null}

              <div className={`form-message${status !== 'idle' ? ` show ${status}` : ''}`}>{message}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
