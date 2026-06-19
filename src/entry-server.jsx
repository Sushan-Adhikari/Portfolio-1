import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

// Used only at build time (scripts/prerender.mjs) to produce the static HTML
// that gets injected into #root. No CSS import here — the client build owns CSS.
export function render() {
  return renderToString(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  )
}
