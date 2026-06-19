import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { initAnalytics, reportWebVitals } from './lib/analytics'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)

// Production builds prerender the markup into #root, so hydrate it. In dev the
// root is empty, so mount fresh.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}

initAnalytics()
reportWebVitals()
