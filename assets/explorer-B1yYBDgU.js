import"./modulepreload-polyfill-B5Qt9EMX.js";const l=["/topologie/topologie","/probabilite/probabilite","/probabilite/ExoP"];function c(e){const r=((e||"").split("/").pop()||"").replace(/(\.[a-z0-9]+)+$/i,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim().toLowerCase();return r?r.charAt(0).toUpperCase()+r.slice(1):""}function d(e,a){const n=a.toLowerCase();return e.filter(t=>c(t).toLowerCase().includes(n))}function p(e,a){e?.addEventListener("input",()=>a(e.value))}const o=document.getElementById("pdf-container"),f=document.getElementById("search"),i=l;function s(e){o&&(o.innerHTML=e.length?"":'<p class="empty">😕 Aucun PDF</p>',e.forEach(a=>{const n=a.endsWith(".pdf")?a:`${a}.pdf`,t=document.createElement("div");t.className="card",t.innerHTML=`
      <iframe src="${n}" loading="lazy"></iframe>
      <div class="card-info">
        <span class="card-name">${c(a)}</span>
        <a class="download-btn" href="${n}" download>Télécharger</a>
      </div>`,o.appendChild(t)}))}p(f,e=>s(d(i,e)));s(i);
