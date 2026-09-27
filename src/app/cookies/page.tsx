import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { COOKIES, COOKIES_UPDATED } from "@/content/cookies";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "How Surely uses cookies and similar technologies, and your choices.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return <LegalPage eyebrow="Legal" title="Cookies Policy" updated={COOKIES_UPDATED} sections={COOKIES} />;
}
