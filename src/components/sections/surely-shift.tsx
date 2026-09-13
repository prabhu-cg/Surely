import { Container } from "@/components/container";
import { SectionEyebrow } from "@/components/section-eyebrow";

const STEPS = [
  "Sometimes you have to step outside.",
  "Shift your perspective.",
  "Ask a different question.",
  "Explore a different route.",
  "That’s where new possibilities begin.",
];

export function SurelyShift() {
  return (
    <section
      id="how-we-work"
      className="scroll-mt-20 bg-cloud-50 py-20 sm:py-28"
    >
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <SectionEyebrow>The Surely shift</SectionEyebrow>
          <h2 className="text-heading-md font-extrabold text-midnight-800 uppercase sm:text-heading-lg">
            A different perspective can change everything.
          </h2>
          <p className="text-body-lg text-midnight-600">
            Different people see different things. That’s not a problem.
            It’s an advantage. Surely is built around three distinct
            perspectives — bringing different strengths, questions and ways
            of thinking to the same challenge.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-body-lg font-semibold text-midnight-800">
            Most systems make sense when you look at them from inside.
          </p>
          <ul className="flex flex-col">
            {STEPS.map((step, index) => (
              <li
                key={step}
                className={
                  "border-t border-cloud-600 py-4 text-body-md text-midnight-600 last:font-semibold last:text-midnight-800" +
                  (index === STEPS.length - 1 ? " last:border-b" : "")
                }
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
