"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/use-in-view";
import { getProblem, PROBLEMS } from "@/lib/problems";
import { EXPERIMENTS } from "@/lib/site";

const PROBLEM_SLUG = "my-ai-prompts-get-longer-and-harder-to-manage";
const EXPERIMENT_SLUG = "prompttrim";

function Connector({ inView }: { inView: boolean }) {
  return (
    <svg
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="hidden h-6 w-full lg:block"
    >
      <path
        d="M0 12 H82"
        fill="none"
        stroke="var(--color-lime-500)"
        strokeWidth="2"
        pathLength={100}
        strokeDasharray={100}
        style={{
          strokeDashoffset: inView ? 0 : 100,
          transition: "stroke-dashoffset 900ms cubic-bezier(0.16,1,0.3,1) 300ms",
        }}
      />
      <path
        d="M74 4 L86 12 L74 20"
        fill="none"
        stroke="var(--color-lime-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={100}
        strokeDasharray={100}
        style={{
          strokeDashoffset: inView ? 0 : 100,
          transition: "stroke-dashoffset 400ms cubic-bezier(0.16,1,0.3,1) 1100ms",
        }}
      />
    </svg>
  );
}

function HubLink({
  href,
  label,
  count,
}: {
  href: string;
  label: string;
  count: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-1 items-center justify-between gap-4 rounded-2xl border border-midnight-400 bg-midnight-800 p-6 transition-colors duration-200 hover:border-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-700 focus-visible:outline-none"
    >
      <span className="flex flex-col gap-1">
        <span className="text-body-lg font-bold text-cloud-50">{label}</span>
        <span className="text-body-sm text-midnight-100">{count}</span>
      </span>
      <ArrowUpRight
        className="size-5 shrink-0 text-lime-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        weight="bold"
      />
    </Link>
  );
}

export function QuestionToThing() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const problem = getProblem(PROBLEM_SLUG);
  const experiment = EXPERIMENTS.find((e) => e.slug === EXPERIMENT_SLUG);
  if (!problem || !experiment) return null;

  return (
    <section className="bg-midnight-700 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <SectionEyebrow tone="light">How it starts</SectionEyebrow>
          <h2 className="max-w-2xl text-heading-md font-extrabold text-cloud-50 uppercase sm:text-heading-lg">
            A question becomes a thing.
          </h2>
          <p className="max-w-xl text-body-lg text-midnight-100">
            Every experiment on Surely starts as somebody&rsquo;s sentence.
            Here&rsquo;s one that already became something.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <div
            className={cn(
              "flex flex-col gap-4 rounded-2xl bg-cloud-50 p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              inView ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
            )}
          >
            <span className="text-body-xs font-semibold tracking-[0.18em] text-midnight-400 uppercase">
              The question
            </span>
            <p className="font-serif text-heading-xs text-pretty text-midnight-900">
              &ldquo;{problem.title}&rdquo;
            </p>
            <Link
              href={`/problems/${problem.slug}`}
              className="w-fit text-body-sm font-semibold text-midnight-800 underline decoration-4 decoration-lime-500 underline-offset-4"
            >
              See the problem
            </Link>
          </div>

          <Connector inView={inView} />

          <div
            className={cn(
              "flex flex-col gap-4 rounded-2xl bg-lime-500 p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              inView ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            )}
            style={{ transitionDelay: inView ? "150ms" : "0ms" }}
          >
            <span className="text-body-xs font-semibold tracking-[0.18em] text-midnight-700 uppercase">
              The thing
            </span>
            <p className="text-heading-xs font-extrabold text-midnight-900">
              {experiment.name}
            </p>
            <p className="text-body-md text-midnight-800">{experiment.summary}</p>
            <Link
              href={`/experiments#${experiment.slug}`}
              className="w-fit text-body-sm font-semibold text-midnight-900 underline decoration-4 decoration-midnight-900/30 underline-offset-4 transition-colors duration-200 hover:decoration-midnight-900"
            >
              See the experiment
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <HubLink href="/problems" label="Problem bank" count={`${PROBLEMS.length} problems and counting`} />
          <HubLink href="/experiments" label="Experiments" count={`${EXPERIMENTS.length} things we've tried`} />
        </div>
      </Container>
    </section>
  );
}
