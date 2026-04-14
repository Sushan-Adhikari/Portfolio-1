import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function AchievementsSection({ data }) {
  return (
    <section id="achievements" className="scroll-mt-24 bg-white py-20 dark:bg-zinc-900 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => (
            <Reveal key={item.title} className="h-full" style={{ transitionDelay: `${index * 25}ms` }}>
              <article className="h-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950 md:p-6">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-xl dark:bg-brand-600/15">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-600">{item.event}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">Featured In</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {data.featured.map((feat) => (
              <div
                key={feat.name}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
              >
                <img
                  src={feat.image}
                  alt={feat.name}
                  className="h-24 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <p className="px-3 py-2 text-xs font-semibold text-zinc-600 dark:text-zinc-300">{feat.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
