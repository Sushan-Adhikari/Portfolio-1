// Privacy-friendly, cookie-free analytics via GoatCounter (https://www.goatcounter.com).
//
// The endpoint below is public (it's visible in every visitor's network tab),
// so it's baked in as the default — this keeps analytics working in CI/GitHub
// Pages builds where a gitignored .env isn't present. Override per-environment
// with VITE_GOATCOUNTER_URL, or set it to '' to disable analytics entirely.

const ENDPOINT = import.meta.env.VITE_GOATCOUNTER_URL || 'https://sushan-adhikari.goatcounter.com/count'

let scriptStarted = false
// Events fired before the GoatCounter script finishes loading are buffered here
// and flushed once it is ready.
let queue = []

function gc() {
  return typeof window !== 'undefined' ? window.goatcounter : null
}

function send(hit) {
  const counter = gc()
  if (counter && typeof counter.count === 'function') {
    counter.count(hit)
  } else {
    queue.push(hit)
  }
}

function flushQueue() {
  const counter = gc()
  if (!counter || typeof counter.count !== 'function') return
  const pending = queue
  queue = []
  pending.forEach((hit) => counter.count(hit))
}

/**
 * Load the GoatCounter script (once) and record the initial page view.
 * Safe to call unconditionally — no-ops when unconfigured or on the server.
 */
export function initAnalytics() {
  if (!ENDPOINT || typeof document === 'undefined' || scriptStarted) return
  scriptStarted = true

  // Configure for manual (single-page) counting before the script loads.
  window.goatcounter = { ...(window.goatcounter || {}), no_onload: true, endpoint: ENDPOINT }

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://gc.zgo.at/count.js'
  script.setAttribute('data-goatcounter', ENDPOINT)
  script.addEventListener('load', () => {
    send({ path: window.location.pathname || '/' })
    flushQueue()
  })
  document.head.appendChild(script)
}

/**
 * Record a custom event, e.g. track('cv-download').
 * `event` becomes the GoatCounter path; pass an optional human title.
 */
export function track(event, { title } = {}) {
  if (!ENDPOINT || typeof window === 'undefined') return
  send({ path: event, title: title || event, event: true })
}

/**
 * Report Core Web Vitals as bucketed GoatCounter events
 * (e.g. web-vitals/LCP/good), giving a free distribution view.
 */
export function reportWebVitals() {
  if (!ENDPOINT) return
  import('web-vitals')
    .then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
      const report = ({ name, rating }) => {
        track(`web-vitals/${name}/${rating}`, { title: `Web Vitals: ${name} (${rating})` })
      }
      onCLS(report)
      onINP(report)
      onLCP(report)
      onFCP(report)
      onTTFB(report)
    })
    .catch(() => {})
}
