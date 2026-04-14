import { useEffect, useMemo, useState } from 'react'

export default function Navbar({ links }) {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)

      const candidates = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean)

      const current = candidates.find((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        return y + 180 >= top && y + 180 < top + height
      })

      if (current) setActive(current.id)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  const navClass = useMemo(
    () =>
      [
        'fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 dark:border-zinc-800/80',
        'backdrop-blur-xl transition-colors duration-300',
        scrolled ? 'bg-white/95 dark:bg-zinc-950/95' : 'bg-white/90 dark:bg-zinc-950/90',
      ].join(' '),
    [scrolled]
  )

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  const handleClick = (id) => {
    const section = document.getElementById(id)
    if (!section) return
    const top = section.getBoundingClientRect().top + window.scrollY - 92
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={navClass}>
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5">
          <button
            className="flex items-center gap-3"
            onClick={() => handleClick('home')}
            type="button"
          >
            <img
              src="/img/sushan-logo-64.webp"
              alt="Sushan logo"
              className="h-10 w-10 rounded-md"
              width="40"
              height="40"
            />
            <span className="text-3xl font-black tracking-tight text-brand-600">Sushan</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  type="button"
                  className={[
                    'rounded-full px-3 py-2 text-sm font-semibold transition-colors',
                    isActive
                      ? 'bg-brand-50 text-brand-600 dark:bg-brand-600/15 dark:text-brand-300'
                      : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
                  ].join(' ')}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 md:hidden dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={[
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={() => setMenuOpen(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setMenuOpen(false)
        }}
      />

      <aside
        className={[
          'fixed right-0 top-0 z-50 h-full w-72 border-l border-zinc-200 bg-white p-5 shadow-2xl transition-transform md:hidden dark:border-zinc-800 dark:bg-zinc-950',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            type="button"
            className="grid h-8 w-8 place-items-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            ✕
          </button>
        </div>

        <div className="space-y-2">
          {links.map((link) => {
            const isActive = active === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                type="button"
                className={[
                  'w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-brand-50 text-brand-600 dark:bg-brand-600/15 dark:text-brand-300'
                    : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
                ].join(' ')}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      </aside>
    </>
  )
}
