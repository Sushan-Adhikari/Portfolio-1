import { useEffect, useRef } from 'react'

// Subtle cursor-reactive constellation behind the hero. Pure 2D canvas (no deps),
// client-only — nothing is drawn during SSR, so it never affects the prerendered
// HTML or hydration. It is disabled under prefers-reduced-motion and paused when
// the tab is hidden or the hero is scrolled out of view. The cursor "connects"
// to nearby dots rather than pushing them, which keeps the motion stable.
export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const ACCENT = '14, 165, 233' // sky-500 — reads well on both light and dark
    const LINK_DIST = 130
    const POINTER_DIST = 170

    let width = 0
    let height = 0
    let particles = []
    let rafId = 0
    let running = false
    let resizeTimer = 0
    let intersecting = true // last-known hero visibility (true until an observer says otherwise)
    const pointer = { x: -9999, y: -9999, active: false }

    const countForWidth = (w) => (w < 640 ? 26 : w < 1024 ? 42 : 60)

    const makeParticles = () => {
      particles = Array.from({ length: countForWidth(width) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.5 + 0.7,
      }))
    }

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      makeParticles()
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = width + 20
        else if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        else if (p.y > height + 20) p.y = -20

        let r = p.r
        if (pointer.active) {
          const d = Math.hypot(pointer.x - p.x, pointer.y - p.y)
          if (d < 120) r = p.r + (1 - d / 120) * 1.6
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT}, 0.5)`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DIST) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${ACCENT}, ${0.16 * (1 - dist / LINK_DIST)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      if (pointer.active) {
        for (const p of particles) {
          const dist = Math.hypot(pointer.x - p.x, pointer.y - p.y)
          if (dist < POINTER_DIST) {
            ctx.beginPath()
            ctx.moveTo(pointer.x, pointer.y)
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = `rgba(${ACCENT}, ${0.28 * (1 - dist / POINTER_DIST)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      rafId = window.requestAnimationFrame(step)
    }

    const start = () => {
      if (running) return
      running = true
      rafId = window.requestAnimationFrame(step)
    }
    const stop = () => {
      running = false
      if (rafId) window.cancelAnimationFrame(rafId)
      rafId = 0
    }

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }
    const onPointerLeave = () => {
      pointer.active = false
      pointer.x = -9999
      pointer.y = -9999
    }
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(resize, 200)
    }
    const onVisibility = () => {
      if (document.hidden || !intersecting) stop()
      else start()
    }

    let observer
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          intersecting = entry.isIntersecting
          if (intersecting && !document.hidden) start()
          else stop()
        },
        { threshold: 0 },
      )
      observer.observe(parent)
    }

    resize()
    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    parent.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('visibilitychange', onVisibility)
    if (!observer) start()

    return () => {
      stop()
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
      parent.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      if (observer) observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
