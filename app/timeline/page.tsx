import type { Metadata } from "next";
import { Navbar, Footer } from "../components/shared";
import { TimelineHero, TimelinePath } from "../components/timeline-sections";

export const metadata: Metadata = {
  title: "Our Story | NGOSystems",
  description:
    "A journey of transforming global impact through technical precision and human-centered design — the NGOSystems story.",
};

export default function TimelinePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <TimelineHero />
        <TimelinePath />
      </main>
      <Footer />
    </div>
  );
}
