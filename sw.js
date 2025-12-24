self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Просто пропускаем запросы, чтобы приложение не висло
    event.respondWith(fetch(event.request));
});
