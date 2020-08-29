const cacheName = 'v2';
const cacheAssets = ['/'];

self.addEventListener('install', (e) => {
    // e.waitUntil(
    // 	caches.open(cacheName).then(cache => {
    // 		return cache.addAll(cacheAssets);
    // 	})
    // );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        // caches.match(e.request).then(res => {
        // 	return res || fetch(e.request);
        // })

        fetch(e.request)
            .then((res) => {
                const resClone = res.clone();
                caches.open(cacheName).then((cache) => {
                    if (!/^https?:$/i.test(new URL(e.request.url).protocol)) return;
                    // cache.put(e.request, resClone);
                });
                return res;
            })
            .catch((err) => caches.match(e.request).then((res) => res))
    );
});
