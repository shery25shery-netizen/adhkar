const C="adhkar-v1",F=["./","index.html","manifest.json","icon-192.png","icon-512.png","fonts/amiri-arabic-400-normal.woff2","fonts/amiri-arabic-700-normal.woff2","fonts/cairo-arabic-400-normal.woff2","fonts/cairo-arabic-600-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
