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

  // Project-first navigation — approved 2026-10-26. Each label matches its section title.
  nav: [
    { label: "WE DRESS YOU TONIGHT", href: "/#we-dress-you-tonight" },
    { label: "LIFE FRAGMENTS", href: "/#life-fragments" },
    { label: "COLLECTIONS", href: "/#collections" },
    { label: "THE DINNER PROJECT", href: "/#dinner-project" },
    { label: "L3XL3", href: "/#l3xl3" },
    { label: "SOUND", href: "/#sound" },
    { label: "EDITIONS & PRINT", href: "/#editions-print" },
    { label: "URL FIGHTERS", href: "/#url-fighters" },
    { label: "PRINCEVILLE", href: "/#princeville" },
    { label: "WORKS IN SPACE & MATTER", href: "/#works-space-matter" },
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
