const CACHE_NAME = 'sparkon-job-tracker-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Do nothing special — just let network handle requests
});
