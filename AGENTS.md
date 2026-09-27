# AGENTS

This file is the operating guide for any AI agent working on this repository.

## Read first

Before making changes, read in this order:

1. `WORKFLOW.md` — how changes actually get made: git conventions, verification steps, deployment, coordination with direct pushes from Victor and other agent sessions
2. `PROJECT.md` — project scope, identity, open decisions, architecture and current V1 scope
3. `DESIGN_SYSTEM.md` — visual direction and interaction rules
4. `CONTENT.md` — artworks, biography, credits, media and factual content inventory
5. `MEDIA_STATUS.md` — actual asset / selection status and current curated source packages
6. `ROADMAP.md` — implementation sequence, V1 build plan and future phases
7. `MANIFESTO.md` — artistic operating principle (90% order / 10% accident, non-explanation)
8. `ARTISTIC_PROCESS.md` — working method behind the manifesto (circulation, resonance protocol)
9. `README.md` — repository entry point and current status

Studio-practice documents (`PROTOCOL_CIRCULATION.md`, `CIRCULATION_CARD.md`, `ARCHIVE_SYSTEM.md`, `CREATION_CARD.md`) matter for factual grounding but don't drive site architecture or design — see `WORKFLOW.md`'s documentation map for the full list and what each one governs.

`biography/VICTOR_LE_MASTER_BIOGRAPHY.md` is a private, evolving research source — never publish from it directly. `CONTENT.md` remains the source of truth for what's actually public.

## Source-of-truth precedence

When files differ in scope:
- `WORKFLOW.md` controls process — git, verification, deployment, agent coordination — not content or design;
- `PROJECT.md` controls architecture, navigation, scope and phase decisions;
- `DESIGN_SYSTEM.md` controls visual / interaction behaviour;
- `CONTENT.md` controls factual artwork / biography content;
- `MEDIA_STATUS.md` controls current asset availability and visual-selection status;
- `MANIFESTO.md` / `ARTISTIC_PROCESS.md` control artistic-practice principles referenced by design/content decisions, not site architecture;
- `ROADMAP.md` controls execution order only.

Example: the long-term architecture includes `INDEX`, but `PROJECT.md` currently defers its implementation to V2. Do not re-add INDEX to the V1 navigation merely because older wireframe text still shows it.

## Core rule

Do not invent missing facts, dates, credits, titles, legal information, dimensions or biographies.
Mark uncertain information as `TO VERIFY`, `TO ADD` or `WORKING TITLE`.

## Naming

Public naming — DECIDED 2026-09-11, recorded in `PROJECT.md`: **Victor Le** is the public identity; `Victor Le de Doisy` is the full legal name used administratively.

`L3XL3` — DECIDED 2026-09-11: the public spelling is **L3XL3**, `LEXILE` dropped. Recorded in `PROJECT.md`.

## Design principles

Follow `DESIGN_SYSTEM.md` as the source of truth.
Key principles:
- order is the default
- the artwork carries the visual complexity
- Kotoros is pink and rare
- handwriting is a human trace, not a decorative font
- sound is a real artistic medium and is silent by default
- Flash is a behavioural reference, not a retro visual style
- absurdity is rare and appears one element at a time
- the visitor causes the disorder
- the website starts as an archive and gradually becomes Victor's studio

## Content principles

Follow `CONTENT.md` for factual content.
When new material is supplied:
- capture it first without over-filtering
- record title or working title, year/date, discipline, status, collaborators/credits, media available and missing information
- preserve uncertainty explicitly
- do not force every work into one rigid discipline

## Media principles

Follow `MEDIA_STATUS.md` before choosing or replacing images.

- Do not assume every image in an archive belongs to the visually obvious corpus.
- Victor's explicit project attribution overrides visual inference.
- Preserve originals.
- Public selections should be substantially smaller than raw archives.
- Do not block V1 implementation waiting for perfect scans or full metadata if `PROJECT.md` / `MEDIA_STATUS.md` says the current source is sufficient.
- Do not commit large source ZIPs or archival video files to the code repository unless explicitly required.

## Kotoros

Kotoros is Victor's personal sign. It is not a conventional logo.
Website usage:
- pink only as a visible identity gesture
- rare
- never monumental
- never repeated across a viewport
- never use black or red as a dominant identity mark
- desired reaction: “What is that?” rather than “That’s his logo.”

The original source artwork should be preserved separately from any website treatment.

## Working method

See `WORKFLOW.md` for the concrete mechanics — git conventions, verification steps before committing, deployment, and how to handle the fact that `main` moves outside any single agent session. The rules below are about design/content decisions specifically.

Before implementing a major structural or visual change:
1. check whether it conflicts with `PROJECT.md` or `DESIGN_SYSTEM.md`
2. preserve open decisions instead of silently resolving them
3. check `MEDIA_STATUS.md` before inventing placeholder assets or asking for already-found material
4. update the relevant documentation when a project-level decision is made
5. keep the implementation simple unless complexity is clearly justified by the artistic experience

## Repository-wide rule for future AI work

This repository is designed to be usable by multiple AI systems and human collaborators. Any agent should rely on the repository documentation rather than undocumented chat history.
