---
title: SvelteKit Configuration Breakdown
description: Deep dive into a SvelteKit configuration file.
date: '2023-07-01'
categories:
    - SvelteKit
    - Configuration
published: true
---

In this post, we will decipher the components of a `svelte.config.js` file, which is central to configuring SvelteKit projects' build processes.

## Importing Required Modules

The first section of the code imports all the necessary modules:

```javascript
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex, escapeSvelte } from 'mdsvex'
import shiki from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
```

Here's a quick breakdown of each module:

- `adapter`: This module from `@sveltejs/adapter-auto` configures the SvelteKit deployment adapter that determines the mode of serving and deployment of the built application.
- `vitePreprocess`: Imported from `@sveltejs/kit/vite`, it's a preprocessor designed specifically for Vite, the build tool used by SvelteKit.
- `mdsvex` and `escapeSvelte`: Both functions are from the `mdsvex` module. `mdsvex` is a preprocessor for SvelteKit that allows you to use Markdown and Svelte components together. `escapeSvelte` helps in escaping Svelte code within Markdown.
- `shiki`: This module provides syntax highlighting for code blocks within Markdown files.
- `remarkUnwrapImages`, `remarkToc`, and `rehypeSlug`: These are plugins used by `mdsvex` to enhance the processing of Markdown. `remarkUnwrapImages` unwraps images from paragraphs, `remarkToc` generates a table of contents, and `rehypeSlug` adds IDs to headings for anchor links.

## Defining mdsvexOptions

Next, we define the `mdsvexOptions` object, which outlines how `mdsvex` should process the Markdown files:

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

Here are the key options defined:

- `extensions`: Determines the file extensions to treat as Markdown files (`.md` in this case).
- `layout`: Specifies the layout file used for Markdown files. In this case, it's `'./src/mdsvex.svelte'`.
- `highlight`: Configures the syntax highlighting for code blocks using the `shiki` module to obtain a code highlighter with the 'nord' theme. 
- `remarkPlugins` and `rehypePlugins`: These arrays contain plugins used for processing Markdown with `mdsvex`.

## Exporting the Configuration Object

Lastly, we define and export the final configuration object:

```javascript
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}
```

This object has three main sections:

- `extensions`: Specifies the file extensions to consider during the build process, including `.svelte` and `.md` files.
- `preprocess`: Defines the preprocessors to use, which includes `vitePreprocess()` for general preprocessing and `mdsvex(mdsvexOptions)` to process Markdown files using the `mdsvex` options.
- `kit`: Contains the configuration for SvelteKit itself. Here, the deployment adapter is specified as `adapter()`.

My configuration file sets up SvelteKit to work with the `mdsvex` preprocessor, facilitating Markdown support. It configures syntax highlighting, adds plugins for enhanced Markdown processing, and specifies the SvelteKit project's build and deployment settings.