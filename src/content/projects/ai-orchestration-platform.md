---
title: "Agent Orchestration Platform - Building an AI Product Factory"
summary: "A custom agent harness built for Dell bringing AI to the entirety of the product lifecycle"
date: 2026-02-01
tech: [".NET", "React", "Applied AI"]
role: "lead, developer"
featured: true
order: 1
---

## Problem

This platform represents the technical implementation of my [Product Factory](/blog/product-factory). I was challenged to rebuild our software business as an AI-native organization. The scope has quickly expanded to include the entirety of Dell's PC product lifecycle. I abstracted and started thinking about my organization as a product factory - with tools and processes that need to be modernized to eliminate friction. By building and controlling the entire stack, I wanted to leverage AI as a competitive advantage, not just a tool we buy off the shelf.

## Constraints

- Maintain strict vendor and model agnosticism to completely insulate the business from the high-churn AI landscape
- Build observability into every layer of the platform 
- Minimize reliance on expensive commercial models by maximizing local, on-prem hardware utilization for lower-complexity workloads. 

## Approach

A custom agent harness would provide us unique opportunities to tune the agents for Dell specific workflows that go beyond the software lifecycle. Building a platform on top of the agent harness extends the agents to Dell tools and processes, while also providing a UI layer that can be used by team members across functions at Dell. 
Focusing on observability gives me a unique ability to identify platform degradation, remediate accordingly, and keep the business running. This rich data allows us the opportunity to train a routing model to direct inference to the right model for the right job on a per LLM request level, not just a per user input level.
By building around the primitive of fully autonomous background agents, we dramatically accelerated our organization.

The platform quickly began building itself. Once we had an initial harness and system designed, we funneled bugfixes, features, ideas into the platform and watched them become a reality. We added a cron feature so every night the harness reviewed its own codebase for security improvements, reliability improvements, documentation drift, and more - opening PRs over night for our review the next day.

We've started identifying unique opportunities to extend our harness to the org-specific challenges that are slowing the business down. For example, we gave our harness access to cameras to capture the lighting conditions of various peripherals. We can now put our agent into long running loops adding new lighting effects to tons of peripherals while validating its own work.

We quickly found that as we accelerate segments of our organization, new friction points emerge. For example, code generation was moving ridiculously fast and PRs were starting to pile up. We figured we could solve this problem with AI. We brought our agents to the tools where the context lived, deploying PR bots that performed cursory reviews of every PR that was opened and created a new control surface that allowed kicking off background agents from within the PR itself. Now that we're working this way, I can't imagine developing in the old way. It's actually ridiculous that developers have to receive PR feedback, check out the old branch, make the code change, push the branch, and repeat this cycle til the feedback stops. That's a ridiculous amount of context switching. Now, from within the PR itself, all comments(big or small) can be addressed by our background agents. Letting our developers focus on their more innovative work. We also started running into merge conflicts as the velocity of our team increased. These background agents turned out to be extremely adept at resolving merge conflicts for us, again removing a source of friction in our factory. 

We grounded our approach in industry baselines. A few publications that recently have been particularly thought-provoking:
- [Stripe Minions](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)
- [Ramp](https://www.linkedin.com/pulse/we-built-every-employee-ramp-own-ai-coworker-sebastien-goddijn-sfupe/)
- [A frontier without an ecosystem is not stable](https://x.com/i/article/2065582894790365184)

## Outcome
- 10x - 15x developer velocity increase compared to team members using traditional agentic IDEs (Windsurf, Claude Code).
- Deployed background agents across 100% of Dell's product repositories, bringing agents to left-of-code frontend scoping and right-of-code bugfixes, remediation
- Scaling platform to support the entirety of Dell product organizations 

## What I'd do differently
- Implement Dell-specific LLM evals on day one. Establish rigorous, domain-specific evaluations to accelerate hill-climbing and tuning.
- Design configurable workflow gates. Enable risk-averse organizations to more clearly control the spec / data layer going into the agents and regulate autonomy / data boundaries.
