import { siteConfig } from "@/content/site.config";
import { FloatingV } from "./FloatingV";
import { SoundToggle } from "./SoundToggle";
import { LiveClock } from "./LiveClock";
import { Nav } from "./Nav";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.identity}>
          <span className={styles.nameWrap}>
            <span className={styles.name}>{siteConfig.publicName.toUpperCase()}</span>
            <FloatingV />
          </span>
          <span className={styles.role}>{siteConfig.role}</span>
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
