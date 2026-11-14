/** Filmography is separate from the musical discography.
 * Public film selections and screening links are added only after verification. */
export function FilmsSection() {
  return (
    <section id="films" style={{padding:"clamp(48px,7vw,110px) var(--edge-gutter)",maxWidth:"var(--content-max)",margin:"0 auto",borderTop:"var(--line-hair)"}}>
      <p className="mono" style={{fontSize:11,letterSpacing:".12em",marginBottom:18}}>MOVING IMAGE / CINEMA / VIDEOCLIPS</p>
      <h2 style={{fontSize:"clamp(52px,10vw,150px)",lineHeight:".9",letterSpacing:"-.07em",margin:"0 0 42px"}}>FILMS</h2>
      <div style={{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))"}}>
        <div style={{borderTop:"1px solid currentColor",paddingTop:16}}>
          <h3 style={{fontSize:"clamp(24px,3vw,42px)",marginBottom:12}}>VIDEOCLIPS</h3>
          <p>URL FIGHTERS — moving-image works</p>
          <p className="mono" style={{fontSize:11,opacity:.7,marginTop:12}}>FILM SELECTION IN PREPARATION</p>
        </div>
        <div style={{borderTop:"1px solid currentColor",paddingTop:16}}>
          <h3 style={{fontSize:"clamp(24px,3vw,42px)",marginBottom:12}}>IN DEVELOPMENT</h3>
          <p>RAMBUTEAU</p>
          <p className="mono" style={{fontSize:11,opacity:.7,marginTop:12}}>FILM PROJECT — IN DEVELOPMENT</p>
        </div>
      </div>
    </section>
  );
}
