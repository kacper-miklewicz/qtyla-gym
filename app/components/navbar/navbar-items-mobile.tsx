"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

import { scrollSectionIntoView } from "@/app/utils";

import { getMenuItems } from "./utils";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Socials from "./socials";

export default function NavbarItemsDesktop() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const menuItems = getMenuItems(pathname);

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent hover:text-white"
          onClick={() => setIsOpen(true)}
        >
          <IoMenuSharp className="size-8 text-white" />
        </Button>
        <SheetContent
          side="top"
          className="bg-deep-black h-full text-white"
          showClose={false}
        >
          <SheetHeader className="px-6 py-8">
            <SheetTitle className="flex items-center justify-end text-white">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <IoCloseSharp className="size-8 text-white" />
              </Button>
            </SheetTitle>
          </SheetHeader>
          <SheetDescription asChild className="text-white">
            <ul className="flex h-full flex-col items-center justify-start gap-10 py-6 font-bold">
              {menuItems.map(
                ({ sectionId, label, isLink, isExternal, href }) => {
                  const buttonClassNames =
                    "text-2xl uppercase hover:bg-transparent hover:text-white";
                  const buttonVariant = "ghost";

                  const linkHref = isExternal ? href : sectionId;

                  return (
                    <li key={label}>
                      {isLink ? (
                        <Button
                          type="button"
                          className={buttonClassNames}
                          variant={buttonVariant}
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href={linkHref!}>{label}</Link>
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          onClick={() =>
                            scrollSectionIntoView(sectionId!, () =>
                              setIsOpen(false),
                            )
                          }
                          className={buttonClassNames}
                          variant={buttonVariant}
                        >
                          {label}
                        </Button>
                      )}
                    </li>
                  );
                },
              )}
            </ul>
          </SheetDescription>
          <SheetFooter>
            <Socials variant="mobile" />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
