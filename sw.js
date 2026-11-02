// Browsers want a service worker before offering to install a site as an app.
// It also makes the app check for a new version every time it opens, instead of using a cached copy.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request, { cache: 'no-cache' }));
});
