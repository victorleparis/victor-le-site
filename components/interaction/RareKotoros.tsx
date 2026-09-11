"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInteraction } from "./InteractionProvider";
import styles from "./RareKotoros.module.css";

const ANOMALY_ID = "kotoros";

/**
 * DESIGN_SYSTEM.md, State 3 (Studio): "one Kotoros appears". Pink, rare,
 * never monumental, partially hidden. Renders nothing until a real
 * asset exists at public/identity/kotoros/kotoros-pink.png (see that
 * folder's README) — the mark is never fabricated.
 */
export function RareKotoros({ src }: { src: string | null }) {
  const { state, claimAnomaly, releaseAnomaly } = useInteraction();
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (!src || state !== "studio") {
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
    <div className={styles.kotoros} aria-hidden="true">
      <Image src={src} alt="" fill style={{ objectFit: "contain" }} sizes="64px" />
    </div>
  );
}
