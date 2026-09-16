# Victor Le Site

Official website project for Victor Le / Victor Le de Doisy.

## AI / collaborator entry point

**Read `AGENTS.md` first before working on this repository.**

`AGENTS.md` defines the documentation chain and repository-specific operating rules.

Then read, in order:

1. `PROJECT.md` — project scope, architecture, V1 decisions and open decisions
2. `DESIGN_SYSTEM.md` — visual direction and interaction principles
3. `CONTENT.md` — artworks, biography, credits and factual content inventory
4. `MEDIA_STATUS.md` — current visual/media selections and source status
5. `ROADMAP.md` — implementation plan and future phases

### Extended biographical source

For long-form biographical research, book / film development, interviews and future artist dossiers, use:

`biography/VICTOR_LE_MASTER_BIOGRAPHY.md`

This is an evolving source archive, **not public website copy**. `CONTENT.md` remains the source of truth for factual biographical content intended for or being prepared for the website. Do not automatically publish private, uncertain or interpretive material from the master biography.

## Current status — 2026-09-07

A first navigable V1 implementation now exists (Next.js + TypeScript +
App Router). See "Implementation notes" below for how it's built.

V1 public navigation:

`SELECTED · ABOUT · PARTICIPATE`

`INDEX` remains part of the validated long-term architecture but is intentionally deferred to **V2**.

Current SELECTED sequence:

1. THE DINNER PROJECT
2. URL FIGHTERS
3. PRINCEVILLE
4. COLLECTIONS
5. WORKS IN SPACE & MATTER
6. L3XL3 / LEXILE — naming to verify
7. SOUND
8. EDITIONS & PRINT

The next phase is progressive content/media refinement and, once the
SELECTED visual language is solid, individual project detail pages
(ROADMAP.md Phase 5) — not further architecture exploration.

## Implementation notes (for future agents)

- **Stack**: Next.js (App Router) + TypeScript + CSS Modules with CSS
  custom-property tokens. No Tailwind, no UI kit, no CMS. Framer
  Motion was not needed for V1 and is not a dependency.
- **Content lives in code**, under `content/`: one typed data file per
  SELECTED entry (`content/selected/*.ts`), plus `content/about.ts`,
  `content/participate.ts`, and `content/site.config.ts` (public
  name, nav labels, feature flags — the single place to change the
  open naming decision). Each entry has a `layout` id but is rendered
  by its own bespoke component under `components/selected/` — there
  is deliberately no generic "ProjectCard" — so composition stays
  editorial/asymmetric rather than forcing eight equivalent cards.
- **Media auto-resolves from the filesystem.** `lib/media.ts` reads
  `public/media/<corpus-slug>/` (and `public/media/selected/<slug>/`)
  at build/render time and lists whatever real files are there. There
  is no manifest to edit and no filenames to hardcode when new
  selections land — sections pick them up automatically on the next
  build. When nothing has landed yet, `components/ui/MediaFrame`
  renders a sober "AWAITING MEDIA" / "TO ADD" placeholder rather than
  fabricated imagery. Works in Space & Matter additionally maps
  MEDIA_STATUS.md's named hero/strong/secondary filenames to layout
  slots when present, falling back to positional order otherwise.
- **Corpus slugs** expected under `public/media/`: `dinner-project`,
  `url-fighters`, `princeville`, `collections`, `works-space-matter`,
  `l3xl3`, `sound`, `editions`. Project pages (Phase 5) don't exist
  yet — V1 is the SELECTED homepage plus `/about` and `/participate`.
- No project detail routes, no INDEX route, no CMS, no self-hosted
  audio/video pipeline — all intentionally out of scope for V1 per
  ROADMAP.md.

## Decided (2026-09-11)

- Public naming: **Victor Le** (`content/site.config.ts`). `Victor Le de Doisy` remains the full legal name for administrative use.
- **L3XL3** — `LEXILE` dropped.
- Public contact: `v@shootme.com` (`content/about.ts`).

## Important open decisions

- Final credits, dates, titles, dimensions and legal metadata where still marked `TO VERIFY` / `TO ADD`.
- SIRET / SIREN for the artistic and entrepreneurial activities (`PROJECT.md`).
