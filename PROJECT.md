# PROJECT

This file is the source of truth for project-level decisions.

If a decision affects naming, architecture, scope, navigation or site positioning, record it here.

## Project

Personal website for Victor Le / Victor Le de Doisy, artist and designer based in Paris.

The website is intended to function as an artist archive, editorial space, interactive digital studio and entry point to selected participatory works.

## Long-term public architecture — DECIDED 2026-09-27

The public architecture is now:

`FORM · VOICE · READ · PLACE · ARCHIVE · ABOUT`

This supersedes the 2026-09-26 architecture `L3XL3 · ACTIONS · WORKS · INDEX · ABOUT`, which was itself never fully implemented in navigation: `site.config.ts` had already dropped `ACTIONS` and `INDEX` on 2026-09-27 for lacking any matching homepage section, leaving a live nav (`L3XL3 · WORKS · ABOUT`) that no longer matched this file. This decision replaces both the 09-26 architecture and that interim live nav with a single grouping organised by medium/mode rather than by concept (L3XL3 as world) or by browsing mechanism (INDEX):

- **FORM** — clothing as sculpture, silhouette and situation: Collections, We Dress You Tonight, The Dinner Project.
- **VOICE** — the sung, staged and sounded: L3XL3 (opera in progress) and Sound (discography).
- **READ** — print and publishing: Editions & Print (La Bibliothèque bleue, How to Be Famous in 480 Days, FAMOUS).
- **PLACE** — declared and claimed territory: URL Fighters, Princeville.
- **ARCHIVE** — the autonomous material corpus not organised by medium above: Works in Space & Matter.
- **ABOUT** — factual biography, trajectory, texts, publications, credits and contact (unchanged, separate route).

Guiding principle: **few navigation choices, substantial depth.**

L3XL3 remains prominent (grouped under VOICE, its dominant medium) but is not the master explanation for every work — URL Fighters, Princeville, Works in Space & Matter and the editions each keep their own section under PLACE, ARCHIVE or READ rather than being folded into it.

### Retired concepts

- **ACTIONS** and **INDEX** (2026-09-26 architecture) are retired, not deferred to a later phase. Their intent is absorbed: protocols/encounters live inside each project's own section (e.g. The Dinner Project under FORM, Princeville under PLACE) rather than a separate conceptual axis; the chronological/systematic reserve INDEX proposed is superseded by ABOUT's Selected Exhibitions/Performances list plus each section's own material — no separate dense INDEX page is planned. See "INDEX — retired 2026-09-27" below, kept only as a historical record of that dropped direction.
- **WORKS** (both the 2026-09-26 sense and the 2026-09-07 `WorksSection` "parallel and continuing bodies" card grid) is retired as a catch-all. What it grouped (URL Fighters, Princeville, Works in Space & Matter) now has its own full section under PLACE or ARCHIVE instead of a shared lightweight preview grid.

## Current public scope — UPDATED 2026-09-27

Implementation migrates the existing content and media into:
`FORM · VOICE · READ · PLACE · ARCHIVE` on the homepage, plus the separate `ABOUT` route.

Existing SELECTED material remains valuable as a curatorial and media source, but `SELECTED` is no longer the required public top-level navigation.

The migration should reuse verified content and real media already present in the repository rather than rebuild the content inventory from scratch.

### Legacy SELECTED material / migration source

`SELECTED` is the native homepage. There is no decorative landing page and no click is required before seeing work.

Current sequence, now with its FORM/VOICE/READ/PLACE/ARCHIVE grouping:

1. **THE DINNER PROJECT** — 2026— — FORM
2. **URL FIGHTERS** — 2015— — PLACE
3. **PRINCEVILLE** — 2018— — PLACE
4. **COLLECTIONS** — dates to establish — FORM
5. **WORKS IN SPACE & MATTER** — dates to establish — ARCHIVE
6. **L3XL3** — naming decided 2026-09-11 ("LEXILE" dropped) — VOICE
7. **SOUND** — dates now partly documented — VOICE
8. **EDITIONS & PRINT** — 2018— — READ

The numbering above is each item's own content/media number (`content/selected/*.ts`), not a navigation order — it is unrelated to and predates the FORM/VOICE/READ/PLACE/ARCHIVE grouping and is left as-is per this repo's "don't invent facts" rule.

The eight entries must not appear as eight equivalent cards. `SELECTED` is an editorial exhibition sequence.

Disciplines remain metadata rather than primary navigation.

### V1 treatment by sequence

#### 01 — THE DINNER PROJECT
Current living work. No archive exists yet.

First real session is expected to generate the initial photographs / film / sound. Until real material exists, use a restrained placeholder rather than fabricated imagery.

#### 02 — URL FIGHTERS
Major historical corpus with several hundred archived images plus moving-image material.

For V1, keep treatment deliberately light:
- one iconic image, possibly a second;
- concise framing text;
- link to the existing URL Fighters site / archive.

Do **not** attempt full archive migration for V1. A dedicated deep-archive treatment can be addressed later.

#### 03 — PRINCEVILLE
For V1, the work can be carried primarily by:
- the video at `princeville.fr`;
- Victor's original Princeville text / selected source text;
- optionally one original document if useful.

Do not invent an image gallery just to fill space.

#### 04 — COLLECTIONS
V1 source material exists for Guardian, Sageum B, St Michel and additional silhouettes / pieces.

Current source boards are enough to build the section. Full-resolution photographs of produced / worn garments can replace or enrich them later.

#### 05 — WORKS IN SPACE & MATTER
A corrected visual selection V3 now exists and is sufficient for V1.

Two confirmed URL Fighters images were removed from this corpus. The large white outdoor sculpture belongs here.

