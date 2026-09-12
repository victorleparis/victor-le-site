import {
  editionsPrint,
  editionsIntro,
  editionsContinuity,
  editionsCovers,
  editionsProjects,
} from "@/content/selected";
import { listCorpusMedia, pickByName, type MediaFile } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./EditionsPrintSection.module.css";

export function EditionsPrintSection() {
  const files = listCorpusMedia("editions");
  const byFilename = new Map<string, MediaFile>();
  for (const known of pickByName(files, editionsCovers.map((c) => c.filename))) {
    byFilename.set(known.filename.toLowerCase(), known);
  }
  const covers = editionsCovers.map((c) => ({
    ...c,
    file: byFilename.get(c.filename.toLowerCase()),
  }));

  return (
    <section className={styles.section} id={editionsPrint.id}>
      <SectionHeading
        number={editionsPrint.number}
        title={editionsPrint.title}
        years={editionsPrint.years}
        disciplines={editionsPrint.disciplines}
      />
      <p className={styles.intro}>{editionsIntro}</p>
      <p className={styles.intro}>{editionsContinuity}</p>
      <div className={styles.shelf}>
        {covers.map((cover) => (
          <div className={styles.cover} key={cover.filename}>
            <MediaFrame
              src={cover.file?.url}
              alt={`${editionsPrint.title} — ${cover.label}`}
              aspectRatio="3 / 4"
              sizes="(max-width: 780px) 46vw, 22vw"
            />
            <div className={styles.coverCaption}>
              <span className={styles.coverLabel}>{cover.label}</span>
              <span>{cover.note}</span>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.projects}>
        {editionsProjects.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </p>
    </section>
  );
}
