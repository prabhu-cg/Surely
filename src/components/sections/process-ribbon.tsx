import {
  Question,
  Target,
  Lightbulb,
  Hammer,
  PaintBrush,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Container } from "@/components/container";
import { InlineLink } from "@/components/inline-link";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";

const STEPS: { title: string; icon: Icon }[] = [
  { title: "Question", icon: Question },
  { title: "Understand", icon: Target },
  { title: "Explore", icon: Lightbulb },
  { title: "Build", icon: Hammer },
  { title: "Improve", icon: PaintBrush },
];

export function ProcessRibbon() {
  return (
    <section className="bg-cloud-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <SectionEyebrow>How we work</SectionEyebrow>
          <h2 className="max-w-2xl text-heading-md font-extrabold text-midnight-800 uppercase sm:text-heading-lg">
            Five steps, one direction.
          </h2>
        </div>

        <ol className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-0">
          {STEPS.map(({ title, icon: Icon }, i) => (
            <li key={title} className="flex flex-1 items-start gap-4 lg:flex-col lg:items-center lg:gap-4 lg:text-center">
              <Reveal direction="left" delay={i * 90} className="flex flex-1 items-start gap-4 lg:flex-col lg:items-center lg:gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-midnight-500">
                  <Icon className="size-5 text-lime-500" weight="regular" />
                </span>
                <p className="pt-2 text-body-lg font-semibold text-midnight-800 lg:pt-0">
                  {title}
                </p>
              </Reveal>
              {i < STEPS.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 self-center bg-cloud-600 lg:mt-[1.375rem] lg:block"
                />
              ) : null}
            </li>
          ))}
        </ol>

        <InlineLink href="/what-we-do">See how we work in detail</InlineLink>
      </Container>
    </section>
  );
}
