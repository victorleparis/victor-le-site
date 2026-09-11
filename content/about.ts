import type { ChronologyEntry } from "./types";

// CONTENT.md: "working sentence only — not final copy". Kept verbatim,
// not rewritten, per the core rule against inventing content.
export const bioWorking =
  "Victor Le is an artist and designer based in Paris. His work moves between visual art, fashion, image, sound and performance. He creates situations, objects, images and sounds, often involving other people.";

export const education = [
  { name: "École Supérieure d’Arts et Médias de Caen (ESAM)" },
  { name: "Haute École d’Art et de Design de Genève (HEAD)" },
  { name: "Académie Royale des Beaux-Arts de Bruxelles" },
  { name: "La Fabrique de la Danse, Paris", note: "choreographic training / diploma wording TO VERIFY" },
];

// A short, high-confidence selection (full title + venue + date + kind
// documented in CONTENT.md) spanning the practice's range. The complete
// chronology belongs to INDEX (V2) — this is deliberately not exhaustive.
export const selectedChronology: ChronologyEntry[] = [
  { venue: "Académie Royale des Beaux-Arts, Bruxelles", date: "Jun 2014", title: "Never Magenta So Good", kind: "" },
  { venue: "ESAM / Beaux-Arts, Caen", date: "Mar 2015", title: "P.S.P.", kind: "Performance" },
  {
    venue: "Artothèque, Caen",
    date: "Apr 2015",
    title: "Festival Court-Circuit de l’ESAM Caen",
    kind: "Performative Installation",
  },
  { venue: "École 42, Paris", date: "May 2015", title: "Galartik x Artistik Rezo", kind: "Performance" },
  { venue: "ESAM / Beaux-Arts, Caen", date: "Jan 2016", title: "O.S.P. x 24ME", kind: "Performance" },
  { venue: "Palais de Tokyo, Paris", date: "Apr 2016", title: "Vision, P.S.P. x O.S.P.", kind: "Performative Installation" },
  { venue: "Centre Pompidou, Paris", date: "Jul 2017", title: "Fred Forest retrospective", kind: "Performance" },
  {
    venue: "Asia Now, Paris",
    date: "Oct 2017",
    title: "P.P.P. — Potion Protocole Protection",
    kind: "Participatory Performance",
  },
  { venue: "Carreau du Temple, Paris", date: "Jun 2018", title: "Ode à Princeville", kind: "Performance" },
  { venue: "Le Reservoir, Paris", date: "Feb 2019", title: "Cabaret Propagande", kind: "Performative Show" },
];

export const publications = [
  { title: "La Bibliothèque bleue", note: "fanzine, 2018–2019" },
  { title: "How to Be Famous in 480 Days", note: "book / edition" },
  { title: "FAMOUS", note: "magazine, 2026—, in development" },
];

export const awards = [
  { title: "Prix Galeries Lafayette — IFA", note: "best garment created in 10 minutes — year TO VERIFY" },
];

export const contact = {
  artistic: {
    name: "Victor Le",
    role: "Artist-author — visual arts",
    siret: "TO ADD",
  },
  entrepreneurial: {
    role: "President — Shoot Me SAS",
    siren: "TO ADD",
  },
  email: "v@shootme.com",
};
