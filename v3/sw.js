const C='boitage-1eec2577affe',F=['./','c-1eec2577affe.bin'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('boitage-')&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin||e.request.method!=='GET')return;
 if(e.request.mode==='navigate')e.respondWith(fetch(e.request.url,{cache:'no-cache',credentials:'same-origin'}).catch(()=>caches.match('./')));
 else e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
