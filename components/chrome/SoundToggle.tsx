"use client";

import { useState } from "react";
import styles from "./SoundToggle.module.css";

/**
 * Visual-only for V1: no audio source is wired in yet (no verified,
 * rights-cleared embed exists per MEDIA_STATUS.md). The toggle exists so
 * the architecture and the "silent by default, explicit activation only"
 * rule are in place before real playback is added — never autoplay,
 * never sound without this being pressed first.
 */
export function SoundToggle() {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-pressed={active}
      onClick={() => setActive((v) => !v)}
    >
      <span className="mono">SOUND</span>
      <span className={active ? styles.dotActive : styles.dot} aria-hidden="true">
        {active ? "●" : "○"}
      </span>
    </button>
  );
}
