import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Interruption } from "@/components/sections/interruption";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ThreePerspectives } from "@/components/sections/three-perspectives";
import { SurelyShift } from "@/components/sections/surely-shift";
import { WhatWeCreate } from "@/components/sections/what-we-create";
import { Insights } from "@/components/sections/insights";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Interruption />
        <WhatWeDo />
        <ThreePerspectives />
        <SurelyShift />
        <WhatWeCreate />
        <Insights />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
