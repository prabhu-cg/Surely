import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light" | "lime";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-body-xs font-semibold tracking-[0.18em] uppercase",
        tone === "dark" && "text-midnight-400",
        tone === "light" && "text-cloud-300",
        tone === "lime" && "text-midnight-700",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          tone === "dark" && "bg-lime-500",
          tone === "light" && "bg-lime-500",
          tone === "lime" && "bg-midnight-700"
        )}
      />
      {children}
    </p>
  );
}
