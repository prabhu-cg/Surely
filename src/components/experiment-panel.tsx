import {
  HouseLine,
  Scissors,
  Compass,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FORM_HREF, type Experiment } from "@/lib/site";
import { getProblem } from "@/lib/problems";

const ICONS: Record<string, Icon> = {
  lifeadmin: HouseLine,
  prompttrim: Scissors,
  solvr: Compass,
};

const SURFACES: Record<
  string,
  { panel: string; badge: string; body: string; muted: string; link: string }
> = {
  lifeadmin: {
    panel: "bg-lime-100 text-midnight-900",
    badge: "bg-midnight-700 text-lime-500",
    body: "text-midnight-800",
    muted: "text-midnight-500",
    link: "hover:decoration-midnight-800",
  },
  prompttrim: {
    panel: "bg-midnight-700 text-cloud-50",
    badge: "bg-lime-500 text-midnight-900",
    body: "text-cloud-200",
    muted: "text-midnight-100",
    link: "hover:decoration-lime-400",
  },
  solvr: {
    panel: "bg-cloud-100 border border-cloud-600 text-midnight-800",
    badge: "bg-midnight-500 text-lime-500",
    body: "text-midnight-600",
    muted: "text-midnight-300",
    link: "hover:decoration-lime-500",
  },
};

export function ExperimentPanel({
  experiment,
  className,
}: {
  experiment: Experiment;
  className?: string;
}) {
  const Icon = ICONS[experiment.slug];
  const s = SURFACES[experiment.slug];
  const problem = experiment.problem ? getProblem(experiment.problem) : undefined;

  return (
    <article
      id={experiment.slug}
      className={cn(
        "flex scroll-mt-28 flex-col justify-between gap-10 rounded-2xl p-8 sm:p-10",
        s.panel,
        className
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <span
            className={cn(
              "flex size-12 items-center justify-center rounded-full",
              s.badge
            )}
          >
            <Icon className="size-6" weight="regular" />
          </span>
          <span
            className={cn(
              "rounded-full border border-current/25 px-3 py-1 text-body-xs font-semibold",
              s.muted
            )}
          >
            {experiment.tag}
          </span>
        </div>
        <h3 className="text-heading-md font-extrabold tracking-tight">
          {experiment.name}
        </h3>
        <div className="flex flex-col gap-3">
          <p className={cn("text-body-lg font-medium", s.body)}>
            {experiment.summary}
          </p>
          <p className={cn("max-w-prose text-body-md", s.muted)}>
            {experiment.detail}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-current/15 pt-6">
        {problem ? (
          <p className={cn("text-body-sm", s.muted)}>
            Began as a question:{" "}
            <Link
              href={`/problems/${problem.slug}`}
              className={cn(
                "font-semibold underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200",
                s.body,
                s.link
              )}
            >
              {problem.title}
            </Link>
          </p>
        ) : null}
        <Link
          href={FORM_HREF}
          className="group inline-flex w-fit items-center gap-1.5 text-body-sm font-semibold"
        >
          <span
            className={cn(
              "underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200",
              s.link
            )}
          >
            Tell us what it should do
          </span>
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            weight="bold"
          />
        </Link>
      </div>
    </article>
  );
}
