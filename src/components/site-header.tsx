"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/ui/cta-button";
import { NAV_LINKS, FORM_HREF } from "@/lib/site";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";


function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-cloud-600 bg-cloud-50/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Surely, home">
          <Logo className="h-5 text-midnight-800" />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-body-sm font-medium underline decoration-4 underline-offset-4 transition-colors duration-200",
                  active
                    ? "text-midnight-900 decoration-lime-500"
                    : "text-midnight-600 decoration-transparent hover:text-midnight-900 hover:decoration-lime-500"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href={FORM_HREF}>Let&rsquo;s talk</CtaButton>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="flex size-10 items-center justify-center rounded-full border border-cloud-600 text-midnight-800 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs bg-cloud-50 p-0"
            showCloseButton={false}
          >
            <div className="flex h-20 items-center justify-between border-b border-cloud-600 px-6">
              <Logo className="h-5 text-midnight-800" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex size-10 items-center justify-center rounded-full border border-cloud-600 text-midnight-800"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 py-8">
              {NAV_LINKS.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-3 border-b border-cloud-600 py-4 text-heading-xs font-semibold text-midnight-800"
                    )}
                  >
                    {active ? <span className="size-2 shrink-0 rounded-full bg-lime-500" /> : null}
                    <span
                      className={cn(
                        "underline decoration-4 underline-offset-4",
                        active ? "decoration-lime-500" : "decoration-transparent"
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
            <div className="px-6">
              <CtaButton href={FORM_HREF} className="w-full justify-center">
                Let&rsquo;s talk
              </CtaButton>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
