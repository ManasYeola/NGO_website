import {
  HomeFooter,
  HomeHeader,
  HighlightsSection,
  HeroSection,
  SocialProofSection,
} from "./components/home-sections";

export default function Home() {
  return (
    <div id="home" className="page-shell min-h-screen">
      <HomeHeader />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <HeroSection />
        <HighlightsSection />
        <SocialProofSection />
      </main>

      <HomeFooter />
    </div>
  );
}
