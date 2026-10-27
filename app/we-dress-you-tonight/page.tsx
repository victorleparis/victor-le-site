"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function WeDressRegistration() {
  const [name, setName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [instagram, setInstagram] = useState("");
  const [note, setNote] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  return (
    <section className={styles.section}>
      <Link className={styles.back} href="/#we-dress-you-tonight">← WE DRESS YOU TONIGHT</Link>
      <p className={styles.kicker}>INVITATION / PERFORMANCE GUESTS</p>
      <h1>WE DRESS<br/>YOU TONIGHT</h1>
      <p className={styles.lead}>Entrez. Ready to updress. Exécutez un geste. Accident.</p>
      <div className={styles.details}>
        <span>30 OCTOBRE 2026</span><span>19H00 — 22H00</span><span>PARIS MARAIS</span>
        <span>ADRESSE COMMUNIQUÉE APRÈS CONFIRMATION</span>
      </div>
      <div className={styles.flyer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${process.env.GITHUB_PAGES === "true" ? "/victor-le-site" : ""}/media/we-dress-you-tonight/invitation-30-octobre-2026.jpg?v=performance-guests`} alt="Invitation WE DRESS YOU TONIGHT — 30 octobre 2026, 19 h à 22 h, Paris Marais" />
      </div>
      <p className={styles.kicker}>BRING A BOTTLE — Apportez une bouteille.</p>
      <h2>DEMANDE DE PARTICIPATION</h2>
      <p className={styles.note}>Votre demande sera enregistrée directement et examinée par Victor. La participation reste soumise à confirmation.</p>
      {submitted ? <p className={styles.note} role="status">Demande reçue. Votre demande est enregistrée ; Victor vous répondra après validation. L&apos;adresse sera communiquée après acceptation.</p> : <form onSubmit={async (event) => {
        event.preventDefault();
        setBusy(true); setError("");
        try {
          const response = await fetch("https://wdyt-invitation.fuzzybox4.chatgpt.site/api/apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email: replyTo, instagram, referredBy, message: note, consent, website }) });
          const result = await response.json();
          if (!response.ok) throw new Error(result.error || "Enregistrement impossible. Réessayez.");
          setSubmitted(true);
        } catch (error) { setError(error instanceof Error ? error.message : "Enregistrement impossible. Écrivez à v@shootme.com."); }
        finally { setBusy(false); }
      }}>
        <label>Nom / Name<input required value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Email<input type="email" required value={replyTo} onChange={(e) => setReplyTo(e.target.value)} /></label>
        <label>Instagram<input value={instagram} onChange={(e) => setInstagram(e.target.value)} /></label>
        <label>Recommandé par<input value={referredBy} onChange={(e) => setReferredBy(e.target.value)} /></label>
        <label>Un mot<textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} /></label>
        <label style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
        <label style={{ flexDirection: "row", alignItems: "flex-start", lineHeight: 1.6 }}><input style={{ width: "auto", marginTop: 4 }} type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} />J&apos;accepte que mes coordonnées soient utilisées par Victor pour traiter ma demande et me répondre.</label>
        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={busy}>{busy ? "ENREGISTREMENT…" : "ENVOYER MA DEMANDE ↗"}</button>
      </form>}
      <p className={styles.note}>Participation sur confirmation uniquement. Les coordonnées et le message sont utilisés pour organiser cette édition. Pour modifier ou supprimer votre demande : v@shootme.com.</p>
    </section>
  );
}
