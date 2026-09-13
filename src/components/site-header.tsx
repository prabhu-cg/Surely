"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/ui/cta-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How we work", href: "#how-we-work" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cloud-600 bg-cloud-50/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Surely, home">
          <Logo className="h-5 text-midnight-800" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative pb-2 text-body-sm font-medium text-midnight-600 transition-colors hover:text-midnight-900"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-1 origin-left scale-x-0 rounded-full bg-lime-500 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="#talk">Let&rsquo;s talk</CtaButton>
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
          <SheetContent side="right" className="w-full max-w-xs bg-cloud-50 p-0">
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
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cloud-600 py-4 text-heading-xs font-semibold text-midnight-800"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6">
              <CtaButton href="#talk" className="w-full justify-between">
                Let&rsquo;s talk
              </CtaButton>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
