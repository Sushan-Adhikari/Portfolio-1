import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function StartupsSection({ data }) {
  return (
    <section id="startups" className="scroll-mt-24 bg-zinc-50 py-20 dark:bg-zinc-950 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} />

        <div className="grid gap-6 lg:grid-cols-2">
          {data.items.map((startup) => (
            <Reveal key={startup.name}>
              <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <header className="bg-brand-600 px-6 py-6 text-white">
                  <h3 className="text-3xl font-black tracking-tight">{startup.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-brand-100">{startup.tagline}</p>
                  <span className="mt-3 inline-flex rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    {startup.status}
                  </span>
                </header>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{startup.description}</p>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {startup.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-700 dark:bg-zinc-950"
                      >
                        <div className="text-2xl font-black text-brand-600">{metric.value}</div>
                        <div className="mt-1 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {startup.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-600/15 dark:text-brand-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={startup.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
                  >
                    Visit Website
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
