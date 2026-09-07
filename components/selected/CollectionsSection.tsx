import { collections, collectionsNames } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./CollectionsSection.module.css";

export function CollectionsSection() {
  const files = listCorpusMedia("collections").slice(0, 5);

  return (
    <section className={styles.section} id={collections.id}>
      <SectionHeading
        number={collections.number}
        title={collections.title}
        disciplines={collections.disciplines}
      />
      <div className={styles.boards}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={i === 0 ? styles.boardWide : undefined}>
            <MediaFrame
              src={files[i]?.url}
              alt={collections.title}
              aspectRatio={i === 0 ? "3 / 2" : "3 / 4"}
              sizes="(max-width: 780px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
      <p className={styles.names}>
        {collectionsNames.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </p>
    </section>
  );
}
