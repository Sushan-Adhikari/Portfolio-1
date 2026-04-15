import { useEffect, useRef, useState } from 'react'

export default function Hero({ data }) {
  const [typedText, setTypedText] = useState('')
  const timeoutRef = useRef(null)
  const primaryAction = data.actions.find((action) => action.primary)
  const secondaryAction = data.actions.find((action) => !action.primary)

  useEffect(() => {
    const words = data.typewriterTexts || []
    if (!words.length) return undefined

    let textIndex = 0
    let charIndex = 0
    let deleting = false

    const tick = () => {
      const currentText = words[textIndex] || ''
      if (deleting) {
        charIndex -= 1
      } else {
        charIndex += 1
      }

      setTypedText(currentText.slice(0, charIndex))

      let delay = deleting ? 50 : 100
      if (!deleting && charIndex === currentText.length) {
        delay = 2000
        deleting = true
      } else if (deleting && charIndex === 0) {
        deleting = false
        textIndex = (textIndex + 1) % words.length
        delay = 300
      }

      timeoutRef.current = window.setTimeout(tick, delay)
    }

    tick()

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [data.typewriterTexts])

  return (
    <section className="section hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image">
              <div className="image-wrapper hero-cutout-wrapper">
                <img
                  src="/img/sushan-cutout.png"
                  alt="Sushan Adhikari"
                  className="hero-photo"
                  width="408"
                  height="947"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="floating-elements">
                <div className="float-item float-1">
                  <i className="fab fa-python"></i>
                </div>
                <div className="float-item float-2">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="float-item float-3">
                  <i className="fab fa-aws"></i>
                </div>
                <div className="float-item float-4">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="float-item float-5">
                  <i className="fas fa-database"></i>
                </div>
                <div className="float-item float-6">
                  <i className="fab fa-react"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-text">
              <div className="greeting">
                <span className="wave">👋</span>
                <span>{data.greeting}</span>
              </div>

              <h1 className="hero-title">
                <span className="name-first">{data.firstName}</span>
                <span className="gradient-text">{data.lastName}</span>
              </h1>

              <div className="hero-subtitle">
                <span className="typewriter">{typedText}</span>
                <span className="cursor">|</span>
              </div>

              <p className="hero-description">{data.description}</p>

              <div className="hero-stats">
                {data.stats.map((stat) => (
                  <div className="stat-item" key={stat.label}>
                    <div className="stat-number">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <div className="cv-action-group">
                  <a
                    href={primaryAction?.href}
                    className="btn btn-primary"
                    target={primaryAction?.external ? '_blank' : undefined}
                    rel={primaryAction?.external ? 'noopener noreferrer' : undefined}
                  >
                    <span>{primaryAction?.label || 'View CV'}</span>
                    <i className={primaryAction?.iconClass || 'fas fa-file-lines'}></i>
                  </a>
                  {data.helperDownload ? (
                    <a
                      href={data.helperDownload.href}
                      className="btn btn-icon cv-download-btn"
                      download={data.helperDownload.download ? 'Sushan_Adhikari_CV.pdf' : undefined}
                      aria-label={data.helperDownload.label}
                      title={data.helperDownload.label}
                    >
                      <i className={data.helperDownload.iconClass}></i>
                    </a>
                  ) : null}
                </div>

                {secondaryAction ? (
                  <a href={secondaryAction.href} className="btn btn-outline">
                    <span>{secondaryAction.label}</span>
                    <i className={secondaryAction.iconClass}></i>
                  </a>
                ) : null}
              </div>

              <div className="social-links">
                {data.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    data-tooltip={social.label}
                    aria-label={social.label}
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  )
}
