import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Structural stand-in for real photography. Marks exactly where a final
 * asset should be dropped in — swap the file and delete this component,
 * no layout changes needed.
 */
export function PlaceholderImage({
  label,
  tone = "midnight",
  labelPosition = "bottom",
  className,
}: {
  label: string;
  tone?: "midnight" | "cloud";
  labelPosition?: "bottom" | "top";
  className?: string;
}) {
  const isDark = tone === "midnight";

  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        labelPosition === "bottom" ? "items-end" : "items-start",
        isDark ? "bg-midnight-500" : "bg-cloud-600",
        className
      )}
      style={{
        backgroundImage: isDark
          ? "repeating-linear-gradient(135deg, color-mix(in oklab, var(--color-midnight-400) 100%, transparent) 0px, color-mix(in oklab, var(--color-midnight-400) 100%, transparent) 1px, transparent 1px, transparent 14px)"
          : "repeating-linear-gradient(135deg, var(--color-cloud-700) 0px, var(--color-cloud-700) 1px, transparent 1px, transparent 14px)",
      }}
      aria-hidden="true"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          isDark ? "text-midnight-300" : "text-cloud-800"
        )}
      >
        <ImageIcon className="size-8" strokeWidth={1.5} />
      </div>
      <span
        className={cn(
          "relative m-3 rounded-md px-2 py-1 font-mono text-body-xs",
          isDark
            ? "bg-midnight-800/80 text-cloud-100"
            : "bg-cloud-50/80 text-midnight-700"
        )}
      >
        {label}
      </span>
    </div>
  );
}
