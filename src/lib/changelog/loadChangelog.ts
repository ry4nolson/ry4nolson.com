import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { renderMarkdown } from "./renderMarkdown";

export interface ChangelogFrontmatter {
  title?: string;
}

const CHANGELOGS_DIR = path.resolve(process.cwd(), "content/changelogs");

export function loadChangelog(projectSlug: string): { title: string; html: string } {
  const filePath = path.join(CHANGELOGS_DIR, `${projectSlug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Response("Changelog not found", { status: 404 });
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const title = (data?.title as string) ?? projectSlug;
  const html = renderMarkdown(content.trim());
  return { title, html };
}

export function listChangelogSlugs(): string[] {
  if (!fs.existsSync(CHANGELOGS_DIR)) return [];

  return fs
    .readdirSync(CHANGELOGS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
