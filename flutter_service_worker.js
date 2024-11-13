'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "50676aea1ba46eaef86732254710d0e8",
"assets/AssetManifest.bin.json": "d6fa246a73ecd58ed0ef8520ba8831bb",
"assets/AssetManifest.json": "25d213e20d75c70422d4616d4d4a2944",
"assets/assets/images/app_logo.png": "671c53b359ba2e3b5e9c1de5ce52e396",
"assets/assets/images/avatar.png": "60c70b0f421792599a126305b83ae91e",
"assets/assets/images/banners/15C0fR2A1gvtrbPSWvjK84vhvVgpWXB6e.jpg": "fd1ebaaa4ae740eb56b7a17646cda669",
"assets/assets/images/banners/1DVNZQ_j_uIEI22jWDT6NUwdL8wbI5Xak.jpg": "26fc8ba738f3b0046016a6fbccbc0a75",
"assets/assets/images/banners/1iq7aHWEdlAysDFP1Nul3TdQQNQq518Cj.jpg": "f4bf5b9b24f58cd7a813f1010eac22a2",
"assets/assets/images/banners/1jIZYRfOhND23Ztbw3n4bzGz9TFaJJax2.jpg": "5a538b757cf3fa187973f7131fe23eb4",
"assets/assets/images/banners/1MP6UdYiZZYDE4AEDsbnoFJKrbnkghsWN.jpg": "9a3d652e5b94afeed7bedb81f8762950",
"assets/assets/images/banners/1Mz0O54RzA0rd9rk6yzoLMZCG7j6Sfh1q.jpg": "e58098544e44fe75a0a099a558f35d0d",
"assets/assets/images/banners/1_gbu3O1VVd9jsLMdumsWHWmHKBjs2mJr.jpg": "b3da653f17ae240aad2a2931a50b4011",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-1.jpg": "7721afc8028ba301ee9b71c39e09dedd",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-10.jpg": "e6d4fd1046d4ec409dc01c1e900b6664",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-11.jpg": "e65d1abadb642537c18096433732ee5f",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-12.jpg": "8b0d02844c3bf25d1dc915943e7c1cda",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-2.jpg": "7fabea505db1197308464b0467d9d0bb",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-3.jpg": "5ecd3c3a97473211180100925956955f",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-4.jpg": "196fdeebb9958a2e4076984f52b0b6d2",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-5.jpg": "c74e3256d7b3e58db02634d67850100c",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-6.jpg": "115c14f6094a0725cdbbd8a959c2f102",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-7.jpg": "8c6abf7499b3254425076d5bed119be4",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-8.jpg": "2333521fa6c74b6afbf3ed24e867b1f8",
"assets/assets/images/chapters/tu-linh-su-thien-tai-cua-hoc-vien-9.jpg": "7b4688cf31189350d19decdcb19d63c0",
"assets/assets/images/comics/1-BjzutaN3j7BOCdQIjyuANVtULE_bUNA.jpg": "929fdbccdb3369ae32189d68f8705072",
"assets/assets/images/comics/15kzBJRm9jjSS5SbEHdQRoTGi2zvX_bHL.jpg": "828eaa95399e4bc408de2590099362fc",
"assets/assets/images/comics/17Aou9c5pMxaTQKs74LtcubLNO4oND5Hf.jpg": "6c0ec208f25924fb5eeffa1cb078a62a",
"assets/assets/images/comics/1azGNQa9rl8Fv4AKPJSaYBCbYWqGjppvY.jpg": "2a831beb200d34bc6dfd3996ba45c8af",
"assets/assets/images/comics/1BE33SGeLusKIU_nj-CD10RBXr1SRX9Sr.jpg": "e82ef6a4143ab9f07ff993b5eea923ce",
"assets/assets/images/comics/1DTzRCDISHWcG3ssqmB8liLYbSKb6OGu6.jpg": "c4965ff3014d521154bbb4688c8ad46c",
"assets/assets/images/comics/1E-fdc9UXvfYmcboW8sbgm402BUd7u5oS.jpg": "2ff241e60b30f8fc94f39a3a58681ddb",
"assets/assets/images/comics/1eSGKIDQedVgST1P7ZS_WPXcRhZu9VSnQ.jpg": "fe505016b18c088a52228dee03c85b59",
"assets/assets/images/comics/1FyjkUhcnkcF4eLqkuzs_njd4Y1xQj3Dq.jpg": "ea4dd1487ef7877887905c3f9e45ce42",
"assets/assets/images/comics/1HnzGnv2JUCCPIQFXtYmvCEjsohgmRchg.jpg": "a6cb01596356ea68e9e147bb8822c365",
"assets/assets/images/comics/1jJ9AZt_Wf-LmCFzFU1zGsZd91_9ovCYO.jpg": "84850f73d0b252987503e5ff32261f45",
"assets/assets/images/comics/1JPFpgYVMy-CMw9cWQciMgrnNSXuz5FRq.jpg": "bcc5bc4717e20141e9e5851e6d43129b",
"assets/assets/images/comics/1J_PwWoayZ81gEnQjHTzVCey3TkGRF2AG.jpg": "bd3f7877d40e07bebc5d4dff8589012c",
"assets/assets/images/comics/1kGh26l5cUysFad5s5ag9zM30OJbx0Qsq.jpg": "30cc6eead12bfdd0a1f8829d0d04f895",
"assets/assets/images/comics/1M691ZGnchxIBgHh96W6-0kEhfFw9WOpz.jpg": "1d9dc0b57ed9d440da9180f6ac4eca71",
"assets/assets/images/comics/1mEnX98j2X_dBOYYiURbz1UqNbDk24moN.jpg": "af828745525fbe14c158042b6e5e23a5",
"assets/assets/images/comics/1MErSaIYxpvSJN154HYBNBU-1wYbTfZ4B.jpg": "3adbe45eeac9141c11d6479d25fc2cd5",
"assets/assets/images/comics/1MSuAPjWDpVMZ057vRjfJZMkDa3QO4dzq.jpg": "b2d2da0a8c34ac501cd0e180bc917c71",
"assets/assets/images/comics/1O65Qahot1bPvEYSzUmNM3zRKP98gNy7f.jpg": "ae2bc0b064ff256e02d6c54e9367affb",
"assets/assets/images/comics/1p3_rIbn_bvWDEIYtyMuHgedzKwGj88d5.jpg": "bc57e9f52b20fe7915c78882c9990fa6",
"assets/assets/images/comics/1qV_7XLS6CPUQe0RYX1VDUbLzTZwdQokS.jpg": "15eb0d35e46145fa823870aabce5190b",
"assets/assets/images/comics/1rfBEoZtLmd74o8tFdNZ-j-2l6WfBshfl.jpg": "742635fdddb21b006c8dbdf09ae8f0f9",
"assets/assets/images/comics/1rYDDLr0jwLM9iZTl7dp4WZR37EvbA4rv.jpg": "9e696f8c61cff239f390739e6a043f12",
"assets/assets/images/comics/1Sedw-aohOhjb4XySdikvXIrE1qzM6tIG.jpg": "afc6ad07aaca281aa719bb9cbeaacf9c",
"assets/assets/images/comics/1UdJ_L6xK9GjEGupe8g6bluF2A046itgw.jpg": "1759170253fba897768cf1d433c4197a",
"assets/assets/images/comics/1uNVSNc7iOBpxCI7p5OLohliiEtXk3Ci_.jpg": "dc65bbd552e421addfc36e51fd0d43b8",
"assets/assets/images/comics/1uWFLaqEna54MHAkb9X-kQs_q-tlxWuCk.jpg": "1bf6d95705531d7b6b90bede3e8c51a9",
"assets/assets/images/comics/1wPOjVZ4DgybwkkVAuoc-2y6GzBD3P7EB.jpg": "9ce5f54a51f8a4594704f89c18bc180e",
"assets/assets/images/comics/1Xdf9aEjsHuIC02ed6O6q4W8pOf7JI0Dk.jpg": "15233efa2b57878a58792bc10870154a",
"assets/assets/images/comics/1yMbzPTDi4ZJOSAOzYnl52iA6usNjKe5M.jpg": "54c507ffef3a3d790b22ca0f405837f0",
"assets/assets/images/log/background.jpg": "8631c0c09e5442445f7c799cd6f99d10",
"assets/assets/images/log/hello.png": "e59e2aec8cdb2cf931ccad0fb654d551",
"assets/assets/images/oops.jpg": "686087f98abe204ad9d7f2559185fca7",
"assets/assets/images/splash.png": "1e7ace668ab308d0e88235744ae0777e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ef626fd9d52b4a2bf64c037d6fa84eb8",
"assets/NOTICES": "b02ecc5ff21305a2757a939dade3add4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0f21cbbee0f5d37c1d2716b1acc9f209",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "142b8189bd58a02eb246616bbea76c47",
"/": "142b8189bd58a02eb246616bbea76c47",
"main.dart.js": "58930bf6dcade249c474fbb8dbfd9428",
"manifest.json": "cc14d0384d025c2cef1e99844f328786",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"};
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
