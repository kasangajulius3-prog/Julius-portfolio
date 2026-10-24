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

### 2026-10-16 (fifth session): portrait crop + CV section
- Portrait re-cropped from the original `ME.JPG` (high-res source) to remove empty space above the head: 4:5 crop, resized to 680x850 WebP (27 KB), EXIF stripped. `og-image.jpg` regenerated from the same crop (680x850); width/height attrs and OG dimensions updated. `ME.JPG` is kept in the repo as the source for now.
- Added a web "Curriculum Vitae" section, then REMOVED it at Julius's request (CV must be a downloadable PDF, not an on-page section). `CvSection.jsx`, its CSS and the "CV" nav item are gone.
- CV is now only the Download CV button in the hero (`CvButton.jsx`), hidden until `public/cv/Julius-Kasanga-CV.pdf` exists.

### 2026-10-16 (sixth session): Phases 1-3 spec (identity, projects, skills/education)
Phase 1
- Hero: name as h1, subtitle "Computer Science Student | Aspiring Software Engineer", new intro text, buttons View Projects / Download CV (hidden until the PDF exists) / Contact Me.
- About rewritten with the supplied text; badge now "Stoic | Carpe Diem".
- Contact: one primary email (kasangajulius42@gmail.com, the one previously labelled Work), LinkedIn, GitHub, intro sentence, form kept. Both phone numbers and the second email removed from the page. Contact-form mailto fallback uses the same email.
Phase 2
- `src/data/projects.js`: verified `projects` (Personal Developer Portfolio, status Completed + note "Ongoing improvements", real repo/live links) and separate `plannedProjects` (USSD admissions platform, academic performance prediction, cryptography learning toolkit). Planned ones have no links, screenshots or results and sit under a "Planned Projects" heading that says none are implemented.
- Project filters intentionally omitted (one verified project). Add when there are enough projects.
Phase 3
- Skills split into "Skills & Technologies" (Python, C++, JavaScript, HTML, CSS, React, responsive design, DSA, OS, networking, Git, GitHub, VS Code, Linux) and "Currently Learning" (Java, FastAPI, REST, system architecture, SQL, PostgreSQL, ML topics, security/cryptography topics) in `src/data/skills.js`. Placement was based on evidence in the repo and coursework; Julius should move items he has actually used.
- New sections: Currently Exploring (4 cards), Education (BSc Computer Science, Mukuba University, expected 2028, relevant coursework, certifications), Leadership & Activities (hidden while `src/data/activities.js` is empty).
- Certification listed: FNB App Academy, Python Fundamentals (name and issuer only; no date or credential link invented).
- Nav: About, Tools & Skills, Projects, Education, Contact.
- Verified: lint and build pass; key strings present in the built bundle. NOT verified: visual layout of the new sections, mobile layout, keyboard and console checks (no browser here).

### 2026-10-16 (seventh session): coursework verified
- Julius shared his 2026 results slip (screenshot, private; not stored in the repo). All 8 listed courses are completed, so the heading is now "Completed coursework" and names match the official titles (Introduction to Programming, Data Communication and Networking, Computer Architecture and Organisation). CHE110 (Chemistry) deliberately left out as not relevant.
- Grades, registrar name and the slip itself are deliberately NOT published. Optional: a general line such as "strong results in core software engineering and systems courses" if he wants it.

### 2026-10-24: analytics
- Added GoatCounter (site code `juliuskasanga`, dashboard https://juliuskasanga.goatcounter.com) as a script tag in `index.html`. Cookie-free, so no consent banner. The script skips localhost by default, so dev visits are not counted. Chosen over Google Analytics 4 for simplicity and speed; GA4 can be added later if deeper data is needed.
- Verified by Julius: visits appear on the GoatCounter dashboard.

### 2026-10-24 (eighth session): CV, privacy, activities
- Added Julius's CV at `public/cv/Julius-Kasanga-CV.pdf` (source: his LaTeX CV). The Download CV button now appears in the hero (activated by the file existing at build time). PDF metadata has no author/title. NOTE: the CV itself contains his phone number and email, so anyone can download them.
- `ME.JPG` metadata (GPS coordinates, timestamps) stripped in place; re-encoded, orientation fixed, 3024x4032, no EXIF left. The OLD version with GPS data still exists in git history (commit `b186cd8` and earlier). Removing it would need a history rewrite + force push; not done, awaiting Julius's decision. All other repo images were checked: no GPS data.
- Activities section now live with the Digital Safe CTF entry (team competitor, team ranked 5th in Zambia, taken from the CV). No challenge details or flags published.
- Certifications: added "Career Boost with Power BI and AI" (Exodus Experts, 2026, 8-hour course on AI tools, Power BI and Excel). FNB Python Fundamentals kept (from Julius's earlier spec; it is NOT on the CV; confirm).
- Education: dates now "Oct 2024 - 2029 (expected)" to match the CV. The earlier spec said 2028; changed to match the CV, confirm which is right.
- Skills updated from the CV: Java moved from Currently Learning to Skills; added Vite, ESLint, Power BI, Excel and "Cybersecurity (CTF)".

### 2026-10-24 (ninth session): CV removed from the site
- Julius felt uncomfortable publishing the CV (it has his phone number and personal details). Deleted `public/cv/Julius-Kasanga-CV.pdf`; the site no longer serves any CV file.
- The hero button is now "Request CV": it opens an email to kasangajulius42@gmail.com with subject "CV request" and a short prefilled message. Julius sends the CV manually when someone asks.
- Removed the `__HAS_CV__` build flag from `vite.config.js` and `cvUrl` from `src/data/site.js` (no longer needed).
- The PDF still exists in git history (commit `c0967a8`) and the old GPS version of `ME.JPG` in earlier commits; purging needs a history rewrite + force push, awaiting his decision.

## To do (needs input from Julius)

- [ ] **Privacy (CV + photo in git history):** `ME.JPG` is now stripped, but the old GPS version remains in git history. Decide whether to purge history (force push).

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
- [ ] Add a real screenshot per project.
- [ ] Run Lighthouse and real-device checks, then record scores here.
