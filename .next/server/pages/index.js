(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Achievements/AchievementStyle.js":
/*!*********************************************************!*\
  !*** ./src/components/Achievements/AchievementStyle.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "Image": function() { return /* binding */ Image; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ProgressBar": function() { return /* binding */ ProgressBar; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "Grid": function() { return /* binding */ Grid; },
/* harmony export */   "Row": function() { return /* binding */ Row; },
/* harmony export */   "Col": function() { return /* binding */ Col; },
/* harmony export */   "It": function() { return /* binding */ It; },
/* harmony export */   "CarouselContaine": function() { return /* binding */ CarouselContaine; },
/* harmony export */   "coloredLine": function() { return /* binding */ coloredLine; },
/* harmony export */   "Iy": function() { return /* binding */ Iy; },
/* harmony export */   "Ia": function() { return /* binding */ Ia; },
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; },
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "AchievementStyle__GridContainer",
  componentId: "sc-1szbvr-0"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:2rem;place-items:center;column-gap:2rem;row-gap:3rem;background:#36454F;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "AchievementStyle__List",
  componentId: "sc-1szbvr-1"
})(["list-style-type:none;grid-template-columns:repeat(2,1fr);gap:20px;margin:2rem 0;@media ", "{margin:64px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__ListContainer",
  componentId: "sc-1szbvr-2"
})(["display:flex;flex-direction:column;box-shadow:3px 3px 20px white;margin-left:4px;width:300px;background:black;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "AchievementStyle__ListTitle",
  componentId: "sc-1szbvr-3"
})(["font-weight:500;font-size:15px;line-height:32px;letter-spacing:0.02em;color:#FCCD04;margin-bottom:8px;margin-left:5px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "AchievementStyle__Image",
  componentId: "sc-1szbvr-4"
})(["flex:1,width:200px', height: '100%', resizeMode: 'contain',"]);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AchievementStyle__ListParagraph",
  componentId: "sc-1szbvr-5"
})(["font-size:12px;line-height:22px;margin-left:8px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AchievementStyle__ProgressBar",
  componentId: "sc-1szbvr-6"
})(["color:yellow;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "AchievementStyle__ListItem",
  componentId: "sc-1szbvr-7"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;display:flex;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__Grid",
  componentId: "sc-1szbvr-8"
})(["background:grey;display:flex;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__Row",
  componentId: "sc-1szbvr-9"
})(["display:flex;"]);
const Col = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__Col",
  componentId: "sc-1szbvr-10"
})(["flex:", ";"], props => props.size);
const It = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__It",
  componentId: "sc-1szbvr-11"
})(["font-size:15px;margin-left:3px;margin-top:2px;font-family:cursive;"]);
const CarouselContaine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "AchievementStyle__CarouselContaine",
  componentId: "sc-1szbvr-12"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const coloredLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__coloredLine",
  componentId: "sc-1szbvr-13"
})(["color:yellow;background:#FCCD04;height:5;"]);
const Iy = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__Iy",
  componentId: "sc-1szbvr-14"
})(["font-size:12px;color:#FCCD04;font-family:cursive;margin-right:3px;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__Ia",
  componentId: "sc-1szbvr-15"
})(["font-size:11px;color:white;text-align:justify;font-family:cursive;margin-left:3px;margin-right:3px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__Button",
  componentId: "sc-1szbvr-16"
})(["width:", ";height:", ";border-radius:80px;font-size:", ";font-weight:500;display:flex;text-align:center;align-items:center;justify-content:center;margin-left:80px;color:black;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";&:hover{color:white;background:orange;}"], ({
  alt
}) => alt ? '100px' : '120px', ({
  alt
}) => alt ? '40px' : '40px', ({
  alt
}) => alt ? '12px' : '12px', ({
  alt
}) => alt ? 'linear-gradient(270deg, yellow 0%, orange 100%)' : 'linear-gradient(270deg, yellow 0%, orange 100%)', ({
  disabled
}) => disabled ? '.5' : '1');
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "AchievementStyle__ListIcon",
  componentId: "sc-1szbvr-17"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "AchievementStyle__CarouselContainer",
  componentId: "sc-1szbvr-18"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__CarouselMobileScrollNode",
  componentId: "sc-1szbvr-19"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__CarouselItem",
  componentId: "sc-1szbvr-20"
})(["background:#0F1624;border-radius:3px;max-width:300px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "AchievementStyle__CarouselItemTitle",
  componentId: "sc-1szbvr-21"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "AchievementStyle__CarouselItemImg",
  componentId: "sc-1szbvr-22"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AchievementStyle__CarouselItemText",
  componentId: "sc-1szbvr-23"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__CarouselButtons",
  componentId: "sc-1szbvr-24"
})(["width:400px;display:none;@media ", "{display:flex;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "AchievementStyle__CarouselButton",
  componentId: "sc-1szbvr-25"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AchievementStyle__CarouselButtonDot",
  componentId: "sc-1szbvr-26"
})(["background-color:white;border-radius:100%;margin:auto;width:5px;height:5px;"]);

/***/ }),

/***/ "./src/components/Achievements/Achievements.js":
/*!*****************************************************!*\
  !*** ./src/components/Achievements/Achievements.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AchievementStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AchievementStyle */ "./src/components/Achievements/AchievementStyle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_easy_marquee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-easy-marquee */ "react-easy-marquee");
/* harmony import */ var react_easy_marquee__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_easy_marquee__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Achievements\\Achievements.js";





const Achievement = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.Section, {
  id: "achieve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, {
    children: "Achievements"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_easy_marquee__WEBPACK_IMPORTED_MODULE_4___default()), {
    duration: 10000,
    background: "rgb(0,33,71)",
    height: "80px",
    axis: "X",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AchievementStyle__WEBPACK_IMPORTED_MODULE_2__.Iy, {
      children: "Achievement1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AchievementStyle__WEBPACK_IMPORTED_MODULE_2__.Iy, {
      children: "Achievement2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AchievementStyle__WEBPACK_IMPORTED_MODULE_2__.Iy, {
      children: "Achievement3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AchievementStyle__WEBPACK_IMPORTED_MODULE_2__.Iy, {
      children: "Achievement4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Achievement);

/***/ }),

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TimeLine_TimeLineStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TimeLine/TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Acomplishments\\Acomplishments.js";





const data = [{
  number: 20,
  text: 'Open Source Projects'
}, {
  number: 1000,
  text: 'Students'
}, {
  number: 1900,
  text: 'Github Followers'
}, {
  number: 5000,
  text: 'Github Stars'
}];

const Acomplishments = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Education"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.GridContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.Img, {
          style: {
            alignSelf: 'center',
            height: 100,
            width: 100,
            borderWidth: 5,
            borderRadius: 75,
            marginTop: -30,
            color: 'black'
          },
          src: "/images/13.png",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLine_TimeLineStyles__WEBPACK_IMPORTED_MODULE_3__.It, {
          children: " SRM INSTITUTE OF SCIENCE AND TECHNOLOGY "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.Iz, {
          children: "Kattankulathur, Chennai, India"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#4169e1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.Ia, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaUserGraduate, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 10
          }, undefined), "   BACHELOR OF TECHNOLOGY "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.Io, {
          children: "INFORMATION TECHNOLOGY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.Ig, {
          children: ["2016-2020 \xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaUniversity, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 32
          }, undefined), "\xA0\xA0 GPA- 9.11/10"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {
          children: "  \u2022 Big Data \xA0\xA0 \u2022 Computer Graphics \xA0\xA0 \u2022 Data Structures \xA0\xA0 \u2022 Cloud Computing \xA0\xA0 \u2022 Discrete Mathematics \xA0\xA0 \u2022 Operating System"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 3
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 1
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "Iz": function() { return /* binding */ Iz; },
/* harmony export */   "Io": function() { return /* binding */ Io; },
/* harmony export */   "Ig": function() { return /* binding */ Ig; },
/* harmony export */   "Ic": function() { return /* binding */ Ic; },
/* harmony export */   "Ia": function() { return /* binding */ Ia; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ProgressBar": function() { return /* binding */ ProgressBar; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "Grid": function() { return /* binding */ Grid; },
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "AcomplishmentsStyles__GridContainer",
  componentId: "vuq5bz-0"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:2rem;place-items:center;column-gap:2rem;row-gap:3rem;background:#FCCD04;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "AcomplishmentsStyles__List",
  componentId: "vuq5bz-1"
})(["list-style-type:none;grid-template-columns:repeat(2,1fr);gap:20px;margin:2rem 0;@media ", "{margin:64px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Iz = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Iz",
  componentId: "vuq5bz-2"
})(["font-size:11px;margin-left:3px;margin-top:2px;color:#FCCD04;font-family:cursive;"]);
const Io = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Io",
  componentId: "vuq5bz-3"
})(["font-size:11px;margin-left:3px;margin-top:2px;color:#FCCD04;font-family:cursive;text-align:center;"]);
const Ig = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Ig",
  componentId: "vuq5bz-4"
})(["font-size:13px;margin-left:3px;margin-top:2px;color:powder-blue;font-family:cursive;text-align:center;border-color:blue;box-shadow:3px 3px 20px blue;"]);
const Ic = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Ic",
  componentId: "vuq5bz-5"
})(["font-size:11px;margin-left:3px;margin-top:2px;color:#FCCD04;text-align:center;font-family:cursive;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Ia",
  componentId: "vuq5bz-6"
})(["font-size:18px;color:white;text-align:center;font-family:cursive;"]);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__ListContainer",
  componentId: "vuq5bz-7"
})(["display:flex;flex-direction:column;box-shadow:10px 10px 20px #ffffdc;margin-left:4px;width:380px;background:black;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "AcomplishmentsStyles__ListTitle",
  componentId: "vuq5bz-8"
})(["font-weight:500;font-size:15px;line-height:32px;letter-spacing:0.02em;color:#FCCD04;margin-bottom:8px;margin-left:5px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "AcomplishmentsStyles__Img",
  componentId: "vuq5bz-9"
})(["flex:1,width:'100%',height:'100%',resizeMode:'contain',"]);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AcomplishmentsStyles__ListParagraph",
  componentId: "vuq5bz-10"
})(["font-size:12px;line-height:22px;margin-left:8px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AcomplishmentsStyles__ProgressBar",
  componentId: "vuq5bz-11"
})(["color:yellow;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "AcomplishmentsStyles__ListItem",
  componentId: "vuq5bz-12"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;display:flex;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Grid",
  componentId: "vuq5bz-13"
})(["background:grey;display:flex;"]);
const Boxes = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Boxes",
  componentId: "vuq5bz-14"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Box",
  componentId: "vuq5bz-15"
})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__BoxNum",
  componentId: "vuq5bz-16"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AcomplishmentsStyles__BoxText",
  componentId: "vuq5bz-17"
})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:20px;};@media ", "{font-size:10px;line-height:14px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Join = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Join",
  componentId: "vuq5bz-18"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const JoinText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__JoinText",
  componentId: "vuq5bz-19"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;};@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__IconContainer",
  componentId: "vuq5bz-20"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/CertificateAchievement/CertificateAchievement.js":
/*!*************************************************************************!*\
  !*** ./src/components/CertificateAchievement/CertificateAchievement.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Projects/ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\CertificateAchievement\\CertificateAchievement.js";




const Certi = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    children: "Certificates"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 150,
            width: 300,
            color: 'black'
          },
          src: "/images/course1.jpg",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 4
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {
            as: "a",
            href: "https://www.udemy.com/certificate/UC-371c37f1-03e0-4e7b-a851-a8d49ba8baaa/",
            children: "View Certificate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 150,
            width: 300,
            color: 'black'
          },
          src: "/images/course2.png",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 19
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {
            as: "a",
            href: "https://www.coursera.org/account/accomplishments/certificate/Y7AFCBC6YZN9",
            children: "View Certificate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 150,
            width: 300,
            color: 'black'
          },
          src: "/images/course3.png",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 19
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {
            as: "a",
            href: "https://www.coursera.org/account/accomplishments/certificate/8XCSNLJ78AGU",
            children: "View Certificate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 150,
            width: 300,
            color: 'black'
          },
          src: "/images/course4.png",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 19
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {
            as: "a",
            href: "https://www.coursera.org/account/accomplishments/certificate/34P3TA6PBSCC",
            children: "View Certificate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 150,
            width: 300,
            color: 'black'
          },
          src: "/images/course5.png",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 19
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {
            as: "a",
            href: "https://www.coursera.org/account/accomplishments/certificate/GPR4GS248W5X",
            children: "View Certificate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Certi);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterStyles */ "./src/components/Footer/FooterStyles.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Footer\\Footer.js";






const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          style: {
            display: "flex",
            alignItems: "center",
            color: "black",
            marginBottom: "10px",
            fontFamily: 'cursive'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            size: "17px",
            children: "Copyright \xA92021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 12
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 10
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 8
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 4
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__Container",
  componentId: "sc-1ifsifd-0"
})(["display:grid;background:#FCCD04;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;height:67px;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__Div1",
  componentId: "sc-1ifsifd-1"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__Div2",
  componentId: "sc-1ifsifd-2"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__Div3",
  componentId: "sc-1ifsifd-3"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "FooterStyles__NavLink",
  componentId: "sc-1ifsifd-4"
})(["line-height:3;color:black;transition:0.4s ease;font-family:cursive;&:hover{color:white;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "FooterStyles__ContactDropDown",
  componentId: "sc-1ifsifd-5"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "FooterStyles__NavProductsIcon",
  componentId: "sc-1ifsifd-6"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? '1' : '.75', ({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)', props => props.theme.breakpoints.sm); // Social Icons 

const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "FooterStyles__SocialIcons",
  componentId: "sc-1ifsifd-7"
})(["transition:0.3s ease;color:black;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Header\\Header.js";






const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          style: {
            display: "flex",
            alignItems: "center",
            color: "black",
            marginBottom: "10px",
            fontFamily: 'cursive'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiBackbone, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 12
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            size: "17px",
            children: "Amisha Sinha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 38
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 10
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 8
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "#projects",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
            children: "PROJECTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 12
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 10
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "#tech",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
            children: "TECHNOLOGIES"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 12
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 10
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "#about",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
            children: "ABOUT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 12
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 10
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 8
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
        href: "https://github.com",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 10
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
        href: "https://linkedin.com",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 10
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
        href: "https://instagram.com",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillInstagram, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 10
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 8
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 4
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;background:#FCCD04;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-1"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-4"
})(["line-height:3;color:black;transition:0.4s ease;font-family:cursive;&:hover{color:white;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-5"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-6"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? '1' : '.75', ({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)', props => props.theme.breakpoints.sm); // Social Icons 

const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-7"
})(["transition:0.3s ease;color:black;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Hero\\Hero.js";






const saveFile = () => {
  file_saver__WEBPACK_IMPORTED_MODULE_5___default().saveAs(process.env.REACT_APP_CLIENT_URL + "../../asset/Resume.pdf", "AmishaSinha_Resume.pdf");
};

const Hero = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  row: true,
  nopadding: true,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.GridContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.List, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "./images/img11.png",
          width: "400",
          height: "400"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 4
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          main: true,
          center: true,
          color: "black",
          children: "Hi I'm Amisha Sinha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          color: "black",
          children: ["I am Software Engineer with experience in Order Management System and E-Commerce implementations along with good working experience in consulting skills with the ability to identify issues in the process flow and develop solutions for OMS Clients.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 6
          }, undefined), "I aspire to pursue a Master\u2019s in Computer Science to learn and enhance my knowledge and skills in various aspects of algorithm development and Machine Learning concepts. Post Masters, I intend to implement my acquired knowledge while working with interdisciplinary IT organizations as an expert in Data Science tools. In the long run, I want to develop expert system innovative prediction tools to assist the education and healthcare sectors worldwide."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          onClick: saveFile,
          children: "Download Resume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 4
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 20,
  columnNumber: 2
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "HeroStyles__GridContainer",
  componentId: "pbjia3-0"
})(["display:flex;padding:2rem;place-items:center;column-gap:2rem;row-gap:3rem;width:100%;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "HeroStyles__ListItem",
  componentId: "pbjia3-1"
})(["max-width:420px;display:flex;flex-direction:column;column-gap:2rem;@media ", "{max-width:203px}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "HeroStyles__List",
  componentId: "pbjia3-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(2,1fr);column-gap:120px;margin:2rem 0;@media ", "{margin:6px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroStyles__LeftSection",
  componentId: "pbjia3-3"
})(["width:100%;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);

/***/ }),

/***/ "./src/components/LastFooter/Lastfooter.js":
/*!*************************************************!*\
  !*** ./src/components/LastFooter/Lastfooter.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LastfooterStyle */ "./src/components/LastFooter/LastfooterStyle.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\LastFooter\\Lastfooter.js";






const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
        children: "Contact Me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.GridContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.List, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.Img, {
              style: {
                alignSelf: 'center',
                height: 40,
                width: 300,
                color: 'black'
              },
              src: "/images/linkedin.jpg",
              roundedCircle: true,
              resizeMode: "stretch"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.Img, {
              style: {
                alignSelf: 'center',
                height: 240,
                width: 300,
                color: 'black'
              },
              src: "/images/linkImg.jpg",
              roundedCircle: true,
              resizeMode: "stretch"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 6
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 3
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.Button, {
              as: "a",
              href: "https://www.linkedin.com/in/amisha-sinha-479977158/",
              children: "View Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 3
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 3
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/LastFooter/LastfooterStyle.js":
/*!******************************************************!*\
  !*** ./src/components/LastFooter/LastfooterStyle.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "Iy": function() { return /* binding */ Iy; },
/* harmony export */   "Ia": function() { return /* binding */ Ia; },
/* harmony export */   "Iu": function() { return /* binding */ Iu; },
/* harmony export */   "Iz": function() { return /* binding */ Iz; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "LastfooterStyle__FooterWrapper",
  componentId: "xb3t5i-0"
})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], props => props.theme.breakpoints.sm);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "LastfooterStyle__Img",
  componentId: "xb3t5i-1"
})(["width:100%;height:100%;height:240px;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "LastfooterStyle__GridContainer",
  componentId: "xb3t5i-2"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:2rem;place-items:center;column-gap:2rem;row-gap:3rem;background:#696969;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__Button",
  componentId: "xb3t5i-3"
})(["width:", ";height:", ";border-radius:80px;font-size:", ";font-weight:500;display:flex;align-items:center;justify-content:center;color:#0077b5;background:white;cursor:pointer;border-color:#0077b5;border:2px solid #0077b5;transition:0.5s ease;position:relative;overflow:hidden;margin-left:100px;opacity:", ";&:hover{background:#ecf7fc;}"], ({
  alt
}) => alt ? '100px' : '100px', ({
  alt
}) => alt ? '40px' : '40px', ({
  alt
}) => alt ? '12px' : '13px', ({
  disabled
}) => disabled ? '.5' : '1');
const Iy = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__Iy",
  componentId: "xb3t5i-4"
})(["font-size:15px;color:white;text-align:center;font-family:cursive;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__Ia",
  componentId: "xb3t5i-5"
})(["font-size:12px;color:white;text-align:center;font-family:cursive;"]);
const Iu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__Iu",
  componentId: "xb3t5i-6"
})(["font-size:12px;color:white;text-align:justify;font-family:cursive;margin-left:3px;margin-right:3px;"]);
const Iz = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__Iz",
  componentId: "xb3t5i-7"
})(["font-size:20px;color:#FCCD04;font-family:cursive;text-align:center;"]);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__BlogCard",
  componentId: "xb3t5i-8"
})(["border-radius:10px;box-shadow:3px 3px 20px yellow;text-align:center;width:470px;@media ", "{width:100%;}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__TitleContent",
  componentId: "xb3t5i-9"
})(["text-align:center;z-index:10;width:100%;"]);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "LastfooterStyle__HeaderThree",
  componentId: "xb3t5i-10"
})(["font-weight:200;letter-spacing:2px;color:#FCCD04;padding:.5rem 0;font-size:", ";"], props => props.title ? '2rem' : '1.6rem');
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "LastfooterStyle__Hr",
  componentId: "xb3t5i-11"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__Intro",
  componentId: "xb3t5i-12"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'cursive';font-size:10px;font-style:italic;line-height:18px;"]);
