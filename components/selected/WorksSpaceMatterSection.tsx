import { worksSpaceMatter, worksSpaceMatterSelection } from "@/content/selected";
import { withBasePath } from "@/lib/base-path";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArtworkGallery } from "./ArtworkGallery";
import styles from "./WorksSpaceMatterSection.module.css";

export function WorksSpaceMatterSection() {
  return (
    <section className={styles.section} id={worksSpaceMatter.id}>
      <SectionHeading number={worksSpaceMatter.number} title={worksSpaceMatter.title} disciplines={worksSpaceMatter.disciplines} />
      <ArtworkGallery artworks={worksSpaceMatterSelection.map((artwork) => ({ ...artwork, src: withBasePath(artwork.src) }))} />
    </section>
  );
}
