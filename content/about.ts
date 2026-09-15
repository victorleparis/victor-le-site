import type { ChronologyEntry } from "./types";

// Revised and approved 2026-09-12, replacing the single working sentence
// CONTENT.md previously marked "not final copy". Grounded only in facts
// and conceptual threads already documented in CONTENT.md (URL Fighters,
// Princeville, La Bibliothèque Bleue, participatory acts) — no invented
// dates, motivations or genealogy.
export const bioWorking = [
  "Victor Le is an artist and designer based in Paris. His practice moves across visual art, fashion, image, sound and performance, and frequently takes the form of situations, protocols and constructed systems.",
  "Since 2015, his projects have included URL Fighters, a body of works organised around web addresses and forms of symbolic ownership; Princeville, a declared territory in Paris; publications and dinners developed through La Bibliothèque Bleue; and a series of participatory acts involving identity, social conventions and interpersonal relations.",
  "More recent work brings these approaches together through clothing, image, sound, hospitality and performance.",
];

// SYMBOLIC SYSTEM — approved 2026-09-15. A public editorial element on
// ABOUT: several symbolic classification systems applied to Victor and
// reduced to raw data (a symbol and a verb), functioning as one more
// identity-classification device alongside the protocols, status
// transformations and constructed systems already present in the work.
// Not an astrological, numerological or tarot explanation of Victor's
// practice, and not framed as one — no birth date, no system names, no
// esoteric framing. Data supplied directly by Victor; nothing here is
// inferred or invented.
export const symbolicSystem = [
  { symbol: "SCORPIO", verb: "TRANSFORM" },
  { symbol: "WATER OX", verb: "PERSIST / ADAPT" },
  { symbol: "SAGITTARIUS", verb: "EXPLORE" },
  { symbol: "MULA", verb: "GO TO THE ROOT" },
  { symbol: "VI / THE LOVERS", verb: "CHOOSE" },
  { symbol: "VICTOR", verb: "CONQUER / REFUSE" },
];

export const symbolicSystemOutput = "ROOT → CHOOSE → REFUSE → TRANSFORM → CREATE → PERSIST";

export const education = [
  { name: "École Supérieure d’Arts et Médias de Caen (ESAM)" },
  { name: "Haute École d’Art et de Design de Genève (HEAD)" },
  { name: "Académie Royale des Beaux-Arts de Bruxelles" },
  { name: "La Fabrique de la Danse", note: "choreographer incubator, Paris" },
  { name: "International Fashion Academy Paris (IFA)", note: "fashion school" },
  { name: "ETP Japan" },
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

export const awards = [{ title: "Prix Galeries Lafayette — IFA", note: "best garment created in 10 minutes" }];

export const press = [
  {
    title: "Louis Vuitton — Fashion Eye: Paris",
    note: "Photographed by Feng Li",
    cover: "paris-par-feng-li-fashion.avif",
  },
];

// Curated from the 19 Dec 2019 Feng Li shoot (25 frames archived in
// public/media/press-feng-li/) — a small selection rather than the full
// burst, per the same curatorial approach used elsewhere on the site.
export const pressFengLiPicks = [
  "IMG_20191219_192026_658.jpg",
  "IMG_20191219_192037_255.jpg",
  "IMG_20191219_192044_729.jpg",
  "IMG_20191219_192052_408.jpg",
  "IMG_20191219_192059_874.jpg",
  "IMG_20191219_192102_297.jpg",
  "IMG_20191219_192111_781.jpg",
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