const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "LastfooterStyle__CardInfo",
  componentId: "xb3t5i-13"
})(["width:100%;padding:0 40px;color:grey;font-family:cursive;font-style:1rem;line-height:18px;text-align:justify;@media ", "{padding:.2rem}"], props => props.theme.breakpoints.sm);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__Container",
  componentId: "xb3t5i-14"
})(["position:fixed;background:antiquewhite;width:33%;height:auto;top:", ";left:", ";transform:", ";border-radius:10px;padding:0.75rem;color:rgba(0,0,139,0.7);"], ({
  openPos
}) => ({
  [CM_CENTER_CENTER]: '50%',
  [CM_TOP_LEFT]: '10%',
  [CM_TOP_CENTER]: '10%',
  [CM_TOP_RIGHT]: '10%'
})[openPos], ({
  openPos
}) => ({
  [CM_CENTER_CENTER]: '50%',
  [CM_TOP_LEFT]: '5%',
  [CM_TOP_CENTER]: '50%',
  [CM_TOP_RIGHT]: '95%'
})[openPos], ({
  openPos
}) => ({
  [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
  [CM_TOP_LEFT]: 'translate(0,0)',
  [CM_TOP_CENTER]: 'translate(-50%,0)',
  [CM_TOP_RIGHT]: 'translate(-100%,0)'
})[openPos]);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__ListContainer",
  componentId: "xb3t5i-15"
})(["display:flex;flex-direction:column;margin-left:4px;width:300px;background:white;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "LastfooterStyle__List",
  componentId: "xb3t5i-16"
})(["list-style-type:none;grid-template-columns:repeat(3,1fr);gap:20px;margin:2rem 0;@media ", "{margin:64px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "LastfooterStyle__UtilityList",
  componentId: "xb3t5i-17"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "LastfooterStyle__ExternalLinks",
  componentId: "xb3t5i-18"
})(["color:black;font-size:1rem;padding:1rem 1.5rem;background:#FCCD04;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "LastfooterStyle__TagList",
  componentId: "xb3t5i-19"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "LastfooterStyle__Tag",
  componentId: "xb3t5i-20"
})(["color:#d8bfbf;font-size:1.5rem;"]);
const LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "LastfooterStyle__LinkItem",
  componentId: "xb3t5i-21"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:16px;line-height:28px;display:flex;}@media ", "{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialIconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__SocialIconsContainer",
  componentId: "xb3t5i-22"
})(["max-width:1040px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:column;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__CompanyContainer",
  componentId: "xb3t5i-23"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Slogan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "LastfooterStyle__Slogan",
  componentId: "xb3t5i-24"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ", "{font-size:16px;line-height:28px;}@media ", "{line-height:22px;font-size:14px;min-width:100px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__SocialContainer",
  componentId: "xb3t5i-25"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], props => props.theme.breakpoints.md);
const LinkList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "LastfooterStyle__LinkList",
  componentId: "xb3t5i-26"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LinkColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LastfooterStyle__LinkColumn",
  componentId: "xb3t5i-27"
})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]);
const LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "LastfooterStyle__LinkTitle",
  componentId: "xb3t5i-28"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Projects\\Projects.js";







const Projects = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  id: "project",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    children: "Project"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 150,
            width: 300,
            color: 'black'
          },
          src: "/images/5.jpg",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
          children: "Machine Learning Detection of Depression using Machine Learning"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#FCCD04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default()), {
          trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 23
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 19
          }, undefined),
          position: "top",
          width: "500px",
          height: "300px",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
                children: "Depression Detection using ML algorithms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 7
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                color: "#FCDDO4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 7
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 5
              }, undefined), "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iu, {
                children: ["\u2022 For early detection of depression in people and curbing the related problems using social media data, worked in a team of 3 using tools like Scrape storm and NLTK. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 56
                }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 62
                }, undefined), "\u2022 Used Bayes theorem, SVM, Random Forest and Logistic Regression algorithm for data modeling.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                  color: "FCCD04"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 1
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 1
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iz, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaGithubSquare, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 5
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 1
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 12
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 5
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iz, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 11
            }, undefined), "Dec 2019- May 2020"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 170,
            width: 300,
            color: 'black'
          },
          src: "/images/7.jpg",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
          children: "Hand Gesture Recognition using OpenCV"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#FCCD04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((reactjs_popup__WEBPACK_IMPORTED_MODULE_5___default()), {
          trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Button, {
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 23
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 19
          }, undefined),
          position: "top",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
                children: "Hand Gesture Recognition using OpenCV"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 5
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                color: "#FCDDO4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 7
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 5
              }, undefined), "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iu, {
                children: ["\u2022 Worked in a group of 5 to implement human-computer interaction using an innovative real-time method for hand gesture detection and feature extraction using a webcam. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 63
                }, undefined), "\u2022 Pre-processed real-time input images to remove noise. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 57
                }, undefined), "\u2022 Hand region was extracted using background subtraction method and palm/fingers were segmented and finally convex hull method was used to recognize the fingers.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                  color: "FCCD04"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 1
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 1
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iz, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaGithubSquare, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 5
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 1
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 12
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 5
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Iz, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 11
            }, undefined), "June 2019- Nov 2020"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 1
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "Iy": function() { return /* binding */ Iy; },
/* harmony export */   "Ia": function() { return /* binding */ Ia; },
/* harmony export */   "Iu": function() { return /* binding */ Iu; },
/* harmony export */   "Iz": function() { return /* binding */ Iz; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;height:240px;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:2rem;place-items:center;column-gap:2rem;row-gap:3rem;background:#696969;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Button",
  componentId: "l76idc-2"
})(["width:", ";height:", ";border-radius:80px;font-size:", ";font-weight:300;display:flex;align-items:center;justify-content:center;color:black;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;margin-left:100px;opacity:", ";&:hover{color:white;background:orange;}"], ({
  alt
}) => alt ? '100px' : '100px', ({
  alt
}) => alt ? '40px' : '40px', ({
  alt
}) => alt ? '12px' : '12px', ({
  alt
}) => alt ? 'linear-gradient(270deg, yellow 0%, orange 100%)' : 'linear-gradient(270deg, yellow 0%, orange 100%)', ({
  disabled
}) => disabled ? '.5' : '1');
const Iy = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Iy",
  componentId: "l76idc-3"
})(["font-size:15px;color:white;text-align:center;font-family:cursive;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Ia",
  componentId: "l76idc-4"
})(["font-size:12px;color:white;text-align:center;font-family:cursive;"]);
const Iu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Iu",
  componentId: "l76idc-5"
})(["font-size:12px;color:white;text-align:justify;font-family:cursive;margin-left:3px;margin-right:3px;"]);
const Iz = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Iz",
  componentId: "l76idc-6"
})(["font-size:20px;color:#FCCD04;font-family:cursive;text-align:center;"]);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-7"
})(["border-radius:10px;box-shadow:3px 3px 20px yellow;text-align:center;width:470px;@media ", "{width:100%;}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-8"
})(["text-align:center;z-index:10;width:100%;"]);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-9"
})(["font-weight:200;letter-spacing:2px;color:#FCCD04;padding:.5rem 0;font-size:", ";"], props => props.title ? '2rem' : '1.6rem');
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-10"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-11"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'cursive';font-size:10px;font-style:italic;line-height:18px;"]);
const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-12"
})(["width:100%;padding:0 40px;color:grey;font-family:cursive;font-style:1rem;line-height:18px;text-align:justify;@media ", "{padding:.2rem}"], props => props.theme.breakpoints.sm);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Container",
  componentId: "l76idc-13"
})(["position:fixed;background:antiquewhite;width:33%;height:auto;top:", ";left:", ";transform:", ";border-radius:10px;padding:0.75rem;color:rgba(0,0,139,0.7);"], ({
  openPos
}) => ({
  [CM_CENTER_CENTER]: '50%',
  [CM_TOP_LEFT]: '10%',
  [CM_TOP_CENTER]: '10%',
  [CM_TOP_RIGHT]: '10%'
})[openPos], ({
  openPos
}) => ({
  [CM_CENTER_CENTER]: '50%',
  [CM_TOP_LEFT]: '5%',
  [CM_TOP_CENTER]: '50%',
  [CM_TOP_RIGHT]: '95%'
})[openPos], ({
  openPos
}) => ({
  [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
  [CM_TOP_LEFT]: 'translate(0,0)',
  [CM_TOP_CENTER]: 'translate(-50%,0)',
  [CM_TOP_RIGHT]: 'translate(-100%,0)'
})[openPos]);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__ListContainer",
  componentId: "l76idc-14"
})(["display:flex;flex-direction:column;box-shadow:3px 3px 20px #FCCD04;margin-left:4px;width:300px;background:black;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__List",
  componentId: "l76idc-15"
})(["list-style-type:none;grid-template-columns:repeat(3,1fr);gap:20px;margin:2rem 0;@media ", "{margin:64px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-16"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-17"
})(["color:black;font-size:1rem;padding:1rem 1.5rem;background:#FCCD04;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-18"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-19"
})(["color:#d8bfbf;font-size:1.5rem;"]);

/***/ }),

/***/ "./src/components/Publications/publication.js":
/*!****************************************************!*\
  !*** ./src/components/Publications/publication.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _publicationStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publicationStyle */ "./src/components/Publications/publicationStyle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Publications\\publication.js";




const Timeline = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, {
    children: "Publications"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publicationStyle__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publicationStyle__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publicationStyle__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publicationStyle__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 100,
            width: 100,
            borderWidth: 5,
            borderRadius: 75,
            marginTop: -37,
            color: 'black'
          },
          src: "/images/14.jpg",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 8
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publicationStyle__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: "Machine Learning Based Detection of Deceptive Tweets on Covid-19"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publicationStyle__WEBPACK_IMPORTED_MODULE_2__.Iy, {
          children: "Publication Date: 30 June 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#ADD8E6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publicationStyle__WEBPACK_IMPORTED_MODULE_2__.Ia, {
          children: "We analyzed and assessed machine learning-based deceptive information detection concerning Covid-19 in this article. With the spread of Covid-19, we've seen a lot of falsified articles and tweets regarding treatments, medicine, and general pandemic information. The project's goal is to assist in data analysis and to prevent the spread of misleading information. The developed model can also be utilised in real-time to track down the source of misleading information. We conducted a thorough investigation of natural language processing methods for data analysis and machine learning algorithms in this work."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 2
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_publicationStyle__WEBPACK_IMPORTED_MODULE_2__.Button, {
          as: "a",
          href: "https://www.ijeat.org/wp-content/uploads/papers/v10i5/E28310610521.pdf",
          children: "Link to Paper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 8
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 1
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 1
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/Publications/publicationStyle.js":
/*!*********************************************************!*\
  !*** ./src/components/Publications/publicationStyle.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ProgressBar": function() { return /* binding */ ProgressBar; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "Grid": function() { return /* binding */ Grid; },
/* harmony export */   "Row": function() { return /* binding */ Row; },
/* harmony export */   "Col": function() { return /* binding */ Col; },
/* harmony export */   "It": function() { return /* binding */ It; },
/* harmony export */   "coloredLine": function() { return /* binding */ coloredLine; },
/* harmony export */   "Iy": function() { return /* binding */ Iy; },
/* harmony export */   "Ia": function() { return /* binding */ Ia; },
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; },
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "publicationStyle__GridContainer",
  componentId: "sc-14hvubp-0"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:2rem;place-items:center;column-gap:2rem;row-gap:3rem;background:#FCCD04;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "publicationStyle__List",
  componentId: "sc-14hvubp-1"
})(["list-style-type:none;grid-template-columns:repeat(2,1fr);gap:20px;margin:2rem 0;@media ", "{margin:64px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__ListContainer",
  componentId: "sc-14hvubp-2"
})(["display:flex;flex-direction:column;box-shadow:3px 3px 20px white;margin-left:4px;width:380px;background:black;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "publicationStyle__ListTitle",
  componentId: "sc-14hvubp-3"
})(["font-weight:500;font-size:15px;line-height:32px;letter-spacing:0.02em;color:#FCCD04;margin-bottom:8px;margin-left:5px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "publicationStyle__Img",
  componentId: "sc-14hvubp-4"
})(["flex:1,width:'100%',height:'100%',resizeMode:'contain',"]);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "publicationStyle__ListParagraph",
  componentId: "sc-14hvubp-5"
})(["font-size:12px;line-height:22px;margin-left:8px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "publicationStyle__ProgressBar",
  componentId: "sc-14hvubp-6"
})(["color:yellow;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "publicationStyle__ListItem",
  componentId: "sc-14hvubp-7"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;display:flex;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Grid",
  componentId: "sc-14hvubp-8"
})(["background:grey;display:flex;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Row",
  componentId: "sc-14hvubp-9"
})(["display:flex;"]);
const Col = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Col",
  componentId: "sc-14hvubp-10"
})(["flex:", ";"], props => props.size);
const It = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__It",
  componentId: "sc-14hvubp-11"
})(["font-size:14px;margin-left:3px;margin-top:2px;font-family:cursive;"]);
const coloredLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__coloredLine",
  componentId: "sc-14hvubp-12"
})(["color:yellow;background:#FCCD04;height:5;"]);
const Iy = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Iy",
  componentId: "sc-14hvubp-13"
})(["font-size:12px;color:#FCCD04;font-family:cursive;margin-right:3px;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Ia",
  componentId: "sc-14hvubp-14"
})(["font-size:11px;color:white;text-align:justify;font-family:cursive;margin-left:3px;margin-right:3px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Button",
  componentId: "sc-14hvubp-15"
})(["width:", ";height:", ";border-radius:80px;font-size:", ";font-weight:500;display:flex;align-items:center;justify-content:center;color:black;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;margin-left:10px;opacity:", ";&:hover{color:white;background:orange;}"], ({
  alt
}) => alt ? '100px' : '100px', ({
  alt
}) => alt ? '40px' : '40px', ({
  alt
}) => alt ? '12px' : '12px', ({
  alt
}) => alt ? 'linear-gradient(270deg, yellow 0%, orange 100%)' : 'linear-gradient(270deg, yellow 0%, orange 100%)', ({
  disabled
}) => disabled ? '.5' : '1');
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "publicationStyle__ListIcon",
  componentId: "sc-14hvubp-16"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "publicationStyle__CarouselContainer",
  componentId: "sc-14hvubp-17"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__CarouselMobileScrollNode",
  componentId: "sc-14hvubp-18"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__CarouselItem",
  componentId: "sc-14hvubp-19"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "publicationStyle__CarouselItemTitle",
  componentId: "sc-14hvubp-20"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "publicationStyle__CarouselItemImg",
  componentId: "sc-14hvubp-21"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "publicationStyle__CarouselItemText",
  componentId: "sc-14hvubp-22"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__CarouselButtons",
  componentId: "sc-14hvubp-23"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "publicationStyle__CarouselButton",
  componentId: "sc-14hvubp-24"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__CarouselButtonDot",
  componentId: "sc-14hvubp-25"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TimeLine_TimeLineStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TimeLine/TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Technologies\\Technologies.js";







