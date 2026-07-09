import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog / "Journal" content collection (Astro 5 content layer + glob loader).
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Virtuous Africa Safaris"),
    category: z.string().default("Field notes"),
    heroImage: z.string(),
    heroAlt: z.string().default(""),
    readMinutes: z.number().default(5),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
