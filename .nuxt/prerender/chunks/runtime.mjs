import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHost, getRequestProtocol, setResponseStatus, setResponseHeader, send as send$1, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, setHeader, getHeader, appendHeader, getQuery as getQuery$1, readBody, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/scule/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withHttps, withoutProtocol, withTrailingSlash, withLeadingSlash, withoutTrailingSlash, withBase, decodePath } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ufo/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/lru-cache.mjs';
import { toRouteMatcher, createRouter } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/radix3/dist/index.mjs';
import { toValue } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as resolve$1, isAbsolute } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/pathe/dist/index.mjs';
import nodemailer from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/nodemailer/lib/nodemailer.js';
import { findIndex, omit } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/@dword-design/functions/dist/index.js';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ipx/dist/index.mjs';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "3dc79a49-8e63-4d19-963b-ef7cc7c4be7f",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/sitemap.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2024-11-28T18:11:31.777Z"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "apiBaseUrl": "https://www.symbolgym.com/blogapi/public"
  },
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": false,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 600,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "5.3.5",
    "sitemaps": {
      "sitemap.xml": {
        "sitemapName": "sitemap.xml",
        "route": "sitemap.xml",
        "defaults": {},
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true
      }
    }
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "SymbolGymAPI",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt-app"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://www.symbolgym.com",
        "trailingSlash": true
      }
    ],
    "version": "2.2.18",
    "debug": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const normalizeFsKey = (item) => item.replaceAll(":", "_");