const Technologies = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "My Skills"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.List, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_5__.DiReact, {
        size: "2rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {
          children: "WEB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {
          children: ["REACTJS ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "80",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 20
          }, undefined), "80% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 57
          }, undefined), "HTML/CSS ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "90",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, undefined), "90% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 58
          }, undefined), "PHP ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "50",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 16
          }, undefined), "50% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 53
          }, undefined), "JAVASCRIPT ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "80",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 23
          }, undefined), " 80%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 60
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 8
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_5__.DiMongodb, {
        size: "2rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {
          children: "DATABASE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {
          children: ["MYSQL ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "90",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 18
          }, undefined), "90%  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 56
          }, undefined), "MONGO DB ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "40",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 20
          }, undefined), " 40%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 8
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_5__.DiPython, {
        size: "2rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {
          children: "FRAMEWORK"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {
          children: ["MOCKITO ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "50",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 20
          }, undefined), " 50% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 58
          }, undefined), "NUMPY ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "70",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 18
          }, undefined), " 70%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 55
          }, undefined), "SPRING ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "50",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 19
          }, undefined), " 50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 56
          }, undefined), "SWING ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "50",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 18
          }, undefined), " 50%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 8
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_5__.DiJira, {
        size: "2rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {
          children: "TOOLS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {
          children: ["GIT ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "80",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 16
          }, undefined), "80% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 53
          }, undefined), "JIRA ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "85",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }, undefined), " 85%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 8
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_5__.DiJava, {
        size: "2rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {
          children: "PLATFORMS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {
          children: ["JAVA ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "90",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, undefined), " 90% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 55
          }, undefined), "PYTHON ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "80",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 19
          }, undefined), "80% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 56
          }, undefined), "C/C++ ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "90",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 18
          }, undefined), "90% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 55
          }, undefined), "R ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "40",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 14
          }, undefined), "40%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 50
          }, undefined), "UBUNTU ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "70",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 19
          }, undefined), "70% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 56
          }, undefined), "WINDOWS ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
            value: "90",
            max: "100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 20
          }, undefined), "90%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 8
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_5__.DiGoogleCloudPlatform, {
        size: "2rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {
          children: "DOMAINS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("row", {
            children: ["Cloud", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
              value: "80",
              max: "100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, undefined), "80% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 53
            }, undefined), "NLP ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("progress", {
              value: "80",
              max: "100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 16
            }, undefined), " 80%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 12
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 8
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 4
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ProgressBar": function() { return /* binding */ ProgressBar; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-1ehw0pq-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md);
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-1ehw0pq-1"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TechnologiesStyles__List",
  componentId: "sc-1ehw0pq-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:2rem 0;@media ", "{margin:64px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ListContainer",
  componentId: "sc-1ehw0pq-3"
})(["display:flex;flex-direction:column;box-shadow:3px 3px 20px #FCCD04;margin-left:8px;width:320px;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TechnologiesStyles__ListTitle",
  componentId: "sc-1ehw0pq-4"
})(["font-weight:500;font-size:15px;line-height:32px;letter-spacing:0.02em;color:#FCCD04;margin-bottom:8px;margin-left:5px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TechnologiesStyles__ListParagraph",
  componentId: "sc-1ehw0pq-5"
})(["font-size:12px;line-height:22px;margin-left:8px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TechnologiesStyles__ProgressBar",
  componentId: "sc-1ehw0pq-6"
})(["color:yellow;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "TechnologiesStyles__ListItem",
  componentId: "sc-1ehw0pq-7"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__ListIcon",
  componentId: "sc-1ehw0pq-8"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\TimeLine\\TimeLine.js";




const Timeline = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, {
    children: "Experience"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 100,
            width: 100,
            borderWidth: 5,
            borderRadius: 75,
            marginTop: -50,
            color: 'black'
          },
          src: "/images/8.jpg",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: ["Bangaluru, India", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
            children: "July 2020- Present"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListTitle, {
          children: "Software Engineer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: "BRIDGE SOLUTIONS GROUP "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#FCCD04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListParagraph, {
          children: ["\u2022 Developed and performed several optimizations of the codebase for flawless OMS implementation as a Software Engineer for a major upscale chain of department stores based in Mexico (in partnership with Fluent commerce) ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, undefined), "\u2022 Built significant client relationships resulting in contract extension and adding a valuable asset to the firm.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 114
          }, undefined), "\u2022 Solved critical issues raised by clients by seamlessly coordinating with the team and the client.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: "TECH/DOMAIN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 1
          }, undefined), "\u2022JAVA 8 \u2022 Maven \u2022 GraphQL \u2022 JSON \u2022Postman \u2022Insomnia"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 3
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 100,
            width: 100,
            borderWidth: 5,
            borderRadius: 50,
            marginTop: -40,
            boxShadow: '#FCCD04',
            color: 'black'
          },
          src: "/images/8.jpg",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: ["Bangaluru, India", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
            children: "Jan 2020-June 2020"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListTitle, {
          children: "Software Engineer Intern"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: "BRIDGE SOLUTIONS GROUP "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#FCCD04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListParagraph, {
          children: ["\u2022 Worked as a front-end developer for an in-house project \u2018Magnum\u2019 an online assessment, courses, and certification platform for the employees. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 43
          }, undefined), "\u2022 Worked as a front-end developer for the project- \u2018The Personal Shopper\u2019 a personal style recommendation platform for customers. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined), "\u2022 Used ReactJS for the front-end development integrated with the Rabbit framework and dockerized the application to allow the application to be commuted easily between environments.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 81
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: "TECH/DOMAIN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 1
          }, undefined), "\u2022ReactJS \u2022Django \u2022RabbitMQ Framework"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 3
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 100,
            width: 100,
            borderWidth: 5,
            borderRadius: 50,
            marginTop: -40,
            boxShadow: '#FCCD04',
            color: 'black'
          },
          src: "/images/10.png",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: ["Ranchi, India", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
            children: "Dec 2018-Jan 2019"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 22
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListTitle, {
          children: "Intern"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: " Research & Development centre for Iron and Steel "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#FCCD04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListParagraph, {
          children: ["\u2022 Developed an Employee Management System for the Human resource department of the organization.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 99
          }, undefined), "\u2022 Worked independently and used HTML/CSS for front-end designing which included modules for both employee and admin dashboard that included many webpages for admin and employees to view and update information regarding profile, leaves, and salary revision.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: "TECH/DOMAIN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 1
          }, undefined), "\u2022HTML/CSS \u2022MySQL \u2022BootStrap"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 3
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 1
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 100,
            width: 100,
            borderWidth: 5,
            borderRadius: 50,
            marginTop: -40,
            boxShadow: '#FCCD04',
            color: 'black'
          },
          src: "/images/10.png",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: ["Ranchi, India", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
            children: "May 2018-Jun 2019"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 22
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListTitle, {
          children: "Intern"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: " Research & Development centre for Iron and Steel "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#FCCD04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListParagraph, {
          children: ["\u2022 Developed a Library management system for the Iron and Steel research centre of Steel Authority of India (SAIL).", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 8
          }, undefined), "\u2022 Worked independently and used JAVA swings toolkit for GUI and JDBC for application programming interface.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: "TECH/DOMAIN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 1
          }, undefined), "\u2022Java \u2022SwingL \u2022JDBC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 3
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 1
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.List, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          style: {
            alignSelf: 'center',
            height: 100,
            width: 100,
            borderWidth: 5,
            borderRadius: 50,
            marginTop: -40,
            boxShadow: '#FCCD04',
            color: 'black'
          },
          src: "/images/11.png",
          roundedCircle: true,
          resizeMode: "stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: ["Ranchi, India", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Iy, {
            children: "Dec 2017-Jan 2018"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 22
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListTitle, {
          children: "Trainee"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.It, {
          children: " Bharat Sanchar Nigam Limited "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          color: "#FCCD04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 3
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.ListParagraph, {
          children: ["\u2022ASP.NET training on Introduction & Control, Architecture, working with User control, Validation controls & web caching", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.Ia, {
            children: "TECH/DOMAIN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 1
          }, undefined), "\u2022ASP.NET"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 3
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 3
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 1
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 1
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 1
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ProgressBar": function() { return /* binding */ ProgressBar; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "Grid": function() { return /* binding */ Grid; },
/* harmony export */   "Row": function() { return /* binding */ Row; },
/* harmony export */   "Col": function() { return /* binding */ Col; },
/* harmony export */   "It": function() { return /* binding */ It; },
/* harmony export */   "coloredLine": function() { return /* binding */ coloredLine; },
/* harmony export */   "Iy": function() { return /* binding */ Iy; },
/* harmony export */   "Ia": function() { return /* binding */ Ia; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; },
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "TimeLineStyles__GridContainer",
  componentId: "vs8qb6-0"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:2rem;place-items:center;column-gap:2rem;row-gap:3rem;background:#616161;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TimeLineStyles__List",
  componentId: "vs8qb6-1"
})(["list-style-type:none;grid-template-columns:repeat(2,1fr);gap:20px;margin:2rem 0;@media ", "{margin:64px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__ListContainer",
  componentId: "vs8qb6-2"
})(["display:flex;flex-direction:column;box-shadow:3px 3px 20px #FCCD04;margin-left:4px;width:380px;background:black;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TimeLineStyles__ListTitle",
  componentId: "vs8qb6-3"
})(["font-weight:500;font-size:15px;line-height:32px;letter-spacing:0.02em;color:#FCCD04;margin-bottom:8px;margin-left:5px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TimeLineStyles__Img",
  componentId: "vs8qb6-4"
})(["flex:1,width:'100%',height:'100%',resizeMode:'contain',"]);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TimeLineStyles__ListParagraph",
  componentId: "vs8qb6-5"
})(["font-size:12px;line-height:22px;margin-left:8px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TimeLineStyles__ProgressBar",
  componentId: "vs8qb6-6"
})(["color:yellow;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "TimeLineStyles__ListItem",
  componentId: "vs8qb6-7"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;display:flex;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__Grid",
  componentId: "vs8qb6-8"
})(["background:grey;display:flex;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__Row",
  componentId: "vs8qb6-9"
})(["display:flex;"]);
const Col = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__Col",
  componentId: "vs8qb6-10"
})(["flex:", ";"], props => props.size);
const It = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__It",
  componentId: "vs8qb6-11"
})(["font-size:13px;margin-left:3px;margin-top:2px;font-family:cursive;font-style:italic;"]);
const coloredLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__coloredLine",
  componentId: "vs8qb6-12"
})(["color:yellow;background:#FCCD04;height:5;"]);
const Iy = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__Iy",
  componentId: "vs8qb6-13"
})(["font-size:10px;color:#FCCD04;text-align:right;font-family:cursive;margin-right:3px;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__Ia",
  componentId: "vs8qb6-14"
})(["font-size:10px;color:#FCCD04;text-align:center;font-family:cursive;"]);
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TimeLineStyles__ListIcon",
  componentId: "vs8qb6-15"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "vs8qb6-16"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "vs8qb6-17"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "vs8qb6-18"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "vs8qb6-19"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "vs8qb6-20"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "vs8qb6-21"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "vs8qb6-22"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "vs8qb6-23"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "vs8qb6-24"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: 'MACHINE LEARNING BASED EARLY DEPRESSION DETECTION USING SOCIAL MEDIA DATA',
  description: "Early detection of depression in people and curbing the related problems using social media data, worked in a team of 3 using tools like Scrape storm and NLTK",
  image: '/images/5.jpg',
  tags: [' Bayes theorem', 'SVM', 'Random Forest', 'Logistic Regression'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 0
}, {
  title: 'HAND GESTURE RECOGNITION USING OPENCV',
  description: "Worked in a group of 5 to implement human-computer interaction using an innovative real-time method for hand gesture detection and feature extraction using a webcam.",
  image: '/images/7.jpg',
  tags: ['Python'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'WebRTC App',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/3.jpg',
  tags: ['React', 'WebRTC'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Unichat',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];
const TimeLineData = [{
  year: 2017,
  image: '/images/course1.jpg',
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/layout/LayoutStyles.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\layout\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/layout/LayoutStyles.js":
/*!************************************!*\
  !*** ./src/layout/LayoutStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LayoutStyles__Container",
  componentId: "mzu455-0"
})(["max-width:1280px;width:100%;margin:auto;"]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _components_Publications_publication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Publications/publication */ "./src/components/Publications/publication.js");
/* harmony import */ var _components_CertificateAchievement_CertificateAchievement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CertificateAchievement/CertificateAchievement */ "./src/components/CertificateAchievement/CertificateAchievement.js");
/* harmony import */ var _components_Achievements_Achievements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Achievements/Achievements */ "./src/components/Achievements/Achievements.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _components_LastFooter_Lastfooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/LastFooter/Lastfooter */ "./src/components/LastFooter/Lastfooter.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\pages\\index.js";












const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_9__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_10__.Section, {
      grid: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Publications_publication__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CertificateAchievement_CertificateAchievement__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Achievements_Achievements__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LastFooter_Lastfooter__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\styles\\GlobalComponents\\Button.js";



const Button = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1500px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:700;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '40px' : '43px', props => props.main ? '50px' : '54px', props => props.main ? '5px 0 6px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:13px;line-height:25px;font-weight:300;padding-bottom:2rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? 'linear-gradient(270deg, yellow 0%, orange 100%)' : 'linear-gradient(270deg, yellow 0%, orange 100%)', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '150px', ({
  alt
}) => alt ? '50px' : '60px', ({
  alt
}) => alt ? '16px' : '16px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, yellow 0%, orange 100%)' : 'linear-gradient(270deg, yellow 0%, orange 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:40px;color:black;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, yellow 0%, orange 100%)' : 'linear-gradient(270deg, yellow 0%, orange 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '15px' : '15px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');

/***/ }),

