import { useEffect } from 'react'

// Applies a subtle vertical parallax to the hero image on scroll
// (skipped when the user prefers reduced motion).
export function useHeroParallax() {
  useEffect(() => {
    const heroImage = document.querySelector('.hero-image')
    if (!heroImage) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        heroImage.style.transform = `translate3d(0, ${window.pageYOffset * 0.08}px, 0)`
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
