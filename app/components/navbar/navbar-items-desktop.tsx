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
    <ul className="hidden md:flex items-center gap-6">
      {menuItems.map(({ sectionId, label }) => (
        <li key={sectionId}>
          <Button
            onClick={() => scrollToSection(sectionId)}
            variant="ghost"
            className="hover:bg-transparent hover:text-gold uppercase"
          >
            {label}
          </Button>
        </li>
      ))}
    </ul>
  );
}
