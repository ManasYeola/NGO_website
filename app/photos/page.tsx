import type { Metadata } from "next";
import { Navbar, Footer } from "../components/shared";
import { PhotosHero, PhotoGrid, PhotosBanner } from "../components/photos-sections";

export const metadata: Metadata = {
  title: "Photos | NGOSystems",
  description:
    "A visual gallery capturing the work, partners, and communities served by NGOSystems around the world.",
};

export default function PhotosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PhotosHero />
        <PhotoGrid />
        <PhotosBanner />
      </main>
      <Footer />
    </div>
  );
}
