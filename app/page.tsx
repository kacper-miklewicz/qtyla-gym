import { menuItems } from "./components/navbar/constants";

import Navbar from "./components/navbar/navbar";

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
            className="flex min-h-screen items-center justify-center border-b"
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
