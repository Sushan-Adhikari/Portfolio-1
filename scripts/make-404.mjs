// Generates dist/404.html from the built index.html for GitHub Pages SPA routing.
// The 404 copy is marked noindex so unknown URLs aren't treated as soft-404
// duplicates of the homepage. Falls back to a plain copy if the meta isn't found.
import { readFileSync, writeFileSync } from 'node:fs'

const src = 'dist/index.html'
const dest = 'dist/404.html'

let html = readFileSync(src, 'utf8')

html = html
  .replace(/<meta name="robots" content="[^"]*"\s*\/?>/, '<meta name="robots" content="noindex,follow" />')
  .replace(/<meta name="googlebot" content="[^"]*"\s*\/?>/, '<meta name="googlebot" content="noindex,follow" />')

writeFileSync(dest, html)
console.log('Wrote dist/404.html (noindex)')
