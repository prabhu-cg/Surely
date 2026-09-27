import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function PageHero({
  eyebrow,
  title,
  children,
  aside,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="bg-midnight-700">
      <Container className="flex flex-col gap-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
        {eyebrow ? <SectionEyebrow tone="light">{eyebrow}</SectionEyebrow> : null}
        <h1 className="max-w-4xl text-heading-lg font-extrabold tracking-tight text-balance text-cloud-50 uppercase sm:text-heading-xl lg:text-heading-2xl">
          {title}
        </h1>
        {children ? (
          <p className="max-w-xl text-body-lg text-midnight-100">{children}</p>
        ) : null}
        {aside}
      </Container>
    </section>
  );
}
