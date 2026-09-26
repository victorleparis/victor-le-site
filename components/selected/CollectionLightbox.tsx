"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CollectionLightbox.module.css";

export function CollectionLightbox({ src, alt, aspectRatio }: { src: string; alt: string; aspectRatio: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button className={styles.trigger} type="button" onClick={() => setOpen(true)} aria-label={"Agrandir " + alt} style={{ aspectRatio }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 780px) 33vw, 20vw" className={styles.thumb} />
        <span className={styles.view}>VIEW +</span>
      </button>
      {open && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button className={styles.close} type="button" onClick={() => setOpen(false)} aria-label="Fermer">CLOSE ×</button>
          <div className={styles.full} onClick={(event) => event.stopPropagation()}>
            <Image src={src} alt={alt} fill sizes="96vw" className={styles.fullImage} />
          </div>
        </div>
      )}
    </>
  );
}
