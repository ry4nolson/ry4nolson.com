import { data } from "react-router";
import { Link } from "react-router";
import { listChangelogSlugs } from "~/lib/changelog/loadChangelog";
import { useEffect, useMemo, useState } from "react";

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

const THEANNEX_SCREENSHOTS: { src: string; alt: string }[] = [
  {
    src: "/screenshots/theannex/GeneralTab.png",
    alt: "General tab — devices and status",
  },
  {
    src: "/screenshots/theannex/SyncFoldersTab.png",
    alt: "Sync Folders tab — sync pairs and controls",
  },
  {
    src: "/screenshots/theannex/ActivityLogTab.png",
    alt: "Activity Log tab — searchable sync log",
  },
  {
    src: "/screenshots/theannex/StatisticsTab.png",
    alt: "Statistics tab — charts and transfer metrics",
  },
  {
    src: "/screenshots/theannex/AdvancedTab.png",
    alt: "Advanced tab — scheduling and rsync options",
  },
  {
    src: "/screenshots/theannex/WhatsNewTab.png",
    alt: "What's New tab — changelog inside the app",
  },
  {
    src: "/screenshots/theannex/AboutTab.png",
    alt: "About tab — version and update controls",
  },
];

export default function Projects({
  loaderData,
}: {
  loaderData: { changelogSlugs: string[] };
}) {
  const { changelogSlugs } = loaderData;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setLightboxIndex(
          (i) => (i - 1 + THEANNEX_SCREENSHOTS.length) % THEANNEX_SCREENSHOTS.length
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex(
          (i) => (i + 1) % THEANNEX_SCREENSHOTS.length
        );
      }
    }

    // Reduced motion doesn't disable keyboard navigation; keep accessibility consistent.
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, prefersReducedMotion]);

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

              {project.slug === "the-annex" && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-neutral-800">
                    Screenshots
                  </p>

                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {THEANNEX_SCREENSHOTS.slice(0, 4).map((shot, i) => (
                      <button
                        key={shot.src}
                        type="button"
                        onClick={() => {
                          setLightboxIndex(i);
                          setLightboxOpen(true);
                        }}
                        className="relative overflow-hidden rounded-lg border border-neutral-200 bg-white transition hover:border-brand-primary/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                        aria-label={`View screenshot: ${shot.alt}`}
                      >
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          className="h-20 w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setLightboxIndex(0);
                        setLightboxOpen(true);
                      }}
                      className="text-sm font-semibold text-brand-primary underline decoration-brand-primary transition hover:no-underline"
                    >
                      View all →
                    </button>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-900/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="The Annex screenshot viewer"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false);
          }}
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
            <div className="relative aspect-[16/10] w-full bg-neutral-100">
              <img
                src={THEANNEX_SCREENSHOTS[lightboxIndex]?.src}
                alt={
                  THEANNEX_SCREENSHOTS[lightboxIndex]?.alt ??
                  "Screenshot"
                }
                className="h-full w-full object-contain"
              />

              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute right-3 top-3 rounded-lg bg-white/90 px-3 py-2 text-sm font-semibold text-neutral-800 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                aria-label="Close"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (i) => (i - 1 + THEANNEX_SCREENSHOTS.length) % THEANNEX_SCREENSHOTS.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg bg-white/90 p-2 text-neutral-800 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                aria-label="Previous screenshot"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (i) => (i + 1) % THEANNEX_SCREENSHOTS.length
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-white/90 p-2 text-neutral-800 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                aria-label="Next screenshot"
              >
                →
              </button>
            </div>

            <div className="flex flex-col gap-2 border-t border-neutral-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-neutral-800">
                {THEANNEX_SCREENSHOTS[lightboxIndex]?.alt}
              </p>
              <p className="text-xs text-neutral-500">
                ESC to close · ←/→ to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
