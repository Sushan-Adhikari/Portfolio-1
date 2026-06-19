import { useEffect, useMemo, useRef, useState } from 'react'

const iconById = {
  home: 'fas fa-home',
  about: 'fas fa-user',
  portfolio: 'fas fa-briefcase',
  research: 'fas fa-flask',
  experience: 'fas fa-briefcase',
  startups: 'fas fa-rocket',
  certifications: 'fas fa-certificate',
  achievements: 'fas fa-trophy',
  testimonials: 'fas fa-comments',
  blogs: 'far fa-newspaper',
  contact: 'fas fa-envelope-open',
}

function getStoredTheme() {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem('theme')
    return stored === 'dark' || stored === 'light' ? stored : null
  } catch {
    return null
  }
}

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme() {
  return getStoredTheme() || getSystemTheme()
}

export default function Navbar({ links }) {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const [useSystemTheme, setUseSystemTheme] = useState(() => getStoredTheme() === null)
  const progressRef = useRef(null)
  const rafRef = useRef(null)

  const mobileLinks = useMemo(
    () => [
      ...links,
      { id: 'startups', label: 'Startups' },
      { id: 'certifications', label: 'Certifications' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'blogs', label: 'Blog' },
    ],
    [links],
  )

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    document.body.classList.toggle('light-mode', theme === 'light')
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncTheme = (event) => {
      if (useSystemTheme) {
        setTheme(event.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', syncTheme)
    return () => mediaQuery.removeEventListener('change', syncTheme)
  }, [useSystemTheme])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const updateOnScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)

      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, scrollY / scrollable) : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }

      let current = 'home'
      const marker = scrollY + 200
      document.querySelectorAll('.section').forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (marker >= top && marker < top + height) {
          current = section.getAttribute('id') || current
        }
      })

      setActive((previous) => (previous === current ? previous : current))
      rafRef.current = null
    }

    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = window.requestAnimationFrame(updateOnScroll)
    }

    updateOnScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [links])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (!section) return

    const headerOffset = 100
    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  const onNavClick = (event, id) => {
    event.preventDefault()
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`desktop-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" onClick={(event) => onNavClick(event, 'home')}>
            <span className="logo-text">Sushan</span>
          </a>

          <div className="nav-links">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link${active === link.id ? ' active' : ''}`}
                data-id={link.id}
                aria-current={active === link.id ? 'true' : undefined}
                onClick={(event) => onNavClick(event, link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              aria-label="Toggle theme"
              onClick={() => {
                const next = theme === 'light' ? 'dark' : 'light'
                setUseSystemTheme(false)
                setTheme(next)
                try {
                  window.localStorage.setItem('theme', next)
                } catch {
                  // ignore storage failures
                }
              }}
            >
              {/* Both icons are always rendered; CSS shows the right one based on
                  the body theme class set pre-paint, so this stays hydration-safe. */}
              <i className="fas fa-moon theme-icon theme-icon-moon" aria-hidden="true"></i>
              <i className="fas fa-sun theme-icon theme-icon-sun" aria-hidden="true"></i>
            </button>
            <button
              className={`mobile-menu-btn${menuOpen ? ' active' : ''}`}
              aria-label="Toggle mobile menu"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className="nav-progress" aria-hidden="true">
          <span ref={progressRef}></span>
        </div>
      </nav>

      <div className={`mobile-nav-overlay${menuOpen ? ' show' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`mobile-nav${menuOpen ? ' show' : ''}`}>
        <div className="mobile-nav-header">
          <a href="#home" className="logo" onClick={(event) => onNavClick(event, 'home')}>
            <span className="logo-text">Sushan</span>
          </a>
          <button className="mobile-nav-close" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mobile-nav-links">
          {mobileLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-nav-link${active === link.id ? ' active' : ''}`}
              data-id={link.id}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={(event) => onNavClick(event, link.id)}
            >
              <i className={iconById[link.id] || 'fas fa-link'}></i>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
