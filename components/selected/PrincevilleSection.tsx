import { princeville, princevilleVideoUrl, princevilleText } from "@/content/selected";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./PrincevilleSection.module.css";

export function PrincevilleSection() {
  return (
    <section className={styles.section} id={princeville.id}>
      <a href={princevilleVideoUrl} target="_blank" rel="noreferrer" className={styles.videoCard}>
        <span className={styles.videoLabel}>WATCH AT PRINCEVILLE.FR →</span>
      </a>
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
