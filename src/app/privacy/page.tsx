import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { PRIVACY, PRIVACY_UPDATED } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Surely collects, uses, stores and protects personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage eyebrow="Legal" title="Privacy Policy" updated={PRIVACY_UPDATED} sections={PRIVACY} />;
}
