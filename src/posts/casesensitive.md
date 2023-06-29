---
title: Module Not Found and you wouldn't believe why!!!!
description: Solving File Name Case Sensitivity Issues in Git
date: '2023-06-20'
categories:
    - Git
    - Github
published: true
---

## Table Of Contents
# Solving File Name Case Sensitivity Issues in Git

When working with a codebase, it's not uncommon to encounter issues with case sensitivity. This is especially true when using Git across different operating systems such as Windows, macOS, and Linux. Today, I'll discuss a problem I recently encountered, the solution, and how to handle file renaming in Git in a case-sensitive manner.



## Problem
In this scenario, the problem emerged when building a Next.js application. The application was failing to compile with the following error:

```shell
Failed to compile.
./src/components/Footer.js
Module not found: Can't resolve './Layout'
https://nextjs.org/docs/messages/module-not-found
Import trace for requested module:
./src/pages/_app.js
./src/pages/index.js
Module not found: Can't resolve '@/components/Layout'
https://nextjs.org/docs/messages/module-not-found
> Build failed because of webpack errors
Error: Command "npm run build" exited with 1
BUILD_UTILS_SPAWN_1: Command "npm run build" exited with 1
```
This error typically means that the files or directories referenced in the import statements don't exist or aren't correctly located.

## Investigation
A number of steps were taken to troubleshoot the issue:

1. Checked if the `Layout` file and directory existed in the `src/components/` directory.
2. Ensured the correct file extension was used in the import statement.
3. Verified the file path in the import statements.
4. Checked the webpack and TypeScript configuration.
5. Reinstalled node modules.

## Solution
After an in-depth investigation, the problem turned out to be a file name case sensitivity issue. Specifically, the file `layout.js` had been renamed to `Layout.js` on the local development environment. When the changes were pushed to GitHub, it didn't recognize the file name change. Thus, when Vercel tried to deploy, it erred out because the file on GitHub was not named correctly.

## Fixing Case Sensitivity in Git
For future reference, if you are using Git, you can make it recognize case changes by using the `git mv` command with the `-f` option. Here's how to do it:

1. First, rename the file using the `git mv` command:

```shell
git mv -f OldFileName.js newfilename.js
```

2. Then, commit the change:

```shell
git commit -m "Renamed file"
```

3. Finally, push the change to the repository:

```shell
git push origin main
```

Replace "OldFileName.js" with the old filename, "newfilename.js" with the new filename, and "main" with the name of your branch if it's different.

## Note on OS Case Sensitivity
Keep in mind that Git is case-insensitive by default on some systems like Windows and MacOS, while it is case-sensitive on others like Linux. This can cause issues when renaming files by only changing the case, as it may not be recognized as a change in some environments.

In conclusion, always be aware of the operating system's file naming conventions you are working on, especially when pushing to a shared repository. Case sensitivity might not seem like a big deal, but as we've seen, it can cause unexpected problems in your build process.