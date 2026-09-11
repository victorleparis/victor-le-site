"use client";

import { useEffect, useRef, useState } from "react";
import { useInteraction } from "./InteractionProvider";
import { MediaFrame } from "@/components/ui/MediaFrame";
import styles from "./DraggableWindow.module.css";

const ANOMALY_ID = "draggable-window";
const POSITION_KEY = "victor-le:window-position";
const DISMISSED_KEY = "victor-le:window-dismissed";

interface Position {
  x: number;
  y: number;
}

function defaultPosition(): Position {
  if (typeof window === "undefined") return { x: 24, y: 24 };
  return { x: window.innerWidth - 244, y: window.innerHeight - 280 };
}

export function DraggableWindow({ mediaUrl }: { mediaUrl?: string | null }) {
  const { state, claimAnomaly, releaseAnomaly } = useInteraction();
  const [dismissed, setDismissed] = useState(true);
  const [granted, setGranted] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);
  const dragRef = useRef<{ startX: number; startY: number; origin: Position } | null>(null);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(DISMISSED_KEY) === "1");
    const stored = sessionStorage.getItem(POSITION_KEY);
    setPosition(stored ? JSON.parse(stored) : defaultPosition());
  }, []);

  useEffect(() => {
    if (state === "archive" || dismissed) {
      setGranted(false);
      releaseAnomaly(ANOMALY_ID);
      return;
    }
    setGranted(claimAnomaly(ANOMALY_ID));
    return () => releaseAnomaly(ANOMALY_ID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, dismissed]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!position) return;
    dragRef.current = { startX: e.clientX, startY: e.clientY, origin: position };
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const { startX, startY, origin } = dragRef.current;
    const next = { x: origin.x + (e.clientX - startX), y: origin.y + (e.clientY - startY) };
    setPosition(next);
  };

  const onPointerUp = () => {
    if (position) {
      try {
        sessionStorage.setItem(POSITION_KEY, JSON.stringify(position));
      } catch {
        // ignore
      }
    }
    dragRef.current = null;
  };

  const close = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
  };

  if (!granted || !position) return null;

  return (
    <div className={styles.window} style={{ left: position.x, top: position.y }}>
      <div
        className={styles.handle}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <span>EP 001 — PREVIEW</span>
        <button type="button" className={styles.close} onClick={close} aria-label="Close">
          ×
        </button>
      </div>
      <div className={styles.body}>
        <MediaFrame
          src={mediaUrl}
          alt="The Dinner Project — Episode 001"
          aspectRatio="4 / 3"
          placeholderLabel="IN PREPARATION"
          sizes="220px"
        />
      </div>
    </div>
  );
}
