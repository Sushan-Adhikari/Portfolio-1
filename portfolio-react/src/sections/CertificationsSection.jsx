import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function CertificationsSection({ data }) {
  return (
    <section id="certifications" className="scroll-mt-24 bg-zinc-50 py-20 dark:bg-zinc-950 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((cert, index) => (
            <Reveal key={cert.title} className="h-full" style={{ transitionDelay: `${index * 25}ms` }}>
              <article className="h-full rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 md:p-6">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-xl dark:bg-brand-600/15">
                  {cert.icon}
                </div>

                <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-100">{cert.title}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-600">{cert.issuer}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{cert.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{cert.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
