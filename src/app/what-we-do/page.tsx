import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { PageCta } from "@/components/sections/page-cta";
import { SurelyShift } from "@/components/sections/surely-shift";
import { WhatWeCreate } from "@/components/sections/what-we-create";
import { WhatWeDo } from "@/components/sections/what-we-do";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Surely finds better ways forward: we question, understand, explore, build and improve. Here is how we work.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <PageShell>
      <PageHero eyebrow="What we do" title="We find better ways forward">
        Surely brings together different perspectives to explore problems,
        uncover possibilities and build things that matter. This is how we
        work, from the first question to the next improvement.
      </PageHero>
      <WhatWeDo />
      <SurelyShift />
      <WhatWeCreate />
      <PageCta />
    </PageShell>
  );
}
