import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { PostFrontmatter } from "./loadPost";

const POSTS_DIR = path.resolve(process.cwd(), "content/posts");

export function listPosts(): PostFrontmatter[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts: PostFrontmatter[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data } = matter(raw);
    const fm = data as PostFrontmatter;
    if (fm.date && (fm.date as unknown) instanceof Date) {
      fm.date = (fm.date as unknown as Date).toISOString().slice(0, 10);
    }
    posts.push(fm);
  }

  posts.sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));
  return posts;
}
