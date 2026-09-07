import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.publicName} — ${siteConfig.role}`,
  description: `${siteConfig.publicName}, ${siteConfig.role.toLowerCase()} based in ${siteConfig.location}. ${siteConfig.disciplines.join(", ")}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
