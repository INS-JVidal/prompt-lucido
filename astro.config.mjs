// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeMermaid from './src/plugins/rehype-mermaid.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://prompt-lucido.com',
	integrations: [sitemap()],
	// Astro 7 defaults to 'jsx', which drops spaces between inline elements
	compressHTML: true,
	markdown: {
		syntaxHighlight: {
			type: 'shiki',
			excludeLangs: ['mermaid'],
		},
		// Astro 7 defaults to Sätteri; unified keeps the rehype plugin working
		processor: unified({ rehypePlugins: [rehypeMermaid] }),
	},
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	redirects: {
		'/blog': '/es/blog',
	},
});
