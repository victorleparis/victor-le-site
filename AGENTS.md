# AGENTS

This file is the operating guide for any AI agent working on this repository.

## Read first

Before making changes, read in this order:

1. `PROJECT.md` — project scope, identity, open decisions, architecture
2. `DESIGN_SYSTEM.md` — visual direction and interaction rules
3. `CONTENT.md` — artworks, biography, credits, media and content inventory
4. `README.md` — repository entry point and current status

## Core rule

Do not invent missing facts, dates, credits, titles, legal information, dimensions or biographies.
Mark uncertain information as `TO VERIFY`, `TO ADD` or `WORKING TITLE`.

## Naming

The public naming decision is intentionally open:
- `Victor Le`
- `Victor Le de Doisy`
- a hybrid system

Do not lock or propagate a final public name until the complete content inventory and information architecture have been reviewed.

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

Before implementing a major structural or visual change:
1. check whether it conflicts with `PROJECT.md` or `DESIGN_SYSTEM.md`
2. preserve open decisions instead of silently resolving them
3. update the relevant documentation when a project-level decision is made
4. keep the implementation simple unless complexity is clearly justified by the artistic experience

## Repository-wide rule for future AI work

This repository is designed to be usable by multiple AI systems and human collaborators. Any agent should rely on the repository documentation rather than undocumented chat history.
