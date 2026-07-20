import Link from "next/link";

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  organization: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The platform made it much easier for our field team to explain programs, share impact, and keep the story consistent across every touchpoint.",
    name: "Anita Rao",
    title: "Programs Director",
    organization: "Bright Futures Trust",
  },
  {
    quote:
      "We needed a website that felt warm without losing clarity. The structure here is exactly what we were missing.",
    name: "Daniel Mensah",
    title: "Founder",
    organization: "Community Lift Network",
  },
  {
    quote:
      "The design balances credibility and empathy. It gives us a strong front door for donors and partners.",
    name: "Sara Iqbal",
    title: "Partnership Lead",
    organization: "Roots and Reach Initiative",
  },
  {
    quote:
      "We can finally show our work in a way that feels organized, modern, and simple to maintain.",
    name: "Michael Chen",
    title: "Operations Manager",
    organization: "Open Hands Collective",
  },
  {
    quote:
      "The layout gives our testimonials real presence. Nothing feels cramped, and every card reads clearly on mobile.",
    name: "Priya Nair",
    title: "Executive Director",
    organization: "Neighbor Works Foundation",
  },
  {
    quote:
      "This is the kind of presentation that makes an organization look ready for scale without feeling corporate.",
    name: "Omar Ali",
    title: "Board Advisor",
    organization: "Impact for All",
  },
];

export function TestimonialsHero() {
  return (
    <section className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)] shadow-sm backdrop-blur">
        Real voices from partners and supporters
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Testimonials
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Stories that build trust before the first meeting.
          </h1>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
          This page turns the PRD’s testimonial requirement into a dedicated route with a responsive
          card grid, strong visual hierarchy, and a clear call to contact the organization.
        </p>
      </div>
    </section>
  );
}

export function TestimonialsGrid() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((testimonial) => (
        <article
          key={`${testimonial.name}-${testimonial.organization}`}
          className="glass-card flex h-full flex-col rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(14,111,92,0.12)] font-serif text-2xl font-bold text-[var(--brand)]">
              &ldquo;
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                {testimonial.name}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                {testimonial.title}
              </div>
            </div>
          </div>

          <blockquote className="mt-5 flex-1 text-base leading-8 text-[var(--muted)]">
            {testimonial.quote}
          </blockquote>

          <div className="mt-6 border-t border-[var(--border)] pt-4 text-sm font-medium text-[var(--foreground)]">
            {testimonial.organization}
          </div>
        </article>
      ))}
    </section>
  );
}

export function TestimonialsCTA() {
  return (
    <section className="glass-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Next step
          </p>
          <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Ready to turn a few quotes into a stronger story?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
            We can next wire the gallery, contact form, and timeline pages so the full site matches
            the PRD section-by-section.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Back home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}