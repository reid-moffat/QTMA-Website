"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "useWindowDimensions": () => (/* binding */ useWindowDimensions)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/assets/QTMA_logo.png
var QTMA_logo = __webpack_require__(4171);
;// CONCATENATED MODULE: ./public/assets/Startup_SVG.png
/* harmony default export */ const Startup_SVG = ({"src":"/_next/static/media/Startup_SVG.a45e89fd.png","height":500,"width":489,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAUlEQVR42i3Mv0rDUBgF8G/p4GLFwVUQ3H0EwUEXH8DJVR/BJ3ATHKqLYxGkkyLoIBI1SEFIIG06mJr6L7bBfL1J7r3516RfudDfdDgcDug9qj9YtCI5WxQi0xGjXZiblFSDj35/u2s7x6pAlsuYF5RlRStiuA6KZqSNdlc6Z/e0xHk6YmFCkagIw7KKeXoKjebv4VXLPllt0jKy9CcWBZUVpSGfUixKgox5Wwl6B+rN7IzWAuR3QhaUF0RCljkMvnDvc/B3rr8GC2r0ZrhHVsfN/GHwLZMJgWLZ/z3HHd+oTBTVtJfhxsWlv4+IO6DcPvnau+Ndw1z70aibz+YmAMAMHHaoFsKv46EAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./components/layout.jsx
var layout = __webpack_require__(1902);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/Home.jsx







function getWindowDimensions() {
    if (false) {}
    return {
        width: 0,
        height: 0
    };
}
function useWindowDimensions() {
    const { 0: windowdimensions , 1: setWindowDimensions  } = (0,external_react_.useState)(getWindowDimensions());
    (0,external_react_.useEffect)(()=>{
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []);
    return windowdimensions;
}
function Home() {
    const { height , width  } = useWindowDimensions();
    const { 0: isMobile , 1: setIsMobile  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (width <= 650) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [
        width
    ]);
    console.log(QTMA_logo/* default */.Z);
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        background: "#0072ff",
        home: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            id: "home",
            className: "home-container container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "home-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                alt: "QTMA logo",
                                src: QTMA_logo/* default.src */.Z.src,
                                width: 346,
                                height: 93.71,
                                className: "QTMA-logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "club-description",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Queen’s Tech and Media Association (QTMA) ",
                                    !isMobile && /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    }),
                                    " Canada’s premier product development club and tech incubator."
                                ]
                            })
                        }),
                        isMobile ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "startup-art-container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                alt: "illustration",
                                src: Startup_SVG,
                                width: 452,
                                height: 462.17,
                                className: "startup-art"
                            })
                        }) : "",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                            className: "CTA",
                            offset: -104,
                            to: "WhatIsQTMA",
                            smooth: true,
                            duration: 100,
                            children: "Learn More"
                        })
                    ]
                }),
                !isMobile ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "startup-art-container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        alt: "illustration",
                        src: Startup_SVG,
                        width: 452,
                        height: 462.17,
                        className: "startup-art"
                    })
                }) : ""
            ]
        })
    }));
};


/***/ })

};
;