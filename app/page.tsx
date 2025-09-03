import { HeroSection } from "./components/hero-section";
import { VisionSection } from "./components/vision-section";
import { ScheduleSection } from "./components/schedule-section";
import { RulesSection } from "./components/rules-section";
import { PhotosSection } from "./components/photos-section";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <VisionSection />
        <ScheduleSection />
        <RulesSection />
        <PhotosSection />
      </main>
    </div>
  );
}
