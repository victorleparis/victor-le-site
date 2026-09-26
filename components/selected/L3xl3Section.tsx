import Image from "next/image";
import { l3xl3 } from "@/content/selected";
import { listCorpusMedia } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./L3xl3Section.module.css";

export function L3xl3Section() {
  const hero = listCorpusMedia("l3xl3")[0];

  return (
    <section className={styles.section} id={l3xl3.id}>
      <SectionHeading number={l3xl3.number} title={l3xl3.title} disciplines={l3xl3.disciplines} />
      <div className={styles.intro}><p className={styles.subtitle}>AN OPERA IN PROGRESS</p></div>
      <div className={styles.stage}>
        {hero ? (
          <Image src={hero.url} alt={l3xl3.title + " — visual"} fill sizes="(max-width: 780px) 100vw, 92vw" className={styles.image} />
        ) : (
          <div className={styles.placeholder}><span className="mono">L3XL3 — MEDIA IN PREPARATION</span></div>
        )}
        <div className={styles.stageMeta}><span className="mono">L3XL3</span><span className="mono">OPERA / FASHION / SOUND / STAGE</span></div>
      </div>
    </section>
  );
}
