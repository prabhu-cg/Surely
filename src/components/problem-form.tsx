"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { EnvelopeSimple, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/ui/cta-button";
import { SITE } from "@/lib/site";
import { getProblem } from "@/lib/problems";

type Area = "Work" | "Life";

type Fields = {
  problem: string;
  happens: string;
  area: Area | "";
  instead: string;
  frustrating: string;
  frequency: string;
  name: string;
  email: string;
  contactMe: boolean;
  tester: boolean;
};

const EMPTY: Fields = {
  problem: "",
  happens: "",
  area: "",
  instead: "",
  frustrating: "",
  frequency: "",
  name: "",
  email: "",
  contactMe: false,
  tester: false,
};

const REQUIRED: { key: keyof Fields; message: string }[] = [
  { key: "problem", message: "Tell us the problem in a few words." },
  { key: "happens", message: "Describe what happens." },
  { key: "area", message: "Choose work or life." },
  { key: "instead", message: "Tell us what you do instead, even if it is nothing." },
  { key: "frustrating", message: "What is the most frustrating part?" },
  { key: "frequency", message: "Roughly how often does this happen?" },
];

const inputClass =
  "w-full rounded-xl border border-cloud-600 bg-cloud-50 px-4 py-3 text-body-md text-midnight-800 placeholder:text-cloud-800 transition-colors duration-200 hover:border-midnight-300 focus-visible:border-midnight-800 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none aria-invalid:border-destructive";

function buildMailto(f: Fields, from?: string) {
  const subject = `Problem: ${f.problem.trim().slice(0, 80)}`;
  const lines = [
    from ? `Related problem: ${from}` : null,
    `What's the problem?\n${f.problem.trim()}`,
    `What happens?\n${f.happens.trim()}`,
    `Work or life?\n${f.area}`,
    `What do they currently do instead?\n${f.instead.trim()}`,
    `Most frustrating part?\n${f.frustrating.trim()}`,
    `How often?\n${f.frequency.trim()}`,
    `Happy for Surely to contact them about this problem: ${f.contactMe ? "Yes" : "No"}`,
    `Interested in testing a better solution: ${f.tester ? "Yes" : "No"}`,
    `From: ${f.name.trim() || "Anonymous"}${f.email.trim() ? ` <${f.email.trim()}>` : ""}`,
  ].filter(Boolean);
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\n\n"))}`;
}

type FieldKey = keyof Fields;

function Label({ htmlFor, children, optional }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-body-md font-semibold text-midnight-800">
      {children}
      {optional ? <span className="font-normal text-midnight-300"> Optional</span> : null}
    </label>
  );
}

function ErrorText({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="text-body-sm text-destructive">
      {children}
    </p>
  );
}

