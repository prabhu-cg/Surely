import Link from "next/link";
import {
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";

const COLUMNS: {
  title: string;
  links: { label: string; href: string; icon?: Icon }[];
}[] = [
  {
    title: "Explore",
    links: [
      { label: "What we do", href: "#what-we-do" },
      { label: "How we work", href: "#how-we-work" },
      { label: "Insights", href: "#insights" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "#", icon: LinkedinLogo },
      { label: "Instagram", href: "#", icon: InstagramLogo },
      {
        label: "Email",
        href: "mailto:hello@surely.com",
        icon: EnvelopeSimple,
      },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight-700 text-cloud-100">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
        <div className="flex flex-col gap-4">
          <Logo className="h-5 w-auto self-start text-cloud-50" />
          <p className="text-body-sm text-midnight-100">
            There must be a better way.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title} className="flex flex-col gap-4">
            <p className="text-body-xs font-semibold tracking-[0.18em] text-midnight-200 uppercase">
              {column.title}
            </p>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center gap-2 pb-2 text-body-sm text-cloud-100 transition-colors hover:text-lime-400"
                  >
                    {link.icon ? <link.icon className="size-4" /> : null}
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-0.5 h-1 origin-left scale-x-0 rounded-full bg-lime-500 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="flex flex-col gap-2 border-t border-midnight-400/60 py-6 text-body-xs text-midnight-200 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Surely</p>
        <p>Question. Understand. Explore. Build. Improve.</p>
      </Container>
    </footer>
  );
}
