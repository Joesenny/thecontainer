---
title: My svelte configjs
description: How My Markdown Blog is Set Up
date: '2023-07-1'
categories:
    - SvelteKit
    - Markdown
published: true
---



## Table of Contents

The `svelte.config.js` file you provided is used to configure the Svelte project build process. Let's go through the code and explain what each part does:

```javascript
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { mdsvex, escapeSvelte } from 'mdsvex'
import shiki from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
```

- The `adapter` module is imported from `@sveltejs/adapter-auto`. It is used to configure the deployment adapter for SvelteKit, which determines how the built Svelte application is served and deployed.
- The `vitePreprocess` function is imported from `@sveltejs/kit/vite`. It is a preprocessor function specifically designed for Vite, the build tool used by SvelteKit.
- The `mdsvex` and `escapeSvelte` functions are imported from the `mdsvex` module. `mdsvex` is a preprocessor for SvelteKit that allows you to write Markdown and Svelte components together, while `escapeSvelte` is a helper function for escaping Svelte code inside Markdown.
- The `shiki` module is imported, which provides syntax highlighting for code blocks in Markdown files.
- The `remarkUnwrapImages`, `remarkToc`, and `rehypeSlug` modules are imported. These are plugins used by `mdsvex` to enhance Markdown processing. `remarkUnwrapImages` unwraps images from paragraphs, `remarkToc` generates a table of contents, and `rehypeSlug` adds IDs to headings for anchor links.

```javascript
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'nord' })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\` }`
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
}
```

This defines the options for `mdsvex`, specifying how Markdown files should be processed. Here are the key options:

- `extensions`: Specifies the file extensions that should be treated as Markdown files (in this case, `.md`).
- `layout`: Defines the layout file used for Markdown files. In this case, it's `'./src/mdsvex.svelte'`.
- `highlight`: Configures the syntax highlighting for code blocks. It uses the `shiki` module to obtain a code highlighter with the 'nord' theme. The `highlighter` function takes the code and language, converts it to HTML using the highlighter, and escapes the Svelte code.
- `remarkPlugins` and `rehypePlugins`: These are arrays of plugins used for processing Markdown with `mdsvex`. `remarkPlugins` contains `remarkUnwrapImages` and `remarkToc` with the `tight` option enabled. `rehypePlugins` contains only `rehypeSlug`.

```javascript
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}
```

This is the final configuration object that is exported. It has three main sections:

- `extensions`: Specifies the file extensions to be considered during the build process. In this case, it includes both `.svelte` and `.md` files.
- `preprocess`: Specifies the preprocessors to be used. It includes `vitePreprocess()` for general preprocessing and `mdsvex(mdsvexOptions)` to process Markdown files using `mdsvex` with the defined options.
- `kit`: Contains the configuration for SvelteKit itself. Here, it specifies the deployment adapter as `adapter()`, which will be determined based on the project's build settings.

In summary, this configuration file sets up SvelteKit with the `mdsvex` preprocessor for Markdown support. It also configures syntax highlighting and adds additional plugins for Markdown processing. The final `config` object is used to define the SvelteKit project's build and deployment settings.