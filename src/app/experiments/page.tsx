import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ExperimentBank } from "@/components/experiment-bank";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { PageCta } from "@/components/sections/page-cta";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "13 small, honest experiments that turn everyday problems into things people can use.",
  alternates: { canonical: "/experiments" },
};

export default function ExperimentsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Experiments" title="Questions, turned into things">
        We build just enough to test whether a better way actually works. Some
        experiments become products. Some change direction. Some stop. All of
        them teach us something.
      </PageHero>
      <section className="bg-cloud-50 py-16 sm:py-24">
        <Container>
          <ExperimentBank />
        </Container>
      </section>
      <PageCta
        title="Want to shape what comes next?"
        body="Tell us what should work better and it might be our next experiment."
      />
    </PageShell>
  );
}
