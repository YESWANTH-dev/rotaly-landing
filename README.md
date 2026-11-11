# Rotaly – SaaS Landing Page

Front-end internship assignment for **Sankar Group**.
Rotaly is an invented staff-scheduling SaaS for small shops, cafés and clinics.

## Features
- Sticky navbar with smooth-scroll links, active-section highlight and mobile hamburger menu
- Hero with headline, CTA buttons and an SVG schedule illustration
- Features (3 cards), How it works (3 steps), Pricing (3 plans with monthly/yearly toggle)
- Demo request form with validation and a success message (no backend)
- Plan buttons scroll to the form and preselect that plan
- Responsive from 320px mobile to desktop; keyboard-focus styles; reduced-motion support

## Technologies
HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript (ES6). Google Fonts: Bricolage Grotesque and Source Sans 3. No frameworks or build step.

## Folder structure
```
rotaly-landing/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── favicon.svg
│   └── hero.svg
├── screenshots/        
└── README.md
```

## Run locally
1. Download or clone the repository.
2. Open `index.html` in any modern browser. Or run `npx serve .` / VS Code Live Server.

## Deploy
Push to GitHub, then enable **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root). Netlify or Vercel drag-and-drop also works.

## Design notes (5–8 lines)
Design choices and challenges

1. I invented Rotaly, a staff-scheduling SaaS for small shops, cafés and clinics, so the page content feels specific instead of generic.
2. I used a deep teal and signal-yellow palette with Bricolage Grotesque for headings and Source Sans 3 for body text, keeping contrast high and the hierarchy clear.
3. Colors, fonts and spacing are CSS variables in one place, which keeps the whole page consistent.
4. The layout uses CSS Grid and Flexbox with one 900px breakpoint. Columns stack on mobile and the navbar becomes a hamburger menu.
5. The hero illustration is a lightweight SVG schedule grid, so it stays sharp on every screen and loads fast.
6. Challenge: highlighting the current nav link while scrolling. I solved it with an IntersectionObserver instead of scroll-position math.
7. Challenge: form validation. The form checks name and email, shows inline errors, then shows a success message, and the plan buttons preselect the chosen plan.
8. I used AI tools for assistance and I'm ready to explain and demo any part of the code.