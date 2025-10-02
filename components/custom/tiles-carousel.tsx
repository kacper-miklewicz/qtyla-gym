import { Tile, type TileProps } from "./tile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { cn } from "@/lib/utils";

interface TilesCarouselProps {
  tilesList: TileProps[];
  itemClassName?: string;
}

function TilesCarousel({ tilesList, itemClassName }: TilesCarouselProps) {
  return (
    <div className="mx-auto mb-16 flex w-full items-center justify-center md:mb-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full sm:pb-10"
      >
        <CarouselContent>
          {tilesList.map((tile, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "md:basis basis-[90%] last:mr-6 sm:basis-[45%] lg:basis-[30%] xl:basis-[22.5%] 2xl:basis-[22.5%]",
                itemClassName,
              )}
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
        <div className="absolute bottom-0 left-12 z-10 hidden text-white sm:block">
          <CarouselPrevious />
        </div>
        <div className="absolute bottom-0 left-20 z-10 hidden text-white sm:block">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

export { TilesCarousel };
