import { DinnerProjectSection } from "@/components/selected/DinnerProjectSection";
import { UrlFightersSection } from "@/components/selected/UrlFightersSection";
import { PrincevilleSection } from "@/components/selected/PrincevilleSection";
import { CollectionsSection } from "@/components/selected/CollectionsSection";
import { WorksSpaceMatterSection } from "@/components/selected/WorksSpaceMatterSection";
import { L3xl3Section } from "@/components/selected/L3xl3Section";
import { SoundSection } from "@/components/selected/SoundSection";
import { EditionsPrintSection } from "@/components/selected/EditionsPrintSection";

/**
 * Homepage architecture — updated 2026-09-26.
 *
 * L3XL3 is deliberately first and visually major, but it is not used as a
 * retrospective explanation for the whole practice. ACTIONS and WORKS are
 * parallel entrances. Existing verified media is reused rather than
 * reorganised into fabricated categories.
 */
export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">Victor Le — Artist &amp; Designer</h1>

      <L3xl3Section />

      <div id="actions" className="practice-group">
        <header className="practice-group__header">
          <span className="mono practice-group__number">02</span>
          <div>
            <h2 className="practice-group__title">ACTIONS</h2>
            <p className="practice-group__line">Real actions, protocols, encounters and ambiguous situations.</p>
          </div>
        </header>
        <DinnerProjectSection />
        <PrincevilleSection />
      </div>

      <div id="works" className="practice-group">
        <header className="practice-group__header">
          <span className="mono practice-group__number">03</span>
          <div>
            <h2 className="practice-group__title">WORKS</h2>
            <p className="practice-group__line">Clothing, image, sound, objects, editions and works in space.</p>
          </div>
        </header>
        <CollectionsSection />
        <WorksSpaceMatterSection />
        <SoundSection />
        <EditionsPrintSection />
        <UrlFightersSection />
      </div>

      <section id="index" className="site-index">
        <header className="practice-group__header">
          <span className="mono practice-group__number">04</span>
          <div>
            <h2 className="practice-group__title">INDEX</h2>
            <p className="practice-group__line">A chronological reserve. In progress.</p>
          </div>
        </header>
        <div className="site-index__rows mono">
          <a href="#l3xl3"><span>2026—</span><span>L3XL3</span><span>OPERA / FASHION / SOUND / STAGE</span></a>
          <a href="#dinner-project"><span>2026—</span><span>THE DINNER PROJECT</span><span>ACTION / FOOD / FASHION / IMAGE</span></a>
          <a href="#princeville"><span>2018—</span><span>PRINCEVILLE</span><span>TERRITORY / ACTION / PROTOCOL</span></a>
          <a href="#url-fighters"><span>2015—</span><span>URL FIGHTERS</span><span>INTERNET / PERFORMANCE / SOUND / OBJECT</span></a>
        </div>
      </section>
    </>
  );
}
