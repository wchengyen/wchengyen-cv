# wchengyen-cv

Personal CV site for **ChengYen Wang (王正彥)** — Technical Account Manager @ NWCD (AWS China Region).

🌐 **Live:** https://wchengyen.github.io/wchengyen-cv/

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **GitHub Pages** for hosting (static, no server)
- **GitHub Actions** for CI/CD — every push to `main` rebuilds and deploys

## Bilingual

The site supports **EN** and **中** (Traditional Chinese). Switch via the segmented control in the header.

- Translations live in [`src/data/resume.en.ts`](src/data/resume.en.ts) and [`src/data/resume.zh.ts`](src/data/resume.zh.ts)
- UI strings live in each language file's `ui` export
- Language preference is persisted in `localStorage` and synced to `<html lang="…">`

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

All copy lives in two files (one per language): [`src/data/resume.en.ts`](src/data/resume.en.ts) and [`src/data/resume.zh.ts`](src/data/resume.zh.ts).

Edit the typed `profile`, `experiences`, `skillGroups`, `certificates`, `projects`, `education`, or `languages` exports. The page is fully data-driven — no JSX editing required for content changes. To add a third language, see [`src/data/index.ts`](src/data/index.ts) and the type definitions in [`src/data/types.ts`](src/data/types.ts).

## Deployment

Deployed via **GitHub Pages** with the `gh-pages` branch (the classic, no-config-needed approach).

**One-time setup in the GitHub UI:**

1. Repo → **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `gh-pages` / `(root)`
4. Click **Save**

After that, every push to `main` triggers `.github/workflows/deploy.yml`, which builds `dist/` and pushes it to the `gh-pages` branch. The site is live at:

**🌐 https://wchengyen.github.io/wchengyen-cv/**

### Project site vs. user site

The repo is configured as a **project site** at `https://<user>.github.io/wchengyen-cv/`:

- `vite.config.ts` sets `base: '/wchengyen-cv/'`

To deploy as a **user site** at `https://<user>.github.io/`:

1. Rename the repo to `<user>.github.io`
2. Change `base: '/'` in `vite.config.ts`

## License

© ChengYen Wang. All rights reserved.
