import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function BlogSection({ data }) {
  return (
    <section id="blogs" className="scroll-mt-24 bg-white py-20 dark:bg-zinc-900 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} />

        <div className="grid gap-6 md:grid-cols-3">
          {data.items.map((post, index) => (
            <Reveal key={post.title} className="h-full" style={{ transitionDelay: `${index * 30}ms` }}>
              <article className="h-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-5">
                  <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700 dark:bg-brand-600/15 dark:text-brand-300">
                    {post.category}
                  </span>

                  <h3 className="mt-3 text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-100">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>

                  <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white hover:bg-brand-700"
                  >
                    Read More
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
