import Tile, { TileProps } from "./tile";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export interface TilesCarouselProps {
  tilesList: TileProps[];
}

export default function TilesCarousel({ tilesList }: TilesCarouselProps) {
  return (
    <div className="mx-auto flex w-full items-center justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {tilesList.map((tile, index) => (
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
                linkTarget={tile.linkTarget}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
