import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
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
  const hasWeDressFlyer = existsSync(path.join(process.cwd(), "public", "media", "we-dress-you-tonight", "invitation-30-octobre-2026.jpg"));
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
          {hasWeDressFlyer && (
            <Link className="we-dress__flyer" style={{ display: "block" }} href="/we-dress-you-tonight" aria-label="Demander une invitation à WE DRESS YOU TONIGHT">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${process.env.GITHUB_PAGES === "true" ? "/victor-le-site" : ""}/media/we-dress-you-tonight/invitation-30-octobre-2026.jpg?v=original-photo`} alt="Invitation WE DRESS YOU TONIGHT — 30 octobre 2026, 19 h à 22 h, Paris Marais" loading="lazy" />
            </Link>
          )}
          <Link className="we-dress__register" href="/we-dress-you-tonight">REQUEST AN INVITATION ↗</Link>
        </section>

        <LifeFragmentsSection />
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
      </div>
    </>
  );
}
