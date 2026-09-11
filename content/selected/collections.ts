import type { SelectedProject } from "../types";

export const collections: SelectedProject = {
  id: "collections",
  number: "04",
  title: "COLLECTIONS",
  disciplines: ["Fashion", "Clothing", "Silhouette", "Transformation"],
  layout: "collections",
  toVerify: ["Dates for Guardian, Sageum B, St Michel, Sainte"],
};

// Named working references from CONTENT.md, plus "Sainte" — a name printed
// directly on its own boards below and not yet documented elsewhere.
export const collectionsNames = [
  "Guardian",
  "Sageum B",
  "St Michel",
  "Sainte",
  "additional silhouettes / pieces to inventory",
];

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
    filenames: ["Sainte 1.png", "Sainte 2.png", "sainte6.png"],
  },
];
