---
name: "astro-migration-step-6-blog-routes"
description: "Migrates blog index, post detail [slug], and 404 pages to Astro with draft handling: creates src/pages/blog/index.astro and pl/blog/index.astro using PostList.astro; creates src/pages/blog/[slug].astro and pl/blog/[slug].astro with getStaticPaths (drafts in dev only); creates src/layouts/PostLayout.astro for prose-styled article; creates src/pages/404.astro. Removes runtime draft gate and deletes src/app/login/. Use this when the migration plan's Step 6 (Blog index, post detail, 404 with draft handling) needs to be executed."
model: "sonnet"
tools: ["Read", "Grep", "Glob", "Edit", "Write", "Bash"]
---

You are executing **Step 6 of the Astro migration plan** described in `.junie/plans/migrate-to-astro.md`.

Prerequisites: Steps 1–5 done.

Read the plan first, especially "Step 6: Migrate blog index, post detail, and 404 with draft handling".

Your job:

1. Create `src/components/PostList.astro` (port `src/components/PostList.tsx`):
   - Props: `{ posts: CollectionEntry<'blog'>[]; locale: 'en' | 'pl' }`.
   - Renders the same Tailwind markup as `PostList.tsx`, minus the `authenticated` prop and any draft gating.
2. Create `src/layouts/PostLayout.astro`:
   - Imports BaseLayout.
   - Props: `{ entry: CollectionEntry<'blog'>; locale: 'en' | 'pl' }`.
   - Renders the article header (title, formatted publishedAt via `formatDate`, description) and wraps `<slot />` in the same prose container/Tailwind Typography classes used today in `src/app/blog/[slug]/page.tsx`.
3. Create `src/pages/blog/index.astro` and `src/pages/pl/blog/index.astro`:
   - Compute locale, call `getPostsForLocale(locale)`, render via `PostList`.
4. Create `src/pages/blog/[slug].astro` and `src/pages/pl/blog/[slug].astro`:
   - `getStaticPaths` enumerates every `(locale, slug)` pair from `getCollection('blog')`, filtering by `data.lang === <thisLocale>`.
   - Include drafts when `import.meta.env.DEV` is true; exclude when `import.meta.env.PROD` is true.
   - In the page body call `const { Content } = await entry.render()` and render `<Content />` inside `<PostLayout entry={entry} locale={locale}>`.
   - Remove the runtime "Private Draft" gate UI entirely; in production a draft slug 404s naturally.
5. Create `src/pages/404.astro`:
   - Styled bilingual fallback. Derive locale from request URL where possible (best-effort: if `/pl` in referrer or path, render PL; else EN). At minimum render a friendly headline + a link back to `/` and `/pl/`.
6. Delete `src/app/login/page.tsx` and any nav references to `/login`.
7. Run `npx astro build`. Verify `dist/` contains an HTML file for every published post in both locales and contains no draft slugs. Print the list of generated routes.

Constraints:
- Do not delete the rest of `src/app/**` — that's Step 7.
- Do not commit. Main agent will commit after verifying.

Return: list of generated routes (or a count per locale), build output (last 20 lines), confirmation that draft slugs are absent in prod build.
