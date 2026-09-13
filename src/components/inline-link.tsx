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
        "group relative inline-flex items-center gap-1.5 pb-1.5 text-body-sm font-semibold transition-colors",
        tone === "dark"
          ? "text-midnight-800 hover:text-lime-700"
          : "text-cloud-50 hover:text-lime-400",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight
        className="size-3.5 transition-transform group-hover:translate-x-0.5"
        weight="bold"
      />
      <span className="absolute inset-x-0 -bottom-0.5 h-1 origin-left scale-x-0 rounded-full bg-lime-500 transition-transform duration-200 ease-out group-hover:scale-x-100" />
    </Link>
  );
}
