import type { SelectedProject } from "../types";

export const collections: SelectedProject = {
  id: "collections",
  number: "04",
  title: "COLLECTIONS",
  disciplines: ["Fashion", "Clothing", "Silhouette", "Transformation"],
  layout: "collections",
  toVerify: [
    "Dates for Guardian, Sageum B, St Michel",
    "Which source boards correspond to which named collection",
  ],
};

// Named working references from CONTENT.md. Deliberately not mapped
// 1:1 to specific source-board images — that attribution is not yet
// confirmed and must not be invented.
export const collectionsNames = [
  "Guardian",
  "Sageum B",
  "St Michel",
  "additional silhouettes / pieces to inventory",
];
