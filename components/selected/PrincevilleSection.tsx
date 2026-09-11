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
      {image ? (
        <MediaFrame src={image.url} alt={princeville.title} aspectRatio="4 / 3" />
      ) : (
        <div />
      )}
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
        <a href={princevilleVideoUrl} target="_blank" rel="noreferrer" className={styles.videoLink}>
          WATCH AT PRINCEVILLE.FR →
        </a>
      </div>
    </section>
  );
}
