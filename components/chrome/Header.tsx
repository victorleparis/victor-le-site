import { siteConfig } from "@/content/site.config";
import { FloatingV } from "./FloatingV";
import { SoundToggle } from "./SoundToggle";
import { LiveClock } from "./LiveClock";
import { Nav } from "./Nav";
import styles from "./Header.module.css";

// DECIDED 2026-09-27 (see PROJECT.md "Public naming"): the header identity
// block reads as the full name split across two lines — "VICTOR LE" then
// the remainder of siteConfig.fullName — replacing the previous
// "ARTIST & DESIGNER" role line. Derived from fullName rather than
// hardcoded so it stays in sync with site.config.ts's single source of
// truth for the name.
const nameSecondLine = siteConfig.fullName.replace(siteConfig.publicName, "").trim().toUpperCase();

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.identity}>
          <span className={styles.nameWrap}>
            <span className={styles.name}>{siteConfig.publicName.toUpperCase()}</span>
            <FloatingV />
          </span>
          <span className={styles.role}>{nameSecondLine}</span>
          <span className={`mono ${styles.disciplines}`}>{siteConfig.disciplines.join(" · ")}</span>
        </div>
        <div className={styles.meta}>
          <LiveClock />
          {siteConfig.interaction.soundToggleEnabled && <SoundToggle />}
        </div>
      </div>
      <Nav />
    </header>
  );
}
