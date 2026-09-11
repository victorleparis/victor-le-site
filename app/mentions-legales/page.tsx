import type { Metadata } from "next";
import { legalEntity, hosting } from "@/content/legal";
import { siteConfig } from "@/content/site.config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Mentions légales — ${siteConfig.publicName}`,
};

export default function MentionsLegalesPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Mentions légales</h1>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>ÉDITEUR DU SITE</h2>
        <div className={styles.row}>
          <span>{legalEntity.company}</span>
        </div>
        <div className={styles.row}>
          <span>SIREN</span>
          <span className={styles.rowMeta}>{legalEntity.siren}</span>
        </div>
        <div className={styles.row}>
          <span>SIRET (siège social)</span>
          <span className={styles.rowMeta}>{legalEntity.siret}</span>
        </div>
        <div className={styles.row}>
          <span>TVA intracommunautaire</span>
          <span className={styles.rowMeta}>{legalEntity.vat}</span>
        </div>
        <div className={styles.row}>
          <span>Code NAF</span>
          <span className={styles.rowMeta}>
            {legalEntity.nafCode} — {legalEntity.nafLabel}
          </span>
        </div>
        <div className={styles.row}>
          <span>Immatriculation</span>
          <span className={styles.rowMeta}>{legalEntity.registry}</span>
        </div>
        <div className={styles.row}>
          <span>Directeur de la publication</span>
          <span className={styles.rowMeta}>{legalEntity.publicationDirector}</span>
        </div>
        <div className={styles.row}>
          <span>Contact</span>
          <span className={styles.rowMeta}>{legalEntity.email}</span>
        </div>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>HÉBERGEMENT</h2>
        <div className={styles.row}>
          <span>{hosting.provider}</span>
        </div>
        <p className={styles.note}>{hosting.address}</p>
      </div>
    </section>
  );
}
