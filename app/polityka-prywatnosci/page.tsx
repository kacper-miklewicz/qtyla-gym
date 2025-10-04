import { POLICY_RULES } from "./constants";

import { NumberedRuleList } from "@/components/custom/numbered-rule-list";

export default function PrivacyPolicyPage() {
  return (
    <main className="section-base w-full">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Polityka prywatności
      </h1>
      <div className="mx-auto max-w-5xl px-4 text-left text-lg">
        <NumberedRuleList rules={POLICY_RULES} />
      </div>
    </main>
  );
}
