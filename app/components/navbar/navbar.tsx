import Image from "next/image";
import Link from "next/link";

import NavbarItemsMobile from "./navbar-items-mobile";
import NavbarItemsDesktop from "./navbar-items-desktop";

export default function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between bg-black px-6 py-10 text-white md:px-8">
      <Link href="/">
        <Image
          src="/logo-white.png"
          alt="qtyla training club logo"
          width={120}
          height={40}
        />
      </Link>
      <NavbarItemsMobile />
      <NavbarItemsDesktop />
    </nav>
  );
}
