'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c5c84b9f7e8c88abb83f3108d4612a40",
"version.json": "eeb83dfc1c7aeb3599ced1b6dfa03e28",
"index.html": "0dbed8ff500e8e820f78d04ebd276191",
"/": "0dbed8ff500e8e820f78d04ebd276191",
"main.dart.js": "5539f8a11a6f5f5b710944c09aaf027d",
"404.html": "b96e361994b40579a6457cd860458e98",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/favicon.ico": "14cee8869a7695855354b05dd1e6927a",
"icons/apple-touch-icon.png": "c0bf77b028bc3838c69410a1099d6518",
"icons/Icon-192.png": "228a67367ebe2b89770e3749f525cbf0",
"icons/Icon-maskable-192.png": "20c374e257b055c535f784eb9779f914",
"icons/Icon-maskable-512.png": "953b10f0e3e30535cbe45194baae875c",
"icons/Icon-512.png": "41f26e4f4e3482e8f9a1d7d6f9a92c94",
"manifest.json": "0b07d9353a8934ec1c7cef867b2d5127",
"google35ca7a0705db55fd.html": "97d88ff1b428d0a2ef428f8279d8b32d",
"assets/NOTICES": "5d732bec344cf073d2b3c572a4c12518",
"assets/FontManifest.json": "e7387f20f67dd730a8a6117e12e2d9bd",
"assets/AssetManifest.bin.json": "0c60a254a1b9e4df632663bde7acee10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "7044a8aee7f7631d8e743a17a6ad0f57",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "2ef42f2104f722d1b984ebf041045667",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "0300dfa3ad060c8fd5651bf176b7c953",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "228a1909330e6035bc61c3165b534df2",
"assets/fonts/MaterialIcons-Regular.otf": "118374d8d7a21d9d3b76b55583dfa9f8",
"assets/assets/imgs/welpco.png": "96b7a6a030e9e575c700ef9695aa32c2",
"assets/assets/imgs/developmentGig.png": "55ad7457e7a04ea476e24e94e27f0c52",
"assets/assets/imgs/ejjar.png": "40563b1a286de6877fda61a60342b3c1",
"assets/assets/imgs/figmaGig.png": "b1f5e7e45d200bb265d90feea22ac476",
"assets/assets/imgs/linkforia.png": "9ff1fd3565b33170489f269702441701",
"assets/assets/imgs/assayx.png": "c39046802e60613eca633493c1467c02",
"assets/assets/imgs/sparklClient.png": "b232dbe11bfb4e3f94fcac422290323a",
"assets/assets/imgs/bien.png": "bc69b1f603287f7310629923f6acead3",
"assets/assets/imgs/synapseLingo.png": "3fef330fd6431d437a546a3cf374b55a",
"assets/assets/imgs/airbnb.png": "f767da581615d287792aefda6167e7c2",
"assets/assets/imgs/bitbud.png": "7675d0961eab7c0fde7b1b3d7f94d87f",
"assets/assets/imgs/bugFixGig.png": "237563c48e42bcb02fdc8a7437db46f3",
"assets/assets/imgs/zariz.png": "ddd3f6e5e04eddde1ee75f84e9548751",
"assets/assets/imgs/splash.png": "d83f48f31fca96eb823430ad7f34739f",
"assets/assets/imgs/medivet.png": "e838f1eb2122a7483714c102c76cbfea",
"assets/assets/imgs/cleverCreator.png": "7b57eded3a96c73c4de727292b0cca22",
"assets/assets/imgs/sparklCleaner.png": "1dd5116d21e29780e7cb7014a701eb5c",
"assets/assets/imgs/ballup.png": "1f7f0a7ac5352e9bdf542ccaea6676a8",
"assets/assets/imgs/familyCircle.png": "6a2307aa73e591903c7fb274079d2d17",
"assets/assets/imgs/myImg.jpg": "e89ec3e9952e031e41161145ee080ce8",
"assets/assets/imgs/studyzen.png": "9ed0e779df7dbafb1b5f5f5f583955a3",
"assets/assets/imgs/justTrain.jpg": "c9177f3358b897c78c5538d20fe8f3c3",
"assets/assets/imgs/transpoApp.png": "0a0e5cb8d0d190c119819a58492ccbce",
"assets/assets/imgs/women360.png": "5d62feb3d45703880c0383bd56117bcd",
"assets/assets/imgs/nova.png": "a630b735581842b50223d347d9b8168c",
"assets/assets/imgs/publishGig.png": "2d1d7874aba9d950b8e702272cf1f35b",
"assets/assets/imgs/ecosafari.png": "cac28fa1f12b01a17ee91be3d625f32b",
"assets/assets/imgs/design1.png": "58ad5062511d9225235eb316d39a0776",
"assets/assets/animation/splash.json": "1506cdf8be707bdaf665cf42c890bd1d",
"assets/assets/svgs/google.svg": "1f1d16b5f732fb3bcdef9c6286662fe7",
"assets/assets/svgs/apple.svg": "4f435bb4f19313498dc6b11d7acd34e4",
"assets/assets/apks/Bien.apk": "30cb03fca4827ea8c399ce2ff82a90ea",
"assets/assets/apks/Bitbud.apk": "7dae02601e7e8618c95f4e0840739f34",
"assets/assets/apks/Eco_Safari.apk": "e2516a08c86628fcc5121ff395030239",
"assets/assets/apks/Ejjar_Vendor.apk": "8e7906201085d010cbfbfa40e74f8e12",
"assets/assets/apks/Linkforia.apk": "370ce55fe333e5deb152e3361ccbf27f",
"assets/assets/apks/Ejjar_User.apk": "07679fd9658b746ffed1cc98bca9df84",
"assets/assets/apks/Synapse_Lingo.apk": "e702552c1056223792d637fff139c215",
"assets/assets/apks/Medivet_Client.apk": "9c5aa759b0382a9734199aa9e3d240c1",
"assets/assets/apks/Welpco_Provider.apk": "4df9c2655c2fa7cfa818f3ecb619b68b",
"assets/assets/apks/zariz.apk": "4418a1d0e211f5251f9df0eb9e9a5aa4",
"assets/assets/apks/Airbnb_Guest.apk": "223b6ad0f31302eece8c28e69e0c393c",
"assets/assets/apks/Airbnb_User.apk": "e197a6f4d298a016847877f8daff2513",
"assets/assets/apks/Clever_Creator_Ai.apk": "b8c5cdaa5024de55486ecbefd3d66891",
"assets/assets/apks/Slashed.apk": "e1c964823a07e46fc610a6637d23b439",
"assets/assets/apks/Welpco_User.apk": "366f059f32fe78faf1374193a1564a0a",
"assets/assets/apks/Medivet_Admin.apk": "44b6f237d4030abb0ee4633a8c0e012d",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
