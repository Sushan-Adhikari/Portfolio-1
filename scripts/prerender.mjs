// Build-time static rendering (SSG): renders the app to HTML with React's
// server renderer and injects it into the built dist/index.html #root, so
// crawlers and first paint get real content. The client then hydrates it.
//
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.jsx
// --outDir dist-ssr`. The SSR bundle is discarded afterwards — only dist ships.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js')
const indexPath = resolve(root, 'dist/index.html')

const { render } = await import(pathToFileURL(ssrEntry).href)
const appHtml = render()

if (!appHtml || appHtml.length < 100) {
  throw new Error(`prerender: render() produced suspiciously little HTML (${appHtml?.length ?? 0} chars)`)
}

let html = readFileSync(indexPath, 'utf8')
const rootDiv = /<div id="root">\s*<\/div>/

if (!rootDiv.test(html)) {
  throw new Error('prerender: could not find an empty <div id="root"></div> in dist/index.html')
}

html = html.replace(rootDiv, `<div id="root">${appHtml}</div>`)
writeFileSync(indexPath, html)

// Drop the SSR-only output so it is never deployed.
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Prerendered dist/index.html (${appHtml.length} chars into #root)`)
