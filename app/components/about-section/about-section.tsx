import { ABOUT_ITEMS } from "./constants";

export default function AboutSection() {
  return (
    <section id="about" className="section-base">
      <h2 className="section-title mb-20">O klubie</h2>
      <ul className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {ABOUT_ITEMS.map(({ title, description, Icon }) => (
          <li key={title} className="flex max-w-md flex-col items-center gap-6">
            <Icon className="size-16 flex-shrink-0 text-white" />
            <div className="flex flex-col gap-4">
              <h3 className="h-20 text-2xl font-bold uppercase">{title}</h3>
              <p className="section-content text-xl">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
