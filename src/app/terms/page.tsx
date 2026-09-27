import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { TERMS, TERMS_UPDATED } from "@/content/terms";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the Surely website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage eyebrow="Legal" title="Terms of Use" updated={TERMS_UPDATED} sections={TERMS} />;
}
