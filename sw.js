const CACHE = "shopping-v4";

self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE).then(cache =>
            cache.addAll([
                "./",
                "./index.html",
                "./manifest.json",
                "./32.png",
                "./128.png",
                "./192.png",
                "./512.png",
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
