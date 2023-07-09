---
title: Sveltkit DEPLOY!!!!!
description: A detailed walkthrough for deploying a SvelteKit site using Vercel and Netlify
date: '2023-06-04'
categories:
    - sveltekit
    - vercel
    - Netlify
published: true
---

# Streamlining SvelteKit Site Deployment 

SvelteKit is a potent framework that enables developers to build efficient web applications effortlessly. It comes packed with features like server-side rendering, routing, and a component-based architecture. In this guide, we will primarily focus on deploying a SvelteKit application, navigating from the initial setup to the final deployment stage.

## Table of Contents

## Preparatory Stage

Before embarking on this journey, ensure that your system has the following installed:

- Node.js (version 16 or later)
- npm (Node Package Manager) or pnpm (Package Manager for JavaScript)
- Git (version control system)

## Launching a SvelteKit Project

Our first step involves setting up a new SvelteKit project. Open your terminal or command prompt and execute the following steps:

1. Create a new project directory:

```bash
mkdir my-sveltekit-app
```

2. Access the project directory:

```bash
cd my-sveltekit-app
```

3. Generate a new SvelteKit project using the `degit` tool:

```bash
npx degit sveltejs/kit#next
```

4. Install the project dependencies:

```bash
npm install
```
or
```bash
pnpm install
```

## Local Development

With the project up and running, you can now develop your SvelteKit app locally. Use the following command to run the development server:

```bash
npm run dev
```
or
```bash
pnpm run dev
```

## Incorporating Features and Functionality

Now, it's time to enhance your SvelteKit app by adding features and functionalities. Make use of the component-based architecture of SvelteKit to create reusable UI pieces.

## Production-Ready Build

Once you're satisfied with your SvelteKit app, you need to prepare it for deployment. This step optimizes the app for best performance:

```bash
npm run build
```
or
```bash
pnpm run build
```

## Deploying on Vercel

Vercel, a popular platform for deploying web applications, offers seamless deployment experience and supports SvelteKit. Here's how to get your SvelteKit app live on Vercel:

1. Install the Vercel CLI globally:

```bash
npm install -g vercel
```
or
```bash
pnpm install -g vercel
```

2. Build your SvelteKit app for production:

```bash
npm run build
```
or
```bash
pnpm run build
```

3. Use the Vercel CLI to deploy your app:

```bash
vercel
```

Your SvelteKit application is now live on Vercel!

## Deploying on Netlify

Sometimes, you may face issues while deploying your SvelteKit app on Vercel. In such cases, Netlify serves as a reliable alternative. Here's how to deploy your SvelteKit app on Netlify:

1. Prepare your SvelteKit app for production:

```bash
npm run build
```
or
```bash
pnpm run build
```

2. Stage and commit your changes:

```bash
git add .
git commit -m "Prepare for deployment"
```

3. Connect your local project to a remote repository on GitHub:

```bash
git remote add origin [repository-url]
git push -u origin main
```

4. Sign up or log in to Netlify and create a new site from Git.

5. Choose your Git provider and select your repository.

6. Configure the build settings and click on "Deploy site".

Your SvelteKit application is now live on Netlify!

## Wrap Up

In this guide, we focused on deploying a SvelteKit application, covering both Vercel and Netlify. Remember, your choice of hosting platform depends on your project requirements and personal preferences. 

With these insights, confidently deploy your SvelteKit application and share your creative work with the world. Enjoy coding and deploying!