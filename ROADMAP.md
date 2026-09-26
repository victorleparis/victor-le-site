# ROADMAP

Implementation roadmap for the Victor Le website.

Last updated: **2026-09-26**.

`PROJECT.md` remains the source of truth for scope and architecture. This file describes execution order.

## Phase 1 — V1 foundation

Goal: get the real site working with the existing corpus rather than continuing abstract wireframing.

### Technical foundation

Recommended lean stack:
- Next.js;
- TypeScript;
- App Router;
- custom CSS;
- minimal dependencies;
- Framer Motion only where interaction clearly benefits;
- no generic UI component library;
- optional WebGL / Three.js only later if a specific artistic behaviour requires it.

Large audio / video should live on appropriate object storage / CDN rather than bloating the Git repository.

Suggested public media structure:

```text
public/
  images/
  audio/
  identity/
    kotoros/
    handwriting/
```

Do not commit large archival ZIPs as website assets.

### Current routes / information architecture

The current top-level architecture is:
`L3XL3 · ACTIONS · WORKS · INDEX · ABOUT`.

Homepage `/` is not the archive and not a mirror of those sections. Its current sequence is:
1. COLLECTIONS
2. WE DRESS YOU TONIGHT
3. THE DINNER PROJECT
4. L3XL3

Next implementation work should create real depth behind ACTIONS / WORKS / INDEX rather than copying homepage components into them.

## Phase 2 — Homepage and depth implementation

Build / refine in this order:
1. **COLLECTIONS** — strongest visual entrance; normalize scale and rhythm.
2. **WE DRESS YOU TONIGHT** — studio project; add real documentation when available.
3. **THE DINNER PROJECT** — restrained until real session media exists.
4. **L3XL3** — coherent moving stage; common frame, slow motion, one controlled accident.

Then move historical / parallel corpora into deeper architecture:
- ACTIONS: actions, protocols, encounters, symbolic situations.
- WORKS: autonomous/material works, image, sculpture, painting, sound, editions and clothing where useful.
- INDEX: chronological reserve and orientation layer.

Do not reuse the homepage as the body of these deeper sections. A repeated project must reveal additional material or context.

## Phase 3 — ABOUT

Build a short factual page.

Priority content:
- concise artist bio;
- selected education;
- selected exhibitions / performances;
- publications;
- awards;
- contact.

Do not attempt a complete CV database in V1.

Specific archive to normalize when supplied:
- Prix Galeries Lafayette / IFA photographs and exact event facts.

Public naming decision may be revisited once ABOUT is assembled against the real site.

## Phase 4 — PARTICIPATE

Permanent conceptual entry.

Core line:

> Some works require other people.

V1:
- `OPEN NOW` — The Dinner Project once active;
- `PAST` — only a small selection of historical protocols / participatory works that can be presented cleanly.

Avoid generic signup / startup-funnel language.

## Phase 5 — Dinner Project / Episode 001

When the first dinner is documented:
- ingest best photographs;
- select one main still / hero;
- select 2–5 secondary images if useful;
- review short video clips;
- review sound / room tone;
- record date, guest count and worn pieces only where appropriate / consented;
- confirm publication consent before public use.

Then replace the homepage placeholder with real media.

## Phase 6 — refinement after V1 skeleton

Once all main sections work:
- replace source-board screenshots with original high-resolution files;
- add verified captions / credits;
- tune image crops for desktop and mobile independently;
- implement rare Kotoros behaviour;
- add real scanned handwriting sparingly;
- implement one controlled Flash-like behaviour at a time;
- polish sound playback;
- add responsive/mobile editorial sequencing.

Keep the initial interface extremely ordered.

## Phase 7 — V1 launch / stabilization

Before public launch:
- verify rights / photo credits;
- verify public naming;
- add legal / contact details required for the actual site operator;
- test accessibility and keyboard behaviour;
- test mobile crops;
- test performance / image loading;
- ensure sound is silent by default;
- ensure no private contact details from archive material are exposed;
- remove invented / placeholder facts.

## V2 — INDEX

After V1 is stable, build the systematic reserve.

Tasks:
- normalize chronology from 2014 onward;
- create structured work records;
- distinguish internal types such as corpus / work / protocol / publication / archive / current project;
- verify years, titles, contexts, venues and credits;
- build dense chronological INDEX UI;
- add discreet metadata filters only where useful.

INDEX should not become a CV spreadsheet or admin dashboard.

## V2 / V3 — URL Fighters deep archive

URL Fighters needs a dedicated later pass because of its documentary scale.

Potential work:
- deduplicate archive;
- group by P.S.P. / O.S.P. / P.P.P. / URL Mask / Cocoït / Paper Night / Festin d'URL / objects / sound / moving image;
- identify iconic images;
- normalize chronology;
- inventory video;
- clarify existing-site preservation vs redesign vs independent archive.

Victor's main site should remain the curatorial entry point even if URL Fighters gets an independent deep archive.

## Future content additions

Non-blocking future work:
- complete Sound discography and original cover artwork;
- finished / worn Collection photography;
- L3XL3 / LEXILE stage and costume photography;
- La Bibliothèque bleue issue scans;
- FAMOUS covers / spreads;
- precise metadata for Works in Space & Matter;
- full education / biography normalization;
- relational protocol documentation;
- analog photography corpus if it develops into a coherent autonomous body;
- autobiographical book / film status if they become public works.

## Working principle

**Do not delay the site waiting for the archive to become perfect.**

Build V1 from the strongest material already available, then improve the archive and metadata progressively without changing the core architecture.
