import { useEffect, useMemo, useState } from 'react'

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

export default function Navbar({ links }) {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

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
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)

      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(100, (scrollY / scrollable) * 100) : 0
      setScrollProgress(progress)

      let current = 'home'
      document.querySelectorAll('.section').forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const marker = window.pageYOffset + 200
        if (marker >= top && marker < top + height) {
          current = section.getAttribute('id') || current
        }
      })

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
                onClick={(event) => onNavClick(event, link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
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
          <span style={{ transform: `scaleX(${scrollProgress / 100})` }}></span>
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
