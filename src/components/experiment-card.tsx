import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Compass,
  GraduationCap,
  HouseLine,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { founderImage, founderLabel } from "@/lib/founders";
import type { Experiment } from "@/lib/experiments";

const TAG_ICONS: Record<string, Icon> = {
  LifeTech: HouseLine,
  EdTech: GraduationCap,
  BizTech: Briefcase,
  DesignTech: Compass,
  AITech: Sparkle,
};

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const Icon = TAG_ICONS[experiment.tag] ?? Compass;
  const avatar = founderImage(experiment.founder);

  return (
    <Link
      href={`/experiments/${experiment.slug}`}
      className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-cloud-600 bg-card p-6 transition-colors duration-200 hover:border-midnight-800 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-midnight-500">
            <Icon className="size-4 text-lime-500" weight="regular" />
          </span>
          <span className="rounded-full bg-lime-100 px-3 py-1 text-body-xs font-semibold text-midnight-900">
            {experiment.tag}
          </span>
          <span className="rounded-full border border-cloud-600 px-3 py-1 text-body-xs font-semibold text-midnight-500">
            EXP #{String(experiment.expNum).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-serif text-heading-xs text-balance text-midnight-800">
          {experiment.name}
        </h3>
        <p className="line-clamp-3 text-body-sm text-midnight-500">
          {experiment.tagline}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <span className="flex min-w-0 flex-1 items-center gap-2 text-body-xs font-semibold text-midnight-400">
          {avatar ? (
            <span className="relative size-6 shrink-0 overflow-hidden rounded-full">
              <Image src={avatar} alt={experiment.founder} fill sizes="24px" className="object-cover" />
            </span>
          ) : null}
          <span className="truncate">{founderLabel(experiment.founder)}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-body-sm font-semibold text-midnight-800">
          <span className="underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-lime-500">
            See experiment
          </span>
          <ArrowUpRight
            className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            weight="bold"
          />
        </span>
      </div>
    </Link>
  );
}
