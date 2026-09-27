import { EXPERIMENT_RECORDS, type ExperimentRecord } from "@/data/experiments";
import { PROBLEMS, type Problem } from "@/lib/problems";

export type Experiment = ExperimentRecord;

export const EXPERIMENTS: Experiment[] = [...EXPERIMENT_RECORDS].sort(
  (a, b) => a.expNum - b.expNum
);

export const EXPERIMENT_TAGS = Array.from(
  new Set(EXPERIMENTS.map((e) => e.tag))
).sort();

export const EXPERIMENT_FOUNDERS = Array.from(
  new Set(EXPERIMENTS.map((e) => e.founder))
).sort();

export function getExperiment(slug: string) {
  return EXPERIMENTS.find((e) => e.slug === slug);
}

export type ResolvedProblem =
  | { matched: true; problem: Problem }
  | { matched: false; title: string; area: "Life" | "Work" };

/** Matches an experiment's linked-problem titles against the current problem bank. */
export function resolveLinkedProblems(experiment: Experiment): ResolvedProblem[] {
  return experiment.linkedProblems.map((lp) => {
    const problem = PROBLEMS.find((p) => p.title === lp.title);
    return problem ? { matched: true, problem } : { matched: false, ...lp };
  });
}

/** Experiments whose linked problems include this problem (by title match). */
export function experimentsForProblem(problem: Problem): Experiment[] {
  return EXPERIMENTS.filter((e) =>
    e.linkedProblems.some((lp) => lp.title === problem.title)
  );
}

export function relatedExperiments(experiment: Experiment, limit = 3) {
  const same = EXPERIMENTS.filter(
    (e) => e.slug !== experiment.slug && e.tag === experiment.tag
  );
  const rest = EXPERIMENTS.filter(
    (e) => e.slug !== experiment.slug && e.tag !== experiment.tag
  );
  return [...same, ...rest].slice(0, limit);
}
