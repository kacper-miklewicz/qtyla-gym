import { Metadata } from "next";
import React from "react";

import { MEMBERSHIP_TILES_LIST, FAQ_ITEMS } from "./constants";

import { FullWidthSection } from "@/components/custom/full-width-section";
import { TilesCarousel } from "@/components/custom/tiles-carousel";
import { FAQ } from "@/components/custom/faq";
import { MembershipForm } from "./membership-form";

export const metadata: Metadata = {
  title: "Gym Pass",
  description:
    "Dołącz do ekskluzywnej społeczności QTYLA Training Club i ciesz się dostępem do najlepszej przestrzeni treningowej w Kwidzynie.",
};

const MembershipPage = () => {
  return (
    <main className="bg-deep-black pt-10 pb-10 pl-6 text-white md:pt-24">
      <div className="w-full text-left">
        <h3 className="section-subtitle pr-6">dołącz do qtyla training club</h3>
        <h2 className="section-title mb-10 ml-0 pr-6">
          trenuj w komforcie, bez tłoku
        </h2>
        <p className="section-content mb-10 max-w-7xl pr-6 text-left">
          GYM PASS to prosty i wygodny dostęp do naszej siłowni. Trenujesz
          samodzielnie w komfortowej przestrzeni, bez tłoku i chaosu. To idealna
          opcja dla osób, które chcą skupić się na własnym treningu –
          efektywnie, spokojnie i z dostępem do najwyższej jakości sprzętu.
        </p>
      </div>
      <TilesCarousel tilesList={MEMBERSHIP_TILES_LIST} />
      <FullWidthSection title="Nasz FAQ">
        <FAQ items={FAQ_ITEMS} />
      </FullWidthSection>
      <FullWidthSection title="Cena" className="items-center">
        <p className="section-content mb-1">
          Subskrypcja klubowa wynosi <span className="line-through">450</span>
          &nbsp;350&nbsp;PLN/miesiąc
        </p>
        <p className="section-content text-sm">
          *obecna cena obowiązuje tylko do końca grudnia
        </p>
      </FullWidthSection>
      <FullWidthSection title="Dołącz do nas" id="sign-up-form">
        <MembershipForm />
      </FullWidthSection>
    </main>
  );
};

export default MembershipPage;
