import type { SelectedProject } from "../types";

export const urlFighters: SelectedProject = {
  id: "url-fighters",
  number: "02",
  title: "URL FIGHTERS",
  years: "2015—",
  disciplines: ["Internet", "Performance", "Sound", "Object"],
  layout: "url-fighters",
  toVerify: ["Exact active period", "External archive / site link"],
};

export const urlFightersFraming =
  "Artistic protocols built around URLs and domain names — symbolic protection, participation, objects, performance and network culture. A major historical corpus with several hundred archived images and moving-image material; this entry is a deliberately light edit rather than a full archive migration.";

// No verified external URL for a dedicated URL Fighters site/archive is
// currently documented in the repository. Leaving href null renders the
// link as TO ADD rather than inventing a destination.
export const urlFightersArchiveLink = {
  label: "URL FIGHTERS ARCHIVE",
  href: null as string | null,
};