#### 06 — L3XL3
A source archive of 47 viewable images was reduced visually to 10 strong images for V1.

Public naming decided 2026-09-11: **L3XL3** (`LEXILE` dropped). Do not invent character names, dates, costume attributions or production status — those remain open.

#### 07 — SOUND
Sound remains an autonomous SELECTED entry.

Documented Spotify material currently includes:
- `URL Fighters` — album, 2022, 8 tracks, 40:59;
- `Ode à Princeville (En Direct)` — 2022;
- `Poem Mur` — 2023;
- `Machine Bus` — 2024;
- `Adresse Universelle` — single, 2024, 4:00.

The site should behave like an austere listening station, not reproduce Spotify UI. Playback is silent by default and activated explicitly.

#### 08 — EDITIONS & PRINT
A V1 source package now exists with six supplied visuals including the physical cover of `480 DAYS TO BE FAMOUS` and five additional images.

Current visible cover text includes:
- `LA BIBLIOTHÈQUE BLEUE`;
- `a fanzine dedicated to Victor Le de Doisy life`;
- `#1`;
- `480 DAYS TO BE FAMOUS`;
- `PART 1/8 : 1–60`.

Keep La Bibliothèque bleue, How / 480 Days to Be Famous and FAMOUS distinct until their exact editorial relationship is confirmed.

## ABOUT

`ABOUT` provides trajectory and factual documentation.

V1 should contain:
- concise biography;
- selected chronology only where verified enough;
- education;
- selected exhibitions / performances;
- publications;
- awards;
- press / relevant credits where appropriate;
- contact.

The page should remain factual, concise and readable rather than becoming a long curatorial essay.

The Prix Galeries Lafayette / IFA archive has now been rediscovered and should be documented when the images are supplied / reviewed. Do not foreground it on the homepage.

## PARTICIPATE

`PARTICIPATE` remains a permanent top-level conceptual entry, not a temporary CTA.

Core framing:

> Some works require other people.

V1 structure:
- **OPEN NOW** — The Dinner Project when active;
- **PAST** — only selected historical participatory works that can be presented cleanly on their own, without a dense chronological index behind them (see "INDEX — retired 2026-09-27").

Forms and practical participation instructions belong inside the relevant active project, never as a generic marketing funnel.

## INDEX — retired 2026-09-27

Historical record only. INDEX was validated for a future V2 as a dense, typographic, chronological reserve of the full documented practice (fields: year/date, title, work/corpus type, discipline/medium, context/venue, status; discreet filters; no spreadsheet/admin-dashboard appearance).

Retired along with ACTIONS in the 2026-09-27 architecture decision (see "Retired concepts" above) rather than carried forward as a deferred V2 item. If a chronological reserve is wanted later, it should be proposed as a fresh decision against the current FORM/VOICE/READ/PLACE/ARCHIVE/ABOUT architecture, not resumed from this spec.

## Public naming — DECIDED 2026-09-11

Public identity: **Victor Le**.

`Victor Le de Doisy` remains the full legal name, used where a full name is administratively useful (see contact section below). The site's public-facing identity (header, nav, ABOUT) uses `Victor Le`, set in `content/site.config.ts`.

## Administrative / Legal / Professional contact

Keep artistic and entrepreneurial activities separate.

### Artistic activity

**Victor Le**  
Artist-author — visual arts  
Contact: v@shootme.com  
SIRET: `[TO ADD]`

### Entrepreneurial activity

President — Shoot Me SAS  
SIREN/SIRET: `[TO ADD]`

## Current phase — UPDATED 2026-09-27

The project has moved from initial archive/portfolio architecture toward a clearer presentation of the artistic practice.

### Homepage — DECIDED 2026-09-27, superseding "Homepage focus" (09-26)

The 2026-09-26 idea of a homepage deliberately **narrower** than the full site (hiding URL Fighters, Princeville, Works in Space & Matter, Sound and Editions "below the landing page") is dropped. There is no longer a separate narrower-homepage-vs-deeper-pages split for these five: they were coded as full sections (`UrlFightersSection`, `PrincevilleSection`, `WorksSpaceMatterSection`, `SoundSection`, `EditionsPrintSection`) but sat unused, unreachable from any nav — that gap is what this decision closes.

The homepage is now the full `FORM · VOICE · READ · PLACE · ARCHIVE` sequence, in that order, each a same-page anchor group; `ABOUT` stays a separate route. No content is held back to a deeper page beneath these five groups — depth means richer treatment inside each group (already true of `UrlFightersSection` / `PrincevilleSection` / `WorksSpaceMatterSection`'s fuller layouts versus the old `WorksSection` preview grid), not a second navigation layer beyond it.

- **FORM** — Collections, We Dress You Tonight, The Dinner Project (most concrete / immediately legible: clothes, their activation, the wider social situation built from them).
- **VOICE** — L3XL3 (opera in progress), Sound (discography). Grouped together as the practice's sung/staged/sounded work; L3XL3 keeps major visual presence within this group without acting as the explanation for FORM, PLACE or ARCHIVE.
- **READ** — Editions & Print.
- **PLACE** — URL Fighters, Princeville — kept as continuing corpora, not closed archives.
- **ARCHIVE** — Works in Space & Matter.
- **ABOUT** — factual trajectory, biography, texts, publications, credits and contact; unchanged in content or role.

Current priorities:
1. Maintain navigation around `FORM · VOICE · READ · PLACE · ARCHIVE · ABOUT`.
2. Keep ABOUT concise, factual and artist-focused.
3. Preserve and progressively improve real media, metadata and credits.
4. Let future opera / film development emerge inside VOICE (via L3XL3) without making the site depend on those outcomes.
