import { urlFighters, urlFightersFraming, urlFightersArchiveLink } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./UrlFightersSection.module.css";

export function UrlFightersSection() {
  const files = listCorpusMedia("url-fighters");
  const [iconic, secondary] = files;

  return (
    <section className={styles.section} id={urlFighters.id}>
      <div className={styles.images}>
        <MediaFrame
          src={iconic?.url}
          alt={urlFighters.title}
          aspectRatio="4 / 5"
          placeholderLabel="ICONIC IMAGE — TO ADD"
        />
        {secondary && (
          <MediaFrame src={secondary.url} alt={urlFighters.title} aspectRatio="4 / 5" sizes="40vw" />
        )}
      </div>
      <div className={styles.text}>
        <SectionHeading
          number={urlFighters.number}
          title={urlFighters.title}
          years={urlFighters.years}
          disciplines={urlFighters.disciplines}
        />
        <p className={styles.framing}>{urlFightersFraming}</p>
        {urlFightersArchiveLink.href ? (
          <a
            href={urlFightersArchiveLink.href}
            className={`${styles.link} ${styles.linkActive}`}
            target="_blank"
            rel="noreferrer"
          >
            {urlFightersArchiveLink.label} →
          </a>
        ) : (
          <span className={`${styles.link} ${styles.linkPending}`}>
            {urlFightersArchiveLink.label} — TO ADD
          </span>
        )}
      </div>
    </section>
  );
}
