---
title: "Personal Website (this site)"
summary: "Basic website with minimal Javascript that allows me to document my projects and resume"
date: 2026-06-15
tech: ["Astro"]
role: "Solo project"
repo: "https://github.com/sharvil6/sharvilpatel.dev"
featured: true
order: 4
---


## Problem

My personal website needed a refresh, I hadn't touched it in a while and I wanted to try and use some of the frontier model capabilities that advertised long chain of thought problem solving.

## Constraints

- Use frontier models (Fable) to one-shot massive refactors and features
- Keep the frontend frameworks simple, as close to vanilla as possible to maximize performance
- Make the simplicity beautiful, don't overdo the slop

## Approach

I used my limited-time access to Fable to try and one-shot the prompt to code. It was interesting to see the model get really stuck on some basic NPM dependency resolutions. It must have been something stale in my environment. This underscored the importance of observability - with model intelligence obviously comes model cost and burning tokens in a longer chain of thought that is completely unsupervised is a risk. I want the autonomy, but I want some degree of oversight so my loops don't get caught on things that easily solvable - that's not where I want the frontier of intelligence applied. At this point I wasn't too caught up in trying to learn a new frontend framework, but was a lot more interested in how to continue chasing autonomy or moments of intrigue when using the fronter coding harnesses / models.

## Outcome

- Website published
- Scalable approach that lets me build in moments of frontend beauty without distracting from the content


## What I'd do differently

Use other frontier model capabilities to see if they perform better in a one-shot moment. Potentially spend one cycle providing the harness with something to check work, then set off a one-shot to see if I can help facilitate the loop.