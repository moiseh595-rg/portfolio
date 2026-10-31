# Developer Portfolio — MUGISHA MOISE

Bilingual (English/French) responsive personal portfolio built with HTML, CSS and JavaScript.

## Main pages

- `index.html` / `fr/index.html` — Home
- `work.html` / `fr/work.html` — Project overview
- `about.html` / `fr/about.html` — About
- `cv.html` / `fr/cv.html` — CV and downloads
- `contact.html` / `fr/contact.html` — Contact
- `coming-soon.html` / `fr/coming-soon.html` — Java project preview

## Projects

1. Chuck Norris — academic HTML/CSS website (`projects/project-01.html`)
2. Linux — installation and system management (`projects/project-02.html`)
3. Java programming — Coming Soon until the project is ready (`projects/project-03.html`)
4. The Alchemist’s Legacy / L’Héritage de l’Alchimiste — collaborative escape-game showcase (`projects/project-04.html`)

Each case study has an equivalent page in `fr/projects/`. The escape-game showcase is published at https://moiseh595-rg.github.io/escape-game/ .

## Site assets

- `css/style.css`, `css/responsive.css`, `css/animations.css` — shared styles
- `js/main.js` — navigation and image interactions
- `images/` — authentic portfolio and project imagery
- `favicon/` — site branding
- `documents/` — CV and Linux documentation

## Publishing and maintenance

Publish from the repository root with GitHub Pages. Keep the English and French project lists synchronized when adding projects. Check local links, responsive layouts, image alt text, and keyboard navigation after each update. Do not publish collaborators’ names without permission.

## Premium update (Oct 2026)
- New `css/premium.css` and `js/premium.js` (loaded last on every page; remove the two lines to undo).
- New MONETA case study: `projects/project-05.html` and `fr/projects/project-05.html`, with demo screenshots in `images/projects/moneta/` (fictional data).
- Projects reordered by impact: MONETA, Alchemist's Legacy, Rubik's Cube (now linked to its finished page), Linux, Chuck Norris. Nothing removed. `coming-soon.html` is kept but no longer linked.
- MONETA is marked "in development, not yet published". After deploying, add the live link in project-05 (EN + FR) and change the badge.
- Fonts: Inter still loads from Google Fonts; falls back to system fonts offline.

## How to edit (handover)
- **Project order & pager:** projects run 05 MONETA → 04 Alchemist → 03 Rubik's → 02 Linux → 01 Chuck Norris. The pager at the bottom of each `projects/project-0N.html` (and the `fr/` twin) links previous/next. To add a project: copy a project page in both languages, add a card to `work.html`/`fr/work.html`/`index.html`/`fr/index.html`, then update the `<nav class="pager">` of its neighbours.
- **Language:** `js/lang.js`. Home pages follow the browser language on first visit; the EN/FR switch is remembered and keeps the equivalent page. Deep links are never redirected unless the visitor chose a language.
- **Design:** `css/premium.css` (loaded last). Colors are variables at its top.
- **Footer navigation** is on every page; update contact links there and in `contact.html`.
- **Publish:** upload the folder contents to GitHub Pages (or any static host).
- `coming-soon.html` is no longer linked; kept so nothing is deleted.