const _47Applications_47XAMPP_47xamppfiles_47htdocs_47SymbolGymAPI_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base });
  const lru = lruCache({ max: 1e3 });
  return {
    ...fs,
    // fall back to file system - only the bottom three methods are used in renderer
    async setItem(key, value, opts2) {
      await Promise.all([
        fs.setItem?.(normalizeFsKey(key), value, opts2),
        lru.setItem?.(key, value, opts2)
      ]);
    },
    async hasItem(key, opts2) {
      return await lru.hasItem(key, opts2) || await fs.hasItem(normalizeFsKey(key), opts2);
    },
    async getItem(key, opts2) {
      return await lru.getItem(key, opts2) || await fs.getItem(normalizeFsKey(key), opts2);
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', _47Applications_47XAMPP_47xamppfiles_47htdocs_47SymbolGymAPI_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/.nuxt/cache/nitro/prerender"}));
storage.mount('data', fsDriver({"driver":"fsLite","base":"/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      stack.push(entry);
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined") {
          siteConfig[k] = val;
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  let protocol = cert && key || !false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function useSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  return !!(lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

function defineNitroPlugin(def) {
  return def;
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

const PRERENDER_NO_SSR_ROUTES = /* @__PURE__ */ new Set(["/index.html", "/200.html", "/404.html"]);
const _oRutcguYHB = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    const url = event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (PRERENDER_NO_SSR_ROUTES.has(url) );
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const plugins = [
  _oRutcguYHB
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send$1(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send$1(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send$1(event, html);
});

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"93bf-PzovdaOy7VAPS67u/UYQZBqRjI4\"",
    "mtime": "2024-11-28T18:11:38.702Z",
    "size": 37823,
    "path": "../../.output/public/200.html"
  },
  "/404.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"93bf-PzovdaOy7VAPS67u/UYQZBqRjI4\"",
    "mtime": "2024-11-28T18:11:38.702Z",
    "size": 37823,
    "path": "../../.output/public/404.html"
  },
  "/_payload.json": {
    "type": "application/json",
    "etag": "\"10835-pLwAJsEEX88BgALhp2qdVAUsBiE\"",
    "mtime": "2024-11-28T18:11:40.266Z",
    "size": 67637,
    "path": "../../.output/public/_payload.json"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f173-qsyB2gc0USylu7C8TBGbHOvVVb0\"",
    "mtime": "2024-11-28T18:11:39.318Z",
    "size": 61811,
    "path": "../../.output/public/index.html"
  },
  "/adatvedelmi-tajekoztato/_payload.json": {
    "type": "application/json",
    "etag": "\"45-dQ5/lzmGvOCwUCb73JE1SOpYlgQ\"",
    "mtime": "2024-11-28T18:11:40.489Z",
    "size": 69,
    "path": "../../.output/public/adatvedelmi-tajekoztato/_payload.json"
  },
  "/adatvedelmi-tajekoztato/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1026e-P+IdgqMg8f2wLaI7Du9tBVxsCPM\"",
    "mtime": "2024-11-28T18:11:40.117Z",
    "size": 66158,
    "path": "../../.output/public/adatvedelmi-tajekoztato/index.html"
  },
  "/coreerosites/_payload.json": {
    "type": "application/json",
    "etag": "\"45-5FO/fzZexBATFKpZRUR60cz224c\"",
    "mtime": "2024-11-28T18:11:40.477Z",
    "size": 69,
    "path": "../../.output/public/coreerosites/_payload.json"
  },
  "/coreerosites/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c8e0-X/ihIXg8pn04JQ7n9/ve5l1db9w\"",
    "mtime": "2024-11-28T18:11:40.088Z",
    "size": 51424,
    "path": "../../.output/public/coreerosites/index.html"
  },
  "/__sitemap__/style.xsl": {
    "type": "application/xml",
    "etag": "\"174e-04KStjaK+j7dbchiMHqnnHF1ICc\"",
    "mtime": "2024-11-28T18:11:38.621Z",
    "size": 5966,
    "path": "../../.output/public/__sitemap__/style.xsl"
  },
  "/ergometergyakorlatok/_payload.json": {
    "type": "application/json",
    "etag": "\"45-8eMg5mvN25pHd2LrI5D8DagOcR8\"",
    "mtime": "2024-11-28T18:11:40.479Z",
    "size": 69,
    "path": "../../.output/public/ergometergyakorlatok/_payload.json"
  },
  "/ergometergyakorlatok/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c867-pPCLXegQNwRB8bYt9PI2l9erTIw\"",
    "mtime": "2024-11-28T18:11:40.110Z",
    "size": 51303,
    "path": "../../.output/public/ergometergyakorlatok/index.html"
  },
  "/eroemeles/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sONvyZpstpOPECzjOy68c7L7F/Q\"",
    "mtime": "2024-11-28T18:11:40.466Z",
    "size": 69,
    "path": "../../.output/public/eroemeles/_payload.json"
  },
  "/eroemeles/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c705-s0tEyLivM0aPOmsWAvda3TCHo5A\"",
    "mtime": "2024-11-28T18:11:40.088Z",
    "size": 50949,
    "path": "../../.output/public/eroemeles/index.html"
  },
  "/galeria/_payload.json": {
    "type": "application/json",
    "etag": "\"45-OdBbiMsn3aPQcUZI2x73N/s4klI\"",
    "mtime": "2024-11-28T18:11:40.489Z",
    "size": 69,
    "path": "../../.output/public/galeria/_payload.json"
  },
  "/galeria/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"bfd7-gzDxxXKVU32rs7eVFXAiiNyuR4s\"",
    "mtime": "2024-11-28T18:11:40.297Z",
    "size": 49111,
    "path": "../../.output/public/galeria/index.html"
  },
  "/gyerekedzesek/_payload.json": {
    "type": "application/json",
    "etag": "\"45-+XadIeo7c+z6pdZ4J9qreYSdV5w\"",
    "mtime": "2024-11-28T18:11:40.479Z",
    "size": 69,
    "path": "../../.output/public/gyerekedzesek/_payload.json"
  },
  "/gyerekedzesek/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c358-W7UFv+iASB7X3DtyXPdV+prvAM8\"",
    "mtime": "2024-11-28T18:11:40.110Z",
    "size": 50008,
    "path": "../../.output/public/gyerekedzesek/index.html"
  },
  "/kapcsolat/_payload.json": {
    "type": "application/json",
    "etag": "\"45-0xwPMrxuAajwiTT5DrnTKg+T6AQ\"",
    "mtime": "2024-11-28T18:11:40.466Z",
    "size": 69,
    "path": "../../.output/public/kapcsolat/_payload.json"
  },
  "/kapcsolat/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"b838-5rWhFFB7xtLaAInMIg7NOu/Ww3s\"",
    "mtime": "2024-11-28T18:11:40.088Z",
    "size": 47160,
    "path": "../../.output/public/kapcsolat/index.html"
  },
  "/kettlebell/_payload.json": {
    "type": "application/json",
    "etag": "\"45-9+XfNAohqhX9RFGCZcpwhNOdriw\"",
    "mtime": "2024-11-28T18:11:40.478Z",
    "size": 69,
    "path": "../../.output/public/kettlebell/_payload.json"
  },
  "/kettlebell/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c8d6-vd2XCNlRmTtYYxucI4RvVwq4i0k\"",
    "mtime": "2024-11-28T18:11:40.104Z",
    "size": 51414,
    "path": "../../.output/public/kettlebell/index.html"
  },
  "/mobilizacio/_payload.json": {
    "type": "application/json",
    "etag": "\"45-EGMxGQLVEHsnb7UI/L/NFDkJWqo\"",
    "mtime": "2024-11-28T18:11:40.479Z",
    "size": 69,
    "path": "../../.output/public/mobilizacio/_payload.json"
  },
  "/mobilizacio/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c943-BE42ctRIfuipG/80SOcy77I+9tc\"",
    "mtime": "2024-11-28T18:11:40.110Z",
    "size": 51523,
    "path": "../../.output/public/mobilizacio/index.html"
  },
  "/posts/_payload.json": {
    "type": "application/json",
    "etag": "\"10835-eImzp0WmVP+pS678L0S6XQlsZVE\"",
    "mtime": "2024-11-28T18:11:40.588Z",
    "size": 67637,
    "path": "../../.output/public/posts/_payload.json"
  },
  "/posts/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"d23c-XA/ECPGW3HBHK4Bx1c9ORwNnSx4\"",
    "mtime": "2024-11-28T18:11:40.554Z",
    "size": 53820,
    "path": "../../.output/public/posts/index.html"
  },
  "/szemelyesedzesterv/_payload.json": {
    "type": "application/json",
    "etag": "\"45-qN2o8ClS8g1QafdXdVBk62d2TSw\"",
    "mtime": "2024-11-28T18:11:40.477Z",
    "size": 69,
    "path": "../../.output/public/szemelyesedzesterv/_payload.json"
  },
  "/szemelyesedzesterv/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c8d6-Nsnz4A+WS52CM3/CYsedVtMmFog\"",
    "mtime": "2024-11-28T18:11:40.088Z",
    "size": 51414,
    "path": "../../.output/public/szemelyesedzesterv/index.html"
  },
  "/rolunk/_payload.json": {
    "type": "application/json",
    "etag": "\"45-O0+qYqYCJOtMxfLcLU1rHJZSdb4\"",
    "mtime": "2024-11-28T18:11:40.335Z",
    "size": 69,
    "path": "../../.output/public/rolunk/_payload.json"
  },
  "/rolunk/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"b9a6-Zqz4EjTxICv+1ge6trwKyDeSFFQ\"",
    "mtime": "2024-11-28T18:11:40.088Z",
    "size": 47526,
    "path": "../../.output/public/rolunk/index.html"
  },
  "/szemelyreszabottetrend/_payload.json": {
    "type": "application/json",
    "etag": "\"45-RLcRJXn9dBJ2YayvHOHT1qvFGaw\"",
    "mtime": "2024-11-28T18:11:40.538Z",
    "size": 69,
    "path": "../../.output/public/szemelyreszabottetrend/_payload.json"
  },
  "/szemelyreszabottetrend/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c681-g5N87BJ5FHSyaNYn7TjqAPqe7pU\"",
    "mtime": "2024-11-28T18:11:40.479Z",
    "size": 50817,
    "path": "../../.output/public/szemelyreszabottetrend/index.html"
  },
  "/szolgaltatasok/_payload.json": {
    "type": "application/json",
    "etag": "\"45-T9Pk2n0aQDk4DS69EZc3fdlSw6E\"",
    "mtime": "2024-11-28T18:11:40.439Z",
    "size": 69,
    "path": "../../.output/public/szolgaltatasok/_payload.json"
  },
  "/szolgaltatasok/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c8e7-MnYHmPZbyR+O+Pl7ToVkke1tJlc\"",
    "mtime": "2024-11-28T18:11:40.088Z",
    "size": 51431,
    "path": "../../.output/public/szolgaltatasok/index.html"
  },
  "/testsulygyakorlatok/_payload.json": {
    "type": "application/json",
    "etag": "\"45-7nQRF5Ytx6iNFnNoLyEoxZWEzWw\"",
    "mtime": "2024-11-28T18:11:40.477Z",
    "size": 69,
    "path": "../../.output/public/testsulygyakorlatok/_payload.json"
  },
  "/testsulygyakorlatok/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c453-deoWzZ9q08qgT5OvwNMwiZArg3s\"",
    "mtime": "2024-11-28T18:11:40.089Z",
    "size": 50259,
    "path": "../../.output/public/testsulygyakorlatok/index.html"
  },
  "/posts/adatvedelmi-tajekoztato/_payload.json": {
    "type": "application/json",
    "etag": "\"45-GCcWxBxXMt2/3fTPZd0CjQQ+vZc\"",
    "mtime": "2024-11-28T18:11:40.671Z",
    "size": 69,
    "path": "../../.output/public/posts/adatvedelmi-tajekoztato/_payload.json"
  },
  "/posts/adatvedelmi-tajekoztato/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"cf0f-7cOBk5j0hEms7UWKETfMJA9dvpk\"",
    "mtime": "2024-11-28T18:11:40.666Z",
    "size": 53007,
    "path": "../../.output/public/posts/adatvedelmi-tajekoztato/index.html"
  },
  "/posts/crossfit-oroshaza-ero-allokepesseg-es-kozosseg-egy-helyen/_payload.json": {
    "type": "application/json",
    "etag": "\"215c-O8khfRtjdS3cH7wazrsUbsU6BKI\"",
    "mtime": "2024-11-28T18:11:40.549Z",
    "size": 8540,
    "path": "../../.output/public/posts/crossfit-oroshaza-ero-allokepesseg-es-kozosseg-egy-helyen/_payload.json"
  },
  "/posts/crossfit-oroshaza-ero-allokepesseg-es-kozosseg-egy-helyen/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"d212-/djX+C69aPFnJB+uhpyBDlVPsJQ\"",
    "mtime": "2024-11-28T18:11:40.500Z",
    "size": 53778,
    "path": "../../.output/public/posts/crossfit-oroshaza-ero-allokepesseg-es-kozosseg-egy-helyen/index.html"
  },
  "/posts/edzoterem-oroshaza-formaba-lendulni-kozossegben-konnyebb/_payload.json": {
    "type": "application/json",
    "etag": "\"19eb-KFpdRNE1RrbK0DodWlR55+IfawY\"",
    "mtime": "2024-11-28T18:11:40.496Z",
    "size": 6635,
    "path": "../../.output/public/posts/edzoterem-oroshaza-formaba-lendulni-kozossegben-konnyebb/_payload.json"
  },
  "/posts/edzoterem-oroshaza-formaba-lendulni-kozossegben-konnyebb/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"cbc1-RzGkaxWji7ti1p/AgsHLMXJlbw0\"",
    "mtime": "2024-11-28T18:11:40.338Z",
    "size": 52161,
    "path": "../../.output/public/posts/edzoterem-oroshaza-formaba-lendulni-kozossegben-konnyebb/index.html"
  },
  "/posts/ero-allokepesseg-fejlesztes-oroshazan-eletmod-es-edzes-lehetosegek-a-symbol-gym-edzotermeben/_payload.json": {
    "type": "application/json",
    "etag": "\"31f9-8q7N8SKl9WxWQqUoi8StwTaFMow\"",
    "mtime": "2024-11-28T18:11:40.925Z",
    "size": 12793,
    "path": "../../.output/public/posts/ero-allokepesseg-fejlesztes-oroshazan-eletmod-es-edzes-lehetosegek-a-symbol-gym-edzotermeben/_payload.json"
  },
  "/posts/ero-allokepesseg-fejlesztes-oroshazan-eletmod-es-edzes-lehetosegek-a-symbol-gym-edzotermeben/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"e35f-T42yKMd+sVH/yzpWtjOIXM+own8\"",
    "mtime": "2024-11-28T18:11:40.914Z",
    "size": 58207,
    "path": "../../.output/public/posts/ero-allokepesseg-fejlesztes-oroshazan-eletmod-es-edzes-lehetosegek-a-symbol-gym-edzotermeben/index.html"
  },
  "/posts/fitt-es-egeszseges-eletmod-oroshazan-fejleszd-erodet-es-allokepessegedet-a-symbol-gymben/_payload.json": {
    "type": "application/json",
    "etag": "\"3e55-+0nTAaWB8Run9uKQBmIwfxTj7pI\"",
    "mtime": "2024-11-28T18:11:40.822Z",
    "size": 15957,
    "path": "../../.output/public/posts/fitt-es-egeszseges-eletmod-oroshazan-fejleszd-erodet-es-allokepessegedet-a-symbol-gymben/_payload.json"
  },
  "/posts/fitt-es-egeszseges-eletmod-oroshazan-fejleszd-erodet-es-allokepessegedet-a-symbol-gymben/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"eeb0-YpqEHL/qlZ2I3LQnT/r4+xLRP+M\"",
    "mtime": "2024-11-28T18:11:40.815Z",
    "size": 61104,
    "path": "../../.output/public/posts/fitt-es-egeszseges-eletmod-oroshazan-fejleszd-erodet-es-allokepessegedet-a-symbol-gymben/index.html"
  },
  "/posts/funkcionalis-edzes-oroshazan-ero-es-allokepesseg-fejlesztes-a-symbol-gym-edzotermeben/_payload.json": {
    "type": "application/json",
    "etag": "\"33e5-nhuohO+0NeCGtXQwrbhlxm27HI0\"",
    "mtime": "2024-11-28T18:11:40.822Z",
    "size": 13285,
    "path": "../../.output/public/posts/funkcionalis-edzes-oroshazan-ero-es-allokepesseg-fejlesztes-a-symbol-gym-edzotermeben/_payload.json"
  },
  "/posts/funkcionalis-edzes-oroshazan-ero-es-allokepesseg-fejlesztes-a-symbol-gym-edzotermeben/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"e546-0kxMfGXPQ+3YtIAmwYoGM7f72lo\"",
    "mtime": "2024-11-28T18:11:40.815Z",
    "size": 58694,
    "path": "../../.output/public/posts/funkcionalis-edzes-oroshazan-ero-es-allokepesseg-fejlesztes-a-symbol-gym-edzotermeben/index.html"
  },
  "/posts/szemelyi-edzes-oroshaza-egyeni-celokhoz-igazitott-profi-tamogatas/_payload.json": {
    "type": "application/json",
    "etag": "\"2822-N1bfn6MHxxygU46mGL72uFR0i8E\"",
    "mtime": "2024-11-28T18:11:40.551Z",
    "size": 10274,
    "path": "../../.output/public/posts/szemelyi-edzes-oroshaza-egyeni-celokhoz-igazitott-profi-tamogatas/_payload.json"
  },
  "/posts/szemelyi-edzes-oroshaza-egyeni-celokhoz-igazitott-profi-tamogatas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"d939-8uG3wmfrtL58GbDVSNzAmFo1L9A\"",
    "mtime": "2024-11-28T18:11:40.500Z",
    "size": 55609,
    "path": "../../.output/public/posts/szemelyi-edzes-oroshaza-egyeni-celokhoz-igazitott-profi-tamogatas/index.html"
  },
  "/_ipx/f_webp&q_90&s_1664x956/img/team.webp": {
    "type": "image/webp",
    "etag": "\"4c10e-0IuGQHRD8BFlqignclYSdZMKU20\"",
    "mtime": "2024-11-28T18:11:40.695Z",
    "size": 311566,
    "path": "../../.output/public/_ipx/f_webp&q_90&s_1664x956/img/team.webp"
  },
  "/_ipx/f_webp&q_90&s_1536x670/img/hero-bg.webp": {
    "type": "image/webp",
    "etag": "\"a3c6-YrTpij3ruYt77gTLRwYs40DaW+o\"",
    "mtime": "2024-11-28T18:11:40.257Z",
    "size": 41926,
    "path": "../../.output/public/_ipx/f_webp&q_90&s_1536x670/img/hero-bg.webp"
  },
  "/_ipx/_/img/DigitalSeedLogo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b38-rDEK8qhZ/4fGB+OUJ+mlJ5B9WTY\"",
    "mtime": "2024-11-28T18:11:40.262Z",
    "size": 6968,
    "path": "../../.output/public/_ipx/_/img/DigitalSeedLogo.svg"
  },
  "/_ipx/_/img/FacebookLogo.svg": {
    "type": "image/svg+xml",
    "etag": "\"248-JNE7HX3iaVuudZpYnTlZDz8UHj0\"",
    "mtime": "2024-11-28T18:11:40.261Z",
    "size": 584,
    "path": "../../.output/public/_ipx/_/img/FacebookLogo.svg"
  },
  "/_ipx/_/img/InstagramLogo.svg": {
    "type": "image/svg+xml",
    "etag": "\"28b-/4AigNw1iociBfBe8pieET0+yPY\"",
    "mtime": "2024-11-28T18:11:40.261Z",
    "size": 651,
    "path": "../../.output/public/_ipx/_/img/InstagramLogo.svg"
  },
  "/_ipx/_/img/form-bg.webp": {
    "type": "image/webp",
    "etag": "\"5d86-yudq15JSw1WHxb0Vxo2cHatfvWk\"",
    "mtime": "2024-11-28T18:11:40.246Z",
    "size": 23942,
    "path": "../../.output/public/_ipx/_/img/form-bg.webp"
  },
  "/_ipx/_/img/logo.png": {
    "type": "image/png",
    "etag": "\"17b2f-ytGx2neJALbX1sjDwAGdAFX7haE\"",
    "mtime": "2024-11-28T18:11:40.257Z",
    "size": 97071,
    "path": "../../.output/public/_ipx/_/img/logo.png"
  },
  "/_ipx/_/img/logo_white.svg": {
    "type": "image/svg+xml",
    "etag": "\"168330-W3eyrh9/SZR/UbX7mfuMw8DWcQg\"",
    "mtime": "2024-11-28T18:11:40.257Z",
    "size": 1475376,
    "path": "../../.output/public/_ipx/_/img/logo_white.svg"
  },
  "/_ipx/_/img/red-bg.webp": {
    "type": "image/webp",
    "etag": "\"3c4a-VDC8LLK/GOVJlUQ0fhP8if1YUk4\"",
    "mtime": "2024-11-28T18:11:40.257Z",
    "size": 15434,
    "path": "../../.output/public/_ipx/_/img/red-bg.webp"
  },
  "/_ipx/_/img/team.webp": {
    "type": "image/webp",
    "etag": "\"a79f0-mGsEVNjEes4GicBgtb6vIokPEsU\"",
    "mtime": "2024-11-28T18:11:41.602Z",
    "size": 686576,
    "path": "../../.output/public/_ipx/_/img/team.webp"
  },
  "/_ipx/f_webp&q_90&s_3072x1340/img/hero-bg.webp": {
    "type": "image/webp",
    "etag": "\"a3c6-YrTpij3ruYt77gTLRwYs40DaW+o\"",
    "mtime": "2024-11-28T18:11:40.257Z",
    "size": 41926,
    "path": "../../.output/public/_ipx/f_webp&q_90&s_3072x1340/img/hero-bg.webp"
  },
  "/_ipx/f_webp&q_90&s_832x478/img/team.webp": {
    "type": "image/webp",
    "etag": "\"192c8-p289X5J4otFe5fwTG7VvGhXsgmc\"",
    "mtime": "2024-11-28T18:11:40.548Z",
    "size": 103112,
    "path": "../../.output/public/_ipx/f_webp&q_90&s_832x478/img/team.webp"
  },
  "/_ipx/_/img/hero-icons/01_erosites.svg": {
    "type": "image/svg+xml",
    "etag": "\"1552-QnykPgPFWVxbpWwV8lNiGMCCrFc\"",
    "mtime": "2024-11-28T18:11:40.262Z",
    "size": 5458,
    "path": "../../.output/public/_ipx/_/img/hero-icons/01_erosites.svg"
  },
  "/_ipx/_/img/hero-icons/02_szemelyi_edzok.svg": {
    "type": "image/svg+xml",
    "etag": "\"1890-4pki6oUvz4hU9IszKs9QMdZLCKM\"",
    "mtime": "2024-11-28T18:11:40.262Z",
    "size": 6288,
    "path": "../../.output/public/_ipx/_/img/hero-icons/02_szemelyi_edzok.svg"
  },
  "/_ipx/_/img/hero-icons/03_edzestervek.svg": {
    "type": "image/svg+xml",
    "etag": "\"171b-93V7ZXDwXg8sreydftM9fVBVWfs\"",
    "mtime": "2024-11-28T18:11:40.263Z",
    "size": 5915,
    "path": "../../.output/public/_ipx/_/img/hero-icons/03_edzestervek.svg"
  },
  "/_ipx/_/img/hero-icons/04_egyeni_etrend_tervezes.svg": {
    "type": "image/svg+xml",
    "etag": "\"1343-3sBjmWOjEi6kqhGihTrPU/ZyRQ8\"",
    "mtime": "2024-11-28T18:11:40.257Z",
    "size": 4931,
    "path": "../../.output/public/_ipx/_/img/hero-icons/04_egyeni_etrend_tervezes.svg"
  },
  "/_ipx/_/img/hero-icons/05_kiemelkedo_edzopark.svg": {
    "type": "image/svg+xml",
    "etag": "\"15a9-DWsclTMyatyeHkbSiBT1DDGJR/U\"",
    "mtime": "2024-11-28T18:11:40.263Z",
    "size": 5545,
    "path": "../../.output/public/_ipx/_/img/hero-icons/05_kiemelkedo_edzopark.svg"
  },
  "/_ipx/_/img/szolgaltatasok/01_sajat_testsuly.svg": {
    "type": "image/svg+xml",
    "etag": "\"1bf5-Iz5oVxg4Z5y9Cmk+NbtGpc4qbR8\"",
    "mtime": "2024-11-28T18:11:40.441Z",
    "size": 7157,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/01_sajat_testsuly.svg"
  },
  "/_ipx/_/img/szolgaltatasok/02_kettleball.svg": {
    "type": "image/svg+xml",
    "etag": "\"1333-b98iXlPpJa9HWFBMi8jTyUW8ZYM\"",
    "mtime": "2024-11-28T18:11:40.467Z",
    "size": 4915,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/02_kettleball.svg"
  },
  "/_ipx/_/img/szolgaltatasok/03_ergometeres.svg": {
    "type": "image/svg+xml",
    "etag": "\"16a1-5e9tvTnDPW014602RpQyV6B9Z68\"",
    "mtime": "2024-11-28T18:11:40.467Z",
    "size": 5793,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/03_ergometeres.svg"
  },
  "/_ipx/_/img/szolgaltatasok/04_eroemelo.svg": {
    "type": "image/svg+xml",
    "etag": "\"155f-yDQPxYUvWxoiwrLjfptNuUfTJIo\"",
    "mtime": "2024-11-28T18:11:40.467Z",
    "size": 5471,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/04_eroemelo.svg"
  },
  "/_ipx/_/img/szolgaltatasok/05_mobilizacios.svg": {
    "type": "image/svg+xml",
    "etag": "\"197c-CIagEuq011ogZ8TluF1jLtChS9w\"",
    "mtime": "2024-11-28T18:11:40.467Z",
    "size": 6524,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/05_mobilizacios.svg"
  },
  "/_ipx/_/img/szolgaltatasok/06_core_izmok.svg": {
    "type": "image/svg+xml",
    "etag": "\"1bdb-GCJH+tv5EzlebJIK+rsGSOiDm1Q\"",
    "mtime": "2024-11-28T18:11:40.472Z",
    "size": 7131,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/06_core_izmok.svg"
  },
  "/_ipx/_/img/szolgaltatasok/07_egyedi_edzesterv.svg": {
    "type": "image/svg+xml",
    "etag": "\"1730-iSsNLFT+a+BgtIUU27yn+0rpj9I\"",
    "mtime": "2024-11-28T18:11:40.477Z",
    "size": 5936,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/07_egyedi_edzesterv.svg"
  },
  "/_ipx/_/img/szolgaltatasok/08_egyeni_etrend.svg": {
    "type": "image/svg+xml",
    "etag": "\"1352-DDRnVJDyVldf5h5xvVkH+m4me30\"",
    "mtime": "2024-11-28T18:11:40.551Z",
    "size": 4946,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/08_egyeni_etrend.svg"
  },
  "/_ipx/_/img/szolgaltatasok/gyermek.svg": {
    "type": "image/svg+xml",
    "etag": "\"e61-yprv7W7O9Tkbiz5xal0EPUFqshw\"",
    "mtime": "2024-11-28T18:11:40.477Z",
    "size": 3681,
    "path": "../../.output/public/_ipx/_/img/szolgaltatasok/gyermek.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _OqzT32 = defineEventHandler(async (e) => {
  if (e.context.siteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = createSiteConfigStack({
    debug: config.debug
  });
  const appConfig = useAppConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (appConfig.site) {
    siteConfig.push({
      _priority: -2,
      _context: "app:config",
      ...appConfig.site
    });
  }
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
});

