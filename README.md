# Jerry's personal website

A personal corner of the internet for projects, thoughtful interfaces, and little discoveries. These branches explore the Interface Collage and Personal Archive concepts; `main` keeps the existing website while the redesign is being considered.

## Run locally

Requires Node.js 22.12+ (Node.js 24 LTS recommended).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build and preview the production files:

```sh
npm run build
npm run preview
```

## Find your way around

- [Current design decisions](docs/design/direction.md)
- [Branch guide](docs/development/branches.md)
- [Architecture and editing guide](docs/development/architecture.md)
- [Complete docs index](docs/README.md)

Edit content in `src/content/site.ts`, shared components in `src/components/`, and concept arrangements in `src/layouts/`. Shared colours and shadows live in `src/styles/tokens.css`. Each component has an ordinary CSS Module beside it.

Run `npm run build` and `npm run check:docs` before committing. Production files are generated in `dist/`; research screenshots under `docs/` are not included in that build.
