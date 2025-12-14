import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    cover: z.string(),
  }),
});

export const collections = { blog };
