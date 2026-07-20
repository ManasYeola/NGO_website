import type { Metadata } from "next";
import Link from "next/link";
import { HomeFooter } from "../components/home-sections";
import {
  TestimonialsCTA,
  TestimonialsGrid,
  TestimonialsHero,
} from "../components/testimonials-sections";

export const metadata: Metadata = {
  title: "Testimonials | NGO Management Systems",
  description: "Testimonial stories from partners and supporters for the NGO website.",
};

function TestimonialsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(244,239,230,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-sm font-bold text-white shadow-lg shadow-emerald-900/15">
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

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="page-shell min-h-screen">
      <TestimonialsHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <TestimonialsHero />

        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Card grid
            </p>
            <h2 className="font-serif text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              Consistent card sizing keeps the page balanced even when quotes vary.
            </h2>
          </div>

          <TestimonialsGrid />
        </section>

        <TestimonialsCTA />
      </main>

      <HomeFooter
        links={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
          { label: "Contact Us", href: "/#contact" },
        ]}
      />
    </div>
  );
}