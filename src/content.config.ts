import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(220),
    date: z.coerce.date(),
    tech: z.array(z.string()).min(1),
    role: z.string().optional(),
    repo: z.url().optional(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(220),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
