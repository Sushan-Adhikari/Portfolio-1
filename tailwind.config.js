/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 132, 199, 0.12)',
      },
      keyframes: {
        techRoll: {
          from: { transform: 'translate3d(0, -50%, 0)' },
          to: { transform: 'translate3d(-50%, -50%, 0)' },
        },
        featuredRoll: {
          from: { transform: 'translate3d(0, -50%, 0)' },
          to: { transform: 'translate3d(-50%, -50%, 0)' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'tech-roll': 'techRoll 72s linear infinite',
        'featured-roll': 'featuredRoll 60s linear infinite',
        'cursor-blink': 'cursorBlink 1s steps(1, end) infinite',
      },
    },
  },
  plugins: [],
}
