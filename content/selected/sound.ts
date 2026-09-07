import type { SelectedProject, SoundRelease } from "../types";

export const sound: SelectedProject = {
  id: "sound",
  number: "07",
  title: "SOUND",
  disciplines: ["Piano", "Electropunk", "Performance Sound"],
  layout: "sound",
  toVerify: ["Full discography", "Verified platform links / embed IDs", "Original cover artwork"],
};

// Documented in MEDIA_STATUS.md from supplied Spotify screenshots.
// Treated as documentation, not desired UI — no playback source is
// wired up yet because no verified embed/link exists.
export const soundReleases: SoundRelease[] = [
  {
    title: "URL Fighters",
    year: "2022",
    kind: "album",
    duration: "40:59",
    trackCount: 8,
    tracks: [
      { title: "Ce Soir", duration: "2:08" },
      { title: "Mobiliactif.Fr", duration: "8:43" },
      { title: "Visioquote.Com", duration: "6:04" },
      { title: "In the Sunshine I Feel the Love", duration: "3:46" },
      { title: "Drivoo.Fr", duration: "5:54" },
      { title: "Diveboard.Com", duration: "5:25" },
      { title: "Arrières Pensées", duration: "4:17" },
      { title: "Prise De Sang", duration: "4:40" },
    ],
  },
  { title: "Ode à Princeville (En Direct)", year: "2022", kind: "single" },
  { title: "Poem Mur", year: "2023", kind: "single" },
  { title: "Machine Bus", year: "2024", kind: "single" },
  { title: "Adresse Universelle", year: "2024", kind: "single", duration: "4:00" },
];
