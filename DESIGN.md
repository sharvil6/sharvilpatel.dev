---
name: sharvilpatel.dev
description: Editorial-calm minimalism for a personal portfolio; warm paper, dark ink, one quiet blue.
colors:
  warm-ink: "oklch(23% 0.012 70)"
  warm-paper: "oklch(98% 0.008 85)"
  muted-ink: "oklch(52% 0.01 70)"
  faint-ink: "oklch(55% 0.008 75)"
  hairline: "oklch(89% 0.008 80)"
  ink-wash-blue: "oklch(52% 0.1 250)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "2.0625rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, 'Segoe UI Mono', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  code-chip: "3px"
  code-block: "4px"
spacing:
  s1: "0.5rem"
  s2: "1rem"
  s3: "1.5rem"
  s4: "2rem"
  s6: "3rem"
  s8: "4rem"
  s12: "6rem"
  s16: "8rem"
components:
  content-link:
    textColor: "{colors.ink-wash-blue}"
  nav-link:
    typography: "{typography.label}"
    textColor: "{colors.muted-ink}"
  nav-link-active:
    typography: "{typography.label}"
    textColor: "{colors.warm-ink}"
  mono-label:
    typography: "{typography.label}"
    textColor: "{colors.muted-ink}"
  tag:
    typography: "{typography.label}"
    textColor: "{colors.faint-ink}"
---

# Design System: sharvilpatel.dev

## 1. Overview

**Creative North Star: "The Quiet Page"**

This site reads like a well-set page of print: warm paper, dark ink, generous margins, and marginalia that never interrupts the text. Whitespace carries the page. Hierarchy is built from type scale and air, not from boxes, rules, or color blocks. There is one reading column, one quiet accent, and nothing on screen that is not content or the quiet structure serving it. The restraint is the statement.

The system explicitly rejects its own history and its category's defaults. It is not the Swiss/brutalist treatment it replaced (no boxed frames, no 2px rules, no numbered ruled sections, no invert-on-hover), and it is not a developer-portfolio template (no gradient hero, no emoji wave, no identical project cards with GitHub stars). It is light by default with a warm-tinted dark scheme; it is never the dark-mode-by-default hacker aesthetic. Interactions are calm and confident: small, exact state changes that assert themselves without ever performing.

**Key Characteristics:**

- Warm-tinted neutrals everywhere; pure black and pure white are forbidden.
- One accent (Ink-Wash Blue) on well under 10% of any screen: links and small marks only.
- Monospace is reserved for true metadata; the reading voice is a refined system sans.
- Depth comes from whitespace and 1px hairlines, never shadows.
- Static HTML with near-zero JavaScript; speed and accessibility are brand attributes.

## 2. Colors

A page of warm paper and warm ink, with a single wash of blue where the reader can act.

### Primary

- **Ink-Wash Blue** (oklch(52% 0.1 250)): the only chromatic voice. Content links, the identity mark's dot, the active nav underline, focus rings, selection tint, and the current item in the contents nav. In the dark scheme it lightens to oklch(72% 0.11 245). It never fills a surface, never colors a heading, never exceeds a small mark.

### Neutral

- **Warm Ink** (oklch(23% 0.012 70)): all body text and headings. A near-black tinted toward the paper's warmth, never #000.
- **Warm Paper** (oklch(98% 0.008 85)): the page itself. A warm off-white, never #fff. Dark scheme: oklch(18% 0.008 80).
- **Muted Ink** (oklch(52% 0.01 70)): secondary text, metadata values, idle navigation, footer copy.
- **Faint Ink** (oklch(55% 0.008 75)): tertiary labels (meta keys, tags). Stays AA on Warm Paper.
- **Hairline** (oklch(89% 0.008 80)): 1px rules only. Structural, never decorative, never an accent.

### Named Rules

**The One Voice Rule.** Ink-Wash Blue appears on less than 10% of any screen, and only on links and small marks. Its rarity is the point. If a second accent seems necessary, the layout is wrong.

**The Tinted Neutral Rule.** Every neutral carries a whisper of warmth (chroma 0.005 to 0.012, hue 70 to 85). Pure #000 and #fff are prohibited everywhere except print styles.

## 3. Typography

**Display Font:** native system sans (San Francisco / Segoe UI Variable / Roboto, with Arial as true last fallback)
**Body Font:** the same system sans
**Label/Mono Font:** native monospace (ui-monospace / Cascadia Code / SF Mono / Consolas)

**Character:** One refined sans doing all the reading work, with monospace as quiet technical texture for metadata. No web fonts ship; each OS renders its best native face, and the zero-request type stack is part of the speed brand.

### Hierarchy

A committed 1.25 modular scale from a 17px body. Hierarchy leans on size and spacing; no weight exceeds semibold (600), because non-variable fallbacks snap heavier weights to bold.

- **Display** (600, clamp(2.75rem, 7vw, 5rem), line-height 1, tracking -0.03em): the name on the home page as an oversize word. Nowhere else.
- **Headline** (600, 2.0625rem / 33px, line-height 1.15, tracking -0.015em): page h1, one per page.
- **Title** (600, 1.625rem / 26px, line-height 1.15): h2, project and post titles in lists.
- **Body** (400, 1.0625rem / 17px, line-height 1.6): all reading text, capped at a 68ch measure.
- **Label** (mono, 400, 0.875rem / 14px, tabular numerals): dates, stack lists, nav links, section headings, meta keys. Tags drop to 0.75rem / 12px.

