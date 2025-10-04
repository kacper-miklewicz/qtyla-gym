import { Metadata } from "next";

import { RULES } from "./constants";

import { NumberedRuleList } from "@/components/custom/numbered-rule-list";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Zapoznaj się z regulaminem QTYLA Training Club.",
};

export default function RulesPage() {
  return (
    <main className="section-base w-full">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Regulamin klubu
      </h1>
      <div className="mx-auto max-w-5xl px-4 text-left text-lg">
        <NumberedRuleList rules={RULES} />
      </div>
    </main>
  );
}
