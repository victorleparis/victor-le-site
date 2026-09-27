/**
 * Site-wide configuration.
 *
 * Public naming and the L3XL3/LEXILE spelling were decided 2026-09-11
 * (see PROJECT.md). This file is the single place those values live so
 * they stay easy to change globally if revisited later.
 */

export const siteConfig = {
  // DECIDED 2026-09-11 — see PROJECT.md "Public naming".
  publicName: "Victor Le",
  fullName: "Victor Le de Doisy",

  role: "ARTIST & DESIGNER",
  location: "Paris",
  disciplines: ["Visual Art", "Fashion", "Image", "Sound", "Performance"],

  // Architecture DECIDED 2026-09-27 (see PROJECT.md "Long-term public
  // architecture"): FORM · VOICE · READ · PLACE · ARCHIVE · ABOUT,
  // replacing the interim L3XL3 · WORKS · ABOUT nav (itself a same-day
  // reduction of the 2026-09-26 L3XL3 · ACTIONS · WORKS · INDEX · ABOUT,
  // whose ACTIONS/INDEX anchors were dropped for having no matching
  // homepage section). Each of the five homepage labels below is a
  // same-page anchor group in app/page.tsx; ABOUT stays a separate route.
  nav: [
    { label: "FORM", href: "/#form" },
    { label: "VOICE", href: "/#voice" },
    { label: "READ", href: "/#read" },
    { label: "PLACE", href: "/#place" },
    { label: "ARCHIVE", href: "/#archive" },
    { label: "ABOUT", href: "/about" },
  ],

  // DECIDED 2026-09-11 — see PROJECT.md. "LEXILE" dropped.
  lexileLabel: "L3XL3",

  kotorosColor: "#ff4fa3",

  // Interaction budget — Phase 6 of ROADMAP.md. Flags below gate the
  // behaviours implemented so far so later additions don't require
  // touching this file's shape.
  interaction: {
    floatingVEnabled: true,
    soundToggleEnabled: false,
    draggableWindowEnabled: true,
    kotorosEnabled: true,
    handwritingEnabled: true,
    tiredImageEnabled: true,
  },
} as const;
