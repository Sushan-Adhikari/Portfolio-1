import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function PortfolioSection({ data }) {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-zinc-50 py-20 dark:bg-zinc-950 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((project, index) => (
            <Reveal key={project.title} className="h-full" style={{ transitionDelay: `${index * 30}ms` }}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="rounded-lg border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
