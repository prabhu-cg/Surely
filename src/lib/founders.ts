// Real-name → archetype mapping.
export const FOUNDERS = {
  Rinni: { archetype: "The Builder", image: "/images/founder-builder.png" },
  Prabhu: { archetype: "The Thinker", image: "/images/founder-thinker.png" },
  Mike: { archetype: "The Explorer", image: "/images/founder-explorer.png" },
} as const;

export type FounderName = keyof typeof FOUNDERS;

export function founderArchetype(name: string) {
  return FOUNDERS[name as FounderName]?.archetype ?? name;
}

export function founderImage(name: string) {
  return FOUNDERS[name as FounderName]?.image;
}

/** e.g. "Mike (The Explorer)" */
export function founderLabel(name: string) {
  const archetype = FOUNDERS[name as FounderName]?.archetype;
  return archetype ? `${name} (${archetype})` : name;
}
