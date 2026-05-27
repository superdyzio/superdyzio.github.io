# Astro Migration — Orchestration Runbook

This runbook drives the Next.js → Astro migration described in
`.junie/plans/migrate-to-astro.md` using **subagent delegation**:

- The **main orchestrator agent** (your current Junie session, default model)
  is responsible for *coordination only*: triggering each step, verifying the
  build, committing, and stopping on failure.
- Each delivery step is performed by a dedicated **subagent** declared under
  `.junie/agents/astro-migration-step-N-*.md`. All subagents are pinned to
  `model: sonnet` so the heavy lifting runs on a cheaper model.

## Prerequisites

- You are on a clean working tree on branch `full-ssg-blog-astro`
  (or any feature branch). Run `git status` first.
- Node.js ≥ 20 is available.
- The plan file at `.junie/plans/migrate-to-astro.md` is present and unchanged.

## How subagent delegation works here

Junie CLI does not let you invoke a subagent by slash command. The main agent
delegates automatically when a task description **matches a subagent's `name`
and `description`**. Each of the seven prompts below is written to match
exactly one subagent, so the main agent should delegate that step to the
corresponding sonnet subagent.

If, for any reason, auto-delegation does not fire, the main agent will perform
the step itself. The work still gets done — it just won't run on sonnet.

## Single paste-able prompt to start the orchestration

Open a fresh `junie` session in the project root and paste this prompt:

> Execute the Astro migration described in `.junie/plans/migrate-to-astro.md`,
> one delivery step at a time. For each of the 7 steps:
>
> 1. Delegate the step to the matching subagent in `.junie/agents/`
>    (its `description` makes the match obvious). Do not do the work yourself
>    if a subagent matches.
> 2. When the subagent returns, run `npm run build` (or `npx astro build` if
>    `npm run build` is not yet wired to Astro) and skim the output for errors.
> 3. If the build is green, stage all changes and create exactly one git
>    commit with message `astro migration: step <N> — <short title>` and the
>    trailer `Co-authored-by: Junie <junie@jetbrains.com>`.
> 4. If the build fails, do NOT commit. Report the failure and stop.
>
> The steps, in order:
>
> - Step 1 — Bootstrap Astro alongside Next.js with shared tooling.
> - Step 2 — Define the blog Content Collection and migrate Markdown posts.
> - Step 3 — Implement BaseLayout, i18n helpers, and the locale-aware
>   routing shell.
> - Step 4 — Reimplement interactive components as Astro + vanilla JS islands.
> - Step 5 — Migrate static content pages and the home page.
> - Step 6 — Migrate blog index, post detail, and 404 with draft handling.
> - Step 7 — Update CI workflow, finalize cleanup, and update documentation.
>
> Between steps, briefly summarise what changed and what the next step will
> do. Do not push; the user will push manually after reviewing.

## What to verify after each step (orchestrator checklist)

| Step | Minimum verification before committing                                                          |
|------|--------------------------------------------------------------------------------------------------|
| 1    | `npx astro build` succeeds against a placeholder page.                                           |
| 2    | `npx astro build` succeeds; Zod schema accepts every migrated post; `posts.json` is deleted.     |
| 3    | `npx astro build` succeeds; `/` and `/pl/` render placeholders with the correct `<html lang>`.   |
| 4    | Theme toggle, language switcher, and mobile menu work in `npx astro preview`.                    |
| 5    | All non-blog routes exist in EN + PL with visual parity.                                         |
| 6    | `dist/` contains all expected blog routes; no draft slugs in prod.                               |
| 7    | `npm run build` is green; `dist/` has no `/login` or `/api/*`; README + workflow updated.        |

## Commit messages (recommended)

```
astro migration: step 1 — bootstrap Astro alongside Next.js
astro migration: step 2 — content collection + migrate posts
astro migration: step 3 — BaseLayout, i18n shell, placeholder pages
astro migration: step 4 — Astro islands (theme, lang, nav, mobile menu)
astro migration: step 5 — port static pages and home for EN/PL
astro migration: step 6 — blog index, [slug], 404; drafts excluded in prod
astro migration: step 7 — CI workflow + cleanup + README
```

Each commit must include the trailer:
```
Co-authored-by: Junie <junie@jetbrains.com>
```

## Failure / rollback

If any step's verification fails:

1. Do NOT commit.
2. Capture the relevant log excerpt.
3. Decide:
   - **Small fix**: re-delegate the same step to the same subagent with
     additional context (the error log).
   - **Bigger issue**: stop the orchestration and ask the user.
4. To roll back work-in-progress (uncommitted only): `git restore .` and
   `git clean -fd` — but only after confirming with the user, since the
   working tree may contain unrelated changes.

## Subagent inventory

| Step | File                                                       | Model  |
|------|------------------------------------------------------------|--------|
| 1    | `.junie/agents/astro-migration-step-1-bootstrap.md`        | sonnet |
| 2    | `.junie/agents/astro-migration-step-2-content.md`          | sonnet |
| 3    | `.junie/agents/astro-migration-step-3-layout-i18n.md`      | sonnet |
| 4    | `.junie/agents/astro-migration-step-4-components.md`       | sonnet |
| 5    | `.junie/agents/astro-migration-step-5-static-pages.md`     | sonnet |
| 6    | `.junie/agents/astro-migration-step-6-blog-routes.md`      | sonnet |
| 7    | `.junie/agents/astro-migration-step-7-cleanup.md`          | sonnet |
