"use client";

import { scrollSectionIntoView } from "@/app/utils";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-64px)] bg-[url(/hero-bg.jpg)] bg-cover bg-center text-center text-white"
    >
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-6 bg-black/40">
        <h1 className="relative z-10 mb-4 text-3xl font-bold md:text-5xl">
          QTYLA Training Club
        </h1>
        <Button
          onClick={() => scrollSectionIntoView("vision")}
          className="hover:bg-gold-500 bg-gold-600 text-white"
        >
          Poznaj naszą wizję
        </Button>
      </div>
    </section>
  );
}
