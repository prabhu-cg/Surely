"use client";

import { cn } from "@/lib/utils";

export function Chip({
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

export function FilterGroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-24 shrink-0 pt-2 text-body-xs font-semibold whitespace-nowrap tracking-[0.1em] text-midnight-300 uppercase">
      {children}
    </span>
  );
}
