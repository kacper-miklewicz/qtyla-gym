"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { scrollSectionIntoView } from "@/app/utils";

import { getMenuItems } from "./utils";

import { Button } from "@/components/ui/button";

export default function NavbarItemsMobile() {
  const pathname = usePathname();
  const menuItems = getMenuItems(pathname);

  return (
    <ul className="hidden items-center gap-6 md:flex">
      {menuItems.map(({ sectionId, label, isLink }) => {
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
