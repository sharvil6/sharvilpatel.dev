---
title: "Why I rebuilt my site with no JavaScript"
description: "Notes on building this site: static Astro, a visible grid, system fonts, and not a single script tag."
pubDate: 2026-06-10
tags: ["meta", "web"]
draft: true
---

> **Draft placeholder post.** It exists so prose styles can be checked in dev; it is excluded from production builds until `draft: false`.

This site ships zero bytes of JavaScript. Not "almost none", not "only analytics": the build fails a check if a `.js` file appears in the output.

## What that buys

A page that is just HTML and CSS has a short list of failure modes. There is no hydration to mismatch, no bundle to bloat, no framework migration looming in year three. The whole site is an artifact you can read with `view-source`.

Some things people assume need JavaScript, but don't:

- Dark mode (`prefers-color-scheme`)
- Hover and focus states, including full inversion effects
- Responsive navigation, with a little layout discipline
- Syntax-highlighted code blocks, rendered at build time

```css
/* the entire dark mode implementation */
@media (prefers-color-scheme: dark) {
  :root {
    --ink: oklch(95% 0.005 90);
    --paper: oklch(17% 0.005 80);
  }
}
```

## What it costs

Honestly: a theme toggle, client-side search, and view transitions. I decided I didn't want the first two, and the third can wait for a CSS-only future that is [closer than you'd think](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API).

The constraint turned out to be the design. Every effect on this site is structural: rules, grids, type, and one loud color.
