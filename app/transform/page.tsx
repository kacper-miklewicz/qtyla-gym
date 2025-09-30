import React from "react";

import { FullWidthSection } from "@/components/custom/full-width-section";
import { TilesCarousel } from "@/components/custom/tiles-carousel";
import { FAQ } from "@/components/custom/faq";
import { SignUpButton } from "../components/sign-up-button";

import { TRANSFORM_FAQ_ITEMS, TRANSFORM_TILES_LIST } from "./constants";

const TransformPage = () => {
  return (
    <main className="bg-deep-black pt-10 pb-10 pl-6 text-white md:pt-24">
      <div className="mb-10 w-full text-left">
        <h3 className="section-subtitle pr-6">program transform</h3>
        <h2 className="section-title mb-4 ml-0 pr-6">
          Przekształć swoje ciało w 12 tygodni
        </h2>
        <p className="section-content mb-10 max-w-7xl pr-6 text-left">
          Transform to nasz najbardziej skuteczny, limitowany program treningu
          personalnego - stworzony, aby budować siłę, poprawiać zdrowie i
          kształtować sylwetkę z trwałymi efektami. W ciągu 12 tygodni
          realizujesz spójny plan transformacji, który łączy profesjonalny
          coaching, indywidualnie dopasowany trening oraz pełne wsparcie zespołu
          QTYLA.
        </p>
        <SignUpButton />
      </div>
      <TilesCarousel
        tilesList={TRANSFORM_TILES_LIST}
        itemClassName="xl:basis-[25%] 2xl:basis-[25%] xl:-6"
      />
      <FullWidthSection title="FAQ">
        <FAQ items={TRANSFORM_FAQ_ITEMS} />
      </FullWidthSection>
      <FullWidthSection title="Cena" className="items-center">
        <p className="section-content">
          Cena pakietu wynosi 6000 zł. W jego zakres wchodzi 36 treningów w
          okresie 12 tygodni.
        </p>
      </FullWidthSection>
      <FullWidthSection title="Podejmij się wyzwania" id="sign-up-form">
        Formularz zapisu
      </FullWidthSection>
    </main>
  );
};

export default TransformPage;
