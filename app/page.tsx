import { MENU_ITEMS } from "./components/navbar/constants";

import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        {/* Temporary solution: to test the menu */}
        {MENU_ITEMS.map((item) => (
          <section
            id={item.sectionId}
            key={item.sectionId}
            className="flex min-h-screen items-center justify-center border-b"
          >
            <h1 className="text-4xl font-bold font-stretch-semi-condensed">
              {item.label}
            </h1>
          </section>
        ))}
      </main>
    </div>
  );
}
