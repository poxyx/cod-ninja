const staticCacheName = 'site-static';
const assets = [
  'index.html',
  'manifest.json',
  'js/app.js',
  'js/ui.js',
  'js/materialize.min.js',
  'css/styles.css',
  'css/materialize.min.css',
  'img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

// install event
self.addEventListener('install', event => {
  //console.log('service worker installed');
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', event => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', function(event) {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

    }).catch(function(error) {

      return caches.match('index.html');

    })
  );
});