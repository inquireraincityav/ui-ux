import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    role: z.string(),
    year: z.string(),
    summary: z.string(),
    cover: z.string().optional(),          // path to a real screenshot to slot into the frame
    coverScheme: z.enum(['warm', 'cool', 'ink']).default('warm'),
    type: z.enum(['web', 'mobile', 'both']).default('web'),
    canvas: z.enum(['light', 'warm', 'dark']).default('light'),
    accent: z.string().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
    client: z.string().optional(),
    duration: z.string().optional(),
    tools: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
  }),
});

export const collections = { 'case-studies': caseStudies };
