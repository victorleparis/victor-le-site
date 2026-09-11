import { identityAsset, firstIdentityMedia } from "@/lib/media";
import { siteConfig } from "@/content/site.config";
import { RareKotoros } from "./RareKotoros";
import { HandwrittenNote } from "./HandwrittenNote";

/** Server-side resolution for the two identity-asset-gated anomalies —
 * both stay silent until a real asset lands (see their component docs
 * and public/identity/*\/README.md). */
export function IdentityAnomalies() {
  const kotorosSrc = siteConfig.interaction.kotorosEnabled
    ? identityAsset("kotoros/kotoros-pink.png")
    : null;
  const handwritingSrc = siteConfig.interaction.handwritingEnabled
    ? firstIdentityMedia("handwriting")
    : null;

  return (
    <>
      <RareKotoros src={kotorosSrc} />
      <HandwrittenNote src={handwritingSrc} />
    </>
  );
}
