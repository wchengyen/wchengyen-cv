# wchengyen-cv

Personal CV site for **Weng-Hsiang Cheng (鄭文祥)** — Senior Backend / Platform Engineer.

🌐 **Live:** https://wchengyen.github.io/wchengyen-cv/

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **GitHub Pages** for hosting (static, no server)
- **GitHub Actions** for CI/CD — every push to `main` rebuilds and deploys

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/wchengyen-cv/
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Editing the CV

All copy lives in a single file: [`src/data/resume.ts`](src/data/resume.ts).

Edit the typed `profile`, `experiences`, `projects`, `skillGroups`, `education`, `languages`, or `interests` exports. The page is fully data-driven — no JSX editing required for content changes.

## Deployment

The site is configured for a **project page** at `https://<user>.github.io/wchengyen-cv/`:

- `vite.config.ts` sets `base: '/wchengyen-cv/'`
- `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`

To deploy as a **user site** at `https://<user>.github.io/`:

1. Rename the repo to `<user>.github.io`
2. Change `base: '/'` in `vite.config.ts`

## License

© Weng-Hsiang Cheng. All rights reserved.