### Named Rules

**The Mono-Means-Metadata Rule.** Monospace marks true metadata only: dates, stacks, labels, navigation, counts. It never sets a heading's voice (section headings are metadata, so they are mono) and never touches body prose. If text is meant to be read rather than referenced, it is sans.

**The Measure Rule.** Reading text never exceeds 68ch. The page column caps at 60rem. Space left over is margin, and margins stay mostly empty; the contents nav is the only thing allowed to live there.

## 4. Elevation

The system is entirely flat. There are no box shadows anywhere, in either scheme. Depth is conveyed by whitespace rhythm (the 8px spacing scale, varied deliberately between sections) and by 1px hairlines that separate zones of the page: header from content, meta rows, list rows, the footer. Layering never happens because nothing overlaps; the page is a single sheet.

### Named Rules

**The Hairline Rule.** Rules are 1px, colored Hairline, and horizontal (border-block). Never thicker, never colored with the accent, and never vertical stripes on the edge of a block. A `border-left` accent stripe is the fastest way to fail this system.

**The Single Sheet Rule.** No cards, no boxed containers, no elevated surfaces. Content sits directly on Warm Paper. Grouping is done with space and hairlines, not enclosure.

## 5. Components

The component vocabulary is deliberately small: links, labels, rows, and one ghost button. There are no cards, no inputs, and no primary buttons; if a new feature seems to need one, question the feature before adding the component.

### Links

- **Content links** (in prose, contact blocks): Ink-Wash Blue with a quiet underline (1px, the accent at 35% opacity, 3px offset). On hover the underline firms to full accent. Calm and confident: the color never changes, only the underline commits.
- **Quiet links** (crumbs, footer, pagination): Muted Ink, no underline, transitioning to Warm Ink or accent on hover in 0.2s.

### Buttons

- **Theme toggle** (the only button): a ghost icon button. No background, no border, Muted Ink stroke icon at 1.1rem, hover to Warm Ink. Hidden entirely until JavaScript confirms it works.

### Navigation

- **Header**: identity mark ("SP" plus an accent dot that hops on hover) at left; mono nav links at right in Muted Ink. The active page gets Warm Ink text and a 1px accent underline. Baseline-aligned, wraps gracefully.
- **Contents nav** (signature): on blog and project pages, a sticky "Contents" list in the right margin at viewports 64rem and up, built from h2/h3 headings. Entries are Muted Ink; the section being read is Warm Ink (via a tiny inline scroll spy) and carries the mark's closing-period dot: a 0.28em Ink-Wash Blue dot trailing the entry like a period, fading and settling in with the standard ease. Hovering any entry turns it accent and echoes the mark exactly: the dot appears and hops up 0.28em, including on the current entry, whose resting dot lifts the same way. h3s indent one step. It renders only when a page has two or more headings, and disappears below 64rem rather than cramming in.

### Section Heading

Mono label in Muted Ink, a 1px hairline stretching to fill, and an optional mono count at the far end. This is how list sections open ("Projects", "Writing").

### Project Row

The centerpiece list item. Semibold title (1.625rem) with a hidden accent arrow that slides in on hover, mono year at the far right, muted one-line summary capped at measure, then a faint tag list. Rows separate with hairlines, never boxes.

### Meta Row

A definition-list grid (min 11rem columns) bounded by hairlines above and below. Keys are faint mono at 12px; values are mono at 14px in Warm Ink; external links get an outward arrow at 60% opacity.

### Tag List

Faint mono at 12px, separated by hairline-colored middle dots. Tags are not chips: no backgrounds, no borders, no pills.

## 6. Do's and Don'ts

### Do:

- **Do** keep every color inside the token set; new styles reference tokens, never raw values.
- **Do** keep Ink-Wash Blue under 10% of any screen, on links and small marks only (The One Voice Rule).
- **Do** tint every neutral toward warmth (hue 70 to 85); print styles are the only place #000/#fff may appear.
- **Do** cap reading text at 68ch and the page column at 60rem.
- **Do** use 1px hairlines and whitespace for all separation; vary section padding (s6 to s16) for rhythm.
- **Do** ease with `cubic-bezier(0.22, 1, 0.36, 1)` at 0.2 to 0.25s for state changes; guard every scroll-driven or view-transition effect behind `prefers-reduced-motion: no-preference`.
- **Do** keep JavaScript minimal: only small `is:inline` enhancement scripts that pages work without; `dist/` ships zero `.js` files (verify after builds).
- **Do** keep content in markdown; adding a post or project must never require touching layout code.

### Don't:

- **Don't** build "default developer-portfolio templates": gradient hero, emoji wave, three identical project cards with GitHub stars.
- **Don't** reintroduce the heavy Swiss/brutalist treatment this site deliberately left: visible boxed frames, 2px rules, numbered ruled sections, uppercase tight-set poster display, invert-on-hover blocks.
- **Don't** use glassmorphism, drop shadows, gradient text, or colored side-stripe borders (`border-left` thicker than 1px as an accent is prohibited outright).
- **Don't** default to dark mode; the "hacker aesthetic" is an anti-reference. Light is the default, dark is a warm-tinted scheme the visitor or OS chooses.
- **Don't** produce anything that looks like a Notion page or a resume-builder export.
- **Don't** add cards, chips with backgrounds, modals, or web fonts. The audit test: if an element casts a shadow, sits in a box, or shows a second accent color, it does not belong on this site.
