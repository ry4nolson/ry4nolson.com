import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function renderMarkdown(markdown: string): string {
  const result = marked.parse(markdown);
  if (typeof result === "string") return result;
  throw new Error("Unexpected async markdown rendering");
}
