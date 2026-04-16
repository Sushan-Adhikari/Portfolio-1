import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, .btn, .nav-link, .mobile-nav-link, .theme-toggle, .card-icon, .research-btn, .startup-link, .social-link, .tilt-card, .tech-rolling-chip, .featured-rolling-card, .cv-chatbot-toggle'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const cursorEl = cursorRef.current
    const dotEl = dotRef.current
    if (!cursorEl || !dotEl) return undefined

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) return undefined

    document.body.classList.add('custom-cursor-enabled')

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY
    let rafId = 0

    const animate = () => {
      x += (targetX - x) * 0.18
      y += (targetY - y) * 0.18

      cursorEl.style.setProperty('--cursor-x', `${x}px`)
      cursorEl.style.setProperty('--cursor-y', `${y}px`)
      dotEl.style.setProperty('--cursor-x', `${targetX}px`)
      dotEl.style.setProperty('--cursor-y', `${targetY}px`)

      rafId = window.requestAnimationFrame(animate)
    }

    const onMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY

      cursorEl.classList.add('visible')
      dotEl.classList.add('visible')
    }

    const onLeaveWindow = () => {
      cursorEl.classList.remove('visible')
      dotEl.classList.remove('visible')
    }

    const onOver = (event) => {
      if (!(event.target instanceof Element)) return
      const isInteractive = Boolean(event.target.closest(INTERACTIVE_SELECTOR))
      cursorEl.classList.toggle('is-hover', isInteractive)
      dotEl.classList.toggle('is-hover', isInteractive)
    }

    const onDown = () => {
      cursorEl.classList.add('is-active')
      dotEl.classList.add('is-active')
    }

    const onUp = () => {
      cursorEl.classList.remove('is-active')
      dotEl.classList.remove('is-active')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    window.addEventListener('mouseout', onLeaveWindow)
    document.addEventListener('pointerover', onOver, { passive: true })

    rafId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('mouseout', onLeaveWindow)
      document.removeEventListener('pointerover', onOver)
      document.body.classList.remove('custom-cursor-enabled')
    }
  }, [])

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true"></div>
      <div className="custom-cursor-dot" ref={dotRef} aria-hidden="true"></div>
    </>
  )
}
