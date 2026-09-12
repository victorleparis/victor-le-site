"use client";

import { useEffect, useState } from "react";
import { useInteraction } from "./InteractionProvider";
import styles from "./TiredImageNote.module.css";

const ANOMALY_ID = "tired-image";

/**
 * Visual accident #8, validated 2026-09-12. DESIGN_SYSTEM.md, State 3
 * (Studio): "one dry absurd message appears" — this is that message,
 * implemented rather than only specified.
 *
 * Gated on the studio state and on claimAnomaly like RareKotoros /
 * HandwrittenNote, so it competes for the same single anomaly slot: most
 * sessions never reach studio, and among those that do, this note only
 * shows if nothing else (the draggable window, Kotoros, the handwritten
 * note) is already holding the slot. That's the whole rarity mechanism —
 * no extra randomization on top, since the brief explicitly rules out
 * anything that reads as gamification.
 *
 * Styled as plain interface metadata (same mono caption treatment as a
 * real label), not as a UI callout — it should be read as a label first,
 * an incident second.
 */
export function TiredImageNote() {
  const { state, claimAnomaly, releaseAnomaly } = useInteraction();
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (state !== "studio") {
      setGranted(false);
      releaseAnomaly(ANOMALY_ID);
      return;
    }
    setGranted(claimAnomaly(ANOMALY_ID));
    return () => releaseAnomaly(ANOMALY_ID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (!granted) return null;

  return (
    <span className={styles.note} aria-hidden="true">
      THIS IMAGE IS TIRED.
    </span>
  );
}
