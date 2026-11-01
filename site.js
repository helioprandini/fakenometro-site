// Marca-texto, selos e números entram quando aparecem na tela.
(function(){const fmt=n=>Math.round(n).toLocaleString("pt-BR");
function conta(e){const f=+e.dataset.conta;const t0=performance.now();(function p(t){const k=Math.min(1,(t-t0)/900);e.textContent=fmt(f*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(p)})(t0)}
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("vis");if(x.target.dataset.conta)conta(x.target);io.unobserve(x.target)}}),{threshold:0});
window.observar=r=>(r||document).querySelectorAll(".mt,.nc,.sobe,.bate,[data-conta]").forEach(e=>io.observe(e));
observar()})();
// Abas: cada seção aparece uma por vez, para a página não virar rolagem sem fim.
(function(){const S=[...document.querySelectorAll("[data-aba]")];if(!S.length)return;const N=document.createElement("nav");N.className="abas-p";N.setAttribute("aria-label","Partes da página");
const vai=i=>{S.forEach((s,k)=>s.hidden=k!==i);[...N.children].forEach((b,k)=>{b.classList.toggle("on",k===i);b.setAttribute("aria-pressed",k===i)})};
S.forEach((s,i)=>{const b=document.createElement("button");b.textContent=s.dataset.aba;b.onclick=()=>vai(i);N.append(b)});S[0].before(N);vai(0)})();
