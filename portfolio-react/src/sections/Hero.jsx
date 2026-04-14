export default function Hero({ data }) {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] scroll-mt-24 bg-zinc-50 pt-24 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 md:pt-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-10 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-3 text-2xl text-zinc-500 dark:text-zinc-300 md:text-3xl">
            <span className="text-3xl md:text-4xl">👋</span>
            <span>{data.greeting}</span>
          </div>

          <h1 className="mb-4 text-5xl font-black leading-[0.98] md:text-7xl">
            <span className="block text-zinc-900 dark:text-zinc-100">{data.firstName}</span>
            <span className="block text-brand-600">{data.lastName}</span>
          </h1>

          <p className="mb-6 text-2xl font-bold text-brand-600 md:text-3xl">{data.subtitle}</p>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-xl">{data.description}</p>

          <div className="mb-8 flex flex-wrap gap-7">
            {data.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black leading-none text-brand-600 md:text-5xl">{stat.value}</div>
                <div className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            {data.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith('http') || action.href.endsWith('.pdf') ? '_blank' : undefined}
                rel={action.href.startsWith('http') || action.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                className={[
                  'inline-flex items-center rounded-full px-6 py-3 text-base font-semibold transition-transform duration-200 hover:-translate-y-0.5 md:text-lg',
                  action.primary
                    ? 'bg-brand-600 text-white shadow-soft'
                    : 'border-2 border-zinc-200 text-zinc-800 dark:border-zinc-700 dark:text-zinc-100',
                ].join(' ')}
              >
                {action.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {data.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-zinc-200 bg-white text-xs font-extrabold uppercase text-brand-700 transition-colors hover:bg-brand-600 hover:text-white dark:border-zinc-700 dark:bg-zinc-900"
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-[320px] max-w-full md:w-[390px]">
            <div className="absolute bottom-6 left-1/2 h-[275px] w-[275px] -translate-x-1/2 rounded-full border border-zinc-200 bg-[#e7eff7] dark:border-zinc-700 dark:bg-brand-600/15 md:h-[340px] md:w-[340px]" />
            <img
              src="/img/sushan-cutout.png"
              alt="Sushan Adhikari"
              className="relative z-10 h-[430px] w-full scale-[1.08] object-cover object-[center_8%] drop-shadow-[0_16px_24px_rgba(2,132,199,0.24)] md:h-[560px]"
              width="408"
              height="947"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
