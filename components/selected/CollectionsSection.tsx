import { collections, collectionsIntro, collectionsNames, collectionsBoards } from "@/content/selected";
import { listCorpusMedia, pickByName, fileDimensions } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { CollectionLightbox } from "./CollectionLightbox";
import styles from "./CollectionsSection.module.css";

export function CollectionsSection() {
  const files = listCorpusMedia("collections");
  const groups = collectionsBoards
    .map((group) => ({ name: group.name, boards: pickByName(files, group.filenames) }))
    .filter((group) => group.boards.length > 0);

  return (
    <section className={styles.section} id={collections.id}>
      <SectionHeading
        number={collections.number}
        title={collections.title}
        disciplines={collections.disciplines}
      />
      <p className={styles.intro}>{collectionsIntro}</p>
      {groups.length > 0 ? (
        groups.map((group) => (
          <div className={styles.group} key={group.name}>
            <h3 className={styles.groupName}>{group.name}</h3>
            <div className={styles.boards}>
              {group.boards.map((board) => {
                const dim = fileDimensions(board);
                return (
                  <CollectionLightbox
                    key={board.filename}
                    src={board.url}
                    alt={`${collections.title} — ${group.name}`}
                    aspectRatio={dim ? `${dim.width} / ${dim.height}` : "2 / 3"}
                  />
                );
              })}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.boards}>
          {[0, 1, 2, 3].map((i) => (
            <MediaFrame key={i} alt={collections.title} aspectRatio="2 / 3" />
          ))}
        </div>
      )}
      <p className={styles.names}>
        {collectionsNames.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </p>
    </section>
  );
}
