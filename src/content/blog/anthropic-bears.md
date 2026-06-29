---
title: "A potential Anthropic bear case?"
description: "Some musings on what the future of the AI industry may look like"
pubDate: 2026-05-15
tags: ["meta", "ai"]
draft: false
---

# Full disclosure

It is well documented why Anthropic is on track to be one of the most valuable companies in human history. I've been thinking there may be an interesting bear argument for Anthropic (and other frontier model providers). Before I go further, it's worth saying that I'm well-aware there are people who are much smarter and have access to much more information who consider Anthropic a full bull case, so I certainly must have blind spots.

> **Draft placeholder post.** It exists so prose styles can be checked in dev; it is excluded from production builds until `draft: false`.


## What got me thinking

As models continue to advance, I've started to wonder if there's a point in which models become "good enough". In other words, the price to utilize the next tier of model isn't worth the improvement in intelligence it's yielding - the previous generation is fine. For the frontier model providers, their costs continue to grow as they push the limits of training - it doesn't seem obvious in the short term that there is scaling opportunities on that side - we've see the battle for compute explode, even to the point where Anthropic currently is borrowing compute from a competitor for now. One huge exception is of course the security models that have been released carefully (Mythos, Fable kind of, etc.). As a company, you have to use these models to resolve your security issues so you're not exposed in the cat and mouse game. This is real, but doesn't feel durable. It seems to me that this is short term spend, and the cost of pushing these models further won't justify the expense here. 

So now there's two forces operating in the same direction. As a frontier model company, can you justify the cost of training the next gen model if the returns start to diminish AND fewer of your customers are less willing to pay for that next gen? And as the market incentivizes that investment less, do models become something of a commodity? Already it feels like we can cluster models from various companies into generation groups. (Opus 4.8 vs GPT 5.5, etc.).

## Open Source Models
Now open source models have entered the market place. Today, open weight models primarily are emerging from firms based in China. And at this time, when inference is heavily subsidized, many organizations are hesitant to utilize these models. I believe as inference costs start to sore and AI use continues to balloon, there will be a huge shift for a large portion of the AI users to start using these open weight models... the cost benefit / risk tradeoff will force their hand. And if this trend towards model commoditization continues, perhaps there will be more open weight models emerging, only accelerating the adoption and putting further pressure on the Anthropic bear case I've laid out. 

## Anthropic fights back
So what do I think Anthropic is doing about this? I believe they're leveraging their tooling layer to build a moat. They've been on an absolute heater releasing Claude CoWork, Claude Design, and improving further upon Claude Code. It makes sense - if they can get their customers hooked on their tools, they control the accesspoints and their tools will work best for their models. And I do believe a large percent of customers may get into the ecosystem, it strikes me that a potential majority of their biggest enterprise spenders may find themselves building their own harness and tooling layer. [I'm obviously biased](/projects/ai-orchestration-platform) but the value in controlling your own harness is tremendous and well-documented, so I think more and more enterprises will find themselves doing this and potentially (unintentionally) freeing themselves from Anthropic's moat.

## Who wins
So where does that leave Anthropic? They're fighting for compute to train the next model that most of their customers may not pay for? Their customers are breaking out of owned harnesses and jumping from model to model to identify the right cost intelligence for the right job. And Anthropic is facing downward price pressure and upward cost pressure. It strikes me that perhaps hyperscalers who can serve inference on frontier models or open source models are poised to profit in this scenario. Perhaps specifically a company like Google or xAI who are training models but don't particularly care if their models win or if they simply use someone else's model to achieve their business objective. Their whole model is USING AI, not necessarily winning the generalized intelligence model war.

## In closing
There's a real world where models continue to get more and more impressive and the value grows accordingly. To emphasize again, there are capital allocators and strategists who believe in Anthropic's upward scale, but I thought this conviction was worth documenting to see how things play out and compare my guess to the final scoreboard. 

