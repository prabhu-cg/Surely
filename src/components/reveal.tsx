"use client";

import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const OFFSET: Record<string, string> = {
  up: "translate-y-6",
  left: "translate-x-6",
  right: "-translate-x-6",
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView
          ? "translate-x-0 translate-y-0 opacity-100"
          : cn("opacity-0", OFFSET[direction]),
        className
      )}
    >
      {children}
    </div>
  );
}
