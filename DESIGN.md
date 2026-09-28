---
name: Surely
description: A studio site for a three-founder venture that questions accepted defaults — confident, editorial, high-contrast, lime-lit.
colors:
  midnight-ink: "#181818"
  midnight-deep: "#111111"
  midnight-abyss: "#0a0a0a"
  cloud-paper: "#fffffe"
  cloud-line: "#e8e6e2"
  cloud-mute: "#8c8b88"
  white: "#ffffff"
  lime-signal: "#c7f000"
  lime-wash: "#eefab0"
  destructive: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "6rem"
    fontWeight: 800
    lineHeight: "7rem"
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: "3.5rem"
    letterSpacing: "-0.01em"
  card-heading:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  body:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5rem"
  label:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1rem"
    letterSpacing: "0.18em"
rounded:
  pill: "9999px"
  sm: "0.6rem"
  md: "0.8rem"
  lg: "1rem"
  xl: "1.4rem"
  2xl: "1.8rem"
  3xl: "2.2rem"
  4xl: "2.6rem"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.midnight-ink}"
    textColor: "{colors.cloud-paper}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.lime-signal}"
    textColor: "{colors.midnight-abyss}"
  button-lime:
    backgroundColor: "{colors.lime-signal}"
    textColor: "{colors.midnight-abyss}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.midnight-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  badge-topic:
    backgroundColor: "{colors.lime-wash}"
    textColor: "{colors.midnight-abyss}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.midnight-ink}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.midnight-ink}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
---

# Design System: Surely

## Overview

**Creative North Star: "The Confident Contrarian"**

Surely is a studio that exists to question what everyone else accepts, and the site is built to hold that stance visually: short, blunt, uppercase display statements in extra-bold sans-serif sit against near-black "Midnight" sections, punctuated by a single unmistakable accent — a raw, unmixed lime (`#c7f000`). Outside those dark statement moments, the site relaxes into an off-white "Cloud" canvas of soft-cornered white cards, calm serif sub-headings, and quiet neutral borders. The pairing is deliberate: sans-serif extra-bold uppercase carries conviction and authority (hero lines, section headlines), while the serif (Source Serif 4) is reserved for card and content titles, giving those moments a slower, more editorial register.

The system is flat, not shadowed — depth comes from color blocking (midnight sections, lime sections, white cards on cloud backgrounds) and from a consistent large-radius rounding language, not from elevation. Corners are generously rounded almost everywhere (buttons and pills are fully rounded; cards, inputs, and images use large 1–1.8rem radii), which softens what would otherwise be a very high-contrast, poster-like palette.

**Key Characteristics:**
- Near-black "Midnight" sections carry the boldest statements; lime is the only saturated color and appears sparingly, as accent fills, focus rings, and hover states.
- Sans-serif extra-bold uppercase for structural headings; serif for card/content titles — a deliberate two-voice type pairing.
- Flat, borderless-by-default surfaces; depth comes from background color blocking, not shadows.
- Full-radius pills for every button, chip, and toggle; large (1–1.8rem) radii for cards, inputs, and photography.
- Cards, form fields, and table rows are consistently rendered on literal white, distinct from the warm off-white page canvas.

## Colors

The palette is three ramps — a warm-white "Cloud" neutral, a near-black "Midnight" neutral, and a single acid "Lime" accent — plus destructive red for validation states. Nothing else is on-brand; there is no secondary hue.

### Primary
- **Midnight Ink** (`#181818`, `--color-midnight-500`): the default text/button/dark-section color. Used for primary CTA fills, nav active states, and the darkest section backgrounds (`midnight-700` `#111111`, `midnight-800` `#0d0d0d`) that carry hero and statement copy.

### Secondary
- **Lime Signal** (`#c7f000`, `--color-lime-500`): the sole saturated accent. Used for hover fills on dark CTAs, focus rings (`focus-visible:ring-lime-500`), active-state underlines, checkbox fills, and small lime-block sections (`ThreePerspectives`, success states). Appears on ≤1 element per view at rest.
- **Lime Wash** (`#eefab0`, `--color-lime-100`): a pale tint of the accent used for topic pills, success banners, and "related problem" callouts — never for body copy or large fills.

### Neutral
- **Cloud Paper** (`#fffffe`–`#fffdf9`, `--color-cloud-50`…`400`): the light-mode background ramp; near-white, used for the header bar, page chrome, and light section backgrounds.
- **White** (`#ffffff`, `--color-white`): a dedicated token (added to the `@theme` block directly after the Cloud ramp) reserved for elevated surfaces — cards, inputs, table rows — that need to read lighter than the Cloud ramp's warm off-whites. `--card` in both `:root` and `.dark` resolves to `var(--color-white)`. The page body background now resolves to `--color-cloud-500` (`bg-cloud-500`, exactly `#fffdf8`) rather than a hardcoded hex — see Named Rule below.
- **Cloud Line** (`#e8e6e2`, `--color-cloud-600`): the universal border/divider color — card borders, input borders, table borders, header border.
- **Cloud Mute** (`#8c8b88`–`#b5b4b0`, `--color-cloud-700/800`): placeholder text and secondary iconography on light backgrounds.
- **Midnight Text Ramp** (`--color-midnight-300`…`900`): body copy (`midnight-500`/`700`), headings (`midnight-800`/`900`), and muted captions (`midnight-300`/`400`) on light backgrounds.
- **Destructive** (`oklch(0.577 0.245 27.325)`): form validation errors only.

