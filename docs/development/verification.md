# Verification guide

Run `npm run build` for TypeScript checking and a production build, then `npm run check:docs` for local Markdown links and the seven original-image checksums. The build must not contain the Pinterest screenshots.

## Check each concept

- Desktop at 1440px, phone at 390px, and a narrower 320px layout: no horizontal page overflow, clipped controls, or missing images.
- Project cards open the correct detail dialog. Tab and Shift+Tab cycle through its controls; Escape closes it and returns focus to the triggering card. Background scrolling is restored on close.
- The music shelf expands and collapses; artist links appear only when expanded.
- Main navigation reaches real sections. Résumé and image URLs work in the production build, including when hosted under a subdirectory.
- Personal Archive's project selectors update the featured project and its detail content.
- Focus is visible. With reduced motion enabled, smooth scrolling and decorative motion are disabled.
- Inspect the browser console for errors and check that the site makes no requests for research images.

These checks verify the prototype's core behavior. They do not replace a full screen-reader audit, cross-browser testing, or Jerry's review of personal copy and project contributions.

## First shared change

The foundation includes an explicit keyboard-focus cycle in `ProjectDialog` so both links and buttons remain reachable even when browser/platform keyboard preferences differ. That improvement is merged into both concept branches, illustrating the sharing workflow described in the branch guide.

## First prototype review — 2026-11-05

- Both concept branches pass TypeScript checking, production builds, and documentation validation (44 local links and all seven reference checksums).
- Integrated-browser checks cover desktop at 1440px, phone at 390px, and narrow screens at 320px; neither concept has horizontal document overflow at those sizes.
- Project dialog: correct content, initial close-button focus, forward/reverse keyboard cycling, Escape, focus restoration, and background-scroll restoration checked.
- Archive project selection updates the featured card and opens the matching project. Music expansion exposes the three artist links. The footer discovery toggles its text and expanded state.
- Both production builds serve HTML, photographs, and a valid résumé PDF under separate subdirectory URLs. The PDF copy matches the original. Research references are absent from both production builds.
- All section anchors resolve, images load, and the final production previews show no console errors during the checked interactions. Reduced-motion CSS is included; an OS-level reduced-motion session and a full screen-reader audit have not been performed.
- Desktop and mobile screenshots were saved outside the repository as review artifacts. The photos are credited atmosphere placeholders; detailed project roles and outcomes still need Jerry's review.
