import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story – InHouse NGO",
  description: "Learn about the history, mission, values, and the passionate team behind InHouse NGO's journey since 2010.",
};

export default function OurStoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
