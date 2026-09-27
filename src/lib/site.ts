export const SITE = {
  name: "Surely",
  url: "https://www.surelylabs.io",
  email: "Hello@LearnHow2.ai",
  description:
    "Surely brings together different perspectives to explore problems, uncover possibilities and build things that matter.",
} as const;

export const FORM_HREF = "/tell-us-a-problem";

export const NAV_LINKS = [
  { label: "What we do", href: "/what-we-do" },
  { label: "Problems", href: "/problems" },
  { label: "Experiments", href: "/experiments" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

export { EXPERIMENTS, type Experiment } from "@/lib/experiments";
