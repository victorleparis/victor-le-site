import { sound, soundReleases, soundSpotifyUrl } from "@/content/selected";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./SoundSection.module.css";

export function SoundSection() {
  return (
    <section className={styles.section} id={sound.id}>
      <SectionHeading number={sound.number} title={sound.title} disciplines={sound.disciplines} />
      <div className={styles.list}>
        {soundReleases.map((release) => (
          <div key={release.title}>
            <div className={styles.release}>
              <span className={styles.playGlyph} aria-disabled="true" title="No playable source yet">
                ▷
              </span>
              <span className={styles.title}>{release.title}</span>
              <span className={styles.meta}>
                {release.kind === "album" ? "ALBUM" : "SINGLE"} · {release.year}
                {release.duration ? ` · ${release.duration}` : ""}
                {release.trackCount ? ` · ${release.trackCount} TRACKS` : ""}
              </span>
            </div>
            {release.tracks && (
              <details>
                <summary className={styles.note}>TRACKLIST</summary>
                <div className={styles.tracks}>
                  {release.tracks.map((t) => (
                    <div key={t.title} className={styles.track}>
                      <span>{t.title}</span>
                      <span>{t.duration}</span>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        ))}
      </div>
      <a href={soundSpotifyUrl} className={styles.link} target="_blank" rel="noreferrer">
        LISTEN ON SPOTIFY →
      </a>
      <p className={styles.note}>LISTENING STATION — NO AUTOPLAY.</p>
    </section>
  );
}
