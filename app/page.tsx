import { CollectionsSection } from "@/components/selected/CollectionsSection";
import { DinnerProjectSection } from "@/components/selected/DinnerProjectSection";
import { L3xl3Section } from "@/components/selected/L3xl3Section";
import { SoundSection } from "@/components/selected/SoundSection";
import { EditionsPrintSection } from "@/components/selected/EditionsPrintSection";
import { UrlFightersSection } from "@/components/selected/UrlFightersSection";
import { PrincevilleSection } from "@/components/selected/PrincevilleSection";
import { WorksSpaceMatterSection } from "@/components/selected/WorksSpaceMatterSection";

/**
 * Homepage — present-tense front window.
 *
 * Public architecture — DECIDED 2026-09-27 (see PROJECT.md "Long-term
 * public architecture" and "Current phase"): FORM · VOICE · READ · PLACE ·
 * ARCHIVE, each a same-page anchor group matching content/site.config.ts's
 * nav; ABOUT stays a separate route (app/about/page.tsx).
 *
 * - FORM    — clothing as sculpture, silhouette and situation.
 * - VOICE   — the sung, staged and sounded.
 * - READ    — print and publishing.
 * - PLACE   — declared and claimed territory.
 * - ARCHIVE — the autonomous material corpus.
 *
 * This replaces the old WORKS anchor's lightweight preview grid
 * (components/selected/WorksSection.tsx, removed) with each of its three
 * corpora getting its own full section under PLACE or ARCHIVE, and wires
 * in SoundSection / EditionsPrintSection, which existed but weren't
 * reachable from any nav before this decision.
 */
export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">Victor Le — Artist &amp; Designer</h1>

      <section id="form">
        <CollectionsSection />

        <section id="we-dress-you-tonight" className="we-dress">
          <div className="we-dress__meta mono">
            <span>02</span>
            <span>STUDIO / FASHION / IMAGE / ACTION</span>
            <span>2026—</span>
          </div>
          <div className="we-dress__body">
            <h2>WE DRESS<br />YOU TONIGHT</h2>
            <div className="we-dress__statement">
              <p>You arrive.</p>
              <p>I dress you.</p>
              <p>I photograph you.</p>
              <span className="mono">STUDIO — PARIS</span>
            </div>
          </div>
        </section>

        <DinnerProjectSection />
      </section>

      <section id="voice">
        <L3xl3Section />
        <SoundSection />
      </section>

      <section id="read">
        <EditionsPrintSection />
      </section>

      <section id="place">
        <UrlFightersSection />
        <PrincevilleSection />
      </section>

      <section id="archive">
        <WorksSpaceMatterSection />
      </section>
    </>
  );
}
