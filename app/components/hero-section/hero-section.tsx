"use client";

import { IoChevronDown } from "react-icons/io5";

import { scrollSectionIntoView } from "@/app/utils";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-96px)] bg-[url(/hero-bg.jpg)] bg-cover bg-center text-center text-white md:h-[calc(100vh-120px)]"
    >
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-6 bg-black/70">
        <h1 className="font-subheading -translate-x-5 -translate-y-4/6 text-4xl font-bold uppercase md:-translate-x-8 md:text-6xl">
          <span className="mb-4 block">coś więcej</span>
          <span className="ml-10 block md:ml-16">niż trening</span>
        </h1>
      </div>
      <Button
        variant="ghost"
        size="icon"
        asChild
        onClick={() => scrollSectionIntoView("vision")}
        className="hover:text-gold absolute bottom-10 left-1/2 -translate-x-1/2 transform text-white hover:bg-transparent"
      >
        <IoChevronDown className="h-14 w-14" />
      </Button>
    </section>
  );
}
