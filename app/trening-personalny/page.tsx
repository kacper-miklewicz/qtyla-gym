import React from "react";

import {
  PERSONAL_TRAINING_FAQ_ITEMS,
  PERSONAL_TRAINING_TILES_LIST,
} from "./constants";

import { FullWidthSection } from "@/components/custom/full-width-section";
import { TilesCarousel } from "@/components/custom/tiles-carousel";
import { FAQ } from "@/components/custom/faq";
import { SignUpButton } from "../components/sign-up-button";
import { PersonalTrainingTable } from "./personal-training-table";
import { PersonalTrainingForm } from "./personal-training-form";

const PersonalTrainingPage = () => {
  return (
    <main className="bg-deep-black pt-10 pb-10 pl-6 text-white md:pt-24">
      <div className="mb-10 w-full text-left">
        <h3 className="section-subtitle pr-6">rozpocznij swoją przygodę</h3>
        <h2 className="section-title mb-4 ml-0 pr-6">Trening personalny</h2>
        <SignUpButton />
      </div>
      <div className="xl:pr-6">
        <TilesCarousel
          tilesList={PERSONAL_TRAINING_TILES_LIST}
          itemClassName="xl:basis-[25%] 2xl:basis-[25%]"
        />
      </div>
      <FullWidthSection title="Cennik" className="md:block lg:flex">
        <PersonalTrainingTable />
      </FullWidthSection>
      <FullWidthSection title="FAQ">
        <FAQ items={PERSONAL_TRAINING_FAQ_ITEMS} />
      </FullWidthSection>
      <FullWidthSection title="Umów się na trening" id="sign-up-form">
        <PersonalTrainingForm />
      </FullWidthSection>
    </main>
  );
};

export default PersonalTrainingPage;
