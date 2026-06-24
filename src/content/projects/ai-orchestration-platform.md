---
title: "Agent Orchestration Platform - AI Product Factory"
summary: "A custom agent harness built for Dell bringing AI to the entirety of the product lifecycle"
date: 2026-02-01
tech: ["Go", "Kafka", "ClickHouse", "Grafana", "Terraform"]
role: "lead, developer"
repo: ""
featured: true
order: 1
---

> **Placeholder writeup.** Replace this with the real project. The structure below (problem, constraints, approach, outcome) is a good skeleton to keep.

## Problem

I was challenged to rebuild our software business as an AI-native organization. The scope has quickly expanded to include the entirety of Dell's PC product lifecycle. I abstracted and started thinking about my organization as a product factory - with tools and processes that need to be modernized to eliminate friction. By building and controling the entire stack, I wanted to leverage AI as a competitve advantage, not just a tool we buy off the shelf.

## Constraints

- Stay vendor agnostic / model agnostic so we can be resistant to the churn of the AI industry
- Build observability into every layer of the platform 
- Use the frontier models only when needed, leverage on-prem Dell hardware as much as possible

## Approach

A custom agent harness would provide us unique opportunities to tune the agents for Dell specific workflows that go beyond the software lifecycle. Building a platform on top of the agent harness extends the agents to Dell tools and processes, while also providing a UI layer that can be used by team members across functions at Dell. 
Focusing on observability gives me a unique ability to identify platform degradation, remediate accordingly, and keep the business running. This rich data allows us the opportunity to train a routing model to direct inference to the right model for the right job on a per LLM request level, not just a per user input level.
By building around the primitive of fully autonomous background agents, we dramatically accelerated our organization.

## Outcome
- Platform has extended agents to left of code and right of code



## What I'd do differently

Build Dell evals even sooner to kick off hill-climbing and tuning based on data. Add a gated workflow process so that risk-averse organizations can more clearly control the spec / data layer going into the agents.
