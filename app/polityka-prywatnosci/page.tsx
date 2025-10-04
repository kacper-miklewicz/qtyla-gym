import { Metadata } from "next";

import { POLICY_RULES } from "./constants";

import { NumberedRuleList } from "@/components/custom/numbered-rule-list";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Zapoznaj się z naszą polityką prywatności, aby dowiedzieć się, jak chronimy Twoje dane osobowe i zapewniamy bezpieczeństwo informacji w QTYLA Training Club.",
};

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
