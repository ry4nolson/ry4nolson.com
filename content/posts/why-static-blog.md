---
title: Why a static blog?
slug: why-static-blog
date: 2025-03-16
excerpt: Keeping the blog as Markdown in the repo keeps things simple and fast.
---

A lot of personal sites use a headless CMS or a hosted blog platform. For this one I wanted posts as **Markdown files in the repo** — no database, no CMS, no extra services.

**Benefits**

1. **Version control** — Every edit is a commit. Easy to review, revert, or branch.
2. **Portability** — Content is just files. Move hosts or generators anytime.
3. **Speed** — Posts are read and rendered at build time. No runtime lookups.
4. **Simplicity** — One repo, one build. No API keys or admin UIs to maintain.

The tradeoff is that adding or editing a post means changing the repo and redeploying. For a low-volume personal blog that’s fine. If I ever need drafts or non-technical editors, I can add a CMS later; the frontmatter and Markdown pipeline would still work.

**How it’s wired**

- Posts live in `content/posts/*.md` with YAML frontmatter: `title`, `slug`, `date`, `excerpt`.
- [gray-matter](https://github.com/jonschlinkert/gray-matter) parses frontmatter; [marked](https://github.com/markedjs/marked) turns the body into HTML.
- Route loaders run at build/request time: the blog index loader lists posts, and the `blog/:slug` loader loads one post by slug and returns HTML. React Router’s SSR handles the rest.

That’s it. Simple and good enough to ship.
