import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ExperimentPanel } from "@/components/experiment-panel";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { PageCta } from "@/components/sections/page-cta";
import { EXPERIMENTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "LifeAdmin, PromptTrim and Solvr: small experiments that turn everyday problems into things people can use.",
  alternates: { canonical: "/experiments" },
};

export default function ExperimentsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Experiments" title="Questions, turned into things">
        Small, honest experiments. Each one began as a problem, and each one is
        how we find out whether we were asking the right question.
      </PageHero>
      <section className="bg-cloud-50 py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {EXPERIMENTS.map((e, i) => (
            <Reveal key={e.slug} delay={i * 90}>
              <ExperimentPanel experiment={e} className="h-full" />
            </Reveal>
          ))}
        </Container>
      </section>
      <PageCta
        title="Want to shape what comes next?"
        body="Tell us what should work better and it might be our next experiment."
      />
    </PageShell>
  );
}
