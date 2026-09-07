import Link from "next/link";
import { dinnerProject, dinnerProjectPrinciple } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./DinnerProjectSection.module.css";

export function DinnerProjectSection() {
  const files = listCorpusMedia("dinner-project");
  const hero = files[0] ?? null;

  return (
    <section className={styles.section} id={dinnerProject.id}>
      <SectionHeading
        number={dinnerProject.number}
        title={dinnerProject.title}
        years={dinnerProject.years}
        disciplines={dinnerProject.disciplines}
      />
      <div className={styles.feature}>
        <div className={styles.mediaSlot}>
          <MediaFrame
            src={hero?.url}
            alt={dinnerProject.title}
            aspectRatio="4 / 3"
            placeholderLabel="EPISODE 001 — IN PREPARATION"
          />
        </div>
        <p className={styles.principle}>
          {dinnerProjectPrinciple.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <div className={styles.footerRow}>
          <Link href="/participate" className={styles.participateLink}>
            OPEN — PARTICIPATE →
          </Link>
        </div>
      </div>
    </section>
  );
}
