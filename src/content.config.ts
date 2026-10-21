import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('Prompt Lúcido'),
		tags: z.array(z.string()).default([]),
		category: z.string().optional(),
		draft: z.boolean().default(false),
		lang: z.string().default('es'),
		image: z.object({
			src: z.string(),
			mobileSrc: z.string().optional(),
			alt: z.string(),
		}).optional(),
		readingTime: z.number().optional(),
		translationId: z.string().optional(),
		series: z.string().optional(),
		seriesOrder: z.number().optional(),
		audio: z.boolean().default(false),
	}),
});

export const collections = { blog };
