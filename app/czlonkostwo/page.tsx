import React from "react";

import { MEMBERSHIP_TILES_LIST } from "./constants";

import TilesCarousel from "@/components/custom/tiles-carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "./constants";

const MembershipPage = () => {
  return (
    <main className="bg-deep-black pt-10 pb-10 pl-6 text-white md:pt-24">
      <div className="w-full text-left">
        <h3 className="section-subtitle pr-6">dołącz do qtyla fitness club</h3>
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
      <div className="py-10 pt-20 pr-6 md:flex lg:pr-16">
        <h3 className="mb-6 basis-1/3 text-4xl font-bold md:text-5xl lg:basis-2/5 lg:pl-10 lg:text-6xl">
          Nasz FAQ
        </h3>
        <div className="basis-2/3 lg:basis-3/5">
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="items-center pr-6 md:flex lg:pr-16">
        <h3 className="mb-6 basis-1/3 text-4xl font-bold md:text-5xl lg:basis-2/5 lg:pl-10 lg:text-6xl">
          Cena
        </h3>
        <p className="section-content">
          Subskrypcja klubowa wynosi 350 PLN/miesiąc
        </p>
      </div>
    </main>
  );
};

export default MembershipPage;
