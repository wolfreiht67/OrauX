// Le « service worker » : un petit script que le navigateur garde de côté, pour que le site marche hors ligne.
// - Les pages : on essaie d'abord le réseau (pour avoir la dernière version), sinon la copie gardée.
// - Le reste (styles, scripts, polices, images) : la copie gardée d'abord, mise à jour en arrière-plan.
// À l'installation, on garde toutes les pages listées dans /sitemap.xml : tout le site se révise dans le métro.
// Changer VERSION force les navigateurs à tout recharger.
const VERSION = 'oraux-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(VERSION);
      await cache.addAll(['/', '/exercices', '/oral-blanc', '/cahier']);
      try {
        const plan = await (await fetch('/sitemap.xml')).text();
        const pages = [...plan.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
        await Promise.allSettled(pages.map((p) => cache.add(p)));
      } catch {}
      self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const cle of await caches.keys()) if (cle !== VERSION) await caches.delete(cle);
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const memeSite = url.origin === self.location.origin;
  const polices = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!memeSite && !polices) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(VERSION);
        try {
          const reponse = await fetch(req);
          if (reponse.ok) cache.put(url.pathname, reponse.clone());
          return reponse;
        } catch {
          return (await cache.match(url.pathname)) ?? (await cache.match('/')) ?? Response.error();
        }
      })(),
    );
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(VERSION);
      const garde = await cache.match(req);
      const frais = fetch(req)
        .then((reponse) => {
          if (reponse.ok || reponse.type === 'opaque') cache.put(req, reponse.clone());
          return reponse;
        })
        .catch(() => garde);
      return garde ?? frais;
    })(),
  );
});
