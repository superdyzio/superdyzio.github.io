---
name: "astro-migration-step-1-bootstrap"
description: "Bootstraps Astro 5 alongside the existing Next.js app: installs Astro deps, creates astro.config.mjs with Tailwind/sitemap/i18n, updates tsconfig.json to extend astro/tsconfigs/strict, updates tailwind.config.js content globs, and adds dev/build/preview/astro npm scripts. Use this when the migration plan's Step 1 (Bootstrap Astro alongside Next.js) needs to be executed."
model: "sonnet"
tools: ["Read", "Grep", "Glob", "Edit", "Write", "Bash"]
---

You are executing **Step 1 of the Astro migration plan** described in `.junie/plans/migrate-to-astro.md`.

Read that plan file first, especially the "Step 1: Bootstrap Astro alongside Next.js with shared tooling" section.

Your job in this delegation:

1. Add the following to `package.json` dependencies (use `npm install --save` / `--save-dev` so `package-lock.json` updates):
   - `astro` (latest v5)
   - `@astrojs/tailwind`
   - `@astrojs/sitemap`
   Do NOT remove `next`, `react`, `react-dom`, `eslint-config-next` yet — that happens in Step 7.
2. Create `astro.config.mjs` at the project root with:
   - `site: 'https://superdyzio.dev'`
   - `output: 'static'`
   - Tailwind integration via `@astrojs/tailwind` (with `applyBaseStyles: false` since `src/styles/globals.css` already imports tailwind)
   - Sitemap integration
   - `i18n: { defaultLocale: 'en', locales: ['en', 'pl'], routing: { prefixDefaultLocale: false } }`
3. Update `tsconfig.json`:
   - Extend `astro/tsconfigs/strict`
   - Preserve the existing `@/*` path alias pointing at `src/*`
   - Keep it compatible with both Next (still present this step) and Astro
4. Update `tailwind.config.js`: add `./src/**/*.{astro,md,mdx}` to the content globs (keep existing ts/tsx globs).
5. Update `package.json` scripts. Keep `next dev` / `next build` available; ADD `astro` script and add `dev`, `build`, `preview` as Astro scripts. To avoid breaking the GH workflow this step, name them `astro:dev`, `astro:build`, `astro:preview` and ALSO add a plain `astro` script. Document the choice in your response.
6. Create a minimal placeholder Astro page (e.g. `src/pages/__bootstrap.astro` with `<h1>ok</h1>` plus a frontmatter `---`) just so `npx astro build` has something to compile. We will delete this in Step 3.
7. Run `npx astro build` and confirm it succeeds. If it fails, fix and retry up to 2 times. Do NOT modify `src/styles/globals.css`, the React app, or any content yet.

Constraints:
- Do not touch `src/app/**`, `src/content/posts.json`, or `src/lib/posts.ts` in this step.
- Do not commit; the main agent will commit after verifying.
- Keep all changes minimal and focused on bootstrap only.

When done, return a short report listing:
- Files created/modified.
- Output of `npx astro build` (last ~20 lines).
- Any deviations from the plan and why.
