import { data } from "react-router";
import { Link } from "react-router";
import { loadChangelog } from "~/lib/changelog/loadChangelog";

type LoaderArgs = { params: { projectSlug?: string } };

export async function loader({ params }: LoaderArgs) {
  const slug = params.projectSlug;
  if (!slug) throw new Response("Not found", { status: 404 });

  const { title, html } = loadChangelog(slug);
  return data({ projectSlug: slug, title, html });
}

export function meta({ data: loaderData }: { data: { title: string } | undefined }) {
  if (!loaderData) return [{ title: "Changelog · Ryan Olson" }];
  return [{ title: `${loaderData.title} · Ryan Olson` }];
}

export default function ChangelogPage({
  loaderData,
}: {
  loaderData: { projectSlug: string; title: string; html: string };
}) {
  const { title, html } = loaderData;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm text-neutral-500">
        <Link to="/projects" className="font-medium text-brand-primary hover:underline">
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span>{title}</span>
      </p>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
        {title}
      </h1>

      <article
        className="prose-brand mt-8 prose prose-neutral max-w-none
          prose-headings:font-bold prose-headings:text-neutral-900
          prose-h2:mt-8 prose-h2:mb-2 prose-h2:text-xl
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
    </div>
  );
}
