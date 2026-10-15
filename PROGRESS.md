# Progress Log

Running record of work on this portfolio so anyone (including a future Claude session) can pick up where things left off.

## Project snapshot

- **Repo:** https://github.com/kasangajulius3-prog/Julius-portfolio
- **Live site:** https://kasangajulius3-prog.github.io/Julius-portfolio/
- **Stack:** React 19, Vite 8, react-icons, custom CSS (no UI framework)
- **Deploy:** GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages on every push to `main`
- **Vite base path:** `/Julius-portfolio/` (set in `vite.config.js`; use `import.meta.env.BASE_URL` for public assets)
- **Where content lives:** the `skills`, `projects` and `contacts` arrays at the top of `src/App.jsx`
- **Commands:** `npm ci`, `npm run dev`, `npm run build`, `npm run lint`

## Done

### 2026-10-16
- Reviewed the whole site (source, workflow, config).
- Added three skill cards: Networking, Linux & Operating Systems, Cybersecurity, so skills match the About text.
- Rewrote `README.md` (description, live link, stack, deploy notes, structure).
- Renamed the package from `my-app` to `julius-portfolio` (`package.json` and `package-lock.json`).
- Added this `PROGRESS.md`.
- Verified `npm run build` and `npm run lint` pass.

### 2026-10-16 (second session): Phase 4 + SEO from the Phase 4-6 spec
Audit findings: video is VP9 854x480, 691 KB (already small, kept); `portrait.jpg` and `ME.JPG` contain phone GPS EXIF data; no mobile menu; no poster/fallback for the video; no canonical, robots.txt, sitemap or JSON-LD.
- Added `src/components/BackgroundVideo.jsx`: WebP poster (9 KB) always shown, video skipped for reduced-motion and Save-Data users, paused when tab is hidden, `preload="metadata"`.
- Added `src/components/Navbar.jsx`: animated hamburger, `aria-expanded`/`aria-controls`, closes on Escape (focus returns to button) and on link click, closed items not focusable (`visibility`), active-section highlight via IntersectionObserver.
- Extracted `StoicIcon` component; moved hook to `src/hooks/useScrollReveal.js`.
- Portrait converted to WebP (110 KB to 31 KB), EXIF/GPS stripped, width/height and `fetchpriority="high"` added.
- Responsive polish: `clamp()` hero title, 44px touch targets, `100lvh` background, no horizontal overflow, stacked hero buttons under 420px.
- SEO: title, description, canonical, robots, Open Graph, Twitter card, theme color, favicon via `%BASE_URL%`, Person JSON-LD, `robots.txt`, `sitemap.xml`, `og-image.jpg` (EXIF-stripped).
- Verified: `npm run lint` and `npm run build` pass; built HTML has correct `/Julius-portfolio/` paths, no localhost; JSON-LD and sitemap parse.
- NOT verified (no browser/Lighthouse in this environment): visual check at each viewport, keyboard testing, console errors, Lighthouse scores, Rich Results validation.

### 2026-10-16 (third session): Phase 5 component architecture
- `App.jsx` is now a thin shell (351 lines to ~40). Components: Navbar, BackgroundVideo, Hero, About, Skills, Projects, ProjectCard, Contact, Footer, StoicIcon in `src/components/`.
- Content moved to `src/data/skills.js`, `projects.js`, `contacts.js` (edit these to change content).
- CSS split into `src/styles/global.css`, `components.css`, `responsive.css` (imported in that order in `App.jsx`; do not reorder, cascade depends on it). Built CSS size unchanged (13.32 kB), so nothing was lost.
- Formatted with Prettier (run via `npx prettier`, not added as a dependency). Lint and build pass.
- Not done: no unused dependencies found to remove; TypeScript intentionally not added.

### 2026-10-16 (fourth session): Phase 6
- Project cards support `status` (Completed / In Progress / Planned) and optional `screenshot`; only existing links render. Portfolio is marked "In Progress" (edit in `src/data/projects.js`). No screenshot exists yet, none was invented.
- Back-to-top button (`BackToTop.jsx`): appears after the hero leaves the viewport via IntersectionObserver, smooth scroll unless reduced-motion, hidden from tab order while invisible.
- Download CV (`CvButton.jsx`): shows only if `public/cv/Julius-Kasanga-CV.pdf` exists at build time (`__HAS_CV__` in `vite.config.js`). Tested with a temporary file (button appears, PDF copied to dist), then removed. No CV has been added.
- Contact form (`ContactForm.jsx`): labelled fields, client validation with `aria-invalid`/error text, honeypot spam field, loading/success/failure states. NOT connected to a delivery service: without `VITE_CONTACT_ENDPOINT` it opens the visitor's email app (mailto) and says nothing was sent until they press send. Never claims delivery.
- Contrast: footer alias text raised from #71717a to #8f8f99 (was about 4.1:1). Other key colors computed at 6.7:1 or higher against the dark backgrounds (approximate, not measured on the rendered page).

## To do (needs input from Julius)

- [ ] **Privacy:** `ME.JPG` (3024x4032, GPS EXIF) is still in the repo and git history. Delete it and consider the history exposed.

- [ ] **Projects:** only the portfolio itself is listed. Add 2-3 real projects (what it does, tech, repo/demo link, a screenshot if possible).
- [ ] **Contact section:** two emails and two phone numbers are public in the source. Consider keeping one email plus LinkedIn/GitHub.
- [ ] **CV:** add a downloadable CV/resume link.
- [ ] **Cleanup:** `ME.JPG` in the repo root looks unused; confirm before deleting.

## Notes for next session

- Site content is data-driven; most updates only touch the arrays in `src/App.jsx`.
- Always run `npm run build` and `npm run lint` before pushing; the deploy workflow runs `npm ci` + `npm run build`.
- After pushing, check the Actions tab (or the API) to confirm the Pages deploy succeeded.
- Never commit access tokens or secrets to this repo.

## Remaining from the Phase 4-6 spec

- [ ] Connect the contact form: create a Formspree/Web3Forms form, add its public URL as `VITE_CONTACT_ENDPOINT` (GitHub repo Settings > Variables, and pass it in the workflow build step), then send a real test message.
- [ ] Add the real CV PDF at `public/cv/Julius-Kasanga-CV.pdf`.
- [ ] Add a real screenshot per project.
- [ ] Run Lighthouse and real-device checks, then record scores here.
