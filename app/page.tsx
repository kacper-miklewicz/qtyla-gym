import { HeroSection } from "./components/hero-section";
import { VisionSection } from "./components/vision-section";
import { OfferSection } from "./components/offer-section";
import { AboutSection } from "./components/about-section";
import { PhotosSection } from "./components/photos-section";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <VisionSection />
        <OfferSection />
        <AboutSection />
        <PhotosSection />
      </main>
    </div>
  );
}
