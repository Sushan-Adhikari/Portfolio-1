import { useEffect } from 'react'

// Adds pointer-driven 3D tilt + glare to `.tilt-card` elements on fine-pointer,
// motion-allowing devices.
export function useTiltCards() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (reduceMotion || !finePointer) return undefined

    const cards = Array.from(document.querySelectorAll('.tilt-card'))
    if (!cards.length) return undefined

    const cleanups = cards.map((card) => {
      const strength = Number.parseFloat(card.getAttribute('data-tilt-strength') || '5.5')

      const onMove = (event) => {
        const rect = card.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width
        const py = (event.clientY - rect.top) / rect.height
        const rotateY = (px - 0.5) * strength * 2
        const rotateX = (0.5 - py) * strength * 1.4

        card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
        card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
        card.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`)
        card.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`)
        card.classList.add('is-tilting')
      }

      const onLeave = () => {
        card.style.setProperty('--tilt-x', '0deg')
        card.style.setProperty('--tilt-y', '0deg')
        card.style.setProperty('--glare-x', '50%')
        card.style.setProperty('--glare-y', '50%')
        card.classList.remove('is-tilting')
      }

      card.addEventListener('pointermove', onMove)
      card.addEventListener('pointerleave', onLeave)
      card.addEventListener('pointercancel', onLeave)

      return () => {
        card.removeEventListener('pointermove', onMove)
        card.removeEventListener('pointerleave', onLeave)
        card.removeEventListener('pointercancel', onLeave)
      }
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])
}
