"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import NavbarItemsMobile from "./navbar-items-mobile";
import NavbarItemsDesktop from "./navbar-items-desktop";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "font-subheading z-30 flex h-24 w-full items-center justify-between px-6 text-white md:h-30 md:px-8",
        {
          "from-deep-black/90 absolute top-0 left-0 bg-gradient-to-b to-transparent backdrop-blur-sm":
            pathname === "/",
          "bg-deep-black": pathname !== "/",
        },
      )}
    >
      <Link href="/" className="relative h-14 w-32 shrink-0 md:h-28 md:w-48">
        <Image
          src="/logo-full-white.png"
          alt="qtyla training club logo"
          fill
          objectFit="contain"
        />
      </Link>
      <NavbarItemsMobile />
      <NavbarItemsDesktop />
    </nav>
  );
}
