import { l3xl3 } from "@/content/selected";
import { fileDimensions, listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./L3xl3Section.module.css";

const MAX_IMAGES = 8;

export function L3xl3Section() {
  const files = listCorpusMedia("l3xl3").slice(0, MAX_IMAGES);
  const slots = files.length > 0 ? files : Array.from({ length: 5 }, () => null);

  return (
    <section className={styles.section} id={l3xl3.id}>
      <SectionHeading number={l3xl3.number} title={l3xl3.title} disciplines={l3xl3.disciplines} />
      <div className={styles.grid}>
        {slots.map((file, i) => {
          const dimensions = file ? fileDimensions(file) : null;
          const aspectRatio = dimensions ? `${dimensions.width} / ${dimensions.height}` : "3 / 4";

          return (
            <div className={i === 0 ? styles.hero : styles.item} key={file ? file.filename : i}>
              <MediaFrame
                src={file?.url}
                alt={`${l3xl3.title} — visual ${i + 1}`}
                aspectRatio={aspectRatio}
                sizes={i === 0 ? "(max-width: 780px) 100vw, 60vw" : "(max-width: 780px) 50vw, 24vw"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
