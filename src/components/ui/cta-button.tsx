import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-body-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cloud-50 sm:text-body-md",
  {
    variants: {
      variant: {
        dark: "bg-midnight-500 text-cloud-50 hover:bg-midnight-400",
        lime: "bg-lime-500 text-midnight-900 hover:bg-lime-400",
        outline:
          "border border-cloud-600 bg-transparent text-midnight-800 hover:border-midnight-500",
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
        className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
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
