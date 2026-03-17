import { Link } from "react-router";

export function meta() {
  return [
    { title: "Ryan Olson · ry4nolson" },
    {
      name: "description",
      content:
        "Ryan Olson's corner of the web. Projects, about, and what I'm building.",
    },
  ];
}

export default function Home() {
  return (
    <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="absolute inset-0 -top-24 bg-orange-blob pointer-events-none" aria-hidden />
      <section className="relative animate-bounce-in">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Hey, I'm Ryan
        </h1>
        <p className="mt-5 text-xl text-neutral-600">
          I make things on the web — apps, tools, and the occasional side project.
          Also run <span className="font-semibold text-brand-primary">ry4nolson LLC</span> so I can keep doing this.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-primary-light hover:shadow-lg"
          >
            See what I've built →
          </Link>
        </div>
      </section>

      <section className="relative mt-20 border-t border-neutral-200 pt-12">
        <h2 className="text-xl font-bold text-neutral-900">
          A few favorites
        </h2>
        <ul className="mt-5 space-y-3 text-neutral-600">
          <li>
            <Link to="/projects" className="font-medium text-brand-primary hover:underline">
              The Annex
            </Link>{" "}
            — Sync your Mac folders to your NAS from the menu bar. Open source.
          </li>
          <li>
            <a
              href="https://cutoverapp.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-primary hover:underline"
            >
              Cutover
            </a>{" "}
            — Migration diff for websites: missing pages, redirects, and performance in one scan.
          </li>
        </ul>
      </section>
    </div>
  );
}
