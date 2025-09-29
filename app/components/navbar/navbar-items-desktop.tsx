"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { scrollSectionIntoView } from "@/app/utils";

import { getMenuItems } from "./utils";

import { Button } from "@/components/ui/button";
import Socials from "./socials";

export default function NavbarItemsMobile() {
  const pathname = usePathname();
  const menuItems = getMenuItems(pathname);

  return (
    <>
      <ul className="hidden items-center gap-6 lg:flex">
        {menuItems.map(({ sectionId, label, isLink, isExternal, href }) => {
          const buttonClassNames =
            "hover:text-gold uppercase hover:bg-transparent text-md text-xl xl:text-2xl";
          const buttonVariant = "ghost";

          const linkHref = isExternal ? href : sectionId;

          return (
            <li key={label}>
              {isLink ? (
                <Button
                  asChild
                  variant={buttonVariant}
                  className={buttonClassNames}
                >
                  <Link
                    href={linkHref!}
                    target={isExternal ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {label}
                  </Link>
                </Button>
              ) : (
                <Button
                  onClick={() => scrollSectionIntoView(sectionId!)}
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
      <Socials variant="desktop" />
    </>
  );
}
