const staticCacheName = 'site-static';
const assets = [
  'index.html',
  'js/app.js',
  'js/ui.js',
  'js/materialize.min.js',
  'css/styles.css',
  'css/materialize.min.css',
  'img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
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
self.addEventListener('fetch', event => {
  //console.log('fetch event', event);
  event.respondWith(
  		caches.match(event.request).then( cacheRes => {
  			return cacheRes || fetch(event.request)
  		})
  	);
});