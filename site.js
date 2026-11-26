
document.querySelector('[data-menu]')?.addEventListener('click',e=>{const n=document.querySelector('[data-nav]');const o=n.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)});
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const s=f.querySelector('[data-status]');if(s)s.textContent='Message sent. On the live site this goes straight to the team.'}));
requestAnimationFrame(()=>document.documentElement.classList.add('ready'));
