import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ProblemCard } from "@/components/problem-card";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";
import { FORM_HREF } from "@/lib/site";
import { experimentsForProblem } from "@/lib/experiments";
import {
  PROBLEMS,
  getProblem,
  relatedProblems,
  splitEvidence,
} from "@/lib/problems";

function NumberedLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-serif text-body-md text-midnight-300">{n}</span>
      <SectionEyebrow>{children}</SectionEyebrow>
    </div>
  );
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROBLEMS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) return {};
  return {
    title: problem.title,
    description: problem.statement.slice(0, 155),
    alternates: { canonical: `/problems/${problem.slug}` },
  };
}

export default async function ProblemPage({ params }: Props) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) notFound();

  const evidence = splitEvidence(problem.evidence);
  const related = relatedProblems(problem);
  const experiment = experimentsForProblem(problem)[0];
  const q = (intent: string) =>
    `${FORM_HREF}?problem=${problem.slug}&intent=${intent}`;

  return (
    <PageShell>
      <PageHero
        eyebrow={`${problem.topic} · ${problem.area}`}
        title={problem.title}
        aside={
          <Link
            href="/problems"
            className="group inline-flex w-fit items-center gap-2 text-body-sm font-semibold text-cloud-100"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" weight="bold" />
            <span className="underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-lime-400">
              All problems
            </span>
          </Link>
        }
      />

      <section className="bg-cloud-50 py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-lime-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="text-body-lg font-semibold text-midnight-900">
              {problem.count === 1
                ? "1 person has told us about this so far."
                : `${problem.count} people have told us about this so far.`}
            </p>
            <CtaButton href={q("same")} variant="dark">
              I have this problem too
            </CtaButton>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <NumberedLabel n="01">The problem</NumberedLabel>
                <p className="font-serif text-heading-xs text-pretty text-midnight-800 sm:text-heading-sm">
                  {problem.statement}
                </p>
              </div>

              {evidence.length ? (
                <div className="flex flex-col gap-5">
                  <NumberedLabel n="02">What we found</NumberedLabel>
                  <ul className="flex flex-col gap-4">
                    {evidence.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2.5 size-2 shrink-0 rounded-full bg-lime-500" />
                        <span className="max-w-prose text-body-md text-midnight-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {experiment ? (
                <div className="flex flex-col items-start gap-3 rounded-2xl bg-lime-100 p-6 sm:p-8">
                  <p className="text-body-xs font-semibold tracking-[0.18em] text-midnight-700 uppercase">
                    An experiment grew out of this
                  </p>
                  <p className="text-heading-xs font-extrabold text-midnight-900">
                    {experiment.name}
                  </p>
                  <p className="max-w-prose text-body-md text-midnight-800">
                    {experiment.tagline}
                  </p>
                  <Link
                    href={`/experiments/${experiment.slug}`}
                    className="text-body-sm font-semibold text-midnight-900 underline decoration-4 decoration-midnight-900/30 underline-offset-4 transition-colors duration-200 hover:decoration-midnight-900"
                  >
                    See the experiment
                  </Link>
                </div>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex flex-col gap-5 rounded-2xl bg-midnight-800 p-8">
                <div className="flex flex-col gap-2">
                  <span className="font-serif text-body-md text-cloud-300">03</span>
                  <h2 className="text-heading-xs font-bold text-cloud-50">
                    Does this happen to you too?
                  </h2>
                </div>
                <p className="text-body-md text-midnight-100">
                  If you&rsquo;ve dealt with this, tell us. Your experience helps
                  us understand whether it&rsquo;s worth solving and what a
                  better way might look like.
                </p>
                <div className="flex flex-col items-start gap-3">
                  <CtaButton href={q("same")} variant="lime">
                    I have this problem too
                  </CtaButton>
                  <CtaButton href={q("experience")} variant="outline" className="border-midnight-300 text-cloud-50 hover:border-lime-500 hover:bg-lime-500 hover:text-midnight-900">
                    Tell us about your experience
                  </CtaButton>
                  <CtaButton href={q("test")} variant="outline" className="border-midnight-300 text-cloud-50 hover:border-lime-500 hover:bg-lime-500 hover:text-midnight-900">
                    Help us test a better way
                  </CtaButton>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-cloud-100 py-16 sm:py-24">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SectionEyebrow>Keep exploring</SectionEyebrow>
            <h2 className="text-heading-md font-extrabold text-midnight-800 uppercase">
              More problems worth solving.
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={i * 80} className="h-full">
                  <ProblemCard problem={p} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-midnight-700 py-10">
        <Container>
          <p className="text-center text-body-sm font-semibold tracking-[0.14em] text-cloud-100 uppercase">
            Real problems. Real people. Better ways.
          </p>
        </Container>
      </section>
    </PageShell>
  );
}
