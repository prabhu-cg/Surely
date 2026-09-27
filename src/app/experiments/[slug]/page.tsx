import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { ExperimentCard } from "@/components/experiment-card";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";
import { FORM_HREF } from "@/lib/site";
import { founderImage, founderLabel } from "@/lib/founders";
import {
  EXPERIMENTS,
  getExperiment,
  relatedExperiments,
  resolveLinkedProblems,
} from "@/lib/experiments";

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
  return EXPERIMENTS.map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperiment(slug);
  if (!experiment) return {};
  return {
    title: experiment.name,
    description: experiment.tagline.slice(0, 155),
    alternates: { canonical: `/experiments/${experiment.slug}` },
  };
}

export default async function ExperimentPage({ params }: Props) {
  const { slug } = await params;
  const experiment = getExperiment(slug);
  if (!experiment) notFound();

  const linkedProblems = resolveLinkedProblems(experiment);
  const related = relatedExperiments(experiment);
  const avatar = founderImage(experiment.founder);

  return (
    <PageShell>
      <PageHero
        eyebrow={`${experiment.tag} · EXP #${String(experiment.expNum).padStart(2, "0")}`}
        title={experiment.name}
        aside={
          <Link
            href="/experiments"
            className="group inline-flex w-fit items-center gap-2 text-body-sm font-semibold text-cloud-100"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" weight="bold" />
            <span className="underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-lime-400">
              All experiments
            </span>
          </Link>
        }
      >
        {experiment.tagline}
      </PageHero>

      <section className="bg-cloud-50 py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-12">
            {linkedProblems.length ? (
              <div className="flex flex-col gap-5">
                <NumberedLabel n="01">Problems solved</NumberedLabel>
                <ul className="flex flex-col gap-4">
                  {linkedProblems.map((lp) =>
                    lp.matched ? (
                      <li key={lp.problem.slug} className="flex items-start gap-3">
                        <span className="mt-2.5 size-2 shrink-0 rounded-full bg-lime-500" />
                        <Link
                          href={`/problems/${lp.problem.slug}`}
                          className="group inline-flex items-center gap-2 font-serif text-body-lg text-midnight-800"
                        >
                          <span className="underline decoration-4 decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-lime-500">
                            {lp.problem.title}
                          </span>
                          <ArrowUpRight
                            className="size-3.5 shrink-0 text-midnight-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            weight="bold"
                          />
                        </Link>
                      </li>
                    ) : (
                      <li key={lp.title} className="flex items-start gap-3">
                        <span className="mt-2.5 size-2 shrink-0 rounded-full bg-lime-500" />
                        <span className="font-serif text-body-lg text-midnight-500">
                          {lp.title}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : null}

            <div className="flex flex-col gap-4">
              <NumberedLabel n="02">Context</NumberedLabel>
              <p className="max-w-prose text-body-lg text-midnight-600">
                {experiment.context}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <NumberedLabel n="03">The challenge</NumberedLabel>
              <p className="max-w-prose text-body-lg text-midnight-600">
                {experiment.challenge}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <NumberedLabel n="04">Research</NumberedLabel>
              <p className="max-w-prose text-body-lg text-midnight-600">
                {experiment.research}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <NumberedLabel n="05">Insights</NumberedLabel>
              <p className="max-w-prose text-body-md text-midnight-500">
                {experiment.insightIntro}
              </p>
              <div className="flex flex-col gap-4">
                {experiment.insights.map((ins) => (
                  <div
                    key={ins.n}
                    className="flex items-start gap-4 rounded-2xl border border-cloud-600 bg-cloud-50 p-6"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime-500 text-body-sm font-bold text-midnight-900">
                      {ins.n}
                    </span>
                    <div className="flex flex-col gap-2">
                      {ins.heading ? (
                        <p className="font-serif text-heading-xs text-pretty text-midnight-800">
                          {ins.heading}
                        </p>
                      ) : null}
                      <p className="text-body-md text-midnight-600">{ins.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <NumberedLabel n="06">How decisions were made</NumberedLabel>
              <ol className="flex flex-col gap-5">
                {experiment.decisions.map((dec) => (
                  <li key={dec.n} className="flex items-start gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime-500 text-body-sm font-bold text-midnight-900">
                      {dec.n}
                    </span>
                    <p className="text-body-md text-midnight-600">
                      {dec.heading ? (
                        <span className="font-semibold text-midnight-800">{dec.heading}. </span>
                      ) : null}
                      {dec.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-5">
              <NumberedLabel n="07">Solution</NumberedLabel>
              <p className="max-w-prose text-body-lg text-midnight-600">
                {experiment.solutionIntro}
              </p>
              <ul className="flex flex-col gap-4">
                {experiment.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2.5 size-2 shrink-0 rounded-full bg-lime-500" />
                    <span className="max-w-prose text-body-md text-midnight-600">{f}</span>
                  </li>
                ))}
              </ul>
              <div>
                <CtaButton href={experiment.liveUrl} external variant="lime">
                  Try the solution
                </CtaButton>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3 rounded-2xl border border-cloud-600 bg-cloud-100 p-6">
              {avatar ? (
                <span className="relative size-12 shrink-0 overflow-hidden rounded-full">
                  <Image src={avatar} alt={experiment.founder} fill sizes="48px" className="object-cover" />
                </span>
              ) : null}
              <div className="flex flex-col">
                <p className="text-body-xs font-semibold tracking-[0.1em] text-midnight-400 uppercase">
                  Behind this experiment
                </p>
                <p className="text-body-lg font-bold text-midnight-800">
                  {founderLabel(experiment.founder)}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl bg-midnight-800 p-8">
              <p className="text-body-xs font-semibold tracking-[0.1em] text-cloud-300 uppercase">
                Help us learn
              </p>
              <h2 className="text-heading-xs font-bold text-cloud-50">
                Would this make things better for you?
              </h2>
              <p className="text-body-md text-midnight-100">
                If you&rsquo;ve dealt with this problem, tried something similar
                or would be interested in testing what we build next, we&rsquo;d
                like to hear from you.
              </p>
              <div className="flex flex-col items-start gap-3">
                <CtaButton href={FORM_HREF} variant="lime">
                  Share your experience
                </CtaButton>
                <CtaButton
                  href="/experiments"
                  variant="outline"
                  className="border-midnight-300 text-cloud-50 hover:border-lime-500 hover:bg-lime-500 hover:text-midnight-900"
                >
                  Explore more experiments
                </CtaButton>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {related.length ? (
        <section className="bg-cloud-100 py-16 sm:py-24">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionEyebrow>Keep exploring</SectionEyebrow>
              <h2 className="text-heading-md font-extrabold text-midnight-800 uppercase">
                More experiments worth trying.
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((e, i) => (
                <li key={e.slug}>
                  <Reveal delay={i * 80} className="h-full">
                    <ExperimentCard experiment={e} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="bg-midnight-700 py-10">
        <Container>
          <p className="text-center text-body-sm font-semibold tracking-[0.14em] text-cloud-100 uppercase">
            More time for what really matters.
          </p>
        </Container>
      </section>
    </PageShell>
  );
}
