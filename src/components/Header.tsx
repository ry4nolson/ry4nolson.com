import { useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="font-bold text-neutral-900 transition hover:text-brand-primary"
        >
          ry4nolson
        </Link>

        <nav
          className="hidden items-center gap-8 sm:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-neutral-600 transition hover:text-brand-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-neutral-600 transition hover:bg-amber-50 hover:text-brand-primary sm:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-brand-border px-4 py-3 sm:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-amber-50 hover:text-brand-primary"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