const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSimpleSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _Y07h8t = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSimpleSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const isNotIndexButHasIndex = referrer !== fixPath("/sitemap.xml") && parseURL(referrer).pathname.endsWith("-sitemap.xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function resolve(s, resolvers) {
  if (typeof s === "undefined")
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function normaliseSitemapUrls(data, resolvers) {
  const entries = data.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => {
    e = { ...e };
    if (e.url) {
      e.loc = e.url;
      delete e.url;
    }
    e.loc = fixSlashes(false, e.loc);
    return e;
  }).filter(Boolean);
  function normaliseEntry(e) {
    if (e.lastmod) {
      const date = normaliseDate(e.lastmod);
      if (date)
        e.lastmod = date;
      else
        delete e.lastmod;
    }
    if (!e.lastmod)
      delete e.lastmod;
    e.loc = resolve(e.loc, resolvers);
    if (e.alternatives) {
      e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
        const a = { ...e2 };
        if (typeof a.href === "string")
          a.href = resolve(a.href, resolvers);
        else if (typeof a.href === "object" && a.href)
          a.href = resolve(a.href.href, resolvers);
        return a;
      }), "hreflang");
    }
    if (e.images) {
      e.images = mergeOnKey(e.images.map((i) => {
        i = { ...i };
        i.loc = resolve(i.loc, resolvers);
        return i;
      }), "loc");
    }
    if (e.videos) {
      e.videos = e.videos.map((v) => {
        v = { ...v };
        if (v.content_loc)
          v.content_loc = resolve(v.content_loc, resolvers);
        return v;
      });
    }
    return e;
  }
  return mergeOnKey(
    entries.map(normaliseEntry).map((e) => ({ ...e, _key: `${e._sitemap || ""}${e.loc}` })),
    "_key"
  );
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isHtmlResponse = false;
  try {
    const urls = await globalThis.$fetch(url, {
      ...options,
      responseType: "json",
      signal: timeoutController.signal,
      headers: defu$1(options?.headers, {
        Accept: "application/json"
      }, event ? { Host: getRequestHost(event, { xForwardedHost: true }) } : {}),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isHtmlResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    abortRequestTimeout && clearTimeout(abortRequestTimeout);
  }
}
function globalSitemapSources() {
  return import('./virtual/global-sources.mjs').then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? import('./virtual/child-sources.mjs').then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

function filterSitemapUrls(_urls, options) {
  const urlFilter = createFilter({
    include: options.include,
    exclude: options.exclude
  });
  return _urls.filter((e) => {
    let path = e.loc;
    try {
      path = parseURL(e.loc).pathname;
    } catch {
      return false;
    }
    if (!urlFilter(path))
      return false;
    if (options.isMultiSitemap && e._sitemap && options.sitemapName)
      return e._sitemap === options.sitemapName;
    return true;
  });
}

function normaliseI18nSources(sources, { autoI18n, isI18nMapped, include, exclude }) {
  const filterPath = createPathFilter({
    include,
    exclude
  });
  if (autoI18n && isI18nMapped) {
    return sources.map((s) => {
      const urls = (s.urls || []).map((_url) => {
        const url = typeof _url === "string" ? { loc: _url } : _url;
        url.loc = url.loc || url.url;
        if (!hasProtocol(url.loc, { acceptRelative: true }))
          url.loc = withLeadingSlash(url.loc);
        return url;
      });
      s.urls = urls.map((url) => {
        if (url._sitemap || url._i18nTransform)
          return url;
        if (url.loc && !hasProtocol(url.loc, { acceptRelative: true })) {
          const match = splitForLocales(url.loc, autoI18n.locales.map((l) => l.code));
          const localeCode = match[0] || autoI18n.defaultLocale;
          const pathWithoutPrefix = match[1];
          const locale = autoI18n.locales.find((e) => e.code === localeCode);
          if (locale) {
            if (!url.alternatives) {
              const alternatives = urls.map((u) => {
                if (u._sitemap || u._i18nTransform)
                  return false;
                if (u?.loc) {
                  if (!filterPath(u.loc))
                    return false;
                  const [_localeCode, _pathWithoutPrefix] = splitForLocales(u.loc, autoI18n.locales.map((l) => l.code));
                  if (pathWithoutPrefix === _pathWithoutPrefix) {
                    const entries = [];
                    if (_localeCode === autoI18n.defaultLocale) {
                      entries.push({
                        href: u.loc,
                        hreflang: "x-default"
                      });
                    }
                    entries.push({
                      href: u.loc,
                      hreflang: _localeCode || autoI18n.defaultLocale
                    });
                    return entries;
                  }
                }
                return false;
              }).flat().filter(Boolean);
              if (alternatives.length)
                url.alternatives = alternatives;
            }
            return {
              _sitemap: locale.iso || locale.code,
              ...url
            };
          }
        }
        return url;
      });
      return s;
    });
  }
  return sources;
}
function applyI18nEnhancements(_urls, options) {
  const { autoI18n, include, exclude } = options;
  const filterPath = createPathFilter({
    include,
    exclude
  });
  return _urls.map((e) => {
    if (!e._i18nTransform)
      return e;
    delete e._i18nTransform;
    const parsedURL = parseURL(e.loc);
    const path = withLeadingSlash(parsedURL.pathname + parsedURL.search + parsedURL.hash);
    const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
    let pathWithoutLocale = path;
    let locale;
    if (match[0]) {
      pathWithoutLocale = match[1] || "/";
      locale = match[0];
    }
    if (locale && false) {
      console.warn("You're providing a locale in the url, but the url is marked as inheritI18n. This will cause issues with the sitemap. Please remove the locale from the url.");
      return e;
    }
    if (autoI18n.differentDomains) {
      return {
        // will force it to pass filter
        _sitemap: options.sitemapName,
        ...e,
        alternatives: [
          {
            // apply default locale domain
            ...autoI18n.locales.find((l) => [l.code, l.iso].includes(autoI18n.defaultLocale)),
            code: "x-default"
          },
          ...autoI18n.locales.filter((l) => !!l.domain)
        ].map((locale2) => {
          return {
            hreflang: locale2.iso || locale2.code,
            href: joinURL(withHttps(locale2.domain), pathWithoutLocale)
          };
        })
      };
    }
    return autoI18n.locales.map((l) => {
      let loc = joinURL(`/${l.code}`, pathWithoutLocale);
      if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
        loc = pathWithoutLocale;
      return {
        _sitemap: options.isI18nMapped ? l.iso || l.code : void 0,
        ...e,
        loc,
        alternatives: [{ code: "x-default" }, ...autoI18n.locales].map((locale2) => {
          const code = locale2.code === "x-default" ? autoI18n.defaultLocale : locale2.code;
          const isDefault = locale2.code === "x-default" || locale2.code === autoI18n.defaultLocale;
          let href = "";
          if (autoI18n.strategy === "prefix") {
            href = joinURL("/", code, pathWithoutLocale);
          } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
            if (isDefault) {
              href = pathWithoutLocale;
            } else {
              href = joinURL("/", code, pathWithoutLocale);
            }
          }
          const hreflang = locale2.iso || locale2.code;
          if (!filterPath(href))
            return false;
          return {
            hreflang,
            href
          };
        }).filter(Boolean)
      };
    });
  }).flat();
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function buildSitemap(sitemap, resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize,
    // xls
    version,
    xsl,
    credits
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls2) {
    return sortEntries ? sortSitemapUrls(urls2) : urls2;
  }
  function maybeSlice(urls2) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls2.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls2;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.iso, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: !_tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sources = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sources.push(...await childSitemapSources(sitemap));
  let resolvedSources = await resolveSitemapSources(sources, resolvers.event);
  if (autoI18n)
    resolvedSources = normaliseI18nSources(resolvedSources, { autoI18n, isI18nMapped, ...sitemap });
  const normalisedUrls = normaliseSitemapUrls(resolvedSources.map((e) => e.urls).flat(), resolvers);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  let enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults)).map((e) => {
    const path = parseURL(e.loc).pathname;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.index !== "undefined" && !routeRules.index)
      return false;
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase() === "noindex");
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu$1(e, routeRules.sitemap) : e;
  }).filter(Boolean);
  if (autoI18n?.locales)
    enhancedUrls = applyI18nEnhancements(enhancedUrls, { isI18nMapped, autoI18n, ...sitemap });
  const filteredUrls = filterSitemapUrls(enhancedUrls, { event: resolvers.event, isMultiSitemap, autoI18n, ...sitemap });
  const sortedUrls = maybeSort(filteredUrls);
  const slicedUrls = maybeSlice(sortedUrls);
  const nitro = useNitroApp();
  const ctx = {
    urls: slicedUrls,
    sitemapName: sitemap.sitemapName
  };
  await nitro.hooks.callHook("sitemap:resolved", ctx);
  const urls = maybeSort(normaliseSitemapUrls(ctx.urls, resolvers));
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits });
}