### Named Rules
**The One Accent Rule.** Lime is the only saturated color in the system. It is reserved for interaction feedback (hover, focus, active, success) and small intentional blocks — never a background for large bodies of text or a default UI color.

**The Split Surface Rule.** Elevated surfaces (cards, inputs, table rows) use the dedicated `--color-white` token (`#ffffff`), not the Cloud ramp, so they read a fractionally cooler white than the page they sit on; `--card` resolves to this token in both light and dark mode, so dark mode currently ships no distinct dark card surface. This is now a token-backed, intentional design decision (previously a hardcoded hex override with no home in the ramp — reconciled: both `--card` and the body background were pinned to literal hex values; the body background now reads `--color-cloud-500` and `--card` now reads `var(--color-white)`, a real token added to the `@theme` block for this purpose). Don't merge `--color-white` back into the Cloud ramp without a deliberate design decision — the visual separation from `cloud-50`'s warm tint is the point.

## Typography

**Display/Heading Font:** Plus Jakarta Sans (with `ui-sans-serif, system-ui, sans-serif`)
**Card/Content Font:** Source Serif 4 (with `ui-serif, Georgia, serif`)

**Character:** A confident, extra-bold uppercase sans carries structural authority (hero lines, section headlines, nav); a plain-weight serif is used narrowly for card and content titles, giving individual content items a calmer, more editorial register than the surrounding chrome.

### Hierarchy
- **Display** (800, `text-display-md`/`lg` = 6–7rem / line-height 7–8.5rem): reserved for the largest marketing statements; observed at the top tier of heading scale, not yet in wide use across shipped pages.
- **Heading** (800, `text-heading-lg`–`text-heading-2xl` = 3–4.75rem, uppercase, tight tracking): hero H1s and major section H2s, always uppercase with `tracking-tight` on hero copy.
- **Heading — card/content title** (400, `text-heading-xs`–`sm` = 1.5–2rem, serif, sentence case): problem/experiment card titles and in-page subheads — the one place the serif appears.
- **Body** (400–600, `text-body-sm`–`xl` = 0.875–1.25rem): paragraph copy, form labels, nav links. `text-body-sm`/`md` is the default UI size; `text-body-lg`/`xl` for hero/lede paragraphs.
- **Label** (600–700, `text-body-xs` = 0.75rem, `tracking-[0.1em]`–`[0.18em]`, uppercase): eyebrows, table column headers, filter-group labels, topic pills.

### Named Rules
**The Uppercase-Authority Rule.** Uppercase + extra-bold (800) weight is reserved for structural headings (H1/H2) and labels/eyebrows. Body copy, card titles, and links are never uppercased.

## Layout

Pages are built from a single `Container` primitive: `mx-auto w-full max-w-6xl px-6 lg:px-8` (max content width 72rem/1152px, 24px gutters that grow to 32px at `lg`). Sections are full-bleed color blocks (`<section className="bg-*">`) with the `Container` nested inside for horizontal rhythm; vertical rhythm between sections is large and consistent — `py-20 sm:py-28` for standard sections, `pt-14/16 sm:pt-20 pb-16/20 sm:pb-24` for page-hero bands. Content grids step from 1 column on mobile to 2 (`sm:grid-cols-2`) and 3 (`lg:grid-cols-3`) columns for card/founder grids. Tables set a `min-w-[640px]` floor and scroll horizontally on narrow viewports rather than reflowing; the table view itself is hidden below `sm` in favor of the card view. The header is `sticky top-0` with a translucent blurred Cloud background (`bg-cloud-50/90 backdrop-blur`).

## Elevation & Depth

The system is flat: no `box-shadow` vocabulary is in use anywhere in the scanned components. Depth and hierarchy come entirely from background color blocking (Midnight-dark sections, Lime-tinted sections, White cards against the Cloud/Bone page background) and from borders (`border-cloud-600`) rather than shadow or blur, except for the header's `backdrop-blur` used for a sticky-nav separation effect.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest and on interaction. State changes (hover, focus, active) are communicated through color shift (border darkening, background inversion to lime), underline decoration, or a 1px `translate-y` press effect on buttons — never through elevation.

## Shapes

Corner radius is generous and consistent across the whole system, driven by a single `--radius: 1rem` base scaled via `--radius-sm` (0.6×) through `--radius-4xl` (2.6×). In practice: buttons, pills, chips, badges, and toggles are always fully rounded (`rounded-full`); cards use `rounded-2xl` (1.8rem / ~29px); form inputs and textareas use `rounded-xl` (1.4rem / ~22px); hero/content imagery uses `rounded-2xl`; small utility elements (checkboxes) use `rounded-md`. Borders are hairline (`border`, 1px) in `cloud-600`, applied to cards, inputs, dividers, and chip outlines — there is no double-border or heavy-stroke treatment anywhere in the system.

