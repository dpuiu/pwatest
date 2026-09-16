const CACHE = "shopping-v5";

self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE).then(cache =>
            cache.addAll([
                "./",
                "./index.html",
                "./manifest.json",
                "./32.webp",
                "./128.webp",
                "./192.webp",
                "./512.webp",
            ])
        )
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        self.clients.claim()
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(
            response => response || fetch(event.request)
        )
    );
});
