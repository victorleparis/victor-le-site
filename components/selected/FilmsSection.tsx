/** Public films supplied by Victor on 2026-11-14. Titles and credits to verify. */
const films = [
  { id: "k4GwVMFh1Wo", label: "FILM 01" },
  { id: "zikbqK7oVKw", label: "FILM 02" },
  { id: "SjkWk7K28BE", label: "FILM 03" },
  { id: "iyy91HKSefk", label: "FILM 04" },
  { id: "bQBmjYyUjWM", label: "FILM 05" },
];

export function FilmsSection() {
  return (
    <section id="films" style={{padding:"clamp(48px,7vw,110px) var(--edge-gutter)",maxWidth:"var(--content-max)",margin:"0 auto",borderTop:"var(--line-hair)"}}>
      <p className="mono" style={{fontSize:11,letterSpacing:".12em",marginBottom:18}}>MOVING IMAGE / CINEMA / VIDEOCLIPS</p>
      <h2 style={{fontSize:"clamp(52px,10vw,150px)",lineHeight:".9",letterSpacing:"-.07em",margin:"0 0 42px"}}>FILMS</h2>
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
    </section>
  );
}