## Components

### Buttons
- **Shape:** fully rounded pill (`rounded-full`) for the primary `CtaButton`; `rounded-lg` (1rem) for the shadcn-derived `Button` primitive's smaller utility variants.
- **Primary (`CtaButton variant="dark"`):** Midnight-ink fill (`bg-midnight-500`), Cloud text, `px-6 py-3`, semibold body text, trailing arrow icon that shifts right on hover.
- **Lime (`variant="lime"`):** Lime fill with Midnight text, inverts to Cloud fill on hover — used for the single highest-emphasis CTA per page (hero "Let's explore").
- **Outline (`variant="outline"`):** transparent fill, `cloud-600` border, inverts to a solid Midnight-800 fill with Cloud text on hover.
- **Hover/Focus:** `hover:scale-[1.03]` / `active:scale-[0.97]` micro-motion on all CTA buttons; `focus-visible:ring-2 ring-lime-500 ring-offset-2` is the universal focus treatment across buttons, links, chips, and form fields.

### Chips / Badges
- **Filter chip (`Chip`):** pill, `cloud-600` border by default; active state fills solid Midnight-500 with Cloud text.
- **Topic pill:** pill, `bg-lime-100` fill, `text-midnight-900`, semibold, used on cards to tag topic/category.
- **View switcher:** a two-item pill-segmented control (`bg-cloud-100` track, `bg-midnight-500` active segment) for Card/Table toggling.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (1.8rem).
- **Background:** `bg-card` → `var(--color-white)` (`#ffffff`), distinct from the page's `--color-cloud-500` (`#fffdf8`) canvas.
- **Shadow Strategy:** none — see Elevation & Depth; hierarchy comes from the `cloud-600` border, which darkens to `midnight-800` on hover.
- **Border:** 1px `border-cloud-600`.
- **Internal Padding:** `p-6` (24px) standard; `p-5` for tighter founder cards; `p-8`–`p-10` for large callout/success panels.

### Inputs / Fields
- **Style:** literal white background, `rounded-xl`, 1px `cloud-600` border, `px-4 py-3`.
- **Focus:** border shifts to `midnight-800` plus a `ring-2 ring-lime-500` — the same lime focus ring used everywhere else in the system.
- **Error:** `aria-invalid` swaps the border to `destructive`; error copy renders below the field in `text-body-sm text-destructive`.
- **Checkbox/Radio:** custom pill/square controls built from `sr-only` native inputs plus a styled `peer` sibling; checked state fills Lime-500 (checkbox) or Midnight-500 (radio pill).

### Tables
- **Style:** white row background, `cloud-100` header band with uppercase tracked-label column headers, `cloud-600` row/border hairlines, row hover state (`hover:bg-cloud-50` pattern in bank tables).
- **Responsive:** columns progressively hide (`hidden sm:table-cell`, `hidden md:table-cell`) before the table itself is swapped for the card view below `sm`.

### Navigation
- Header nav links are plain-weight body text with a 4px underline decoration that is transparent at rest and turns Lime on hover/active — the same underline-reveal treatment reused for in-body links (e.g. Privacy Policy link in the form footer). Mobile nav opens a full-height `Sheet` drawer on the Cloud background with the same link treatment at a larger (`heading-xs`) size.

### Section Eyebrow (signature component, used pervasively)
`SectionEyebrow` is a small-caps, tracked label with a leading lime or midnight dot, rendered above nearly every section headline (hero, page-hero, feature sections) in one of three tone variants (`dark`, `light`, `lime`). It is a foundational, reused building block of this system, not an isolated instance — every dark hero/page-hero and every light content section currently opens with one. It is documented here as shipped fact; see Do's and Don'ts for a caution on further multiplying it.

## Do's and Don'ts

### Do:
- **Do** keep lime to a single accent role per view — hover fills, focus rings, small tint blocks (`lime-100`) — never a primary background for text-heavy content.
- **Do** use `rounded-full` for every interactive pill/button/chip and `rounded-2xl`/`rounded-xl` for cards/inputs; don't mix in a smaller or sharper radius for the same component class.
- **Do** pair uppercase extra-bold sans headings with sentence-case serif for card/content titles — the two-voice contrast is a deliberate, reused pattern, not an inconsistency.
- **Do** treat `--color-white` (`#ffffff`) as the deliberate card/table/input surface token, distinct from `--color-cloud-500` (`#fffdf8`), the page background token. Both are now token-backed, not hardcoded overrides.

### Don't:
- **Don't** introduce `box-shadow` elevation; this system conveys hierarchy through flat color blocking and borders only.
- **Don't** treat `SectionEyebrow` as license to add more kicker/eyebrow labels to net-new surfaces by default — it is already load-bearing across nearly every section on this site, and its further spread should be a deliberate call per new surface, not an inherited reflex.
- **Don't** merge `--card` (`--color-white`) into the Cloud ramp — the visual separation from `cloud-50` is deliberate (see Split Surface Rule). The prior hardcoded-hex defect (body background and `--card` bypassing tokens) has been resolved: both now reference real tokens.
- **Don't** use the destructive red for anything other than form validation states.
