import type { Metadata } from "next";
import { Navbar, Footer } from "../components/shared";
import {
  TestimonialsHero,
  TestimonialsStats,
  FeaturedTestimonial,
  TestimonialsGrid,
  TestimonialsCTA,
} from "../components/testimonials-sections";

export const metadata: Metadata = {
  title: "Testimonials | NGOSystems",
  description:
    "Hear from NGO leaders and field workers about how NGOSystems has transformed their operations and impact.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <TestimonialsHero />
        <TestimonialsStats />
        <FeaturedTestimonial />
        <TestimonialsGrid />
        <TestimonialsCTA />
      </main>
      <Footer />
    </div>
  );
}