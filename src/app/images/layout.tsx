import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery – InHouse NGO",
  description: "Browse our photo gallery capturing the impact and stories from InHouse NGO's programs across India.",
};

export default function ImagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
