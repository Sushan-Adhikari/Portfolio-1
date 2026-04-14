import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function TestimonialsSection({ data }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!data.items.length) return undefined

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.items.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [data.items.length])

  return (
    <section id="testimonials" className="scroll-mt-24 bg-zinc-50 py-20 dark:bg-zinc-950 md:py-24">
      <div className="mx-auto w-full max-w-4xl px-5">
        <SectionHeading title={data.title} />

        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
            {data.items.map((item, index) => (
              <article
                key={item.author}
                className={[
                  'transition-all duration-500',
                  index === active ? 'relative translate-y-0 opacity-100' : 'absolute inset-0 translate-y-3 opacity-0',
                ].join(' ')}
              >
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-200 md:text-xl">“{item.quote}”</p>
                <div className="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-700">
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.author}</h4>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.role}</p>
                </div>
              </article>
            ))}

            <div className="mt-6 flex justify-center gap-2">
              {data.items.map((item, index) => (
                <button
                  key={`${item.author}-${index}`}
                  onClick={() => setActive(index)}
                  type="button"
                  className={[
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    index === active ? 'bg-brand-600' : 'bg-zinc-300 dark:bg-zinc-600',
                  ].join(' ')}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
