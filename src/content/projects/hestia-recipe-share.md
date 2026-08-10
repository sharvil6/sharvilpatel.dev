---
title: "Hestia: Maximizing Autonomy while Building a Product"
summary: "A self-hosted family recipe platform and an experiment in reducing human intervention in end to end deployed software"
date: 2026-1-30
tech: ["Python", "React", "GitHub Actions"]
role: "Solo project"
repo: "https://github.com/sharvil6/hestia"
demo: "https://hestia-demo.sharvilpatel.dev"
featured: true
order: 2
---


## Problem

Growing up in an Indian family that didn't write any recipes down, my family had years of recipes that existed only in memory, handwritten notes, text messages, and scattered printouts. I wanted a simple way to digitize them while my mom cooked, preserve the original recipe, and let family members where their own modifications without overwriting it. 

I also wanted Hestia to be an experiment in autonomous fully deployed software: could I build and operate a real application while progressively removing myself from the development / deployment loop? I was also interested in using the newer AI tools to go end to end, and the different tricks I could use to minimize my input and put the agent in longer running loops.

## Constraints

- Fully self-hosted: run the application and CI/CD infrastructure on hardware I had laying around
- Agent-operable: CI/CD and development environments should allow an AI agent to build, test, deploy, and diagnose the app with minimal human intervention
- Multi-format ingestion: Turn handwritten, typed, printed, and text-message recipes into structured text
- Multi-surface access: Support mobile, desktop, and public sharing without authentication. Make this accessible to all generations of tech users.

## Approach

### Design Principle
Fundamentally, every time I had to manually intervene in the development loop, I treated that intervention as a system failure worth eliminating.

### Validation
The first bottleneck was validation. Agents were making massive changes faster than I would want to manually verify. So I built automated frontend, backend, end-to-end, and health checks so the agents could detect regressions as part of the feature work, before tagging me back in. 

### Designing for agent reliability
I iterated on this script quite a bit actually: the early versions weren't reliable enough to be autonomous. 

The agent would sometimes start duplicate application instances, create unnecessary ports, or get stuck behind arbitrary timeouts. I iterated on the validation scripts until they could recognize an already-running application, work with hot reloads, and recover from common startup conditions.

The lesson was that giving an agent more autonomy doesn't require just more permissions, it requires reliable control surfaces and crucial feedback loops.

### CI/CD
Once these scripts were solid and I had built out a significant scaffolding, they became the foundation of a self-hosted CI/CD I setup.

The goal was more than automated deployment, I wanted some sort of closed feedback loop that allowed an agent to make changes, execute the application, observe failures, and iterate without me having to intervene manually.

I used agents to help with this part as well, providing it information about my Proxmox config and walking me through the steps of provisioning a VM as a GitHub Action runner. I'm curious if I can safely enable agents additional access points into the VM itself, I'm starting to feel like I'm having to run commands on the VM that the agent should be running itself. 
This the next place I'll be experimenting.

## Outcome

### Product
- Family and friends onboarded
- Recipes can be added manually, scraped from existing websites, or digitized from existing material. 
- Sharing link that creates a public recipe page that doesn't require auth
- Passwordless login because I thought it'd be fun and I wish more websites used passkeys
### Engineering
- Fully self-hosted application and CI/CD infrastructure
- Automated frontend, backend, end-to-end, and application health validation
- CI/CD infrastructure designed to support increasingly autonomous dev loops


## What I'd do differently
- Build the feedback loop first: I spent too much time trying to handhold the application functionality before making the environment more observable and testable by the agent
- Give agents better control surfaces: I still manually execute VM config operations. The next iteration would expose those capabilities through some sort of constrained interface.
- Skip the native app: The responsive web application provides enough value. The partially completed iPhone app introduced complexity and is harder to deploy
