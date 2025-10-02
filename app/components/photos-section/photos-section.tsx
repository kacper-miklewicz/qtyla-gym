import { PHOTOS_PATHS } from "./constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Photo } from "./photo";

export default function PhotosSection() {
  return (
    <section id="photos" className="section-base px-16">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {PHOTOS_PATHS.map((path, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
              <Photo path={path} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
