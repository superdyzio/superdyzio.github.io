---
name: "astro-migration-step-3-layout-i18n"
description: "Builds the Astro BaseLayout and path-based i18n shell: creates src/layouts/BaseLayout.astro (with inline theme-init script, header, footer, slot), trims src/lib/i18n.ts to remove cookie code, adds getLocaleFromUrl helper, deletes src/lib/i18n.server.ts, and creates placeholder index.astro for EN and /pl. Use this when the migration plan's Step 3 (BaseLayout, i18n helpers, locale-aware routing shell) needs to be executed."
model: "sonnet"
tools: ["Read", "Grep", "Glob", "Edit", "Write", "Bash"]
---

You are executing **Step 3 of the Astro migration plan** described in `.junie/plans/migrate-to-astro.md`.

Prerequisites: Steps 1–2 are complete (Astro installed, Content Collection in place).

Read the plan first, especially "Step 3: Implement BaseLayout, i18n helpers, and the locale-aware routing shell".

Your job:

1. Create `src/layouts/BaseLayout.astro` that:
   - Accepts props `{ title: string; description: string; locale: 'en' | 'pl' }`.
   - Renders `<html lang={locale}>` with proper `<head>` (charset, viewport, title, description meta, favicon link mirroring current `src/app/layout.tsx`).
   - Includes the inline theme-init `<script is:inline>` copied verbatim from `src/app/layout.tsx`'s pre-hydration script so dark mode applies before first paint.
   - Imports `src/styles/globals.css`.
   - Renders header + `<slot />` + footer with markup copied from `src/app/layout.tsx`. Replace React components with simple inline markup for now (full Astro components arrive in Step 4) but include hreflang `<link rel="alternate">` tags for EN/PL of the current path.
2. Trim `src/lib/i18n.ts`:
   - Keep: `locales`, `Locale`, `defaultLocale`, `isLocale`, `getTranslations` (or `useTranslations`), `formatDate`.
   - Remove: `LOCALE_COOKIE_NAME` and anything cookie-related.
   - Add: `export function getLocaleFromUrl(url: URL): Locale` that returns `'pl'` if pathname starts with `/pl` (and either ends there or has `/`), else `'en'`.
3. Delete `src/lib/i18n.server.ts`.
4. Replace the bootstrap placeholder `src/pages/__bootstrap.astro` (from Step 1) with real placeholder pages:
   - `src/pages/index.astro` — uses BaseLayout with `locale="en"`, `title="Home"`, body `<h1>EN home placeholder</h1>`.
   - `src/pages/pl/index.astro` — uses BaseLayout with `locale="pl"`, `title="Strona główna"`, body `<h1>PL home placeholder</h1>`.
5. Run `npx astro build` and `npx astro preview` briefly to confirm both routes render. If `src/app/**` Next pages now fail to compile because they imported from the trimmed `i18n.ts` / deleted `i18n.server.ts`, leave a minimal back-compat shim in `src/lib/i18n.ts` (re-export `getLocaleFromCookies` as a stub returning `'en'`) ONLY if required. Document this.

Constraints:
- Do not yet build the interactive components (ThemeToggle, LanguageSwitcher, MainNav, MobileMenu) — that's Step 4.
- Do not delete `src/app/**` — that's Step 7.
- Do not commit. Main agent will commit after verifying.

Return: files changed, build output (last 20 lines), any shim left in `i18n.ts`.
