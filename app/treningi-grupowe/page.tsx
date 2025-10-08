import React from "react";
import Link from "next/link";

import {
  GROUP_TRAINING_FAQ_ITEMS,
  GROUP_TRAINING_TILES_LIST,
} from "./constants";

import { FullWidthSection } from "@/components/custom/full-width-section";
import { TilesCarousel } from "@/components/custom/tiles-carousel";
import { FAQ } from "@/components/custom/faq";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Treningi grupowe",
  description:
    "Odkryj treningi grupowe w QTYLA Training Club — małe, kameralne grupy, indywidualne podejście i realne efekty. Zapisz się już dziś!",
};

const GroupTrainingPage = () => {
  return (
    <main className="bg-deep-black pt-10 pb-10 pl-6 text-white md:pt-24">
      <div className="mb-10 w-full text-left">
        <h3 className="section-subtitle pr-6">jedno miejsce, wspólny cel</h3>
        <h2 className="section-title mb-4 ml-0 pr-6">Treningi grupowe</h2>
        <p className="section-content mb-10 max-w-7xl pr-6 text-left">
          Zajęcia grupowe w QTYLA to świadomy trening w małych zespołach (4-8
          osób), bez chaosu i przypadkowości. Każdy format ma swój cel — od
          spalania i wydolności (HYROX, Burning), przez ogólną sprawność
          (Functional), siłę (Strength), aż po mobilność i regenerację
          (Mobility). Małe grupy pozwalają zachować technikę, tempo i
          indywidualne podejście, a każdy trening można dopasować do poziomu
          uczestnika. To forma, która daje atmosferę, motywację i realne efekty
          — bez tłoku.
        </p>
        <Button asChild variant="outline" size="lg">
          <Link target="_blank" href="https://app.fitssey.com/qtylaclub">
            Zapisz się
          </Link>
        </Button>
      </div>
      <div className="xl:pr-6">
        <TilesCarousel
          tilesList={GROUP_TRAINING_TILES_LIST}
          itemClassName="xl:basis-[25%] 2xl:basis-[25%]"
        />
      </div>
      <FullWidthSection title="FAQ">
        <FAQ items={GROUP_TRAINING_FAQ_ITEMS} />
      </FullWidthSection>
    </main>
  );
};

export default GroupTrainingPage;
