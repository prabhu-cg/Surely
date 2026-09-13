import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function InlineLink({
  href,
  children,
  tone = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-body-sm font-semibold transition-colors",
        tone === "dark"
          ? "text-midnight-800 hover:text-lime-700"
          : "text-cloud-50 hover:text-lime-400",
        className
      )}
    >
      <span
        className={cn(
          "underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200",
          tone === "dark"
            ? "group-hover:decoration-lime-700"
            : "group-hover:decoration-lime-400"
        )}
      >
        {children}
      </span>
      <ArrowRight
        className="size-3.5 transition-transform group-hover:translate-x-0.5"
        weight="bold"
      />
    </Link>
  );
}
