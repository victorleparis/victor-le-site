# ROADMAP

Implementation roadmap for the Victor Le website.

Last updated: **2026-09-07**.

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

### V1 routes

Initial routes should support:
- `/` — SELECTED homepage;
- `/about`;
- `/participate`;
- project-detail routes only where real content justifies them.

Do not build `/index` in V1.

### Header V1

Working header:

```text
VICTOR LE
ARTIST & DESIGNER
PARIS — live time
Visual Art · Fashion · Image · Sound · Performance

SELECTED · ABOUT · PARTICIPATE
SOUND ○
```

Public naming remains open, so implementation must make the name easy to change globally.

## Phase 2 — SELECTED implementation

Build with real media in this order:

1. **WORKS IN SPACE & MATTER** — strongest ready visual corpus; use V3 selection.
2. **COLLECTIONS** — use V1 source boards, replace with final garment photos later.
3. **L3XL3 / LEXILE** — use 10-image reduced drawing selection.
4. **EDITIONS & PRINT** — use six-image V1 source set.
5. **SOUND** — build listening-room structure from documented releases.
6. **PRINCEVILLE** — video + selected original text.
7. **URL FIGHTERS** — one iconic image + concise text + external/deep-archive link.
8. **THE DINNER PROJECT** — initially restrained placeholder; replace with Episode 001 media after first session.

The homepage should remain an editorial sequence, never eight equal cards.

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
