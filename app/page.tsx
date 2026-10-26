import { CollectionsSection } from "@/components/selected/CollectionsSection";
import { DinnerProjectSection } from "@/components/selected/DinnerProjectSection";
import { L3xl3Section } from "@/components/selected/L3xl3Section";
import { SoundSection } from "@/components/selected/SoundSection";
import { EditionsPrintSection } from "@/components/selected/EditionsPrintSection";
import { UrlFightersSection } from "@/components/selected/UrlFightersSection";
import { PrincevilleSection } from "@/components/selected/PrincevilleSection";
import { WorksSpaceMatterSection } from "@/components/selected/WorksSpaceMatterSection";
import { LifeFragmentsSection } from "@/components/selected/LifeFragmentsSection";

/** Project-first homepage. The navigation links directly to the visible project headings. */
export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">Victor Le — Artist &amp; Designer</h1>

      <div>
        <section id="we-dress-you-tonight" className="we-dress">
          <div className="we-dress__meta mono">
            <span>01</span>
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

        <CollectionsSection />
        <DinnerProjectSection />
      </div>

      <div>
        <L3xl3Section />
        <SoundSection />
      </div>

      <div>
        <EditionsPrintSection />
      </div>

      <div>
        <UrlFightersSection />
        <PrincevilleSection />
      </div>

      <div>
        <WorksSpaceMatterSection />
        <LifeFragmentsSection />
      </div>
    </>
  );
}
