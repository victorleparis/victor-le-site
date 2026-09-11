"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInteraction } from "./InteractionProvider";
import styles from "./HandwrittenNote.module.css";

const ANOMALY_ID = "handwriting";

/**
 * DESIGN_SYSTEM.md, State 2 (Human Trace): "one handwritten note such
 * as ep.001 / Paris 2026". Renders nothing until a real scanned asset
 * exists under public/identity/handwriting/ — never a fake handwriting
 * font.
 */
export function HandwrittenNote({ src }: { src: string | null }) {
  const { state, claimAnomaly, releaseAnomaly } = useInteraction();
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (!src || state === "archive") {
      setGranted(false);
      releaseAnomaly(ANOMALY_ID);
      return;
    }
    setGranted(claimAnomaly(ANOMALY_ID));
    return () => releaseAnomaly(ANOMALY_ID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, state]);

  if (!granted || !src) return null;

  return (
    <div className={styles.note} aria-hidden="true">
      <Image src={src} alt="" fill style={{ objectFit: "contain" }} sizes="120px" />
    </div>
  );
}
