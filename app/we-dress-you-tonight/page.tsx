"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const email = "v@shootme.com";

export default function WeDressRegistration() {
  const [name, setName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [instagram, setInstagram] = useState("");
  const [note, setNote] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const subject = "WE DRESS YOU TONIGHT — demande de participation — 30 octobre 2026";
  const body = `WE DRESS YOU TONIGHT — 30 OCTOBRE 2026
Nom : ${name}
Email : ${replyTo}
Instagram : ${instagram}
Recommandé par : ${referredBy}
Message : ${note}

Je souhaite recevoir une confirmation de participation.
L'adresse sera communiquée individuellement après confirmation.
BRING A BOTTLE — Apportez une bouteille.`;
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
      <p className={styles.note}>Complétez ces informations pour préparer votre demande. Le bouton ouvrira votre messagerie avec le message prérempli : aucun renseignement n&apos;est transmis avant votre envoi.</p>
      <form onSubmit={(event) => {
        event.preventDefault();
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}>
        <label>Nom / Name<input required value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Email<input type="email" required value={replyTo} onChange={(e) => setReplyTo(e.target.value)} /></label>
        <label>Instagram<input value={instagram} onChange={(e) => setInstagram(e.target.value)} /></label>
        <label>Recommandé par<input value={referredBy} onChange={(e) => setReferredBy(e.target.value)} /></label>
        <label>Un mot<textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} /></label>
        <button type="submit">OUVRIR LA DEMANDE PAR EMAIL ↗</button>
      </form>
      <p className={styles.note}>Participation sur confirmation uniquement. L&apos;adresse exacte sera envoyée en réponse à votre demande acceptée.</p>
    </section>
  );
}
