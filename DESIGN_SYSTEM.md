# DESIGN SYSTEM

This file is the source of truth for the website's visual direction and interaction principles.

## Identity

**VICTOR LE**  
**ARTIST & DESIGNER**  
Paris

Visual Art · Fashion · Image · Sound · Performance

The website is not a conventional portfolio. It should feel like a personal magazine, an artist archive, an interactive space and a living digital studio.

The intended feeling is not “Victor Le has a nice portfolio” but “I entered Victor Le's world.”

## Core principle

- **Structure = cold**
- **Content = alive**
- **Kotoros = pink + rare**
- **Interaction = strange**
- **Humour = deadpan**
- **Absurdity = one at a time**
- **Flash = behaviour, not look**

Global ratio: **90% order / 10% accident**.

The artworks are already visually complex. The interface should remain calmer than the work.

## Visual direction

Contemporary editorial system influenced by:
- independent fashion and culture magazines;
- contemporary art catalogues;
- Swiss editorial grids;
- early-2000s experimental websites;
- Flash-era interaction logic.

Do not imitate an existing magazine. Do not create a fake-retro website. Do not create a chaotic collage.

### Background

Warm off-white / paper-like surface, around `#F5F5F2` to `#F7F6F1`.

Subtle paper texture is acceptable, but very light.

### Typography

Primary type: neutral, radical grotesque sans-serif. Direction: Neue Haas Grotesk / Univers / Suisse / Helvetica Neue or equivalent.

Metadata: monospace for time, dates, project numbers, categories and technical labels.

Handwriting: only Victor's real scanned handwriting. Never use a fake handwriting font. Use sparingly.

## Header and navigation — VALIDATED 2026-09-07

Stable identity block across the website, adaptable responsively:

**VICTOR LE**  
**ARTIST & DESIGNER**  
`PARIS — live time`

Visual Art · Fashion · Image · Sound · Performance

Primary navigation:

`SELECTED · INDEX · ABOUT · PARTICIPATE`

The four terms express four distinct relationships to the work:
- **SELECTED — look**
- **INDEX — search**
- **ABOUT — understand**
- **PARTICIPATE — enter**

`SELECTED` is the homepage by default. Do not add a decorative landing page or a redundant `WORK` layer before the work.

Sound control: `SOUND ○`

The homepage should not contain a long explanatory paragraph.

## SELECTED / Homepage logic

Works come first. Disciplines are metadata attached to each work rather than rigid navigation silos.

The homepage should present approximately 7–9 curated entries, not the complete archive.

Do not give every entry the same visual weight. A multi-year corpus, a continuous studio practice and an individual protocol are not equivalent units. Use editorial hierarchy, scale, pacing, typography and image treatment to communicate their different status without exposing an academic taxonomy.

Avoid identical SaaS-style cards and conventional portfolio grids. Think of `SELECTED` as an editorial sequence or exhibition rather than a catalogue.

The disciplines may appear as quiet metadata, for example `Performance · Internet · Participation` or `Painting · Object`, but not as the main navigation system.

### SELECTED V2 — WORKING VISUAL REFERENCE — 2026-09-07

Current eight-sequence reference:

1. **THE DINNER PROJECT**
2. **URL FIGHTERS**
3. **PRINCEVILLE**
4. **COLLECTIONS**
5. **WORKS IN SPACE & MATTER**
6. **LEXILE**
7. **SOUND**
8. **EDITIONS & PRINT**

This sequence is a working curatorial reference. Real media must now test it. Do not invent titles, dates, materials, track names, counts or credits merely to make the wireframe look complete.

Institution names, awards and technical counts should not be foregrounded on the homepage. Let the work strike before institutional validation; verified detail belongs deeper in project pages, `INDEX` and `ABOUT`.

Working wireframe:

