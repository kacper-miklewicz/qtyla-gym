import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { VISION_ITEMS } from "./constants";

export default function VisionSection() {
  return (
    <section id="vision" className="section-base">
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">
        Wizja QTYLA Training Club
      </h2>
      <p className="text-md mb-4 max-w-200 md:text-lg">
        W QTYLA Training Club wierzymy, że każdy zasługuje na dostęp do wysokiej
        jakości treningu i wsparcia w osiąganiu swoich celów fitness. Naszą
        misją jest stworzenie społeczności, która inspiruje, motywuje i wspiera
        się nawzajem na drodze do zdrowia i dobrej kondycji.
      </p>
      <div className="mt-12 mb-6 flex max-w-200 flex-col gap-10">
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
      <Button
        asChild
        className="hover:bg-gold-500 bg-gold-600 rounded-none px-12 py-8 text-2xl text-white"
      >
        <Link href="/czlonkowstwo">Dołącz do nas</Link>
      </Button>
    </section>
  );
}
