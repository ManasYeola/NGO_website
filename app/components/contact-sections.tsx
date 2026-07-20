"use client";
import { useState } from "react";

/* ─── Contact Form ───────────────────────────────────────────────────── */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[var(--foreground)]">Send us a Message</h2>

      {submitted ? (
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-5">
          <span className="material-symbols-outlined text-2xl text-green-600">check_circle</span>
          <div>
            <div className="font-semibold text-green-800">Message sent!</div>
            <div className="text-sm text-green-700">We&apos;ll get back to you within 1–2 business days.</div>
          </div>
        </div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Row 1 */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="full-name" className="block text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="John Doe"
                required
                className="mt-2 w-full rounded-lg border border-[var(--border-medium)] bg-[var(--bg-alt)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--brand)] focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@ngo-impact.org"
                required
                className="mt-2 w-full rounded-lg border border-[var(--border-medium)] bg-[var(--bg-alt)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--brand)] focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
              Organization Name
            </label>
            <input
              id="organization"
              type="text"
              placeholder="Social Good Foundation"
              className="mt-2 w-full rounded-lg border border-[var(--border-medium)] bg-[var(--bg-alt)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--brand)] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
              Your Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell us about your organization's goals..."
              required
              className="mt-2 w-full resize-none rounded-lg border border-[var(--border-medium)] bg-[var(--bg-alt)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--brand)] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
              <span className="material-symbols-outlined text-[16px] text-[var(--brand)]">info</span>
              We typically respond within 1-2 business days.
            </div>
            <button
              id="contact-submit"
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--brand)] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--brand-dark)] hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

/* ─── Contact Details ────────────────────────────────────────────────── */
export function ContactDetails() {
  const details = [
    {
      icon: "mail",
      label: "Email Support",
      value: "hello@ngosystems.com",
      href: "mailto:hello@ngosystems.com",
    },
    {
      icon: "call",
      label: "Phone Inquiries",
      value: "+1 (555) 000-8888",
      href: "tel:+15550008888",
    },
    {
      icon: "location_on",
      label: "Global Office",
      value: "123 Impact Way, Suite 400\nSan Francisco, CA 94105",
      href: "#",
    },
  ];

  const socials = ["publish", "share", "github", "group"];

  return (
    <div className="space-y-6">
      {/* Details card */}
      <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-[var(--foreground)]">Contact Details</h2>
        <div className="mt-6 space-y-6">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <span className="material-symbols-outlined mt-0.5 text-[24px] text-[var(--brand)]">{d.icon}</span>
              <div>
                <div className="text-sm font-bold text-[var(--foreground)]">{d.label}</div>
                <a
                  href={d.href}
                  className="mt-0.5 text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors whitespace-pre-line"
                >
                  {d.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-6">
          {socials.map((icon) => (
            <button
              key={icon}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-gray-50 hover:bg-blue-50 hover:border-[var(--brand)] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[var(--muted)]">{icon}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <div className="relative h-52 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-5xl text-[var(--teal)] opacity-40">map</span>
            <p className="mt-2 text-xs text-[var(--muted)]">123 Impact Way, San Francisco, CA</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[var(--border)] px-5 py-3">
          <span className="text-xs text-[var(--muted)]">Headquarters — NGO Management Systems</span>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]"
          >
            <span className="material-symbols-outlined text-[14px]">map</span>
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  );
}
