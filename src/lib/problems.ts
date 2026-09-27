import { PROBLEM_RECORDS, type ProblemRecord } from "@/data/problems";

export type Problem = ProblemRecord;

export const PROBLEMS: Problem[] = [...PROBLEM_RECORDS].sort((a, b) =>
  a.title.localeCompare(b.title)
);

export const TOPICS = Array.from(new Set(PROBLEMS.map((p) => p.topic))).sort();

export function getProblem(slug: string) {
  return PROBLEMS.find((p) => p.slug === slug);
}

export function relatedProblems(problem: Problem, limit = 3) {
  const same = PROBLEMS.filter(
    (p) => p.slug !== problem.slug && p.topic === problem.topic
  );
  const rest = PROBLEMS.filter(
    (p) => p.slug !== problem.slug && p.topic !== problem.topic
  );
  return [...same, ...rest].slice(0, limit);
}

/** Splits an evidence paragraph into items that each end with a (Source) tag. */
export function splitEvidence(evidence: string): string[] {
  if (!evidence) return [];
  return evidence
    .split(/(?<=\))\s+(?=[A-Z])/)
    .map((s) => s.trim())
    .filter(Boolean);
}
