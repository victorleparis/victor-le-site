import { DinnerProjectSection } from "@/components/selected/DinnerProjectSection";
import { CollectionsSection } from "@/components/selected/CollectionsSection";
import { L3xl3Section } from "@/components/selected/L3xl3Section";

/**
 * Homepage — present-tense front window.
 *
 * Order is deliberately concrete -> prospective:
 * clothing -> studio activation -> social situation -> developing world.
 * Historical and parallel work belongs deeper in ACTIONS, WORKS and INDEX.
 */
export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">Victor Le — Artist &amp; Designer</h1>

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

      <L3xl3Section />
    </>
  );
}
