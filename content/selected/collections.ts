import type { SelectedProject } from "../types";

export const collections: SelectedProject = {
  id: "collections",
  number: "04",
  title: "COLLECTIONS",
  disciplines: ["Fashion", "Clothing", "Silhouette", "Transformation"],
  layout: "collections",
  toVerify: ["Dates for Guardian, Sageum B, St Michel, Sainte"],
};

// Working curatorial framing, approved 2026-09-12 — describes the corpus
// itself, not the site's editorial process (see AGENTS.md core rule).
export const collectionsIntro =
  "The collections are conceived and constructed as complete silhouettes, with clothing treated as sculpture, transformation and, at times, performance.";

// Named working references from CONTENT.md, plus "Sainte" — a name printed
// directly on its own boards below and not yet documented elsewhere. Only
// real collection names belong here — internal inventory notes are tracked
// in CONTENT.md, not shown to visitors.
export const collectionsNames = ["Guardian", "Sageum B", "St Michel", "Sainte"];

// Boards whose own printed caption names the collection they belong to —
// grouped for display on that basis rather than guessed at. Filenames are
// matched against public/media/collections/ (see lib/media.ts).
export const collectionsBoards = [
  {
    name: "St Michel",
    filenames: ["Saint Michel.png", "st michel.png", "st michel homme.png"],
  },
  {
    name: "Sainte",
    filenames: ["Sainte 1.jpg", "Sainte 2.png", "sainte6.png"],
  },
];
