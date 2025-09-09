import { RULES } from "./constants";

export default function RulesPage() {
  return (
    <section id="rules" className="section-base w-full">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Regulamin klubu
      </h2>
      <ol className="mx-auto max-w-2xl space-y-0 px-4 text-left text-lg">
        {RULES.map((rule, idx) => (
          <li
            key={idx}
            className="border-concrete flex items-center gap-4 border-b py-4 last:border-b-0"
          >
            <span className="bg-gold-400 text-deep-black ring-gold-800 flex h-10 w-10 flex-shrink-0 items-center justify-center text-xl font-bold shadow-md ring-2">
              {idx + 1}
            </span>
            <span className="pt-1">{rule}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
