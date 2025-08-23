import Image from "next/image";
import Link from "next/link";

import { OFFER_ITEMS } from "./constants";

export default function OfferSection() {
  return (
    <section id="offer" className="section-base w-full px-4 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
        Oferta
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-10">
        {OFFER_ITEMS.map((item, idx) => (
          <Link
            key={idx}
            href={item.href ?? "#"}
            className="hover:bg-concrete focus:ring-gold-400 bg-graphite flex w-full max-w-xs flex-col items-center p-6 shadow-lg transition focus:ring-2 focus:outline-none"
          >
            <div className="relative mb-4 h-48 w-full">
              <Image
                src={item.imageUrl}
                alt={item.text}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <h3 className="mt-2 text-center text-xl font-semibold uppercase">
              {item.text}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
