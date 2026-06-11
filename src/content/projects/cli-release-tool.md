---
title: "shipit: Release Automation CLI"
summary: "One-command changelog, tagging, and artifact publishing for monorepos; adopted by three internal teams."
date: 2024-12-10
tech: ["TypeScript", "Node.js", "GitHub Actions"]
role: "Lead engineer"
repo: "https://github.com/sharvilpatel/shipit"
featured: true
order: 3
---

> **Placeholder writeup.** Replace this with the real project.

## Problem

Releasing any package in our monorepo took a 14-step wiki page: bump versions by hand, write the changelog from memory, tag, build, publish, announce. Releases happened rarely and nervously, and every team had drifted into its own slightly broken variation of the process.

## Constraints

- Must work for every package in the monorepo without per-package config beyond a manifest field.
- No new infrastructure; it had to run locally and in the existing GitHub Actions setup.
- The changelog had to be trustworthy enough to send to customers unedited.

## Approach

`shipit` derives everything from git. Conventional-commit messages between the last tag and `HEAD` determine the semver bump and generate the changelog; the tool then tags, builds, publishes, and opens the release PR in one command.

```typescript
const commits = await commitsSince(lastTag, pkg.path);
const bump = maxBump(commits);            // feat → minor, fix → patch, ! → major
const next = inc(pkg.version, bump);
const changelog = render(groupByType(commits), { version: next });
```

The same code runs in CI for the actual publish, so a release is reproducible from a clean checkout: local runs default to `--dry-run` and print exactly what CI will do.

## Outcome

- Release frequency across the three adopting teams went from roughly monthly to weekly.
- Zero hand-written changelogs since adoption; support stopped asking "what changed?"
- New-package onboarding is one manifest field instead of a wiki page.

## What I'd do differently

Enforcing conventional commits with a server-side check from day one. The first month of fuzzy commit messages still pollutes `git log` based tooling, and we paid for it in changelog cleanup until the history rolled over.
