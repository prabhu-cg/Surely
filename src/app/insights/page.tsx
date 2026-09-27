import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Insights } from "@/components/sections/insights";
import { PageCta } from "@/components/sections/page-cta";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Observations, questions and lessons from Surely. Not every thought becomes a product, but it may be worth sharing.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Insights" title="We ask questions out loud">
        Not every thought becomes a product. Sometimes an observation is worth
        sharing, a question needs discussion, or the best way to understand
        something is to write about it.
      </PageHero>
      <Insights variant="full" />
      <PageCta />
    </PageShell>
  );
}
