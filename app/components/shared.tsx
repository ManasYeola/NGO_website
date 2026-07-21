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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--bg)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="text-[1.05rem] font-bold tracking-tight text-[var(--foreground)]">
          NGOSystems
        </Link>

        {/* Nav Links */}
        <nav className="hidden items-center gap-4 md:flex lg:gap-5" aria-label="Primary">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2 py-2 text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "border-b-2 border-[var(--brand)] text-[var(--brand)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
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
          {/* Brand + Address */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold text-white">NGOSystems</div>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              123 Impact Way, Suite 400<br />
              San Francisco, CA 94105
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">Company</h3>
            <ul className="mt-4 space-y-3">
              {["Privacy Policy", "Terms of Service", "Developers Team"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">Help</h3>
            <ul className="mt-4 space-y-3">
              {["Support", "Partners", "Workshops"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">Connect</h3>
            <div className="mt-4 flex items-center gap-3">
              {["public", "share", "photo_camera"].map((icon) => (
                <div
                  key={icon}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-gray-300">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-gray-500">© 2024 NGO Management Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
