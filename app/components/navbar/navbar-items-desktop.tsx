"use client";

import { scrollSectionIntoView } from "@/app/utils";

import { MENU_ITEMS } from "./constants";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavbarItemsMobile() {
  return (
    <ul className="hidden items-center gap-6 md:flex">
      {MENU_ITEMS.map(({ sectionId, label, isLink }) => {
        const buttonClassNames =
          "hover:text-gold uppercase hover:bg-transparent";
        const buttonVariant = "ghost";

        return (
          <li key={sectionId}>
            {isLink ? (
              <Button
                asChild
                variant={buttonVariant}
                className={buttonClassNames}
              >
                <Link href={sectionId}>{label}</Link>
              </Button>
            ) : (
              <Button
                onClick={() => scrollSectionIntoView(sectionId)}
                variant={buttonVariant}
                className={buttonClassNames}
              >
                {label}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
