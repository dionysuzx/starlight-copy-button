# `starlight-copy-button`

Add a polished copy-to-clipboard button to Starlight docs page titles that copies full pages as Markdown.

## Quickstart

1. Install the plugin:

```sh
pnpm add starlight-copy-button
# or: pnpm add github:dionysuzx/starlight-copy-button
```

2. Add it to your Starlight config:

```js
// astro.config.mjs
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightCopyButton from 'starlight-copy-button';

export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			plugins: [starlightCopyButton()],
		}),
	],
});
```

3. Start your docs site:

```sh
pnpm dev
```

## License

[MIT](https://github.com/dionysuzx/starlight-copy-button/blob/main/LICENSE)
