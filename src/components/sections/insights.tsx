import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { PlaceholderImage } from "@/components/placeholder-image";
import { InlineLink } from "@/components/inline-link";
import { CtaButton } from "@/components/ui/cta-button";

const COMPACT_INSIGHTS = [
  {
    title: "The best answer may not be the first one.",
    author: "Founder 2",
    readTime: "3 min read",
    image: "insight-02.jpg",
  },
  {
    title: "Small shifts. Different outcomes.",
    author: "Founder 3",
    readTime: "3 min read",
    image: "insight-03.jpg",
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-cloud-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <SectionEyebrow>Insights</SectionEyebrow>
          <h2 className="max-w-2xl text-heading-md font-extrabold text-midnight-800 uppercase sm:text-heading-lg">
            We ask questions out loud.
          </h2>
          <p className="max-w-xl text-body-lg text-midnight-600">
            Not every thought becomes a product. Sometimes an observation is
            worth sharing, a question needs discussion, or the best way to
            understand something is to write about it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="flex flex-col gap-5 rounded-2xl border border-cloud-600 p-5">
            <div className="relative">
              <PlaceholderImage
                label="insight-featured.jpg"
                className="aspect-[16/10] w-full rounded-xl"
              />
              <span className="absolute top-4 left-4 rounded-full bg-lime-500 px-3 py-1 text-body-xs font-semibold text-midnight-900">
                Featured insight
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-heading-xs font-bold text-midnight-800">
                Why do we still do it this way?
              </p>
              <p className="text-body-md text-midnight-600">
                The most interesting problems often begin with something
                that feels normal. Until you look closer.
              </p>
              <p className="text-body-sm text-midnight-400">
                Founder 1 · 3 min read
              </p>
              <InlineLink href="#insights">Read more</InlineLink>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            {COMPACT_INSIGHTS.map((insight) => (
              <article
                key={insight.title}
                className="flex gap-4 rounded-2xl border border-cloud-600 p-5"
              >
                <PlaceholderImage
                  label={insight.image}
                  className="aspect-square w-28 shrink-0 rounded-xl sm:w-32"
                />
                <div className="flex flex-col justify-center gap-2">
                  <p className="text-body-lg font-bold text-midnight-800">
                    {insight.title}
                  </p>
                  <p className="text-body-sm text-midnight-400">
                    {insight.author} · {insight.readTime}
                  </p>
                  <InlineLink href="#insights">Read more</InlineLink>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <CtaButton href="#insights" variant="dark">
            Explore all insights
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
