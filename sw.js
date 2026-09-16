const CACHE = "shopping-v11";

self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE).then(cache =>
            cache.addAll([
                "/pwatest/index.html",
                "/pwatest/manifest.json",
                "/pwatest/32.webp",
                "/pwatest/128.webp",
                "/pwatest/192.webp",
                "/pwatest/512.webp",
		"/pwatest/1280x720.webp",
		"/pwatest/390x844.webp"
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
