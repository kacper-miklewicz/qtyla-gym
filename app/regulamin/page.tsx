import { cn } from "@/lib/utils";
import { RULES, Rule } from "./constants";

function NumberedRuleList({
  rules,
  prefix = "",
  level = 1,
}: {
  rules: Rule[];
  prefix?: string;
  level?: number;
}) {
  return (
    <ol className={level === 1 ? "ml-4 space-y-6" : "ml-6"}>
      {rules.map((rule, idx) => {
        const number = level === 1 ? `${idx + 1}.` : `${prefix}${idx + 1}.`;

        return (
          <li key={rule.title}>
            <span
              className={cn({
                "text-xl font-semibold": level === 1,
              })}
            >
              {number} {rule.title}
            </span>
            {rule.items && rule.items.length > 0 && (
              <NumberedRuleList
                rules={rule.items}
                prefix={number}
                level={level + 1}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function RulesPage() {
  return (
    <section id="rules" className="section-base w-full">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Regulamin klubu
      </h2>
      <div className="mx-auto max-w-5xl px-4 text-left text-lg">
        <NumberedRuleList rules={RULES} />
      </div>
    </section>
  );
}
