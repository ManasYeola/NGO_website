import Image from "next/image";
import Link from "next/link";

/* ─── Hero Section ──────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-3 lg:px-10 lg:pb-32 lg:pt-5">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="max-w-xl pt-3 lg:pt-5">
            <h1
              className="max-w-[540px] font-extrabold text-[var(--foreground)]"
              style={{ fontSize: "clamp(1.95rem, 2.9vw, 2.95rem)", lineHeight: 1.02, letterSpacing: "-0.04em" }}
            >
              Empowering Impact
              <br />
              Through <span className="text-[var(--brand)]">Digital Rigor.</span>
            </h1>

            <p className="mt-3 max-w-[460px] text-[0.85rem] leading-6 text-[var(--muted)]">
              We bridge the gap between world-class software engineering and boots-on-the-ground
              social change. Professional systems designed for those who change the world.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                id="hero-partner-cta"
                href="/contact"
                className="inline-flex items-center rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[var(--brand-dark)]"
              >
                Partner With Us
              </Link>
              <Link
                id="hero-impact-cta"
                href="/timeline"
                className="inline-flex items-center rounded-lg border border-[var(--brand)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--brand)] transition-all duration-150 hover:bg-blue-50"
              >
                View Our Impact
              </Link>
            </div>

            <div className="mt-8 flex items-start gap-10 pb-2">
              <div>
                <div className="text-[11px] font-medium text-[var(--brand)]">Established</div>
                <div className="mt-1 text-sm font-medium text-[var(--foreground)]">2014</div>
              </div>
              <div>
                <div className="text-[11px] font-medium text-[var(--brand)]">Reach</div>
                <div className="mt-1 text-sm font-medium text-[var(--foreground)]">Global</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>

        <div className="mt-5 grid grid-cols-4 gap-4 lg:gap-5">
          <div className="relative h-[154px] overflow-hidden rounded-xl bg-gray-100 shadow-sm">
            <Image
              src="/ngo_gallery_1.png"
              alt="Community meeting and training session"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 50vw, 20vw"
              priority
            />
          </div>
          <div className="relative h-[154px] overflow-hidden rounded-xl bg-gray-100 shadow-sm">
            <Image
              src="/ngo_workshop.png"
              alt="Community workshop and discussion"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 50vw, 26vw"
            />
          </div>
          <div className="relative h-[154px] overflow-hidden rounded-xl bg-gray-100 shadow-sm">
            <Image
              src="/ngo_dashboard.png"
              alt="NGO analytics dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 24vw"
            />
          </div>
          <div className="relative h-[154px] overflow-hidden rounded-xl bg-gray-100 shadow-sm">
            <Image
              src="/ngo_field.png"
              alt="Field workers in the community"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 50vw, 18vw"
            />
          </div>
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
    <section className="bg-[var(--bg)] py-20 pt-64 lg:py-24 lg:pt-72">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Text */}
          <div className="max-w-[470px]">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              About NGO Management Systems
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              We are dedicated to bridging the gap between world-class software engineering and
              boots-on-the-ground social change. Our mission is to provide NGOs with the digital
              infrastructure they need to maximize their impact and streamline operations globally.
            </p>

            {/* Values */}
            <div className="mt-9 flex items-center gap-12">
              {values.map((v) => (
                <div key={v.label} className="flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-[22px] text-[var(--brand)]">{v.icon}</span>
                  <span className="text-[11px] font-medium text-[var(--foreground)]">{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — simple placeholder card */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-transparent bg-[#edf1f7] shadow-sm">
              <div className="flex h-full w-full items-center justify-center">
                <span className="material-symbols-outlined text-[5.5rem] text-[#c9d4ea]">corporate_fare</span>
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
    { value: "50+", label: "NGOS SERVED" },
    { value: "10+", label: "YEARS OF IMPACT" },
    { value: "1M+", label: "LIVES TOUCHED" },
    { value: "24/7", label: "EXPERT SUPPORT" },
  ];

  return (
    <section className="bg-[var(--bg-dark)] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 text-center ${i < stats.length - 1 ? "sm:border-r sm:border-white/10" : ""}`}
            >
              <div className="text-[2rem] font-bold leading-none text-[#58eadf] sm:text-[2.2rem]">{stat.value}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">{stat.label}</div>
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
          {/* Left: Our Mission */}
          <div className="lg:sticky lg:top-28">
            {/* Teal accent line + heading */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-[var(--teal)] flex-shrink-0"></div>
              <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-3xl">
                Our Mission
              </h2>
            </div>
            <p className="text-sm leading-7 text-[var(--muted)]">
              We are a dedicated collective of technologists and social impact experts committed to
              building the backbone of modern NGOs. By designing robust, human-centric management
              systems, we enable organizations to focus less on administrative friction and more on
              their core mission of creating global change.
            </p>

            {/* Featured quote */}
            <blockquote className="mt-8 rounded-xl border border-[var(--border)] bg-white p-5 shadow-sm">
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
                  className="rounded-2xl border border-[var(--border)] bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <span className="material-symbols-outlined text-2xl text-[var(--teal)]">{svc.icon}</span>
                  <h3 className="mt-4 text-base font-bold text-[var(--foreground)]">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{svc.description}</p>
                </div>
              ))}
            </div>

            {/* Row 2: Blue highlight card */}
            <div className="rounded-2xl bg-[var(--brand)] p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-2xl text-white/80">{services[2].icon}</span>
                  <h3 className="mt-4 text-lg font-bold">{services[2].title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">{services[2].description}</p>
                </div>
                <div className="hidden shrink-0 sm:flex h-20 w-20 items-center justify-center rounded-xl bg-white/10">
                  <span className="material-symbols-outlined text-4xl text-white/40">verified_user</span>
                </div>
              </div>
            </div>

            {/* Row 3: Training card */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 transition-shadow hover:shadow-md">
              <span className="material-symbols-outlined text-2xl text-[var(--teal)]">{services[3].icon}</span>
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
      {/* Decorative ring — single bold blue circle */}
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[20px] border-[var(--brand)] opacity-30"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            Ready to scale your mission?
          </h2>
          <p className="mt-5 text-base text-[var(--muted)]">
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