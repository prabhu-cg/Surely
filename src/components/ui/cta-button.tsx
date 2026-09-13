import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-body-sm font-semibold transition-all duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cloud-50 sm:text-body-md",
  {
    variants: {
      variant: {
        dark: "bg-midnight-500 text-cloud-50 hover:bg-lime-500 hover:text-midnight-900",
        lime: "bg-lime-500 text-midnight-900 hover:bg-cloud-50 hover:text-midnight-900",
        outline:
          "border border-cloud-600 bg-transparent text-midnight-800 hover:border-midnight-800 hover:bg-midnight-800 hover:text-cloud-50",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
);

type CtaButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof ctaButtonVariants> & {
    href?: string;
  };

export function CtaButton({
  className,
  variant = "dark",
  href,
  children,
  ...props
}: CtaButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
        weight="bold"
      />
    </>
  );

  const classes = cn(ctaButtonVariants({ variant, className }));

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
