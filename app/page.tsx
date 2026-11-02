import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { CollectionsSection } from "@/components/selected/CollectionsSection";
import { DinnerProjectSection } from "@/components/selected/DinnerProjectSection";
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
          <Link className="we-dress__flyer" style={{ display: "block", maxWidth: "100%" }} href="/we-dress-you-tonight" aria-label="Voir le film et les photographies de WE DRESS YOU TONIGHT">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBasePath("/media/we-dress-you-tonight/30-octobre-2026/dscf1408.webp")} alt="Closing collectif de WE DRESS YOU TONIGHT sous le tissu rouge — photographie de Romain, 30 octobre 2026" loading="lazy" width={1400} height={933} />
          </Link>
          <Link className="we-dress__register" href="/we-dress-you-tonight">30.10.2026 — FILM & PHOTOGRAPHS ↗</Link>
        </section>

        <LifeFragmentsSection />
        <CollectionsSection />
        <DinnerProjectSection />
      </div>

      <div>
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
      </div>
    </>
  );
}
