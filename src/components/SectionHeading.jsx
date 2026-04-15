import Reveal from './Reveal'

export default function SectionHeading({ title, subtitle }) {
  return (
    <Reveal className="mb-10 md:mb-12">
      <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">{subtitle}</p>
      ) : null}
    </Reveal>
  )
}
