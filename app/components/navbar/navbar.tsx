import NavbarItemsMobile from "./navbar-items-mobile";
import NavbarItemsDesktop from "./navbar-items-desktop";

export default function Navbar() {
  return (
    <nav className="bg-deep-black px-4 py-2 text-white flex justify-between items-center md:px-8">
      <p className="font-bold text-3xl ">QTYLA</p>
      <NavbarItemsMobile />
      <NavbarItemsDesktop />
    </nav>
  );
}
