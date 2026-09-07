import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span className="mono">
        {siteConfig.publicName.toUpperCase()} — {year}
      </span>
      <nav className={styles.nav} aria-label="Footer">
        {siteConfig.nav.map((item) => (
          <Link key={item.href} href={item.href} className="mono">
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
