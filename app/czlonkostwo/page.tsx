import { Metadata } from "next";
import React from "react";

import { MEMBERSHIP_TILES_LIST, FAQ_ITEMS } from "./constants";

import { FullWidthSection } from "@/components/custom/full-width-section";
import { TilesCarousel } from "@/components/custom/tiles-carousel";
import { FAQ } from "@/components/custom/faq";
import { MembershipForm } from "./membership-form";

export const metadata: Metadata = {
  title: "Członkostwo",
  description:
    "Dołącz do ekskluzywnej społeczności QTYLA Training Club i ciesz się dostępem do najlepszej przestrzeni treningowej w Kwidzynie.",
};

const MembershipPage = () => {
  return (
    <main className="bg-deep-black pt-10 pb-10 pl-6 text-white md:pt-24">
      <div className="w-full text-left">
        <h3 className="section-subtitle pr-6">dołącz do qtyla training club</h3>
        <h2 className="section-title mb-10 ml-0 pr-6">
          Bądź częścią czegoś większego
        </h2>
        <p className="section-content mb-10 max-w-7xl pr-6 text-left">
          Członkostwo w QTYLA to dostęp do limitowanej społeczności, w której
          trenujesz w spokoju, bez tłoku i chaosu. To miejsce stworzone dla
          ludzi, którzy chcą rozwijać się świadomie i otaczać się tymi, którzy
          myślą podobnie.
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
