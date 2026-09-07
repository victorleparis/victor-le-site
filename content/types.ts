/**
 * Content data types.
 *
 * A shared `Project` shape keeps the eight SELECTED entries typed and
 * consistent, but nothing here dictates layout: each entry declares a
 * `layout` id and is rendered by its own bespoke component
 * (see components/selected/*). This keeps composition editorial and
 * asymmetric rather than forcing a single generic card renderer.
 */

export type SelectedLayout =
  | "dinner-project"
  | "url-fighters"
  | "princeville"
  | "collections"
  | "works-space-matter"
  | "l3xl3"
  | "sound"
  | "editions-print";

export interface ExternalLink {
  label: string;
  href: string | null; // null = documented as existing but URL not yet verified (TO ADD)
}

export interface SelectedProject {
  id: string;
  number: string;
  title: string;
  years?: string;
  disciplines: string[];
  layout: SelectedLayout;
  toVerify?: string[];
}

export interface SoundRelease {
  title: string;
  year: string;
  kind: "album" | "single";
  duration?: string;
  trackCount?: number;
  tracks?: { title: string; duration: string }[];
}

export interface ChronologyEntry {
  venue: string;
  date: string;
  title: string;
  kind: string;
}

export interface ParticipatePastEntry {
  title: string;
  note: string;
  toVerify?: string[];
}
