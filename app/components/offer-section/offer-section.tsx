"use client";

import { OFFER_TILES } from "./constants";

import { TilesCarousel } from "@/components/custom/tiles-carousel";

export default function OfferSection() {
  const offerTilesList = Object.values(OFFER_TILES);

  return (
    <section id="offer" className="section-base pr-0 pl-6 md:pb-0">
      <div className="w-full text-left">
        <h3 className="section-subtitle">więcej niż trening</h3>
        <h2 className="section-title mb-10">
          W jaki sposób chcesz o siebie zadbać?
        </h2>
      </div>
      <TilesCarousel tilesList={offerTilesList} />
    </section>
  );
}
