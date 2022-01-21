"use strict";
(() => {
var exports = {};
exports.id = 53;
exports.ids = [53,539,957,243,15,169,663,963];
exports.modules = {

/***/ 8354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Report),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.jsx
var layout = __webpack_require__(1902);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
// EXTERNAL MODULE: ./pages/Nav.jsx
var Nav = __webpack_require__(8236);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/reports/index.jsx





async function getStaticProps({ params  }) {
    return {
        props: {
        }
    };
}
function Report() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Recruiting Guide & Research Update"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "QTMA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:title",
                        content: "QTMA"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav["default"], {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
                background: "#edf5fc",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "history-container container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "section-title",
                            children: "Reports"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "recruiting-container",
                            href: "/ReportForms/2018_Recruiting_Guide.pdf",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Recruiting Guide"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "download-icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineDocumentDownload, {
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "research-container",
                            href: "/ReportForms/2018_Research_Update.pdf",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Research Update"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "download-icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineDocumentDownload, {
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,902,236], () => (__webpack_exec__(8354)));
module.exports = __webpack_exports__;

})();