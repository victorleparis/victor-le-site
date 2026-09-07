import { editionsPrint, editionsCoverText, editionsProjects } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./EditionsPrintSection.module.css";

export function EditionsPrintSection() {
  const files = listCorpusMedia("editions").slice(0, 6);
  const slots = files.length > 0 ? files : Array.from({ length: 3 }, () => null);

  return (
    <section className={styles.section} id={editionsPrint.id}>
      <SectionHeading
        number={editionsPrint.number}
        title={editionsPrint.title}
        years={editionsPrint.years}
        disciplines={editionsPrint.disciplines}
      />
      <div className={styles.body}>
        <div className={styles.coverText}>
          <span className={styles.coverTextTitle}>{editionsCoverText[0]}</span>
          {editionsCoverText.slice(1).map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div className={styles.gallery}>
          {slots.map((file, i) => (
            <MediaFrame
              key={file ? file.filename : i}
              src={file?.url}
              alt={editionsPrint.title}
              aspectRatio="3 / 4"
              sizes="(max-width: 780px) 50vw, 22vw"
            />
          ))}
        </div>
      </div>
      <p className={styles.projects}>
        {editionsProjects.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </p>
    </section>
  );
}
