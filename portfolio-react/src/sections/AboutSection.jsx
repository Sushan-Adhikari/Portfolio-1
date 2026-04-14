import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function AboutSection({ data }) {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 dark:bg-zinc-900 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950 md:p-8">
            <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{data.heading}</h3>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
              {data.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {data.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h4 className="text-sm font-bold uppercase tracking-wide text-brand-600">{item.title}</h4>
                  <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="space-y-4">
            {data.skills.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h4 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-100">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-600/50 dark:bg-brand-600/10 dark:text-brand-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
