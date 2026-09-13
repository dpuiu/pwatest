const CACHE = "shopping-v2";

self.addEventListener("install", event => {
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

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(
            response => response || fetch(event.request)
        )
    );
});