async function buildSitemapIndex(resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoLastmod,
    // chunking
    defaultSitemapsChunkSize,
    autoI18n,
    isI18nMapped,
    sortEntries,
    // xls
    version,
    xsl,
    credits
  } = runtimeConfig;
  if (!sitemaps)
    throw new Error("Attempting to build a sitemap index without required `sitemaps` configuration.");
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  const isChunking = typeof sitemaps.chunks !== "undefined";
  const chunks = {};
  if (isChunking) {
    const sitemap = sitemaps.chunks;
    const sources = await resolveSitemapSources(await globalSitemapSources());
    const normalisedUrls = normaliseSitemapUrls(sources.map((e) => e.urls).flat(), resolvers);
    let enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults));
    if (autoI18n?.locales)
      enhancedUrls = applyI18nEnhancements(enhancedUrls, { isI18nMapped, autoI18n, sitemapName: sitemap.sitemapName });
    const filteredUrls = filterSitemapUrls(enhancedUrls, { ...sitemap, autoI18n, isMultiSitemap: true });
    const sortedUrls = maybeSort(filteredUrls);
    sortedUrls.forEach((url, i) => {
      const chunkIndex = Math.floor(i / defaultSitemapsChunkSize);
      chunks[chunkIndex] = chunks[chunkIndex] || { urls: [] };
      chunks[chunkIndex].urls.push(url);
    });
  } else {
    for (const sitemap in sitemaps) {
      if (sitemap !== "index") {
        chunks[sitemap] = chunks[sitemap] || { urls: [] };
      }
    }
  }
  {
    appendHeader(
      resolvers.event,
      "x-nitro-prerender",
      Object.keys(chunks).map((name) => encodeURIComponent(`/${name}-sitemap.xml`)).join(", ")
    );
  }
  const entries = [];
  for (const name in chunks) {
    const sitemap = chunks[name];
    const entry = {
      sitemap: resolvers.canonicalUrlResolver(`${name}-sitemap.xml`)
    };
    let lastmod = sitemap.urls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
    if (!lastmod && autoLastmod)
      lastmod = /* @__PURE__ */ new Date();
    if (lastmod)
      entry.lastmod = normaliseDate(lastmod);
    entries.push(entry);
  }
  if (sitemaps.index) {
    entries.push(...sitemaps.index.sitemaps.map((entry) => {
      return typeof entry === "string" ? { sitemap: entry } : entry;
    }));
  }
  const ctx = { sitemaps: entries };
  const nitro = useNitroApp();
  await nitro.hooks.callHook("sitemap:index-resolved", ctx);
  const sitemapXml = ctx.sitemaps.map((e) => [
    "    <sitemap>",
    `        <loc>${escapeValueForXml(e.sitemap)}</loc>`,
    // lastmod is optional
    e.lastmod ? `        <lastmod>${escapeValueForXml(e.lastmod)}</lastmod>` : false,
    "    </sitemap>"
  ].filter(Boolean).join("\n")).join("\n");
  return wrapSitemapXml([
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapXml,
    "</sitemapindex>"
  ], resolvers, { version, xsl, credits });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || !false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(e, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  let sitemap = await (definition.sitemapName === "index" ? buildSitemapIndex(useNitroUrlResolvers(e), runtimeConfig) : buildSitemap(definition, useNitroUrlResolvers(e), runtimeConfig));
  const ctx = { sitemap, sitemapName };
  await nitro.hooks.callHook("sitemap:output", ctx);
  sitemap = ctx.sitemap;
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  e.context._isSitemap = true;
  return sitemap;
}

