import { Link } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-600">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/"
              className="font-bold text-brand-primary transition hover:text-brand-primary-light"
            >
              ry4nolson
            </Link>
            <p className="mt-1 text-sm text-neutral-500">
              © {year} Ryan Olson · ry4nolson LLC
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-1 text-sm"
            aria-label="Footer navigation"
          >
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-neutral-500 transition hover:text-brand-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
