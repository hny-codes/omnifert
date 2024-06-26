// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const articleCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      date: z.string(),
      image: image(),
      imageAlt: z.string(),
      popular: z.boolean(),
    }),
});

const latestCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

const itemsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      date: z.string(),
      image: image(),
      imageAlt: z.string(),
      imagePreviews: z.string().optional(),
      price: z.number(),
      oldPrice: z.string().optional(),
      desc: z.string().optional(),
      specification: z.array(z.string()),
      sale: z.boolean(),
      slug: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  articles: articleCollection,
  latest: latestCollection,
  items: itemsCollection,
};
