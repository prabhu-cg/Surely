import Link from "next/link";
import { ArrowUpRight, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Highlight } from "@/components/highlight";
import type { Problem } from "@/lib/problems";

export function ProblemCard({
  problem,
  query,
}: {
  problem: Problem;
  query?: string;
}) {
  return (
    <Link
      href={`/problems/${problem.slug}`}
      className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-cloud-600 bg-card p-6 transition-colors duration-200 hover:border-midnight-800 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-lime-100 px-3 py-1 text-body-xs font-semibold text-midnight-900">
            {problem.topic}
          </span>
          <span className="rounded-full border border-cloud-600 px-3 py-1 text-body-xs font-semibold text-midnight-500">
            {problem.area}
          </span>
        </div>
        <h3 className="font-serif text-heading-xs text-balance text-midnight-800">
          <Highlight text={problem.title} query={query} />
        </h3>
        <p className="line-clamp-3 text-body-sm text-midnight-500">
          <Highlight text={problem.statement} query={query} />
        </p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-body-xs font-semibold text-midnight-400">
          <UsersThree className="size-4" weight="regular" />
          {problem.count === 1 ? "1 person" : `${problem.count} people`}
        </span>
        <span className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-midnight-800">
          <span className="underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-lime-500">
            See the problem
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
