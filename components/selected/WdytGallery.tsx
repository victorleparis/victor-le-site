"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./WdytGallery.module.css";
type Photo = { id: string; src: string; width: number; height: number; alt: string };
export function WdytGallery({ photos }: { photos: readonly Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : photos[active];
  useEffect(() => {
    if (active === null) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; };
  }, [active]);
  function move(direction: number) { setActive(current => current === null ? null : (current + direction + photos.length) % photos.length); }
  return <>
    <div className={styles.grid}>
      {photos.map((photo, index) => <figure key={photo.id} className={styles.figure}>
        <button type="button" className={styles.imageButton} aria-label={`Agrandir la photographie ${index + 1}`} aria-haspopup="dialog" onClick={event => { trigger.current = event.currentTarget; setActive(index); dialog.current?.showModal(); }}>
          <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 640px) 90vw, (max-width: 900px) 44vw, 28vw" />
        </button><figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} className={styles.dialog} aria-label="Photographies WDYT" onClose={() => { setActive(null); trigger.current?.focus({ preventScroll: true }); }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => { if (event.key === "ArrowRight") { event.preventDefault(); move(1); } if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } }}>
      <button className={styles.close} type="button" onClick={() => dialog.current?.close()} autoFocus aria-label="Fermer la photographie">CLOSE ×</button>
      {selected && <div className={styles.viewer}>
        <div className={styles.fullImage}><Image src={selected.src} alt={selected.alt} fill sizes="92vw" style={{ objectFit: "contain" }} /></div>
        <div className={styles.controls}>
          <button type="button" onClick={() => move(-1)} aria-label="Photographie précédente">← PREVIOUS</button>
          <span aria-live="polite">{(active ?? 0) + 1} / {photos.length}</span>
          <button type="button" onClick={() => move(1)} aria-label="Photographie suivante">NEXT →</button>
        </div>
      </div>}
    </dialog>
  </>;
}
