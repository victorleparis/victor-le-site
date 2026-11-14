/** Public films supplied by Victor on 2026-11-14. Titles and credits to verify. */
const films = [
  { id: "k4GwVMFh1Wo", label: "VIDEO 01" },
  { id: "zikbqK7oVKw", label: "VIDEO 02" },
  { id: "SjkWk7K28BE", label: "VIDEO 03" },
  { id: "iyy91HKSefk", label: "VIDEO 04" },
  { id: "bQBmjYyUjWM", label: "VIDEO 05" },
];

export function FilmsSection() {
  return (
    <section id="films" style={{padding:"clamp(48px,7vw,110px) var(--edge-gutter)",maxWidth:"var(--content-max)",margin:"0 auto",borderTop:"var(--line-hair)"}}>
      <p className="mono" style={{fontSize:11,letterSpacing:".12em",marginBottom:18}}>MOVING IMAGE / CINEMA / VIDEOCLIPS</p>
      <h2 style={{fontSize:"clamp(52px,10vw,150px)",lineHeight:".9",letterSpacing:"-.07em",margin:"0 0 42px"}}>FILMS</h2>
      <p className="mono" style={{fontSize:12,letterSpacing:".1em",marginBottom:30}}>DIRECTED BY VICTOR LE</p>
      <div style={{borderTop:"1px solid currentColor",paddingTop:20,marginBottom:40}}>
        <h3 style={{fontSize:"clamp(25px,4vw,48px)",margin:"0 0 8px"}}>VIDEOCLIP</h3>
      </div>
      <div style={{display:"grid",gap:"clamp(32px,5vw,64px)",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))"}}>
        {films.map((film) => (
          <article key={film.id} style={{minWidth:0}}>
            <div style={{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#111"}}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${film.id}`}
                title={`Victor Le — ${film.label}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0}}
              />
            </div>
            <div style={{display:"flex",justifyContent:"space-between",gap:16,paddingTop:14,borderTop:"1px solid currentColor",marginTop:8}}>
              <h3 style={{fontSize:"clamp(18px,2vw,26px)",margin:0}}>{film.label}</h3>
              <a className="mono" href={`https://www.youtube.com/watch?v=${film.id}`} target="_blank" rel="noreferrer" style={{fontSize:11,whiteSpace:"nowrap"}}>YOUTUBE ↗</a>
            </div>
          </article>
        ))}
      </div>
      <div style={{borderTop:"1px solid currentColor",marginTop:"clamp(60px,8vw,120px)",paddingTop:24}}>
        <p className="mono" style={{fontSize:12,letterSpacing:".1em",marginBottom:18}}>IN DEVELOPMENT</p>
        <h3 style={{fontSize:"clamp(32px,5vw,72px)",letterSpacing:"-.04em",margin:"0 0 12px"}}>RAMBUTEAU</h3>
        <p className="mono" style={{fontSize:12,letterSpacing:".08em"}}>LONG MÉTRAGE · EN DÉVELOPPEMENT</p>
      </div>
    </section>
  );
}
