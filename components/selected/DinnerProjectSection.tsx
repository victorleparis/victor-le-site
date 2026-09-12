import { dinnerProject, dinnerProjectPrinciple } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { contact } from "@/content/about";
import { siteConfig } from "@/content/site.config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { TiredImageNote } from "@/components/interaction/TiredImageNote";
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
          {siteConfig.interaction.tiredImageEnabled && <TiredImageNote />}
        </div>
        <p className={styles.principle}>
          {dinnerProjectPrinciple.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <div className={styles.footerRow}>
          <span className={styles.openLabel}>OPEN — TO TAKE PART, WRITE TO</span>
          <a href={`mailto:${contact.email}`} className={styles.participateLink}>
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
