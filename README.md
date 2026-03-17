# ry4nolson.com

Personal portfolio for **Ryan Olson** (ry4nolson LLC). Built with React 19, React Router v7 (SSR), Tailwind CSS, Vite, and Netlify.

## Stack

- **React 19** + **React Router v7** with SSR
- **Tailwind CSS** for styling
- **Vite** with `@react-router/dev/vite`
- **Netlify** hosting via `@netlify/vite-plugin-react-router`
- **Markdown** for optional project changelogs in `content/changelogs/*.md` (parsed at build time with gray-matter + marked)
- **TypeScript** throughout

## Structure

- **Home** — Intro, highlights, link to Projects
- **About** — Bio, ry4nolson LLC, what I build, contact
- **Projects** — List/cards for projects (e.g. [The Annex](https://theannex.app), [Cutover](https://cutoverapp.dev)); each project can optionally have a **Changelog** at `/projects/:slug/changelog`

## Run locally

```bash
npm install
npm run dev
```

Dev server runs at [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output: `build/client` (static assets) and `build/server` (SSR entry). Preview the production build:

```bash
npm run preview
```

## Deploy to Netlify

1. Connect the repo to Netlify (GitHub/GitLab/Bitbucket).
2. Build settings (usually auto-detected from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `build/client`
   - **Functions directory:** `netlify/functions` (optional; for serverless later)
3. Deploy.

Netlify's React Router plugin handles SSR and redirects.

## Project changelogs

- Add a `.md` file in `content/changelogs/` named by project slug (e.g. `cutover.md`, `the-annex.md`).
- Optional frontmatter: `title` (page heading; defaults to the filename).
- The Projects page shows a **Changelog** link for each project that has a matching file. No file = no link.
- Content is Markdown, parsed at build time.

## Optional: Now / Uses page

To add a "Now" or "Uses" page, add a route in `src/routes.ts` and a corresponding file in `src/routes/` (e.g. `route("now", "routes/now.tsx")`).
