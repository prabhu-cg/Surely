import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";

const AVATARS = [
  { name: "Builder", src: "/images/founder-builder.png" },
  { name: "Explorer", src: "/images/founder-explorer.png" },
  { name: "Thinker", src: "/images/founder-thinker.png" },
];

const OBVIOUS = [
  "A process takes too long.",
  "A product creates unnecessary friction.",
  "A system no longer serves the people using it.",
  "An opportunity is hiding in plain sight (the best ones usually are).",
];

const HARDER = [
  "But eventually, someone has to stop and ask:",
  "Why are we doing it this way?",
  "That’s where Surely begins.",
];

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body-lg font-semibold text-midnight-800">{title}</p>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm bg-lime-500">
              <Check className="size-3.5 text-midnight-900" strokeWidth={3} />
            </span>
            <span className="text-body-md text-midnight-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Interruption() {
  return (
    <section className="bg-cloud-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <SectionEyebrow>The interruption</SectionEyebrow>
          <h2 className="max-w-2xl text-heading-md font-extrabold text-midnight-800 uppercase sm:text-heading-lg">
            Something isn&rsquo;t working.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <BulletList title="Sometimes it’s obvious." items={OBVIOUS} />
          <BulletList title="Sometimes it’s harder." items={HARDER} />

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[22rem]">
            <Image
              src="/images/three-founders.jpg"
              alt="People passing through a modern office lobby"
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-midnight-900/90 to-transparent"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col justify-end gap-4 p-6">
              <div className="ml-auto flex -space-x-3">
                {AVATARS.map((avatar) => (
                  <span
                    key={avatar.name}
                    className="relative size-9 overflow-hidden rounded-full border-2 border-midnight-700"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.name}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <p className="font-serif text-heading-xs text-cloud-50 italic">
                &ldquo;We don&rsquo;t believe every problem needs a bigger
                solution. Sometimes it needs a better question.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
