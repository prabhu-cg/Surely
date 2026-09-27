import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ProblemForm } from "@/components/problem-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tell us a problem",
  description:
    "What makes you think, surely there must be a better way? Tell us the problem. You don't need to know the answer.",
  alternates: { canonical: "/tell-us-a-problem" },
};

const STEPS = [
  ["You tell us", "A few honest answers. Rough is fine, and you don’t need the solution."],
  ["We question it", "We ask why it works this way, and who it works for."],
  ["It may become something", "Some problems turn into experiments. All of them teach us something."],
];

export default function TellUsAProblemPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Tell us a problem" title="What makes you think, “surely there must be a better way?”">
        Frustrations at work, at home, or anywhere in between. If a process is
        slower, harder or more confusing than it should be, we want to hear it.
      </PageHero>

      <section className="bg-cloud-50 py-16 sm:py-24">
        <Container className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <ProblemForm />

          <aside className="flex flex-col gap-10 lg:pt-2">
            <div className="flex flex-col gap-6 rounded-2xl border border-cloud-600 bg-cloud-100 p-8">
              <h2 className="font-serif text-heading-xs text-midnight-800">
                What happens next
              </h2>
              <ol className="flex flex-col gap-6">
                {STEPS.map(([title, body], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime-500 text-body-sm font-bold text-midnight-900">
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="text-body-md font-semibold text-midnight-800">{title}</p>
                      <p className="text-body-md text-midnight-500">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <p className="text-body-sm text-midnight-500">
              Please don&rsquo;t include passwords, financial details or private
              information about other people. Prefer to write it yourself? Email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold text-midnight-800 underline decoration-4 decoration-lime-500 underline-offset-4"
              >
                {SITE.email}
              </a>
              .
            </p>
          </aside>
        </Container>
      </section>
    </PageShell>
  );
}
