import { l3xl3 } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./L3xl3Section.module.css";

const MAX_IMAGES = 10;

export function L3xl3Section() {
  const files = listCorpusMedia("l3xl3").slice(0, MAX_IMAGES);
  const slots = files.length > 0 ? files : Array.from({ length: 5 }, () => null);

  return (
    <section className={styles.section} id={l3xl3.id}>
      <SectionHeading number={l3xl3.number} title={l3xl3.title} disciplines={l3xl3.disciplines} />
      <div className={styles.grid}>
        {slots.map((file, i) => (
          <MediaFrame
            key={file ? file.filename : i}
            src={file?.url}
            alt={l3xl3.title}
            aspectRatio="3 / 4"
            sizes="(max-width: 780px) 33vw, 20vw"
            placeholderLabel="TO ADD"
          />
        ))}
      </div>
    </section>
  );
}
