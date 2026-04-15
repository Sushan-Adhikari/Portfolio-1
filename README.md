# Sushan Adhikari Portfolio

Production-ready React + Vite portfolio, flattened at repository root for easier long-term maintenance.

Live domain: [sushanadhikari.com.np](https://sushanadhikari.com.np)

## Project Structure

```text
.
├── src/                     # React app source
├── public/                  # Static assets copied to build output
│   ├── img/
│   ├── Sushan_Adhikari_CV.pdf
│   ├── robots.txt
│   ├── sitemap.xml
│   └── CNAME
├── .github/workflows/
│   └── deploy-pages.yml     # GitHub Pages CI/CD
├── index.html               # Vite entry
├── package.json
└── vite.config.js
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is generated in `dist/` (including `404.html` for GitHub Pages fallback).

## Deployment (GitHub Pages)

This repo includes a Pages workflow at `.github/workflows/deploy-pages.yml`.

1. In GitHub repo settings, set **Pages source** to **GitHub Actions** (one-time).
2. Push to `main`.
3. Workflow builds and deploys automatically.

## Content Updates

- Main content: `src/data/siteData.js`
- Section components: `src/sections/*`
- Global styles: `src/legacy.css`
- CV file: replace `public/Sushan_Adhikari_CV.pdf`

## Notes

- The CV Assistant is intentionally constrained to CV + portfolio content only.
- External links for sensitive projects are locked in `src/data/siteData.js`.
