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

This was an old project that I used to try and learn Rust. I was curious about all I'd heard about how much it's conventions improved upon C++ and made it easier to debug and safer. The problem set was simple - I wanted to automate some math I was doing on a monthly basis to update the value of investment accounts within my budgeting app, wit the potential in the future to scrape the data automatically from the financial websites themselves.

## Constraints

- Use Rust to learn Rust
- Pre AI coding assistants
- Leverage the newly released YNAB API

## Approach

My first implementation was a complete wreck. I had bad, spaghetti code that wasn't quite working the way I expected and hadnt actually taught me Rust. I basically scrapped that attempt and started by watching some excellent lecture style YouTube videos by Jon Gs. That got me unblocked and I built a functional CLI that delivered on the MVP I wanted. 

Now I wonder how I would bulid this app today. AI means I probably could one shot the functionality in this app in basically any language. But if I wanted to learn a langauge itself, how would I go about appraoching that? Would I hand-write code and use AI to help me when I get stuck? Intuitively it feels useful to have a depth of knowledge of programming languages to enhance debugging and potentially even system design, but I'm not sure. Maybe simply using AI to guide the delivery of enough projects and asking agents to explain sections of code is good enough? 

## Outcome

- Use the CLI every month still!


## What I'd do differently

Add async account updates. Build a TUI so that the update experience feels beautiful. Scrape the data from a screenshot (since scraping financial institutions directly is a nightmare)
