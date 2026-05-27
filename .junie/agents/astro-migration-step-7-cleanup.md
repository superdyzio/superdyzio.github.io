---
name: "astro-migration-step-7-cleanup"
description: "Final cleanup of the Astro migration: updates .github/workflows/deploy.yml to build Astro and upload ./dist; removes Next.js, React, lucide-react, gray-matter, remark, remark-html, clsx, tailwind-merge dependencies from package.json; deletes src/app/, src/lib/auth.ts, next.config.mjs, next-env.d.ts, legacy out/; renames Astro scripts to plain dev/build/preview; updates README.md (Tech Stack, How to add a new post). Use this when the migration plan's Step 7 (Update CI, finalize cleanup, update docs) needs to be executed."
model: "sonnet"
tools: ["Read", "Grep", "Glob", "Edit", "Write", "Bash"]
---

You are executing **Step 7 (final) of the Astro migration plan** described in `.junie/plans/migrate-to-astro.md`.

Prerequisites: Steps 1–6 done and the Astro site is functionally identical to the Next.js site at preview.

Read the plan first, especially "Step 7: Update CI workflow, finalize cleanup, and update documentation".

Your job:

1. Update `.github/workflows/deploy.yml`:
   - Replace the `next build` step with `npx astro build`.
   - Change the upload artifact `path` from `./out` to `./dist`.
   - Keep `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages` and the rest of the pipeline intact.
   - Ensure Node version installed matches Astro 5 requirements (Node 18.17+ or 20+).
2. Remove from `package.json` dependencies and devDependencies:
   - `next`, `react`, `react-dom`, `eslint-config-next`, `@types/react`, `@types/react-dom`, `gray-matter`, `remark`, `remark-html`, `clsx`, `tailwind-merge`, `lucide-react`.
   - Keep: `tailwindcss`, `@tailwindcss/typography`, `autoprefixer`, `postcss`, `typescript`, `astro`, `@astrojs/tailwind`, `@astrojs/sitemap`.
3. Rename scripts in `package.json` so `dev`, `build`, `preview` are the Astro ones (was `astro:dev`, `astro:build`, `astro:preview` from Step 1). Remove any `next dev`/`next build` script entries.
4. Delete:
   - `src/app/` (entire tree, including `api/`, `login/`, every `page.tsx`, `layout.tsx`).
   - `src/lib/auth.ts`.
   - `src/lib/i18n.server.ts` (if still present).
   - `next.config.mjs`.
   - `next-env.d.ts`.
   - The legacy `out/` directory.
   - Any `src/components/*.tsx` files now superseded by `.astro` equivalents (MainNavigationLinks.tsx, LanguageSwitcher.tsx, ThemeToggle.tsx, PostList.tsx, AuthStatus.tsx if not already gone).
   - The placeholder `src/pages/__bootstrap.astro` (if not already gone).
5. Update `tsconfig.json`: remove any Next-specific paths/includes; keep `astro/tsconfigs/strict` extension and `@/*` alias.
6. Update `README.md`:
   - Rewrite the "How to add a new post" section: drop two Markdown files into `src/content/blog/en/<slug>.md` and `src/content/blog/pl/<slug>.md` with the required frontmatter (give an example). Set `draft: true` to hide a post.
   - Update Tech Stack to: "Astro 5 (Static), Content Collections, Tailwind CSS, GitHub Actions".
   - Remove any mention of `src/content/posts.json`, the admin login, or the cookie-based locale.
7. Run a final `npm install` (to refresh lockfile after removals) followed by `npm run build` and `npm run preview`. Both must succeed.
8. Confirm `dist/` has the expected route inventory and that no `/login` or `/api/*` routes exist.

Constraints:
- Do not commit. Main agent will commit after verifying.
- Do not push.

Return: files deleted (list), final `package.json` dependency block, final scripts block, `npm run build` output (last 25 lines), confirmation that `/login` and `/api/*` are absent from `dist/`.
