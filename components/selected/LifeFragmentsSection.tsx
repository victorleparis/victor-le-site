import styles from "./LifeFragmentsSection.module.css";
import { withBasePath } from "@/lib/base-path";

const archiveUrl = "https://life-fragments-victor-le-de-doisy.fuzzybox4.chatgpt.site/";

export function LifeFragmentsSection() {
  return (
    <section className={styles.section} id="life-fragments" aria-labelledby="life-fragments-title">
      <div className={styles.meta}><span>10 — PHOTOGRAPHIC DIARY</span><span>2026—</span></div>
      <h2 className={styles.title} id="life-fragments-title">LIFE<br />FRAGMENTS</h2>
      <p className={styles.intro}>A photographic diary of everyday life.<br />People, places, encounters and accidents.<br />An ongoing archive of moments, without hierarchy.</p>
      <figure className={styles.hero}>
        {/* First verified image; the remaining curated photographs will be added after web-ready exports. */}
        <img src={withBasePath("/media/life-fragments/01-L1130546.jpg")} alt="Life Fragments — photographic diary, day 178" loading="lazy" />
        <figcaption>日178 / L1130546</figcaption>
      </figure>
      <a className={styles.link} href={archiveUrl} target="_blank" rel="noopener noreferrer">EXPLORE THE COMPLETE ARCHIVE ↗</a>
    </section>
  );
}
