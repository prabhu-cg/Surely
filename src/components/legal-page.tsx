import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";

export type LegalSection = { title?: string; blocks: string[] };

function Blocks({ blocks }: { blocks: string[] }) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (!list.length) return;
    out.push(
      <ul key={`ul-${out.length}`} className="flex flex-col gap-2">
        {list.map((item) => (
          <li key={item} className="flex items-start gap-3 text-body-lg text-midnight-600">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-lime-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
    list = [];
  };
  for (const b of blocks) {
    if (b.startsWith("- ")) list.push(b.slice(2));
    else {
      flush();
      out.push(
        <p key={`p-${out.length}`} className="text-body-lg text-midnight-600">
          {b}
        </p>
      );
    }
  }
  flush();
  return <>{out}</>;
}

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title}>
        Last updated: {updated}
      </PageHero>
      <section className="bg-cloud-50 py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-20">
          <nav aria-label="On this page" className="hidden lg:block">
            <ol className="sticky top-28 flex flex-col gap-2 text-body-sm">
              {sections
                .filter((s) => s.title)
                .map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#s${i}`}
                      className="text-midnight-500 underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-midnight-900 hover:decoration-lime-500"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
            </ol>
          </nav>
          <div className="flex max-w-3xl flex-col gap-10">
            {sections.map((s, i) => (
              <div key={i} id={`s${i}`} className="flex scroll-mt-28 flex-col gap-4">
                {s.title ? (
                  <h2 className="text-heading-xs font-bold text-midnight-800">
                    {s.title}
                  </h2>
                ) : null}
                <Blocks blocks={s.blocks} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
