import { urlFighters, princeville, worksSpaceMatter, worksSpaceMatterHero } from "@/content/selected";
import { listCorpusMedia, pickByName } from "@/lib/media";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./WorksSection.module.css";

/**
 * WORKS — added 2026-09-27, replacing the dead "/#works" nav anchor.
 * Deliberately light: one photo per corpus rather than the fuller
 * legacy SELECTED treatment (see UrlFightersSection / PrincevilleSection
 * / WorksSpaceMatterSection) — those stay as historical/media sources,
 * this is the deeper orientation layer PROJECT.md describes for WORKS.
 */
const entries = [
  {
    slug: "url-fighters",
    title: urlFighters.title,
    years: urlFighters.years,
    disciplines: urlFighters.disciplines,
    pick: (files: ReturnType<typeof listCorpusMedia>) => files[0] ?? null,
  },
  {
    slug: "princeville",
    title: princeville.title,
    years: princeville.years,
    disciplines: princeville.disciplines,
    pick: (files: ReturnType<typeof listCorpusMedia>) => files[0] ?? null,
  },
  {
    slug: "works-space-matter",
    title: worksSpaceMatter.title,
    years: undefined as string | undefined,
    disciplines: worksSpaceMatter.disciplines,
    // Uses the documented hero (MEDIA_STATUS.md) rather than positional
    // first file, since this corpus's alphabetically-first file isn't
    // its curatorial hero.
    pick: (files: ReturnType<typeof listCorpusMedia>) => pickByName(files, worksSpaceMatterHero)[0] ?? files[0] ?? null,
  },
];

export function WorksSection() {
  return (
    <section className={styles.section} id="works">
      <div className={styles.heading}>
        <h2 className={styles.title}>WORKS</h2>
        <span className={`mono ${styles.sub}`}>Parallel and continuing bodies of work</span>
      </div>
      <div className={styles.grid}>
        {entries.map((entry) => {
          const file = entry.pick(listCorpusMedia(entry.slug));
          return (
            // Deliberately not a link: there is no deeper URL Fighters /
            // Princeville / Works in Space & Matter page yet. Adding an
            // href here would just create three more dead links of the
            // kind this section replaces.
            <div key={entry.slug} className={styles.item}>
              <MediaFrame src={file?.url} alt={entry.title} aspectRatio="4 / 5" sizes="(max-width: 780px) 100vw, 33vw" />
              <div className={styles.caption}>
                <span className={styles.itemTitle}>{entry.title}</span>
                {entry.years && <span className={`mono ${styles.itemYears}`}>{entry.years}</span>}
                <span className={`mono ${styles.itemDisciplines}`}>{entry.disciplines.join(" · ")}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
