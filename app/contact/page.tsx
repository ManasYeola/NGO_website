import type { Metadata } from "next";
import { Navbar, Footer } from "../components/shared";
import { ContactForm } from "../components/contact-sections";
import { ContactDetails } from "../components/contact-sections";

export const metadata: Metadata = {
  title: "Contact Us | NGOSystems",
  description:
    "Get in touch with NGOSystems to discuss how we can support your organization's digital infrastructure needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="bg-[var(--bg-alt)] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Page heading */}
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">Get in Touch</p>
            <h1 className="mt-3 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
              Ready to transform your NGO&apos;s operations? We&apos;d love to hear about your mission.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
