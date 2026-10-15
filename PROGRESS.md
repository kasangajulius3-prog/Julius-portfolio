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

## To do (needs input from Julius)

- [ ] **Projects:** only the portfolio itself is listed. Add 2-3 real projects (what it does, tech, repo/demo link, a screenshot if possible).
- [ ] **Contact section:** two emails and two phone numbers are public in the source. Consider keeping one email plus LinkedIn/GitHub.
- [ ] **Share preview:** add an `og:image` and matching meta tags in `index.html`.
- [ ] **CV:** add a downloadable CV/resume link.
- [ ] **Cleanup:** `ME.JPG` in the repo root looks unused; confirm before deleting.

## Notes for next session

- Site content is data-driven; most updates only touch the arrays in `src/App.jsx`.
- Always run `npm run build` and `npm run lint` before pushing; the deploy workflow runs `npm ci` + `npm run build`.
- After pushing, check the Actions tab (or the API) to confirm the Pages deploy succeeded.
- Never commit access tokens or secrets to this repo.
