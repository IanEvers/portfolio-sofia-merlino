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
  "/_nuxt/bootstrap-9e0ebd8e.mjs": {
    "type": "application/javascript",
    "etag": "\"1a522-NH73SKVVK/b47UR44wRN1p8NTd4\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/bootstrap-9e0ebd8e.mjs"
  },
  "/_nuxt/contacto-bfa03e02.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/contacto-bfa03e02.mjs"
  },
  "/_nuxt/default-56c85a6b.mjs": {
    "type": "application/javascript",
    "etag": "\"165-FGaS2ph99g4PgnEz/LPmcM6DDgQ\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/default-56c85a6b.mjs"
  },
  "/_nuxt/entry-1d25ca7f.mjs": {
    "type": "application/javascript",
    "etag": "\"65-5J4FmlX/seDMOs0guxW8SzlHQuI\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/entry-1d25ca7f.mjs"
  },
  "/_nuxt/fotografia-02cc6a6e.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/fotografia-02cc6a6e.mjs"
  },
  "/_nuxt/grafico-bc161911.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/grafico-bc161911.mjs"
  },
  "/_nuxt/Header-0fe46d43.mjs": {
    "type": "application/javascript",
    "etag": "\"34e-6Pd2kgXc2TbFDhtjcC6aML+jprU\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/Header-0fe46d43.mjs"
  },
  "/_nuxt/ilustraciones-24d618c4.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/ilustraciones-24d618c4.mjs"
  },
  "/_nuxt/index-d41b241d.mjs": {
    "type": "application/javascript",
    "etag": "\"53f-ov7I5vZp5s1+v+6xNhWnh6EX2E0\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/index-d41b241d.mjs"
  },
  "/_nuxt/industrial-92018e3d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/industrial-92018e3d.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"88f-Xal+RZ5sWWp9Bt8dWNeffs7kXTw\"",
    "mtime": "2022-03-23T08:45:11.786Z",
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
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/assets/Afterglow-Regular.ca09c881.ttf"
  },
  "/_nuxt/assets/default.cac745e3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"100-dri9+iBa1rHCc9aWX0SCCnYTsIg\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/assets/default.cac745e3.css"
  },
  "/_nuxt/assets/Header.a7aec982.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"292-yhlwEnoRaAgD1ELpcbD7FjzNWjs\"",
    "mtime": "2022-03-23T08:45:11.786Z",
    "path": "../public/_nuxt/assets/Header.a7aec982.css"
  },
  "/_nuxt/assets/index.9e23a52a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"459-jE7wk+Qm69Sow7jp/7kyRfVwBXE\"",
    "mtime": "2022-03-23T08:45:11.786Z",
    "path": "../public/_nuxt/assets/index.9e23a52a.css"
  },
  "/_nuxt/assets/Montserrat-SemiBold.61bdab08.ttf": {
    "type": "font/ttf",
    "etag": "\"30840-IBzO5dyx6dOHFhaPOlZZimgI7VE\"",
    "mtime": "2022-03-23T08:45:11.785Z",
    "path": "../public/_nuxt/assets/Montserrat-SemiBold.61bdab08.ttf"
  },
  "/_nuxt/assets/Montserrat-VariableFont_wght.f35fdf51.ttf": {
    "type": "font/ttf",
    "etag": "\"60414-ZtxXSdisjFbWndBinZfdN/fbcHg\"",
    "mtime": "2022-03-23T08:45:11.785Z",
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
const STATIC_ASSETS_BASE = "C:/Users/Ian/Desktop/Código/portfolio-sofia-merlino/dist" + "/" + "1648025109";
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
