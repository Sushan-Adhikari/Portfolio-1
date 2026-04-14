import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function ResearchSection({ data }) {
  return (
    <section id="research" className="scroll-mt-24 bg-white py-20 dark:bg-zinc-900 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} subtitle={data.intro} />

        <Reveal className="mb-8">
          <a
            href={data.scholarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100 dark:border-brand-600/40 dark:bg-brand-600/15 dark:text-brand-300"
          >
            View All on Google Scholar
          </a>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {data.papers.map((paper) => (
            <Reveal key={paper.title}>
              <article className="h-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950 md:p-6">
                <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-100">{paper.title}</h3>

                <div className="mt-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-600">
                  <span>{paper.venue}</span>
                  <span className="text-zinc-400 dark:text-zinc-500">•</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{paper.date}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{paper.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={paper.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white hover:bg-brand-700"
                  >
                    Read Paper
                  </a>
                  <a
                    href={paper.extraLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    Related Link
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
