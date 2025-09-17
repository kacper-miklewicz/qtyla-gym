import Image from "next/image";
import Link from "next/link";

import NavbarItemsMobile from "./navbar-items-mobile";
import NavbarItemsDesktop from "./navbar-items-desktop";

export default function Navbar() {
  return (
    <nav className="font-heading flex h-24 items-center justify-between bg-black px-6 text-white md:h-30 md:px-8">
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
