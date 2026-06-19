import { useEffect, useState } from 'react'

// Tracks whether the page is scrolled far enough to reveal the back-to-top button.
export function useBackToTop(threshold = 300) {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.pageYOffset > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return showBackToTop
}
