const cachename = 'site-cache-v1'
const assestsToCache = [
    "/",
    "/index.html"
]

self.addEventListener('install',(event) => {
    event.waitUntil(
        caches.open(cachename).then((cache) => {
            return cache.addAll(assestsToCache)
        })
    )
})

self.addEventListener('activate',(event) => {
    event.waitUntil(
        caches.open(cachename).then((cache) => {
            return cache.addAll(assestsToCache)
        })
    )
})