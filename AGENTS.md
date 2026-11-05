# Working on Jerry's personal website

## Start here
- Read `docs/design/direction.md` for current decisions and open questions.
- Use `docs/design/creative-brief.md` and `docs/reference-gallery.md` for context.
- Follow `docs/development/architecture.md` and `docs/development/branches.md`.
- This file contains durable development guidance, not the full design history.

## Code and content
- Use React, TypeScript, Vite, ordinary CSS Modules, and shared CSS variables.
- Keep components small and readable; use straightforward types and explicit props.
- Put shared UI in `src/components/`, content in `src/content/`, and page arrangements in `src/layouts/`.
- A layout controls placement. Shared components should not depend on a concept's page coordinates.
- Avoid generic component frameworks, unnecessary packages, and elaborate abstractions.
- Use semantic HTML, visible focus, keyboard-operable controls, and reduced-motion support.
- Portfolio projects and direct résumé/contact access must stay easy to find.
- Do not invent personal history, project contributions, results, habits, or testimonials.
- Distinguish decorative project illustrations from actual application screenshots.
- Keep Pinterest references under `docs/`; do not ship them as website assets.
- Record production image sources and licenses in `docs/design/assets.md`.

## Branches and checks
- `main` is the existing website. Keep experimental layouts on their concept branches until Jerry chooses a direction.
- Shared improvements belong on `site-foundation`, then merge them into both concepts.
- Keep commits focused so shared changes can be identified and reused.
- Before committing code, run `npm run build` and `npm run check:docs`.
- Check desktop/mobile layouts, project-dialog keyboard behavior, links, overflow, and reduced motion.
- Update current design decisions when Jerry makes a choice; preserve the distinction between approved and exploratory details.
- Access other repositories only when Jerry explicitly asks. Existing sourced project descriptions are documented locally.
- Prefer ChatGPT chat tools for chat retrieval; use the integrated browser only when needed. Do not use Edge for this project.
