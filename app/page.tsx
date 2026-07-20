import { Navbar, Footer } from "./components/shared";
import {
  HeroSection,
  AboutSection,
  StatsBar,
  ServicesSection,
  TestimonialsPreview,
  CtaBand,
} from "./components/home-sections";

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsBar />
        <ServicesSection />
        <TestimonialsPreview />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
