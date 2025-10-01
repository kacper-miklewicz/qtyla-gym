"use client";

import { IoChevronDown } from "react-icons/io5";

import { scrollSectionIntoView } from "@/app/utils";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-lvh bg-cover bg-center text-center text-white"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-black/70 px-6">
        <h1 className="font-serif text-4xl font-bold uppercase md:text-6xl">
          Coś więcej niż&nbsp;trening
        </h1>
      </div>
      <Button
        variant="ghost"
        size="icon"
        asChild
        onClick={() => scrollSectionIntoView("vision")}
        className="hover:text-gold absolute bottom-10 left-1/2 z-20 -translate-x-1/2 transform text-white hover:bg-transparent"
      >
        <IoChevronDown className="h-14 w-14" />
      </Button>
    </section>
  );
}
