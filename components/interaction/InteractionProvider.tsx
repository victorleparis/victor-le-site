"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Archive -> Human Trace -> Studio (DESIGN_SYSTEM.md).
 *
 * Kept deliberately small: a visit starts in 'archive' (ordered, no
 * anomalies). The first interaction moves to 'trace' (one rupture
 * allowed). A few more interactions move to 'studio'. State resets each
 * session — DESIGN_SYSTEM.md doesn't ask for traces to persist across
 * visits, and a fresh archive-first impression on return is safer than
 * guessing that it should accumulate.
 *
 * `claimAnomaly` is the mechanism for the "one anomaly at a time" rule:
 * only one component can hold the slot at once.
 */

type VisitState = "archive" | "trace" | "studio";

const TRACE_AFTER = 1;
const STUDIO_AFTER = 4;
const STORAGE_KEY = "victor-le:interaction-count";

interface InteractionContextValue {
  state: VisitState;
  registerInteraction: () => void;
  claimAnomaly: (id: string) => boolean;
  releaseAnomaly: (id: string) => void;
}

const InteractionContext = createContext<InteractionContextValue | null>(null);

function stateFromCount(count: number): VisitState {
  if (count >= STUDIO_AFTER) return "studio";
  if (count >= TRACE_AFTER) return "trace";
  return "archive";
}

export function InteractionProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const anomalyRef = useRef<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) setCount(Number(stored) || 0);
  }, []);

  const registerInteraction = () => {
    setCount((prev) => {
      const next = prev + 1;
      try {
        sessionStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // ignore — private browsing / storage disabled
      }
      return next;
    });
  };

  const claimAnomaly = (id: string) => {
    if (anomalyRef.current === null || anomalyRef.current === id) {
      anomalyRef.current = id;
      return true;
    }
    return false;
  };

  const releaseAnomaly = (id: string) => {
    if (anomalyRef.current === id) anomalyRef.current = null;
  };

  return (
    <InteractionContext.Provider
      value={{ state: stateFromCount(count), registerInteraction, claimAnomaly, releaseAnomaly }}
    >
      {children}
    </InteractionContext.Provider>
  );
}

export function useInteraction() {
  const ctx = useContext(InteractionContext);
  if (!ctx) throw new Error("useInteraction must be used within InteractionProvider");
  return ctx;
}
