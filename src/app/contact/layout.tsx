import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – InHouse NGO",
  description: "Get in touch with InHouse NGO. Volunteer, donate, partner with us, or simply say hello — we'd love to hear from you.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
