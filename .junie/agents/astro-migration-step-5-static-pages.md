---
name: "astro-migration-step-5-static-pages"
description: "Ports all non-blog pages from Next.js (src/app/*/page.tsx) to Astro pages (src/pages/*.astro) for both EN and PL locales: home (with 'Latest from the blog'), experience, offer, contact, playlist, speaker. Replaces lucide-react with Icon.astro. Use this when the migration plan's Step 5 (Migrate static content pages and home page) needs to be executed."
model: "sonnet"
tools: ["Read", "Grep", "Glob", "Edit", "Write", "Bash"]
---

You are executing **Step 5 of the Astro migration plan** described in `.junie/plans/migrate-to-astro.md`.

Prerequisites: Steps 1–4 done (Astro bootstrap, content collection, BaseLayout + i18n, interactive components).

Read the plan first, especially "Step 5: Migrate static content pages and the home page".

Your job — port each Next.js page to Astro under BOTH locales:

| Next.js source                     | Astro EN target              | Astro PL target                 |
|-----------------------------------|------------------------------|---------------------------------|
| `src/app/page.tsx`                | `src/pages/index.astro`      | `src/pages/pl/index.astro`      |
| `src/app/experience/page.tsx`     | `src/pages/experience.astro` | `src/pages/pl/experience.astro` |
| `src/app/offer/page.tsx`          | `src/pages/offer.astro`      | `src/pages/pl/offer.astro`      |
| `src/app/contact/page.tsx`        | `src/pages/contact.astro`    | `src/pages/pl/contact.astro`    |
| `src/app/playlist/page.tsx`       | `src/pages/playlist.astro`   | `src/pages/pl/playlist.astro`   |
| `src/app/speaker/page.tsx`        | `src/pages/speaker.astro`    | `src/pages/pl/speaker.astro`    |

Rules:
- Each Astro page imports `BaseLayout` and passes the correct `locale` (`'en'` or `'pl'`).
- Translation strings come from `getTranslations(locale)` in `src/lib/i18n.ts`.
- The home page (`index.astro`) renders an About section + a "Latest from the blog" section showing the 3 most-recent published posts via `getPostsForLocale(locale).slice(0, 3)`.
- The `playlist` page keeps its hardcoded `playlistTracks` array — move it into the Astro file's frontmatter script.
- The `contact` page keeps its `<form>` as-is (mock, no submit handler).
- `speaker` preserves the talks list + activities timeline verbatim.
- All `lucide-react` icon usages are replaced with `<Icon name="..." />` from `src/components/Icon.astro`.
- All external links keep `target="_blank" rel="noopener noreferrer"`.
- Tailwind classes are copied verbatim — zero visual regression.

After porting:
- Run `npx astro build` and `npx astro preview`.
- Walk each page in both locales, confirm rendering and that LanguageSwitcher links pair EN/PL correctly.

Constraints:
- Do NOT delete `src/app/**` yet — that's Step 7.
- Do NOT touch blog index / blog detail / 404 — that's Step 6.
- Do not commit. Main agent will commit after verifying.

Return: per-page status (en+pl rendered ok / issues), build output (last 20 lines).
