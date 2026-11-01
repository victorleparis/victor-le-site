"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { worksSpaceMatterSelection } from "@/content/selected/works-space-matter";
import styles from "./WorksSpaceMatterSection.module.css";

type Artwork = Omit<(typeof worksSpaceMatterSelection)[number], "src"> & { src: string };

export function ArtworkGallery({ artworks }: { artworks: readonly Artwork[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : artworks[active];

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [active]);

  function open(index: number, button: HTMLButtonElement) {
    trigger.current = button;
    setActive(index);
    dialog.current?.showModal();
  }

  function close() { dialog.current?.close(); }

  function move(direction: number) {
    setActive((current) => current === null ? null : (current + direction + artworks.length) % artworks.length);
  }

  return (
    <>
      <div className={styles.intro}>
        <span>SELECTED WORKS</span>
        <span>08 DRAWINGS · 05 PAINTINGS · 03 SCULPTURES</span>
      </div>
      <div className={styles.gallery}>
        {artworks.map((artwork, index) => (
          <figure key={artwork.id} className={`${styles.artwork} ${styles[artwork.layout]}`}>
            <button className={styles.imageButton} type="button" aria-label={`View ${artwork.category.toLowerCase()} ${index + 1}: ${artwork.alt}`} aria-haspopup="dialog" onClick={(event) => open(index, event.currentTarget)}>
              <Image src={artwork.src} alt={artwork.alt} width={artwork.width} height={artwork.height} sizes={index === 0 ? "(max-width: 640px) 88vw, 380px" : "(max-width: 640px) 88vw, (max-width: 900px) 45vw, 36vw"} className={styles.image} />
              <span className={styles.enlarge} aria-hidden="true">VIEW +</span>
            </button>
            <figcaption className={styles.caption}><span>{artwork.category.toUpperCase()}</span><span>{String(index + 1).padStart(2, "0")}</span></figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialog} className={styles.dialog} aria-label="Selected artwork" onClose={() => { setActive(null); trigger.current?.focus({ preventScroll: true }); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); move(1); } if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } }}>
        <button className={styles.close} type="button" onClick={close} autoFocus aria-label="Close artwork viewer">CLOSE ×</button>
        {selected && <div className={styles.viewer}>
          <div className={styles.fullImage}>
            <Image src={selected.src} alt={selected.alt} fill sizes="90vw" className={styles.contain} />
          </div>
          <div className={styles.controls}>
            <button type="button" onClick={() => move(-1)} aria-label="Previous artwork">← PREVIOUS</button>
            <span aria-live="polite">{selected.category.toUpperCase()} · {String((active ?? 0) + 1).padStart(2, "0")} / {artworks.length}</span>
            <button type="button" onClick={() => move(1)} aria-label="Next artwork">NEXT →</button>
          </div>
        </div>}
      </dialog>
    </>
  );
}
