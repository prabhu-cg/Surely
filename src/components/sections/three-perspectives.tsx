import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";

const FOUNDERS = [
  {
    name: "Rinni",
    archetype: "The Builder.",
    tagline: "Driven. Practical. Action-oriented.",
    body: "Sees the opportunity to make something better and get moving.",
    image: "/images/founder-builder.png",
  },
  {
    name: "Mike",
    archetype: "The Explorer.",
    tagline: "What could be different.",
    body: "Looks beyond the obvious and asks what else might be possible.",
    image: "/images/founder-explorer.png",
  },
  {
    name: "Prabhu",
    archetype: "The Thinker.",
    tagline: "What matters.",
    body: "Looks beneath the surface to understand how things connect.",
    image: "/images/founder-thinker.png",
  },
];

export function ThreePerspectives({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  if (variant === "compact") {
    return (
      <section className="bg-lime-100 py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <SectionEyebrow tone="lime">Who&rsquo;s asking</SectionEyebrow>
            <h2 className="max-w-2xl text-heading-md font-extrabold text-midnight-900 uppercase sm:text-heading-lg">
              Three founders. Three perspectives.
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 90}>
                <div className="flex items-center gap-3 text-left">
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-midnight-900/10">
                    <Image
                      src={founder.image}
                      alt={`${founder.name}, ${founder.archetype.replace(".", "")}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-body-md font-bold text-midnight-900">
                      {founder.name}
                    </p>
                    <p className="text-body-sm text-midnight-700">
                      {founder.archetype.replace(".", "")} &middot; {founder.tagline}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <CtaButton href="/about" variant="dark">
            Meet the three of us
          </CtaButton>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-lime-100 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionEyebrow tone="lime">Three perspectives</SectionEyebrow>
          <h2 className="max-w-3xl text-heading-md font-extrabold text-midnight-900 uppercase sm:text-heading-lg">
            Three founders. Three perspectives. One Surely.
          </h2>
          <p className="max-w-2xl text-body-lg text-midnight-700">
            Different people see different things. That’s not a problem.
            It’s an advantage. Surely is built around three distinct
            perspectives — bringing different strengths, questions and ways
            of thinking to the same challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 80}>
              <div className="flex h-full flex-col gap-5 rounded-2xl bg-midnight-800 p-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image
                    src={founder.image}
                    alt={`${founder.name}, ${founder.archetype.replace(".", "")}`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-heading-xs font-bold text-cloud-50">
                    {founder.name}
                  </p>
                  <p className="text-body-sm font-semibold text-midnight-300 uppercase tracking-[0.08em]">
                    {founder.archetype}
                  </p>
                  <p className="text-body-sm font-semibold text-lime-500">
                    {founder.tagline}
                  </p>
                  <p className="text-body-sm text-midnight-100">
                    {founder.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-body-md font-medium text-midnight-700">
          Different strengths. One shared purpose.
        </p>
      </Container>
    </section>
  );
}
