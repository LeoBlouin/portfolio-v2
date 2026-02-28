import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    stack: z.array(z.string()),
    image: z.string().optional(),
    icon: z.string().optional(),
    github: z.string().url().optional(),
    link: z.string().url().optional(),
  }),
});

export const collections = { projects };
