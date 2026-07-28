// Cache-first service worker so the app keeps working with zero signal in
// the field once it's been opened at least once. No network dependency in
// the fetch handler beyond that first cache warm-up.
const CACHE_NAME = "fai-fleet-v6";
const ASSETS = ["./", "./index.html", "./exceljs.min.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
