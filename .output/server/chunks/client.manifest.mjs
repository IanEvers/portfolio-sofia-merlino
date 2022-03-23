const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-1d25ca7f.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-9e0ebd8e.mjs"
    ]
  },
  "_bootstrap-9e0ebd8e.mjs": {
    "file": "bootstrap-9e0ebd8e.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "pages/contacto.vue",
      "pages/fotografia.vue",
      "pages/grafico.vue",
      "pages/ilustraciones.vue",
      "pages/index.vue",
      "pages/industrial.vue",
      "components/Header.vue"
    ]
  },
  "components/Header.vue": {
    "file": "Header-0fe46d43.mjs",
    "src": "components/Header.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-9e0ebd8e.mjs"
    ],
    "css": [
      "assets/Header.a7aec982.css"
    ],
    "assets": [
      "assets/Afterglow-Regular.ca09c881.ttf"
    ]
  },
  "pages/contacto.vue": {
    "file": "contacto-bfa03e02.mjs",
    "src": "pages/contacto.vue",
    "isDynamicEntry": true
  },
  "pages/fotografia.vue": {
    "file": "fotografia-02cc6a6e.mjs",
    "src": "pages/fotografia.vue",
    "isDynamicEntry": true
  },
  "pages/grafico.vue": {
    "file": "grafico-bc161911.mjs",
    "src": "pages/grafico.vue",
    "isDynamicEntry": true
  },
  "pages/ilustraciones.vue": {
    "file": "ilustraciones-24d618c4.mjs",
    "src": "pages/ilustraciones.vue",
    "isDynamicEntry": true
  },
  "pages/index.vue": {
    "file": "index-d41b241d.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-9e0ebd8e.mjs"
    ],
    "css": [
      "assets/index.9e23a52a.css"
    ],
    "assets": [
      "assets/Montserrat-VariableFont_wght.f35fdf51.ttf",
      "assets/Montserrat-SemiBold.61bdab08.ttf"
    ]
  },
  "pages/industrial.vue": {
    "file": "industrial-92018e3d.mjs",
    "src": "pages/industrial.vue",
    "isDynamicEntry": true
  },
  "layouts/default.vue": {
    "file": "default-56c85a6b.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/Header.vue",
      "_bootstrap-9e0ebd8e.mjs"
    ],
    "css": [
      "assets/default.cac745e3.css"
    ]
  }
};

export { client_manifest as default };
