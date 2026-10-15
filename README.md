# Julius Kasanga — Portfolio

Personal portfolio of Julius Kasanga, a Computer Science student at Mukuba University and aspiring software engineer.

**Live site:** https://kasangajulius3-prog.github.io/Julius-portfolio/

## Built with

- React 19
- Vite
- Custom CSS animations (scroll reveal, video background)
- GitHub Pages, deployed automatically by GitHub Actions on every push to `main`

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static output is written to `dist/`.

## Project structure

- `src/App.jsx` — page content; the `skills`, `projects` and `contacts` arrays at the top are the easiest places to update
- `src/App.css` / `src/index.css` — styling
- `src/useScrollReveal.js` — scroll-reveal animation hook
- `public/assets/` — background video
