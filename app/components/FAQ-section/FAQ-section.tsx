import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { FAQ_ITEMS } from "./constants";

export default function FAQSection() {
  return (
    <section id="FAQ" className="section-base">
      <h2 className="mb-12 text-3xl font-bold">Często zadawane pytania</h2>
      <Accordion className="w-full max-w-4xl" type="single" collapsible>
        {FAQ_ITEMS.map(({ title, items }) => (
          <AccordionItem value={title} key={title}>
            <AccordionTrigger
              iconVariant="plus"
              className="mb-2 w-full text-left text-xl font-bold"
            >
              {title}
            </AccordionTrigger>
            <AccordionContent className="mb-6">
              <Accordion type="single" collapsible>
                {items.map(({ question, answer }) => (
                  <AccordionItem key={question} value={question}>
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
