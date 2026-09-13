import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";

export function Cta() {
  return (
    <section id="talk" className="scroll-mt-20 bg-lime-100 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-6 text-center">
        <SectionEyebrow tone="lime">Let’s talk</SectionEyebrow>
        <h2 className="max-w-2xl text-heading-md font-extrabold text-midnight-900 uppercase sm:text-heading-lg">
          There must be a better way.
        </h2>
        <p className="max-w-xl text-body-lg text-midnight-800">
          Have an idea? A problem? Something that doesn’t quite make sense?
          Let’s talk about it.
        </p>
        <CtaButton href="mailto:hello@surely.com" variant="dark">
          Let’s talk
        </CtaButton>
      </Container>
    </section>
  );
}
