import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -70px 0px' }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      {...rest}
      className={[
        'motion-reduce:transition-none motion-reduce:transform-none transition-all duration-700',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
