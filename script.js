
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a => a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    const overlay=document.createElement('div');
    overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.94);display:grid;place-items:center;z-index:100;padding:20px;cursor:zoom-out';
    const clone=img.cloneNode();
    clone.style.cssText='max-width:95vw;max-height:92vh;object-fit:contain;box-shadow:0 0 0 1px #c8a24c';
    overlay.appendChild(clone);
    overlay.addEventListener('click',()=>overlay.remove());
    document.body.appendChild(overlay);
  });
});
