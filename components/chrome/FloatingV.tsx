import { siteConfig } from "@/content/site.config";
import styles from "./FloatingV.module.css";

/**
 * The small mobile/floating V near the identity block (see repository
 * instructions). No exact behaviour is specified beyond "independent,
 * discreet, slightly strange, mobile/floating" — this implements the
 * minimal version: a quiet monospace mark with a slow drift, gated by a
 * config flag so it stays trivially reversible.
 */
export function FloatingV() {
  if (!siteConfig.interaction.floatingVEnabled) return null;
  return (
    <span className={styles.v} aria-hidden="true">
      v
    </span>
  );
}
