/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
    [
        "pages\/home\/index.html",
        "IDWbJFXalEIi38MKvmYRQ"
    ],
    [
        "pages\/what-is-it\/index.html",
        "tBm5R3VZ0AAircykSew"
    ],
    [
        "pages\/solutions\/index.html",
        "7kg5cpqnWNqbnngYKnTKUQ"
    ],
    [
        "pages\/haxeditor\/index.html",
        "S2eTdQVvNijNmh6mdk8w"
    ],
    [
        "pages\/what-is-haxcms\/index.html",
        "rNDLIceIoMKSaUS5CJwTaQ"
    ],
    [
        "pages\/haxiam\/index.html",
        "T8WocPkMAJbbaR1hauXSPQ"
    ],
    [
        "pages\/home\/roadmap\/index.html",
        "BsjAMlWeNG35tnc6mFjJPQ"
    ],
    [
        "pages\/home\/why-haxcms\/index.html",
        "byToauJw1BPUdlb6ttSrw"
    ],
    [
        "pages\/try-hax\/index.html",
        "FPwMKChsPaQXPTQqsA5PA"
    ],
    [
        "pages\/presentations\/index.html",
        "ZnKAobDSSl8y5cTlNhjIyA"
    ],
    [
        "pages\/i-have-issues\/index.html",
        "dE0BYMBeGGFCJZc748OPSw"
    ],
    [
        "pages\/css\/index.html",
        "nJzJ6Y0V5OwYqsQf2HISA"
    ],
    [
        "pages\/add\/index.html",
        "SovtVIVK9XdfwMMM1HkfQ"
    ],
    [
        "pages\/development\/index.html",
        "cBKXgMmnDnrET6LQgIbglg"
    ],
    [
        "pages\/wcfactory-tooling\/index.html",
        "t1Bl4VnrSClbs9ODbKJYCg"
    ],
    [
        "pages\/hello-world-hax-element\/index.html",
        "EfJcFyHkHrWAvrgMIbNqQ"
    ],
    [
        "pages\/hax-schema\/index.html",
        "hXVZFswRw1WVcrbMrC6eRg"
    ],
    [
        "pages\/hax-element-schema\/index.html",
        "3uyFphAqig47w9uJnPQ"
    ],
    [
        "pages\/hax-appstore-specification\/index.html",
        "3VLsHI0dag0qY9gCPVLg"
    ],
    [
        "pages\/hax-appstore-apps\/index.html",
        "SaoDmVBA5X8BjaU7S2aJZg"
    ],
    [
        "pages\/hax-appstore-blox\/index.html",
        "W3XA8txZuZCg8w567ii8qQ"
    ],
    [
        "pages\/hax-appstore-stax\/index.html",
        "mY3icsMFZQ9nc7QlUabX2A"
    ],
    [
        "pages\/hax-appstore-autoloader\/index.html",
        "IvFoVsQax7YGuz5RHkb9A"
    ],
    [
        "pages\/basic\/index.html",
        "mGLB6CbkhI1XCJaaME1rQ"
    ],
    [
        "pages\/backdropcms\/index.html",
        "6un4z1uXAzIGON7MBLNOMA"
    ],
    [
        "pages\/concepts\/index.html",
        "Maoh7BppmPNotmkKtrm6A"
    ],
    [
        "pages\/query-examples\/index.html",
        "mCR4PNHP8k3uJA9bI8L8g"
    ],
    [
        "pages\/minimalist\/index.html",
        "qDjz9S3lHW08XUKJ221gpQ"
    ],
    [
        "pages\/get-involved-\/index.html",
        "dPgr6fSM7M3OGa732sHLA"
    ],
    [
        "pages\/drupal\/index.html",
        "ywcRuKTFUFqbFttIGXiQ"
    ],
    [
        "pages\/installation\/index.html",
        "gbxzaN44hrer2lVMrQcg"
    ],
    [
        "pages\/skin-a-custom-theme\/index.html",
        "WD7Nj7GmNNofUeFXh52ubg"
    ],
    [
        "pages\/core-concepts\/index.html",
        "fViIn8IgbOYlSWkHJVpQ"
    ],
    [
        "pages\/make\/index.html",
        "pHrMFNrnO02H2q1xlgM4w"
    ],
    [
        "pages\/structure\/index.html",
        "dA3HR0pZF41X6dV8JKjFw"
    ],
    [
        "pages\/learn-two\/index.html",
        "wCBPQMnly7xcYtYYCvy2Aw"
    ],
    [
        "pages\/find\/index.html",
        "hJqhBxIjdnviL11ZfFiOg"
    ],
    [
        "pages\/ux-concepts\/index.html",
        "c93KkVJyf4yfYEz1KMs0Q"
    ],
    [
        "pages\/gravcms\/index.html",
        "TxKZNk1h37p2BhkokO6Iw"
    ],
    [
        "pages\/integrations\/index.html",
        "dB2JLSIuITfYEfgW4iifw"
    ],
    [
        "pages\/wordpress\/index.html",
        "m5kC12rFjgRerjf806tZeQ"
    ],
    [
        "pages\/integrations\/classicpress\/index.html",
        "i2JfRcXTJgkPvlFjo7Zm9Q"
    ],
    [
        "pages\/integrations\/create-new-ones\/index.html",
        "vrl6l1pejUsJJd41iAGmsw"
    ],
    [
        "pages\/web-components\/index.html",
        "wOh15r6NyqahRyhtQh1qg"
    ],
    [
        "pages\/related-technologies\/index.html",
        "MdVXiy25rUoc5L3trGXA"
    ],
    [
        "pages\/publishing\/index.html",
        "KWpcyGIdwsiIFjRg3LoAsA"
    ],
    [
        "pages\/simple-blog\/index.html",
        "MLTW88BMqIOjtNwkT8rvkQ"
    ],
    [
        "pages\/documentation\/index.html",
        "S4O01x04u24JWPa7RUPQ"
    ],
    [
        "pages\/haxcms-1\/index.html",
        "LbPlLxvVKJBNykaYpnQ2A"
    ],
    [
        "pages\/life-cycle\/index.html",
        "DQDrYRVYIqmMghF9FWPA"
    ],
    [
        "pages\/troubleshooting\/index.html",
        "d3Y3qaxdSSdbdCIrK0Luog"
    ],
    [
        "pages\/theme-layer\/index.html",
        "Ok4W72ghEmll3Xw6EBd26w"
    ],
    [
        "pages\/elements\/index.html",
        "NJdcW0T1EWARaG35trsNLw"
    ],
    [
        "pages\/dev-workflows\/index.html",
        "pGGNnmoZrJ4HcTsp9buesQ"
    ],
    [
        "pages\/example-themes\/index.html",
        "uN4FW6HaRoDm5R1Y7kjqcA"
    ],
    [
        "pages\/haxor-slevin\/index.html",
        "8EvAzvNHmrIA88kXmVpiQ"
    ],
    [
        "pages\/slide-player\/index.html",
        "fYjOFYTq15rex5LcBfy88A"
    ],
    [
        "pages\/outline-player\/index.html",
        "X9E935IUiweSy5lptrKA"
    ],
    [
        "pages\/dev-theme\/index.html",
        "6EfY4sJgLzjsEFiHotBug"
    ],
    [
        "pages\/f-a-q-\/index.html",
        "cmknYlXc0kPdNpixNgVRdQ"
    ],
    [
        "pages\/scavenger-hunt\/index.html",
        "jqyX8LlkZVq8W8iSe46NA"
    ],
    [
        "index.html",
        "tI74TTDVG5vUuIuhDt5Wjw"
    ],
    [
        "files\/haxcms-managed\/512x512-3450183.png",
        "jcfmjnOGcJbDqOl4ZvDGg"
    ],
    [
        "files\/haxcms-managed\/310x310-3450183.png",
        "n40lEuJkrTEVnSC6g"
    ],
    [
        "files\/haxcms-managed\/192x192-3450183.png",
        "P7JoPuNqHJrutz20I5fg"
    ],
    [
        "files\/haxcms-managed\/150x150-3450183.png",
        "HRrXoOysh7d9CzrkFYyBg"
    ],
    [
        "files\/haxcms-managed\/144x144-3450183.png",
        "zLnxoWl5eb5KzsfhmqgWJg"
    ],
    [
        "files\/haxcms-managed\/96x96-3450183.png",
        "SRSagMlMYoiJTs02sZDLA"
    ],
    [
        "files\/haxcms-managed\/72x72-3450183.png",
        "77g5cPsEYDobTAFd0cl7g"
    ],
    [
        "files\/haxcms-managed\/70x70-3450183.png",
        "vp0BBkaAisUdUqayUp0g"
    ],
    [
        "files\/haxcms-managed\/48x48-3450183.png",
        "PwTBf70b77AnQGQXAeSmw"
    ],
    [
        "files\/haxcms-managed\/36x36-3450183.png",
        "qvIEbavd98wrqZlUBptxQ"
    ],
    [
        "files\/haxcms-managed\/16x16-3450183.png",
        "nBQfdTExKIC19E72heCQ"
    ],
    [
        "manifest.json",
        "gmNXxVtnfpUk2yLp2YOQ"
    ],
    [
        "site.json",
        "Z3dkwmxZA7wYQCJBZmS0w"
    ],
    [
        "404.html",
        "QEzLbAYRfRrqwxyIGIpfNQ"
    ],
    [
        "files\/Roadmap.jpg",
        "iFFmAFs0MRszoNRpIOTXTQ"
    ],
    [
        "files\/mampstart.jpg",
        "nRZdPZcrLcm67xIp3TYdQ"
    ],
    [
        "files\/3450183.png",
        "2vPNkZKZ5sW8UVQoThAcRA"
    ],
    [
        "files\/2019-01-27_09-23-59.png",
        "VEgN6kvHZPbXmOPEYaJA"
    ],
    [
        "files\/ngdle.png",
        "zLtkcC36w1jGZoopv6kwAw"
    ],
    [
        "files\/2019-01-27_09-35-28.png",
        "feg5NUoR9fucYByzHfDJXA"
    ],
    [
        "files\/2019-01-27_18-05-51.png",
        "xXmIr2GwnSmioMUNQolAYQ"
    ],
    [
        "files\/haxrelationships.jpg",
        "qtLhHIKnm1HCCAFnD96mA"
    ],
    [
        "files\/59453a821222752c90fa970c937c2c396bff61f5-ngdle-university-faculty-side.jpg",
        "oTxKP22mGGCaMUMvUy4Ew"
    ],
    [
        "files\/2019-03-12_16-45-51.png",
        "rvEknEJJwwxnbjQ862kg"
    ],
    [
        "files\/mamppage.jpg",
        "EfYuCCY2S2iOlf6VQ9b0w"
    ],
    [
        "files\/lego.jpg",
        "VXAkmIpVUqB2wzcVyd3x2Q"
    ],
    [
        "files\/2019-01-25_14-05-59.png",
        "6WQ28zgmkTgXqluj7HBNBg"
    ],
    [
        "files\/2019-01-25_14-04-31.png",
        "TbwdTI6FF4xbVdVUEMzK7Q"
    ],
    [
        "files\/2019-02-25_16-22-25.png",
        "9FCh9SAIZNBrikiISCaHcA"
    ],
    [
        "files\/2019-01-27_17-39-01.png",
        "6SiXrdVbeaDaffgT317zWg"
    ],
    [
        "files\/IMG_20190127_153429.jpg",
        "yd4LYpwHWIv1yKGKmkQd4Q"
    ],
    [
        "files\/d8cdnimage.jpg",
        "wBPjaGz0B5mZFgb66I3HA"
    ],
    [
        "files\/2019-01-27_17-33-57.png",
        "eC9DC3H2BWSxzcSHHYpuw"
    ],
    [
        "files\/2019-01-27_09-45-04.png",
        "zDC1pmhvnlHuW6E51yQE5A"
    ],
    [
        "files\/2019-01-27_10-10-39.png",
        "wILedZJIMsevf3B9Q6JnFw"
    ],
    [
        "files\/2019-01-27_10-22-48.png",
        "i3RibHTk0kxkChXembJFGg"
    ],
    [
        "files\/2019-01-27_09-23-33.png",
        "ySz3BTqt0BczeIJKCH4Q"
    ],
    [
        "files\/HAXCms workflow.jpg",
        "h0QfGEQyTSwbkL9uFWojqw"
    ],
    [
        "files\/2019-03-21_15-12-05.jpg",
        "TUnlTQRl7ktIFBVcwcPOQ"
    ],
    [
        "files\/2019-01-27_17-39-31.png",
        "tlYT0GX9y1Q1VmHlddgvmw"
    ],
    [
        "files\/sourceviewthispage.jpg",
        "4uHTjQlOpHSfDXLN1cP8w"
    ],
    [
        "files\/demo.csv",
        "3Id2QkyorDuLUvz6MlRhA"
    ],
    [
        "files\/2019-03-23_10-51-10.jpg",
        "uA3RmjTPTucU4zU3epjA"
    ],
    [
        "files\/Picture1.png",
        "9xJNkS7qmKy4hufccLOZqg"
    ],
    [
        "files\/2019-01-27_10-10-58.png",
        "VdWRH9717QXDzDu6e9imug"
    ],
    [
        "files\/2019-01-27_10-22-28.png",
        "sTnTmDnmLQ9zb7lJUvukg"
    ],
    [
        "files\/pubwork1.jpg",
        "L2NfHWUo5GnFhNoKlNr9A"
    ],
    [
        "files\/haxd8simply.jpg",
        "ZthRjMDItwiLMaIs4UF8A"
    ],
    [
        "files\/2019-02-20_01-26-10.png",
        "vmeIeTNm1hK7GRG3Zwjp1A"
    ],
    [
        "files\/2019-01-27_10-25-22.png",
        "4eYa7xjiWdQ59ehcX3XGw"
    ],
    [
        "files\/pubwork2.jpg",
        "rTTHXtetyfaaEWHgKBPg"
    ],
    [
        "files\/mampstructure.jpg",
        "MKuoeUCwGLJrEO0UjmNLw"
    ],
    [
        "files\/2019-02-20_01-26-01.png",
        "xRAxgZYXkmteGfclP7WQg"
    ],
    [
        "files\/2019-01-27_09-23-44.png",
        "Di9FJlwLIocBUvhnVi4A9w"
    ],
    [
        "files\/HAXshort.vtt",
        "nsneskvQ7H996xTa3DGH7Q"
    ],
    [
        "files\/2019-01-29_22-47-53.png",
        "Lpbo3XZIKV6Dok6o2Afg"
    ],
    [
        "files\/gitpublishingdata.jpg",
        "yKPwn9PbiCrE1nJqiy1JA"
    ]
];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, { credentials: 'same-origin' });
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {

      return self.clients.claim();

    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.toolbox = e() } }(function () { return function e(t, n, r) { function o(c, s) { if (!n[c]) { if (!t[c]) { var a = "function" == typeof require && require; if (!s && a) return a(c, !0); if (i) return i(c, !0); var u = new Error("Cannot find module '" + c + "'"); throw u.code = "MODULE_NOT_FOUND", u } var f = n[c] = { exports: {} }; t[c][0].call(f.exports, function (e) { var n = t[c][1][e]; return o(n ? n : e) }, f, f.exports, e, t, n, r) } return n[c].exports } for (var i = "function" == typeof require && require, c = 0; c < r.length; c++)o(r[c]); return o }({ 1: [function (e, t, n) { "use strict"; function r(e, t) { t = t || {}; var n = t.debug || m.debug; n && console.log("[sw-toolbox] " + e) } function o(e) { var t; return e && e.cache && (t = e.cache.name), t = t || m.cache.name, caches.open(t) } function i(e, t) { t = t || {}; var n = t.successResponses || m.successResponses; return fetch(e.clone()).then(function (r) { return "GET" === e.method && n.test(r.status) && o(t).then(function (n) { n.put(e, r).then(function () { var r = t.cache || m.cache; (r.maxEntries || r.maxAgeSeconds) && r.name && c(e, n, r) }) }), r.clone() }) } function c(e, t, n) { var r = s.bind(null, e, t, n); d = d ? d.then(r) : r() } function s(e, t, n) { var o = e.url, i = n.maxAgeSeconds, c = n.maxEntries, s = n.name, a = Date.now(); return r("Updating LRU order for " + o + ". Max entries is " + c + ", max age is " + i), g.getDb(s).then(function (e) { return g.setTimestampForUrl(e, o, a) }).then(function (e) { return g.expireEntries(e, c, i, a) }).then(function (e) { r("Successfully updated IDB."); var n = e.map(function (e) { return t.delete(e) }); return Promise.all(n).then(function () { r("Done with cache cleanup.") }) }).catch(function (e) { r(e) }) } function a(e, t, n) { return r("Renaming cache: [" + e + "] to [" + t + "]", n), caches.delete(t).then(function () { return Promise.all([caches.open(e), caches.open(t)]).then(function (t) { var n = t[0], r = t[1]; return n.keys().then(function (e) { return Promise.all(e.map(function (e) { return n.match(e).then(function (t) { return r.put(e, t) }) })) }).then(function () { return caches.delete(e) }) }) }) } function u(e, t) { return o(t).then(function (t) { return t.add(e) }) } function f(e, t) { return o(t).then(function (t) { return t.delete(e) }) } function h(e) { e instanceof Promise || p(e), m.preCacheItems = m.preCacheItems.concat(e) } function p(e) { var t = Array.isArray(e); if (t && e.forEach(function (e) { "string" == typeof e || e instanceof Request || (t = !1) }), !t) throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests."); return e } function l(e, t, n) { if (!e) return !1; if (t) { var r = e.headers.get("date"); if (r) { var o = new Date(r); if (o.getTime() + 1e3 * t < n) return !1 } } return !0 } var d, m = e("./options"), g = e("./idb-cache-expiration"); t.exports = { debug: r, fetchAndCache: i, openCache: o, renameCache: a, cache: u, uncache: f, precache: h, validatePrecacheInput: p, isResponseFresh: l } }, { "./idb-cache-expiration": 2, "./options": 4 }], 2: [function (e, t, n) { "use strict"; function r(e) { return new Promise(function (t, n) { var r = indexedDB.open(u + e, f); r.onupgradeneeded = function () { var e = r.result.createObjectStore(h, { keyPath: p }); e.createIndex(l, l, { unique: !1 }) }, r.onsuccess = function () { t(r.result) }, r.onerror = function () { n(r.error) } }) } function o(e) { return e in d || (d[e] = r(e)), d[e] } function i(e, t, n) { return new Promise(function (r, o) { var i = e.transaction(h, "readwrite"), c = i.objectStore(h); c.put({ url: t, timestamp: n }), i.oncomplete = function () { r(e) }, i.onabort = function () { o(i.error) } }) } function c(e, t, n) { return t ? new Promise(function (r, o) { var i = 1e3 * t, c = [], s = e.transaction(h, "readwrite"), a = s.objectStore(h), u = a.index(l); u.openCursor().onsuccess = function (e) { var t = e.target.result; if (t && n - i > t.value[l]) { var r = t.value[p]; c.push(r), a.delete(r), t.continue() } }, s.oncomplete = function () { r(c) }, s.onabort = o }) : Promise.resolve([]) } function s(e, t) { return t ? new Promise(function (n, r) { var o = [], i = e.transaction(h, "readwrite"), c = i.objectStore(h), s = c.index(l), a = s.count(); s.count().onsuccess = function () { var e = a.result; e > t && (s.openCursor().onsuccess = function (n) { var r = n.target.result; if (r) { var i = r.value[p]; o.push(i), c.delete(i), e - o.length > t && r.continue() } }) }, i.oncomplete = function () { n(o) }, i.onabort = r }) : Promise.resolve([]) } function a(e, t, n, r) { return c(e, n, r).then(function (n) { return s(e, t).then(function (e) { return n.concat(e) }) }) } var u = "sw-toolbox-", f = 1, h = "store", p = "url", l = "timestamp", d = {}; t.exports = { getDb: o, setTimestampForUrl: i, expireEntries: a } }, {}], 3: [function (e, t, n) { "use strict"; function r(e) { var t = a.match(e.request); t ? e.respondWith(t(e.request)) : a.default && "GET" === e.request.method && 0 === e.request.url.indexOf("http") && e.respondWith(a.default(e.request)) } function o(e) { s.debug("activate event fired"); var t = u.cache.name + "$$$inactive$$$"; e.waitUntil(s.renameCache(t, u.cache.name)) } function i(e) { return e.reduce(function (e, t) { return e.concat(t) }, []) } function c(e) { var t = u.cache.name + "$$$inactive$$$"; s.debug("install event fired"), s.debug("creating cache [" + t + "]"), e.waitUntil(s.openCache({ cache: { name: t } }).then(function (e) { return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function (t) { return s.debug("preCache list: " + (t.join(", ") || "(none)")), e.addAll(t) }) })) } e("serviceworker-cache-polyfill"); var s = e("./helpers"), a = e("./router"), u = e("./options"); t.exports = { fetchListener: r, activateListener: o, installListener: c } }, { "./helpers": 1, "./options": 4, "./router": 6, "serviceworker-cache-polyfill": 16 }], 4: [function (e, t, n) { "use strict"; var r; r = self.registration ? self.registration.scope : self.scope || new URL("./", self.location).href, t.exports = { cache: { name: "$$$toolbox-cache$$$" + r + "$$$", maxAgeSeconds: null, maxEntries: null }, debug: !1, networkTimeoutSeconds: null, preCacheItems: [], successResponses: /^0|([123]\d\d)|(40[14567])|410$/ } }, {}], 5: [function (e, t, n) { "use strict"; var r = new URL("./", self.location), o = r.pathname, i = e("path-to-regexp"), c = function (e, t, n, r) { t instanceof RegExp ? this.fullUrlRegExp = t : (0 !== t.indexOf("/") && (t = o + t), this.keys = [], this.regexp = i(t, this.keys)), this.method = e, this.options = r, this.handler = n }; c.prototype.makeHandler = function (e) { var t; if (this.regexp) { var n = this.regexp.exec(e); t = {}, this.keys.forEach(function (e, r) { t[e.name] = n[r + 1] }) } return function (e) { return this.handler(e, t, this.options) }.bind(this) }, t.exports = c }, { "path-to-regexp": 15 }], 6: [function (e, t, n) { "use strict"; function r(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var o = e("./route"), i = e("./helpers"), c = function (e, t) { for (var n = e.entries(), r = n.next(), o = []; !r.done;) { var i = new RegExp(r.value[0]); i.test(t) && o.push(r.value[1]), r = n.next() } return o }, s = function () { this.routes = new Map, this.routes.set(RegExp, new Map), this.default = null };["get", "post", "put", "delete", "head", "any"].forEach(function (e) { s.prototype[e] = function (t, n, r) { return this.add(e, t, n, r) } }), s.prototype.add = function (e, t, n, c) { c = c || {}; var s; t instanceof RegExp ? s = RegExp : (s = c.origin || self.location.origin, s = s instanceof RegExp ? s.source : r(s)), e = e.toLowerCase(); var a = new o(e, t, n, c); this.routes.has(s) || this.routes.set(s, new Map); var u = this.routes.get(s); u.has(e) || u.set(e, new Map); var f = u.get(e), h = a.regexp || a.fullUrlRegExp; f.has(h.source) && i.debug('"' + t + '" resolves to same regex as existing route.'), f.set(h.source, a) }, s.prototype.matchMethod = function (e, t) { var n = new URL(t), r = n.origin, o = n.pathname; return this._match(e, c(this.routes, r), o) || this._match(e, [this.routes.get(RegExp)], t) }, s.prototype._match = function (e, t, n) { if (0 === t.length) return null; for (var r = 0; r < t.length; r++) { var o = t[r], i = o && o.get(e.toLowerCase()); if (i) { var s = c(i, n); if (s.length > 0) return s[0].makeHandler(n) } } return null }, s.prototype.match = function (e) { return this.matchMethod(e.method, e.url) || this.matchMethod("any", e.url) }, t.exports = new s }, { "./helpers": 1, "./route": 5 }], 7: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache first [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (t) { var r = n.cache || o.cache, c = Date.now(); return i.isResponseFresh(t, r.maxAgeSeconds, c) ? t : i.fetchAndCache(e, n) }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 8: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache only [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (e) { var t = n.cache || o.cache, r = Date.now(); if (i.isResponseFresh(e, t.maxAgeSeconds, r)) return e }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 9: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: fastest [" + e.url + "]", n), new Promise(function (r, c) { var s = !1, a = [], u = function (e) { a.push(e.toString()), s ? c(new Error('Both cache and network failed: "' + a.join('", "') + '"')) : s = !0 }, f = function (e) { e instanceof Response ? r(e) : u("No result returned") }; o.fetchAndCache(e.clone(), n).then(f, u), i(e, t, n).then(f, u) }) } var o = e("../helpers"), i = e("./cacheOnly"); t.exports = r }, { "../helpers": 1, "./cacheOnly": 8 }], 10: [function (e, t, n) { t.exports = { networkOnly: e("./networkOnly"), networkFirst: e("./networkFirst"), cacheOnly: e("./cacheOnly"), cacheFirst: e("./cacheFirst"), fastest: e("./fastest") } }, { "./cacheFirst": 7, "./cacheOnly": 8, "./fastest": 9, "./networkFirst": 11, "./networkOnly": 12 }], 11: [function (e, t, n) { "use strict"; function r(e, t, n) { n = n || {}; var r = n.successResponses || o.successResponses, c = n.networkTimeoutSeconds || o.networkTimeoutSeconds; return i.debug("Strategy: network first [" + e.url + "]", n), i.openCache(n).then(function (t) { var s, a, u = []; if (c) { var f = new Promise(function (r) { s = setTimeout(function () { t.match(e).then(function (e) { var t = n.cache || o.cache, c = Date.now(), s = t.maxAgeSeconds; i.isResponseFresh(e, s, c) && r(e) }) }, 1e3 * c) }); u.push(f) } var h = i.fetchAndCache(e, n).then(function (e) { if (s && clearTimeout(s), r.test(e.status)) return e; throw i.debug("Response was an HTTP error: " + e.statusText, n), a = e, new Error("Bad response") }).catch(function (r) { return i.debug("Network or response error, fallback to cache [" + e.url + "]", n), t.match(e).then(function (e) { if (e) return e; if (a) return a; throw r }) }); return u.push(h), Promise.race(u) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 12: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: network only [" + e.url + "]", n), fetch(e) } var o = e("../helpers"); t.exports = r }, { "../helpers": 1 }], 13: [function (e, t, n) { "use strict"; var r = e("./options"), o = e("./router"), i = e("./helpers"), c = e("./strategies"), s = e("./listeners"); i.debug("Service Worker Toolbox is loading"), self.addEventListener("install", s.installListener), self.addEventListener("activate", s.activateListener), self.addEventListener("fetch", s.fetchListener), t.exports = { networkOnly: c.networkOnly, networkFirst: c.networkFirst, cacheOnly: c.cacheOnly, cacheFirst: c.cacheFirst, fastest: c.fastest, router: o, options: r, cache: i.cache, uncache: i.uncache, precache: i.precache } }, { "./helpers": 1, "./listeners": 3, "./options": 4, "./router": 6, "./strategies": 10 }], 14: [function (e, t, n) { t.exports = Array.isArray || function (e) { return "[object Array]" == Object.prototype.toString.call(e) } }, {}], 15: [function (e, t, n) { function r(e, t) { for (var n, r = [], o = 0, i = 0, c = "", s = t && t.delimiter || "/"; null != (n = x.exec(e));) { var f = n[0], h = n[1], p = n.index; if (c += e.slice(i, p), i = p + f.length, h) c += h[1]; else { var l = e[i], d = n[2], m = n[3], g = n[4], v = n[5], w = n[6], y = n[7]; c && (r.push(c), c = ""); var b = null != d && null != l && l !== d, E = "+" === w || "*" === w, R = "?" === w || "*" === w, k = n[2] || s, $ = g || v; r.push({ name: m || o++, prefix: d || "", delimiter: k, optional: R, repeat: E, partial: b, asterisk: !!y, pattern: $ ? u($) : y ? ".*" : "[^" + a(k) + "]+?" }) } } return i < e.length && (c += e.substr(i)), c && r.push(c), r } function o(e, t) { return s(r(e, t)) } function i(e) { return encodeURI(e).replace(/[\/?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function c(e) { return encodeURI(e).replace(/[?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function s(e) { for (var t = new Array(e.length), n = 0; n < e.length; n++)"object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$")); return function (n, r) { for (var o = "", s = n || {}, a = r || {}, u = a.pretty ? i : encodeURIComponent, f = 0; f < e.length; f++) { var h = e[f]; if ("string" != typeof h) { var p, l = s[h.name]; if (null == l) { if (h.optional) { h.partial && (o += h.prefix); continue } throw new TypeError('Expected "' + h.name + '" to be defined') } if (v(l)) { if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(l) + "`"); if (0 === l.length) { if (h.optional) continue; throw new TypeError('Expected "' + h.name + '" to not be empty') } for (var d = 0; d < l.length; d++) { if (p = u(l[d]), !t[f].test(p)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '", but received `' + JSON.stringify(p) + "`"); o += (0 === d ? h.prefix : h.delimiter) + p } } else { if (p = h.asterisk ? c(l) : u(l), !t[f].test(p)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + p + '"'); o += h.prefix + p } } else o += h } return o } } function a(e) { return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1") } function u(e) { return e.replace(/([=!:$\/()])/g, "\\$1") } function f(e, t) { return e.keys = t, e } function h(e) { return e.sensitive ? "" : "i" } function p(e, t) { var n = e.source.match(/\((?!\?)/g); if (n) for (var r = 0; r < n.length; r++)t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null }); return f(e, t) } function l(e, t, n) { for (var r = [], o = 0; o < e.length; o++)r.push(g(e[o], t, n).source); var i = new RegExp("(?:" + r.join("|") + ")", h(n)); return f(i, t) } function d(e, t, n) { return m(r(e, n), t, n) } function m(e, t, n) { v(t) || (n = t || n, t = []), n = n || {}; for (var r = n.strict, o = n.end !== !1, i = "", c = 0; c < e.length; c++) { var s = e[c]; if ("string" == typeof s) i += a(s); else { var u = a(s.prefix), p = "(?:" + s.pattern + ")"; t.push(s), s.repeat && (p += "(?:" + u + p + ")*"), p = s.optional ? s.partial ? u + "(" + p + ")?" : "(?:" + u + "(" + p + "))?" : u + "(" + p + ")", i += p } } var l = a(n.delimiter || "/"), d = i.slice(-l.length) === l; return r || (i = (d ? i.slice(0, -l.length) : i) + "(?:" + l + "(?=$))?"), i += o ? "$" : r && d ? "" : "(?=" + l + "|$)", f(new RegExp("^" + i, h(n)), t) } function g(e, t, n) { return v(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? p(e, t) : v(e) ? l(e, t, n) : d(e, t, n) } var v = e("isarray"); t.exports = g, t.exports.parse = r, t.exports.compile = o, t.exports.tokensToFunction = s, t.exports.tokensToRegExp = m; var x = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g") }, { isarray: 14 }], 16: [function (e, t, n) { !function () { var e = Cache.prototype.addAll, t = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/); if (t) var n = t[1], r = parseInt(t[2]); e && (!t || "Firefox" === n && r >= 46 || "Chrome" === n && r >= 50) || (Cache.prototype.addAll = function (e) { function t(e) { this.name = "NetworkError", this.code = 19, this.message = e } var n = this; return t.prototype = Object.create(Error.prototype), Promise.resolve().then(function () { if (arguments.length < 1) throw new TypeError; return e = e.map(function (e) { return e instanceof Request ? e : String(e) }), Promise.all(e.map(function (e) { "string" == typeof e && (e = new Request(e)); var n = new URL(e.url).protocol; if ("http:" !== n && "https:" !== n) throw new t("Invalid scheme"); return fetch(e.clone()) })) }).then(function (r) { if (r.some(function (e) { return !e.ok })) throw new t("Incorrect response status"); return Promise.all(r.map(function (t, r) { return n.put(e[r], t) })) }).then(function () { }) }, Cache.prototype.add = function (e) { return this.addAll([e]) }) }() }, {}] }, {}, [13])(13) });


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.
