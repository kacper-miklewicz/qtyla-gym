"use client";

import { menuItems } from "./constants";

import { Button } from "@/components/ui/button";

export default function NavbarItemsMobile() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="hidden items-center gap-6 md:flex">
      {menuItems.map(({ sectionId, label }) => (
        <li key={sectionId}>
          <Button
            onClick={() => scrollToSection(sectionId)}
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
