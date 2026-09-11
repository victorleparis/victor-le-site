import type { Metadata } from "next";
import Link from "next/link";
import { participateLine, participatePast } from "@/content/participate";
import { siteConfig } from "@/content/site.config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Participate — ${siteConfig.publicName}`,
};

export default function ParticipatePage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.line}>{participateLine}</h1>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>OPEN NOW</h2>
        <div className={styles.openCard}>
          <span className={styles.openTitle}>THE DINNER PROJECT</span>
          <Link href="/#dinner-project" className={styles.openLink}>
            READ MORE →
          </Link>
        </div>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>PAST</h2>
        {participatePast.map((entry) => (
          <div key={entry.title} className={styles.pastEntry}>
            <div className={styles.pastTitle}>{entry.title}</div>
            <p className={styles.pastNote}>{entry.note}</p>
            {entry.toVerify && (
              <p className={styles.pastToVerify}>TO VERIFY — {entry.toVerify.join(" · ")}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
