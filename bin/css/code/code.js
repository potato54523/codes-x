import { LiquidGlass } from 'https://cdn.jsdelivr.net/npm/@ybouane/liquidglass/dist/index.js';

const root = document.getElementById('root');
const btn1 = document.querySelector('.glass-btn-1');
const top1 = document.querySelector('.glass-btn-2');
const win1 = document.querySelector('.win1');
const win2 = document.querySelector('.win2');
const winx = document.querySelector('.winx');
const bg = document.querySelector('.bg');

async function boot() {
  try {
    const instance = await LiquidGlass.init({
      root,
      glassElements: [btn1, top1,win1,win2,winx],
      defaults: { cornerRadius: 44, refraction: 0.6 },
    });
    console.log('ready, fps:', instance.fps);
    [btn1, top1,win1,win2,winx].forEach(b => {
      b.style.background = 'transparent';
      b.style.backdropFilter = 'none';
      b.style.webkitBackdropFilter = 'none';
      b.style.border = 'none';
    });
  } catch (e) {
    console.error('no', e);
  }
}

if (bg.complete && bg.naturalWidth > 0) boot();
else bg.addEventListener('load', boot);