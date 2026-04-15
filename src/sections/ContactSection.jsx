import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactSection({ data }) {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const formRef = useRef(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5aezc4f'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_cedjp6g'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8hPm8pzSoClj_uwHF'

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formRef.current) return

    setStatus('loading')
    setMessage('Sending message...')

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      setMessage("Message sent successfully! I'll get back to you soon.")
      formRef.current.reset()
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
            <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
              <div className="form-group">
                <div className="input-group">
                  <input type="text" name="name" required placeholder=" " />
                  <label>Your Name</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input type="email" name="email" required placeholder=" " />
                  <label>Your Email</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input type="text" name="subject" required placeholder=" " />
                  <label>Subject</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <textarea name="message" rows="5" required placeholder=" "></textarea>
                  <label>Your Message</label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                <i className={status === 'loading' ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'}></i>
              </button>

              <div className={`form-message${status !== 'idle' ? ` show ${status}` : ''}`}>{message}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
