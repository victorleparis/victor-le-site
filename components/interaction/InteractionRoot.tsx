"use client";

import { useInteraction } from "./InteractionProvider";

/** Registers the first (and subsequent) meaningful interactions that
 * drive Archive -> Trace -> Studio. A plain click anywhere in the main
 * content is treated as "the visitor caused the disorder" per
 * DESIGN_SYSTEM.md — deliberately coarse rather than instrumenting
 * every individual control. */
export function InteractionRoot({ children }: { children: React.ReactNode }) {
  const { registerInteraction } = useInteraction();
  return <div onClick={registerInteraction}>{children}</div>;
}
