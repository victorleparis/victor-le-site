import { princeville, princevilleVideoUrl, princevilleText } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./PrincevilleSection.module.css";

export function PrincevilleSection() {
  const files = listCorpusMedia("princeville");
  const image = files[0] ?? null;

  return (
    <section className={styles.section} id={princeville.id}>
      <div className={styles.media}>
        {image && <MediaFrame src={image.url} alt={princeville.title} aspectRatio="4 / 3" />}
        <a href={princevilleVideoUrl} target="_blank" rel="noreferrer" className={styles.videoCard}>
          <span className={styles.videoLabel}>WATCH AT PRINCEVILLE.FR →</span>
        </a>
      </div>
      <div className={styles.text}>
        <SectionHeading
          number={princeville.number}
          title={princeville.title}
          years={princeville.years}
          disciplines={princeville.disciplines}
        />
        {princevilleText.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
