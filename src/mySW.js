self.addEventListener('fetch', event => {
    console.log('Hello service worker');
    if (event.request.method !== 'GET') return;
    // event.request.
    const request = event.request.clone();
    // Do stuff
    event.respondWith(fetch(request));

    // stop propagation to Angular Service Worker if we need
    event.stopImmediatePropagation();
  });