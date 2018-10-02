var CACHE_NAME = 'pwgen-cache-v1';
var startPage = 'https://www.kpopreplay.com/';
var offlinePage = 'https://www.kpopreplay.com/';
var urlsToCache = [
    '/?homescreen',
    '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    '//fonts.googleapis.com/css?family=Oswald',
    '//assets-prod.vicomi.com/vicomi.js',
    '//kreplay.github.io/service-worker.js'
];
console.log('loading sw');

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('installing sw');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                var x = cache.addAll(urlsToCache);
                console.log('cache added');
                return x;
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
