<!-- BEGIN:nextjs-agent-rules -->
# Next.js repository note

This project uses Next.js 16.2.7. Its APIs and conventions may differ from older Next.js versions. Before writing code, read the relevant guide in `node_modules/next/dist/docs/` and follow current deprecation guidance.
<!-- END:nextjs-agent-rules -->

# CTC Website Working Rules

This repository is a small Next.js institutional website and online archive for the Critical Thinking Club. It is an official but student-led organization site with an editorial, documentary, and spacious visual character. Treat the existing `DESIGN-SYSTEM.md` as the source of truth for visual conventions; this file defines how work is performed.

## Repository Safety

- Run `git status` before making changes.
- Explain the implementation plan before editing.
- Work only inside this repository.
- Modify only files directly related to the requested task.
- Prefer the smallest safe change that solves the request.
- Preserve existing functionality unless the request explicitly changes it.
- Do not delete or rename files without explicit approval.
- Do not commit or push automatically.
- Never reset, rewrite, clean, or discard Git history or existing uncommitted changes.
- Ask for approval before installing or removing dependencies, changing environment/build/deployment configuration, running migrations, deleting files, killing processes, changing ports, or executing destructive commands.
- After editing, report the summary, changed files, checks run, remaining risks, and diff.

## Project Conventions

- Use the existing Next.js App Router structure, shared components, local data modules, and Tailwind conventions.
- Keep the default body typography readable and sans-serif. Use editorial/display typography only where the design system or page identity calls for it.
- Preserve the site's institutional archive character: restrained surfaces, clear hierarchy, whitespace, subtle dividers, and minimal ornament.
- Prefer editorial lists for documents, statements, events, and historical records. Reserve cards for navigation collections, previews, and clearly grouped surfaces.
- Preserve responsive behavior, semantic structure, keyboard access, focus states, and natural text wrapping.
- Do not introduce a new visual language for a page without first explaining the rationale and affected files.

## Skill Routing

Use the relevant workflow proportionally:

- Use Superpowers for complex features, architecture changes, multi-file refactors, difficult bugs, migrations, authentication/permissions, stateful logic, test-driven work, systematic debugging, and completion verification.
- For copy changes, isolated spacing/color/icon/typography fixes, obvious single-file fixes, and trivial CSS adjustments, keep the process lightweight.
- Use Taste Skill for substantial brand-facing or visual work involving landing pages, typography, hierarchy, spacing, composition, or visual identity. Keep the result aligned with the CTC design system rather than introducing generic or trend-driven UI.
- Treat React Bits as optional. Use it without a separate approval checkpoint only for subtle, low-risk micro-interactions that preserve the existing visual language. Request visual approval before adding a prominent component, and include its location, rationale, preview, mobile behavior, performance cost, and reduced-motion behavior.
- Never add Unicorn Studio, major WebGL backgrounds, particles, beams, magnetic cursor effects, or other heavy visual effects without explicit visual approval. Any approved effect needs a preview, loading/GPU plan, mobile and static fallbacks, contrast plan, reduced-motion behavior, and failure behavior.

## Visual Review Checkpoints

For substantial design work:

1. Before implementation, present the diagnosis, visual direction, typography, spacing, color/contrast approach, references, unchanged elements, and expected files. Wait for approval when the direction meaningfully departs from the current design.
2. Request explicit approval before implementing a dominant animation, WebGL effect, prominent React Bits component, or other focal effect.
3. After the first desktop pass, run the page locally and provide a preview for review of hierarchy, spacing, typography, composition, cards, and motion before extensive polish.
4. Review mobile separately for overflow, touch targets, navigation, density, performance, reduced motion, and fallbacks.
5. Before completion, run applicable linting, type checks, tests, production build, responsive/keyboard checks, semantic checks, contrast review, console-error review, and `git diff --check`. Do not claim a check passed unless it was run.

## Delivery

- Do not implement unrelated cleanup while completing a task.
- Show the final diff or a focused diff summary when the worktree contains pre-existing changes.
- State clearly which requested checks were not available or could not be run.
- Leave commits, pushes, and history changes to the user unless explicitly requested.
