import Image from "next/image";

import { PHOTOS_PATHS } from "./constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-base flex flex-col gap-10 px-6 py-20 text-center md:gap-16 md:px-8"
    >
      <h2 className="section-title">czym jest qtyla</h2>
      <p className="section-content">
        QTYLA Training Club to miejsce, w którym liczy się jakość, komfort i
        społeczność. Limitowane członkostwo i system rezerwacji gwarantują
        przestrzeń i brak tłoku. Tworzymy środowisko oparte na szacunku i
        kulturze, gdzie trenujesz samodzielnie, w grupie lub z trenerem. Q to
        więcej niż trening - świadome podejście do życia oraz doświadczenia
        sięgające dalej niż mury klubu.
      </p>
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-center px-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full lg:pointer-events-none"
        >
          <CarouselContent>
            {PHOTOS_PATHS.map((path, index) => (
              <CarouselItem
                key={index}
                className="xs:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="xs:aspect-square relative aspect-3/4 w-full">
                  <Image
                    src={path}
                    alt={`About image ${index}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="lg:hidden" />
          <CarouselNext className="lg:hidden" />
        </Carousel>
      </div>
    </section>
  );
}
