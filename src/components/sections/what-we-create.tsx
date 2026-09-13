import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";

const TAGS = [
  "Question",
  "Understanding",
  "Possibility",
  "Experiment",
  "Building",
  "Learning",
  "Improving",
];

export function WhatWeCreate() {
  return (
    <section className="bg-cloud-100 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionEyebrow>What we create</SectionEyebrow>
        <h2 className="max-w-2xl text-heading-md font-extrabold text-midnight-800 uppercase sm:text-heading-lg">
          Ideas are only useful when they go somewhere.
        </h2>
        <p className="max-w-xl text-body-lg text-midnight-600">
          Surely explores, develops and supports ideas that can become
          useful products, services, systems and experiences. Our work may
          begin with a question. It shouldn’t end there.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-3">
          {TAGS.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-cloud-600 bg-cloud-50 px-4 py-2 text-body-sm font-medium text-midnight-700"
            >
              {tag}
            </li>
          ))}
        </ul>

        <CtaButton href="#what-we-do" variant="dark">
          Explore our offerings
        </CtaButton>
      </Container>
    </section>
  );
}
