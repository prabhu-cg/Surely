"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Chip, FilterGroupLabel } from "@/components/filter-chip";
import { Highlight } from "@/components/highlight";
import { Pagination } from "@/components/pagination";
import { ExperimentCard } from "@/components/experiment-card";
import { Reveal } from "@/components/reveal";
import { ViewSwitcher, type BankView } from "@/components/view-switcher";
import { founderImage, founderLabel } from "@/lib/founders";
import {
  EXPERIMENTS,
  EXPERIMENT_FOUNDERS,
  EXPERIMENT_TAGS,
  type Experiment,
} from "@/lib/experiments";

const AREAS = ["All", "Life", "Work"] as const;
const PAGE_SIZE = 10;

function ExperimentTable({ experiments, query }: { experiments: Experiment[]; query: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cloud-600">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-cloud-600 bg-cloud-100">
            <th
              scope="col"
              className="px-5 py-3 text-body-xs font-semibold tracking-[0.1em] text-midnight-400 uppercase"
            >
              Experiment
            </th>
            <th
              scope="col"
              className="hidden px-5 py-3 text-body-xs font-semibold tracking-[0.1em] text-midnight-400 uppercase sm:table-cell"
            >
              Category
            </th>
            <th
              scope="col"
              className="hidden px-5 py-3 text-body-xs font-semibold tracking-[0.1em] text-midnight-400 uppercase md:table-cell"
            >
              Area
            </th>
            <th
              scope="col"
              className="hidden px-5 py-3 text-body-xs font-semibold tracking-[0.1em] text-midnight-400 uppercase md:table-cell"
            >
              Founder
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-right text-body-xs font-semibold tracking-[0.1em] text-midnight-400 uppercase"
            >
              Exp #
            </th>
            <th scope="col" className="px-5 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {experiments.map((e) => (
            <tr
              key={e.slug}
              className="border-b border-cloud-600 transition-colors duration-200 last:border-b-0 hover:bg-cloud-50"
            >
              <td className="px-5 py-4 align-top">
                <Link
                  href={`/experiments/${e.slug}`}
                  className="inline-block font-serif text-body-lg text-midnight-800 underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-lime-500"
                >
                  <Highlight text={e.name} query={query} />
                </Link>
                <div className="mt-1.5 flex flex-wrap gap-2 sm:hidden">
                  <span className="rounded-full bg-lime-100 px-2 py-0.5 text-body-xs font-semibold text-midnight-900">
                    {e.tag}
                  </span>
                  <span className="rounded-full border border-cloud-600 px-2 py-0.5 text-body-xs font-semibold text-midnight-500">
                    {e.area}
                  </span>
                </div>
              </td>
              <td className="hidden px-5 py-4 align-top sm:table-cell">
                <span className="rounded-full bg-lime-100 px-3 py-1 text-body-xs font-semibold text-midnight-900">
                  {e.tag}
                </span>
              </td>
              <td className="hidden px-5 py-4 align-top text-body-sm text-midnight-600 md:table-cell">
                {e.area}
              </td>
              <td className="hidden px-5 py-4 align-top md:table-cell">
                <span className="flex items-center gap-2 text-body-sm text-midnight-600">
                  {founderImage(e.founder) ? (
                    <span className="relative size-5 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={founderImage(e.founder)!}
                        alt={e.founder}
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </span>
                  ) : null}
                  {founderLabel(e.founder)}
                </span>
              </td>
              <td className="px-5 py-4 align-top text-right text-body-sm text-midnight-500">
                {String(e.expNum).padStart(2, "0")}
              </td>
              <td className="px-5 py-4 align-top text-right">
                <Link
                  href={`/experiments/${e.slug}`}
                  aria-label={`See experiment: ${e.name}`}
                  className="group inline-flex size-8 items-center justify-center rounded-full border border-cloud-600 transition-colors duration-200 hover:border-midnight-800 hover:bg-midnight-800 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <ArrowUpRight
                    className="size-4 text-midnight-700 transition-colors duration-200 group-hover:text-cloud-50"
                    weight="bold"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExperimentBank() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<(typeof AREAS)[number]>("All");
  const [tag, setTag] = useState<string>("All");
  const [founder, setFounder] = useState<string>("All");
  const [view, setView] = useState<BankView>("card");
  const [page, setPage] = useState(1);
  const listTop = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EXPERIMENTS.filter(
      (e) =>
        (area === "All" || e.area === area) &&
        (tag === "All" || e.tag === tag) &&
        (founder === "All" || e.founder === founder) &&
        (!q ||
          e.name.toLowerCase().includes(q) ||
          e.tagline.toLowerCase().includes(q))
    );
  }, [query, area, tag, founder]);

  const filtered = !!query || area !== "All" || tag !== "All" || founder !== "All";
  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = visible.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const setQueryAndReset = (value: string) => {
    setQuery(value);
    setPage(1);
  };
  const setAreaAndReset = (value: (typeof AREAS)[number]) => {
    setArea(value);
    setPage(1);
  };
  const setTagAndReset = (value: string) => {
    setTag(value);
    setPage(1);
  };
  const setFounderAndReset = (value: string) => {
    setFounder(value);
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
          <label htmlFor="experiment-search" className="sr-only">
            Search experiments
          </label>
          <MagnifyingGlass
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-midnight-300"
            weight="regular"
          />
          <input
            id="experiment-search"
            type="search"
            value={query}
            onChange={(e) => setQueryAndReset(e.target.value)}
            placeholder="Search, e.g. prompts, design, admin"
            className="w-full rounded-full border border-cloud-600 bg-cloud-50 py-3 pr-4 pl-12 text-body-md text-midnight-800 placeholder:text-cloud-800 transition-colors duration-200 hover:border-midnight-300 focus-visible:border-midnight-800 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none"
          />
        </div>

        <div className="flex flex-col gap-6">
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
                  className={`rounded-full px-4 py-1.5 text-body-sm font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none ${
                    area === a
                      ? "bg-midnight-500 text-cloud-50"
                      : "text-midnight-600 hover:text-midnight-900"
                  }`}
                >
                  {a === "All" ? "Work and life" : a}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            <FilterGroupLabel>Category</FilterGroupLabel>
            <div role="group" aria-label="Filter by category" className="flex flex-1 flex-wrap gap-2">
              <Chip active={tag === "All"} onClick={() => setTagAndReset("All")}>
                All categories
              </Chip>
              {EXPERIMENT_TAGS.map((t) => (
                <Chip key={t} active={tag === t} onClick={() => setTagAndReset(t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            <FilterGroupLabel>Founder</FilterGroupLabel>
            <div role="group" aria-label="Filter by founder" className="flex flex-1 flex-wrap gap-2">
              <Chip active={founder === "All"} onClick={() => setFounderAndReset("All")}>
                Everyone
              </Chip>
              {EXPERIMENT_FOUNDERS.map((f) => (
                <Chip key={f} active={founder === f} onClick={() => setFounderAndReset(f)}>
                  {founderLabel(f)}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-body-sm text-midnight-500" role="status" aria-live="polite">
          {filtered
            ? `${visible.length} of ${EXPERIMENTS.length} experiments`
            : `${EXPERIMENTS.length} experiments`}
        </p>
        <ViewSwitcher view={view} onChange={setView} />
      </div>

      {pageItems.length ? (
        <>
          {view === "card" ? (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((e, i) => (
                <li key={e.slug}>
                  <Reveal delay={(i % PAGE_SIZE) * 50} className="h-full">
                    <ExperimentCard experiment={e} />
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <ul className="grid grid-cols-1 gap-4 sm:hidden">
                {pageItems.map((e, i) => (
                  <li key={e.slug}>
                    <Reveal delay={(i % PAGE_SIZE) * 50} className="h-full">
                      <ExperimentCard experiment={e} />
                    </Reveal>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:block">
                <ExperimentTable experiments={pageItems} query={query} />
              </div>
            </>
          )}

          <Pagination page={safePage} totalPages={totalPages} onChange={setPage} label="Experiment bank pages" />
        </>
      ) : (
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-cloud-600 bg-cloud-100 p-8">
          <p className="font-serif text-heading-xs text-midnight-800">
            Nothing matches that yet.
          </p>
          <p className="max-w-md text-body-md text-midnight-500">
            Try fewer words or another category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQueryAndReset("");
              setArea("All");
              setTag("All");
              setFounder("All");
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
