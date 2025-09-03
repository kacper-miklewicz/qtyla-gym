import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { PHOTOS_PATHS } from "./constants";

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
              <div className="p-1">
                <Card className="rounded-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{path}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
