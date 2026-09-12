import {
  worksSpaceMatter,
  worksSpaceMatterHero,
  worksSpaceMatterStrong,
  worksSpaceMatterSecondary,
} from "@/content/selected";
import { listCorpusMedia, pickByName, type MediaFile } from "@/lib/media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./WorksSpaceMatterSection.module.css";

function resolveSelection() {
  const files = listCorpusMedia("works-space-matter");
  const used = new Set<string>();

  const take = (names: string[], count: number): MediaFile[] => {
    const named = pickByName(files, names).filter((f) => !used.has(f.filename));
    const picked = named.slice(0, count);
    if (picked.length < count) {
      for (const f of files) {
        if (picked.length >= count) break;
        if (!used.has(f.filename) && !picked.includes(f)) picked.push(f);
      }
    }
    picked.forEach((f) => used.add(f.filename));
    return picked;
  };

  const hero = take(worksSpaceMatterHero, 1)[0] ?? null;
  const strong = take(worksSpaceMatterStrong, 3);
  const drawing = take(worksSpaceMatterSecondary, 1)[0] ?? null;

  return { hero, strong, drawing };
}

export function WorksSpaceMatterSection() {
  const { hero, strong, drawing } = resolveSelection();
  const [strongLeft, strongRight, strongCenter] = strong;

  return (
    <section className={styles.section} id={worksSpaceMatter.id}>
      <SectionHeading
        number={worksSpaceMatter.number}
        title={worksSpaceMatter.title}
        disciplines={worksSpaceMatter.disciplines}
      />

      {/* Desktop: asymmetric composition — the visual reference point for
          the whole SELECTED sequence. Almost no text; scale and offset
          rhythm carry the section. */}
      <div className={styles.desktop}>
        {/* Visual accident #1 (validated 2026-09-12) — the section's own
            "05" at a scale it never uses elsewhere on the site, sliding
            partly behind the hero image. One occurrence, this section
            only — do not reuse this pattern on other sections or it stops
            being an accident. Decorative only; the real, accessible
            heading number is still rendered by SectionHeading above. */}
        <span className={styles.oversizedNumber} aria-hidden="true">
          05
        </span>
        <div className={styles.hero}>
          <MediaFrame
            src={hero?.url}
            alt={hero ? `Works in Space & Matter — ${hero.filename}` : "Works in Space & Matter"}
            aspectRatio="16 / 10"
            sizes="80vw"
          />
        </div>
        <div className={styles.strongLeft}>
          <MediaFrame src={strongLeft?.url} alt="Works in Space & Matter" aspectRatio="3 / 4" />
        </div>
        <div className={styles.strongRight}>
          <MediaFrame src={strongRight?.url} alt="Works in Space & Matter" aspectRatio="4 / 3" />
        </div>
        {/* Visual accident #5 (validated 2026-09-12) — this image alone
            breaks its column and bleeds into the outer margin. Scoped to
            this one element (see .strongCenter in the stylesheet); kept
            in grid-row 3, deliberately apart from #1 above in row 1, so
            the two accidents read as separate incidents rather than a
            new consistent visual language for the section. */}
        <div className={styles.strongCenter}>
          <MediaFrame src={strongCenter?.url} alt="Works in Space & Matter" aspectRatio="16 / 9" />
        </div>
        <div className={styles.drawing}>
          <MediaFrame src={drawing?.url} alt="Works in Space & Matter — drawing" aspectRatio="3 / 4" />
        </div>
      </div>

      {/* Mobile: an intentional, distinct vertical sequence — not the
          desktop grid reflowed. Hero full width, then a paced rhythm of
          full / paired / small images. */}
      <div className={styles.mobile}>
        {/* Mobile #1 — a fragment of "05", not a shrunk copy of the
            desktop numeral: cropped tight so only a slice of the digits
            shows above the hero image. */}
        <div className={styles.mobileNumberCrop} aria-hidden="true">
          <span className={styles.mobileNumber}>05</span>
        </div>
        <div className={styles.mobileFull}>
          <MediaFrame src={hero?.url} alt="Works in Space & Matter" aspectRatio="4 / 5" sizes="100vw" priority={false} />
        </div>
        <div className={styles.mobilePair}>
          <MediaFrame src={strongLeft?.url} alt="Works in Space & Matter" aspectRatio="3 / 4" sizes="50vw" />
          <MediaFrame src={strongRight?.url} alt="Works in Space & Matter" aspectRatio="3 / 4" sizes="50vw" />
        </div>
        {/* Mobile #5 — this is the only mobile image in the section that
            bleeds past the shared edge gutter to the physical screen
            edge; every other image here stays inset. */}
        <div className={`${styles.mobileFull} ${styles.mobileBreakout}`}>
          <MediaFrame src={strongCenter?.url} alt="Works in Space & Matter" aspectRatio="4 / 3" sizes="100vw" />
        </div>
        <div className={styles.mobileFull}>
          <MediaFrame src={drawing?.url} alt="Works in Space & Matter" aspectRatio="3 / 4" sizes="100vw" />
        </div>
      </div>
    </section>
  );
}
