import { data } from "react-router";
import { Link } from "react-router";
import { listPosts } from "~/lib/blog/listPosts";
import type { PostFrontmatter } from "~/lib/blog/loadPost";

export async function loader() {
  const posts = listPosts();
  return data({ posts });
}

export function meta() {
  return [
    { title: "Blog · Ryan Olson" },
    {
      name: "description",
      content: "Software, side projects, and whatever’s on my mind.",
    },
  ];
}

export default function BlogIndex({
  loaderData,
}: {
  loaderData: { posts: PostFrontmatter[] };
}) {
  const { posts } = loaderData;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Blog
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Software, side projects, and whatever’s on my mind.
      </p>

      {posts.length === 0 ? (
        <p className="mt-10 text-neutral-500">No posts yet. Check back soon (or nag me to write one).</p>
      ) : (
        <ul className="mt-10 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="block rounded-2xl border-2 border-neutral-200 bg-white p-5 shadow-sm transition hover:border-brand-primary/50 hover:shadow-lg"
              >
                <h2 className="text-lg font-bold text-neutral-900 hover:text-brand-primary">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                <time
                  dateTime={post.date}
                  className="mt-2 block text-xs text-neutral-500"
                >
                  {new Date(post.date + "T00:00:00").toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