export function ProblemForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [mailto, setMailto] = useState<string | null>(null);
  const [related, setRelated] = useState<string | undefined>();

  // Prefill when arriving from a problem page (?problem=slug&intent=same|experience|test).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const problem = getProblem(params.get("problem") ?? "");
    if (!problem) return;
    const intent = params.get("intent");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRelated(problem.title);
    setFields((f) => ({
      ...f,
      problem: problem.title,
      area: problem.area,
      tester: intent === "test",
      contactMe: intent === "experience" || intent === "test",
    }));
  }, []);

  const set =
    (key: FieldKey) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
      setFields((f) => ({ ...f, [key]: value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<Record<FieldKey, string>> = {};
    for (const { key, message } of REQUIRED) {
      if (!String(fields[key]).trim()) next[key] = message;
    }
    if (fields.email.trim() && !/^\S+@\S+\.\S+$/.test(fields.email.trim()))
      next.email = "That email address doesn’t look right.";
    if (fields.contactMe && !fields.email.trim())
      next.email = "Add your email so we can contact you.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    const href = buildMailto(fields, related);
    setMailto(href);
    window.location.href = href;
  }

  if (mailto) {
    return (
      <div role="status" className="flex flex-col items-start gap-5 rounded-2xl bg-lime-100 p-8 sm:p-10">
        <CheckCircle className="size-10 text-midnight-900" weight="fill" />
        <h2 className="text-heading-sm font-extrabold text-midnight-900 uppercase">
          Your email is ready to send.
        </h2>
        <p className="max-w-md text-body-md text-midnight-800">
          We opened a draft in your email app with your answers filled in. Press
          send and it reaches us at {SITE.email}. Nothing has been sent until
          you do.
        </p>
        <div className="flex flex-wrap gap-3">
          <CtaButton href={mailto} variant="dark">
            Open the draft again
          </CtaButton>
          <button
            type="button"
            onClick={() => setMailto(null)}
            className="rounded-full border border-midnight-800/30 px-6 py-3 text-body-sm font-semibold text-midnight-900 transition-colors duration-200 hover:border-midnight-900 focus-visible:ring-2 focus-visible:ring-midnight-900 focus-visible:outline-none sm:text-body-md"
          >
            Edit my answers
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
      {related ? (
        <p className="rounded-xl bg-lime-100 px-4 py-3 text-body-sm text-midnight-900">
          You are adding your experience to: <strong>{related}</strong>
        </p>
      ) : null}

      <div className="flex flex-col gap-2">
        <Label htmlFor="problem">What&rsquo;s the problem?</Label>
        <input
          id="problem"
          type="text"
          value={fields.problem}
          onChange={set("problem")}
          placeholder="In a sentence"
          aria-invalid={!!errors.problem}
          aria-describedby={errors.problem ? "problem-error" : undefined}
          className={inputClass}
        />
        <ErrorText id="problem-error">{errors.problem}</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="happens">Tell us what happens</Label>
        <textarea
          id="happens"
          rows={4}
          value={fields.happens}
          onChange={set("happens")}
          placeholder="Walk us through the last time it happened."
          aria-invalid={!!errors.happens}
          aria-describedby={errors.happens ? "happens-error" : undefined}
          className={cn(inputClass, "resize-y")}
        />
        <ErrorText id="happens-error">{errors.happens}</ErrorText>
      </div>

      <fieldset className="flex flex-col gap-3" aria-describedby={errors.area ? "area-error" : undefined}>
        <legend className="text-body-md font-semibold text-midnight-800">
          Is this about work or life?
        </legend>
        <div className="flex flex-wrap gap-2">
          {(["Work", "Life"] as const).map((c) => (
            <label key={c} className="cursor-pointer">
              <input
                type="radio"
                id={c === "Work" ? "area" : undefined}
                name="area"
                value={c}
                checked={fields.area === c}
                onChange={set("area")}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-cloud-600 px-4 py-2 text-body-sm font-semibold text-midnight-700 transition-colors duration-200 peer-checked:border-midnight-500 peer-checked:bg-midnight-500 peer-checked:text-cloud-50 peer-focus-visible:ring-2 peer-focus-visible:ring-lime-500 peer-focus-visible:ring-offset-2 hover:border-midnight-800">
                {c}
              </span>
            </label>
          ))}
        </div>
        <ErrorText id="area-error">{errors.area}</ErrorText>
      </fieldset>

      <div className="flex flex-col gap-2">
        <Label htmlFor="instead">What do you currently do instead?</Label>
        <textarea
          id="instead"
          rows={3}
          value={fields.instead}
          onChange={set("instead")}
          placeholder="Workarounds, tools, spreadsheets, or nothing at all."
          aria-invalid={!!errors.instead}
          aria-describedby={errors.instead ? "instead-error" : undefined}
          className={cn(inputClass, "resize-y")}
        />
        <ErrorText id="instead-error">{errors.instead}</ErrorText>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="frustrating">What&rsquo;s the most frustrating part?</Label>
          <input
            id="frustrating"
            type="text"
            value={fields.frustrating}
            onChange={set("frustrating")}
            aria-invalid={!!errors.frustrating}
            aria-describedby={errors.frustrating ? "frustrating-error" : undefined}
            className={inputClass}
          />
          <ErrorText id="frustrating-error">{errors.frustrating}</ErrorText>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="frequency">How often does this happen?</Label>
          <input
            id="frequency"
            type="text"
            value={fields.frequency}
            onChange={set("frequency")}
            placeholder="Daily, monthly, once a year"
            aria-invalid={!!errors.frequency}
            aria-describedby={errors.frequency ? "frequency-error" : undefined}
            className={inputClass}
          />
          <ErrorText id="frequency-error">{errors.frequency}</ErrorText>
        </div>
      </div>

      <div className="grid gap-6 border-t border-cloud-600 pt-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" optional>
            First name
          </Label>
          <input id="name" type="text" autoComplete="given-name" value={fields.name} onChange={set("name")} className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" optional>
            Email
          </Label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          <ErrorText id="email-error">{errors.email}</ErrorText>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {(
          [
            ["contactMe", "I’m happy for Surely to contact me about this problem"],
            ["tester", "I’d be interested in testing a better solution"],
          ] as const
        ).map(([key, label]) => (
          <label key={key} className="flex cursor-pointer items-start gap-3 text-body-md text-midnight-700">
            <input
              type="checkbox"
              checked={fields[key]}
              onChange={set(key)}
              className="peer sr-only"
            />
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-cloud-700 bg-cloud-50 text-transparent transition-colors duration-200 peer-checked:border-lime-500 peer-checked:bg-lime-500 peer-checked:text-midnight-900 peer-focus-visible:ring-2 peer-focus-visible:ring-lime-500 peer-focus-visible:ring-offset-2">
              <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8.5l3.2 3L13 4.5" />
              </svg>
            </span>
            {label}
          </label>
        ))}
      </div>

      <div className="flex flex-col items-start gap-3">
        <CtaButton type="submit" variant="dark">
          Send it to Surely
        </CtaButton>
        <p className="flex items-start gap-2 text-body-sm text-midnight-500">
          <EnvelopeSimple className="mt-0.5 size-4 shrink-0" />
          <span>
            This opens a draft in your email app, addressed to {SITE.email}. See how we use
            what you share in our{" "}
            <Link href="/privacy" className="font-semibold text-midnight-800 underline decoration-4 decoration-lime-500 underline-offset-4">
              Privacy Policy
            </Link>
            .
          </span>
        </p>
      </div>
    </form>
  );
}
