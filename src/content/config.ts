import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const galleries = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['kids-parties', 'corporate-events', 'festivals', 'weddings', 'other']),
    coverImage: z.string(),
    images: z.array(z.object({
      url: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, galleries };
