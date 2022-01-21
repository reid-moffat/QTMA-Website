"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335,539,957,243,15,169,663,963];
exports.modules = {

/***/ 9751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.jsx
var layout = __webpack_require__(1902);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/assets/Email.png
/* harmony default export */ const Email = ({"src":"/_next/static/media/Email.69a8ecd9.png","height":1000,"width":1014,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4klEQVR42mMAgbsX9zOD6Bd3z/i/ffP+1LMb+5UZYODpwztgydcvX2p8+Pb/x8enl/6/3cfg+PlMlMank17HGWDg1cmqxne3t/1/cyL1//cTDEYvj8S5Pz/gmszw8YTHrvcnQqXeHfWY8nw3w6szUxmsGJDBs/0eziD6+WIG2Z4KB4n7Tz/UP3/+6ur5c+dic40Z2Blg4NK1B+GvXr1//OXLj//v33/5f/HitQcx8ZnSIDm2o8dO7vz8+et/kOS9+0/e7dp9sJQBGSxYvN7z6LHTl8+eu7SFQcpTBibe3TuJCQDy73jb22H/2gAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./pages/Nav.jsx
var Nav = __webpack_require__(8236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "validator"
const external_validator_namespaceObject = require("validator");
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_namespaceObject);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/contact/index.jsx









async function getStaticProps({ params  }) {
    return {
        props: {
        }
    };
}
function Contact() {
    const email = (0,external_react_.useRef)();
    const subject = (0,external_react_.useRef)();
    const message = (0,external_react_.useRef)();
    const { 0: sendingMessage , 1: setSendingMessage  } = (0,external_react_.useState)(false);
    const { 0: emailError , 1: setEmailError  } = (0,external_react_.useState)(false);
    const { 0: messageSent , 1: setMessageSent  } = (0,external_react_.useState)(false);
    const validateInfo = async (e)=>{
        e.preventDefault();
        setSendingMessage(true);
        setTimeout(async ()=>{
            //Request payload data
            let value1 = email.current.value;
            let value2 = subject.current.value;
            let value3 = message.current.value;
            try {
                if (external_validator_default().isEmail(email.current.value)) {
                    const response = await external_axios_default().post(`https://maker.ifttt.com/trigger/New_Email/with/key/bx66spDE0qGrEwyi0z6TpM?value1=${value1}&value2=${value2}&value3=${value3}`, // JSON.stringify(contactData),
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (response.status === 200) {
                        setMessageSent(true);
                        alert("Email sent to qtmaweb@gmail.com.");
                    }
                    email.current.value = "";
                    subject.current.value = "";
                    message.current.value = "";
                } else {
                    setEmailError(true);
                }
            } catch (error) {
                alert("Email sent to qtmaweb@gmail.com.");
                email.current.value = "";
                subject.current.value = "";
                message.current.value = "";
            }
            setSendingMessage(false); //Renables the button.
        }, 3000);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "You can reach us through the form below or by sending an email to qtmaweb@gmail.com"
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
                background: "#EDF5FC",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "contact-container container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "contact-info",
                            onSubmit: (e)=>{
                                validateInfo(e);
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-title-container",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "section-title contact-title",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "contact-subheading",
                                            children: [
                                                "You can reach us through the form below or by sending an email to",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "email-address",
                                                    href: "mailto:qtmaweb@gmail.com",
                                                    children: "qtmaweb@gmail.com"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "inputs-container",
                                    children: [
                                        emailError && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "error-email",
                                            children: "Please enter a valid email."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            ref: email,
                                            className: "contact-input email-input",
                                            type: "text",
                                            onKeyDown: ()=>{
                                                setEmailError(false);
                                            },
                                            placeholder: "Email",
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            ref: subject,
                                            className: "contact-input subject-input",
                                            type: "text",
                                            placeholder: "Subject",
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            ref: message,
                                            className: "contact-input message-input",
                                            rows: "5",
                                            cols: "60",
                                            name: "text",
                                            placeholder: "Message"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: sendingMessage,
                                    className: `send-email ${sendingMessage ? "send-email-disabled" : ""}`,
                                    onClick: (e)=>{
                                        validateInfo(e);
                                    },
                                    children: "SEND"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "email-illustration",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                alt: "illustration",
                                src: Email,
                                width: 444,
                                height: 437.87
                            })
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
var __webpack_exports__ = __webpack_require__.X(0, [675,664,902,236], () => (__webpack_exec__(9751)));
module.exports = __webpack_exports__;

})();