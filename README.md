# ry4nolson.com

Personal portfolio and blog for **Ryan Olson** (ry4nolson LLC). Built with React 19, React Router v7 (SSR), Tailwind CSS, Vite, and Netlify.

## Stack

- **React 19** + **React Router v7** with SSR
- **Tailwind CSS** for styling
- **Vite** with `@react-router/dev/vite`
- **Netlify** hosting via `@netlify/vite-plugin-react-router`
- **Markdown** blog posts in `content/posts/*.md` (parsed at build time with gray-matter + marked)
- **TypeScript** throughout

## Structure

- **Home** — Intro, highlights, links to Projects and Blog
- **About** — Bio, ry4nolson LLC, what I build, contact
- **Projects** — List/cards for projects (e.g. The Annex, Cutover)
- **Blog** — Index at `/blog`; each post at `/blog/:slug` from Markdown in the repo

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

Netlify’s React Router plugin handles SSR and redirects. No extra config needed for the blog or static routes.

## Blog posts

- Add a `.md` file in `content/posts/` with frontmatter: `title`, `slug`, `date`, `excerpt`.
- The blog index lists all posts (newest first); each post is available at `/blog/<slug>`.
- No CMS — content is read from the repo at build time.

## Optional: Now / Uses page

To add a “Now” or “Uses” page (what you’re working on / tools you use), add a route in `src/routes.ts` and a corresponding file in `src/routes/` (e.g. `route("now", "routes/now.tsx")`).
