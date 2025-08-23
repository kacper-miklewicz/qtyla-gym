"use client";

import { scrollSectionIntoView } from "@/app/utils";

import { MENU_ITEMS } from "./constants";

import { Button } from "@/components/ui/button";

export default function NavbarItemsMobile() {
  return (
    <ul className="hidden items-center gap-6 md:flex">
      {MENU_ITEMS.map(({ sectionId, label }) => (
        <li key={sectionId}>
          <Button
            onClick={() => scrollSectionIntoView(sectionId)}
            variant="ghost"
            className="hover:text-gold uppercase hover:bg-transparent"
          >
            {label}
          </Button>
        </li>
      ))}
    </ul>
  );
}
