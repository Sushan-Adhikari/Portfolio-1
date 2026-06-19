# Sushan Adhikari — Portfolio

Source for **[sushanadhikari.com.np](https://www.sushanadhikari.com.np)** — a fast, statically‑prerendered React portfolio with a built‑in CV assistant. Built with React 19 + Vite + Tailwind, prerendered to static HTML at build time, and deployed to GitHub Pages.

## Highlights

- **Build‑time prerendering (SSG).** The full app is rendered to static HTML with `react-dom/server` and hydrated on the client, so crawlers and first paint get real content — it even reads without JavaScript.
- **CV Assistant.** A dependency‑free, source‑grounded NLP engine (`src/lib/cvAssistant/`) that answers questions strictly from the portfolio's own data — no external API, no LLM calls.
- **Lean by design.** Self‑hosted Font Awesome **subset (~13KB vs ~330KB)**, lazy‑loaded EmailJS, a code‑split React vendor chunk, `<picture>`/WebP images, and an interactive hero constellation that honors `prefers-reduced-motion`.
- **Privacy‑friendly analytics.** Cookie‑free GoatCounter + Core Web Vitals reporting.
- **Accessible & SEO‑tuned.** Skip link, `aria-current`, JSON‑LD (Person + ScholarlyArticle), Open Graph/Twitter cards, sitemap, and a noindex 404.

## Tech

React 19 · Vite 5 · Tailwind CSS 3 · GitHub Pages (Actions) · GoatCounter · web-vitals · EmailJS

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # client build → SSR prerender → 404
npm run preview    # serve the production build locally
npm test           # CV-assistant unit tests (node:test)
npm run lint
```

## How the build works

`npm run build` runs four steps:

1. `vite build` — client bundle + `dist/index.html`.
2. `vite build --ssr src/entry-server.jsx` — server bundle (discarded after prerender).
3. `node scripts/prerender.mjs` — renders the app and injects the HTML into `#root`.
4. `node scripts/make-404.mjs` — writes a noindex `dist/404.html` for SPA fallback.

## Project layout

```text
src/
  data/siteData.js     # all content lives here
  sections/            # page sections (Hero, About, Portfolio, Research, ...)
  components/           # Navbar, CVChatbot, HeroCanvas, Reveal, ...
  hooks/                # extracted UI effects (parallax, tilt, equalize, ...)
  lib/
    analytics.js        # GoatCounter + web-vitals wrapper
    cvAssistant/        # the CV assistant NLP engine (+ tests in /test)
  entry-server.jsx      # SSR entry used by the prerender step
  main.jsx              # client entry (hydrate if prerendered, else mount)
scripts/
  prerender.mjs         # SSG: inject rendered HTML into dist/index.html
  make-404.mjs          # GitHub Pages 404
  build-fa-subset.mjs   # regenerate the Font Awesome subset (npm run fa:subset)
public/
  fa/                   # self-hosted Font Awesome subset (generated; committed)
  img/ · Sushan_Adhikari_CV.pdf · robots.txt · sitemap.xml · CNAME
```

## Updating content

- Text, projects, publications, links → `src/data/siteData.js`
- Toggle the "open to work" pill → `heroData.availability`
- Replace the CV → `public/Sushan_Adhikari_CV.pdf`
- Add a new icon → use it in markup, then run `npm run fa:subset` and commit `public/fa/`

## Configuration

- **Analytics:** defaults to the project's GoatCounter endpoint; override per environment with `VITE_GOATCOUNTER_URL`, or set it empty to disable.
- **EmailJS:** uses publishable client keys (safe to ship in a static site); abuse is best limited via the *Allowed Domains* setting in the EmailJS dashboard.

## Deployment

Push to `main`; `.github/workflows/deploy-pages.yml` builds and deploys to GitHub Pages. Set the Pages source to **GitHub Actions** once in repo settings.
