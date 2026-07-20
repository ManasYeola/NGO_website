"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Photos", href: "/photos" },
  { label: "Timeline", href: "/timeline" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--border)]" style={{ boxShadow: "var(--shadow-sm)" }}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[var(--foreground)] tracking-tight">
          NGOSystems
        </Link>

        {/* Nav Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  isActive
                    ? "text-[var(--brand)] bg-blue-50"
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          id="nav-get-started"
          className="inline-flex items-center rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[var(--brand-dark)]"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold text-white">NGOSystems</div>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Elevating social impact through professional management systems and human-centric design.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {["public", "share", "group"].map((icon) => (
                <div
                  key={icon}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-gray-300">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">Platform</h3>
            <ul className="mt-4 space-y-3">
              {["Features", "Security", "Integrations", "Partners"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">Support</h3>
            <ul className="mt-4 space-y-3">
              {["Support Center", "Training", "Documentation", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">Stay updated with impact stories.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                id="footer-email"
                type="email"
                placeholder="Email"
                className="flex-1 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-[var(--teal)] focus:ring-1 focus:ring-[var(--teal)] transition-colors"
              />
              <button
                type="submit"
                className="rounded-lg bg-[var(--teal)] px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
              >
                send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} NGOSystems. All rights reserved.</p>
          <p className="text-xs text-gray-500">123 Impact Way, Suite 400, San Francisco, CA 94105</p>
        </div>
      </div>
    </footer>
  );
}
