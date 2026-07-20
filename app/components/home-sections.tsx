import Image from "next/image";
import Link from "next/link";

/* ─── Hero Section ──────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="bg-white pt-16 pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--brand)] mb-8">
            <span className="material-symbols-outlined text-[14px]">public</span>
            Global NGO Impact Platform
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Advancing Global NGO Impact
            <br />
            Through{" "}
            <span className="text-[var(--brand)]">Digital Rigor.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            We bridge the gap between world-class software engineering and boots-on-the-ground
            social change. Professional systems designed for those who change the world.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              id="hero-partner-cta"
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[var(--brand-dark)] hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
            <Link
              id="hero-impact-cta"
              href="/timeline"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-medium)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-150 hover:bg-gray-50 hover:-translate-y-0.5"
            >
              View Our Impact
            </Link>
          </div>

          {/* Meta stats */}
          <div className="mt-10 flex items-center gap-10 pb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Established</div>
              <div className="mt-1 text-base font-bold text-[var(--foreground)]">2014</div>
            </div>
            <div className="h-8 w-px bg-[var(--border)]" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Reach</div>
              <div className="mt-1 text-base font-bold text-[var(--foreground)]">Global</div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Strip */}
      <div className="mt-0 w-full overflow-hidden">
        <div className="flex gap-3 px-6 lg:px-10 mx-auto max-w-7xl pb-0">
          {[
            { src: "/ngo_workshop.png", alt: "Community workshop and training session" },
            { src: "/ngo_dashboard.png", alt: "NGO data analytics dashboard" },
            { src: "/ngo_field.png", alt: "Field workers with technology" },
          ].map((img, i) => (
            <div
              key={i}
              className="relative h-64 flex-1 overflow-hidden rounded-2xl bg-gray-100 lg:h-80"
              style={{ minWidth: 0 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ─────────────────────────────────────────────────── */
export function AboutSection() {
  const values = [
    { icon: "verified", label: "Integrity" },
    { icon: "lightbulb", label: "Innovation" },
    { icon: "public", label: "Impact" },
  ];

  return (
    <section className="bg-[var(--bg-alt)] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              About NGO Management Systems
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              We are dedicated to bridging the gap between world-class software engineering and
              boots-on-the-ground social change. Our mission is to provide NGOs with the digital
              infrastructure they need to maximize their impact and streamline operations globally.
            </p>

            {/* Values */}
            <div className="mt-8 flex items-center gap-10">
              {values.map((v) => (
                <div key={v.label} className="flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-3xl text-[var(--brand)]">{v.icon}</span>
                  <span className="text-sm font-semibold text-[var(--foreground)]">{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative card */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
                <div className="text-center">
                  <span className="material-symbols-outlined text-8xl text-[var(--brand)] opacity-20">corporate_fare</span>
                  <p className="mt-4 text-sm font-medium text-[var(--muted)]">Building infrastructure<br />for global good</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <span className="material-symbols-outlined text-[18px] text-[var(--brand)]">group</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--foreground)]">180+ NGOs</div>
                  <div className="text-xs text-[var(--muted)]">Worldwide partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Dark Stats Bar ─────────────────────────────────────────────────── */
export function StatsBar() {
  const stats = [
    { value: "50+", label: "NGOs Served" },
    { value: "10+", label: "Years of Impact" },
    { value: "1M+", label: "Lives Touched" },
    { value: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="bg-[var(--bg-dark)] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 text-center ${i < stats.length - 1 ? "sm:border-r sm:border-white/10" : ""}`}
            >
              <div className="text-3xl font-bold text-[var(--teal)] sm:text-4xl">{stat.value}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services Section ───────────────────────────────────────────────── */
export function ServicesSection() {
  const services = [
    {
      icon: "group",
      title: "Custom CRM & ERP",
      description:
        "Tailored management platforms that centralize donor relations, volunteer tracking, and resource allocation into a single source of truth.",
      highlight: false,
    },
    {
      icon: "bar_chart",
      title: "Impact Analytics",
      description:
        "Advanced data visualization tools that turn complex field data into actionable insights and compelling stakeholder reports.",
      highlight: false,
    },
    {
      icon: "security",
      title: "Security & Compliance",
      description:
        "Robust data protection frameworks ensuring your organization meets international privacy standards (GDPR, CCPA) while safeguarding sensitive beneficiary information.",
      highlight: true,
    },
    {
      icon: "groups",
      title: "Training & Support",
      description:
        "On-site workshops and 24/7 technical assistance to ensure your team is confident and proficient with their new digital tools.",
      highlight: false,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Left: intro text */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">Our Services</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              Building the backbone of modern NGOs.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              By designing robust, human-centric management systems, we enable organizations to focus
              less on administrative friction and more on their core mission of creating global change.
            </p>

            {/* Featured quote */}
            <blockquote className="mt-8 rounded-xl border border-[var(--border)] bg-blue-50 p-5">
              <p className="text-sm leading-7 text-[var(--foreground)] italic">
                &ldquo;NGOSystems transformed how we track our field operations. We now have
                real-time data that drives our every decision.&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white">
                  JD
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">Jane Doe</div>
                  <div className="text-xs text-[var(--muted)]">Director, Global Reach</div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Right: service cards */}
          <div className="space-y-4">
            {/* Row 1: Two cards */}
            <div className="grid grid-cols-2 gap-4">
              {services.slice(0, 2).map((svc) => (
                <div
                  key={svc.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] p-6 transition-shadow hover:shadow-md"
                >
                  <span className="material-symbols-outlined text-3xl text-[var(--teal)]">{svc.icon}</span>
                  <h3 className="mt-4 text-base font-bold text-[var(--foreground)]">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{svc.description}</p>
                </div>
              ))}
            </div>

            {/* Row 2: Blue highlight card */}
            <div className="rounded-2xl bg-[var(--brand)] p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-3xl text-white/80">{services[2].icon}</span>
                  <h3 className="mt-4 text-lg font-bold">{services[2].title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">{services[2].description}</p>
                </div>
                <div className="hidden shrink-0 sm:flex h-24 w-24 items-center justify-center rounded-xl bg-white/10">
                  <span className="material-symbols-outlined text-5xl text-white/30">verified_user</span>
                </div>
              </div>
            </div>

            {/* Row 3: Training card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] p-6 transition-shadow hover:shadow-md">
              <span className="material-symbols-outlined text-3xl text-[var(--teal)]">{services[3].icon}</span>
              <h3 className="mt-4 text-base font-bold text-[var(--foreground)]">{services[3].title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{services[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Preview ───────────────────────────────────────────── */
export function TestimonialsPreview() {
  const secondary = [
    {
      quote: "Finally, a management system that understands the complexities of international donor reporting while remaining accessible for local staff.",
      name: "Marcus Kwesi",
      org: "Water Foundation",
      initials: "MK",
    },
    {
      quote: "The transparency this platform provides to our partners has revolutionized our fundraising efforts. Trust is our currency, and NGOSystems helps us bank it.",
      name: "David Aris",
      org: "Education First",
      initials: "DA",
    },
    {
      quote: "Their support team is incredible. They don't just solve tickets; they help us strategize our data workflow.",
      name: "Elena Lopez",
      org: "Project Green",
      initials: "EL",
    },
    {
      quote: "The transition was seamless. We migrated years of data in just one weekend. Highly recommended for growing non-profits.",
      name: "Anita Rao",
      org: "Children's Hope",
      initials: "AR",
    },
  ];

  return (
    <section className="bg-[var(--bg-alt)] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              What our partners say
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="hidden text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Featured large card */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm lg:row-span-2">
            {/* Watermark */}
            <span className="material-symbols-outlined pointer-events-none absolute -right-4 -top-4 text-[120px] text-[var(--brand)] opacity-[0.06] select-none">
              format_quote
            </span>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[18px] text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            <blockquote className="mt-6 text-xl font-semibold italic leading-8 text-[var(--foreground)] lg:text-2xl">
              &ldquo;The efficiency gains we&apos;ve seen since implementing NGOSystems have allowed
              our field teams to spend 40% more time on direct community engagement. It&apos;s not just
              software; it&apos;s a mission multiplier.&rdquo;
            </blockquote>
            <footer className="mt-8 flex items-center gap-4">
              <Image
                src="/sarah_jenkins.png"
                alt="Sarah Jenkins"
                width={52}
                height={52}
                className="rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-[var(--foreground)]">Sarah Jenkins</div>
                <div className="text-sm text-[var(--muted)]">Regional Director, Global Health Initiative</div>
              </div>
            </footer>
          </div>

          {/* Secondary cards */}
          {secondary.map((t) => (
            <div
              key={t.name}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="material-symbols-outlined pointer-events-none absolute -right-2 -top-2 text-[72px] text-[var(--brand)] opacity-[0.06] select-none">
                format_quote
              </span>
              <p className="text-sm leading-7 text-[var(--muted)] italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">{t.name}</div>
                  <div className="text-xs text-[var(--muted)] italic">{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Band ───────────────────────────────────────────────────────── */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-alt)] py-24">
      {/* Decorative ring */}
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border-[18px] border-[var(--teal)] opacity-20"
      />
      <div
        className="pointer-events-none absolute -right-4 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border-[10px] border-[var(--brand)] opacity-10"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            Ready to scale your mission?
          </h2>
          <p className="mt-5 text-lg text-[var(--muted)]">
            Join dozens of forward-thinking NGOs who have modernized their operations with NGOSystems.
            Let&apos;s build something that matters.
          </p>
          <div className="mt-8">
            <Link
              id="cta-partner"
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[var(--brand-dark)] hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}