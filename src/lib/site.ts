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

export type Experiment = {
  slug: string;
  name: string;
  tag: string;
  summary: string;
  detail: string;
  problem?: string; // problem slug this began as
};

export const EXPERIMENTS: Experiment[] = [
  {
    slug: "lifeadmin",
    name: "LifeAdmin",
    tag: "LifeTech",
    summary:
      "A household admin assistant that organises bills, renewals, documents and important dates.",
    detail:
      "Reminders for what is coming up and savings tracking for what you are overpaying, so life admin stops living in your head.",
    problem: "keeping-on-top-of-household-and-life-admin",
  },
  {
    slug: "prompttrim",
    name: "PromptTrim",
    tag: "AITech",
    summary:
      "Condenses messy prompts into short, direct instructions while keeping every requirement.",
    detail:
      "Paste the long version. Get back the version you would have written if you had more time.",
    problem: "my-ai-prompts-get-longer-and-harder-to-manage",
  },
  {
    slug: "solvr",
    name: "Solvr",
    tag: "DesignTech",
    summary:
      "A guided design workspace with seven structured stages and AI-powered drafting and scoring.",
    detail:
      "It slows you down at the start, on purpose, so you know the real problem before you pick a solution.",
  },
];
