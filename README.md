# Taisiia Pokrovska — Portfolio

Personal portfolio website for **Taisiia Pokrovska**, AI Creator & Visual Artist.
Static, single-page-app-style site (multi-page) — no build step required.

## Features
- 5 pages: Home, Services, Work (portfolio), About, Contact
- Trilingual: Czech / English / Ukrainian (language switch persists)
- Soft-luxury design system (Playfair Display + Jost)
- Responsive, mobile-first
- Portfolio filtering + image lightbox, video modal
- Accessible (keyboard nav, visible focus, WCAG-AA contrast)

## Structure
```
index.html        Home
services.html     Services
work.html         Portfolio
about.html        About
contact.html      Contact
assets/
  style.css       Design system
  app.js          i18n + shared header/footer + interactions
  img/            Optimized images
og-image.svg      Social share image
```

## Run locally
Just open `index.html` in a browser, or serve the folder:
```
npx serve .
```

## Deploy (Vercel)
This is a static site. On Vercel: **Framework Preset = Other**, no build command,
**Output / Root Directory = this folder**. No environment variables needed.
