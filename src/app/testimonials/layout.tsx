import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials – InHouse NGO",
  description: "Read inspiring stories and testimonials from the people whose lives have been touched by InHouse NGO.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
