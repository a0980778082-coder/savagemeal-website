(()=>{'use strict';
const toggle=document.getElementById('support-toggle'),panel=document.getElementById('site-support'),frame=document.getElementById('support-frame');
if(!toggle||!panel||!frame)return;
toggle.innerHTML='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="11" width="4" height="7" rx="2"/><rect x="18" y="11" width="4" height="7" rx="2"/><path d="M20 18c0 3-3 3-7 3"/><path d="M10 21h3"/></svg><span>線上客服</span>';
const actions=document.querySelector('.mobile-actions');
function positionSupport(){const height=actions?actions.getBoundingClientRect().height:0;document.documentElement.style.setProperty('--support-bottom',height>0?(height+14)+'px':'calc(18px + env(safe-area-inset-bottom, 0px))')}
positionSupport();
if(actions&&typeof ResizeObserver!=='undefined')new ResizeObserver(positionSupport).observe(actions);
window.addEventListener('resize',positionSupport);
function setOpen(open){panel.hidden=!open;toggle.setAttribute('aria-expanded',String(open));if(open){if(!frame.getAttribute('src'))frame.src=frame.dataset.src;document.getElementById('support-close').focus()}else toggle.focus()}
toggle.addEventListener('click',()=>setOpen(panel.hidden));
document.getElementById('support-close').addEventListener('click',()=>setOpen(false));
document.getElementById('support-refresh').addEventListener('click',()=>{frame.src=frame.dataset.src});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)setOpen(false)});
})();
