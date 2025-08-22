"use client";

import { useState } from "react";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

import { menuItems } from "./constants";

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

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <ul className="mt-10 flex flex-col items-center gap-6 text-2xl font-bold">
                {menuItems.map(({ sectionId, label }) => (
                  <li key={sectionId}>
                    <Button
                      type="button"
                      onClick={() => scrollToSection(sectionId)}
                      className="uppercase hover:bg-transparent hover:text-white"
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
