const CACHE = "shopping-v7";

self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE).then(cache =>
            cache.addAll([
                "/pwatest/index.html",
                "/pwatest/manifest.json",
                "/pwatest/32.png",
                "/pwatest/128.png",
                "/pwatest/192.png",
                "/pwatest/512.png",
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
