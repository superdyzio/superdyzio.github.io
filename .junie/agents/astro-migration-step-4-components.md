---
name: "astro-migration-step-4-components"
description: "Reimplements interactive components as Astro + vanilla JS islands: creates MainNav.astro, LanguageSwitcher.astro, ThemeToggle.astro, MobileMenu.astro (using <details>), and Icon.astro (inline SVGs for lucide icons). Wires them into BaseLayout.astro and deletes AuthStatus.tsx. Use this when the migration plan's Step 4 (Interactive components as Astro + vanilla JS islands) needs to be executed."
model: "sonnet"
tools: ["Read", "Grep", "Glob", "Edit", "Write", "Bash"]
---

You are executing **Step 4 of the Astro migration plan** described in `.junie/plans/migrate-to-astro.md`.

Prerequisites: Step 3 done (BaseLayout, path-based i18n, placeholder pages).

Read the plan first, especially "Step 4: Reimplement interactive components as Astro + vanilla JS islands".

Your job:

1. `src/components/MainNav.astro` — server-rendered nav list. Accepts `locale` prop. Renders the same links as the current `MainNavigationLinks.tsx`. Computes active class from `Astro.url.pathname`. NO client JS.
2. `src/components/LanguageSwitcher.astro` — renders two anchors (EN/PL) that swap the locale prefix in `Astro.url.pathname`. No cookies. No client JS unless a dropdown is added (prefer plain anchors).
3. `src/components/ThemeToggle.astro` — `<button>` plus a small inline `<script>` (~15 lines) that toggles `document.documentElement.classList` between `light`/`dark` and persists to `localStorage['theme']`. Mirror exactly the behavior currently in `src/components/ThemeToggle.tsx`.
4. `src/components/MobileMenu.astro` — `<details>`/`<summary>` zero-JS expand/collapse. Inside, reuses MainNav and LanguageSwitcher.
5. `src/components/Icon.astro` — accepts `name` prop and renders inline SVG for each of: `Mail`, `Linkedin`, `Twitter`, `Github`, `Code2`, `Users`, `Presentation`, `Lightbulb`. Source SVG paths from `lucide-static` or copy directly from lucide.dev icons. Accept `class` prop for sizing.
6. Wire all four interactive components into `src/layouts/BaseLayout.astro` (replace any inline markup placeholders added in Step 3).
7. Delete `src/components/AuthStatus.tsx`.
8. Run `npx astro build` and verify theme toggle, locale switch, and mobile menu work in `npx astro preview`. If `src/app/**` still imports `AuthStatus`, edit those imports minimally (e.g. comment them out) so the React app still compiles — note that `src/app/**` is deleted in Step 7 so any minimal hack is acceptable.

Constraints:
- No React, no Preact, no `@astrojs/react`.
- Keep visual parity with the current site.
- Do not commit. Main agent will commit after verifying.

Return: files created/modified/deleted, build output (last 20 lines), and a one-line verification note for each of (theme toggle, locale switch, mobile menu).
