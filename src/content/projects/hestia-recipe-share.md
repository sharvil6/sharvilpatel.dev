---
title: "hestia: Sharing Family Recipes"
summary: "Digitize family recipes and make sharing food culture collaborative"
date: 2026-1-30
tech: ["Python", "React", "GitHub Actions"]
role: "Solo project"
repo: "https://github.com/sharvil6/hestia"
demo: "https://hestia-demo.sharvilpatel.dev"
featured: true
order: 2
---


## Problem

Growing up in an Indian family that didn't write any recipes down, I had this idea to somehow document recipes while my mom cooked and quickly digitize and share those with my siblings. I wanted there to be an element of commenting on the recipes so we can share the adjustments we all make without disturbing the original recipe. As I grew older and found my own recipes I had adapted, I wanted to be able to scrape these into the shared platform as well.

To be fair, I figured something like this already existed (and it most definitely does), but this was a chance for me to explore some tech I was curious about. As I worked on this project, I was interested in setting up a self-hosted app and self-hosted GitHub Actions on hardware I had laying around. I was also interested in using the newer AI tools to go end to end, and the different tricks I could use to minimize my input and put the agent in longer running loops.

Originally I was also curious about using DevContainers, but this quickly became an annoyance that felt like a distraction for this project.

## Constraints

- Fully self-hosted
- CI/CD that enables autonomous agent loops
- Automate the digitization of recipes in all formats (hand-written, typed and printed, text messages)

## Approach

I defined a serious of requirements I wanted to deliver and used Gemini to work with me on an appropriate tech stack. Things like number of users, self-hosting, and control surfaces (mobile app, mobile friendly web page, desktop) were the key factors that shaped the architecture I went with.

I focused on identifying areas where I as a human was having to step in to provide input to the agent and tried to eliminate those areas. For example, before I setup a CI/CD, as Claude worked on massive feature changes it would frequently break the product and this was only visible when I would go in and launch the entire application.

I had Claude write itself some scripts that would test the frontend, the backend, and then run the entire project and do a quick healthcheck. I iterated on this script quite a bit actually - ensuring that there weren't arbitrary timeouts or that it could identify the application was already running and had hot-reloaded so it wouldn't get stuck opening hundreds of new ports trying to get the app running. 

Once these scripts were solid and I had built out a significant scaffolding, they became the foundation of a self-hosted CI/CD I setup. I used Claude to help with this part as well, providing it information about my Proxmox config and walking me through the steps of provisioning a VM as a GitHub Action runner. 

I'm curious if I can safely enable Claude additional access points into the VM itself, I'm starting to feel like I'm having to run commands on the VM that Claude should be running itself. This the next place I'll be experimenting.

## Outcome

- Mobile friendly website and an iPhone app i've partially abandoned for now
- Family and friends onboarded
- 3 ways to add recipes (manual entry, scraping an existing website, digitization of existing recipe)
- Sharing link that creates a public recipe page that doesn't require auth
- Passwordless login because I thought it'd be fun and I wish more websites used passkeys

## What I'd do differently

Start with the validation scripts earlier. Create hooks into the infrastructure that allow agents to operate and run commands in environments that I'm comfortable with. Probably abandon the mobile app all together and live with mobile native websites