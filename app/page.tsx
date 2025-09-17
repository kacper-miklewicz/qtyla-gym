import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { OfferSection } from "./components/offer-section";
import { ScheduleSection } from "./components/schedule-section";
import { PhotosSection } from "./components/photos-section";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <AboutSection />
        <OfferSection />
        <ScheduleSection />
        <PhotosSection />
      </main>
    </div>
  );
}
