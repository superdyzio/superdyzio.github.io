---
name: "astro-migration-step-2-content"
description: "Migrates blog content to an Astro Content Collection: creates src/content.config.ts with a Zod schema, moves Markdown files from src/content/posts/*.md (and *.pl.md) into src/content/blog/{en,pl}/, adds YAML frontmatter from src/content/posts.json, rewrites src/lib/posts.ts as a thin wrapper around getCollection('blog'), and deletes src/content/posts.json. Use this when the migration plan's Step 2 (Define blog Content Collection and migrate Markdown) needs to be executed."
model: "sonnet"
tools: ["Read", "Grep", "Glob", "Edit", "Write", "Bash"]
---

You are executing **Step 2 of the Astro migration plan** described in `.junie/plans/migrate-to-astro.md`.

Prerequisite: Step 1 has been completed (Astro is installed, `astro.config.mjs` exists, `npx astro build` works).

Read the plan file first, especially "Step 2: Define the blog Content Collection and migrate Markdown posts" and the Data Models / Contracts section for the exact Zod schema.

Your job in this delegation:

1. Create `src/content.config.ts` exporting a `blog` collection with this Zod schema (copy verbatim from the plan):
   ```ts
   import { defineCollection, z } from 'astro:content';
   const blog = defineCollection({
     type: 'content',
     schema: z.object({
       slug: z.string(),
       lang: z.enum(['en', 'pl']),
       title: z.string(),
       description: z.string(),
       publishedAt: z.coerce.date(),
       draft: z.boolean().default(false),
     }),
   });
   export const collections = { blog };
   ```
2. Read `src/content/posts.json` to enumerate every post entry (`slug`, `fileName`, `fileNamePl`, `title`, `titlePl`, `description`, `descriptionPl`, `publishedAt`, `status`).
3. For each entry:
   - Read the EN Markdown file at `src/content/posts/<fileName>` and the PL one at `src/content/posts/<fileNamePl>`.
   - Create `src/content/blog/en/<slug>.md` with the EN body and frontmatter `{slug, lang: en, title, description, publishedAt, draft: status === 'draft'}`.
   - Create `src/content/blog/pl/<slug>.md` with the PL body and frontmatter `{slug, lang: pl, title: titlePl, description: descriptionPl, publishedAt, draft: status === 'draft'}`.
   - Use `publishedAt` as a plain ISO date (YYYY-MM-DD) so `z.coerce.date()` parses it.
4. Rewrite `src/lib/posts.ts` as a thin wrapper exposing:
   - `getPostsForLocale(locale): Promise<CollectionEntry<'blog'>[]>` — filters by `data.lang === locale`, excludes drafts in production (`import.meta.env.PROD`), sorts by `publishedAt` desc.
   - `getPostBySlug(locale, slug)` — returns the first matching entry or `null`.
   - Use the signatures from the plan's "Data Models / Contracts" verbatim.
   - Remove all references to `gray-matter`, `remark`, `remark-html`, the JSON registry, and `Post` types tied to the JSON shape. If `src/lib/posts.ts` is imported from `src/app/**` (still present at this stage) and would break compilation, leave a small back-compat shim ONLY if necessary. Document any shim in your report.
5. Verify the schema by running `npx astro build` (it will fail if any post has invalid frontmatter — fix until it passes).
6. Delete `src/content/posts.json` AND the now-empty `src/content/posts/` directory (only after build is green).

Constraints:
- Do not touch `src/app/**` page files except for absolute minimum to keep the project compiling (the React app gets deleted in Step 7). If a Next.js page imports symbols that no longer exist, prefer a small shim in `src/lib/posts.ts` over editing `src/app/**`.
- Do not commit. Main agent will verify and commit.

When done, return a short report listing:
- Each post migrated (slug, en/pl files, draft flag).
- Files created/modified/deleted.
- Final `npx astro build` output (last ~20 lines).
- Any compat shim added in `src/lib/posts.ts` and why.
