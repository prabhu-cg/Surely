import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CtaButton } from "@/components/ui/cta-button";
import { FORM_HREF } from "@/lib/site";

export function PageCta({
  title = "Got a problem we haven’t heard yet?",
  body = "Tell us what should work better. A sentence is enough to start.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-lime-100 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-6 text-center">
        <SectionEyebrow tone="lime">Let’s talk</SectionEyebrow>
        <h2 className="max-w-2xl text-heading-md font-extrabold text-balance text-midnight-900 uppercase sm:text-heading-lg">
          {title}
        </h2>
        <p className="max-w-xl text-body-lg text-midnight-800">{body}</p>
        <CtaButton href={FORM_HREF} variant="dark">
          Tell us a problem
        </CtaButton>
      </Container>
    </section>
  );
}
