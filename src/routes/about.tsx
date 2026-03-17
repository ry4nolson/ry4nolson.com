export function meta() {
  return [
    { title: "About · Ryan Olson" },
    {
      name: "description",
      content:
        "Who I am, what I build, and how to say hi.",
    },
  ];
}

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        About
      </h1>

      <div className="prose-brand mt-8 prose prose-lg">
        <p>
          I'm Ryan. I build stuff on the web and run{" "}
          <strong className="text-brand-primary">ry4nolson LLC</strong> so I can keep doing it.
          Based in the US, mostly React/TypeScript, and I like it when things are clear and actually work.
        </p>
        <p>
          I'd rather ship something useful than over-engineer the perfect thing.
          So: web apps, dashboards, migration tools, project hubs, and the occasional static site or blog (like this one).
        </p>

        <h2 className="mt-10 text-xl font-bold text-neutral-900">
          The stack (roughly)
        </h2>
        <ul>
          <li>React, Node, TypeScript — the usual suspects</li>
          <li><a href="https://cutoverapp.dev" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-primary underline hover:no-underline">Cutover</a> — compare old vs new during a site migration so you don’t break anything</li>
          <li><a href="https://theannex.app" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-primary underline hover:no-underline">The Annex</a> — macOS menu bar app that syncs your Mac to your NAS (open source, optional support)</li>
          <li>Netlify, Vercel, boring old servers — whatever gets it out the door</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-neutral-900">
          Say hi
        </h2>
        <p>
          <a
            href="mailto:hello@ry4nolson.com"
            className="font-medium text-brand-primary underline hover:no-underline"
          >
            hello@ry4nolson.com
          </a>
          {" "}— for work, collabs, or just to chat. I usually reply within a few days.
        </p>
      </div>
    </div>
  );
}
