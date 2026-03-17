import { data } from "react-router";
import { Link } from "react-router";
import { loadPost } from "~/lib/blog/loadPost";
import { renderMarkdown } from "~/lib/blog/renderMarkdown";
import { listPosts } from "~/lib/blog/listPosts";
import type { PostFrontmatter } from "~/lib/blog/loadPost";

type LoaderData = {
  meta: PostFrontmatter;
  html: string;
  related: PostFrontmatter[];
};

export async function loader({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params.slug;
  if (!slug) throw new Response("Not found", { status: 404 });

  const post = loadPost(slug);
  const html = renderMarkdown(post.body);

  const allPosts = listPosts();
  const related = allPosts
    .filter((p: PostFrontmatter) => p.slug !== slug)
    .slice(0, 3);

  return data({
    meta: post.frontmatter,
    html,
    related,
  });
}

export function meta({ data: loaderData }: { data: LoaderData | undefined }) {
  if (!loaderData) return [{ title: "Post not found · Ryan Olson" }];
  const m = loaderData.meta;
  return [
    { title: `${m.title} · Ryan Olson` },
    { name: "description", content: m.excerpt || m.title },
  ];
}

export default function BlogPost({
  loaderData,
}: {
  loaderData: LoaderData;
}) {
  const { html, related, meta: postMeta } = loaderData;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm text-neutral-500">
        <Link to="/blog" className="font-medium text-brand-primary hover:underline">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span>{postMeta.title}</span>
      </p>

      <article
        className="prose-brand mt-6 prose prose-neutral max-w-none
          prose-headings:font-bold prose-headings:text-neutral-900
          prose-h2:mt-8 prose-h2:mb-2
          prose-h3:mt-6 prose-h3:mb-1.5
          prose-p:my-2 prose-p:leading-7
          prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline
          prose-ul:pl-6 prose-ol:pl-6
          prose-code:bg-amber-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-neutral-900 prose-pre:text-white prose-pre:rounded-xl
          [&_pre_code]:bg-transparent [&_pre_code]:p-0
        "
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {related.length > 0 && (
        <section className="mt-12 border-t border-brand-border pt-8">
          <h2 className="text-lg font-bold text-neutral-900">
            More posts
          </h2>
          <ul className="mt-4 space-y-2">
            {related.map((p: PostFrontmatter) => (
              <li key={p.slug}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="text-neutral-600 hover:text-brand-primary"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="mt-8 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
        Published{" "}
        {new Date(postMeta.date + "T00:00:00").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </footer>
    </div>
  );
}
