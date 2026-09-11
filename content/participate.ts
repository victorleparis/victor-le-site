import type { ParticipatePastEntry } from "./types";

export const participateLine = "Some works require other people.";

// PAST — expanded 2026-09-11 per instruction to include the relational
// acts previously held back for being thinly documented. Framing below
// uses only what CONTENT.md actually states; every open gap is carried
// as an explicit toVerify entry rather than filled in.
export const participatePast: ParticipatePastEntry[] = [
  {
    title: "URL FIGHTERS",
    note: "Protocols built around participation, symbolic protection and assigned URLs — 2015—.",
  },
  {
    title: "PAPER NIGHT PERFORMANCE",
    note: "Fluctuart, Paris — participants dressed in paper costumes, assigned a number and a URL to protect or release.",
    toVerify: ["Exact date (Oct 2021)", "Collaborator credit / spelling"],
  },
  {
    title: "PRINCEVILLE",
    note: "A principality built from acquired URLs, symbolic titles and public space — born 9 February 2018.",
  },
  {
    title: "ADOPTION DE MAURICE RENOMA",
    note: "A relational act in which Victor symbolically adopts designer Maurice Renoma as his son.",
    toVerify: ["Date", "Place", "Exact protocol / title", "Documentation", "Participant / collaborator wording"],
  },
  {
    title: "CHANGE TA DATE D’ANNIVERSAIRE / CHANGE TA DATE DE NAISSANCE",
    note: "A participatory protocol involving the symbolic modification of a birth date.",
    toVerify: ["Official title (both forms appear in archive material)", "Date", "Exact protocol", "Documentation"],
  },
  {
    title: "DON D’UNE PARTICULE DE NOBLESSE",
    note: "A performance / protocol built around a symbolic identity act.",
    toVerify: ["Date", "Exact title", "Rules", "Participants", "Documents / media"],
  },
  {
    title: "DÉCLARATIONS OFFICIELLES D’AMITIÉ",
    note: "A relational protocol formalizing friendship through an official declaration.",
    toVerify: ["Dates", "Exact protocol", "Documents", "Participants", "Media"],
  },
];
