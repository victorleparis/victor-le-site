import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { listCorpusMedia } from "@/lib/media";
import styles from "./ProjectMosaic.module.css";

type Tile = { title: string; href: string; image?: string; alt: string; tone: string };
export function ProjectMosaic() {
  const first = (corpus: string) => listCorpusMedia(corpus)[0]?.url;
  const tiles: Tile[] = [
    { title: "LIFE FRAGMENTS", href: "#life-fragments", image: withBasePath("/media/life-fragments/01-L1130546.jpg"), alt: "Photographic diary", tone: "fragments" },
    { title: "WE DRESS YOU TONIGHT", href: "/we-dress-you-tonight", image: withBasePath("/media/we-dress-you-tonight/30-octobre-2026/dscf1408.webp"), alt: "Performance photographed by Romain Vialla", tone: "wdyt" },
    { title: "FAMOUS", href: "#editions-print", image: first("editions"), alt: "Editorial works and editions", tone: "famous" },
    { title: "FILMS", href: "#films", image: "https://i.ytimg.com/vi/k4GwVMFh1Wo/hqdefault.jpg", alt: "Films and moving image", tone: "films" },
    { title: "URL FIGHTERS", href: "#url-fighters", image: first("url-fighters"), alt: "Participatory performance archive", tone: "url" },
    { title: "SOUND", href: "#sound", image: first("sound"), alt: "Music and sound works", tone: "sound" },
    { title: "ARCHIVE", href: "#collections", image: first("works-space-matter"), alt: "Fashion, objects, painting and earlier work", tone: "archive" },
  ];
  return <section className={styles.mosaic} aria-label="Explore selected projects">
    <div className={styles.intro}><span className={styles.eyebrow}>SELECTED WORKS / PARIS</span><p>VICTOR LE<br/>DE DOISY</p></div>
    {tiles.map(tile => <Link key={tile.title} href={tile.href} className={`${styles.tile} ${styles[tile.tone]}`}>
      {tile.image ? <img src={tile.image} alt={tile.alt} loading={tile.tone === "wdyt" ? "eager" : "lazy"} /> : <span className={styles.noImage} aria-hidden="true" />}
      <span className={styles.title}>{tile.title}</span>
    </Link>)}
  </section>;
}
