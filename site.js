
const nav=document.querySelector('.nav');addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
document.querySelector('.burger')?.addEventListener('click',()=>document.querySelector('.links').classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('.tile').forEach(t=>t.addEventListener('pointermove',e=>{const r=t.getBoundingClientRect();t.style.setProperty('--x',(e.clientX-r.left)+'px');t.style.setProperty('--y',(e.clientY-r.top)+'px')}));
document.querySelectorAll('[data-count]').forEach(el=>{const end=+el.dataset.count,suf=el.dataset.suffix||'';const o=new IntersectionObserver(([en])=>{if(!en.isIntersecting)return;o.disconnect();const t0=performance.now();const step=t=>{const p=Math.min(1,(t-t0)/1400),v=Math.round(end*(1-Math.pow(1-p,3)));el.textContent=v+suf;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)});o.observe(el)});
document.querySelector('form')?.addEventListener('submit',e=>{e.preventDefault();e.target.querySelector('.note').textContent='Thanks! On the live site this message goes straight to the team.'});
