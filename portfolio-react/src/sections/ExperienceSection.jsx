import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function ExperienceSection({ data }) {
  return (
    <section id="experience" className="scroll-mt-24 bg-white py-20 dark:bg-zinc-900 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} />

        <div className="relative ml-3 border-l-2 border-brand-200 pl-6 dark:border-brand-700/50">
          {data.timeline.map((item) => (
            <Reveal key={`${item.date}-${item.role}`} className="relative mb-7">
              <span className="absolute -left-[2.08rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-600 dark:border-zinc-900" />
              <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950 md:p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{item.date}</p>
                <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">{item.role}</h3>
                <h4 className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">{item.org}</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
