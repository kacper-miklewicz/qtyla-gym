import Image from "next/image";
import Link from "next/link";

import NavbarItemsMobile from "./navbar-items-mobile";
import NavbarItemsDesktop from "./navbar-items-desktop";

export default function Navbar() {
  return (
    <nav className="flex h-24 items-center justify-between bg-black px-6 text-white md:h-30 md:px-8">
      <Link href="/" className="relative h-14 w-32 md:h-24 md:w-44">
        <Image
          src="/logo-full-white.png"
          alt="qtyla training club logo"
          fill
          objectFit="contain"
        />
      </Link>
      <NavbarItemsMobile />
      <NavbarItemsDesktop />
      <div className="hidden md:block">socials</div>
    </nav>
  );
}
