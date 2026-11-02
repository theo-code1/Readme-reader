// Browsers want a service worker before offering to install a site as an app; this one lets every request go to the network as normal.
self.addEventListener('fetch', () => {});