const _dJ2zLh = defineEventHandler(async (e) => {
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const options = {
  "message": [
    {
      "to": "web@symbolgym.info"
    }
  ],
  "smtp": {
    "host": "s56.tarhely.com",
    "port": 587,
    "auth": {
      "user": "web@symbolgym.info",
      "pass": "#+SpM_HR~QCy"
    }
  }
};

const send = (async (body, options, transport) => {
  body = {
    config: 0,
    ...body
  };
  if (typeof body.config === 'string') {
    const configIndex = findIndex(_ => _.name === body.config)(options.message);
    if (configIndex === -1) {
      throw new Error(`Message config with name '${body.config}' not found.`);
    }
    body.config = configIndex;
  } else if (!options.message[body.config]) {
    throw new Error(`Message config not found at index ${body.config}.`);
  }
  await transport.sendMail({
    ...omit(['config', 'to', 'cc', 'bcc'])(body),
    ...omit(['name'])(options.message[body.config])
  });
});

const transport = nodemailer.createTransport(options.smtp);
const _zELgPz = defineEventHandler(async event => {
  try {
    await send(await readBody(event), options, transport);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
  return '';
});

const _6m40th = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_XAWCZw = () => import('./routes/api/sitemap.mjs');
const _lazy_sxVj6l = () => import('./build/server.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/sitemap', handler: _lazy_XAWCZw, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _OqzT32, lazy: false, middleware: true, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _Y07h8t, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _dJ2zLh, lazy: false, middleware: false, method: undefined },
  { route: '/mail/send', handler: _zELgPz, lazy: false, middleware: false, method: "post" },
  { route: '/_ipx/**', handler: _6m40th, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_sxVj6l, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useNitroApp as a, useStorage as b, closePrerenderer as c, getRouteRules as g, localFetch as l, useRuntimeConfig as u };
//# sourceMappingURL=runtime.mjs.map
