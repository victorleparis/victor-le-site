import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { identityAsset } from "@/lib/media";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { InteractionProvider } from "@/components/interaction/InteractionProvider";
import { InteractionRoot } from "@/components/interaction/InteractionRoot";
import { DraggableWindowSlot } from "@/components/interaction/DraggableWindowSlot";
import { IdentityAnomalies } from "@/components/interaction/IdentityAnomalies";
import "./globals.css";

// Favicon stays unset until the real Kotoros asset lands at
// public/identity/kotoros/kotoros-pink.png (see that folder's README) —
// never a fabricated stand-in mark.
const kotorosIcon = identityAsset("kotoros/kotoros-pink.png");

export const metadata: Metadata = {
  title: `${siteConfig.publicName} — ${siteConfig.role}`,
  description: `${siteConfig.publicName}, ${siteConfig.role.toLowerCase()} based in ${siteConfig.location}. ${siteConfig.disciplines.join(", ")}.`,
  icons: kotorosIcon ? { icon: kotorosIcon } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <InteractionProvider>
          <Header />
          <InteractionRoot>
            <main>{children}</main>
          </InteractionRoot>
          <Footer />
          <DraggableWindowSlot />
          <IdentityAnomalies />
        </InteractionProvider>
      </body>
    </html>
  );
}
