import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightCopyButton from 'starlight-copy-button';

export default defineConfig({
	site: 'https://dionysuz.github.io',
	base: '/starlight-copy-button',
	integrations: [
		starlight({
			title: 'starlight-copy-button',
			description:
				'Add an accessible, polished copy-to-clipboard button that copies full page Markdown from your Starlight docs.',
			social: [
				{
					icon: 'github',
					label: 'GitHub repository',
					href: 'https://github.com/dionysuzx/starlight-copy-button',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/dionysuzx/starlight-copy-button/edit/main/docs/',
			},
			lastUpdated: true,
			plugins: [
				starlightCopyButton({
					label: 'Copy page',
					successLabel: 'Copied!',
					errorLabel: 'Copy failed',
				}),
			],
			sidebar: ['getting-started', 'configuration'],
			customCss: ['./src/styles.css'],
			logo: {
				src: './public/favicon.svg',
			},
		}),
	],
});