```text
[ FIXED HEADER ]

VICTOR LE                                                    PARIS — live time
ARTIST & DESIGNER                                                    SOUND ○
Visual Art · Fashion · Image · Sound · Performance · Protocol

SELECTED          INDEX          ABOUT          PARTICIPATE
─────────────────────────────────────────────────────────────────────────────

01 — THE DINNER PROJECT (2026—)
Performance · Food · Fashion · Photography · Film · Sound

┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│              [ LARGE IMAGE / VIDEO: TABLE, FACE, GARMENT ]                │
│                                                                           │
│   "I invite 1–3 strangers for lunch or dinner.                            │
│    I cook. They wear my clothes. I photograph them."                      │
│                                                                           │
│                                                   OPEN — PARTICIPATE →    │
└───────────────────────────────────────────────────────────────────────────┘

─────────────────────────────────────────────────────────────────────────────

02 — URL FIGHTERS (2015—)              │  03 — PRINCEVILLE (2018—)
Internet · Performance · Sound · Object │  Territory · Performance · Protocol
                                       │
[ RAW IMAGE / PERFORMANCE ]            │  [ IMAGE / TERRITORY ]
                                       │
[ IMAGE / OBJECT ]                     │  [ DOCUMENT / MAP ]

─────────────────────────────────────────────────────────────────────────────

04 — COLLECTIONS
Fashion · Clothing · Silhouette · Transformation

┌──────────────────────────────┐      ┌────────────────────────────────────┐
│        [ GUARDIAN ]          │      │       [ SAGEUM B / ST MICHEL ]     │
└──────────────────────────────┘      └────────────────────────────────────┘

Guardian
Sageum B
St Michel
[ other collections / pieces to inventory ]

─────────────────────────────────────────────────────────────────────────────

05 — WORKS IN SPACE & MATTER
Painting · Sculpture · Drawing · Installation · Object

             [ LARGE WORK ]

 [ WORK ]                         [ WORK ]

                         [ SCULPTURE / INSTALLATION ]

        [ DRAWING ]

                 — very little or no text —

─────────────────────────────────────────────────────────────────────────────

06 — LEXILE                            │  07 — SOUND
Opera · Costume · Music · Stage        │  Piano · Electropunk · Performance Sound
                                       │
[ IMAGE / COSTUME / STAGE ]            │  PIANO
                                       │  ─────────────────────── ▶
                                       │
                                       │  ELECTROPUNK
                                       │  ─────────────────────── ▶
                                       │
                                       │  PERFORMANCE SOUND
                                       │  ─────────────────────── ▶

─────────────────────────────────────────────────────────────────────────────

08 — EDITIONS & PRINT (2018—)
Fanzine · Book · Magazine

[ LA BIBLIOTHÈQUE BLEUE ]     [ HOW TO BE FAMOUS ]     [ FAMOUS ]

        [ SPREAD ]                     [ COVER ]          [ SPREAD ]

─────────────────────────────────────────────────────────────────────────────

INDEX
2014—2026+

                                                   EXPLORE FULL INDEX →
```

## INDEX

`INDEX` is the systematic reserve behind the edited homepage.

Visual behaviour:
- dense but calm typography;
- chronological by default;
- strong alignment;
- minimal imagery at rest;
- optional image/media preview on hover, focus or selection where appropriate;
- discreet filters rather than a dashboard-like filter interface.

Possible columns:
`YEAR` · `TITLE` · `MEDIUM / DISCIPLINE` · `CONTEXT / VENUE`

The index should communicate volume and continuity without looking like a CV spreadsheet or database administration interface.

Internal distinctions such as corpus, work, protocol, publication, archive and current project may structure the data model but should remain largely invisible to visitors.

## ABOUT

`ABOUT` is the factual structural layer of the site.

It may contain:
- concise biography;
- selected chronology;
- education;
- selected exhibitions and performances;
- publications / editions;
- awards;
- press / credits where appropriate;
- contact.

The tone should be dry, precise and readable. Avoid curatorial over-explanation.

## PARTICIPATE

`PARTICIPATE` is a permanent conceptual navigation entry and a distinct regime of encountering the work.

Core line:

**Some works require other people.**

It is not a marketing CTA and must never visually behave like one.

Recommended page rhythm:

`PARTICIPATE`

`Some works require other people.`

`OPEN NOW`
- current participatory work, for example The Dinner Project

`PAST`
- selected historical participatory works and protocols, potentially including URL Fighters, Paper Night, Princeville, Change Your Birthday and other documented works

If nothing is currently active, the absence may be stated plainly:

`NO OPEN PROTOCOL AT THE MOMENT.`

Past participatory works remain visible beneath it.

Application forms and practical participation instructions appear only after entering the relevant active work. Do not turn the main `PARTICIPATE` page into a signup form, casting page or startup funnel.

The presence of `PARTICIPATE` beside the more conventional `SELECTED · INDEX · ABOUT` should itself feel like a small conceptual anomaly: the visitor realizes that the work may be entered, not only viewed.

## URL Fighters presentation

URL Fighters is a major corpus with substantial documentary volume. On Victor's site it should be edited, not exhaustively dumped.

The main project page may use:
- concise framing / manifesto;
- a small selection of iconic images;
- one or a few key moving-image works;
- selected performances / institutional contexts;
- selected protocols, objects and sound;
- a link to a dedicated deep archive if one is created later.

The main site remains the curatorial entry point even if URL Fighters eventually receives an independent archive or microsite.

## Kotoros

Kotoros is Victor's hand-drawn personal sign. It is not a conventional logo.

### Color rule

**Kotoros is pink.**

