'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "caa837bd2a2856961fefb0c11f9893de",
"assets/Assets/alexafreesell.jpg": "100fe08ec1baf03e0670e970365ea6a6",
"assets/Assets/alexaRfo.jpg": "ca36afb485c59473cc6e918e8e0f23e7",
"assets/Assets/AmenitieActivityPool2.jpg": "f0c6d8bccba7624286e868236b57fdd5",
"assets/Assets/AmenitiesBasketballCourt.jpg": "5aae41f0dbc8738cb78327b75a5ca1f5",
"assets/Assets/AmenitiesBeachPool.jpg": "3aeae43de7a1b0081809266a4ed226c7",
"assets/Assets/AmenitiesCoffeeShop.jpg": "22c76b41ea22f5c685d6d7d6cd9addc4",
"assets/Assets/AmenitiesDayCare.jpg": "c6a6acdcb2678a83d4f7cd1352d24c3d",
"assets/Assets/AmenitiesEntranceGate.jpg": "6fa8c59c95a51d7872b75f05a0e796b1",
"assets/Assets/AmenitiesGameRoom.jpg": "cb02628f80f1a917644907a9c4ece2ac",
"assets/Assets/AmenitiesGrandBallroom.jpg": "aa126f4d213f0d688cbb75a321b8fdc5",
"assets/Assets/AmenitiesGym.jpg": "3ca07481fadf6413ed0f573989c32786",
"assets/Assets/AmenitiesKiddiePool.jpg": "7931ef60afff701258ceeab412c7d261",
"assets/Assets/AmenitiesLapPool2.jpg": "70c2558795005c1fec369866484ff948",
"assets/Assets/AmenitiesMassagepoolbeds.jpg": "95b3f7c40007aa88192874a4a75866fe",
"assets/Assets/AmenitiesPartyPool.jpg": "b8c47aed6ab51b261752d9c0e6e9efc6",
"assets/Assets/AmenitiesPlayground.jpg": "d338b2cf5cd50f3113ec6624a4bf40b3",
"assets/Assets/AmenitiesPocketParks.jpg": "cd855a12b8bde4abf4179d622a3af726",
"assets/Assets/AmenitiesPoolSlides.jpg": "9d1ecc92c15b6a56eacc920638b9011b",
"assets/Assets/AmenitiesSecurity.jpg": "9c933abc9fbf41ab0308c474bea34971",
"assets/Assets/AmenitiesSpaSauna.jpg": "e922aa92893e8a9f680a6ea7cb41ae7c",
"assets/Assets/AmenitiesTennisCourt.jpg": "5bb400ab4e76a28f45d464f49ef869f3",
"assets/Assets/antelentrance.jpg": "d7a68a9d1f215dc71c81560583953f7c",
"assets/Assets/antelmap3.PNG": "504a8a410fe6aceff176eb1d75ff22e0",
"assets/Assets/boe.jpg": "7110154585ae9d44f04ca47ac7a2a6a2",
"assets/Assets/daniellapresell.jpg": "05a94aaa5d1e9997c9d12ec9e1c1709e",
"assets/Assets/facebook.webp": "3bb4b2c564f3997cc2fc17bb32b754f5",
"assets/Assets/falcons1.jpg": "83e84e1414868251fa01f707d3e6c3a8",
"assets/Assets/falconupdated.jpg": "4da1e7443ffde00b3965012381689ee0",
"assets/Assets/feedback.jpg": "2b310289845d6497714f9844709357f4",
"assets/Assets/felicitypresell.jpg": "0513ea5bf0ea27f15e3f893e48a27804",
"assets/Assets/floridapresell.jpg": "f5c99a31b8bb277870f9eb2b94f48161",
"assets/Assets/jam.jpg": "c913279e100dd4756e3fc8a1837d313c",
"assets/Assets/jerryfeedback.jpg": "f350557a78b4fcc1eb876ee30a8bb961",
"assets/Assets/jerrylolo.jpg": "951c0a7e7266084711df2913861e6d77",
"assets/Assets/messenger.png": "46115df5c506630d66ebad426307e29a",
"assets/Assets/newyorkpresell.jpg": "e782a8266f362876f3a23eeb59147c5d",
"assets/Assets/Nikko.jpg": "c8fa6aebd03c92e4b7f3d292746a3363",
"assets/Assets/parispresell.jpg": "53f19dc9c1a406e90e251cab488d1a31",
"assets/Assets/pool3.jpg": "01835043e5e737e1daf8901bfc9293d6",
"assets/Assets/rose.jpg": "d282a1f26f177d9be50599f7bcaaeb69",
"assets/Assets/rosefeedback.jpg": "3596c4492a6a799b654d167b73cbae23",
"assets/Assets/shinningstar.jpg": "8f513886b71ee173395a1ca4ff0a227e",
"assets/Assets/sofiapresell.jpg": "09aebfb07d5ddefb7ee7155f81a595a9",
"assets/Assets/teamfalcon.jpg": "c55b6a409fb07f4049f03647cb384b68",
"assets/Assets/teamvision.jpg": "a5eb25ff12bede3eef3aa8e52f3535ee",
"assets/Assets/testimonials.jpg": "699ebc7b491bc5d76abc875447fbcfc4",
"assets/Assets/tokyopresell.jpg": "8e828b39e5be0dc1ce6ec54e49bcce80",
"assets/Assets/ViberLogo.jpg": "c4d796d996f5d2ef86d3db5840a9a583",
"assets/Assets/youtube.webp": "0e432fcfe2905d8ad9827475593c1ad4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5647d19c27337a22f1d9b511e6b9174c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a8e174a5492727a845a6032e6e0654c8",
"/": "a8e174a5492727a845a6032e6e0654c8",
"main.dart.js": "a3da864d95b7fc77aca08759192b2e3c",
"manifest.json": "7c2a6ab7ad945173cc3bb2d0e004b777",
"version.json": "e3fc256500968787d0c16e77c7c7a86c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
