const currentChacheName = 'v1';


// install event
self.addEventListener('install', (e) => {
    // console.log('worker installed')
})

// activate event
self.addEventListener('activate', (e) => {
    // console.log('worker activated')

    // remove unwanted caches
    e.waitUntil(caches.keys().then((cachNames) => {
        return Promise.all(cachNames.map(cache => {
            if (cache !== currentChacheName) {
                console.log('clearing old cache .......');
                caches.delete(cache);

            }
        }))
    }))
})


// fetch event
self.addEventListener('fetch', (e) => {
    // console.log('fetching ....................');
    if (!(e.request.url.indexOf('http') === 0)) {
        //skip request if its not made by the page
        // console.log('extention: ', e.request.url);

        return;
    }
    e.respondWith(
        fetch(e.request)
            .then(res => {
                // copy the reponse
                const resClone = res.clone();
                //caching the response dynamically
                caches.open(currentChacheName).then(cache => {
                    // puting in the cache
                    cache.put(e.request, resClone);
                })

                // preceeding with the response
                return res;
            })
            // if no reponse 
            .catch((err) => caches.match(e.request).then(res => res)
            ))

})