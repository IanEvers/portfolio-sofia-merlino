const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-85e2e31b.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-2e703a3d.mjs"
    ]
  },
  "_bootstrap-2e703a3d.mjs": {
    "file": "bootstrap-2e703a3d.mjs",
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
    "file": "Header-7500e7df.mjs",
    "src": "components/Header.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-2e703a3d.mjs"
    ],
    "css": [
      "assets/Header.43cd44ae.css"
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
    "file": "index-15bc200b.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-2e703a3d.mjs"
    ],
    "css": [
      "assets/index.af38cad8.css"
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
    "file": "default-942987fc.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/Header.vue",
      "_bootstrap-2e703a3d.mjs"
    ],
    "css": [
      "assets/default.cac745e3.css"
    ]
  }
};

export { client_manifest as default };