/***/ "file-saver":
/*!*****************************!*\
  !*** external "file-saver" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("file-saver");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-easy-marquee":
/*!*************************************!*\
  !*** external "react-easy-marquee" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-easy-marquee");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "reactjs-popup":
/*!********************************!*\
  !*** external "reactjs-popup" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactjs-popup");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-abc73b"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNoaWV2ZW1lbnRzL0FjaGlldmVtZW50U3R5bGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0FjaGlldmVtZW50cy9BY2hpZXZlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50c1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVBY2hpZXZlbWVudC9DZXJ0aWZpY2F0ZUFjaGlldmVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvTGFzdEZvb3Rlci9MYXN0Zm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9MYXN0Rm9vdGVyL0xhc3Rmb290ZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9QdWJsaWNhdGlvbnMvcHVibGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvblN0eWxlLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJmaWxlLXNhdmVyXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1lYXN5LW1hcnF1ZWVcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInJlYWN0anMtcG9wdXBcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2lnbm9yZWR8QzpcXFVzZXJzXFxIUFxcRGVza3RvcFxccG9ydGZvbGlvX3dlYnNpdGUtU1RBUlRFUlxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIkxpc3QiLCJsZyIsIm1kIiwiTGlzdENvbnRhaW5lciIsIkxpc3RUaXRsZSIsIkltYWdlIiwiTGlzdFBhcmFncmFwaCIsIlByb2dyZXNzQmFyIiwiTGlzdEl0ZW0iLCJHcmlkIiwiUm93IiwiQ29sIiwic2l6ZSIsIkl0IiwiQ2Fyb3VzZWxDb250YWluZSIsImNvbG9yZWRMaW5lIiwiSXkiLCJJYSIsIkJ1dHRvbiIsImFsdCIsImRpc2FibGVkIiwiTGlzdEljb24iLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsImZpbmFsIiwiQ2Fyb3VzZWxJdGVtIiwiYWN0aXZlIiwiaW5kZXgiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbEJ1dHRvbiIsIkNhcm91c2VsQnV0dG9uRG90IiwiQWNoaWV2ZW1lbnQiLCJkYXRhIiwibnVtYmVyIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwiYWxpZ25TZWxmIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImNvbG9yIiwiSXoiLCJJbyIsIklnIiwiSWMiLCJJbWciLCJCb3hlcyIsIkJveCIsIkJveE51bSIsIkJveFRleHQiLCJKb2luIiwiSm9pblRleHQiLCJJY29uQ29udGFpbmVyIiwiQ2VydGkiLCJIZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkJvdHRvbSIsImZvbnRGYW1pbHkiLCJDb250YWluZXIiLCJEaXYxIiwiRGl2MiIsIkRpdjMiLCJOYXZMaW5rIiwiQ29udGFjdERyb3BEb3duIiwiTmF2UHJvZHVjdHNJY29uIiwiSW9Jb3NBcnJvd0Ryb3Bkb3duIiwiaXNPcGVuIiwiU29jaWFsSWNvbnMiLCJzYXZlRmlsZSIsIkZpbGVTYXZlciIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQ0xJRU5UX1VSTCIsIkhlcm8iLCJMZWZ0U2VjdGlvbiIsIkZvb3RlciIsIkZvb3RlcldyYXBwZXIiLCJJdSIsIkJsb2dDYXJkIiwiVGl0bGVDb250ZW50IiwiSGVhZGVyVGhyZWUiLCJ0aXRsZSIsIkhyIiwiSW50cm8iLCJDYXJkSW5mbyIsIm9wZW5Qb3MiLCJDTV9DRU5URVJfQ0VOVEVSIiwiQ01fVE9QX0xFRlQiLCJDTV9UT1BfQ0VOVEVSIiwiQ01fVE9QX1JJR0hUIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyIsIkxpbmtJdGVtIiwiU29jaWFsSWNvbnNDb250YWluZXIiLCJDb21wYW55Q29udGFpbmVyIiwiU2xvZ2FuIiwiU29jaWFsQ29udGFpbmVyIiwiTGlua0xpc3QiLCJMaW5rQ29sdW1uIiwiTGlua1RpdGxlIiwiUHJvamVjdHMiLCJUaW1lbGluZSIsIlRlY2hub2xvZ2llcyIsIkltYWdlQ29udGFpbmVyIiwiTWFpbkltYWdlIiwiYm94U2hhZG93IiwicHJvamVjdHMiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFncyIsInNvdXJjZSIsInZpc2l0IiwiaWQiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJIb21lIiwiZm9ybSIsIm9uQ2xpY2siLCJTZWN0aW9uIiwiZ3JpZCIsInJvdyIsIm5vcGFkZGluZyIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFTyxNQUFNQSxhQUFhLEdBQUdDLDJFQUFIO0FBQUE7QUFBQTtB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QUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQWpCcEIsRUFrQlAsQ0FBQztBQUFFZ0o7QUFBRixDQUFELEtBQWVBLEtBQUssR0FBRyxHQUFILEdBQVMsS0FsQnRCLENBQW5CO0FBc0JBLE1BQU1DLFdBQVcsR0FBR3JKLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUVaLENBQUM7QUFBRW9KO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BRnBCLEVBSVpuSixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQUp0QixFQUtWLENBQUM7QUFBRStJO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BTGxCLEVBUVpySixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVJ0QixFQVNWLENBQUM7QUFBRWdKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BVHRCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDaFJQLHdDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5wbGFjZS1pdGVtczogY2VudGVyO1xyXG5jb2x1bW4tZ2FwOiAycmVtO1xyXG5yb3ctZ2FwOiAzcmVtO1xyXG5iYWNrZ3JvdW5kOiAjMzY0NTRGO1xyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcclxuICAgIG1hcmdpbjogNjRweCAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIGdhcDogNHB4XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIHdpZHRoOjMwMHB4O1xyXG5cclxuICBcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6ICNGQ0NEMDQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuZmxleDogMSxcclxud2lkdGg6IDIwMHB4JyxcclxuaGVpZ2h0OiAnMTAwJScsXHJcbnJlc2l6ZU1vZGU6ICdjb250YWluJyxcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RQYXJhZ3JhcGggPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyID0gc3R5bGVkLnBgXHJcbiAgY29sb3I6IHllbGxvdztcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIG1heC13aWR0aDogMjAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBkaXNwbGF5OmZsZXg7XHJcblxyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kOiBncmV5O1xyXG5kaXNwbGF5OmZsZXg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ29sID0gc3R5bGVkLmRpdmBcclxuZmxleDogJHsocHJvcHMpPT4gcHJvcHMuc2l6ZX07XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJdCA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMTVweDtcclxubWFyZ2luLWxlZnQ6IDNweDtcclxubWFyZ2luLXRvcDoycHg7XHJcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxDb250YWluZSA9IHN0eWxlZC51bGBcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xyXG4gIHBhZGRpbmc6IDByZW07XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICY6Zmlyc3Qtb2YtdHlwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAvL3JlbW92ZSBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICBcclxuICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcclxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBjb2xvcmVkTGluZSA9IHN0eWxlZC5kaXZgXHJcbmNvbG9yOiB5ZWxsb3c7XHJcbmJhY2tncm91bmQ6ICNGQ0NEMDQ7XHJcbmhlaWdodDogNTtcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJeSA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMTJweDtcclxuY29sb3I6I0ZDQ0QwNDtcclxuZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxubWFyZ2luLXJpZ2h0OiAzcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJYSA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMTFweDtcclxuY29sb3I6d2hpdGU7XHJcbnRleHQtYWxpZ246IGp1c3RpZnk7XHJcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbm1hcmdpbi1sZWZ0OjNweDtcclxubWFyZ2luLXJpZ2h0OjNweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMDBweCcgOiAnMTIwcHgnfTtcclxuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc0MHB4JyA6ICc0MHB4J307XHJcbiAgYm9yZGVyLXJhZGl1czogODBweDtcclxuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMnB4JyA6ICcxMnB4J307XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHllbGxvdyAwJSwgb3JhbmdlIDEwMCUpJ307XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgfVxyXG5cclxuXHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEljb24gPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxDb250YWluZXIgPSBzdHlsZWQudWxgXHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcclxuICBwYWRkaW5nOiAwcmVtO1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG5cclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAmOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgLy9yZW1vdmUgc2Nyb2xsYmFyXHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgXHJcbiAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUgPSBzdHlsZWQuZGl2YFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLXdpZHRoOiAkeyh7IGZpbmFsIH0pID0+IGZpbmFsID8gYDEyMCU7YCA6IGBtaW4tY29udGVudGB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMjRweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwRTEzMUY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIFxyXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgb3BhY2l0eTogMWAgOiBgb3BhY2l0eTogMC41YH07IFxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogVGhpcyBncmFkaWVudCBpcyBkaWZmZXJlbnQgZHVlIHRvIHRoZSBzaXplIG9mIHRoZSBUaXRsZSBjb250YWluZXIsIGl0IG11c3QgdHJhbnNpdGlvbiBzb29uZXIgdG8gYmUgdmlzaWJsZSBvbiB0aGUgdGV4dCAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNGRkZGRkYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDMwLjE1JSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1JbWcgPSBzdHlsZWQuc3ZnYFxyXG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApKTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0MDBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIFxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgMWAgOiBgLjMzYH07XHJcbiAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBzY2FsZSgxLjYpYCA6IGBzY2FsZSgxKWB9O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25Eb3QgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbmBcclxuIiwiaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUsIFByb2dyZXNzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMaXN0LCBMaXN0Q29udGFpbmVyLCBJYSxJbWcsIExpc3RJdGVtLEdyaWRDb250YWluZXIsIEJ1dHRvbiAsIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZSwgUHJvZ3Jlc3NCYXIsIEdyaWQsIEl0LCBSb3csIENvbCwgY29sb3JlZExpbmUsIEl5fSBmcm9tICcuL0FjaGlldmVtZW50U3R5bGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZWFzeS1tYXJxdWVlXCI7XHJcblxyXG5jb25zdCBBY2hpZXZlbWVudD0oKT0+KFxyXG4gICAgPFNlY3Rpb24gaWQgPVwiYWNoaWV2ZVwiPlxyXG4gICAgICAgIDxTZWN0aW9uRGl2aWRlci8+XHJcbjxTZWN0aW9uVGl0bGU+QWNoaWV2ZW1lbnRzPC9TZWN0aW9uVGl0bGU+XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgICAgPE1hcnF1ZWUgZHVyYXRpb249ezEwMDAwfSBiYWNrZ3JvdW5kPVwicmdiKDAsMzMsNzEpXCIgaGVpZ2h0PVwiODBweFwiIGF4aXM9XCJYXCI+XHJcbiAgICAgICAgPEl5PkFjaGlldmVtZW50MTwvSXk+XHJcbiAgICAgICAgPEl5PkFjaGlldmVtZW50MjwvSXk+XHJcbiAgICAgICAgPEl5PkFjaGlldmVtZW50MzwvSXk+XHJcbiAgICAgICAgPEl5PkFjaGlldmVtZW50NDwvSXk+XHJcbiAgICAgIDwvTWFycXVlZT5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9TZWN0aW9uPlxyXG5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjaGlldmVtZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQge0l0fSBmcm9tICcuLi9UaW1lTGluZS9UaW1lTGluZVN0eWxlcydcbmltcG9ydCB7IEZhVXNlckdyYWR1YXRlLCBGYVVuaXZlcnNpdHksRmFSZWdXaW5kb3dNYXhpbWl6ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0LCBHcmlkQ29udGFpbmVyLCBMaXN0Q29udGFpbmVyLCBMaXN0LCBMaXN0VGl0bGUsIEltZywgSXosIElvLCBJYSxJZywgTGlzdFBhcmFncmFwaCwgTGlzdEl0ZW0gfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcblxuY29uc3QgZGF0YSA9IFtcbiAgeyBudW1iZXI6IDIwLCB0ZXh0OiAnT3BlbiBTb3VyY2UgUHJvamVjdHMnfSxcbiAgeyBudW1iZXI6IDEwMDAsIHRleHQ6ICdTdHVkZW50cycsIH0sXG4gIHsgbnVtYmVyOiAxOTAwLCB0ZXh0OiAnR2l0aHViIEZvbGxvd2VycycsIH0sXG4gIHsgbnVtYmVyOiA1MDAwLCB0ZXh0OiAnR2l0aHViIFN0YXJzJywgfVxuXTtcblxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXG48U2VjdGlvbiBpZD0gXCJ0ZWNoXCI+XG4gIDxTZWN0aW9uRGl2aWRlci8+XG4gIDxTZWN0aW9uVGl0bGU+RWR1Y2F0aW9uPC9TZWN0aW9uVGl0bGU+XG4gIDxHcmlkQ29udGFpbmVyPlxuICAgIDxMaXN0PlxuICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICA8SW1nICBzdHlsZT17e1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAxMDAsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBib3JkZXJXaWR0aDogNSxcbiAgICBib3JkZXJSYWRpdXM6IDc1LFxuICAgIG1hcmdpblRvcDotMzAsXG4gICAgY29sb3I6ICdibGFjaydcbiAgfX0gc3JjPVwiL2ltYWdlcy8xMy5wbmdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cbiAgICAgPEl0PiBTUk0gSU5TVElUVVRFIE9GIFNDSUVOQ0UgQU5EIFRFQ0hOT0xPR1kgPC9JdD5cbiAgICAgPEl6PkthdHRhbmt1bGF0aHVyLCBDaGVubmFpLCBJbmRpYTwvSXo+XG4gICAgIDxociBjb2xvcj1cIiM0MTY5ZTFcIi8+XG4gICAgIDxici8+XG4gICAgIDxJYT48RmFVc2VyR3JhZHVhdGUvPiAgIEJBQ0hFTE9SIE9GIFRFQ0hOT0xPR1kgPC9JYT5cbiAgICAgPElvPklORk9STUFUSU9OIFRFQ0hOT0xPR1k8L0lvPlxuICAgICA8YnIvPlxuICAgICA8SWc+MjAxNi0yMDIwICZuYnNwOyZuYnNwOzxGYVVuaXZlcnNpdHkvPiZuYnNwOyZuYnNwOyBHUEEtIDkuMTEvMTA8L0lnPlxuICAgICA8YnIvPlxuICAgICA8TGlzdFBhcmFncmFwaD4gIOKAoiBCaWcgRGF0YSAmbmJzcDsmbmJzcDsg4oCiIENvbXB1dGVyIEdyYXBoaWNzICZuYnNwOyZuYnNwOyDigKIgRGF0YSBTdHJ1Y3R1cmVzICZuYnNwOyZuYnNwOyDigKIgQ2xvdWQgQ29tcHV0aW5nICZuYnNwOyZuYnNwOyBcbiAgICAgICDigKIgRGlzY3JldGUgTWF0aGVtYXRpY3MgJm5ic3A7Jm5ic3A7IOKAoiBPcGVyYXRpbmcgU3lzdGVtPC9MaXN0UGFyYWdyYXBoPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgIDwvTGlzdD5cbiAgICBcbiAgICBcbiAgPC9HcmlkQ29udGFpbmVyPlxuICA8YnIvPlxuPC9TZWN0aW9uPlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogMnJlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbmJhY2tncm91bmQ6ICNGQ0NEMDQ7XG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5gXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xuICAgIG1hcmdpbjogNjRweCAwO1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgZ2FwOiA0cHhcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IEl6ID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTFweDtcbm1hcmdpbi1sZWZ0OiAzcHg7XG5tYXJnaW4tdG9wOjJweDtcbmNvbG9yOiAjRkNDRDA0O1xuZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcbmA7XG5leHBvcnQgY29uc3QgSW8gPSBzdHlsZWQuZGl2YFxuZm9udC1zaXplOiAxMXB4O1xubWFyZ2luLWxlZnQ6IDNweDtcbm1hcmdpbi10b3A6MnB4O1xuY29sb3I6ICNGQ0NEMDQ7XG5mb250LWZhbWlseTpjdXJzaXZlO1xudGV4dC1hbGlnbjpjZW50ZXI7XG5gO1xuZXhwb3J0IGNvbnN0IElnID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTNweDtcbm1hcmdpbi1sZWZ0OiAzcHg7XG5tYXJnaW4tdG9wOjJweDtcbmNvbG9yOiBwb3dkZXItYmx1ZTtcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XG50ZXh0LWFsaWduOmNlbnRlcjtcbmJvcmRlci1jb2xvcjogYmx1ZTtcbmJveC1zaGFkb3c6IDNweCAzcHggMjBweCBibHVlO1xuYDtcbmV4cG9ydCBjb25zdCBJYyA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDExcHg7XG5tYXJnaW4tbGVmdDogM3B4O1xubWFyZ2luLXRvcDoycHg7XG5jb2xvcjogI0ZDQ0QwNDtcbnRleHQtYWxpZ246IGNlbnRlcjtcblxuZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJYSA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDE4cHg7XG5jb2xvcjogd2hpdGU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LWZhbWlseTpjdXJzaXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCAjZmZmZmRjO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICB3aWR0aDozODBweDtcblxuICBcbiAgYmFja2dyb3VuZDpibGFjaztcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogI0ZDQ0QwNDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuYFxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG5mbGV4OiAxLFxud2lkdGg6ICcxMDAlJyxcbmhlaWdodDogJzEwMCUnLFxucmVzaXplTW9kZTogJ2NvbnRhaW4nLFxuYFxuXG5leHBvcnQgY29uc3QgTGlzdFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgXG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IHN0eWxlZC5wYFxuICBjb2xvcjogeWVsbG93O1xuYFxuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgbWF4LXdpZHRoOiAyMDNweDtcbn1cblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OmZsZXg7XG5cbn1cbmBcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcbmJhY2tncm91bmQ6IGdyZXk7XG5kaXNwbGF5OmZsZXg7XG5gO1xuZXhwb3J0IGNvbnN0IEJveGVzID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luOiAyNHB4IDAgNDBweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZ2FwOiAxNnB4O1xuICAgIG1hcmdpbjogMjBweCAwIDMycHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNDBweCwgMWZyKSk7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMjRweCBhdXRvO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMjEyRDQ1O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBoZWlnaHQ6IDE0NHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xuICAgIGhlaWdodDogMjEwcHg7XG5cbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgXG4gICAgJjpudGgtY2hpbGQoMm4pe1xuICAgICAgZ3JpZC1yb3c6MjtcbiAgICB9XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBCb3hOdW0gPSBzdHlsZWQuaDVgXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IEJveFRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBKb2luID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSm9pblRleHQgPSBzdHlsZWQuaDVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn07XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgTGlzdCwgR3JpZENvbnRhaW5lcixMaXN0Q29udGFpbmVyLCBDb250YWluZXIsIEhyLCBUYWcsIFRhZ0xpc3QsIFRpdGxlQ29udGVudCwgQnV0dG9uLCBJbWcsIEl5LCBJeiwgSWEsIEl1IH0gZnJvbSAnLi4vUHJvamVjdHMvUHJvamVjdHNTdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ2VydGk9KCk9PihcclxuICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uRGl2aWRlci8+XHJcbiAgICAgICAgPFNlY3Rpb25UaXRsZT5DZXJ0aWZpY2F0ZXM8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxJbWcgc3R5bGU9e3tcclxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6IDE1MCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH19IHNyYz1cIi9pbWFnZXMvY291cnNlMS5qcGdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIvPlxyXG4gICA8YnIvPlxyXG4gIDxJYT48QnV0dG9uIGFzPVwiYVwiIGhyZWY9XCJodHRwczovL3d3dy51ZGVteS5jb20vY2VydGlmaWNhdGUvVUMtMzcxYzM3ZjEtMDNlMC00ZTdiLWE4NTEtYThkNDliYThiYWFhL1wiID5WaWV3IENlcnRpZmljYXRlPC9CdXR0b24+PC9JYT5cclxuICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8SW1nIHN0eWxlPXt7XHJcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAxNTAsXHJcbiAgICB3aWR0aDogMzAwLFxyXG4gICAgY29sb3I6ICdibGFjaydcclxuICB9fSBzcmM9XCIvaW1hZ2VzL2NvdXJzZTIucG5nXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiLz5cclxuICA8YnIvPlxyXG4gIDxJYT48QnV0dG9uIGFzPVwiYVwiIGhyZWY9XCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvY2VydGlmaWNhdGUvWTdBRkNCQzZZWk45XCIgPlZpZXcgQ2VydGlmaWNhdGU8L0J1dHRvbj48L0lhPlxyXG4gIDxici8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWcgc3R5bGU9e3tcclxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6IDE1MCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH19IHNyYz1cIi9pbWFnZXMvY291cnNlMy5wbmdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIvPlxyXG4gIDxici8+XHJcbiAgPElhPjxCdXR0b24gYXM9XCJhXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy9jZXJ0aWZpY2F0ZS84WENTTkxKNzhBR1VcIiA+VmlldyBDZXJ0aWZpY2F0ZTwvQnV0dG9uPjwvSWE+XHJcbiAgPGJyLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPEltZyBzdHlsZT17e1xyXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogMTUwLFxyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgfX0gc3JjPVwiL2ltYWdlcy9jb3Vyc2U0LnBuZ1wiIHJvdW5kZWRDaXJjbGUgcmVzaXplTW9kZT1cInN0cmV0Y2hcIi8+XHJcbiAgPGJyLz5cclxuICA8SWE+PEJ1dHRvbiBhcz1cImFcIiBocmVmPVwiaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL2NlcnRpZmljYXRlLzM0UDNUQTZQQlNDQ1wiID5WaWV3IENlcnRpZmljYXRlPC9CdXR0b24+PC9JYT5cclxuICA8YnIvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8SW1nIHN0eWxlPXt7XHJcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAxNTAsXHJcbiAgICB3aWR0aDogMzAwLFxyXG4gICAgY29sb3I6ICdibGFjaydcclxuICB9fSBzcmM9XCIvaW1hZ2VzL2NvdXJzZTUucG5nXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiLz5cclxuICA8YnIvPlxyXG4gIDxJYT48QnV0dG9uIGFzPVwiYVwiIGhyZWY9XCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvY2VydGlmaWNhdGUvR1BSNEdTMjQ4VzVYXCIgPlZpZXcgQ2VydGlmaWNhdGU8L0J1dHRvbj48L0lhPlxyXG4gIDxici8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcblxyXG4gICAgPC9TZWN0aW9uPlxyXG5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlcnRpOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgRGlCYWNrYm9uZSwgRGlDc3NkZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIERpdjEsIERpdjIsIERpdjMsIE5hdkxpbmssIFNvY2lhbEljb25zIH0gZnJvbSAnLi9Gb290ZXJTdHlsZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAgKFxuICA8ZGl2PlxuICAgIDxici8+XG4gICA8Q29udGFpbmVyPlxuICAgICA8RGl2MT5cbiAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgPGEgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBjb2xvcjpcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTpcIjEwcHhcIiwgZm9udEZhbWlseTonY3Vyc2l2ZSd9fT5cbiAgICAgICAgICAgPHNwYW4gc2l6ZT1cIjE3cHhcIj5Db3B5cmlnaHQgwqkyMDIxPC9zcGFuPlxuICAgICAgICAgPC9hPlxuXG4gICAgICAgPC9MaW5rPlxuICAgICA8L0RpdjE+XG4gXG4gIFxuICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kOiAjRkNDRDA0O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBoZWlnaHQ6NjdweDtcbiAgXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNjBweCk7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjVyZW07XG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDY7XG4gIH1cbmA7XG5cbi8vIE5hdmlnYXRpb24gTGlua3NcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXG4gIFxuICBsaW5lLWhlaWdodDogMztcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5gO1xuXG4vLy8gRHJvcERvd24gQ29udGFjdFxuZXhwb3J0IGNvbnN0IENvbnRhY3REcm9wRG93biA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDEuN3JlbTtcblxuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMC40cmVtIDA7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZQcm9kdWN0c0ljb24gPSBzdHlsZWQoSW9Jb3NBcnJvd0Ryb3Bkb3duKWBcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIG9wYWNpdHk6ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnMScgOiAnLjc1Jyl9O1xuICB0cmFuc2Zvcm06ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnc2NhbGVZKC0xKScgOiAnc2NhbGVZKDEpJyl9O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luOiAycHggMCAwIDJweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuYDtcblxuXG4vLyBTb2NpYWwgSWNvbnMgXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxJY29ucyA9IHN0eWxlZC5hYFxudHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuY29sb3I6IGJsYWNrO1xuYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMmQ0NTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICB9XG5gIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbEluc3RhZ3JhbSwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5pbXBvcnQgeyBEaUJhY2tib25lLCBEaUNzc2RlY2sgfSBmcm9tICdyZWFjdC1pY29ucy9kaSc7XG5cbmltcG9ydCB7IENvbnRhaW5lciwgRGl2MSwgRGl2MiwgRGl2MywgTmF2TGluaywgU29jaWFsSWNvbnMgfSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+ICAoXG4gIDxkaXY+XG4gICA8Q29udGFpbmVyPlxuICAgICA8RGl2MT5cbiAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgPGEgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBjb2xvcjpcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTpcIjEwcHhcIiwgZm9udEZhbWlseTonY3Vyc2l2ZSd9fT5cbiAgICAgICAgICAgPERpQmFja2JvbmUgc2l6ZT1cIjNyZW1cIiAvPjxzcGFuIHNpemU9XCIxN3B4XCI+QW1pc2hhIFNpbmhhPC9zcGFuPlxuICAgICAgICAgPC9hPlxuXG4gICAgICAgPC9MaW5rPlxuICAgICA8L0RpdjE+XG4gICAgIDxEaXYyPlxuICAgICAgIDxsaT5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIjcHJvamVjdHNcIj5cbiAgICAgICAgICAgPE5hdkxpbms+UFJPSkVDVFM8L05hdkxpbms+XG4gICAgICAgICA8L0xpbms+XG4gICAgICAgPC9saT5cbiAgICAgICA8bGk+XG4gICAgICAgICA8TGluayBocmVmPVwiI3RlY2hcIj5cbiAgICAgICAgICAgPE5hdkxpbms+VEVDSE5PTE9HSUVTPC9OYXZMaW5rPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPExpbmsgaHJlZj1cIiNhYm91dFwiPlxuICAgICAgICAgICA8TmF2TGluaz5BQk9VVDwvTmF2TGluaz5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICA8L2xpPlxuICAgICA8L0RpdjI+XG4gICAgIDxEaXYzPlxuICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tXCI+XG4gICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb21cIj5cbiAgICAgICAgIDxBaUZpbGxMaW5rZWRpbiBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbVwiPlxuICAgICAgICAgPEFpRmlsbEluc3RhZ3JhbSBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICAgPC9EaXYzPlxuICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kOiAjRkNDRDA0O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBEaXYxID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MiA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MyA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcbiAgfVxuYDtcblxuLy8gTmF2aWdhdGlvbiBMaW5rc1xuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcbiAgXG4gIGxpbmUtaGVpZ2h0OiAzO1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbmA7XG5cbi8vLyBEcm9wRG93biBDb250YWN0XG5leHBvcnQgY29uc3QgQ29udGFjdERyb3BEb3duID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdlByb2R1Y3RzSWNvbiA9IHN0eWxlZChJb0lvc0Fycm93RHJvcGRvd24pYFxuICBtYXJnaW4tbGVmdDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgb3BhY2l0eTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICcxJyA6ICcuNzUnKX07XG4gIHRyYW5zZm9ybTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICdzY2FsZVkoLTEpJyA6ICdzY2FsZVkoMSknKX07XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW46IDJweCAwIDAgMnB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG5gO1xuXG5cbi8vIFNvY2lhbCBJY29ucyBcblxuZXhwb3J0IGNvbnN0IFNvY2lhbEljb25zID0gc3R5bGVkLmFgXG50cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG5jb2xvcjogYmxhY2s7XG5ib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4mOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gIH1cbmAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0sIEdyaWRDb250YWluZXIgfSBmcm9tICcuL0hlcm9TdHlsZXMnO1xuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcblxuY29uc3Qgc2F2ZUZpbGUgPSAoKSA9PiB7XG4gIEZpbGVTYXZlci5zYXZlQXMoXG4gICAgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NMSUVOVF9VUkwgKyBcIi4uLy4uL2Fzc2V0L1Jlc3VtZS5wZGZcIixcbiAgICBcIkFtaXNoYVNpbmhhX1Jlc3VtZS5wZGZcIlxuICApO1xuICB9XG5cblxuY29uc3QgSGVybyA9IChwcm9wcykgPT4gKFxuIFxuXG5cbiA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxuICAgXG4gICA8R3JpZENvbnRhaW5lcj5cbiAgICAgPExpc3Q+XG4gICAgICAgPExpc3RJdGVtPlxuICAgPGltZyBzcmM9XCIuL2ltYWdlcy9pbWcxMS5wbmdcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjQwMFwiICAvPlxuICAgICA8YnIvPlxuICAgPC9MaXN0SXRlbT5cbiAgIDxMaXN0SXRlbT5cbiAgICAgPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlciBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgSGkgSSdtIFxuICAgICAgIEFtaXNoYSBTaW5oYVxuICAgICA8L1NlY3Rpb25UaXRsZT5cbiAgICAgPFNlY3Rpb25UZXh0IGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgSSBhbSBTb2Z0d2FyZSBFbmdpbmVlciB3aXRoIGV4cGVyaWVuY2UgaW4gT3JkZXIgTWFuYWdlbWVudCBTeXN0ZW0gYW5kIEUtQ29tbWVyY2UgaW1wbGVtZW50YXRpb25zIGFsb25nIHdpdGggZ29vZCB3b3JraW5nIGV4cGVyaWVuY2UgaW4gY29uc3VsdGluZyBza2lsbHMgd2l0aCB0aGUgYWJpbGl0eSB0byBpZGVudGlmeSBpc3N1ZXMgaW4gdGhlIHByb2Nlc3MgZmxvdyBhbmQgZGV2ZWxvcCBzb2x1dGlvbnMgZm9yIE9NUyBDbGllbnRzLlxuICAgICA8YnIvPlxuICAgICBJIGFzcGlyZSB0byBwdXJzdWUgYSBNYXN0ZXLigJlzIGluIENvbXB1dGVyIFNjaWVuY2UgdG8gbGVhcm4gYW5kIGVuaGFuY2UgbXkga25vd2xlZGdlIGFuZCBza2lsbHMgaW4gdmFyaW91cyBhc3BlY3RzIFxub2YgYWxnb3JpdGhtIGRldmVsb3BtZW50IGFuZCBNYWNoaW5lIExlYXJuaW5nIGNvbmNlcHRzLiBQb3N0IE1hc3RlcnMsIEkgaW50ZW5kIHRvIGltcGxlbWVudCBteSBhY3F1aXJlZCBcbmtub3dsZWRnZSB3aGlsZSB3b3JraW5nIHdpdGggaW50ZXJkaXNjaXBsaW5hcnkgSVQgb3JnYW5pemF0aW9ucyBhcyBhbiBleHBlcnQgaW4gRGF0YSBTY2llbmNlIHRvb2xzLiBJbiB0aGUgbG9uZyBydW4sIFxuSSB3YW50IHRvIGRldmVsb3AgZXhwZXJ0IHN5c3RlbSBpbm5vdmF0aXZlIHByZWRpY3Rpb24gdG9vbHMgdG8gYXNzaXN0IHRoZSBlZHVjYXRpb24gYW5kIGhlYWx0aGNhcmUgc2VjdG9ycyB3b3JsZHdpZGUuXG4gICAgIDwvU2VjdGlvblRleHQ+XG4gICBcbiAgICAgPC9MaXN0SXRlbT5cbiAgICAgPExpc3RJdGVtPlxuICAgICA8QnV0dG9uIG9uQ2xpY2s9IHtzYXZlRmlsZX0+RG93bmxvYWQgUmVzdW1lPC9CdXR0b24+XG4gICAgIDwvTGlzdEl0ZW0+XG4gICAgIDwvTGlzdD5cbiAgICAgPC9HcmlkQ29udGFpbmVyPlxuXG4gPC9TZWN0aW9uPlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbmRpc3BsYXk6IGZsZXg7XG5wYWRkaW5nOiAycmVtO1xucGxhY2UtaXRlbXM6IGNlbnRlcjtcbmNvbHVtbi1nYXA6IDJyZW07XG5yb3ctZ2FwOiAzcmVtO1xud2lkdGg6MTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIG1heC13aWR0aDogMjAzcHhcbn1cblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuYFxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgY29sdW1uLWdhcDogMTIwcHg7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBcbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcbiAgICBtYXJnaW46IDZweCAwO1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgZ2FwOiA0cHhcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IExlZnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbEluc3RhZ3JhbSwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlLCBQcm9ncmVzcyB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgU29jaWFsSWNvbnMgfSBmcm9tICcuLi9IZWFkZXIvSGVhZGVyU3R5bGVzJztcclxuaW1wb3J0IHsgR3JpZENvbnRhaW5lciwgTGlzdENvbnRhaW5lciwgTGlzdCwgSW1nLCBCdXR0b259IGZyb20gJy4vTGFzdGZvb3RlclN0eWxlJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb25EaXZpZGVyLz5cclxuICAgICAgICA8U2VjdGlvblRpdGxlPkNvbnRhY3QgTWU8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEltZyAgc3R5bGU9e3tcclxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgfX0gc3JjPVwiL2ltYWdlcy9saW5rZWRpbi5qcGdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cclxuICAgICA8SW1nICBzdHlsZT17e1xyXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogMjQwLFxyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgfX0gc3JjPVwiL2ltYWdlcy9saW5rSW1nLmpwZ1wiIHJvdW5kZWRDaXJjbGUgcmVzaXplTW9kZT1cInN0cmV0Y2hcIiAvPlxyXG4gIDxici8+XHJcbiAgPEJ1dHRvbiBhcz1cImFcIiBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW1pc2hhLXNpbmhhLTQ3OTk3NzE1OC8nPlZpZXcgUHJvZmlsZTwvQnV0dG9uPlxyXG4gIDxici8+XHJcbiBcclxuXHJcbiAgICAgICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcblxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5cdHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTZweCk7XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgcGFkZGluZzogMnJlbSA0OHB4IDQwcHg7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMCAxNnB4IDQ4cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xyXG4gIH1cclxuYFxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5wbGFjZS1pdGVtczogY2VudGVyO1xyXG5jb2x1bW4tZ2FwOiAycmVtO1xyXG5yb3ctZ2FwOiAzcmVtO1xyXG5iYWNrZ3JvdW5kOiAjNjk2OTY5O1xyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMDBweCcgOiAnMTAwcHgnfTtcclxuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc0MHB4JyA6ICc0MHB4J307XHJcbiAgYm9yZGVyLXJhZGl1czogODBweDtcclxuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMnB4JyA6ICcxM3B4J307XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDc3YjU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNzdiNTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3N2I1O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tbGVmdDoxMDBweDtcclxuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmN2ZjO1xyXG4gIH1cclxuXHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSXkgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDE1cHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LWZhbWlseTpjdXJzaXZlO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSWEgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDEycHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LWZhbWlseTpjdXJzaXZlO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSXUgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDEycHg7XHJcbmNvbG9yOiB3aGl0ZTtcclxudGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG5mb250LWZhbWlseTpjdXJzaXZlO1xyXG5tYXJnaW4tbGVmdDozcHg7XHJcbm1hcmdpbi1yaWdodDozcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJeiA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMjBweDtcclxuY29sb3I6ICNGQ0NEMDQ7XHJcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHllbGxvdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQ3MHB4O1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiAjRkNDRDA0O1xyXG4gIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGl0bGUgPyAnMnJlbScgOiAnMS42cmVtJ307XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjb2xvcjogI2RjZTNlNztcclxuICBmb250LWZhbWlseTogJ2N1cnNpdmUnO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIGZvbnQtc3R5bGU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOi4ycmVtXHJcbiAgXHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOmZpeGVkO1xyXG5cdGJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcclxuXHR3aWR0aDogMzMlO1xyXG5cdGhlaWdodDogYXV0bztcclxuICAgIFxyXG5cdHRvcDogJHsoe29wZW5Qb3N9KSA9PiAoXHJcblx0e1xyXG4gICAgXHRbQ01fQ0VOVEVSX0NFTlRFUl06ICc1MCUnLFxyXG4gICAgXHRbQ01fVE9QX0xFRlRdOiAnMTAlJyxcclxuICAgIFx0W0NNX1RPUF9DRU5URVJdOiAnMTAlJyxcclxuICAgIFx0W0NNX1RPUF9SSUdIVF06ICcxMCUnXHJcblx0fVtvcGVuUG9zXSl9O1xyXG4gICAgXHJcblx0bGVmdDogJHsoe29wZW5Qb3N9KSA9PiAoXHJcblx0e1xyXG4gICAgXHRbQ01fQ0VOVEVSX0NFTlRFUl06ICc1MCUnLFxyXG4gICAgXHRbQ01fVE9QX0xFRlRdOiAnNSUnLFxyXG4gICAgXHRbQ01fVE9QX0NFTlRFUl06ICc1MCUnLFxyXG4gICAgXHRbQ01fVE9QX1JJR0hUXTogJzk1JSdcclxuXHR9W29wZW5Qb3NdKX07XHJcbiBcclxuXHR0cmFuc2Zvcm06ICR7KHtvcGVuUG9zfSkgPT4gKFxyXG5cdHtcclxuICAgIFx0W0NNX0NFTlRFUl9DRU5URVJdOiAndHJhbnNsYXRlKC01MCUsLTUwJSknLFxyXG4gICAgXHRbQ01fVE9QX0xFRlRdOiAndHJhbnNsYXRlKDAsMCknLFxyXG4gICAgXHRbQ01fVE9QX0NFTlRFUl06ICd0cmFuc2xhdGUoLTUwJSwwKScsXHJcbiAgICBcdFtDTV9UT1BfUklHSFRdOiAndHJhbnNsYXRlKC0xMDAlLDApJ1xyXG5cdH1bb3BlblBvc10pfTtcclxuXHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRwYWRkaW5nOiAwLjc1cmVtO1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwxMzksIDAuNyk7XHJcbmA7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB3aWR0aDozMDBweDsgXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcclxuICAgIG1hcmdpbjogNjRweCAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIGdhcDogNHB4XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHRlcm5hbExpbmtzID0gc3R5bGVkLmFgXHJcbmNvbG9yOmJsYWNrO1xyXG5mb250LXNpemU6IDFyZW07XHJcbnBhZGRpbmc6MXJlbSAxLjVyZW07XHJcbmJhY2tncm91bmQ6ICNGQ0NEMDQ7XHJcbmJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbnRyYW5zaXRpb246IDAuNXM7XHJcbiY6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzgwMTQxNDtcclxuXHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxucGFkZGluZzogMnJlbTtcclxuYFxyXG5leHBvcnQgY29uc3QgVGFnID0gc3R5bGVkLmxpYFxyXG5jb2xvcjogI2Q4YmZiZjtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSXRlbSA9IHN0eWxlZC5hYFxyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cdHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRsZWZ0OiAwO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0bGVmdDogNnB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRmb250LXNpemU6IDhweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6IDEwNDBweDtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbjogMCAwIDMycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTbG9nYW4gPSBzdHlsZWQucGBcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdG1pbi13aWR0aDogMjgwcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0cGFkZGluZzogMXJlbTtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcblx0XHRsaW5lLWhlaWdodDogMjJweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG1pbi13aWR0aDogMTAwcHg7XHJcblx0fVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTGlua0xpc3QgPSBzdHlsZWQudWxgXHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg4NXB4LCAyMjBweCkpO1xyXG5cdGdhcDogNDBweDtcclxuICBwYWRkaW5nOiA0MHB4IDAgMjhweDtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcclxuXHRcdHBhZGRpbmc6IDMycHggMCAxNnB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XHJcblx0XHRnYXA6IDE2cHg7XHJcblx0fVxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDMycHggNHB4IDE2cHg7XHJcblx0XHRnYXA6IDVweDtcclxuXHR9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWF4LXdpZHRoOiAyMjBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuYFxyXG5leHBvcnQgY29uc3QgTGlua1RpdGxlID0gc3R5bGVkLmg0YFxyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsaW5lLWhlaWdodDogMjRweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cdH1cclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMaXN0LCBHcmlkQ29udGFpbmVyLExpc3RDb250YWluZXIsIENvbnRhaW5lciwgSHIsIFRhZywgVGFnTGlzdCwgVGl0bGVDb250ZW50LCBCdXR0b24sIEltZywgSXksIEl6LCBJYSwgSXUgfSBmcm9tICcuL1Byb2plY3RzU3R5bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYUdpdGh1YlNxdWFyZX0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJ3JlYWN0anMtcG9wdXAnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcbjxTZWN0aW9uIGlkPVwicHJvamVjdFwiPlxuICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgPFNlY3Rpb25UaXRsZT5cblByb2plY3RcbiAgPC9TZWN0aW9uVGl0bGU+XG4gIDxHcmlkQ29udGFpbmVyPlxuICAgIDxMaXN0PlxuICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICA8SW1nICBzdHlsZT17e1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAxNTAsXG4gICAgd2lkdGg6IDMwMCxcbiAgICBjb2xvcjogJ2JsYWNrJ1xuICB9fSBzcmM9XCIvaW1hZ2VzLzUuanBnXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XG4gIFxuICA8YnIvPlxuICA8SXk+TWFjaGluZSBMZWFybmluZyBEZXRlY3Rpb24gb2YgRGVwcmVzc2lvbiB1c2luZyBNYWNoaW5lIExlYXJuaW5nPC9JeT5cbiAgPGhyIGNvbG9yPXtcIiNGQ0NEMDRcIn0vPlxuICA8YnIvPlxuICA8UG9wdXAgdHJpZ2dlcj17PElhPjxCdXR0b24gPk1vcmUgSW5mbzwvQnV0dG9uPjwvSWE+fSBwb3NpdGlvbj1cInRvcFwiIHdpZHRoPVwiNTAwcHhcIiBoZWlnaHQ9XCIzMDBweFwiPlxuICAgIDxMaXN0PjxMaXN0Q29udGFpbmVyPlxuICAgICAgPEl5PkRlcHJlc3Npb24gRGV0ZWN0aW9uIHVzaW5nIE1MIGFsZ29yaXRobXM8L0l5PlxuICAgICAgPGhyIGNvbG9yPVwiI0ZDRERPNFwiLz5cbiAgICA8YnIvPiAgPEl1PuKAoiBGb3IgZWFybHkgZGV0ZWN0aW9uIG9mIGRlcHJlc3Npb24gaW4gcGVvcGxlIGFuZCBjdXJiaW5nIHRoZSByZWxhdGVkIHByb2JsZW1zIHVzaW5nIHNvY2lhbCBtZWRpYSBkYXRhLCB3b3JrZWQgXG5pbiBhIHRlYW0gb2YgMyB1c2luZyB0b29scyBsaWtlIFNjcmFwZSBzdG9ybSBhbmQgTkxUSy4gPGJyLz4gPGJyLz5cbuKAoiBVc2VkIEJheWVzIHRoZW9yZW0sIFNWTSwgUmFuZG9tIEZvcmVzdCBhbmQgTG9naXN0aWMgUmVncmVzc2lvbiBhbGdvcml0aG0gZm9yIGRhdGEgbW9kZWxpbmcuXG48aHIgY29sb3I9XCJGQ0NEMDRcIi8+XG48YnIvPlxuPEl6PjxGYUdpdGh1YlNxdWFyZS8+PC9Jej5cbjwvSXU+XG4gICAgXG4gICAgXG4gICAgPC9MaXN0Q29udGFpbmVyPjwvTGlzdD5cbiAgPC9Qb3B1cD5cbiAgPEl6PjxJYT48YnIvPkRlYyAyMDE5LSBNYXkgMjAyMDwvSWE+PC9Jej5cbiAgICAgICAgXG4gICAgICA8L0xpc3RDb250YWluZXI+XG5cbiAgICA8L0xpc3Q+XG4gICAgPExpc3Q+XG4gICAgICA8TGlzdENvbnRhaW5lcj5cbiAgICAgIDxJbWcgIHN0eWxlPXt7XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6IDE3MCxcbiAgICB3aWR0aDogMzAwLFxuICAgIGNvbG9yOiAnYmxhY2snXG4gIH19IHNyYz1cIi9pbWFnZXMvNy5qcGdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cbiAgPGJyLz5cbiAgPEl5PkhhbmQgR2VzdHVyZSBSZWNvZ25pdGlvbiB1c2luZyBPcGVuQ1Y8L0l5PlxuICA8aHIgY29sb3I9e1wiI0ZDQ0QwNFwifS8+XG4gIDxici8+XG4gIDxQb3B1cCB0cmlnZ2VyPXs8SWE+PEJ1dHRvbiA+TW9yZSBJbmZvPC9CdXR0b24+PC9JYT59IHBvc2l0aW9uPVwidG9wXCI+XG4gICAgPExpc3Q+PExpc3RDb250YWluZXI+XG4gICAgPEl5PkhhbmQgR2VzdHVyZSBSZWNvZ25pdGlvbiB1c2luZyBPcGVuQ1Y8L0l5PlxuICAgICAgPGhyIGNvbG9yPVwiI0ZDRERPNFwiLz5cbiAgICA8YnIvPiAgPEl1PlxuICAgIOKAoiBXb3JrZWQgaW4gYSBncm91cCBvZiA1IHRvIGltcGxlbWVudCBodW1hbi1jb21wdXRlciBpbnRlcmFjdGlvbiB1c2luZyBhbiBpbm5vdmF0aXZlIHJlYWwtdGltZSBtZXRob2QgZm9yIFxuaGFuZCBnZXN0dXJlIGRldGVjdGlvbiBhbmQgZmVhdHVyZSBleHRyYWN0aW9uIHVzaW5nIGEgd2ViY2FtLiA8YnIvPlxu4oCiIFByZS1wcm9jZXNzZWQgcmVhbC10aW1lIGlucHV0IGltYWdlcyB0byByZW1vdmUgbm9pc2UuIDxici8+XG7igKIgSGFuZCByZWdpb24gd2FzIGV4dHJhY3RlZCB1c2luZyBiYWNrZ3JvdW5kIHN1YnRyYWN0aW9uIG1ldGhvZCBhbmQgcGFsbS9maW5nZXJzIHdlcmUgc2VnbWVudGVkIGFuZCBcbmZpbmFsbHkgY29udmV4IGh1bGwgbWV0aG9kIHdhcyB1c2VkIHRvIHJlY29nbml6ZSB0aGUgZmluZ2Vycy5cbjxociBjb2xvcj1cIkZDQ0QwNFwiLz5cbjxici8+XG48SXo+PEZhR2l0aHViU3F1YXJlLz48L0l6PlxuPC9JdT5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj48L0xpc3Q+XG4gIDwvUG9wdXA+XG4gIDxJej48SWE+PGJyLz5KdW5lIDIwMTktIE5vdiAyMDIwPC9JYT48L0l6PlxuICAgICAgICBcbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cblxuICAgIDwvTGlzdD5cbiAgICA8TGlzdD5cbiAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuXG4gICAgPC9MaXN0PlxuICBcbiAgPC9HcmlkQ29udGFpbmVyPlxuPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gXG5cbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogMnJlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbmJhY2tncm91bmQ6ICM2OTY5Njk7XG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5gXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMDBweCcgOiAnMTAwcHgnfTtcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNDBweCcgOiAnNDBweCd9O1xuICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMnB4JyA6ICcxMnB4J307XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB5ZWxsb3cgMCUsIG9yYW5nZSAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6MTAwcHg7XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgfVxuXG5cbmBcblxuZXhwb3J0IGNvbnN0IEl5ID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTVweDtcbmNvbG9yOiB3aGl0ZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XG5gO1xuZXhwb3J0IGNvbnN0IElhID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTJweDtcbmNvbG9yOiB3aGl0ZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XG5gO1xuZXhwb3J0IGNvbnN0IEl1ID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTJweDtcbmNvbG9yOiB3aGl0ZTtcbnRleHQtYWxpZ246anVzdGlmeTtcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XG5tYXJnaW4tbGVmdDozcHg7XG5tYXJnaW4tcmlnaHQ6M3B4O1xuYDtcbmV4cG9ydCBjb25zdCBJeiA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDIwcHg7XG5jb2xvcjogI0ZDQ0QwNDtcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XG50ZXh0LWFsaWduOmNlbnRlcjtcbmA7XG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggeWVsbG93O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0NzBweDtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiAxMDAlO1xuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNGQ0NEMDQ7XG4gIHBhZGRpbmc6IC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRpdGxlID8gJzJyZW0nIDogJzEuNnJlbSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6ICdjdXJzaXZlJztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuYDtcblxuXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXN0eWxlOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6LjJyZW1cbiAgXG59XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246Zml4ZWQ7XG5cdGJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcblx0d2lkdGg6IDMzJTtcblx0aGVpZ2h0OiBhdXRvO1xuICAgIFxuXHR0b3A6ICR7KHtvcGVuUG9zfSkgPT4gKFxuXHR7XG4gICAgXHRbQ01fQ0VOVEVSX0NFTlRFUl06ICc1MCUnLFxuICAgIFx0W0NNX1RPUF9MRUZUXTogJzEwJScsXG4gICAgXHRbQ01fVE9QX0NFTlRFUl06ICcxMCUnLFxuICAgIFx0W0NNX1RPUF9SSUdIVF06ICcxMCUnXG5cdH1bb3BlblBvc10pfTtcbiAgICBcblx0bGVmdDogJHsoe29wZW5Qb3N9KSA9PiAoXG5cdHtcbiAgICBcdFtDTV9DRU5URVJfQ0VOVEVSXTogJzUwJScsXG4gICAgXHRbQ01fVE9QX0xFRlRdOiAnNSUnLFxuICAgIFx0W0NNX1RPUF9DRU5URVJdOiAnNTAlJyxcbiAgICBcdFtDTV9UT1BfUklHSFRdOiAnOTUlJ1xuXHR9W29wZW5Qb3NdKX07XG4gXG5cdHRyYW5zZm9ybTogJHsoe29wZW5Qb3N9KSA9PiAoXG5cdHtcbiAgICBcdFtDTV9DRU5URVJfQ0VOVEVSXTogJ3RyYW5zbGF0ZSgtNTAlLC01MCUpJyxcbiAgICBcdFtDTV9UT1BfTEVGVF06ICd0cmFuc2xhdGUoMCwwKScsXG4gICAgXHRbQ01fVE9QX0NFTlRFUl06ICd0cmFuc2xhdGUoLTUwJSwwKScsXG4gICAgXHRbQ01fVE9QX1JJR0hUXTogJ3RyYW5zbGF0ZSgtMTAwJSwwKSdcblx0fVtvcGVuUG9zXSl9O1xuXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDAuNzVyZW07XG5cdGNvbG9yOiByZ2JhKDAsMCwxMzksIDAuNyk7XG5gO1xuXG5cblxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggI0ZDQ0QwNDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgd2lkdGg6MzAwcHg7XG5cbiAgXG4gIGJhY2tncm91bmQ6YmxhY2s7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ317XG4gICAgbWFyZ2luOiA2NHB4IDA7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICBnYXA6IDRweFxuICB9XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMzJweCAwO1xuICB9XG5gXG5cblxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDIuNXJlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcbmNvbG9yOmJsYWNrO1xuZm9udC1zaXplOiAxcmVtO1xucGFkZGluZzoxcmVtIDEuNXJlbTtcbmJhY2tncm91bmQ6ICNGQ0NEMDQ7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xudHJhbnNpdGlvbjogMC41cztcbiY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XG5cbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xucGFkZGluZzogMnJlbTtcbmBcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXG5jb2xvcjogI2Q4YmZiZjtcbmZvbnQtc2l6ZTogMS41cmVtO1xuYCIsImltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlLCBQcm9ncmVzcyB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgSWEsSW1nLCBMaXN0SXRlbSxHcmlkQ29udGFpbmVyLCBCdXR0b24gLCBMaXN0UGFyYWdyYXBoLCBMaXN0VGl0bGUsIFByb2dyZXNzQmFyLCBHcmlkLCBJdCwgUm93LCBDb2wsIGNvbG9yZWRMaW5lLCBJeX0gZnJvbSAnLi9wdWJsaWNhdGlvblN0eWxlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRpbWVsaW5lPSgpPT4gKFxyXG48U2VjdGlvbiBpZD1cInRlY2hcIj5cclxuPFNlY3Rpb25EaXZpZGVyLz5cclxuPFNlY3Rpb25UaXRsZT5QdWJsaWNhdGlvbnM8L1NlY3Rpb25UaXRsZT5cclxuPEdyaWRDb250YWluZXI+XHJcbiAgIDxMaXN0PlxyXG4gICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICA8SW1nICBzdHlsZT17e1xyXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogMTAwLFxyXG4gICAgd2lkdGg6IDEwMCxcclxuICAgIGJvcmRlcldpZHRoOiA1LFxyXG4gICAgYm9yZGVyUmFkaXVzOiA3NSxcclxuICAgIG1hcmdpblRvcDotMzcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH19IHNyYz1cIi9pbWFnZXMvMTQuanBnXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XHJcbiAgPGJyLz5cclxuICA8SXQ+TWFjaGluZSBMZWFybmluZyBCYXNlZCBEZXRlY3Rpb24gb2YgRGVjZXB0aXZlIFR3ZWV0cyBvbiBDb3ZpZC0xOTwvSXQ+XHJcbiAgPGJyLz5cclxuICA8SXk+UHVibGljYXRpb24gRGF0ZTogMzAgSnVuZSAyMDIxPC9JeT5cclxuICA8aHIgY29sb3I9XCIjQUREOEU2XCIvPlxyXG4gIDxici8+XHJcbiAgPElhPldlIGFuYWx5emVkIGFuZCBhc3Nlc3NlZCBtYWNoaW5lIGxlYXJuaW5nLWJhc2VkIGRlY2VwdGl2ZSBpbmZvcm1hdGlvbiBkZXRlY3Rpb24gY29uY2VybmluZyBDb3ZpZC0xOSBpbiB0aGlzIGFydGljbGUuIFdpdGggdGhlIHNwcmVhZCBvZiBDb3ZpZC0xOSwgd2UndmUgc2VlbiBhIGxvdCBvZiBmYWxzaWZpZWQgYXJ0aWNsZXMgYW5kIHR3ZWV0cyByZWdhcmRpbmcgdHJlYXRtZW50cywgbWVkaWNpbmUsIGFuZCBnZW5lcmFsIHBhbmRlbWljIGluZm9ybWF0aW9uLiBUaGUgcHJvamVjdCdzIGdvYWwgaXMgdG8gYXNzaXN0IGluIGRhdGEgYW5hbHlzaXMgYW5kIHRvIHByZXZlbnQgdGhlIHNwcmVhZCBvZiBtaXNsZWFkaW5nIGluZm9ybWF0aW9uLiBUaGUgZGV2ZWxvcGVkIG1vZGVsIGNhbiBhbHNvIGJlIHV0aWxpc2VkIGluIHJlYWwtdGltZSB0byB0cmFjayBkb3duIHRoZSBzb3VyY2Ugb2YgbWlzbGVhZGluZyBpbmZvcm1hdGlvbi4gV2UgY29uZHVjdGVkIGEgdGhvcm91Z2ggaW52ZXN0aWdhdGlvbiBvZiBuYXR1cmFsIGxhbmd1YWdlIHByb2Nlc3NpbmcgbWV0aG9kcyBmb3IgZGF0YSBhbmFseXNpcyBhbmQgbWFjaGluZSBsZWFybmluZyBhbGdvcml0aG1zIGluIHRoaXMgd29yay48L0lhPlxyXG4gPGJyLz5cclxuICA8QnV0dG9uIGFzPVwiYVwiIGhyZWY9XCJodHRwczovL3d3dy5pamVhdC5vcmcvd3AtY29udGVudC91cGxvYWRzL3BhcGVycy92MTBpNS9FMjgzMTA2MTA1MjEucGRmXCI+TGluayB0byBQYXBlcjwvQnV0dG9uPlxyXG4gIDxici8+XHJcbiAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgICBcclxuICAgPC9MaXN0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICBcclxuICA8L0dyaWRDb250YWluZXI+XHJcblxyXG5cclxuPC9TZWN0aW9uPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuXHJcbiIsIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5wbGFjZS1pdGVtczogY2VudGVyO1xyXG5jb2x1bW4tZ2FwOiAycmVtO1xyXG5yb3ctZ2FwOiAzcmVtO1xyXG5iYWNrZ3JvdW5kOiAjRkNDRDA0O1xyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcclxuICAgIG1hcmdpbjogNjRweCAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIGdhcDogNHB4XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIHdpZHRoOjM4MHB4O1xyXG5cclxuICBcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6ICNGQ0NEMDQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbmZsZXg6IDEsXHJcbndpZHRoOiAnMTAwJScsXHJcbmhlaWdodDogJzEwMCUnLFxyXG5yZXNpemVNb2RlOiAnY29udGFpbicsXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgXHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICBtYXgtd2lkdGg6IDIwM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG5cclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZDogZ3JleTtcclxuZGlzcGxheTpmbGV4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENvbCA9IHN0eWxlZC5kaXZgXHJcbmZsZXg6ICR7KHByb3BzKT0+IHByb3BzLnNpemV9O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSXQgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDE0cHg7XHJcbm1hcmdpbi1sZWZ0OiAzcHg7XHJcbm1hcmdpbi10b3A6MnB4O1xyXG5mb250LWZhbWlseTpjdXJzaXZlO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgY29sb3JlZExpbmUgPSBzdHlsZWQuZGl2YFxyXG5jb2xvcjogeWVsbG93O1xyXG5iYWNrZ3JvdW5kOiAjRkNDRDA0O1xyXG5oZWlnaHQ6IDU7XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgSXkgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDEycHg7XHJcbmNvbG9yOiNGQ0NEMDQ7XHJcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbm1hcmdpbi1yaWdodDogM3B4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSWEgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDExcHg7XHJcbmNvbG9yOndoaXRlO1xyXG50ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5mb250LWZhbWlseTpjdXJzaXZlO1xyXG5tYXJnaW4tbGVmdDozcHg7XHJcbm1hcmdpbi1yaWdodDozcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTAwcHgnIDogJzEwMHB4J307XHJcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNDBweCcgOiAnNDBweCd9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTJweCcgOiAnMTJweCd9O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHllbGxvdyAwJSwgb3JhbmdlIDEwMCUpJ307XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcclxuICB9XHJcblxyXG5cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC51bGBcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xyXG4gIHBhZGRpbmc6IDByZW07XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICY6Zmlyc3Qtb2YtdHlwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAvL3JlbW92ZSBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICBcclxuICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcclxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSA9IHN0eWxlZC5kaXZgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6ICR7KHsgZmluYWwgfSkgPT4gZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1heC13aWR0aDogMTk2cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDEyNHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBFMTMxRjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgXHJcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBvcGFjaXR5OiAxYCA6IGBvcGFjaXR5OiAwLjVgfTsgXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBUaGlzIGdyYWRpZW50IGlzIGRpZmZlcmVudCBkdWUgdG8gdGhlIHNpemUgb2YgdGhlIFRpdGxlIGNvbnRhaW5lciwgaXQgbXVzdCB0cmFuc2l0aW9uIHNvb25lciB0byBiZSB2aXNpYmxlIG9uIHRoZSB0ZXh0ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgMzAuMTUlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXHJcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICB9XHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI4OHB4O1xyXG5cclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYDFgIDogYC4zM2B9O1xyXG4gIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgc2NhbGUoMS42KWAgOiBgc2NhbGUoMSlgfTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uRG90ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaUZpcmViYXNlLCBEaVJlYWN0LCBEaVplbmQsIERpV2luZG93cywgRGlNb25nb2RiLCBEaVB5dGhvbiwgRGlKaXJhLCBEaUdvb2dsZUNsb3VkUGxhdGZvcm0sIERpSmF2YX0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xuaW1wb3J0IHsgU2lXZWJmbG93IH0gZnJvbSAncmVhY3QtaWNvbnMvc2knO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUsIFByb2dyZXNzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgR3JpZENvbnRhaW5lciB9IGZyb20gJy4uL1RpbWVMaW5lL1RpbWVMaW5lU3R5bGVzJztcbmltcG9ydCB7IExpc3QsIExpc3RDb250YWluZXIsIExpc3RJdGVtLCBMaXN0UGFyYWdyYXBoLCBMaXN0VGl0bGUsIFByb2dyZXNzQmFyfSBmcm9tICcuL1RlY2hub2xvZ2llc1N0eWxlcyc7XG5cbmNvbnN0IFRlY2hub2xvZ2llcyA9ICgpID0+ICAoXG4gIDxTZWN0aW9uIGlkPSBcInRlY2hcIj5cbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8U2VjdGlvblRpdGxlPk15IFNraWxsczwvU2VjdGlvblRpdGxlPlxuICAgIFxuICAgPExpc3Q+XG4gICAgIDxMaXN0SXRlbT5cbiAgICAgICA8RGlSZWFjdCBzaXplPSBcIjJyZW1cIiAvPlxuICAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICAgPExpc3RUaXRsZT5XRUI8L0xpc3RUaXRsZT5cbiAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxuICAgICAgICAgICBSRUFDVEpTIDxwcm9ncmVzcyB2YWx1ZT1cIjgwXCIgbWF4PVwiMTAwXCIgLz44MCUgPGJyLz5cbiAgICAgICAgICAgSFRNTC9DU1MgPHByb2dyZXNzIHZhbHVlPVwiOTBcIiBtYXg9XCIxMDBcIiAvPjkwJSA8YnIvPlxuICAgICAgICAgICBQSFAgPHByb2dyZXNzIHZhbHVlPVwiNTBcIiBtYXg9XCIxMDBcIiAvPjUwJSA8YnIvPlxuICAgICAgICAgICBKQVZBU0NSSVBUIDxwcm9ncmVzcyB2YWx1ZT1cIjgwXCIgbWF4PVwiMTAwXCIgLz4gODAlPGJyLz5cbiAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cbiAgICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgIDwvTGlzdEl0ZW0+XG4gICAgIDxMaXN0SXRlbT5cbiAgICAgPERpTW9uZ29kYiBzaXplPSBcIjJyZW1cIiAvPlxuIFxuICAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICAgPExpc3RUaXRsZT5EQVRBQkFTRTwvTGlzdFRpdGxlPlxuICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XG4gICAgICAgICAgIE1ZU1FMIDxwcm9ncmVzcyB2YWx1ZT1cIjkwXCIgbWF4PVwiMTAwXCIgLz45MCUgIDxici8+XG4gICAgICAgICAgTU9OR08gREIgPHByb2dyZXNzIHZhbHVlPVwiNDBcIiBtYXg9XCIxMDBcIiAvPiA0MCVcbiAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cbiAgICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgIDwvTGlzdEl0ZW0+XG4gICAgIDxMaXN0SXRlbT5cbiAgICAgICA8RGlQeXRob24gc2l6ZT0gXCIycmVtXCIgLz5cbiAgICAgICA8TGlzdENvbnRhaW5lcj5cbiAgICAgICAgIDxMaXN0VGl0bGU+RlJBTUVXT1JLPC9MaXN0VGl0bGU+XG4gICAgICAgICA8TGlzdFBhcmFncmFwaD5cbiAgICAgICAgICAgTU9DS0lUTyA8cHJvZ3Jlc3MgdmFsdWU9XCI1MFwiIG1heD1cIjEwMFwiIC8+IDUwJSA8YnIvPlxuICAgICAgICAgICBOVU1QWSA8cHJvZ3Jlc3MgdmFsdWU9XCI3MFwiIG1heD1cIjEwMFwiIC8+IDcwJTxici8+XG4gICAgICAgICAgIFNQUklORyA8cHJvZ3Jlc3MgdmFsdWU9XCI1MFwiIG1heD1cIjEwMFwiIC8+IDUwJTxici8+XG4gICAgICAgICAgIFNXSU5HIDxwcm9ncmVzcyB2YWx1ZT1cIjUwXCIgbWF4PVwiMTAwXCIgLz4gNTAlXG4gICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICA8L0xpc3RJdGVtPlxuICAgICA8TGlzdEl0ZW0+XG4gICAgICAgPERpSmlyYSBzaXplPSBcIjJyZW1cIiAvPlxuICAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICAgPExpc3RUaXRsZT5UT09MUzwvTGlzdFRpdGxlPlxuICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XG4gICAgICAgICAgIEdJVCA8cHJvZ3Jlc3MgdmFsdWU9XCI4MFwiIG1heD1cIjEwMFwiIC8+ODAlIDxici8+XG4gICAgICAgICAgIEpJUkEgPHByb2dyZXNzIHZhbHVlPVwiODVcIiBtYXg9XCIxMDBcIiAvPiA4NSVcbiAgICAgICAgXG4gICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICA8L0xpc3RJdGVtPlxuICAgICA8TGlzdEl0ZW0+XG4gICAgICAgPERpSmF2YSBzaXplPSBcIjJyZW1cIiAvPlxuICAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICAgPExpc3RUaXRsZT5QTEFURk9STVM8L0xpc3RUaXRsZT5cbiAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxuICAgICAgICAgICBKQVZBIDxwcm9ncmVzcyB2YWx1ZT1cIjkwXCIgbWF4PVwiMTAwXCIgLz4gOTAlIDxici8+XG4gICAgICAgICAgIFBZVEhPTiA8cHJvZ3Jlc3MgdmFsdWU9XCI4MFwiIG1heD1cIjEwMFwiIC8+ODAlIDxici8+XG4gICAgICAgICAgIEMvQysrIDxwcm9ncmVzcyB2YWx1ZT1cIjkwXCIgbWF4PVwiMTAwXCIgLz45MCUgPGJyLz5cbiAgICAgICAgICAgUiA8cHJvZ3Jlc3MgdmFsdWU9XCI0MFwiIG1heD1cIjEwMFwiIC8+NDAlPGJyLz5cbiAgICAgICAgICAgVUJVTlRVIDxwcm9ncmVzcyB2YWx1ZT1cIjcwXCIgbWF4PVwiMTAwXCIgLz43MCUgPGJyLz5cbiAgICAgICAgICAgV0lORE9XUyA8cHJvZ3Jlc3MgdmFsdWU9XCI5MFwiIG1heD1cIjEwMFwiIC8+OTAlXG4gICAgICBcbiAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cbiAgICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgIDwvTGlzdEl0ZW0+XG4gICAgIDxMaXN0SXRlbT5cbiAgICAgICA8RGlHb29nbGVDbG91ZFBsYXRmb3JtIHNpemU9IFwiMnJlbVwiIC8+XG4gICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICA8TGlzdFRpdGxlPkRPTUFJTlM8L0xpc3RUaXRsZT5cbiAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxuICAgICAgICAgICA8cm93PlxuICAgICAgICAgICBDbG91ZDxwcm9ncmVzcyB2YWx1ZT1cIjgwXCIgbWF4PVwiMTAwXCIvPjgwJSA8YnIvPlxuICAgICAgICAgICBOTFAgPHByb2dyZXNzIHZhbHVlPVwiODBcIiBtYXg9XCIxMDBcIiAvPiA4MCVcbiAgICAgICAgICAgPC9yb3c+XG4gICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICA8L0xpc3RJdGVtPlxuICAgPC9MaXN0PlxuICAgXG5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoNTAlIDUwJSBhdCA1MCUgNTAlLCByZ2JhKDc5LCAxMDgsIDE3NiwgMC4yNSkgNTMuOCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwKSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW46IDJyZW0gMDtcbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcbiAgICBtYXJnaW46IDY0cHggMDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGdhcDogNHB4XG4gIH1cbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAzMnB4IDA7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggI0ZDQ0QwNDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgd2lkdGg6IDMyMHB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiAjRkNDRDA0O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NCYXIgPSBzdHlsZWQucGBcbiAgY29sb3I6IHllbGxvdztcbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIG1heC13aWR0aDogMjAzcHg7XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJY29uID0gc3R5bGVkLmltZ2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5gXG4iLCJpbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSwgUHJvZ3Jlc3MgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBMaXN0LCBMaXN0Q29udGFpbmVyLCBJYSxJbWcsIExpc3RJdGVtLEdyaWRDb250YWluZXIsIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZSwgUHJvZ3Jlc3NCYXIsIEdyaWQsIEl0LCBSb3csIENvbCwgY29sb3JlZExpbmUsIEl5fSBmcm9tICcuL1RpbWVMaW5lU3R5bGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRpbWVsaW5lPSgpPT4gKFxuPFNlY3Rpb24gaWQ9XCJ0ZWNoXCI+XG48U2VjdGlvbkRpdmlkZXIvPlxuPFNlY3Rpb25UaXRsZT5FeHBlcmllbmNlPC9TZWN0aW9uVGl0bGU+XG48R3JpZENvbnRhaW5lcj5cbiAgIFxuICAgICAgPExpc3Q+XG4gICAgICBcbiAgPExpc3RDb250YWluZXI+XG4gIDxJbWcgIHN0eWxlPXt7XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICB3aWR0aDogMTAwLFxuICAgIGJvcmRlcldpZHRoOiA1LFxuICAgIGJvcmRlclJhZGl1czogNzUsXG4gICAgbWFyZ2luVG9wOi01MCxcbiAgICBjb2xvcjogJ2JsYWNrJ1xuICB9fSBzcmM9XCIvaW1hZ2VzLzguanBnXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XG4gICAgPEl0PkJhbmdhbHVydSwgSW5kaWE8SXk+SnVseSAyMDIwLSBQcmVzZW50PC9JeT48L0l0PiBcbiAgPExpc3RUaXRsZT5Tb2Z0d2FyZSBFbmdpbmVlcjwvTGlzdFRpdGxlPlxuICA8SXQ+QlJJREdFIFNPTFVUSU9OUyBHUk9VUCA8L0l0PiBcbiAgPGhyIGNvbG9yPVwiI0ZDQ0QwNFwiLz5cbiAgPExpc3RQYXJhZ3JhcGg+XG4gIOKAoiBEZXZlbG9wZWQgYW5kIHBlcmZvcm1lZCBzZXZlcmFsIG9wdGltaXphdGlvbnMgb2YgdGhlIGNvZGViYXNlIGZvciBmbGF3bGVzcyBPTVMgaW1wbGVtZW50YXRpb24gYXMgYSBcblNvZnR3YXJlIEVuZ2luZWVyIGZvciBhIG1ham9yIHVwc2NhbGUgY2hhaW4gb2YgZGVwYXJ0bWVudCBzdG9yZXMgYmFzZWQgaW4gTWV4aWNvIChpbiBwYXJ0bmVyc2hpcCB3aXRoIEZsdWVudCBcbmNvbW1lcmNlKSA8YnIvPlxu4oCiIEJ1aWx0IHNpZ25pZmljYW50IGNsaWVudCByZWxhdGlvbnNoaXBzIHJlc3VsdGluZyBpbiBjb250cmFjdCBleHRlbnNpb24gYW5kIGFkZGluZyBhIHZhbHVhYmxlIGFzc2V0IHRvIHRoZSBmaXJtLjxici8+XG7igKIgU29sdmVkIGNyaXRpY2FsIGlzc3VlcyByYWlzZWQgYnkgY2xpZW50cyBieSBzZWFtbGVzc2x5IGNvb3JkaW5hdGluZyB3aXRoIHRoZSB0ZWFtIGFuZCB0aGUgY2xpZW50LlxuPElhPlRFQ0gvRE9NQUlOPC9JYT5cbuKAokpBVkEgOCDigKIgTWF2ZW4g4oCiIEdyYXBoUUwg4oCiIEpTT04g4oCiUG9zdG1hbiDigKJJbnNvbW5pYVxuXG4gIDwvTGlzdFBhcmFncmFwaD5cblxuICA8L0xpc3RDb250YWluZXI+IFxuPC9MaXN0PlxuXG4gICAgICA8TGlzdD5cbiAgPExpc3RDb250YWluZXI+XG4gIDxJbWcgIHN0eWxlPXt7XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICB3aWR0aDogMTAwLFxuICAgIGJvcmRlcldpZHRoOiA1LFxuICAgIGJvcmRlclJhZGl1czogNTAsXG4gICAgbWFyZ2luVG9wOi00MCxcbiAgICBib3hTaGFkb3c6ICcjRkNDRDA0JyxcbiAgICBjb2xvcjogJ2JsYWNrJ1xuICB9fSBzcmM9XCIvaW1hZ2VzLzguanBnXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XG4gICAgPEl0PkJhbmdhbHVydSwgSW5kaWE8SXk+SmFuIDIwMjAtSnVuZSAyMDIwPC9JeT48L0l0PiBcbiAgPExpc3RUaXRsZT5Tb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm48L0xpc3RUaXRsZT5cbiAgPEl0PkJSSURHRSBTT0xVVElPTlMgR1JPVVAgPC9JdD4gXG4gIDxociBjb2xvcj1cIiNGQ0NEMDRcIi8+XG4gIDxMaXN0UGFyYWdyYXBoPlxuICDigKIgV29ya2VkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBmb3IgYW4gaW4taG91c2UgcHJvamVjdCDigJhNYWdudW3igJkgYW4gb25saW5lIGFzc2Vzc21lbnQsIGNvdXJzZXMsIGFuZCBcbmNlcnRpZmljYXRpb24gcGxhdGZvcm0gZm9yIHRoZSBlbXBsb3llZXMuIDxici8+XG7igKIgV29ya2VkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBmb3IgdGhlIHByb2plY3QtIOKAmFRoZSBQZXJzb25hbCBTaG9wcGVy4oCZIGEgcGVyc29uYWwgc3R5bGUgcmVjb21tZW5kYXRpb24gXG5wbGF0Zm9ybSBmb3IgY3VzdG9tZXJzLiA8YnIvPlxu4oCiIFVzZWQgUmVhY3RKUyBmb3IgdGhlIGZyb250LWVuZCBkZXZlbG9wbWVudCBpbnRlZ3JhdGVkIHdpdGggdGhlIFJhYmJpdCBmcmFtZXdvcmsgYW5kIGRvY2tlcml6ZWQgdGhlIFxuYXBwbGljYXRpb24gdG8gYWxsb3cgdGhlIGFwcGxpY2F0aW9uIHRvIGJlIGNvbW11dGVkIGVhc2lseSBiZXR3ZWVuIGVudmlyb25tZW50cy48YnIvPlxuPElhPlRFQ0gvRE9NQUlOPC9JYT5cbuKAolJlYWN0SlMg4oCiRGphbmdvIOKAolJhYmJpdE1RIEZyYW1ld29ya1xuXG4gIDwvTGlzdFBhcmFncmFwaD5cblxuICA8L0xpc3RDb250YWluZXI+IFxuPC9MaXN0PlxuXG48TGlzdD5cbiAgPExpc3RDb250YWluZXI+XG4gIDxJbWcgIHN0eWxlPXt7XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICB3aWR0aDogMTAwLFxuICAgIGJvcmRlcldpZHRoOiA1LFxuICAgIGJvcmRlclJhZGl1czogNTAsXG4gICAgbWFyZ2luVG9wOi00MCxcbiAgICBib3hTaGFkb3c6ICcjRkNDRDA0JyxcbiAgICBjb2xvcjogJ2JsYWNrJ1xuICB9fSBzcmM9XCIvaW1hZ2VzLzEwLnBuZ1wiIHJvdW5kZWRDaXJjbGUgcmVzaXplTW9kZT1cInN0cmV0Y2hcIiAvPlxuICAgIDxJdD5SYW5jaGksIEluZGlhPEl5PkRlYyAyMDE4LUphbiAyMDE5PC9JeT48L0l0PiBcbiAgPExpc3RUaXRsZT5JbnRlcm48L0xpc3RUaXRsZT5cbiAgPEl0PiBSZXNlYXJjaCAmIERldmVsb3BtZW50IGNlbnRyZSBmb3IgSXJvbiBhbmQgU3RlZWwgPC9JdD4gXG4gIDxociBjb2xvcj1cIiNGQ0NEMDRcIi8+XG4gIDxMaXN0UGFyYWdyYXBoPlxuICDigKIgRGV2ZWxvcGVkIGFuIEVtcGxveWVlIE1hbmFnZW1lbnQgU3lzdGVtIGZvciB0aGUgSHVtYW4gcmVzb3VyY2UgZGVwYXJ0bWVudCBvZiB0aGUgb3JnYW5pemF0aW9uLjxici8+XG7igKIgV29ya2VkIGluZGVwZW5kZW50bHkgYW5kIHVzZWQgSFRNTC9DU1MgZm9yIGZyb250LWVuZCBkZXNpZ25pbmcgd2hpY2ggaW5jbHVkZWQgbW9kdWxlcyBmb3IgYm90aCBcbmVtcGxveWVlIGFuZCBhZG1pbiBkYXNoYm9hcmQgdGhhdCBpbmNsdWRlZCBtYW55IHdlYnBhZ2VzIGZvciBhZG1pbiBhbmQgZW1wbG95ZWVzIHRvIHZpZXcgYW5kIHVwZGF0ZSBcbmluZm9ybWF0aW9uIHJlZ2FyZGluZyBwcm9maWxlLCBsZWF2ZXMsIGFuZCBzYWxhcnkgcmV2aXNpb24uXG48SWE+VEVDSC9ET01BSU48L0lhPlxu4oCiSFRNTC9DU1Mg4oCiTXlTUUwg4oCiQm9vdFN0cmFwXG5cbiAgPC9MaXN0UGFyYWdyYXBoPlxuXG4gIDwvTGlzdENvbnRhaW5lcj4gXG48L0xpc3Q+XG48TGlzdD5cbiAgPExpc3RDb250YWluZXI+XG4gIDxJbWcgIHN0eWxlPXt7XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICB3aWR0aDogMTAwLFxuICAgIGJvcmRlcldpZHRoOiA1LFxuICAgIGJvcmRlclJhZGl1czogNTAsXG4gICAgbWFyZ2luVG9wOi00MCxcbiAgICBib3hTaGFkb3c6ICcjRkNDRDA0JyxcbiAgICBjb2xvcjogJ2JsYWNrJ1xuICB9fSBzcmM9XCIvaW1hZ2VzLzEwLnBuZ1wiIHJvdW5kZWRDaXJjbGUgcmVzaXplTW9kZT1cInN0cmV0Y2hcIiAvPlxuICAgIDxJdD5SYW5jaGksIEluZGlhPEl5Pk1heSAyMDE4LUp1biAyMDE5PC9JeT48L0l0PiBcbiAgPExpc3RUaXRsZT5JbnRlcm48L0xpc3RUaXRsZT5cbiAgPEl0PiBSZXNlYXJjaCAmIERldmVsb3BtZW50IGNlbnRyZSBmb3IgSXJvbiBhbmQgU3RlZWwgPC9JdD4gXG4gIDxociBjb2xvcj1cIiNGQ0NEMDRcIi8+XG4gIDxMaXN0UGFyYWdyYXBoPlxuICDigKIgRGV2ZWxvcGVkIGEgTGlicmFyeSBtYW5hZ2VtZW50IHN5c3RlbSBmb3IgdGhlIElyb24gYW5kIFN0ZWVsIHJlc2VhcmNoIGNlbnRyZSBvZiBTdGVlbCBBdXRob3JpdHkgb2YgSW5kaWEgXG4oU0FJTCkuPGJyLz5cbuKAoiBXb3JrZWQgaW5kZXBlbmRlbnRseSBhbmQgdXNlZCBKQVZBIHN3aW5ncyB0b29sa2l0IGZvciBHVUkgYW5kIEpEQkMgZm9yIGFwcGxpY2F0aW9uIHByb2dyYW1taW5nIFxuaW50ZXJmYWNlLlxuPElhPlRFQ0gvRE9NQUlOPC9JYT5cbuKAokphdmEg4oCiU3dpbmdMIOKAokpEQkNcblxuICA8L0xpc3RQYXJhZ3JhcGg+XG5cbiAgPC9MaXN0Q29udGFpbmVyPiBcbjwvTGlzdD5cbjxMaXN0PlxuICA8TGlzdENvbnRhaW5lcj5cbiAgPEltZyAgc3R5bGU9e3tcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGhlaWdodDogMTAwLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgYm9yZGVyV2lkdGg6IDUsXG4gICAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgICBtYXJnaW5Ub3A6LTQwLFxuICAgIGJveFNoYWRvdzogJyNGQ0NEMDQnLFxuICAgIGNvbG9yOiAnYmxhY2snXG4gIH19IHNyYz1cIi9pbWFnZXMvMTEucG5nXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XG4gICAgPEl0PlJhbmNoaSwgSW5kaWE8SXk+RGVjIDIwMTctSmFuIDIwMTg8L0l5PjwvSXQ+IFxuICA8TGlzdFRpdGxlPlRyYWluZWU8L0xpc3RUaXRsZT5cbiAgPEl0PiBCaGFyYXQgU2FuY2hhciBOaWdhbSBMaW1pdGVkIDwvSXQ+IFxuICA8aHIgY29sb3I9XCIjRkNDRDA0XCIvPlxuICA8TGlzdFBhcmFncmFwaD5cbiAg4oCiQVNQLk5FVCB0cmFpbmluZyBvbiBJbnRyb2R1Y3Rpb24gJiBDb250cm9sLCBBcmNoaXRlY3R1cmUsIHdvcmtpbmcgd2l0aCBVc2VyIGNvbnRyb2wsIFZhbGlkYXRpb24gY29udHJvbHMgJiBcbndlYiBjYWNoaW5nXG48SWE+VEVDSC9ET01BSU48L0lhPlxu4oCiQVNQLk5FVFxuXG4gIDwvTGlzdFBhcmFncmFwaD5cblxuICA8L0xpc3RDb250YWluZXI+IFxuPC9MaXN0PlxuICAgICAgICBcbiAgICAgICAgXG4gICBcbiAgPC9HcmlkQ29udGFpbmVyPlxuXG5cbjwvU2VjdGlvbj5cbik7XG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcblxuIiwiXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbnBhZGRpbmc6IDJyZW07XG5wbGFjZS1pdGVtczogY2VudGVyO1xuY29sdW1uLWdhcDogMnJlbTtcbnJvdy1nYXA6IDNyZW07XG5iYWNrZ3JvdW5kOiAjNjE2MTYxO1xuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuYFxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW46IDJyZW0gMDtcbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcbiAgICBtYXJnaW46IDY0cHggMDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGdhcDogNHB4XG4gIH1cbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAzMnB4IDA7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggI0ZDQ0QwNDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgd2lkdGg6MzgwcHg7XG5cbiAgXG4gIGJhY2tncm91bmQ6YmxhY2s7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6ICNGQ0NEMDQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbmBcbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuZmxleDogMSxcbndpZHRoOiAnMTAwJScsXG5oZWlnaHQ6ICcxMDAlJyxcbnJlc2l6ZU1vZGU6ICdjb250YWluJyxcbmBcblxuZXhwb3J0IGNvbnN0IExpc3RQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIFxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NCYXIgPSBzdHlsZWQucGBcbiAgY29sb3I6IHllbGxvdztcbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIG1heC13aWR0aDogMjAzcHg7XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTpmbGV4O1xuXG59XG5gXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kOiBncmV5O1xuZGlzcGxheTpmbGV4O1xuYDtcbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbmA7XG5leHBvcnQgY29uc3QgQ29sID0gc3R5bGVkLmRpdmBcbmZsZXg6ICR7KHByb3BzKT0+IHByb3BzLnNpemV9O1xuYDtcbmV4cG9ydCBjb25zdCBJdCA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDEzcHg7XG5tYXJnaW4tbGVmdDogM3B4O1xubWFyZ2luLXRvcDoycHg7XG5mb250LWZhbWlseTpjdXJzaXZlO1xuZm9udC1zdHlsZTogaXRhbGljO1xuYDtcbmV4cG9ydCBjb25zdCBjb2xvcmVkTGluZSA9IHN0eWxlZC5kaXZgXG5jb2xvcjogeWVsbG93O1xuYmFja2dyb3VuZDogI0ZDQ0QwNDtcbmhlaWdodDogNTtcblxuYDtcbmV4cG9ydCBjb25zdCBJeSA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDEwcHg7XG5jb2xvcjojRkNDRDA0O1xudGV4dC1hbGlnbjogcmlnaHQ7XG5mb250LWZhbWlseTpjdXJzaXZlO1xubWFyZ2luLXJpZ2h0OiAzcHg7XG5gO1xuZXhwb3J0IGNvbnN0IElhID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTBweDtcbmNvbG9yOiNGQ0NEMDQ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LWZhbWlseTpjdXJzaXZlO1xuYDtcblxuXG5leHBvcnQgY29uc3QgTGlzdEljb24gPSBzdHlsZWQuaW1nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLnVsYFxuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcbiAgcGFkZGluZzogMHJlbTtcbiAgbGlzdC1zdHlsZTpub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXG5cbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgbWFyZ2luLWJvdHRvbTogODBweDtcblxuICAvL3JlbW92ZSBzY3JvbGxiYXJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgXG4gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgIGRpc3BsYXk6IG5vbmU7XG4gICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6ICR7KHsgZmluYWwgfSkgPT4gZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXgtd2lkdGg6IDE5NnB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiAxMjRweDtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwRTEzMUY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgb3BhY2l0eTogMWAgOiBgb3BhY2l0eTogMC41YH07IFxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIFRoaXMgZ3JhZGllbnQgaXMgZGlmZmVyZW50IGR1ZSB0byB0aGUgc2l6ZSBvZiB0aGUgVGl0bGUgY29udGFpbmVyLCBpdCBtdXN0IHRyYW5zaXRpb24gc29vbmVyIHRvIGJlIHZpc2libGUgb24gdGhlIHRleHQgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgMzAuMTUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1JbWcgPSBzdHlsZWQuc3ZnYFxuICBtYXJnaW4tbGVmdDogMjFweDtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xuICB3aWR0aDogMTAwJTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICB9XG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjg4cHg7XG5cbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYDFgIDogYC4zM2B9O1xuICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYHNjYWxlKDEuNilgIDogYHNjYWxlKDEpYH07XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25Eb3QgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDNweDtcbmBcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnTUFDSElORSBMRUFSTklORyBCQVNFRCBFQVJMWSBERVBSRVNTSU9OIERFVEVDVElPTiBVU0lORyBTT0NJQUwgTUVESUEgREFUQScsXG4gICAgZGVzY3JpcHRpb246IFwiRWFybHkgZGV0ZWN0aW9uIG9mIGRlcHJlc3Npb24gaW4gcGVvcGxlIGFuZCBjdXJiaW5nIHRoZSByZWxhdGVkIHByb2JsZW1zIHVzaW5nIHNvY2lhbCBtZWRpYSBkYXRhLCB3b3JrZWQgaW4gYSB0ZWFtIG9mIDMgdXNpbmcgdG9vbHMgbGlrZSBTY3JhcGUgc3Rvcm0gYW5kIE5MVEtcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvNS5qcGcnLFxuICAgIHRhZ3M6IFsnIEJheWVzIHRoZW9yZW0nLCAnU1ZNJywgJ1JhbmRvbSBGb3Jlc3QnLCAnTG9naXN0aWMgUmVncmVzc2lvbiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIQU5EIEdFU1RVUkUgUkVDT0dOSVRJT04gVVNJTkcgT1BFTkNWJyxcbiAgICBkZXNjcmlwdGlvbjpcIldvcmtlZCBpbiBhIGdyb3VwIG9mIDUgdG8gaW1wbGVtZW50IGh1bWFuLWNvbXB1dGVyIGludGVyYWN0aW9uIHVzaW5nIGFuIGlubm92YXRpdmUgcmVhbC10aW1lIG1ldGhvZCBmb3IgaGFuZCBnZXN0dXJlIGRldGVjdGlvbiBhbmQgZmVhdHVyZSBleHRyYWN0aW9uIHVzaW5nIGEgd2ViY2FtLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy83LmpwZycsXG4gICAgdGFnczogWydQeXRob24nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnV2ViUlRDIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzMuanBnJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnV2ViUlRDJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1VuaWNoYXQnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHZpZGVvIHR1dG9yaWFsLiBJbiB0aGlzIHZpZGVvLCB3ZSB3aWxsIGNyZWF0ZSBhIGZ1bGwgUmVhbHRpbWUgQ2hhdCBBcHBsaWNhdGlvblwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy80LmpwZycsXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIFxuICBpbWFnZTogJy9pbWFnZXMvY291cnNlMS5qcGcnLCBcbiAgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAxOCwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtJywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLCB9LFxuICBcbl07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9MYXlvdXRTdHlsZXMnXG5cbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgIDxIZWFkZXIvPlxuICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPiBcbiAgICAgPEZvb3Rlci8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbm1heC13aWR0aDogMTI4MHB4O1xud2lkdGg6IDEwMCU7XG5tYXJnaW46IGF1dG87XG5gO1xuIiwiaW1wb3J0IEFjb21wbGlzaG1lbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvL0hlcm8nO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMnO1xuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tICcuLi9jb21wb25lbnRzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXMnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUnO1xuaW1wb3J0IFB1YmxpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHVibGljYXRpb25zL3B1YmxpY2F0aW9uJztcbmltcG9ydCBDZXJ0aSBmcm9tICcuLi9jb21wb25lbnRzL0NlcnRpZmljYXRlQWNoaWV2ZW1lbnQvQ2VydGlmaWNhdGVBY2hpZXZlbWVudCc7XG5pbXBvcnQgQWNoaWV2ZSBmcm9tICcuLi9jb21wb25lbnRzL0FjaGlldmVtZW50cy9BY2hpZXZlbWVudHMnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xhc3RGb290ZXIvTGFzdGZvb3RlcidcblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2VjdGlvbiBncmlkPiBcbiAgICAgIDxIZXJvIC8+IFxuICAgICAgIDwvU2VjdGlvbj4gICBcbiAgICAgICA8VGVjaG5vbG9naWVzIC8+IFxuICAgICAgIDxUaW1lbGluZSAvPlxuICAgICAgIDxBY29tcGxpc2htZW50cyAvPlxuICAgICAgPFByb2plY3RzIC8+XG4gICAgICA8UHVibGljYXRpb24gLz5cbiAgICAgIDxDZXJ0aS8+XG4gICAgICA8QWNoaWV2ZSAvPlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC9MYXlvdXQ+XG4gICAgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBCdXR0b25CYWNrLCBCdXR0b25Gcm9udCB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4gKFxuICA8QnV0dG9uQmFjayBhbHQ9e3Byb3BzLmFsdH0gZm9ybT17cHJvcHMuZm9ybX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59XG4gICAgPEJ1dHRvbkZyb250IGFsdD17cHJvcHMuYWx0fSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn08L0J1dHRvbkZyb250PlxuICA8L0J1dHRvbkJhY2s+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cblxuXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIiB9O1xuICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwiIH07XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMzJweCA0OHB4IDBcIiB9IDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIxNnB4IDE2cHggMFwiIH0gO1xuXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNDBweCcgOiAnNDNweCd9O1xuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTBweCcgOiAnNTRweCd9O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxOC43NyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgNjAuMTUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNXB4IDAgNnB4JyA6ICcwJ307XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc0MHB4IDAgMTJweCcgOiAnMCd9O1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzI4cHgnIDogJzMycHgnfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMzJweCcgOiAnNDBweCd9O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcxNnB4IDAgOHB4JyA6ICcwJ307XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA2NzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXG5cbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3JBbHQgPyBcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknIDpcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknfTtcblxuICAgIG1hcmdpbjogJHsocHJvcHMpID0+IHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIiB9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IFNlY3Rpb25TdWJUZXh0ID0gc3R5bGVkLnBgXG4gIG1heC13aWR0aDogODAwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA2NzJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMyk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogIzBmMTYyNDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2UwZTRlYjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA0MTY5O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbi10b3A6IDI0cHg7IFxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTUwcHgnIDogJzE1MHB4J307XG4gIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzUwcHgnIDogJzYwcHgnfTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTZweCcgOiAnMTZweCd9O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAkeyh7IGFsdCwgZm9ybSB9KSA9PiAoYWx0IHx8IGZvcm0pID8gJzAnIDogJzAgMCA4MHB4J307XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHllbGxvdyAwJSwgb3JhbmdlIDEwMCUpJ307XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMTg0cHgnfTtcbiAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc0OHB4J307XG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcwJyA6ICc2NHB4J307XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnMzJweCd9O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHllbGxvdyAwJSwgb3JhbmdlIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB5ZWxsb3cgMCUsIG9yYW5nZSAxMDAlKSd9O1xuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNXB4JyA6ICcxNXB4J307XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpJyA6ICdub25lJ307XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcyNHB4JyA6ICcxNnB4J307XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMTZweCcgOiAnOHB4J307XG5cbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMCcgOiAnOHB4J307XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtJY29uSW1nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDsgIFxuICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMzJweCcgOiAnMjRweCd9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBoZWlnaHQ6ICR7KHsgbmF2IH0pID0+IG5hdiA/ICcxNnB4JyA6ICcyNHB4J307XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzE2cHgnfTtcbiAgfVxuYFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlsZS1zYXZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWVhc3ktbWFycXVlZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Rqcy1wb3B1cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=