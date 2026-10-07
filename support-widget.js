(()=>{'use strict';
const toggle=document.getElementById('support-toggle'),panel=document.getElementById('site-support'),frame=document.getElementById('support-frame');
function setOpen(open){panel.hidden=!open;toggle.setAttribute('aria-expanded',String(open));if(open){if(!frame.getAttribute('src'))frame.src=frame.dataset.src;document.getElementById('support-close').focus()}else toggle.focus()}
toggle.addEventListener('click',()=>setOpen(panel.hidden));
document.getElementById('support-close').addEventListener('click',()=>setOpen(false));
document.getElementById('support-refresh').addEventListener('click',()=>{frame.src=frame.dataset.src});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)setOpen(false)});
})();
