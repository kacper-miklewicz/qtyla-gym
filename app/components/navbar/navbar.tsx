import NavbarItemsMobile from "./navbar-items-mobile";
import NavbarItemsDesktop from "./navbar-items-desktop";

export default function Navbar() {
  return (
    <nav className="bg-deep-black flex h-16 items-center justify-between px-4 py-2 text-white md:px-8">
      <p className="text-3xl font-bold">QTYLA</p>
      <NavbarItemsMobile />
      <NavbarItemsDesktop />
    </nav>
  );
}
