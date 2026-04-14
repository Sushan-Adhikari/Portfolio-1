export default function Footer({ links = [], social = [] }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-2xl font-black tracking-tight text-brand-600">Sushan Adhikari</p>
          <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            AI/ML Engineer • Research • Production Systems
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            © {year} All rights reserved
          </p>
        </div>

        <div className="md:text-right">
          <div className="flex flex-wrap gap-2 md:justify-end">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2 md:justify-end">
            {social.slice(0, 5).map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase text-brand-700 dark:bg-brand-600/15 dark:text-brand-300"
              >
                {item.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
