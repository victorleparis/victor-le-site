import type { Metadata } from "next";
import {
  bioWorking,
  education,
  selectedChronology,
  publications,
  awards,
  press,
  pressFengLiPicks,
  contact,
} from "@/content/about";
import { siteConfig } from "@/content/site.config";
import { identityAsset, listCorpusMedia, pickByName } from "@/lib/media";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `About — ${siteConfig.publicName}`,
};

export default function AboutPage() {
  const portrait = identityAsset("portrait.png");
  const pressFiles = listCorpusMedia("press-feng-li");
  const pressPicks = pickByName(pressFiles, pressFengLiPicks);
  const firstPress = press[0];
  const pressCover = firstPress ? pickByName(pressFiles, [firstPress.cover])[0] : undefined;

  return (
    <section className={styles.section}>
      <h1 className="visually-hidden">About — {siteConfig.publicName}</h1>
      <div className={styles.intro}>
        {portrait && (
          <div className={styles.portrait}>
            <MediaFrame src={portrait} alt={siteConfig.publicName} aspectRatio="4 / 5" sizes="180px" />
          </div>
        )}
        <p className={styles.bio}>{bioWorking}</p>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>PRESS</h2>
        {press.map((p) => (
          <div key={p.title} className={styles.row}>
            <span>{p.title}</span>
            <span className={styles.rowMeta}>{p.note}</span>
          </div>
        ))}
        {firstPress && (
          <div className={styles.pressGallery}>
            {pressCover && (
              <div className={styles.pressCover}>
                <MediaFrame src={pressCover.url} alt={firstPress.title} aspectRatio="3 / 4" sizes="160px" />
              </div>
            )}
            {pressPicks.map((file) => (
              <MediaFrame
                key={file.filename}
                src={file.url}
                alt={firstPress.title}
                aspectRatio="3 / 4"
                sizes="(max-width: 780px) 33vw, 14vw"
              />
            ))}
          </div>
        )}
      </div>

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
        </div>
        <div className={styles.contactGroup}>
          <span className={styles.contactRole}>{contact.entrepreneurial.role}</span>
        </div>
        <p className={styles.note}>{contact.email}</p>
      </div>
    </section>
  );
}
