import { useEffect } from 'react'

// Normalizes card heights within each grid (desktop only) so rows align,
// re-running on resize, content changes, and breakpoint changes.
export function useEqualizeGridHeights() {
  useEffect(() => {
    const gridSelectors = [
      '.portfolio-grid .portfolio-card',
      '.research-grid .research-card',
      '.achievements-grid .achievement-card',
      '.startups-grid .startup-card',
      '.certifications-grid .certification-card',
    ]
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    let rafId = 0
    let observer
    let timerA = 0
    let timerB = 0

    const reset = () => {
      gridSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((card) => {
          card.style.minHeight = ''
        })
      })
    }

    const equalize = () => {
      reset()
      if (mediaQuery.matches) return

      gridSelectors.forEach((selector) => {
        const cards = Array.from(document.querySelectorAll(selector))
        if (!cards.length) return

        let maxHeight = 0
        cards.forEach((card) => {
          maxHeight = Math.max(maxHeight, card.getBoundingClientRect().height)
        })

        if (!maxHeight) return
        const normalized = `${Math.ceil(maxHeight)}px`
        cards.forEach((card) => {
          card.style.minHeight = normalized
        })
      })
    }

    const schedule = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      rafId = window.requestAnimationFrame(() => {
        equalize()
        rafId = 0
      })
    }

    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(schedule)
      document
        .querySelectorAll('.portfolio-grid, .research-grid, .achievements-grid, .startups-grid, .certifications-grid')
        .forEach((grid) => observer.observe(grid))
    }

    const onMediaQueryChange = () => schedule()
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onMediaQueryChange)
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(onMediaQueryChange)
    }

    schedule()
    timerA = window.setTimeout(schedule, 180)
    timerB = window.setTimeout(schedule, 700)
    window.addEventListener('resize', schedule, { passive: true })
    window.addEventListener('load', schedule)

    return () => {
      reset()
      if (timerA) window.clearTimeout(timerA)
      if (timerB) window.clearTimeout(timerB)
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('load', schedule)
      if (observer) observer.disconnect()
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', onMediaQueryChange)
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(onMediaQueryChange)
      }
    }
  }, [])
}
