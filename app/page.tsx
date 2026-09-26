import { DinnerProjectSection } from "@/components/selected/DinnerProjectSection";
import { UrlFightersSection } from "@/components/selected/UrlFightersSection";
import { PrincevilleSection } from "@/components/selected/PrincevilleSection";
import { CollectionsSection } from "@/components/selected/CollectionsSection";
import { WorksSpaceMatterSection } from "@/components/selected/WorksSpaceMatterSection";
import { L3xl3Section } from "@/components/selected/L3xl3Section";
import { SoundSection } from "@/components/selected/SoundSection";
import { EditionsPrintSection } from "@/components/selected/EditionsPrintSection";
import styles from "./page.module.css";

/**
 * Homepage architecture — updated 2026-09-26.
 * L3XL3 is prominent without becoming the explanation for the whole practice.
 * ACTIONS and WORKS are conceptual/editorial groupings; existing verified
 * components and media remain the source material during migration.
 */
export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">Victor Le — Artist &amp; Designer</h1>

      <div id="l3xl3" className={styles.anchor}>
        <L3xl3Section />
      </div>

      <section id="actions" className={styles.chapter}>
        <div className={styles.chapterHead}>
          <span className="mono">02</span>
          <div>
            <h2>ACTIONS</h2>
            <p>Real actions, protocols, encounters and ambiguous situations.</p>
          </div>
        </div>
        <DinnerProjectSection />
        <PrincevilleSection />
      </section>

      <section id="works" className={styles.chapter}>
        <div className={styles.chapterHead}>
          <span className="mono">03</span>
          <div>
            <h2>WORKS</h2>
            <p>Clothing, image, sound, objects, sculpture, editions and other forms.</p>
          </div>
        </div>
        <CollectionsSection />
        <WorksSpaceMatterSection />
        <SoundSection />
        <EditionsPrintSection />
      </section>

      <section id="index" className={styles.chapter}>
        <div className={styles.chapterHead}>
          <span className="mono">04</span>
          <div>
            <h2>INDEX</h2>
            <p>A chronological reserve. The complete index remains in development.</p>
          </div>
        </div>
        <UrlFightersSection />
      </section>
    </>
  );
}
