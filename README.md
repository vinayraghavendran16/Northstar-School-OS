# Northstar School OS website

A standalone, statically exported Next.js website for school decision makers. The app lives in `vinayraghavendran16/neverskipalternate`; this repository is its marketing website.

## Run

Node 22 or newer recommended. `npm ci`, then `npm run dev` (port 3100). `npm run build` exports the website to `out/`. Serve that folder with any static host. Run `npm run lint` and `npm run typecheck` before publishing.

## Content and behaviour

- `components/marketing/website.tsx`: role-based product tour, cost calculator, pricing, expandable perspectives and trial contact links.
- `components/marketing/website.module.css`: responsive styling and reduced-motion support.
- `lib/marketing/product.ts`: public feature descriptions, proposed prices and roadmap items.
- `public/prototype/`: sample-data teacher prototype copied from the app. This is not the production app and does not access school records.
- Trial enquiries use a pre-filled email to vinayraghavendran16@gmail.com. No lead is stored or submitted by the website itself.

## Keeping the website aligned

A daily Codex task checks the app repository for meaningful changes and updates this website. Its last reviewed app revision is recorded in `docs/app-source.json`. Review actual implementation and release notes before changing claims. Never promote planned features solely because a route exists. Refresh the sample prototype only when its source changes.

Keep pricing, guarantees and commercial terms anchored to owner-approved direction. App changes alone do not authorize different pricing or new guarantees. Current copy identifies the proposed license terms and differentiates offline payment recording from automated gateway reconciliation.

Changes to the website should pass lint, typecheck, production export, and focused browser checks. Commit and push to this repository, and publish the same revision through the Site identified in `.openai/hosting.json`. Do not modify the production app while maintaining this website.
