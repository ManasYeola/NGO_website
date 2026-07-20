import Link from "next/link";

export const highlights = [
  {
    title: "NGO operations",
    description: "Streamlined management tools for teams coordinating people, programs, and reporting.",
  },
  {
    title: "Visibility and trust",
    description: "Story-led pages that communicate impact clearly to donors, partners, and communities.",
  },
  {
    title: "Built to scale",
    description: "A modular frontend that can grow into testimonials, galleries, timelines, and contact flows.",
  },
];

export const stats = [
  { value: "12+", label: "Years of service" },
  { value: "180", label: "Partner NGOs" },
  { value: "24/7", label: "Support mindset" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Photos", href: "#photos" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact Us", href: "#contact" },
];

export type FooterLink = {
  label: string;
  href: string;
};

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(244,239,230,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 group-hover:-rotate-6">
            NGO
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              Management Systems
            </span>
            <span className="font-serif text-2xl font-bold text-[var(--foreground)]">
              CivicBridge
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)] shadow-sm backdrop-blur">
          Designed for NGO impact and trust
        </div>
        <div className="space-y-5">
          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            A modern frontend for organizations that move communities forward.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            This first build focuses on the home experience from the PRD: a strong header,
            mission-led hero, clear section hierarchy, and a visual language that can expand
            into testimonials, photos, timeline storytelling, and contact.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
          >
            Start a conversation
          </a>
          <a
            href="#highlights"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            See what we build
          </a>
        </div>

        <div className="grid gap-4 pt-2 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-3xl px-5 py-4">
              <div className="text-3xl font-bold text-[var(--foreground)]">{stat.value}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 top-12 h-32 w-32 rounded-full bg-[rgba(14,111,92,0.12)] blur-3xl" />
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[1.6rem] bg-[linear-gradient(160deg,rgba(14,111,92,0.92),rgba(22,79,67,0.92))] p-6 text-white shadow-2xl shadow-emerald-900/20">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Featured story
              </p>
              <h2 className="mt-12 max-w-xs font-serif text-4xl font-bold leading-tight">
                Clear structure for every page the organization needs.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
                The next steps will split these ideas into reusable sections and then dedicated
                pages for testimonials, photos, timeline, and contact.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.6rem] bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                  Visual direction
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-2 rounded-full bg-[rgba(14,111,92,0.18)]">
                    <div className="h-2 w-[78%] rounded-full bg-[var(--brand)]" />
                  </div>
                  <div className="h-2 rounded-full bg-[rgba(215,163,63,0.18)]">
                    <div className="h-2 w-[62%] rounded-full bg-[var(--accent)]" />
                  </div>
                  <div className="h-2 rounded-full bg-[rgba(19,35,28,0.08)]">
                    <div className="h-2 w-[48%] rounded-full bg-[var(--foreground)]" />
                  </div>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[var(--border)] bg-[rgba(255,255,255,0.74)] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                  Next milestone
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Build the header navigation and add the first dedicated page slices in the next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section id="highlights" className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
          What we do
        </p>
        <h2 className="font-serif text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
          A structure that matches the PRD without locking us into a generic template.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <article
            key={item.title}
            className="glass-card group rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(14,111,92,0.12)] text-lg font-bold text-[var(--brand)]">
              0{index + 1}
            </div>
            <h3 className="mt-6 font-serif text-2xl font-bold text-[var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]" id="testimonials">
      <article className="glass-card rounded-[2rem] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
          Social proof
        </p>
        <blockquote className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
          &ldquo;The right website should make the organization feel credible, warm, and easy to
          understand in the first 10 seconds.&rdquo;
        </blockquote>
        <p className="mt-5 text-base leading-7 text-[var(--muted)]">
          In the next steps we can replace this with real testimonials, then turn the block into a
          dedicated testimonials page or rotating card carousel.
        </p>
      </article>

      <aside className="glass-card rounded-[2rem] p-8" id="contact">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
          Contact preview
        </p>
        <div className="mt-6 space-y-4 text-[var(--muted)]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
              Email
            </div>
            <div className="mt-1">hello@civicbridge.org</div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
              Phone
            </div>
            <div className="mt-1">+1 (555) 018-2026</div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
              Availability
            </div>
            <div className="mt-1">Mon to Fri, 9:00 AM to 6:00 PM</div>
          </div>
        </div>
        <a
          href="mailto:hello@civicbridge.org"
          className="mt-8 inline-flex items-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Email us
        </a>
      </aside>
    </section>
  );
}

export function HomeFooter({ links = navItems }: { links?: FooterLink[] } = {}) {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(255,255,255,0.45)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <div className="font-serif text-2xl font-bold text-[var(--foreground)]">CivicBridge</div>
          <p className="mt-1 text-sm text-[var(--muted)]">
            NGO management systems and digital storytelling.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm font-medium text-[var(--muted)]">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-[var(--foreground)]">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}