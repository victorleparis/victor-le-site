import type { Metadata } from "next";
import {
  bioWorking,
  education,
  selectedChronology,
  publications,
  awards,
  contact,
} from "@/content/about";
import { siteConfig } from "@/content/site.config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `About — ${siteConfig.publicName}`,
};

export default function AboutPage() {
  return (
    <section className={styles.section}>
      <h1 className="visually-hidden">About — {siteConfig.publicName}</h1>
      <p className={styles.bio}>{bioWorking}</p>
      <p className={styles.bioNote}>WORKING STATEMENT — SUBJECT TO REVISION</p>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>EDUCATION</h2>
        {education.map((e) => (
          <div key={e.name} className={styles.row}>
            <span>{e.name}</span>
            {"note" in e && e.note && <span className={styles.rowMeta}>{e.note}</span>}
          </div>
        ))}
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>SELECTED EXHIBITIONS / PERFORMANCES</h2>
        {selectedChronology.map((c) => (
          <div key={`${c.venue}-${c.date}`} className={styles.row}>
            <span>
              {c.title}
              {c.kind ? ` — ${c.kind}` : ""}
            </span>
            <span className={styles.rowMeta}>
              {c.venue} — {c.date}
            </span>
          </div>
        ))}
        <p className={styles.note}>Full chronology to follow in INDEX (V2).</p>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>PUBLICATIONS</h2>
        {publications.map((p) => (
          <div key={p.title} className={styles.row}>
            <span>{p.title}</span>
            <span className={styles.rowMeta}>{p.note}</span>
          </div>
        ))}
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>AWARDS</h2>
        {awards.map((a) => (
          <div key={a.title} className={styles.row}>
            <span>{a.title}</span>
            <span className={styles.rowMeta}>{a.note}</span>
          </div>
        ))}
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>CONTACT</h2>
        <div className={styles.contactGroup}>
          <span>{contact.artistic.name}</span>
          <span className={styles.contactRole}>{contact.artistic.role}</span>
          <span className={styles.rowMeta}>SIRET: {contact.artistic.siret}</span>
        </div>
        <div className={styles.contactGroup}>
          <span className={styles.contactRole}>{contact.entrepreneurial.role}</span>
          <span className={styles.rowMeta}>SIREN/SIRET: {contact.entrepreneurial.siren}</span>
        </div>
        <p className={styles.note}>Email / contact channel: {contact.email}</p>
      </div>
    </section>
  );
}
