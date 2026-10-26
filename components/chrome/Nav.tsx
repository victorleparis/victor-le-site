"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site.config";
import styles from "./Header.module.css";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.menuToggle}
        aria-label={open ? "Close projects menu" : "Open projects menu"}
        aria-expanded={open}
        aria-controls="projects-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      <nav id="projects-navigation" className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Projects">
        {siteConfig.nav.map((item, index) => {
          const active = item.href === "/about" ? pathname === "/about" : pathname === "/" && hash === item.href.slice(1);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "location" : undefined}
              className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
              onClick={() => {
                setOpen(false);
                setHash(item.href.includes("#") ? item.href.slice(item.href.indexOf("#")) : "");
              }}
            >
              {item.href !== "/about" && <span className={styles.navNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
