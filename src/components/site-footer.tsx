import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
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
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Email", href: "mailto:hello@surely.com" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight-700 text-cloud-100">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
        <div className="flex flex-col gap-4">
          <Logo className="h-5 text-cloud-50" />
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
                    className="text-body-sm text-cloud-100 transition-colors hover:text-lime-400"
                  >
                    {link.label}
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
