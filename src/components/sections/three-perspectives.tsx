import Image from "next/image";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";

const FOUNDERS = [
  {
    name: "The Builder.",
    tagline: "Driven. Practical. Action-oriented.",
    body: "Sees the opportunity to make something better and get moving.",
    image: "/images/founder-builder.png",
  },
  {
    name: "The Explorer.",
    tagline: "What could be different.",
    body: "Looks beyond the obvious and asks what else might be possible.",
    image: "/images/founder-explorer.png",
  },
  {
    name: "The Thinker.",
    tagline: "What matters.",
    body: "Looks beneath the surface to understand how things connect.",
    image: "/images/founder-thinker.png",
  },
];

export function ThreePerspectives() {
  return (
    <section id="about" className="scroll-mt-20 bg-lime-100 py-20 sm:py-28">
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
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col gap-5 rounded-2xl bg-midnight-800 p-5"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src={founder.image}
                  alt={founder.name.replace(".", "")}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-heading-xs font-bold text-cloud-50">
                  {founder.name}
                </p>
                <p className="text-body-sm font-semibold text-lime-500">
                  {founder.tagline}
                </p>
                <p className="text-body-sm text-midnight-100">
                  {founder.body}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <CtaButton variant="lime" size="sm" href="#about">
                  Explore
                </CtaButton>
                <a
                  href="#"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-midnight-500 text-cloud-50 transition-colors hover:bg-midnight-400"
                  aria-label={`${founder.name.replace(".", "")} on LinkedIn`}
                >
                  <LinkedinLogo className="size-4" weight="fill" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-body-md font-medium text-midnight-700">
          Different strengths. One shared purpose.
        </p>
      </Container>
    </section>
  );
}
