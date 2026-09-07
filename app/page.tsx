import { DinnerProjectSection } from "@/components/selected/DinnerProjectSection";
import { UrlFightersSection } from "@/components/selected/UrlFightersSection";
import { PrincevilleSection } from "@/components/selected/PrincevilleSection";
import { CollectionsSection } from "@/components/selected/CollectionsSection";
import { WorksSpaceMatterSection } from "@/components/selected/WorksSpaceMatterSection";
import { L3xl3Section } from "@/components/selected/L3xl3Section";
import { SoundSection } from "@/components/selected/SoundSection";
import { EditionsPrintSection } from "@/components/selected/EditionsPrintSection";

/**
 * SELECTED — the homepage. Editorial order is fixed by PROJECT.md and is
 * independent from the order these corpora were built in during
 * development (see ROADMAP.md). Each section below is its own bespoke
 * component — deliberately not a mapped list of identical cards.
 */
export default function SelectedPage() {
  return (
    <>
      <h1 className="visually-hidden">Selected — Victor Le, Artist &amp; Designer</h1>
      <DinnerProjectSection />
      <UrlFightersSection />
      <PrincevilleSection />
      <CollectionsSection />
      <WorksSpaceMatterSection />
      <L3xl3Section />
      <SoundSection />
      <EditionsPrintSection />
    </>
  );
}
