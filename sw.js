// Service Worker for R20 Calculator PWA
const CACHE_NAME = 'r20-calculator-v1';

// Install event
self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
  event.waitUntil(self.clients.claim());
});

// Fetch event - cache resources
self.addEventListener('fetch', event => {
  // For local file deployment, we don't cache external resources
  // This is a simplified version that works with file:// protocol
  event.respondWith(fetch(event.request));
});