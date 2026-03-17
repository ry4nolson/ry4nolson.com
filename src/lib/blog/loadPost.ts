import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface PostFrontmatter {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Post {
  frontmatter: PostFrontmatter;
  body: string;
}

const POSTS_DIR = path.resolve(process.cwd(), "content/posts");

export function loadPost(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Response("Post not found", { status: 404 });
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const frontmatter = data as PostFrontmatter;
  if (
    frontmatter.date &&
    (frontmatter.date as unknown) instanceof Date
  ) {
    frontmatter.date = (
      frontmatter.date as unknown as Date
    ).toISOString().slice(0, 10);
  }

  return { frontmatter, body: content };
}
