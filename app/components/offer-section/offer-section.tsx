"use client";

import { OFFER_TILES } from "./constants";

import Tile from "@/components/custom/tile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function OfferSection() {
  const offerTilesList = Object.values(OFFER_TILES);

  return (
    <section id="offer" className="section-base pr-0 pl-6">
      <div className="w-full text-left">
        <h3 className="section-subtitle">więcej niż trening</h3>
        <h2 className="section-title mb-10">
          W jaki sposób chcesz o siebie zadbać?
        </h2>
      </div>
      <div className="mx-auto flex w-full items-center justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {offerTilesList.map((tile, index) => (
              <CarouselItem
                key={index}
                className="md:basis basis-[90%] last:mr-6 sm:basis-[45%] lg:basis-[30%] xl:basis-[22.5%] 2xl:basis-[22.5%]"
              >
                <Tile
                  title={tile.title}
                  description={tile.description}
                  backgroundImageUrl={tile.backgroundImageUrl}
                  buttonText={tile.buttonText}
                  onButtonClick={tile.onButtonClick}
                  isLink={tile.isLink}
                  linkUrl={tile.linkUrl}
                  inProgress={tile.inProgress}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
