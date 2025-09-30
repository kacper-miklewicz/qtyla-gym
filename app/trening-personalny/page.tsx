import React from "react";

import {
  PERSONAL_TRAINING_FAQ_ITEMS,
  PERSONAL_TRAINING_TILES_LIST,
} from "./constants";

import { FullWidthSection } from "@/components/custom/full-width-section";
import { TilesCarousel } from "@/components/custom/tiles-carousel";
import { FAQ } from "@/components/custom/faq";
import { PersonalTrainingTable } from "./personal-training-table";
import { SignUpButton } from "../components/sign-up-button";

const PersonalTrainingPage = () => {
  return (
    <main className="bg-deep-black pt-10 pb-10 pl-6 text-white md:pt-24">
      <div className="mb-10 w-full text-left">
        <h3 className="section-subtitle pr-6">rozpocznij swoją przygodę</h3>
        <h2 className="section-title mb-4 ml-0 pr-6">Trening personalny</h2>
        <SignUpButton />
      </div>
      <TilesCarousel
        tilesList={PERSONAL_TRAINING_TILES_LIST}
        itemClassName="xl:basis-[25%] 2xl:basis-[25%] xl:-6"
      />
      <FullWidthSection title="Cennik" className="md:block lg:flex">
        <PersonalTrainingTable />
      </FullWidthSection>
      <FullWidthSection title="FAQ">
        <FAQ items={PERSONAL_TRAINING_FAQ_ITEMS} />
      </FullWidthSection>
      <FullWidthSection title="Umów się na trening" id="sign-up-form">
        Formularz zapisu
      </FullWidthSection>
    </main>
  );
};

export default PersonalTrainingPage;
