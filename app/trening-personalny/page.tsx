import TilesCarousel from "@/components/custom/tiles-carousel";
import React from "react";
import { PERSONAL_TRAINING_TILES_LIST } from "./constants";
import { PersonalTrainingTable } from "./personal-training-table";
import { FullWidthSection } from "@/components/custom/full-width-section";

const PersonalTrainingPage = () => {
  return (
    <main className="bg-deep-black pt-10 pb-10 pl-6 text-white md:pt-24">
      <div className="w-full text-left">
        <h3 className="section-subtitle pr-6">rozpocznij swoją przygodę</h3>
        <h2 className="section-title mb-10 ml-0 pr-6">Trening personalny</h2>
      </div>
      <TilesCarousel tilesList={PERSONAL_TRAINING_TILES_LIST} />
      <FullWidthSection title="Cennik">
        <PersonalTrainingTable />
      </FullWidthSection>
    </main>
  );
};

export default PersonalTrainingPage;
