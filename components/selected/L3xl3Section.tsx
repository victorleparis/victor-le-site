import Image from "next/image";
import { l3xl3 } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./L3xl3Section.module.css";

const MAX_IMAGES = 8;

export function L3xl3Section() {
  const files = listCorpusMedia("l3xl3").slice(0, MAX_IMAGES);
  const duration = Math.max(files.length, 1) * 4.5;

  return (
    <section className={styles.section} id={l3xl3.id}>
      <SectionHeading number={l3xl3.number} title={l3xl3.title} disciplines={l3xl3.disciplines} />

      <div className={styles.intro}>
        <p className={styles.subtitle}>AN OPERA IN PROGRESS</p>
        <p className={styles.note}>Characters enter, disappear and return.</p>
      </div>

      <div className={styles.stage} style={{ "--l3-duration": `${duration}s` } as React.CSSProperties}>
        {files.length > 0 ? (
          files.map((file, i) => (
            <div
              className={styles.slide}
              key={file.filename}
              style={{ "--l3-delay": `${i * 4.5}s` } as React.CSSProperties}
            >
              <Image
                src={file.url}
                alt={`${l3xl3.title} — visual ${i + 1}`}
                fill
                sizes="(max-width: 780px) 100vw, 92vw"
                priority={i === 0}
                className={styles.image}
              />
            </div>
          ))
        ) : (
          <div className={styles.placeholder}>
            <span className="mono">L3XL3 — MEDIA IN PREPARATION</span>
          </div>
        )}

        {files.length > 1 && (
          <div className={styles.collision} aria-hidden="true">
            <Image
              src={files[1].url}
              alt=""
              fill
              sizes="28vw"
              className={styles.collisionImage}
            />
          </div>
        )}

        <div className={styles.stageMeta}>
          <span className="mono">L3XL3</span>
          <span className="mono">OPERA / FASHION / SOUND / STAGE</span>
        </div>
      </div>
    </section>
  );
}
