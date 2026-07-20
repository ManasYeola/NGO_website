import Image from "next/image";
import Link from "next/link";

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  organization: string;
  initials: string;
  hasPhoto?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The efficiency gains we've seen since implementing NGOSystems have allowed our field teams to spend 40% more time on direct community engagement. It's not just software; it's a mission multiplier.",
    name: "Sarah Jenkins",
    title: "Regional Director",
    organization: "Global Health Initiative",
    initials: "SJ",
    hasPhoto: true,
  },
  {
    quote:
      "Finally, a management system that understands the complexities of international donor reporting while remaining accessible for local staff.",
    name: "Marcus Kwesi",
    title: "Operations Lead",
    organization: "Water Foundation",
    initials: "MK",
  },
  {
    quote:
      "The transparency this platform provides to our partners has revolutionized our fundraising efforts. Trust is our currency, and NGOSystems helps us bank it.",
    name: "David Aris",
    title: "Executive Director",
    organization: "Education First",
    initials: "DA",
  },
  {
    quote:
      "Their support team is incredible. They don't just solve tickets; they help us strategize our data workflow.",
    name: "Elena Lopez",
    title: "Program Manager",
    organization: "Project Green",
    initials: "EL",
  },
  {
    quote:
      "The transition was seamless. We migrated years of data in just one weekend. Highly recommended for growing non-profits.",
    name: "Anita Rao",
    title: "Chief of Operations",
    organization: "Children's Hope",
    initials: "AR",
  },
  {
    quote:
      "NGOSystems gave us real-time visibility into our programs. Now we can make data-driven decisions that genuinely move the needle.",
    name: "James Osei",
    title: "Country Director",
    organization: "Global Bridges",
    initials: "JO",
  },
];

const statsRow = [
  { value: "500+", label: "NGOs Empowered" },
  { value: "1M+", label: "Lives Touched" },
  { value: "12+", label: "Countries Active" },
  { value: "98%", label: "Satisfaction Rate" },
];

/* ─── Hero ───────────────────────────────────────────────────────────── */
export function TestimonialsHero() {
  return (
    <section className="bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--brand)] mb-6">
          Real voices from partners and supporters
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">Testimonials</p>
            <h1 className="mt-3 text-5xl font-bold leading-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Stories that build trust before the first meeting.
            </h1>
          </div>
          <p className="text-lg leading-8 text-[var(--muted)]">
            Join hundreds of forward-thinking organizations that have transformed their operations.
            Hear directly from the people doing the work on the ground.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Row ──────────────────────────────────────────────────────── */
export function TestimonialsStats() {
  return (
    <section className="bg-[var(--bg-alt)] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {statsRow.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i < statsRow.length - 1 ? "sm:border-r sm:border-[var(--border)]" : ""}`}
            >
              <div className="text-3xl font-bold text-[var(--brand)]">{stat.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Testimonial ───────────────────────────────────────────── */
export function FeaturedTestimonial() {
  const t = testimonials[0];
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--bg-alt)] p-8 sm:p-12">
          {/* Watermark */}
          <span className="material-symbols-outlined pointer-events-none absolute -right-6 -top-6 text-[160px] text-[var(--brand)] opacity-[0.05] select-none">
            format_quote
          </span>
          <div className="flex items-center gap-2 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[20px] text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            ))}
            <span className="ml-2 text-xs font-medium text-[var(--muted)]">starstarstarstarstar</span>
          </div>
          <blockquote className="max-w-4xl text-2xl font-semibold italic leading-9 text-[var(--foreground)] sm:text-3xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <footer className="mt-8 flex items-center gap-4">
            <Image
              src="/sarah_jenkins.png"
              alt="Sarah Jenkins"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-[var(--foreground)]">{t.name}</div>
              <div className="text-sm text-[var(--muted)]">{t.title}, {t.organization}</div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Grid ──────────────────────────────────────────────── */
export function TestimonialsGrid() {
  return (
    <section className="bg-[var(--bg-alt)] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">Card Grid</p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Consistent card sizing keeps the page balanced even when quotes vary.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.slice(1).map((t) => (
            <article
              key={`${t.name}-${t.organization}`}
              className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Watermark */}
              <span className="material-symbols-outlined pointer-events-none absolute -right-2 -top-2 text-[80px] text-[var(--brand)] opacity-[0.06] select-none">
                format_quote
              </span>

              <p className="flex-1 text-sm leading-7 text-[var(--muted)] italic">&ldquo;{t.quote}&rdquo;</p>

              <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">{t.name}</div>
                  <div className="text-xs text-[var(--muted)] italic">{t.title}, {t.organization}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────────── */
export function TestimonialsCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal-50/60 to-blue-50/60" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-5xl">
            Want to be our next success story?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--muted)]">
            Join hundreds of organizations transforming the world. Let&apos;s discuss your mission
            and how we can support it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              id="testimonials-contact-cta"
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[var(--brand)] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[var(--brand-dark)] hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link
              id="testimonials-demo-cta"
              href="/contact"
              className="inline-flex items-center rounded-lg border border-[var(--border-medium)] bg-white px-8 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-150 hover:bg-gray-50 hover:-translate-y-0.5"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}