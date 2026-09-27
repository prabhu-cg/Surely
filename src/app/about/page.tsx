import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Interruption } from "@/components/sections/interruption";
import { PageCta } from "@/components/sections/page-cta";
import { ThreePerspectives } from "@/components/sections/three-perspectives";

export const metadata: Metadata = {
  title: "About",
  description:
    "Surely is built around three founders and three perspectives: the Builder, the Explorer and the Thinker.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About Surely" title="Three perspectives. One Surely.">
        We don&rsquo;t believe every problem needs a bigger solution.
        Sometimes it needs a better question, and someone willing to ask it.
      </PageHero>
      <Interruption />
      <ThreePerspectives variant="full" />
      <PageCta />
    </PageShell>
  );
}
