/**
 * Site-wide configuration and open decisions.
 *
 * PROJECT.md keeps public naming and the L3XL3/LEXILE spelling explicitly
 * open. This file is the single place those defaults live so they can be
 * changed later without touching component code (per ROADMAP.md:
 * "implementation must make the name easy to change globally").
 *
 * These are reversible technical defaults, not naming decisions.
 */

export const siteConfig = {
  // Working default only — PROJECT.md keeps this open (Victor Le /
  // Victor Le de Doisy / hybrid). Change here, everywhere updates.
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

  // L3XL3 / LEXILE relationship and exact spelling remain open
  // (AGENTS.md). Always display both forms together until resolved.
  lexileLabel: "L3XL3 / LEXILE",

  kotorosColor: "#ff4fa3",

  // Interaction budget — Phase 6 of ROADMAP.md is deliberately deferred.
  // Flags below gate the few conservative behaviours implemented now so
  // later additions don't require touching this file's shape.
  interaction: {
    floatingVEnabled: true,
    soundToggleEnabled: true,
  },
} as const;
