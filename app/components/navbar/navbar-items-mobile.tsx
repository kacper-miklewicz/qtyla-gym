"use client";

import { useState } from "react";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

import { scrollSectionIntoView } from "@/app/utils";

import { MENU_ITEMS } from "./constants";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function NavbarItemsDesktop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
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
          <SheetHeader className="h-full px-4 py-2">
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
            <SheetDescription asChild className="text-white">
              <ul className="flex h-[calc(100%-128px)] flex-col items-center justify-center gap-10 font-bold">
                {MENU_ITEMS.map(({ sectionId, label }) => (
                  <li key={sectionId}>
                    <Button
                      type="button"
                      onClick={() =>
                        scrollSectionIntoView(sectionId, () => setIsOpen(false))
                      }
                      className="text-2xl uppercase hover:bg-transparent hover:text-white"
                      variant="ghost"
                    >
                      {label}
                    </Button>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
