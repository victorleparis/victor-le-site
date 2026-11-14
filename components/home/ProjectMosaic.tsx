import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { listCorpusMedia } from "@/lib/media";
import styles from "./ProjectMosaic.module.css";

type Tile = { title: string; href: string; image?: string; alt: string; className?: string };
export function ProjectMosaic() {
  const first = (corpus: string) => listCorpusMedia(corpus)[0]?.url;
  const tiles: Tile[] = [
    { title: "WE DRESS YOU TONIGHT", href: "/we-dress-you-tonight", image: withBasePath("/media/we-dress-you-tonight/30-octobre-2026/dscf1408.webp"), alt: "WE DRESS YOU TONIGHT — photograph by Romain Vialla", className: styles.large },
    { title: "FAMOUS", href: "#editions-print", image: first("editions"), alt: "FAMOUS — editions and print", className: styles.medium },
    { title: "LIFE FRAGMENTS", href: "#life-fragments", image: withBasePath("/media/life-fragments/01-L1130546.jpg"), alt: "Life Fragments — photographic diary", className: styles.medium },
    { title: "FILMS", href: "#sound", image: first("sound"), alt: "Films and moving image", className: styles.wide },
    { title: "URL FIGHTERS", href: "#url-fighters", image: first("url-fighters"), alt: "URL Fighters — performance archive", className: styles.medium },
    { title: "FASHION", href: "#collections", image: first("collections"), alt: "Fashion and sculptural clothing", className: styles.medium },
    { title: "OBJECTS & PAINTINGS", href: "#works-space-matter", image: first("works-space-matter"), alt: "Sculptures and paintings", className: styles.wide },
    { title: "ARCHIVE", href: "#princeville", image: first("princeville"), alt: "Artistic archive", className: styles.medium },
  ];
  return <section className={styles.mosaic} aria-label="Explore selected projects">
    {tiles.map(tile => <Link key={tile.title} href={tile.href} className={`${styles.tile ?? ""} ${tile.className ?? ""}`}>
      {tile.image ? <img src={tile.image} alt={tile.alt} loading={tile.title === "WE DRESS YOU TONIGHT" ? "eager" : "lazy"} /> : <span className={styles.noImage} aria-hidden="true" />}
      <span className={styles.title}>{tile.title}</span>
    </Link>)}
  </section>;
}
