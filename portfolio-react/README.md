# Sushan Portfolio (React + Tailwind)

This is the modular React migration of the portfolio.  
The legacy static site is still in the repo root and untouched for deployment safety.

## Run locally

```bash
cd portfolio-react
npm install
npm run dev
```

## Build for production

```bash
cd portfolio-react
npm run build
```

Build output is generated in `portfolio-react/dist`.

## Contact form (EmailJS)

The contact form is wired with EmailJS and supports environment-variable overrides.

Optional `.env` values:

```bash
VITE_EMAILJS_SERVICE_ID=service_5aezc4f
VITE_EMAILJS_TEMPLATE_ID=template_cedjp6g
VITE_EMAILJS_PUBLIC_KEY=8hPm8pzSoClj_uwHF
```

If these are not set, the app falls back to the values above (same as the current static site).

## Project structure

- `src/data/siteData.js` central content/data
- `src/components/` reusable UI blocks
- `src/sections/` page sections as modular components
- `public/img/` static image assets
