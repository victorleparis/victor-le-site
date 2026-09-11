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

  nav: [
    { label: "SELECTED", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PARTICIPATE", href: "/participate" },
  ],

  // DECIDED 2026-09-11 — see PROJECT.md. "LEXILE" dropped.
  lexileLabel: "L3XL3",

  kotorosColor: "#ff4fa3",

  // Interaction budget — Phase 6 of ROADMAP.md. Flags below gate the
  // behaviours implemented so far so later additions don't require
  // touching this file's shape.
  interaction: {
    floatingVEnabled: true,
    soundToggleEnabled: true,
    draggableWindowEnabled: true,
    kotorosEnabled: true,
    handwritingEnabled: true,
  },
} as const;
