# Architecture and editing guide

## The stack

- **React** builds reusable interface components.
- **TypeScript** describes component inputs and content, catching mistakes before the browser runs.
- **Vite** provides the local development server and production build.
- **CSS Modules** are ordinary CSS with component-scoped class names. `tokens.css` contains shared colours, spacing-related values, shadows, and fonts.
- **npm** manages packages. Commit `package-lock.json`; use `npm ci` to reproduce the installed versions.

No application server, database, router, or CMS is required for these single-page portfolio prototypes. Section links use ordinary URL anchors. A later multi-page or writing-heavy site should revisit routing and prerendering. The current Vite setup renders the interactive page in the browser, with static metadata and a basic no-JavaScript contact/work fallback; it is not a prerendered case-study site.

## Where things live

```text
src/
  App.tsx                 chooses the layout and owns the selected project
  content/site.ts         project facts, links, personal copy, photo credits
  components/             shared visual pieces and behavior, each with its CSS
  layouts/                concept-specific arrangements and their CSS
  styles/tokens.css       shared visual values
  styles/global.css       document defaults, focus and reduced-motion rules
public/
  images/                 website photos with documented sources
  JerryZeng_resume_technical.pdf
docs/                     project decisions, references, and working guides
AGENTS.md                 short instructions for coding agents
```

Vite copies `public/` into the build. Design-research images in `docs/references/` are not imported by the app or copied into its production output.

## How reuse works

`ProjectCard` receives a project and an `onSelect` callback. It knows how to display that project, but not where the page will place it. A layout arranges cards and decides which project is featured. Clicking a card tells `App` which project to open in the shared `ProjectDialog`.

`PhotoCard`, `MusicShelf`, `SiteHeader`, `AboutSection`, `Panel`, and `SiteFooter` work similarly. Changing the shared component changes every use on that branch. Different branches must explicitly receive the commit through a merge; they do not synchronize automatically.

Do not force unrelated concept-specific decoration into a universal component. Small CSS differences can live in a layout's stylesheet. Extract a new shared option only when it makes two real uses clearer.

## Common edits

| Want to change | Edit |
| --- | --- |
| Projects, links, captions | `src/content/site.ts` |
| All colours or shadows | `src/styles/tokens.css` |
| A card's appearance | `src/components/ProjectCard.module.css` |
| The arrangement of the homepage | The active file under `src/layouts/` |
| An interaction | The corresponding shared component |
| Project decisions | `docs/design/direction.md` |

## Commands

```sh
npm ci
npm run dev
npm run build
npm run preview
npm run check:docs
```

`npm run build` includes TypeScript checking because Vite's transformation alone does not check types. A static host serves `dist/`. Relative asset paths allow hosting under a subdirectory. The previous root résumé path remains available, and a copy in `public/` is emitted with the new build.
