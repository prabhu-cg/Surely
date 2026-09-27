import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ProblemBank } from "@/components/problem-bank";
import { PageCta } from "@/components/sections/page-cta";

export const metadata: Metadata = {
  title: "Problem bank",
  description:
    "Everyday problems in work and life that are harder, slower or more frustrating than they should be. Browse them, search them, and add yours.",
  alternates: { canonical: "/problems" },
};

export default function ProblemsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Problem bank" title="Things that should work better">
        Everyday problems in work and life that are harder, slower or more
        frustrating than they should be. Find yours, or tell us a new one.
      </PageHero>
      <section className="bg-cloud-50 py-16 sm:py-24">
        <Container>
          <ProblemBank />
        </Container>
      </section>
      <PageCta
        title="There must be a better way."
        body="Tell us the problem. You don’t need to know the answer, that’s where we start."
      />
    </PageShell>
  );
}
