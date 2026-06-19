import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('Render error caught by ErrorBoundary:', error, info)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback !== undefined) return this.props.fallback

      return (
        <div
          role="alert"
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#0c4a6e',
          }}
        >
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Something went wrong.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: '0.6rem 1.4rem',
              borderRadius: '999px',
              border: 'none',
              background: '#0ea5e9',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
