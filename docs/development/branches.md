# Branches, without the mystery

A branch is a name pointing at a commit. A commit is a saved version of the project. Branches do not live inside one another: creating a branch from another one means starting at the same saved version and continuing from there.

## Our branches

| Branch | Purpose |
| --- | --- |
| `main` | Existing website and reviewed reference docs |
| `site-foundation` | React/TypeScript/Vite setup, shared components, content, styling values, and guides |
| `concept/interface-collage` | Leftmost concept: layered software-inspired composition |
| `concept/personal-archive` | Rightmost concept: folder/paper/personal-archive composition |

Both concepts start at the same foundation commit. Each is a complete website containing its own copy of the shared code. Changes in one branch never appear in the others automatically.

## Looking at a different design

First save or commit any changes. If `git status` shows unfinished work, do not discard it to switch designs.

```sh
git status
git switch concept/interface-collage
npm ci
npm run dev
```

For the other design, stop the server, switch to `concept/personal-archive`, and restart it. `npm ci` is needed after switching only if dependencies changed or have not been installed. An editor shows files from the currently checked-out branch, not all branches at once.

## Sharing an improvement

Suppose both concepts should have a better project card. Make the shared change on the foundation branch, commit it, then merge it into each concept:

```sh
git switch site-foundation
# Edit the shared card, check it, and commit the change.
git add src/components/ProjectCard.tsx src/components/ProjectCard.module.css
git commit -m "Improve the shared project card"

git switch concept/interface-collage
git merge site-foundation

git switch concept/personal-archive
git merge site-foundation
```

If a concept changed the same lines, Git may ask us to resolve a conflict. That means choosing how to combine those changes; it does not mean either version was lost. Finish with a working build and inspect the result.

Keep foundation changes focused on shared files. Avoid editing `src/App.tsx` or a concept's arrangement there once the concept branches exist; that reduces unnecessary conflicts.

## Mixing the concepts later

Create a new integration branch from the preferred base. Bring over the specific components or layout pieces we want from the other concept, adjust their composition, and check the combined site. Merging two branches does not automatically make aesthetic choices for us.

A branch per small component is unnecessary here. Short feature branches become useful for larger independent work later. After Jerry chooses a version, it can be reviewed and merged into `main`.
