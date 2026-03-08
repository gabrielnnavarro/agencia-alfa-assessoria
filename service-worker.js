// Limpa o service worker legado para o site funcionar apenas como site.
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

// Remove caches antigos e se desregistra assim que assumir o controle.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll())
      .then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      })
  );
});
