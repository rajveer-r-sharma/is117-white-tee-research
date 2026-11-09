# IS117 White Tee Research

A VitePress competitive landscape research hub for a future single-product plain white T-shirt brand. **Phase 1: research only.** Brand identity, storefront, checkout, and commercial implementation come later.

## Preview

Requires Node.js 20.19+ or 22.12+ and npm. Tested with Node 24.

```sh
npm ci
npm run docs:dev
```

Open the local URL printed by VitePress (normally http://localhost:5173/is117-white-tee-research/).

```sh
npm run docs:build
npm run docs:preview
```

The production preview prints its URL (normally http://localhost:4173/is117-white-tee-research/). Build output is in `docs/.vitepress/dist`. No hosted website deployment is configured.

## Research workflow

Start with [methodology](docs/research/methodology.md), copy the [profile template](docs/competitors/template.md), and update the [comparison matrix](docs/research/comparison.md) and [evidence register](docs/research/evidence.md). Add new profiles to `docs/.vitepress/config.mts`.

Initial user research: UNIQLO AIRism Cotton T-Shirt $14.90; Buck Mason Field-Spec Cotton Heavy Tee $62; ASKET Lightweight T-Shirt off-white $95. Prices are USD research inputs, not guaranteed current offers. Exact SKU, color, region, and date require verification. Sources were checked on 2026-11-09; no user interviews, wear tests, or original screenshots are claimed.

These are product-level benchmarks from multi-product brands, not examples of businesses exclusively selling one product. ASKET off-white is an adjacent color comparator rather than an exact white match.

Screenshots remain explicit placeholders. Interpretations of archetypes, persuasion, and design are hypotheses, not statements of brand intent or proven customer behavior. See each profile for limitations and evidence.

## Verification and dependency status

`npm run docs:build` passed on 2026-11-09, including VitePress internal-link validation. Browser visual QA has not been performed.

`npm audit` reports three development-toolchain advisories (two moderate, one high) through VitePress 1.6.4 → Vite/esbuild, with no automatic fix available in this dependency line. Review upgrades before exposing a development server. The generated site is static; no production server dependency is deployed here.
