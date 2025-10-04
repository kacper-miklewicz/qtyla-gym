import { cn } from "@/lib/utils";

type Rule = {
  title: string;
  items?: Rule[];
};

interface NumberedRuleListProps {
  rules: Rule[];
  prefix?: string;
  level?: number;
}

function NumberedRuleList({
  rules,
  prefix = "",
  level = 1,
}: NumberedRuleListProps) {
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

export { NumberedRuleList, type Rule };
