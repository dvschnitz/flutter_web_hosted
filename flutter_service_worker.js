'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "98ece6ba2f545a3f872d2df2184a4c1d",
"index.html": "c26a8937ecb13a79e2e7f61d4d162d74",
"/": "c26a8937ecb13a79e2e7f61d4d162d74",
"main.dart.js": "06d492d9755e003c94997f29ce3971a2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e1d88ac0327d57cee55be9b2866c3117",
".git/config": "ce62c7e715a3154bd0ff47120d3cf905",
".git/objects/68/4eb55056f3ebaa559bcd3765c4fc11553d6fb9": "386c076ec0bf77dfb6ff09687efd529d",
".git/objects/57/b64143b1fb62585623e383bd573f216b62cfed": "6ff3d136ecf3b25672768487b5e44021",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/bd/dd98ef877e31b38d92c5958b370cbbae25195c": "992b2d42f235c5b06e44db1573a0b1a3",
".git/objects/ae/cf18dcfcd64674468f35cad5fb2e6d329df47d": "ad1b61e444f4edfacac7e05a055d274c",
".git/objects/ae/309797a17c044b0ba09925806ad1e2211693ad": "a78e3c7f4c2169bef0cacab5deb57008",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/8abfd98d94ad4df087b5caaec2736c6cf851b5": "e692077d88521a435b820986c5869ef3",
".git/objects/c7/a18216b62f7ab3a7f7210e6680c4b7ceb51844": "7e1cb5e7de62819928408e678ab4f66c",
".git/objects/ee/a129cb35f6f6b270eb4e4ea6f86821daac832c": "a1134c19c501db778af24b01b8fbdd2a",
".git/objects/e4/44f519c23cdbc29557c118f090ba76056919d5": "7036aab0de209e716fd7fdc61811fc83",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/b311218c172f42c60bb7681c03ff7edd025761": "b18b66290a7a86b4b62c904764ea8733",
".git/objects/89/e47511df72a2732f118e2c98d969fc6c043411": "2852a8ef1f1c4fec906720c97d3501b7",
".git/objects/1f/8a4434db355d03e23d004962c8407e7081308a": "ed35ac8da761d4db68b6e939498920bd",
".git/objects/73/485dc6b13be4ff3268fee9423a8aecc9711fff": "cefe5deae72fa5d05305a6d0e97916f0",
".git/objects/1a/2559c72609b44db19ff98a37fde397ce721094": "246bfe324f7d4bfd72cbcc8b238598ac",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/b29946b92a0702f528501b7cc7e757d633eb61": "c2b16891cdd8ac086142f4638ba8984f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/da11220fd1d531773d7537672774a79f0fc1c1": "a6e0299d97545dffa227975c346f05c5",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/96/d2da3a54a72a29fc20bf87800c4b65db52b964": "c344eea5e5c784e3e98c4c9b3576d7bb",
".git/objects/3a/8197094907ec300cdf3a10e0cfdb5ae35f7ec2": "25b00f5d5785dcab603cfa8bd0d487d1",
".git/objects/3f/532a470551cd34050bac83a482c9bb54af2527": "ad97dced8dbc9b82e9aa12d68930e2be",
".git/objects/01/e06747e005bd64929fa76f7689a128bfc9b67a": "a87e3bbf9d540706ac41e73efed549b9",
".git/objects/a0/841129dee1918fcd7a75eee2bdb57280511211": "e7e80be035835a46b59d8f62242af7cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/62ce451811b3e090800d66fdd684d6579e2cbf": "29fbd940128a66fe83defbc6240cea06",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/fe81e56a1834ea4afa54d14adcd87a5ab5be1c": "83a217705785788b0411b4d4f3ca6eda",
".git/objects/e6/d4931bd053cf8248fd13547f50b9425bb28044": "4cdc3f9dcfe46b33c1f05fcf54432e28",
".git/objects/fa/4cc541556a1dc4cb0155d2a36da238e2b53c7d": "f50cd890e30d55cfb6fca0d8f8b5df6e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/24/b25761250f9cb11fe5dd6e66fd6dc01f2968c6": "35f31bf1f332358d38e29d7bef0fd13f",
".git/objects/24/0c4dfbf9814e58bb8425a20900c876163ff07c": "81723a642b296bc0c6ee2941bd6f30d1",
".git/objects/23/b84212cac6a5cdfb21510fc1ade3c23f1760f3": "058e94f82b321891864909ce2c00a816",
".git/objects/71/68212b04227f430852d83eb65105ec435cef69": "d0dcc877f190763f6bd6ba152ea8ac55",
".git/objects/78/e3a1e242295df7ac8023bc43aa7bd10840d316": "4bd569d5027b64e949edabd1adc88bb3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f30eb79083e24b66dd36a99a617c09f2",
".git/logs/refs/heads/master": "f30eb79083e24b66dd36a99a617c09f2",
".git/logs/refs/remotes/origin/master": "3aa09823b85da3e6c9661f7145ceff80",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "34cbf7df6d2bbeb7053cdbedb68ca094",
".git/refs/remotes/origin/master": "34cbf7df6d2bbeb7053cdbedb68ca094",
".git/index": "1aa92023cbadc1704cd9a51b779fc966",
".git/COMMIT_EDITMSG": "07dc308447324f40bcd080789f960c9b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
