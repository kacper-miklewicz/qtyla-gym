import Image from "next/image";

import { cn } from "@/lib/utils";

import { VISION_ITEMS } from "./constants";

export default function VisionSection() {
  return (
    <section
      id="wizja"
      className="bg-deep-black flex h-auto min-h-[400px] flex-col items-center px-8 py-20 text-center text-white md:px-20 md:py-32 xl:px-32 2xl:px-48"
    >
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">
        Wizja QTYLA Training Club
      </h2>
      <p className="text-md mb-4 max-w-200 md:text-lg">
        W QTYLA Training Club wierzymy, że każdy zasługuje na dostęp do wysokiej
        jakości treningu i wsparcia w osiąganiu swoich celów fitness. Naszą
        misją jest stworzenie społeczności, która inspiruje, motywuje i wspiera
        się nawzajem na drodze do zdrowia i dobrej kondycji.
      </p>
      <div className="mt-12 flex max-w-200 flex-col gap-10">
        {VISION_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 items-stretch md:grid-cols-2"
          >
            <div
              className={cn(
                "relative h-full min-h-[200px] w-full", // min-h for mobile
                {
                  "order-1": idx % 2 === 0,
                  "order-1 md:order-2": idx % 2 !== 0,
                },
              )}
            >
              <Image
                src={item.imageUrl}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
            <div
              className={cn(
                "bg-gold-800 flex items-center px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8",
                {
                  "order-2": idx % 2 === 0,
                  "order-2 md:order-1": idx % 2 !== 0,
                },
              )}
            >
              <p className="text-md w-full text-left md:text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
