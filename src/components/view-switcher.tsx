"use client";

import { SquaresFour, Table as TableIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const VIEWS = [
  ["card", SquaresFour, "Cards"],
  ["table", TableIcon, "Table"],
] as const;

export type BankView = (typeof VIEWS)[number][0];

export function ViewSwitcher({
  view,
  onChange,
}: {
  view: BankView;
  onChange: (view: BankView) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="View as"
      className="inline-flex rounded-full border border-cloud-600 bg-cloud-100 p-1"
    >
      {VIEWS.map(([v, Icon, label]) => (
        <button
          key={v}
          type="button"
          role="radio"
          aria-checked={view === v}
          onClick={() => onChange(v)}
          className={cn(
            "flex items-center gap-2 rounded-full px-3.5 py-1.5 text-body-sm font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none",
            view === v
              ? "bg-midnight-500 text-cloud-50"
              : "text-midnight-600 hover:text-midnight-900"
          )}
        >
          <Icon className="size-4" weight="regular" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
