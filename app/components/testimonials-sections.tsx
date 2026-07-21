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
  { value: "45M+", label: "Lives Touched" },
  { value: "120+", label: "Countries Active" },
  { value: "98%", label: "Satisfaction Rate" },
];

/* ─── Hero ───────────────────────────────────────────────────────────── */
export function TestimonialsHero() {
  return (
    <section className="bg-[var(--bg)] pt-12 pb-12 lg:pt-16 lg:pb-14">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
            Real voices from partners and supporters
          </p>
          <h1 className="mt-4 text-[clamp(2.3rem,4.2vw,4.1rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-[var(--foreground)]">
            What People Say About Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)] sm:text-[1.02rem]">
            Discover how organizations worldwide are scaling their impact and streamlining
            operations with NGOSystems.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Row ──────────────────────────────────────────────────────── */
export function TestimonialsStats() {
  return (
    <section className="bg-[var(--bg)] py-6 lg:py-8">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {statsRow.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white px-4 py-6 text-center shadow-sm"
            >
              <div className="text-[1.7rem] font-bold leading-none text-[var(--brand)] sm:text-[2rem]">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                {stat.label}
              </div>
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
    <section className="bg-[var(--bg)] py-10 lg:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <article className="rounded-3xl border border-black/5 bg-[#fffdf4] p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-center gap-1 text-[#46d3c4]">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            ))}
          </div>
          <blockquote className="mt-5 max-w-4xl text-[1.3rem] font-semibold italic leading-[1.38] text-[var(--foreground)] sm:text-[1.45rem] lg:text-[1.65rem]">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <footer className="mt-8 flex items-center gap-4 border-t border-black/5 pt-6">
            <Image
              src="/sarah_jenkins.png"
              alt="Sarah Jenkins"
              width={54}
              height={54}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <div className="text-[1.05rem] font-semibold text-[var(--foreground)]">{t.name}</div>
              <div className="text-sm text-[var(--muted)]">
                {t.title}, {t.organization}
              </div>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}

/* ─── Testimonials Grid ──────────────────────────────────────────────── */
export function TestimonialsGrid() {
  return (
    <section className="bg-[var(--bg)] py-12 lg:py-14">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(1, 4).map((t) => (
            <article
              key={`${t.name}-${t.organization}`}
              className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 p-6 shadow-sm transition-shadow hover:shadow-md ${t.name === "Elena Lopez" ? "bg-[#fffdf4]" : "bg-white"}`}
            >
              <span className="material-symbols-outlined text-[1.6rem] text-[var(--brand)]">format_quote</span>

              <p className="mt-5 flex-1 text-[0.98rem] leading-7 text-[var(--foreground)]/80 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-black/5 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">{t.name}</div>
                  <div className="text-xs text-[var(--muted)] italic">
                    {t.title}, {t.organization}
                  </div>
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
    <section className="relative overflow-hidden bg-[#eafaf7] py-18 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/20" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.04em] text-[var(--foreground)]">
            Want to be our next success story?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.05rem]">
            Join hundreds of organizations transforming the world. Let&apos;s discuss your mission
            and how we can support it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              className="inline-flex items-center rounded-lg border border-[var(--brand)] bg-white px-8 py-3.5 text-sm font-semibold text-[var(--brand)] transition-all duration-150 hover:bg-blue-50 hover:-translate-y-0.5"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}