import Image from "next/image";
import styles from "./MediaFrame.module.css";

interface MediaFrameProps {
  src?: string | null;
  alt: string;
  aspectRatio?: string; // e.g. "4 / 5"
  sizes?: string;
  placeholderLabel?: string;
  priority?: boolean;
  objectPosition?: string;
}

/**
 * Renders a real image when one is available; otherwise a sober,
 * clearly-a-placeholder block (never a fabricated image). Media is
 * resolved server-side against public/media/ (see lib/media.ts) so this
 * component starts rendering real files automatically once they land,
 * with no code change.
 */
export function MediaFrame({
  src,
  alt,
  aspectRatio = "4 / 5",
  sizes = "(max-width: 640px) 100vw, 50vw",
  placeholderLabel = "AWAITING MEDIA",
  priority = false,
  objectPosition,
}: MediaFrameProps) {
  if (!src) {
    return (
      <div className={styles.placeholder} style={{ aspectRatio }}>
        <span className={styles.placeholderLabel}>{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <div className={styles.frame} style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.image}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
