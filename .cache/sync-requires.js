const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/src/pages/404.js"))),
  "component---src-pages-commercial-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/src/pages/commercial.js"))),
  "component---src-pages-ductdesign-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/src/pages/ductdesign.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/src/pages/elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/src/pages/index.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/src/pages/landing.js"))),
  "component---src-pages-residential-js": hot(preferDefault(require("/home/webslingr/Source/ECalc/src/pages/residential.js")))
}