Suggested direction: `#FF4FA3`, to be tuned if necessary.

Never use it as monumental red/vermilion, aggressive black or an occult-looking emblem.

### Usage rule

Rare. Maximum one strong occurrence per viewport.

Possible behaviours:
- partially hidden behind an image;
- emerging from an edge;
- cropped;
- transparent;
- drawn progressively;
- tiny;
- appearing only on some visits.

Desired reaction: “What is that?” rather than “That is his logo.”

## Interaction states

### State 1 — Arrival / The Archive

The site begins highly ordered and almost institutional.

- clean grid;
- strong alignment;
- generous whitespace;
- no open floating windows;
- no handwriting;
- no Kotoros;
- no visual glitch;
- no absurdity.

First impression: **serious artist archive**.

### State 2 — First interaction / The Human Trace

Triggered by click, touch or sound activation.

Only one rupture appears.

Possible example: a small draggable media window such as `EP 001 — PREVIEW`, one handwritten note such as `ep.001 / Paris 2026`, or the sound control changing from `SOUND ○` to `SOUND ●`.

Approximately 90% of the interface remains intact.

### State 3 — After interaction / Victor's Studio

The interface gradually acquires traces of use.

Possible behaviours:
- one floating window remains where the user placed it;
- one image shifts slightly outside the grid;
- one Kotoros appears;
- one dry absurd message appears;
- a sound fragment leaves a subtle visual trace.

The page must never become a random collage.

## Absurdity system

Absurdity is primarily textual and behavioural, not decorative.

**Rule: one absurd event at a time.**

Examples that fit the tone:
- `PARIS — STILL HERE`
- `PLEASE DON'T MOVE THIS WINDOW`
- `WINDOW_003_DO_NOT_MOVE`
- `THIS IMAGE IS TIRED.`
- a temporary wrong classification that corrects itself;
- a tiny alignment refusal or 10–15px shift.

These are examples, not a checklist. Use only a few across the entire site.

Humour should be dry, understated and almost bureaucratic. Never meme-like, cartoonish or “quirky UX”.

## Flash heritage

Flash influence must come from behaviour:
- draggable windows;
- overlapping media;
- unexpected states;
- nonlinear exploration;
- sound integration;
- responsive visual accidents.

Avoid retro loading screens, fake pixel graphics, nostalgia filters and imitation of old browser UI.

## Sound

Sound is an artistic medium, not interface decoration.

Default: `SOUND ○` and silent.

Only activate after explicit user action. After activation: `SOUND ●`, optionally with a subtle waveform.

Possible content: compositions, piano, electropunk / URL Fighters-related music, performance sound, field recordings, sound fragments, sound for film and Dinner Project audio.

Never autoplay loud sound.

## Mobile

Mobile is not a reduced desktop layout. It should feel like a vertical editorial archive that gradually becomes strange.

Start extremely clean. Preserve strong crops, clear project numbers, simple metadata and calm vertical rhythm.

The four navigation concepts must remain understandable on mobile without becoming a large persistent menu. `PARTICIPATE` remains accessible but is not styled as a marketing CTA.

Kotoros should appear even more rarely on mobile.

The same three states apply: Archive → Human Trace → Victor's Studio.

## What to avoid

- discipline-based primary navigation (`PERFORMANCE / FASHION / PAINTING / ...`);
- flat grids that imply every work has equal importance;
- black luxury-fashion default aesthetic;
- gothic imagery;
- aggressive red Kotoros;
- oversized repeated Kotoros;
- too many annotations;
- multiple jokes/effects at once;
- excessive collage;
- noisy navigation;
- rounded SaaS components;
- Behance-style portfolio patterns;
- generic creative-director portfolio aesthetics;
- fake retro Flash design;
- automatic looping chaos;
- explanatory text overload;
- turning `PARTICIPATE` into a conversion funnel.

## Final experience

0 seconds: **This is a serious artist's archive.**  
First interaction: **Something happened.**  
30 seconds: **This interface has a personality.**  
2 minutes: **This is Victor's studio.**  
After several projects: **This could only belong to Victor Le.**

## Final formula

**SELECTED = LOOK**  
**INDEX = SEARCH**  
**ABOUT = UNDERSTAND**  
**PARTICIPATE = ENTER**  
**ORDER = DEFAULT**  
**ARTWORK = VISUAL COMPLEXITY**  
**KOTOROS = PINK + RARE**  
**HANDWRITING = HUMAN TRACE**  
**SOUND = REAL MEDIUM**  
**FLASH = BEHAVIOUR**  
**ABSURDITY = RARE**  
**HUMOUR = DEADPAN**  
**VISITOR = CAUSES THE DISORDER**

The website starts as an archive and gradually becomes Victor's studio.
