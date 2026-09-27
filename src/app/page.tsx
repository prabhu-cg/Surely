import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Interruption } from "@/components/sections/interruption";
import { ProcessRibbon } from "@/components/sections/process-ribbon";
import { QuestionToThing } from "@/components/sections/question-to-thing";
import { ThreePerspectives } from "@/components/sections/three-perspectives";
import { Insights } from "@/components/sections/insights";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Interruption />
        <ProcessRibbon />
        <QuestionToThing />
        <ThreePerspectives variant="compact" />
        <Insights variant="compact" />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
