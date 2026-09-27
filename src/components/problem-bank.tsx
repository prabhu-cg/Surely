"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CaretLeft, CaretRight, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { ProblemCard } from "@/components/problem-card";
import { Reveal } from "@/components/reveal";
import { PROBLEMS, TOPICS } from "@/lib/problems";

const AREAS = ["All", "Life", "Work"] as const;
const PAGE_SIZE = 10;

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-body-sm font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none",
        active
          ? "border-midnight-500 bg-midnight-500 text-cloud-50"
          : "border-cloud-600 text-midnight-700 hover:border-midnight-800"
      )}
    >
      {children}
    </button>
  );
}

function FilterGroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-16 shrink-0 pt-2 text-body-xs font-semibold tracking-[0.1em] text-midnight-300 uppercase">
      {children}
    </span>
  );
}

export function ProblemBank() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<(typeof AREAS)[number]>("All");
  const [topic, setTopic] = useState<string>("All");
  const [page, setPage] = useState(1);
  const listTop = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROBLEMS.filter(
      (p) =>
        (area === "All" || p.area === area) &&
        (topic === "All" || p.topic === topic) &&
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.statement.toLowerCase().includes(q))
    );
  }, [query, area, topic]);

  const filtered = !!query || area !== "All" || topic !== "All";
  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = visible.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  // Any change to the filters starts back at page one.
  const setQueryAndReset = (value: string) => {
    setQuery(value);
    setPage(1);
  };
  const setAreaAndReset = (value: (typeof AREAS)[number]) => {
    setArea(value);
    setPage(1);
  };
  const setTopicAndReset = (value: string) => {
    setTopic(value);
    setPage(1);
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    listTop.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [safePage]);

  return (
    <div className="flex flex-col gap-10">
      <div ref={listTop} className="flex scroll-mt-28 flex-col gap-6">
        <div className="relative">
          <label htmlFor="problem-search" className="sr-only">
            Search problems
          </label>
          <MagnifyingGlass
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-midnight-300"
            weight="regular"
          />
          <input
            id="problem-search"
            type="search"
            value={query}
            onChange={(e) => setQueryAndReset(e.target.value)}
            placeholder="Search, e.g. insurance, childcare, passport"
            className="w-full rounded-full border border-cloud-600 bg-cloud-50 py-3 pr-4 pl-12 text-body-md text-midnight-800 placeholder:text-cloud-800 transition-colors duration-200 hover:border-midnight-300 focus-visible:border-midnight-800 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none"
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-body-sm font-semibold text-midnight-300">Filter by</span>

          <div className="flex flex-wrap items-center gap-3">
            <FilterGroupLabel>Area</FilterGroupLabel>
            <div
              role="radiogroup"
              aria-label="Filter by area"
              className="inline-flex rounded-full border border-cloud-600 bg-cloud-100 p-1"
            >
              {AREAS.map((a) => (
                <button
                  key={a}
                  type="button"
                  role="radio"
                  aria-checked={area === a}
                  onClick={() => setAreaAndReset(a)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-body-sm font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none",
                    area === a
                      ? "bg-midnight-500 text-cloud-50"
                      : "text-midnight-600 hover:text-midnight-900"
                  )}
                >
                  {a === "All" ? "Work and life" : a}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            <FilterGroupLabel>Topic</FilterGroupLabel>
            <div role="group" aria-label="Filter by topic" className="flex flex-1 flex-wrap gap-2">
              <Chip active={topic === "All"} onClick={() => setTopicAndReset("All")}>
                All topics
              </Chip>
              {TOPICS.map((t) => (
                <Chip key={t} active={topic === t} onClick={() => setTopicAndReset(t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-body-sm text-midnight-500" role="status" aria-live="polite">
        {filtered
          ? `${visible.length} of ${PROBLEMS.length} problems`
          : `${PROBLEMS.length} problems`}
      </p>

      {pageItems.length ? (
        <>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={(i % PAGE_SIZE) * 50}>
                  <ProblemCard problem={p} query={query} />
                </Reveal>
              </li>
            ))}
          </ul>

          {totalPages > 1 ? (
            <nav aria-label="Problem bank pages" className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                aria-label="Previous page"
                className="flex size-10 items-center justify-center rounded-full border border-cloud-600 text-midnight-700 transition-colors duration-200 hover:border-midnight-800 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30"
              >
                <CaretLeft className="size-4" weight="bold" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-current={n === safePage ? "page" : undefined}
                  onClick={() => setPage(n)}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full text-body-sm font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none",
                    n === safePage
                      ? "bg-midnight-500 text-cloud-50"
                      : "text-midnight-700 hover:bg-cloud-100"
                  )}
                >
                  {n}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                aria-label="Next page"
                className="flex size-10 items-center justify-center rounded-full border border-cloud-600 text-midnight-700 transition-colors duration-200 hover:border-midnight-800 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30"
              >
                <CaretRight className="size-4" weight="bold" />
              </button>
            </nav>
          ) : null}
        </>
      ) : (
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-cloud-600 bg-cloud-100 p-8">
          <p className="font-serif text-heading-xs text-midnight-800">
            Nothing matches that yet.
          </p>
          <p className="max-w-md text-body-md text-midnight-500">
            Try fewer words or another topic, or tell us the problem and it may
            become the next one on the list.
          </p>
          <button
            type="button"
            onClick={() => {
              setQueryAndReset("");
              setArea("All");
              setTopic("All");
            }}
            className="text-body-sm font-semibold text-midnight-800 underline decoration-4 decoration-lime-500 underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
