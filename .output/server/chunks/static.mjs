import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/merHero.png": {
    "type": "image/png",
    "etag": "\"1392f-KYezftJ/Yn0g5WGo6UFBMjyk1qI\"",
    "mtime": "2022-03-23T02:40:27.315Z",
    "path": "../public/merHero.png"
  },
  "/_nuxt/bootstrap-cf95a19e.mjs": {
    "type": "application/javascript",
    "etag": "\"1a529-0OAa14MeYZ8e/OA+IvVTeIY+Cv0\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/bootstrap-cf95a19e.mjs"
  },
  "/_nuxt/contacto-377de860.mjs": {
    "type": "application/javascript",
    "etag": "\"c0-PF5PnjgNCLuAWwxb/4/udgsfyWU\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/contacto-377de860.mjs"
  },
  "/_nuxt/default-0b5f354b.mjs": {
    "type": "application/javascript",
    "etag": "\"165-QtGHGyIbeutp7KF0/JImekbiGwk\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/default-0b5f354b.mjs"
  },
  "/_nuxt/entry-faf78ee2.mjs": {
    "type": "application/javascript",
    "etag": "\"65-Axn6X61Yw1VjUSHijBGX097a62M\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/entry-faf78ee2.mjs"
  },
  "/_nuxt/fotografia-02cc6a6e.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/fotografia-02cc6a6e.mjs"
  },
  "/_nuxt/grafico-bc161911.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/grafico-bc161911.mjs"
  },
  "/_nuxt/Header-7387cfd4.mjs": {
    "type": "application/javascript",
    "etag": "\"34e-tqRjNav54JWuna35jyEfJmIChUo\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/Header-7387cfd4.mjs"
  },
  "/_nuxt/ilustraciones-24d618c4.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/ilustraciones-24d618c4.mjs"
  },
  "/_nuxt/index-017cbf53.mjs": {
    "type": "application/javascript",
    "etag": "\"53f-1WDQP+gztbzmQonxjnaSnZqTaOw\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/index-017cbf53.mjs"
  },
  "/_nuxt/industrial-92018e3d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/industrial-92018e3d.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"8c7-APqx0hOwcun9CrGr9WHRt3Zfhek\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/merHero.png": {
    "type": "image/png",
    "etag": "\"1392f-KYezftJ/Yn0g5WGo6UFBMjyk1qI\"",
    "mtime": "2022-03-23T02:40:27.315Z",
    "path": "../public/_nuxt/merHero.png"
  },
  "/_nuxt/assets/Afterglow-Regular.ca09c881.ttf": {
    "type": "font/ttf",
    "etag": "\"34c2c-OR/2y7uICPLhCCIP1O7/lpCJKbw\"",
    "mtime": "2022-03-23T08:52:40.912Z",
    "path": "../public/_nuxt/assets/Afterglow-Regular.ca09c881.ttf"
  },
  "/_nuxt/assets/default.cac745e3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"100-dri9+iBa1rHCc9aWX0SCCnYTsIg\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/assets/default.cac745e3.css"
  },
  "/_nuxt/assets/Header.43cd44ae.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29e-QNj4ZEtkzJY3JzXHLiEhuNEilLU\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/assets/Header.43cd44ae.css"
  },
  "/_nuxt/assets/index.af38cad8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"471-G9cNvv6/3Lj0MEvGbvYtGU89/8k\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/assets/index.af38cad8.css"
  },
  "/_nuxt/assets/Montserrat-SemiBold.61bdab08.ttf": {
    "type": "font/ttf",
    "etag": "\"30840-IBzO5dyx6dOHFhaPOlZZimgI7VE\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/assets/Montserrat-SemiBold.61bdab08.ttf"
  },
  "/_nuxt/assets/Montserrat-VariableFont_wght.f35fdf51.ttf": {
    "type": "font/ttf",
    "etag": "\"60414-ZtxXSdisjFbWndBinZfdN/fbcHg\"",
    "mtime": "2022-03-23T08:52:40.913Z",
    "path": "../public/_nuxt/assets/Montserrat-VariableFont_wght.f35fdf51.ttf"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "C:/Users/Ian/Desktop/Código/portfolio-sofia-merlino/dist" + "/" + "1648025558";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
