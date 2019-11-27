let cacheName = 'stock-trailblazer-new2';
const resources = ['index.html', 'app.js', 'style.css','views/AboutView.js','configuration.json','views/SummaryView.js'].map(resource => `/${resource}`);

const prefetch = (name) => {
    console.log('preloading resources 2: ', resources);
    return caches.open(name).then(cache => cache.addAll(resources)).catch(error => console.log(`Problem preloading ${name}`,error));
};

self.addEventListener('install', event => {
    event.waitUntil(prefetch(cacheName));
     self.skipWaiting();
});

self.addEventListener('fetch', event => event.respondWith(
     caches.match(event.request).then(response => response || fetch(event.request).catch(error => console.log("Cannot find resource",event.request,error)))
));


self.addEventListener('activate', event => {
    console.log("activating and deleting caches");
    const deleteCaches = caches.keys().then(
        keys => keys.
        filter(name => name !== cacheName).
        map(name => {
            caches.delete(name);
            console.log(`deleting ${name}`);
        })
    );
    console.log('deleteCaches',deleteCaches);
    event.waitUntil(Promise.all([deleteCaches,self.clients.claim()]));

});

self.addEventListener('message', event => {
    console.dir(event);
    caches.delete(cacheName).then(_ => prefetch(`${cacheName}-updated`));
});