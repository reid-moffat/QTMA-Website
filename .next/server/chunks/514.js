"use strict";
exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 9514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProgramTimeline)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.jsx
var layout = __webpack_require__(1902);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(4508);
;// CONCATENATED MODULE: ./utilities/timelineData.js
/* harmony default export */ const timelineData = ([
    {
        title: "Co-Chair Hiring",
        date: "February",
        desc: "Each year QTMA hires 4 Co-Chairs to lead the club. Applications include a written application and interview with the current Co - Chairs."
    },
    {
        title: "General Hiring",
        date: "March",
        desc: "QTMA hires 12 Developers, 4 Product Manager, 4 Designers, 8 Business Analysts to complete our product teams. We also hire various operating roles. Applications include a written application and interview with the incoming Co - Chairs."
    },
    {
        title: "Team Formation",
        date: "April",
        desc: "The Co - Chairs organize the product team members into 4 teams based on member’s experience and interests."
    },
    {
        title: "Summer Bootcamp Program & Product Ideation Starts",
        date: "May - August",
        desc: "to their discipline. The Product Lead Co - Chair and the Head of Development Co - Chair meets remotely with each team on a monthly basis to lead them through the product ideation process."
    },
    {
        title: "Product Ideation - Brainstorming Phase",
        date: "May",
        desc: "Each team brainstorms 10+ ideas with the goal of generating as many ideas as possible."
    },
    {
        title: "Product Ideation - Initiation Filter Phase",
        date: "June",
        desc: "Head of Development Co - Chair and Product Lead Co - Chair."
    },
    {
        title: "Product Ideation - Final Filter Phase",
        date: "July",
        desc: "Each team explores their top three ideas in greater depth and finalizes their product idea with the guidance of the Head of Development Co - Chair and the Product Lead Co - Chair."
    },
    {
        title: "Product Ideation - Feature Prioritization",
        date: "August",
        desc: "Each product team prioritizes the top three features for their product with the guidance of the Head of Development Co - Chair and Product Lead Co- Chair."
    },
    {
        title: "Junior Analyst Hiring",
        date: "Early September",
        desc: "Each year we hire 4 junior analysts from the freshman class of commerce, computer science or engineering who each join a product team."
    },
    {
        title: "Product Development & Weekly Workshops Start",
        date: "Mid September",
        desc: "Students return to campus with a fully scoped product idea and begin designing and developing their product idea. Our ‘all hands’ team meetings begin which feature a Weekly Workshop presented by the Co - Chairs or guest speaker."
    },
    {
        title: "Mentorship Matches & Product Feedback",
        date: "October",
        desc: "Product team members are paired with a mentor in the technology industry to help them further their learning and widen their network. Additionally, the Product Lead Co-Chair and Head of Development Co-Chair begin respectively meeting with the PMs and Sr.Devs on each team on a biweekly basis to give feedback on the product's development."
    },
    {
        title: "First External Product Pitch",
        date: "November",
        desc: "Each team prepares a pitch and live demo of their product to present to a panel of judges. The judges give the product teams feedback on how they can improve their product before the culminating pitch."
    },
    {
        title: "Final External Product Pitch",
        date: "March",
        desc: "Each team prepares a pitch and live demo of their product to present to a panel of judges. ​​The judges assess each product and determine the winning team!"
    }
]);

;// CONCATENATED MODULE: ./pages/ProgramTimeline.jsx


 // requires a loader


function ProgramTimeline() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        background: "white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "program-timeline-container container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "section-title",
                    children: "Program Timeline"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "timeline-container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_carousel_.Carousel, {
                        showThumbs: false,
                        emulateTouch: true,
                        autoPlay: true,
                        infiniteLoop: true,
                        children: timelineData.map((info, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "timeline-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "timeline-event",
                                        children: info.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "timeline-date",
                                        children: info.date
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "timeline-desc",
                                        children: info.desc
                                    })
                                ]
                            }, i)
                        )
                    })
                })
            ]
        })
    }));
};


/***/ })

};
;