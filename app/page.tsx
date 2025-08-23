import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { VisionSection } from "./components/vision-section";
import { OfferSection } from "./components/offer-section";
import { ScheduleSection } from "./components/schedule-section";
import { RulesSection } from "./components/rules-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <OfferSection />
        <ScheduleSection />
        <RulesSection />
      </main>
    </div>
  );
}
