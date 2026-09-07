"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site.config";
import styles from "./Header.module.css";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Primary">
      {siteConfig.nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`mono ${styles.navLink} ${active ? styles.navLinkActive : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
