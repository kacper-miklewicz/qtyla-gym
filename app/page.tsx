import Navbar from "./components/navbar/navbar";
import { menuItems } from "./components/navbar/constants";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Temporary solution: to test the menu */}
        {menuItems.map((item) => (
          <section
            id={item.sectionId}
            key={item.sectionId}
            className="min-h-screen flex items-center justify-center border-b"
          >
            <h1 className="text-4xl font-bold font-stretch-semi-condensed">
              {item.label}
            </h1>
          </section>
        ))}
      </main>
    </div>
  );
}
