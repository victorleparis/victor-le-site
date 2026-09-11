import type { SelectedProject } from "../types";

export const editionsPrint: SelectedProject = {
  id: "editions-print",
  number: "08",
  title: "EDITIONS & PRINT",
  years: "2018—",
  disciplines: ["Fanzine", "Book", "Magazine"],
  layout: "editions-print",
  toVerify: [
    "Relationship between La Bibliothèque bleue and How to Be Famous in 480 Days",
    "FAMOUS issue structure and launch chronology",
  ],
};

export const editionsIntro =
  "LA BIBLIOTHÈQUE BLEUE — a fanzine dedicated to Victor Le de Doisy life.";

// Real covers, filed under public/media/editions/. Each label/date below is
// transcribed directly from what is printed on that cover — not a claim
// about how the issues relate to one another (see toVerify above).
export const editionsCovers = [
  {
    filename: "CamScanner 11-09-2026 18.06(1)_1.jpg",
    label: "N°1",
    note: "Nov. 2018 — Les Beaux-Arts de Paris x La Galerie",
  },
  {
    filename: "IMG_7678.JPG",
    label: "N°2",
    note: "Dec. 2018 — Jan. 2019",
  },
  {
    filename: "CamScanner 11-09-2026 18.06_1.jpg",
    label: "N°3",
    note: "Jan. — Feb. 2019",
  },
  {
    filename: "IMG_7679.JPG",
    label: "#1",
    note: "480 Days to Be Famous — Part 1/8 : 1–60",
  },
];

export const editionsProjects = ["La Bibliothèque bleue", "How to Be Famous in 480 Days", "FAMOUS"];
