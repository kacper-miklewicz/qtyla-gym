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
      <h2 className="mb-10 text-3xl font-bold">Oferta</h2>
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
                className="md:basis basis-[90%] last:mr-6 sm:basis-[45%] md:basis-[30%] lg:basis-[22.5%] xl:basis-[22.5%] 2xl:basis-[18.5%]"
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
