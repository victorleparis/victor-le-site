import type { ParticipatePastEntry } from "./types";

export const participateLine = "Some works require other people.";

// PAST is limited to protocols documented well enough to present cleanly
// without fabricating framing. CONTENT.md lists several relational acts
// (Adoption de Maurice Renoma, Change ta date d'anniversaire, Don d'une
// particule de noblesse, Déclarations officielles d'amitié) that are, by
// its own account, almost entirely TO VERIFY (no confirmed date, exact
// title or protocol) — including them here would require inventing
// framing, so they are left out of V1 and reserved for INDEX / a later
// PARTICIPATE pass once documented.
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
];
