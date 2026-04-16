import { useEffect, useMemo, useRef, useState } from 'react'

export default function Hero({ data }) {
  const [typedText, setTypedText] = useState('')
  const timeoutRef = useRef(null)
  const primaryAction = data.actions.find((action) => action.primary)
  const secondaryAction = data.actions.find((action) => !action.primary)
  const longestTypeText = useMemo(() => {
    const words = data.typewriterTexts || []
    return words.reduce((longest, current) => (current.length > longest.length ? current : longest), '')
  }, [data.typewriterTexts])
  const typewriterWidthCh = useMemo(() => {
    const longestLength = longestTypeText.length || 24
    return Math.min(Math.max(longestLength + 2, 24), 42)
  }, [longestTypeText])

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

              <div className="hero-subtitle !items-start md:!items-center">
                <span
                  className="relative inline-grid max-w-full text-[1.5rem] font-semibold leading-tight text-[var(--primary-600)] md:min-w-[var(--typewriter-width)]"
                  style={{ '--typewriter-width': `${typewriterWidthCh}ch` }}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <span className="invisible hidden whitespace-nowrap md:inline" style={{ minWidth: `${typewriterWidthCh}ch` }}>
                    {longestTypeText || ' '}
                  </span>
                  <span className="inline-flex items-center whitespace-nowrap max-md:whitespace-normal md:absolute md:inset-0">
                    <span className="typewriter !min-w-0 whitespace-nowrap max-md:whitespace-normal">{typedText || '\u00A0'}</span>
                    <span className="ml-1 animate-cursor-blink text-[var(--primary-600)]" aria-hidden="true">
                      |
                    </span>
                  </span>
                </span>
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
                <div className="relative inline-flex w-full justify-center md:w-auto md:justify-start">
                  <a
                    href={primaryAction?.href}
                    className="btn btn-primary min-w-[190px] justify-center pr-14 max-md:w-full max-md:max-w-[260px]"
                    target={primaryAction?.external ? '_blank' : undefined}
                    rel={primaryAction?.external ? 'noopener noreferrer' : undefined}
                  >
                    <span>{primaryAction?.label || 'View CV'}</span>
                  </a>

                  {data.helperDownload ? (
                    <>
                      <span
                        className="pointer-events-none absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-[var(--primary-100)] bg-[var(--surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] dark:border-[rgba(14,165,233,0.35)] dark:bg-[rgba(15,23,42,0.95)]"
                        aria-hidden="true"
                      ></span>
                      <a
                        href={data.helperDownload.href}
                        className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--gradient-primary)] text-white shadow-md transition-all duration-300 hover:translate-y-[-55%] hover:bg-[var(--primary-700)] hover:shadow-lg dark:bg-[var(--primary-600)] dark:hover:bg-[var(--primary-500)]"
                        download={data.helperDownload.download ? 'Sushan_Adhikari_CV.pdf' : undefined}
                        aria-label={data.helperDownload.label}
                        title={data.helperDownload.label}
                      >
                        <i className={data.helperDownload.iconClass}></i>
                      </a>
                    </>
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
