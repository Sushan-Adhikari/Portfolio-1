import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    target: 'es2020',
    // manualChunks is a client-only concern; the SSR build (used purely to
    // prerender HTML at build time) externalizes React and is discarded after.
    ...(isSsrBuild
      ? {}
      : {
          rollupOptions: {
            output: {
              // Keep the stable React runtime in its own long-cached chunk so
              // content edits don't bust it. (EmailJS and web-vitals are split
              // automatically via dynamic import.)
              manualChunks(id) {
                if (
                  id.includes('node_modules/react-dom') ||
                  id.includes('node_modules/react/') ||
                  id.includes('node_modules/scheduler')
                ) {
                  return 'react'
                }
                return undefined
              },
            },
          },
        }),
  },
}))
