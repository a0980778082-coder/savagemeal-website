
const btn=document.querySelector(".menu-toggle"),nav=document.querySelector("nav");
btn?.addEventListener("click",()=>{const o=nav.classList.toggle("open");btn.setAttribute("aria-expanded",o?"true":"false")});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const money=n=>Number(n).toLocaleString("zh-TW");

function renderMenu(rows){
 const box=document.querySelector("#dynamic-menu"),st=document.querySelector("#menu-status"); if(!box)return;
 const live=rows.filter(r=>r[3]==="上架").sort((a,b)=>(+a[4]||999)-(+b[4]||999)),g={};
 live.forEach(r=>(g[r[0]]??=[]).push(r));
 box.innerHTML=Object.entries(g).map(([c,it])=>`<article class="menu-group"><h3>${c}</h3><ul>${it.map(r=>`<li><span>${r[1]}${r[5]?` <i class="tag">${r[5]}</i>`:""}</span><b>${c==="加購"?"+":""}${money(r[2])}</b></li>`).join("")}</ul></article>`).join("");
 st?.classList.add("hidden");
}
function renderFranchise(rows){
 const box=document.querySelector("#franchise-grid"),st=document.querySelector("#franchise-status"); if(!box)return;
 const live=rows.filter(r=>r[5]==="顯示").sort((a,b)=>(+a[6]||999)-(+b[6]||999));
 box.innerHTML=live.map(r=>`<article class="plan"><span class="eyebrow">${r[0]}</span><div class="plan-price">${+r[1]===0?"0 元":"NT$ "+money(r[1])}</div><div class="plan-meta"><span>${r[2]}</span><span>${r[3]}</span></div><p>${r[4]||""}</p></article>`).join("");
 st?.classList.add("hidden");
}
async function loadData(){
 let d=window.SAVAGE_FALLBACK,u=window.SAVAGE_CONFIG?.apiUrl;
 if(u){try{const r=await fetch(u,{cache:"no-store"});if(!r.ok)throw new Error(r.status);d=await r.json()}catch(e){console.warn("後台暫時無法讀取，改用備援資料",e)}}
 renderMenu(d.menu||[]);renderFranchise(d.franchise||[]);
}
loadData();
