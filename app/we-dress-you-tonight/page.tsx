import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { wdytPhotos } from "@/content/wdyt-2026";
import { WdytGallery } from "@/components/selected/WdytGallery";
import styles from "./page.module.css";
export const metadata = { title: "We Dress You Tonight — 30.10.2026 | Victor Le de Doisy", description: "Film et photographies de WE DRESS YOU TONIGHT, au studio à Paris le 30 octobre 2026." };
export default function Page() {
  return <article className={styles.archive}>
    <Link className={styles.back} href="/#we-dress-you-tonight">← VICTOR LE DE DOISY</Link>
    <p className={styles.eyebrow}>STUDIO / FASHION / IMAGE / ACTION</p>
    <h1>WE DRESS<br />YOU TONIGHT</h1>
    <div className={styles.details}><span>30 OCTOBRE 2026</span><span>STUDIO — PARIS</span></div>
    <div className={styles.filmRow}>
      <video className={styles.film} controls playsInline preload="metadata" poster={withBasePath("/media/we-dress-you-tonight/film-poster.jpg")} aria-label="Film WE DRESS YOU TONIGHT — 30 octobre 2026">
        <source src={withBasePath("/media/we-dress-you-tonight/wdyt-30-octobre-2026.mp4")} type="video/mp4" />
        <a href={withBasePath("/media/we-dress-you-tonight/wdyt-30-octobre-2026.mp4")}>Voir le film</a>
      </video>
      <div className={styles.credits}>
        <p className={styles.statement}>You arrive.<br />I dress you.<br />I photograph you.</p>
        <dl>
          <dt>DIRECTION ARTISTIQUE</dt><dd>Victor Le de Doisy</dd>
          <dt>ORGANISATION</dt><dd>Laura Dartois</dd>
          <dt>STYLISME</dt><dd>Sarra Diane</dd>
          <dt>PERFORMANCES</dt><dd>Sara Simona · Lavenair</dd>
          <dt>IMAGES VIDÉO</dt><dd>Filomena</dd>
          <dt>PHOTOGRAPHIES</dt><dd>Romain</dd>
          <dt>MUSIQUE</dt><dd>DRIVOO — URL Fighters</dd>
        </dl>
      </div>
    </div>
    <div className={styles.galleryHeading}><h2>PHOTOGRAPHS</h2><span>ROMAIN · {wdytPhotos.length} IMAGES</span></div>
    <WdytGallery photos={wdytPhotos.map(photo => ({ ...photo, src: withBasePath(photo.src) }))} />
  </article>;
}
