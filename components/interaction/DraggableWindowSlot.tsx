import { listCorpusMedia } from "@/lib/media";
import { siteConfig } from "@/content/site.config";
import { DraggableWindow } from "./DraggableWindow";

/** Server-side resolution of real Dinner Project media (if any has
 * landed yet), handed to the client DraggableWindow so it doesn't need
 * its own filesystem access. */
export function DraggableWindowSlot() {
  if (!siteConfig.interaction.draggableWindowEnabled) return null;
  const files = listCorpusMedia("dinner-project");
  return <DraggableWindow mediaUrl={files[0]?.url ?? null} />;
}
