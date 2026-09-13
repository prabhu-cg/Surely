import {
  Question,
  Target,
  Lightbulb,
  Hammer,
  PaintBrush,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";

const ITEMS: { title: string; icon: Icon; body: string }[] = [
  {
    title: "Question",
    icon: Question,
    body: "We start by questioning the way things are today. What are we seeing? What are we assuming? And why does it work this way?",
  },
  {
    title: "Understand",
    icon: Target,
    body: "We start by understanding the way things are today. What are we seeing? What are we assuming? And why does it work this way?",
  },
  {
    title: "Explore",
    icon: Lightbulb,
    body: "We challenge assumptions, consider different perspectives and explore alternative ways forward.",
  },
  {
    title: "Build",
    icon: Hammer,
    body: "We turn promising possibilities into products, services, experiences, systems or experiments that people can actually use and respond to.",
  },
  {
    title: "Improve",
    icon: PaintBrush,
    body: "Nothing’s perfect the first time. We listen, test, learn and adapt — using what happens in the real world to make things better.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-20 bg-cloud-100 py-20 sm:py-28"
    >
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <SectionEyebrow>What we do</SectionEyebrow>
          <h2 className="max-w-2xl text-heading-md font-extrabold text-midnight-800 uppercase sm:text-heading-lg">
            We find better ways forward.
          </h2>
          <p className="max-w-xl text-body-lg text-midnight-600">
            Surely brings together different perspectives to explore
            problems, uncover possibilities and build things that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ title, icon: Icon, body }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-cloud-600 bg-cloud-50 p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-midnight-500">
                <Icon className="size-5 text-lime-500" weight="regular" />
              </span>
              <p className="text-body-lg font-semibold text-midnight-800">
                {title}
              </p>
              <p className="text-body-sm text-midnight-500">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
