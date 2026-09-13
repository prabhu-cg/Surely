import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";
import { PlaceholderImage } from "@/components/placeholder-image";

export function Hero() {
  return (
    <section className="bg-midnight-700">
      <Container className="flex flex-col items-center gap-8 pt-16 pb-20 text-center sm:pt-20 sm:pb-24">
        <SectionEyebrow tone="light">A different perspective</SectionEyebrow>

        <h1 className="max-w-4xl text-heading-lg font-extrabold tracking-tight text-cloud-50 uppercase sm:text-heading-xl lg:text-display-md">
          We question what everyone else accepts
        </h1>

        <p className="text-heading-xs font-semibold text-cloud-200">
          There must be a better way.
        </p>

        <p className="max-w-xl text-body-lg text-midnight-100">
          We look at problems, systems, ideas and opportunities from a
          different perspective. Because sometimes the way things have always
          been done isn&rsquo;t the best way forward.
        </p>

        <CtaButton href="#what-we-do" variant="lime">
          Let&rsquo;s explore
        </CtaButton>

        <PlaceholderImage
          label="hero-perspective.jpg"
          className="mt-8 aspect-[16/10] w-full max-w-4xl rounded-2xl sm:aspect-[16/8]"
        />
      </Container>
    </section>
  );
}
