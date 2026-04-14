import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function ContactSection({ data }) {
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5aezc4f'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_cedjp6g'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8hPm8pzSoClj_uwHF'

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formRef.current) return

    setStatus('loading')

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-zinc-50 py-20 dark:bg-zinc-950 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <SectionHeading title={data.title} />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Ready to collaborate?</h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{data.lead}</p>

              <div className="mt-6 space-y-3">
                {data.methods.map((method) => (
                  <div
                    key={method.label}
                    className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950"
                  >
                    <span className="text-xl" aria-hidden="true">
                      {method.icon}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-brand-600">{method.label}</h4>
                      <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                  Find me on social media
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.social.map((social) => (
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
            </div>
          </Reveal>

          <Reveal>
            <form
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-8"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div className="space-y-4">
                <Field label="Your Name" name="name" type="text" />
                <Field label="Your Email" name="email" type="email" />
                <Field label="Subject" name="subject" type="text" />
                <Field label="Your Message" name="message" type="textarea" />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-5 inline-flex rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' ? (
                <p className="mt-4 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-700 dark:border-green-700/40 dark:bg-green-900/20 dark:text-green-300">
                  Message sent successfully. I will get back to you soon.
                </p>
              ) : null}

              {status === 'error' ? (
                <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 dark:border-red-700/40 dark:bg-red-900/20 dark:text-red-300">
                  Failed to send message. Please try again or contact me directly by email.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type }) {
  const shared =
    'mt-2 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-brand-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100'

  return (
    <label className="block">
      <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{label}</span>
      {type === 'textarea' ? (
        <textarea name={name} rows={5} required className={shared} />
      ) : (
        <input name={name} type={type} required className={shared} />
      )}
    </label>
  )
}
