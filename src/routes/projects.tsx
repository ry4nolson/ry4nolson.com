import { data } from "react-router";
import { Link } from "react-router";
import { listChangelogSlugs } from "~/lib/changelog/loadChangelog";

export async function loader() {
  const changelogSlugs = listChangelogSlugs();
  return data({ changelogSlugs });
}

export function meta() {
  return [
    { title: "Projects · Ryan Olson" },
    {
      name: "description",
      content:
        "Things I've built: The Annex, Cutover, and more.",
    },
  ];
}

const projects = [
  {
    slug: "the-annex",
    title: "The Annex",
    description:
      "A macOS menu bar app that syncs your folders to your NAS — with optional symlink mode so files live on the NAS but feel local. Open source (GPL-3.0), pay-what-you-want support.",
    link: "https://theannex.app",
    linkLabel: "Visit site →",
    tags: ["macOS", "Swift", "NAS", "Open source"],
  },
  {
    slug: "cutover",
    title: "Cutover",
    description:
      "Website migration diff: compare old and new domains in one scan. Surfaces missing pages, broken redirects, and performance regressions before you go live. Core Web Vitals and CSV export included.",
    link: "https://cutoverapp.dev",
    linkLabel: "Check it out →",
    tags: ["React", "Migration", "QA"],
  },
];

export default function Projects({
  loaderData,
}: {
  loaderData: { changelogSlugs: string[] };
}) {
  const { changelogSlugs } = loaderData;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Projects
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Stuff I've shipped (or am still tinkering on).
      </p>

      <ul className="mt-10 space-y-6">
        {projects.map((project) => {
          const hasChangelog = changelogSlugs.includes(project.slug);
          return (
            <li
              key={project.slug}
              className="group rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-sm transition hover:border-brand-primary/50 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-neutral-900 group-hover:text-brand-primary">
                {project.title}
              </h2>
              <p className="mt-2 text-neutral-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-primary underline hover:no-underline"
                >
                  {project.linkLabel}
                </a>
                {hasChangelog && (
                  <Link
                    to={`/projects/${project.slug}/changelog`}
                    className="text-sm font-semibold text-neutral-600 underline hover:text-brand-primary"
                  >
                    Changelog
                  </Link>
                )}
                <span className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-brand-primary-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
