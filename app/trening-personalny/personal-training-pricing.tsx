import {
  DUO_TRAININGS_PACKAGES_TILES_LIST,
  PERSONAL_TRAININGS_PACKAGES_TILES_LIST,
} from "./constants";

import { TilesCarousel } from "@/components/custom/tiles-carousel";

function PersonalTrainingPricing() {
  return (
    <>
      <div>
        <h2 className="section-title mb-4">Oferta treningów personalnych</h2>
        <TilesCarousel
          itemClassName="xl:basis-[24.5%] 2xl:basis-[24.5%]"
          tilesList={PERSONAL_TRAININGS_PACKAGES_TILES_LIST}
        />
      </div>
      <div>
        <h2 className="section-title mb-4">Oferta treningów duo</h2>
        <p className="section-content mb-6">
          Trening personalny dla dwóch osób — idealny z partnerem, przyjacielem
          lub przyjaciółką.
        </p>
        <TilesCarousel
          itemClassName="xl:basis-[24.5%] 2xl:basis-[24.5%]"
          tilesList={DUO_TRAININGS_PACKAGES_TILES_LIST}
        />
      </div>
    </>
  );
}

export { PersonalTrainingPricing };
