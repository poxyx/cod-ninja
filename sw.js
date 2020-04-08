//install service worker
self.addEventListener('install', evt => {
	console.log('service worker has been installed');
});

//active service worker..
self.addEventListener('active', evt => {
	console.log('service worker has been activated');
});

//fetch event
self.addEventListener('fetch', evt => {
	console.log('fetch event',evt);
});

self.addEventListener("beforeinstallprompt", ev => { 
  // Stop Chrome from asking _now_
  ev.preventDefault();

  // Create your custom "add to home screen" button here if needed.
  // Keep in mind that this event may be called multiple times, 
  // so avoid creating multiple buttons!
  let myCustomButton = getElementById("banner");
  myCustomButton.onclick = () => ev.prompt();

});