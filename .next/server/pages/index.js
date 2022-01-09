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
})(["font-size:12px;color:#FCCD04;font-family:Raleway;margin-right:3px;"]);
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
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Achievements\\Achievements.js";






const Achievement = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.Section, {
  id: "achieve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, {
    children: "Achievements"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_easy_marquee__WEBPACK_IMPORTED_MODULE_4___default()), {
    duration: 10000,
    background: "rgb(0,33,71)",
    height: "80px",
    axis: "X",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AchievementStyle__WEBPACK_IMPORTED_MODULE_2__.Iy, {
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiAward, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 14
      }, undefined), " \xA0\xA0Top Academic scorer in 8th Semester: 10/10 GPA"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AchievementStyle__WEBPACK_IMPORTED_MODULE_2__.Iy, {
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiAward, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 14
      }, undefined), "  \xA0\xA0 Among the top 2% scorers in 5th Semester: 9.85/10 GPA"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AchievementStyle__WEBPACK_IMPORTED_MODULE_2__.Iy, {
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiAward, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }, undefined), "  \xA0\xA0 Writer at Writerscafe.org"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 8,
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
})(["font-size:11px;margin-left:3px;margin-top:2px;color:#FCCD04;font-family:Raleway;"]);
const Io = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Io",
  componentId: "vuq5bz-3"
})(["font-size:11px;margin-left:3px;margin-top:2px;color:#FCCD04;font-family:Raleway;text-align:center;"]);
const Ig = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Ig",
  componentId: "vuq5bz-4"
})(["font-size:13px;margin-left:3px;margin-top:2px;color:powder-blue;font-family:Raleway;text-align:center;border-color:blue;box-shadow:3px 3px 20px blue;"]);
const Ic = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Ic",
  componentId: "vuq5bz-5"
})(["font-size:11px;margin-left:3px;margin-top:2px;color:#FCCD04;text-align:center;font-family:cursive;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Ia",
  componentId: "vuq5bz-6"
})(["font-size:18px;color:white;text-align:center;font-family:Raleway;"]);
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
            fontFamily: 'Raleway'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            size: "17px",
            children: "Copyright \xA92022"
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
            fontFamily: 'cursive',
            weight: "700"
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
})(["line-height:3;color:black;transition:0.4s ease;font-family:Raleway;&:hover{color:white;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.List, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.List, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastfooterStyle__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
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
    children: "Projects"
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
})(["font-size:15px;color:white;text-align:center;font-family:Raleway;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Ia",
  componentId: "l76idc-4"
})(["font-size:12px;color:white;text-align:center;font-family:Raleway;"]);
const Iu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Iu",
  componentId: "l76idc-5"
})(["font-size:12px;color:white;text-align:justify;font-family:Raleway;margin-left:3px;margin-right:3px;"]);
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
})(["font-size:13px;margin-left:3px;margin-top:2px;font-family:Raleway;"]);
const coloredLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__coloredLine",
  componentId: "sc-14hvubp-12"
})(["color:yellow;background:#FCCD04;height:5;"]);
const Iy = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Iy",
  componentId: "sc-14hvubp-13"
})(["font-size:12px;color:#FCCD04;font-family:Raleway;margin-right:3px;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Ia",
  componentId: "sc-14hvubp-14"
})(["font-size:11px;color:white;text-align:justify;font-family:Raleway;margin-left:3px;margin-right:3px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "publicationStyle__Button",
  componentId: "sc-14hvubp-15"
})(["width:", ";height:", ";border-radius:80px;font-family:Raleway;font-size:", ";font-weight:500;display:flex;align-items:center;justify-content:center;color:black;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;margin-left:10px;opacity:", ";&:hover{color:white;background:orange;}"], ({
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
})(["font-weight:500;font-size:15px;line-height:32px;letter-spacing:0.02em;color:#FCCD04;font-family:Raleway;margin-bottom:8px;margin-left:5px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
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
})(["font-size:13px;margin-left:3px;margin-top:2px;font-family:Raleway;font-style:italic;"]);
const coloredLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__coloredLine",
  componentId: "vs8qb6-12"
})(["color:yellow;background:#FCCD04;height:5;"]);
const Iy = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__Iy",
  componentId: "vs8qb6-13"
})(["font-size:10px;color:#FCCD04;text-align:right;font-family:Raleway;margin-right:3px;"]);
const Ia = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__Ia",
  componentId: "vs8qb6-14"
})(["font-size:10px;color:#FCCD04;text-align:center;font-family:Raleway;"]);
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
/* harmony import */ var react_awesome_spinners__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-awesome-spinners */ "react-awesome-spinners");
/* harmony import */ var react_awesome_spinners__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_awesome_spinners__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\pages\\index.js";













const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_9__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_10__.Section, {
      grid: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Publications_publication__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CertificateAchievement_CertificateAchievement__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Achievements_Achievements__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LastFooter_Lastfooter__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
})(["font-weight:700;font-size:", ";line-height:", ";width:max-content;font-family:Raleway;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '40px' : '43px', props => props.main ? '50px' : '54px', props => props.main ? '5px 0 6px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
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

/***/ "react-awesome-spinners":
/*!*****************************************!*\
  !*** external "react-awesome-spinners" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-awesome-spinners");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-1e841f"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNoaWV2ZW1lbnRzL0FjaGlldmVtZW50U3R5bGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0FjaGlldmVtZW50cy9BY2hpZXZlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50c1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVBY2hpZXZlbWVudC9DZXJ0aWZpY2F0ZUFjaGlldmVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvTGFzdEZvb3Rlci9MYXN0Zm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9MYXN0Rm9vdGVyL0xhc3Rmb290ZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9QdWJsaWNhdGlvbnMvcHVibGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvblN0eWxlLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJmaWxlLXNhdmVyXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1hd2Vzb21lLXNwaW5uZXJzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInJlYWN0LWVhc3ktbWFycXVlZVwiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3Rqcy1wb3B1cFwiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvaWdub3JlZHxDOlxcVXNlcnNcXEhQXFxEZXNrdG9wXFxwb3J0Zm9saW9fd2Vic2l0ZS1TVEFSVEVSXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiR3JpZENvbnRhaW5lciIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtIiwiTGlzdCIsImxnIiwibWQiLCJMaXN0Q29udGFpbmVyIiwiTGlzdFRpdGxlIiwiSW1hZ2UiLCJMaXN0UGFyYWdyYXBoIiwiUHJvZ3Jlc3NCYXIiLCJMaXN0SXRlbSIsIkdyaWQiLCJSb3ciLCJDb2wiLCJzaXplIiwiSXQiLCJDYXJvdXNlbENvbnRhaW5lIiwiY29sb3JlZExpbmUiLCJJeSIsIklhIiwiQnV0dG9uIiwiYWx0IiwiZGlzYWJsZWQiLCJMaXN0SWNvbiIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiZmluYWwiLCJDYXJvdXNlbEl0ZW0iLCJhY3RpdmUiLCJpbmRleCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJBY2hpZXZlbWVudCIsImRhdGEiLCJudW1iZXIiLCJ0ZXh0IiwiQWNvbXBsaXNobWVudHMiLCJhbGlnblNlbGYiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlcldpZHRoIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwiY29sb3IiLCJJeiIsIklvIiwiSWciLCJJYyIsIkltZyIsIkJveGVzIiwiQm94IiwiQm94TnVtIiwiQm94VGV4dCIsIkpvaW4iLCJKb2luVGV4dCIsIkljb25Db250YWluZXIiLCJDZXJ0aSIsIkhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luQm90dG9tIiwiZm9udEZhbWlseSIsIkNvbnRhaW5lciIsIkRpdjEiLCJEaXYyIiwiRGl2MyIsIk5hdkxpbmsiLCJDb250YWN0RHJvcERvd24iLCJOYXZQcm9kdWN0c0ljb24iLCJJb0lvc0Fycm93RHJvcGRvd24iLCJpc09wZW4iLCJTb2NpYWxJY29ucyIsIndlaWdodCIsInNhdmVGaWxlIiwiRmlsZVNhdmVyIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9DTElFTlRfVVJMIiwiSGVybyIsIkxlZnRTZWN0aW9uIiwiRm9vdGVyIiwiRm9vdGVyV3JhcHBlciIsIkl1IiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwib3BlblBvcyIsIkNNX0NFTlRFUl9DRU5URVIiLCJDTV9UT1BfTEVGVCIsIkNNX1RPUF9DRU5URVIiLCJDTV9UT1BfUklHSFQiLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJUYWdMaXN0IiwiVGFnIiwiTGlua0l0ZW0iLCJTb2NpYWxJY29uc0NvbnRhaW5lciIsIkNvbXBhbnlDb250YWluZXIiLCJTbG9nYW4iLCJTb2NpYWxDb250YWluZXIiLCJMaW5rTGlzdCIsIkxpbmtDb2x1bW4iLCJMaW5rVGl0bGUiLCJQcm9qZWN0cyIsIlRpbWVsaW5lIiwiVGVjaG5vbG9naWVzIiwiSW1hZ2VDb250YWluZXIiLCJNYWluSW1hZ2UiLCJib3hTaGFkb3ciLCJwcm9qZWN0cyIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkhvbWUiLCJmb3JtIiwib25DbGljayIsIlNlY3Rpb24iLCJncmlkIiwicm93Iiwibm9wYWRkaW5nIiwiU2VjdGlvblRpdGxlIiwibWFpbiIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvbkRpdmlkZXIiLCJjb2xvckFsdCIsImRpdmlkZXIiLCJTZWN0aW9uU3ViVGV4dCIsIlNlY29uZGFyeUJ0biIsIkJ1dHRvbkJhY2siLCJCdXR0b25Gcm9udCIsIkxpbmtDb250YWluZXIiLCJsYXJnZSIsIkxpbmtJY29uSW1nIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxucGFkZGluZzogMnJlbTtcclxucGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuY29sdW1uLWdhcDogMnJlbTtcclxucm93LWdhcDogM3JlbTtcclxuYmFja2dyb3VuZDogIzM2NDU0RjtcclxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdhcDogMjBweDtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ317XHJcbiAgICBtYXJnaW46IDY0cHggMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBnYXA6IDRweFxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMzJweCAwO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB3aWR0aDozMDBweDtcclxuXHJcbiAgXHJcbiAgYmFja2dyb3VuZDpibGFjaztcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RUaXRsZSA9IHN0eWxlZC5oNGBcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiAjRkNDRDA0O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbmZsZXg6IDEsXHJcbndpZHRoOiAyMDBweCcsXHJcbmhlaWdodDogJzEwMCUnLFxyXG5yZXNpemVNb2RlOiAnY29udGFpbicsXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgXHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICBtYXgtd2lkdGg6IDIwM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG5cclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZDogZ3JleTtcclxuZGlzcGxheTpmbGV4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENvbCA9IHN0eWxlZC5kaXZgXHJcbmZsZXg6ICR7KHByb3BzKT0+IHByb3BzLnNpemV9O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSXQgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDE1cHg7XHJcbm1hcmdpbi1sZWZ0OiAzcHg7XHJcbm1hcmdpbi10b3A6MnB4O1xyXG5mb250LWZhbWlseTpjdXJzaXZlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmUgPSBzdHlsZWQudWxgXHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcclxuICBwYWRkaW5nOiAwcmVtO1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG5cclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAmOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgLy9yZW1vdmUgc2Nyb2xsYmFyXHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgXHJcbiAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgY29sb3JlZExpbmUgPSBzdHlsZWQuZGl2YFxyXG5jb2xvcjogeWVsbG93O1xyXG5iYWNrZ3JvdW5kOiAjRkNDRDA0O1xyXG5oZWlnaHQ6IDU7XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgSXkgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDEycHg7XHJcbmNvbG9yOiNGQ0NEMDQ7XHJcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XHJcbm1hcmdpbi1yaWdodDogM3B4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSWEgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDExcHg7XHJcbmNvbG9yOndoaXRlO1xyXG50ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5mb250LWZhbWlseTpjdXJzaXZlO1xyXG5tYXJnaW4tbGVmdDozcHg7XHJcbm1hcmdpbi1yaWdodDozcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTAwcHgnIDogJzEyMHB4J307XHJcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNDBweCcgOiAnNDBweCd9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTJweCcgOiAnMTJweCd9O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHllbGxvdyAwJSwgb3JhbmdlIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB5ZWxsb3cgMCUsIG9yYW5nZSAxMDAlKSd9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gIH1cclxuXHJcblxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJY29uID0gc3R5bGVkLmltZ2BcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLnVsYFxyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgcGFkZGluZzogMHJlbTtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIC8vcmVtb3ZlIHNjcm9sbGJhclxyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIFxyXG4gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlID0gc3R5bGVkLmRpdmBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogJHsoeyBmaW5hbCB9KSA9PiBmaW5hbCA/IGAxMjAlO2AgOiBgbWluLWNvbnRlbnRgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogMTI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEUxMzFGO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBcclxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYG9wYWNpdHk6IDFgIDogYG9wYWNpdHk6IDAuNWB9OyBcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UaXRsZSA9IHN0eWxlZC5oNGBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIFRoaXMgZ3JhZGllbnQgaXMgZGlmZmVyZW50IGR1ZSB0byB0aGUgc2l6ZSBvZiB0aGUgVGl0bGUgY29udGFpbmVyLCBpdCBtdXN0IHRyYW5zaXRpb24gc29vbmVyIHRvIGJlIHZpc2libGUgb24gdGhlIHRleHQgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSAzMC4xNSUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtSW1nID0gc3R5bGVkLnN2Z2BcclxuICBtYXJnaW4tbGVmdDogMjFweDtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25zID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYDFgIDogYC4zM2B9O1xyXG4gIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgc2NhbGUoMS42KWAgOiBgc2NhbGUoMSlgfTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uRG90ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG5gXHJcbiIsImltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlLCBQcm9ncmVzcyB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgSWEsSW1nLCBMaXN0SXRlbSxHcmlkQ29udGFpbmVyLCBCdXR0b24gLCBMaXN0UGFyYWdyYXBoLCBMaXN0VGl0bGUsIFByb2dyZXNzQmFyLCBHcmlkLCBJdCwgUm93LCBDb2wsIGNvbG9yZWRMaW5lLCBJeX0gZnJvbSAnLi9BY2hpZXZlbWVudFN0eWxlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcnF1ZWUgZnJvbSBcInJlYWN0LWVhc3ktbWFycXVlZVwiO1xyXG5pbXBvcnQge0ZpQXdhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcblxyXG5jb25zdCBBY2hpZXZlbWVudD0oKT0+KFxyXG4gICAgPFNlY3Rpb24gaWQgPVwiYWNoaWV2ZVwiPlxyXG4gICAgICAgIDxTZWN0aW9uRGl2aWRlci8+XHJcbjxTZWN0aW9uVGl0bGU+QWNoaWV2ZW1lbnRzPC9TZWN0aW9uVGl0bGU+XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgICAgPE1hcnF1ZWUgZHVyYXRpb249ezEwMDAwfSBiYWNrZ3JvdW5kPVwicmdiKDAsMzMsNzEpXCIgaGVpZ2h0PVwiODBweFwiIGF4aXM9XCJYXCI+XHJcbiAgICAgICAgPEl5PiA8RmlBd2FyZC8+ICZuYnNwOyZuYnNwO1RvcCBBY2FkZW1pYyBzY29yZXIgaW4gOHRoIFNlbWVzdGVyOiAxMC8xMCBHUEE8L0l5PlxyXG4gICAgICAgIDxJeT4gPEZpQXdhcmQvPiAgJm5ic3A7Jm5ic3A7IEFtb25nIHRoZSB0b3AgMiUgc2NvcmVycyBpbiA1dGggU2VtZXN0ZXI6IDkuODUvMTAgR1BBPC9JeT5cclxuICAgICAgICA8SXkgPiA8RmlBd2FyZC8+ICAmbmJzcDsmbmJzcDsgV3JpdGVyIGF0IFdyaXRlcnNjYWZlLm9yZzwvSXk+XHJcbiAgICAgIDwvTWFycXVlZT5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9TZWN0aW9uPlxyXG5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjaGlldmVtZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQge0l0fSBmcm9tICcuLi9UaW1lTGluZS9UaW1lTGluZVN0eWxlcydcbmltcG9ydCB7IEZhVXNlckdyYWR1YXRlLCBGYVVuaXZlcnNpdHksRmFSZWdXaW5kb3dNYXhpbWl6ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0LCBHcmlkQ29udGFpbmVyLCBMaXN0Q29udGFpbmVyLCBMaXN0LCBMaXN0VGl0bGUsIEltZywgSXosIElvLCBJYSxJZywgTGlzdFBhcmFncmFwaCwgTGlzdEl0ZW0gfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcblxuY29uc3QgZGF0YSA9IFtcbiAgeyBudW1iZXI6IDIwLCB0ZXh0OiAnT3BlbiBTb3VyY2UgUHJvamVjdHMnfSxcbiAgeyBudW1iZXI6IDEwMDAsIHRleHQ6ICdTdHVkZW50cycsIH0sXG4gIHsgbnVtYmVyOiAxOTAwLCB0ZXh0OiAnR2l0aHViIEZvbGxvd2VycycsIH0sXG4gIHsgbnVtYmVyOiA1MDAwLCB0ZXh0OiAnR2l0aHViIFN0YXJzJywgfVxuXTtcblxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXG48U2VjdGlvbiBpZD0gXCJ0ZWNoXCI+XG4gIDxTZWN0aW9uRGl2aWRlci8+XG4gIDxTZWN0aW9uVGl0bGU+RWR1Y2F0aW9uPC9TZWN0aW9uVGl0bGU+XG4gIDxHcmlkQ29udGFpbmVyPlxuICAgIDxMaXN0PlxuICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICA8SW1nICBzdHlsZT17e1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAxMDAsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBib3JkZXJXaWR0aDogNSxcbiAgICBib3JkZXJSYWRpdXM6IDc1LFxuICAgIG1hcmdpblRvcDotMzAsXG4gICAgY29sb3I6ICdibGFjaydcbiAgfX0gc3JjPVwiL2ltYWdlcy8xMy5wbmdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cbiAgICAgPEl0PiBTUk0gSU5TVElUVVRFIE9GIFNDSUVOQ0UgQU5EIFRFQ0hOT0xPR1kgPC9JdD5cbiAgICAgPEl6PkthdHRhbmt1bGF0aHVyLCBDaGVubmFpLCBJbmRpYTwvSXo+XG4gICAgIDxociBjb2xvcj1cIiM0MTY5ZTFcIi8+XG4gICAgIDxici8+XG4gICAgIDxJYT48RmFVc2VyR3JhZHVhdGUvPiAgIEJBQ0hFTE9SIE9GIFRFQ0hOT0xPR1kgPC9JYT5cbiAgICAgPElvPklORk9STUFUSU9OIFRFQ0hOT0xPR1k8L0lvPlxuICAgICA8YnIvPlxuICAgICA8SWc+MjAxNi0yMDIwICZuYnNwOyZuYnNwOzxGYVVuaXZlcnNpdHkvPiZuYnNwOyZuYnNwOyBHUEEtIDkuMTEvMTA8L0lnPlxuICAgICA8YnIvPlxuICAgICA8TGlzdFBhcmFncmFwaD4gIOKAoiBCaWcgRGF0YSAmbmJzcDsmbmJzcDsg4oCiIENvbXB1dGVyIEdyYXBoaWNzICZuYnNwOyZuYnNwOyDigKIgRGF0YSBTdHJ1Y3R1cmVzICZuYnNwOyZuYnNwOyDigKIgQ2xvdWQgQ29tcHV0aW5nICZuYnNwOyZuYnNwOyBcbiAgICAgICDigKIgRGlzY3JldGUgTWF0aGVtYXRpY3MgJm5ic3A7Jm5ic3A7IOKAoiBPcGVyYXRpbmcgU3lzdGVtPC9MaXN0UGFyYWdyYXBoPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgIDwvTGlzdD5cbiAgICBcbiAgICBcbiAgPC9HcmlkQ29udGFpbmVyPlxuICA8YnIvPlxuPC9TZWN0aW9uPlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogMnJlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbmJhY2tncm91bmQ6ICNGQ0NEMDQ7XG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5gXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xuICAgIG1hcmdpbjogNjRweCAwO1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgZ2FwOiA0cHhcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IEl6ID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTFweDtcbm1hcmdpbi1sZWZ0OiAzcHg7XG5tYXJnaW4tdG9wOjJweDtcbmNvbG9yOiAjRkNDRDA0O1xuZm9udC1mYW1pbHk6UmFsZXdheTtcbmA7XG5leHBvcnQgY29uc3QgSW8gPSBzdHlsZWQuZGl2YFxuZm9udC1zaXplOiAxMXB4O1xubWFyZ2luLWxlZnQ6IDNweDtcbm1hcmdpbi10b3A6MnB4O1xuY29sb3I6ICNGQ0NEMDQ7XG5mb250LWZhbWlseTpSYWxld2F5O1xudGV4dC1hbGlnbjpjZW50ZXI7XG5gO1xuZXhwb3J0IGNvbnN0IElnID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTNweDtcbm1hcmdpbi1sZWZ0OiAzcHg7XG5tYXJnaW4tdG9wOjJweDtcbmNvbG9yOiBwb3dkZXItYmx1ZTtcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XG50ZXh0LWFsaWduOmNlbnRlcjtcbmJvcmRlci1jb2xvcjogYmx1ZTtcbmJveC1zaGFkb3c6IDNweCAzcHggMjBweCBibHVlO1xuYDtcbmV4cG9ydCBjb25zdCBJYyA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDExcHg7XG5tYXJnaW4tbGVmdDogM3B4O1xubWFyZ2luLXRvcDoycHg7XG5jb2xvcjogI0ZDQ0QwNDtcbnRleHQtYWxpZ246IGNlbnRlcjtcblxuZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJYSA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDE4cHg7XG5jb2xvcjogd2hpdGU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LWZhbWlseTpSYWxld2F5O1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCAjZmZmZmRjO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICB3aWR0aDozODBweDtcblxuICBcbiAgYmFja2dyb3VuZDpibGFjaztcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogI0ZDQ0QwNDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuYFxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG5mbGV4OiAxLFxud2lkdGg6ICcxMDAlJyxcbmhlaWdodDogJzEwMCUnLFxucmVzaXplTW9kZTogJ2NvbnRhaW4nLFxuYFxuXG5leHBvcnQgY29uc3QgTGlzdFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgXG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IHN0eWxlZC5wYFxuICBjb2xvcjogeWVsbG93O1xuYFxuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgbWF4LXdpZHRoOiAyMDNweDtcbn1cblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OmZsZXg7XG5cbn1cbmBcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcbmJhY2tncm91bmQ6IGdyZXk7XG5kaXNwbGF5OmZsZXg7XG5gO1xuZXhwb3J0IGNvbnN0IEJveGVzID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luOiAyNHB4IDAgNDBweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZ2FwOiAxNnB4O1xuICAgIG1hcmdpbjogMjBweCAwIDMycHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNDBweCwgMWZyKSk7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMjRweCBhdXRvO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMjEyRDQ1O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBoZWlnaHQ6IDE0NHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xuICAgIGhlaWdodDogMjEwcHg7XG5cbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgXG4gICAgJjpudGgtY2hpbGQoMm4pe1xuICAgICAgZ3JpZC1yb3c6MjtcbiAgICB9XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBCb3hOdW0gPSBzdHlsZWQuaDVgXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IEJveFRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBKb2luID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSm9pblRleHQgPSBzdHlsZWQuaDVgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn07XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgTGlzdCwgR3JpZENvbnRhaW5lcixMaXN0Q29udGFpbmVyLCBDb250YWluZXIsIEhyLCBUYWcsIFRhZ0xpc3QsIFRpdGxlQ29udGVudCwgQnV0dG9uLCBJbWcsIEl5LCBJeiwgSWEsIEl1IH0gZnJvbSAnLi4vUHJvamVjdHMvUHJvamVjdHNTdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ2VydGk9KCk9PihcclxuICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uRGl2aWRlci8+XHJcbiAgICAgICAgPFNlY3Rpb25UaXRsZT5DZXJ0aWZpY2F0ZXM8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxJbWcgc3R5bGU9e3tcclxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6IDE1MCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH19IHNyYz1cIi9pbWFnZXMvY291cnNlMS5qcGdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIvPlxyXG4gICA8YnIvPlxyXG4gIDxJYT48QnV0dG9uIGFzPVwiYVwiIGhyZWY9XCJodHRwczovL3d3dy51ZGVteS5jb20vY2VydGlmaWNhdGUvVUMtMzcxYzM3ZjEtMDNlMC00ZTdiLWE4NTEtYThkNDliYThiYWFhL1wiID5WaWV3IENlcnRpZmljYXRlPC9CdXR0b24+PC9JYT5cclxuICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8SW1nIHN0eWxlPXt7XHJcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAxNTAsXHJcbiAgICB3aWR0aDogMzAwLFxyXG4gICAgY29sb3I6ICdibGFjaydcclxuICB9fSBzcmM9XCIvaW1hZ2VzL2NvdXJzZTIucG5nXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiLz5cclxuICA8YnIvPlxyXG4gIDxJYT48QnV0dG9uIGFzPVwiYVwiIGhyZWY9XCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvY2VydGlmaWNhdGUvWTdBRkNCQzZZWk45XCIgPlZpZXcgQ2VydGlmaWNhdGU8L0J1dHRvbj48L0lhPlxyXG4gIDxici8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWcgc3R5bGU9e3tcclxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6IDE1MCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH19IHNyYz1cIi9pbWFnZXMvY291cnNlMy5wbmdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIvPlxyXG4gIDxici8+XHJcbiAgPElhPjxCdXR0b24gYXM9XCJhXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy9jZXJ0aWZpY2F0ZS84WENTTkxKNzhBR1VcIiA+VmlldyBDZXJ0aWZpY2F0ZTwvQnV0dG9uPjwvSWE+XHJcbiAgPGJyLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPEltZyBzdHlsZT17e1xyXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogMTUwLFxyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgfX0gc3JjPVwiL2ltYWdlcy9jb3Vyc2U0LnBuZ1wiIHJvdW5kZWRDaXJjbGUgcmVzaXplTW9kZT1cInN0cmV0Y2hcIi8+XHJcbiAgPGJyLz5cclxuICA8SWE+PEJ1dHRvbiBhcz1cImFcIiBocmVmPVwiaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL2NlcnRpZmljYXRlLzM0UDNUQTZQQlNDQ1wiID5WaWV3IENlcnRpZmljYXRlPC9CdXR0b24+PC9JYT5cclxuICA8YnIvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8SW1nIHN0eWxlPXt7XHJcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAxNTAsXHJcbiAgICB3aWR0aDogMzAwLFxyXG4gICAgY29sb3I6ICdibGFjaydcclxuICB9fSBzcmM9XCIvaW1hZ2VzL2NvdXJzZTUucG5nXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiLz5cclxuICA8YnIvPlxyXG4gIDxJYT48QnV0dG9uIGFzPVwiYVwiIGhyZWY9XCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvY2VydGlmaWNhdGUvR1BSNEdTMjQ4VzVYXCIgPlZpZXcgQ2VydGlmaWNhdGU8L0J1dHRvbj48L0lhPlxyXG4gIDxici8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcblxyXG4gICAgPC9TZWN0aW9uPlxyXG5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlcnRpOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgRGlCYWNrYm9uZSwgRGlDc3NkZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIERpdjEsIERpdjIsIERpdjMsIE5hdkxpbmssIFNvY2lhbEljb25zIH0gZnJvbSAnLi9Gb290ZXJTdHlsZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAgKFxuICA8ZGl2PlxuICAgIDxici8+XG4gICA8Q29udGFpbmVyPlxuICAgICA8RGl2MT5cbiAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgPGEgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBjb2xvcjpcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTpcIjEwcHhcIiwgZm9udEZhbWlseTonUmFsZXdheSd9fT5cbiAgICAgICAgICAgPHNwYW4gc2l6ZT1cIjE3cHhcIj5Db3B5cmlnaHQgwqkyMDIyPC9zcGFuPlxuICAgICAgICAgPC9hPlxuXG4gICAgICAgPC9MaW5rPlxuICAgICA8L0RpdjE+XG4gXG4gIFxuICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kOiAjRkNDRDA0O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBoZWlnaHQ6NjdweDtcbiAgXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNjBweCk7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjVyZW07XG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDY7XG4gIH1cbmA7XG5cbi8vIE5hdmlnYXRpb24gTGlua3NcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXG4gIFxuICBsaW5lLWhlaWdodDogMztcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5gO1xuXG4vLy8gRHJvcERvd24gQ29udGFjdFxuZXhwb3J0IGNvbnN0IENvbnRhY3REcm9wRG93biA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDEuN3JlbTtcblxuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMC40cmVtIDA7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZQcm9kdWN0c0ljb24gPSBzdHlsZWQoSW9Jb3NBcnJvd0Ryb3Bkb3duKWBcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIG9wYWNpdHk6ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnMScgOiAnLjc1Jyl9O1xuICB0cmFuc2Zvcm06ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnc2NhbGVZKC0xKScgOiAnc2NhbGVZKDEpJyl9O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luOiAycHggMCAwIDJweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuYDtcblxuXG4vLyBTb2NpYWwgSWNvbnMgXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxJY29ucyA9IHN0eWxlZC5hYFxudHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuY29sb3I6IGJsYWNrO1xuYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMmQ0NTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICB9XG5gIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbEluc3RhZ3JhbSwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5pbXBvcnQgeyBEaUJhY2tib25lLCBEaUNzc2RlY2sgfSBmcm9tICdyZWFjdC1pY29ucy9kaSc7XG5cbmltcG9ydCB7IENvbnRhaW5lciwgRGl2MSwgRGl2MiwgRGl2MywgTmF2TGluaywgU29jaWFsSWNvbnMgfSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+ICAoXG4gIDxkaXY+XG4gICA8Q29udGFpbmVyPlxuICAgICA8RGl2MT5cbiAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgPGEgc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBjb2xvcjpcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTpcIjEwcHhcIiwgZm9udEZhbWlseTonY3Vyc2l2ZScsIHdlaWdodDpcIjcwMFwifX0+XG4gICAgICAgICAgIDxEaUJhY2tib25lIHNpemU9XCIzcmVtXCIgLz48c3BhbiBzaXplPVwiMTdweFwiPkFtaXNoYSBTaW5oYTwvc3Bhbj5cbiAgICAgICAgIDwvYT5cblxuICAgICAgIDwvTGluaz5cbiAgICAgPC9EaXYxPlxuICAgICA8RGl2Mj5cbiAgICAgICA8bGk+XG4gICAgICAgICA8TGluayBocmVmPVwiI3Byb2plY3RzXCI+XG4gICAgICAgICAgIDxOYXZMaW5rPlBST0pFQ1RTPC9OYXZMaW5rPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPExpbmsgaHJlZj1cIiN0ZWNoXCI+XG4gICAgICAgICAgIDxOYXZMaW5rPlRFQ0hOT0xPR0lFUzwvTmF2TGluaz5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICA8L2xpPlxuICAgICAgIDxsaT5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIjYWJvdXRcIj5cbiAgICAgICAgICAgPE5hdkxpbms+QUJPVVQ8L05hdkxpbms+XG4gICAgICAgICA8L0xpbms+XG4gICAgICAgPC9saT5cbiAgICAgPC9EaXYyPlxuICAgICA8RGl2Mz5cbiAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbVwiPlxuICAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vbGlua2VkaW4uY29tXCI+XG4gICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb21cIj5cbiAgICAgICAgIDxBaUZpbGxJbnN0YWdyYW0gc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgIDwvRGl2Mz5cbiAgIDwvQ29udGFpbmVyPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCB7IElvSW9zQXJyb3dEcm9wZG93biB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgYmFja2dyb3VuZDogI0ZDQ0QwNDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNjBweCk7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjVyZW07XG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDY7XG4gIH1cbmA7XG5cbi8vIE5hdmlnYXRpb24gTGlua3NcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXG4gIFxuICBsaW5lLWhlaWdodDogMztcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5gO1xuXG4vLy8gRHJvcERvd24gQ29udGFjdFxuZXhwb3J0IGNvbnN0IENvbnRhY3REcm9wRG93biA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDEuN3JlbTtcblxuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMC40cmVtIDA7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZQcm9kdWN0c0ljb24gPSBzdHlsZWQoSW9Jb3NBcnJvd0Ryb3Bkb3duKWBcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIG9wYWNpdHk6ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnMScgOiAnLjc1Jyl9O1xuICB0cmFuc2Zvcm06ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnc2NhbGVZKC0xKScgOiAnc2NhbGVZKDEpJyl9O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luOiAycHggMCAwIDJweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuYDtcblxuXG4vLyBTb2NpYWwgSWNvbnMgXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxJY29ucyA9IHN0eWxlZC5hYFxudHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuY29sb3I6IGJsYWNrO1xuYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMmQ0NTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICB9XG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtLCBHcmlkQ29udGFpbmVyIH0gZnJvbSAnLi9IZXJvU3R5bGVzJztcbmltcG9ydCBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XG5cbmNvbnN0IHNhdmVGaWxlID0gKCkgPT4ge1xuICBGaWxlU2F2ZXIuc2F2ZUFzKFxuICAgIHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DTElFTlRfVVJMICsgXCIuLi8uLi9hc3NldC9SZXN1bWUucGRmXCIsXG4gICAgXCJBbWlzaGFTaW5oYV9SZXN1bWUucGRmXCJcbiAgKTtcbiAgfVxuXG5cbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IChcbiBcblxuXG4gPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cbiAgIFxuICAgPEdyaWRDb250YWluZXI+XG4gICAgIDxMaXN0PlxuICAgICAgIDxMaXN0SXRlbT5cbiAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvaW1nMTEucG5nXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiAgLz5cbiAgICAgPGJyLz5cbiAgIDwvTGlzdEl0ZW0+XG4gICA8TGlzdEl0ZW0+XG4gICAgIDxTZWN0aW9uVGl0bGUgbWFpbiBjZW50ZXIgY29sb3I9XCJibGFja1wiPlxuICAgICAgIEhpIEknbSBcbiAgICAgICBBbWlzaGEgU2luaGFcbiAgICAgPC9TZWN0aW9uVGl0bGU+XG4gICAgIDxTZWN0aW9uVGV4dCBjb2xvcj1cImJsYWNrXCI+XG4gICAgIEkgYW0gU29mdHdhcmUgRW5naW5lZXIgd2l0aCBleHBlcmllbmNlIGluIE9yZGVyIE1hbmFnZW1lbnQgU3lzdGVtIGFuZCBFLUNvbW1lcmNlIGltcGxlbWVudGF0aW9ucyBhbG9uZyB3aXRoIGdvb2Qgd29ya2luZyBleHBlcmllbmNlIGluIGNvbnN1bHRpbmcgc2tpbGxzIHdpdGggdGhlIGFiaWxpdHkgdG8gaWRlbnRpZnkgaXNzdWVzIGluIHRoZSBwcm9jZXNzIGZsb3cgYW5kIGRldmVsb3Agc29sdXRpb25zIGZvciBPTVMgQ2xpZW50cy5cbiAgICAgPGJyLz5cbiAgICAgSSBhc3BpcmUgdG8gcHVyc3VlIGEgTWFzdGVy4oCZcyBpbiBDb21wdXRlciBTY2llbmNlIHRvIGxlYXJuIGFuZCBlbmhhbmNlIG15IGtub3dsZWRnZSBhbmQgc2tpbGxzIGluIHZhcmlvdXMgYXNwZWN0cyBcbm9mIGFsZ29yaXRobSBkZXZlbG9wbWVudCBhbmQgTWFjaGluZSBMZWFybmluZyBjb25jZXB0cy4gUG9zdCBNYXN0ZXJzLCBJIGludGVuZCB0byBpbXBsZW1lbnQgbXkgYWNxdWlyZWQgXG5rbm93bGVkZ2Ugd2hpbGUgd29ya2luZyB3aXRoIGludGVyZGlzY2lwbGluYXJ5IElUIG9yZ2FuaXphdGlvbnMgYXMgYW4gZXhwZXJ0IGluIERhdGEgU2NpZW5jZSB0b29scy4gSW4gdGhlIGxvbmcgcnVuLCBcbkkgd2FudCB0byBkZXZlbG9wIGV4cGVydCBzeXN0ZW0gaW5ub3ZhdGl2ZSBwcmVkaWN0aW9uIHRvb2xzIHRvIGFzc2lzdCB0aGUgZWR1Y2F0aW9uIGFuZCBoZWFsdGhjYXJlIHNlY3RvcnMgd29ybGR3aWRlLlxuICAgICA8L1NlY3Rpb25UZXh0PlxuICAgXG4gICAgIDwvTGlzdEl0ZW0+XG4gICAgIDxMaXN0SXRlbT5cbiAgICAgPEJ1dHRvbiBvbkNsaWNrPSB7c2F2ZUZpbGV9PkRvd25sb2FkIFJlc3VtZTwvQnV0dG9uPlxuICAgICA8L0xpc3RJdGVtPlxuICAgICA8L0xpc3Q+XG4gICAgIDwvR3JpZENvbnRhaW5lcj5cblxuIDwvU2VjdGlvbj5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBmbGV4O1xucGFkZGluZzogMnJlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbndpZHRoOjEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sdW1uLWdhcDogMnJlbTtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBtYXgtd2lkdGg6IDIwM3B4XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmBcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGNvbHVtbi1nYXA6IDEyMHB4O1xuICBtYXJnaW46IDJyZW0gMDtcbiAgXG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ317XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGdhcDogNHB4XG4gIH1cbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAzMnB4IDA7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBMZWZ0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSwgUHJvZ3Jlc3MgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNvY2lhbEljb25zIH0gZnJvbSAnLi4vSGVhZGVyL0hlYWRlclN0eWxlcyc7XHJcbmltcG9ydCB7IEdyaWRDb250YWluZXIsIExpc3RDb250YWluZXIsIExpc3QsIEltZywgQnV0dG9ufSBmcm9tICcuL0xhc3Rmb290ZXJTdHlsZSc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uRGl2aWRlci8+XHJcbiAgICAgICAgPFNlY3Rpb25UaXRsZT5Db250YWN0IE1lPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxJbWcgIHN0eWxlPXt7XHJcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH19IHNyYz1cIi9pbWFnZXMvbGlua2VkaW4uanBnXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XHJcbiAgICAgPEltZyAgc3R5bGU9e3tcclxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXHJcbiAgICBoZWlnaHQ6IDI0MCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH19IHNyYz1cIi9pbWFnZXMvbGlua0ltZy5qcGdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cclxuICA8YnIvPlxyXG4gIDxCdXR0b24gYXM9XCJhXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FtaXNoYS1zaW5oYS00Nzk5NzcxNTgvJz5WaWV3IFByb2ZpbGU8L0J1dHRvbj5cclxuICA8YnIvPlxyXG4gXHJcblxyXG4gICAgICAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgPExpc3RDb250YWluZXI+PC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuXHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcblx0d2lkdGg6IGNhbGMoMTAwdncgLSA5NnB4KTtcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBwYWRkaW5nOiAycmVtIDQ4cHggNDBweDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggNDhweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbnBhZGRpbmc6IDJyZW07XHJcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbmNvbHVtbi1nYXA6IDJyZW07XHJcbnJvdy1nYXA6IDNyZW07XHJcbmJhY2tncm91bmQ6ICM2OTY5Njk7XHJcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzEwMHB4JyA6ICcxMDBweCd9O1xyXG4gIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzQwcHgnIDogJzQwcHgnfTtcclxuICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzEycHgnIDogJzEzcHgnfTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogIzAwNzdiNTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3N2I1O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDc3YjU7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1sZWZ0OjEwMHB4O1xyXG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlY2Y3ZmM7XHJcbiAgfVxyXG5cclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBJeSA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMTVweDtcclxuY29sb3I6IHdoaXRlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJYSA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMTJweDtcclxuY29sb3I6IHdoaXRlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJdSA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMTJweDtcclxuY29sb3I6IHdoaXRlO1xyXG50ZXh0LWFsaWduOmp1c3RpZnk7XHJcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbm1hcmdpbi1sZWZ0OjNweDtcclxubWFyZ2luLXJpZ2h0OjNweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEl6ID0gc3R5bGVkLmRpdmBcclxuZm9udC1zaXplOiAyMHB4O1xyXG5jb2xvcjogI0ZDQ0QwNDtcclxuZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggeWVsbG93O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDcwcHg7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICNGQ0NEMDQ7XHJcbiAgcGFkZGluZzogLjVyZW0gMDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICcycmVtJyA6ICcxLjZyZW0nfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIciA9IHN0eWxlZC5ocmBcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogI2QwYmI1NztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZGNlM2U3O1xyXG4gIGZvbnQtZmFtaWx5OiAnY3Vyc2l2ZSc7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgZm9udC1zdHlsZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6LjJyZW1cclxuICBcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0YmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xyXG5cdHdpZHRoOiAzMyU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG4gICAgXHJcblx0dG9wOiAkeyh7b3BlblBvc30pID0+IChcclxuXHR7XHJcbiAgICBcdFtDTV9DRU5URVJfQ0VOVEVSXTogJzUwJScsXHJcbiAgICBcdFtDTV9UT1BfTEVGVF06ICcxMCUnLFxyXG4gICAgXHRbQ01fVE9QX0NFTlRFUl06ICcxMCUnLFxyXG4gICAgXHRbQ01fVE9QX1JJR0hUXTogJzEwJSdcclxuXHR9W29wZW5Qb3NdKX07XHJcbiAgICBcclxuXHRsZWZ0OiAkeyh7b3BlblBvc30pID0+IChcclxuXHR7XHJcbiAgICBcdFtDTV9DRU5URVJfQ0VOVEVSXTogJzUwJScsXHJcbiAgICBcdFtDTV9UT1BfTEVGVF06ICc1JScsXHJcbiAgICBcdFtDTV9UT1BfQ0VOVEVSXTogJzUwJScsXHJcbiAgICBcdFtDTV9UT1BfUklHSFRdOiAnOTUlJ1xyXG5cdH1bb3BlblBvc10pfTtcclxuIFxyXG5cdHRyYW5zZm9ybTogJHsoe29wZW5Qb3N9KSA9PiAoXHJcblx0e1xyXG4gICAgXHRbQ01fQ0VOVEVSX0NFTlRFUl06ICd0cmFuc2xhdGUoLTUwJSwtNTAlKScsXHJcbiAgICBcdFtDTV9UT1BfTEVGVF06ICd0cmFuc2xhdGUoMCwwKScsXHJcbiAgICBcdFtDTV9UT1BfQ0VOVEVSXTogJ3RyYW5zbGF0ZSgtNTAlLDApJyxcclxuICAgIFx0W0NNX1RPUF9SSUdIVF06ICd0cmFuc2xhdGUoLTEwMCUsMCknXHJcblx0fVtvcGVuUG9zXSl9O1xyXG5cclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDAuNzVyZW07XHJcblx0Y29sb3I6IHJnYmEoMCwwLDEzOSwgMC43KTtcclxuYDtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIHdpZHRoOjMwMHB4OyBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xyXG4gICAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgZ2FwOiA0cHhcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDMycHggMDtcclxuICB9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDIuNXJlbSAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcclxuY29sb3I6YmxhY2s7XHJcbmZvbnQtc2l6ZTogMXJlbTtcclxucGFkZGluZzoxcmVtIDEuNXJlbTtcclxuYmFja2dyb3VuZDogI0ZDQ0QwNDtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxudHJhbnNpdGlvbjogMC41cztcclxuJjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjODAxNDE0O1xyXG5cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXHJcbmNvbG9yOiAjZDhiZmJmO1xyXG5mb250LXNpemU6IDEuNXJlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtJdGVtID0gc3R5bGVkLmFgXHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDA7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRsZWZ0OiA2cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdGZvbnQtc2l6ZTogOHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDogMTA0MHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6YmFzZWxpbmU7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luOiAwIDAgMzJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNsb2dhbiA9IHN0eWxlZC5wYFxyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0bWluLXdpZHRoOiAyODBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjhweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rTGlzdCA9IHN0eWxlZC51bGBcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDg1cHgsIDIyMHB4KSk7XHJcblx0Z2FwOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCAyOHB4O1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAzMnB4IDAgMTZweDtcclxuXHRcdGdhcDogMTZweDtcclxuXHR9XHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMzJweCA0cHggMTZweDtcclxuXHRcdGdhcDogNXB4O1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRtYXgtd2lkdGg6IDIyMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBMaW5rVGl0bGUgPSBzdHlsZWQuaDRgXHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcblx0fVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExpc3QsIEdyaWRDb250YWluZXIsTGlzdENvbnRhaW5lciwgQ29udGFpbmVyLCBIciwgVGFnLCBUYWdMaXN0LCBUaXRsZUNvbnRlbnQsIEJ1dHRvbiwgSW1nLCBJeSwgSXosIElhLCBJdSB9IGZyb20gJy4vUHJvamVjdHNTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IEZhR2l0aHViU3F1YXJlfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAncmVhY3Rqcy1wb3B1cCc7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuPFNlY3Rpb24gaWQ9XCJwcm9qZWN0XCI+XG4gIDxTZWN0aW9uRGl2aWRlciAvPlxuICA8U2VjdGlvblRpdGxlPlxuUHJvamVjdHNcbiAgPC9TZWN0aW9uVGl0bGU+XG4gIDxHcmlkQ29udGFpbmVyPlxuICAgIDxMaXN0PlxuICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICA8SW1nICBzdHlsZT17e1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAxNTAsXG4gICAgd2lkdGg6IDMwMCxcbiAgICBjb2xvcjogJ2JsYWNrJ1xuICB9fSBzcmM9XCIvaW1hZ2VzLzUuanBnXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XG4gIFxuICA8YnIvPlxuICA8SXk+TWFjaGluZSBMZWFybmluZyBEZXRlY3Rpb24gb2YgRGVwcmVzc2lvbiB1c2luZyBNYWNoaW5lIExlYXJuaW5nPC9JeT5cbiAgPGhyIGNvbG9yPXtcIiNGQ0NEMDRcIn0vPlxuICA8YnIvPlxuICA8UG9wdXAgdHJpZ2dlcj17PElhPjxCdXR0b24gPk1vcmUgSW5mbzwvQnV0dG9uPjwvSWE+fSBwb3NpdGlvbj1cInRvcFwiIHdpZHRoPVwiNTAwcHhcIiBoZWlnaHQ9XCIzMDBweFwiPlxuICAgIDxMaXN0PjxMaXN0Q29udGFpbmVyPlxuICAgICAgPEl5PkRlcHJlc3Npb24gRGV0ZWN0aW9uIHVzaW5nIE1MIGFsZ29yaXRobXM8L0l5PlxuICAgICAgPGhyIGNvbG9yPVwiI0ZDRERPNFwiLz5cbiAgICA8YnIvPiAgPEl1PuKAoiBGb3IgZWFybHkgZGV0ZWN0aW9uIG9mIGRlcHJlc3Npb24gaW4gcGVvcGxlIGFuZCBjdXJiaW5nIHRoZSByZWxhdGVkIHByb2JsZW1zIHVzaW5nIHNvY2lhbCBtZWRpYSBkYXRhLCB3b3JrZWQgXG5pbiBhIHRlYW0gb2YgMyB1c2luZyB0b29scyBsaWtlIFNjcmFwZSBzdG9ybSBhbmQgTkxUSy4gPGJyLz4gPGJyLz5cbuKAoiBVc2VkIEJheWVzIHRoZW9yZW0sIFNWTSwgUmFuZG9tIEZvcmVzdCBhbmQgTG9naXN0aWMgUmVncmVzc2lvbiBhbGdvcml0aG0gZm9yIGRhdGEgbW9kZWxpbmcuXG48aHIgY29sb3I9XCJGQ0NEMDRcIi8+XG48YnIvPlxuPEl6PjxGYUdpdGh1YlNxdWFyZS8+PC9Jej5cbjwvSXU+XG4gICAgXG4gICAgXG4gICAgPC9MaXN0Q29udGFpbmVyPjwvTGlzdD5cbiAgPC9Qb3B1cD5cbiAgPEl6PjxJYT48YnIvPkRlYyAyMDE5LSBNYXkgMjAyMDwvSWE+PC9Jej5cbiAgICAgICAgXG4gICAgICA8L0xpc3RDb250YWluZXI+XG5cbiAgICA8L0xpc3Q+XG4gICAgPExpc3Q+XG4gICAgICA8TGlzdENvbnRhaW5lcj5cbiAgICAgIDxJbWcgIHN0eWxlPXt7XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6IDE3MCxcbiAgICB3aWR0aDogMzAwLFxuICAgIGNvbG9yOiAnYmxhY2snXG4gIH19IHNyYz1cIi9pbWFnZXMvNy5qcGdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cbiAgPGJyLz5cbiAgPEl5PkhhbmQgR2VzdHVyZSBSZWNvZ25pdGlvbiB1c2luZyBPcGVuQ1Y8L0l5PlxuICA8aHIgY29sb3I9e1wiI0ZDQ0QwNFwifS8+XG4gIDxici8+XG4gIDxQb3B1cCB0cmlnZ2VyPXs8SWE+PEJ1dHRvbiA+TW9yZSBJbmZvPC9CdXR0b24+PC9JYT59IHBvc2l0aW9uPVwidG9wXCI+XG4gICAgPExpc3Q+PExpc3RDb250YWluZXI+XG4gICAgPEl5PkhhbmQgR2VzdHVyZSBSZWNvZ25pdGlvbiB1c2luZyBPcGVuQ1Y8L0l5PlxuICAgICAgPGhyIGNvbG9yPVwiI0ZDRERPNFwiLz5cbiAgICA8YnIvPiAgPEl1PlxuICAgIOKAoiBXb3JrZWQgaW4gYSBncm91cCBvZiA1IHRvIGltcGxlbWVudCBodW1hbi1jb21wdXRlciBpbnRlcmFjdGlvbiB1c2luZyBhbiBpbm5vdmF0aXZlIHJlYWwtdGltZSBtZXRob2QgZm9yIFxuaGFuZCBnZXN0dXJlIGRldGVjdGlvbiBhbmQgZmVhdHVyZSBleHRyYWN0aW9uIHVzaW5nIGEgd2ViY2FtLiA8YnIvPlxu4oCiIFByZS1wcm9jZXNzZWQgcmVhbC10aW1lIGlucHV0IGltYWdlcyB0byByZW1vdmUgbm9pc2UuIDxici8+XG7igKIgSGFuZCByZWdpb24gd2FzIGV4dHJhY3RlZCB1c2luZyBiYWNrZ3JvdW5kIHN1YnRyYWN0aW9uIG1ldGhvZCBhbmQgcGFsbS9maW5nZXJzIHdlcmUgc2VnbWVudGVkIGFuZCBcbmZpbmFsbHkgY29udmV4IGh1bGwgbWV0aG9kIHdhcyB1c2VkIHRvIHJlY29nbml6ZSB0aGUgZmluZ2Vycy5cbjxociBjb2xvcj1cIkZDQ0QwNFwiLz5cbjxici8+XG48SXo+PEZhR2l0aHViU3F1YXJlLz48L0l6PlxuPC9JdT5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj48L0xpc3Q+XG4gIDwvUG9wdXA+XG4gIDxJej48SWE+PGJyLz5KdW5lIDIwMTktIE5vdiAyMDIwPC9JYT48L0l6PlxuICAgICAgICBcbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cblxuICAgIDwvTGlzdD5cbiAgICA8TGlzdD5cbiAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuXG4gICAgPC9MaXN0PlxuICBcbiAgPC9HcmlkQ29udGFpbmVyPlxuPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gXG5cbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogMnJlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbmJhY2tncm91bmQ6ICM2OTY5Njk7XG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5gXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMDBweCcgOiAnMTAwcHgnfTtcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNDBweCcgOiAnNDBweCd9O1xuICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMnB4JyA6ICcxMnB4J307XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB5ZWxsb3cgMCUsIG9yYW5nZSAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6MTAwcHg7XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgfVxuXG5cbmBcblxuZXhwb3J0IGNvbnN0IEl5ID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTVweDtcbmNvbG9yOiB3aGl0ZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XG5gO1xuZXhwb3J0IGNvbnN0IElhID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTJweDtcbmNvbG9yOiB3aGl0ZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XG5gO1xuZXhwb3J0IGNvbnN0IEl1ID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTJweDtcbmNvbG9yOiB3aGl0ZTtcbnRleHQtYWxpZ246anVzdGlmeTtcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XG5tYXJnaW4tbGVmdDozcHg7XG5tYXJnaW4tcmlnaHQ6M3B4O1xuYDtcbmV4cG9ydCBjb25zdCBJeiA9IHN0eWxlZC5kaXZgXG5mb250LXNpemU6IDIwcHg7XG5jb2xvcjogI0ZDQ0QwNDtcbmZvbnQtZmFtaWx5OmN1cnNpdmU7XG50ZXh0LWFsaWduOmNlbnRlcjtcbmA7XG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggeWVsbG93O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0NzBweDtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiAxMDAlO1xuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNGQ0NEMDQ7XG4gIHBhZGRpbmc6IC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRpdGxlID8gJzJyZW0nIDogJzEuNnJlbSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6ICdjdXJzaXZlJztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuYDtcblxuXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXN0eWxlOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6LjJyZW1cbiAgXG59XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246Zml4ZWQ7XG5cdGJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcblx0d2lkdGg6IDMzJTtcblx0aGVpZ2h0OiBhdXRvO1xuICAgIFxuXHR0b3A6ICR7KHtvcGVuUG9zfSkgPT4gKFxuXHR7XG4gICAgXHRbQ01fQ0VOVEVSX0NFTlRFUl06ICc1MCUnLFxuICAgIFx0W0NNX1RPUF9MRUZUXTogJzEwJScsXG4gICAgXHRbQ01fVE9QX0NFTlRFUl06ICcxMCUnLFxuICAgIFx0W0NNX1RPUF9SSUdIVF06ICcxMCUnXG5cdH1bb3BlblBvc10pfTtcbiAgICBcblx0bGVmdDogJHsoe29wZW5Qb3N9KSA9PiAoXG5cdHtcbiAgICBcdFtDTV9DRU5URVJfQ0VOVEVSXTogJzUwJScsXG4gICAgXHRbQ01fVE9QX0xFRlRdOiAnNSUnLFxuICAgIFx0W0NNX1RPUF9DRU5URVJdOiAnNTAlJyxcbiAgICBcdFtDTV9UT1BfUklHSFRdOiAnOTUlJ1xuXHR9W29wZW5Qb3NdKX07XG4gXG5cdHRyYW5zZm9ybTogJHsoe29wZW5Qb3N9KSA9PiAoXG5cdHtcbiAgICBcdFtDTV9DRU5URVJfQ0VOVEVSXTogJ3RyYW5zbGF0ZSgtNTAlLC01MCUpJyxcbiAgICBcdFtDTV9UT1BfTEVGVF06ICd0cmFuc2xhdGUoMCwwKScsXG4gICAgXHRbQ01fVE9QX0NFTlRFUl06ICd0cmFuc2xhdGUoLTUwJSwwKScsXG4gICAgXHRbQ01fVE9QX1JJR0hUXTogJ3RyYW5zbGF0ZSgtMTAwJSwwKSdcblx0fVtvcGVuUG9zXSl9O1xuXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDAuNzVyZW07XG5cdGNvbG9yOiByZ2JhKDAsMCwxMzksIDAuNyk7XG5gO1xuXG5cblxuZXhwb3J0IGNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggI0ZDQ0QwNDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgd2lkdGg6MzAwcHg7XG5cbiAgXG4gIGJhY2tncm91bmQ6YmxhY2s7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ317XG4gICAgbWFyZ2luOiA2NHB4IDA7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICBnYXA6IDRweFxuICB9XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMzJweCAwO1xuICB9XG5gXG5cblxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDIuNXJlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcbmNvbG9yOmJsYWNrO1xuZm9udC1zaXplOiAxcmVtO1xucGFkZGluZzoxcmVtIDEuNXJlbTtcbmJhY2tncm91bmQ6ICNGQ0NEMDQ7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xudHJhbnNpdGlvbjogMC41cztcbiY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XG5cbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xucGFkZGluZzogMnJlbTtcbmBcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXG5jb2xvcjogI2Q4YmZiZjtcbmZvbnQtc2l6ZTogMS41cmVtO1xuYCIsImltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlLCBQcm9ncmVzcyB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgSWEsSW1nLCBMaXN0SXRlbSxHcmlkQ29udGFpbmVyLCBCdXR0b24gLCBMaXN0UGFyYWdyYXBoLCBMaXN0VGl0bGUsIFByb2dyZXNzQmFyLCBHcmlkLCBJdCwgUm93LCBDb2wsIGNvbG9yZWRMaW5lLCBJeX0gZnJvbSAnLi9wdWJsaWNhdGlvblN0eWxlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRpbWVsaW5lPSgpPT4gKFxyXG48U2VjdGlvbiBpZD1cInRlY2hcIj5cclxuPFNlY3Rpb25EaXZpZGVyLz5cclxuPFNlY3Rpb25UaXRsZT5QdWJsaWNhdGlvbnM8L1NlY3Rpb25UaXRsZT5cclxuPEdyaWRDb250YWluZXI+XHJcbiAgIDxMaXN0PlxyXG4gICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICA8SW1nICBzdHlsZT17e1xyXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogMTAwLFxyXG4gICAgd2lkdGg6IDEwMCxcclxuICAgIGJvcmRlcldpZHRoOiA1LFxyXG4gICAgYm9yZGVyUmFkaXVzOiA3NSxcclxuICAgIG1hcmdpblRvcDotMzcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gIH19IHNyYz1cIi9pbWFnZXMvMTQuanBnXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XHJcbiAgPGJyLz5cclxuICA8SXQ+TWFjaGluZSBMZWFybmluZyBCYXNlZCBEZXRlY3Rpb24gb2YgRGVjZXB0aXZlIFR3ZWV0cyBvbiBDb3ZpZC0xOTwvSXQ+XHJcbiAgPGJyLz5cclxuICA8SXk+UHVibGljYXRpb24gRGF0ZTogMzAgSnVuZSAyMDIxPC9JeT5cclxuICA8aHIgY29sb3I9XCIjQUREOEU2XCIvPlxyXG4gIDxici8+XHJcbiAgPElhPldlIGFuYWx5emVkIGFuZCBhc3Nlc3NlZCBtYWNoaW5lIGxlYXJuaW5nLWJhc2VkIGRlY2VwdGl2ZSBpbmZvcm1hdGlvbiBkZXRlY3Rpb24gY29uY2VybmluZyBDb3ZpZC0xOSBpbiB0aGlzIGFydGljbGUuIFdpdGggdGhlIHNwcmVhZCBvZiBDb3ZpZC0xOSwgd2UndmUgc2VlbiBhIGxvdCBvZiBmYWxzaWZpZWQgYXJ0aWNsZXMgYW5kIHR3ZWV0cyByZWdhcmRpbmcgdHJlYXRtZW50cywgbWVkaWNpbmUsIGFuZCBnZW5lcmFsIHBhbmRlbWljIGluZm9ybWF0aW9uLiBUaGUgcHJvamVjdCdzIGdvYWwgaXMgdG8gYXNzaXN0IGluIGRhdGEgYW5hbHlzaXMgYW5kIHRvIHByZXZlbnQgdGhlIHNwcmVhZCBvZiBtaXNsZWFkaW5nIGluZm9ybWF0aW9uLiBUaGUgZGV2ZWxvcGVkIG1vZGVsIGNhbiBhbHNvIGJlIHV0aWxpc2VkIGluIHJlYWwtdGltZSB0byB0cmFjayBkb3duIHRoZSBzb3VyY2Ugb2YgbWlzbGVhZGluZyBpbmZvcm1hdGlvbi4gV2UgY29uZHVjdGVkIGEgdGhvcm91Z2ggaW52ZXN0aWdhdGlvbiBvZiBuYXR1cmFsIGxhbmd1YWdlIHByb2Nlc3NpbmcgbWV0aG9kcyBmb3IgZGF0YSBhbmFseXNpcyBhbmQgbWFjaGluZSBsZWFybmluZyBhbGdvcml0aG1zIGluIHRoaXMgd29yay48L0lhPlxyXG4gPGJyLz5cclxuICA8QnV0dG9uIGFzPVwiYVwiIGhyZWY9XCJodHRwczovL3d3dy5pamVhdC5vcmcvd3AtY29udGVudC91cGxvYWRzL3BhcGVycy92MTBpNS9FMjgzMTA2MTA1MjEucGRmXCI+TGluayB0byBQYXBlcjwvQnV0dG9uPlxyXG4gIDxici8+XHJcbiAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgICBcclxuICAgPC9MaXN0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICBcclxuICA8L0dyaWRDb250YWluZXI+XHJcblxyXG5cclxuPC9TZWN0aW9uPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuXHJcbiIsIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5wbGFjZS1pdGVtczogY2VudGVyO1xyXG5jb2x1bW4tZ2FwOiAycmVtO1xyXG5yb3ctZ2FwOiAzcmVtO1xyXG5iYWNrZ3JvdW5kOiAjRkNDRDA0O1xyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcclxuICAgIG1hcmdpbjogNjRweCAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIGdhcDogNHB4XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIHdpZHRoOjM4MHB4O1xyXG5cclxuICBcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6ICNGQ0NEMDQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbmZsZXg6IDEsXHJcbndpZHRoOiAnMTAwJScsXHJcbmhlaWdodDogJzEwMCUnLFxyXG5yZXNpemVNb2RlOiAnY29udGFpbicsXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgXHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICBtYXgtd2lkdGg6IDIwM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG5cclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZDogZ3JleTtcclxuZGlzcGxheTpmbGV4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENvbCA9IHN0eWxlZC5kaXZgXHJcbmZsZXg6ICR7KHByb3BzKT0+IHByb3BzLnNpemV9O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSXQgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDEzcHg7XHJcbm1hcmdpbi1sZWZ0OiAzcHg7XHJcbm1hcmdpbi10b3A6MnB4O1xyXG5mb250LWZhbWlseTpSYWxld2F5O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgY29sb3JlZExpbmUgPSBzdHlsZWQuZGl2YFxyXG5jb2xvcjogeWVsbG93O1xyXG5iYWNrZ3JvdW5kOiAjRkNDRDA0O1xyXG5oZWlnaHQ6IDU7XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgSXkgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDEycHg7XHJcbmNvbG9yOiNGQ0NEMDQ7XHJcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XHJcbm1hcmdpbi1yaWdodDogM3B4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSWEgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDExcHg7XHJcbmNvbG9yOndoaXRlO1xyXG50ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5mb250LWZhbWlseTpSYWxld2F5O1xyXG5tYXJnaW4tbGVmdDozcHg7XHJcbm1hcmdpbi1yaWdodDozcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTAwcHgnIDogJzEwMHB4J307XHJcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNDBweCcgOiAnNDBweCd9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbiAgZm9udC1mYW1pbHk6UmFsZXdheTtcclxuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxMnB4JyA6ICcxMnB4J307XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB5ZWxsb3cgMCUsIG9yYW5nZSAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gIH1cclxuXHJcblxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJY29uID0gc3R5bGVkLmltZ2BcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLnVsYFxyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgcGFkZGluZzogMHJlbTtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIC8vcmVtb3ZlIHNjcm9sbGJhclxyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIFxyXG4gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlID0gc3R5bGVkLmRpdmBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogJHsoeyBmaW5hbCB9KSA9PiBmaW5hbCA/IGAxMjAlO2AgOiBgbWluLWNvbnRlbnRgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWF4LXdpZHRoOiAxOTZweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogMTI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEUxMzFGO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBcclxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYG9wYWNpdHk6IDFgIDogYG9wYWNpdHk6IDAuNWB9OyBcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UaXRsZSA9IHN0eWxlZC5oNGBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIFRoaXMgZ3JhZGllbnQgaXMgZGlmZmVyZW50IGR1ZSB0byB0aGUgc2l6ZSBvZiB0aGUgVGl0bGUgY29udGFpbmVyLCBpdCBtdXN0IHRyYW5zaXRpb24gc29vbmVyIHRvIGJlIHZpc2libGUgb24gdGhlIHRleHQgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSAzMC4xNSUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtSW1nID0gc3R5bGVkLnN2Z2BcclxuICBtYXJnaW4tbGVmdDogMjFweDtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25zID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMjg4cHg7XHJcblxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgMWAgOiBgLjMzYH07XHJcbiAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBzY2FsZSgxLjYpYCA6IGBzY2FsZSgxKWB9O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25Eb3QgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbmBcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERpRmlyZWJhc2UsIERpUmVhY3QsIERpWmVuZCwgRGlXaW5kb3dzLCBEaU1vbmdvZGIsIERpUHl0aG9uLCBEaUppcmEsIERpR29vZ2xlQ2xvdWRQbGF0Zm9ybSwgRGlKYXZhfSBmcm9tICdyZWFjdC1pY29ucy9kaSc7XG5pbXBvcnQgeyBTaVdlYmZsb3cgfSBmcm9tICdyZWFjdC1pY29ucy9zaSc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSwgUHJvZ3Jlc3MgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBHcmlkQ29udGFpbmVyIH0gZnJvbSAnLi4vVGltZUxpbmUvVGltZUxpbmVTdHlsZXMnO1xuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgTGlzdEl0ZW0sIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZSwgUHJvZ3Jlc3NCYXJ9IGZyb20gJy4vVGVjaG5vbG9naWVzU3R5bGVzJztcblxuY29uc3QgVGVjaG5vbG9naWVzID0gKCkgPT4gIChcbiAgPFNlY3Rpb24gaWQ9IFwidGVjaFwiPlxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDxTZWN0aW9uVGl0bGU+TXkgU2tpbGxzPC9TZWN0aW9uVGl0bGU+XG4gICAgXG4gICA8TGlzdD5cbiAgICAgPExpc3RJdGVtPlxuICAgICAgIDxEaVJlYWN0IHNpemU9IFwiMnJlbVwiIC8+XG4gICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICA8TGlzdFRpdGxlPldFQjwvTGlzdFRpdGxlPlxuICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XG4gICAgICAgICAgIFJFQUNUSlMgPHByb2dyZXNzIHZhbHVlPVwiODBcIiBtYXg9XCIxMDBcIiAvPjgwJSA8YnIvPlxuICAgICAgICAgICBIVE1ML0NTUyA8cHJvZ3Jlc3MgdmFsdWU9XCI5MFwiIG1heD1cIjEwMFwiIC8+OTAlIDxici8+XG4gICAgICAgICAgIFBIUCA8cHJvZ3Jlc3MgdmFsdWU9XCI1MFwiIG1heD1cIjEwMFwiIC8+NTAlIDxici8+XG4gICAgICAgICAgIEpBVkFTQ1JJUFQgPHByb2dyZXNzIHZhbHVlPVwiODBcIiBtYXg9XCIxMDBcIiAvPiA4MCU8YnIvPlxuICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxuICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgPC9MaXN0SXRlbT5cbiAgICAgPExpc3RJdGVtPlxuICAgICA8RGlNb25nb2RiIHNpemU9IFwiMnJlbVwiIC8+XG4gXG4gICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICA8TGlzdFRpdGxlPkRBVEFCQVNFPC9MaXN0VGl0bGU+XG4gICAgICAgICA8TGlzdFBhcmFncmFwaD5cbiAgICAgICAgICAgTVlTUUwgPHByb2dyZXNzIHZhbHVlPVwiOTBcIiBtYXg9XCIxMDBcIiAvPjkwJSAgPGJyLz5cbiAgICAgICAgICBNT05HTyBEQiA8cHJvZ3Jlc3MgdmFsdWU9XCI0MFwiIG1heD1cIjEwMFwiIC8+IDQwJVxuICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxuICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgPC9MaXN0SXRlbT5cbiAgICAgPExpc3RJdGVtPlxuICAgICAgIDxEaVB5dGhvbiBzaXplPSBcIjJyZW1cIiAvPlxuICAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICAgPExpc3RUaXRsZT5GUkFNRVdPUks8L0xpc3RUaXRsZT5cbiAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxuICAgICAgICAgICBNT0NLSVRPIDxwcm9ncmVzcyB2YWx1ZT1cIjUwXCIgbWF4PVwiMTAwXCIgLz4gNTAlIDxici8+XG4gICAgICAgICAgIE5VTVBZIDxwcm9ncmVzcyB2YWx1ZT1cIjcwXCIgbWF4PVwiMTAwXCIgLz4gNzAlPGJyLz5cbiAgICAgICAgICAgU1BSSU5HIDxwcm9ncmVzcyB2YWx1ZT1cIjUwXCIgbWF4PVwiMTAwXCIgLz4gNTAlPGJyLz5cbiAgICAgICAgICAgU1dJTkcgPHByb2dyZXNzIHZhbHVlPVwiNTBcIiBtYXg9XCIxMDBcIiAvPiA1MCVcbiAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cbiAgICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgIDwvTGlzdEl0ZW0+XG4gICAgIDxMaXN0SXRlbT5cbiAgICAgICA8RGlKaXJhIHNpemU9IFwiMnJlbVwiIC8+XG4gICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICA8TGlzdFRpdGxlPlRPT0xTPC9MaXN0VGl0bGU+XG4gICAgICAgICA8TGlzdFBhcmFncmFwaD5cbiAgICAgICAgICAgR0lUIDxwcm9ncmVzcyB2YWx1ZT1cIjgwXCIgbWF4PVwiMTAwXCIgLz44MCUgPGJyLz5cbiAgICAgICAgICAgSklSQSA8cHJvZ3Jlc3MgdmFsdWU9XCI4NVwiIG1heD1cIjEwMFwiIC8+IDg1JVxuICAgICAgICBcbiAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cbiAgICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgIDwvTGlzdEl0ZW0+XG4gICAgIDxMaXN0SXRlbT5cbiAgICAgICA8RGlKYXZhIHNpemU9IFwiMnJlbVwiIC8+XG4gICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICA8TGlzdFRpdGxlPlBMQVRGT1JNUzwvTGlzdFRpdGxlPlxuICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XG4gICAgICAgICAgIEpBVkEgPHByb2dyZXNzIHZhbHVlPVwiOTBcIiBtYXg9XCIxMDBcIiAvPiA5MCUgPGJyLz5cbiAgICAgICAgICAgUFlUSE9OIDxwcm9ncmVzcyB2YWx1ZT1cIjgwXCIgbWF4PVwiMTAwXCIgLz44MCUgPGJyLz5cbiAgICAgICAgICAgQy9DKysgPHByb2dyZXNzIHZhbHVlPVwiOTBcIiBtYXg9XCIxMDBcIiAvPjkwJSA8YnIvPlxuICAgICAgICAgICBSIDxwcm9ncmVzcyB2YWx1ZT1cIjQwXCIgbWF4PVwiMTAwXCIgLz40MCU8YnIvPlxuICAgICAgICAgICBVQlVOVFUgPHByb2dyZXNzIHZhbHVlPVwiNzBcIiBtYXg9XCIxMDBcIiAvPjcwJSA8YnIvPlxuICAgICAgICAgICBXSU5ET1dTIDxwcm9ncmVzcyB2YWx1ZT1cIjkwXCIgbWF4PVwiMTAwXCIgLz45MCVcbiAgICAgIFxuICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxuICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgPC9MaXN0SXRlbT5cbiAgICAgPExpc3RJdGVtPlxuICAgICAgIDxEaUdvb2dsZUNsb3VkUGxhdGZvcm0gc2l6ZT0gXCIycmVtXCIgLz5cbiAgICAgICA8TGlzdENvbnRhaW5lcj5cbiAgICAgICAgIDxMaXN0VGl0bGU+RE9NQUlOUzwvTGlzdFRpdGxlPlxuICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XG4gICAgICAgICAgIDxyb3c+XG4gICAgICAgICAgIENsb3VkPHByb2dyZXNzIHZhbHVlPVwiODBcIiBtYXg9XCIxMDBcIi8+ODAlIDxici8+XG4gICAgICAgICAgIE5MUCA8cHJvZ3Jlc3MgdmFsdWU9XCI4MFwiIG1heD1cIjEwMFwiIC8+IDgwJVxuICAgICAgICAgICA8L3Jvdz5cbiAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cbiAgICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgIDwvTGlzdEl0ZW0+XG4gICA8L0xpc3Q+XG4gICBcblxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCg1MCUgNTAlIGF0IDUwJSA1MCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwLjI1KSA1My44JSwgcmdiYSg3OSwgMTA4LCAxNzYsIDApIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNjBweDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1haW5JbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xuICAgIG1hcmdpbjogNjRweCAwO1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgZ2FwOiA0cHhcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCAjRkNDRDA0O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB3aWR0aDogMzIwcHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6ICNGQ0NEMDQ7XG4gIGZvbnQtZmFtaWx5OlJhbGV3YXk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IHN0eWxlZC5wYFxuICBjb2xvcjogeWVsbG93O1xuYFxuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgbWF4LXdpZHRoOiAyMDNweDtcbn1cblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdEljb24gPSBzdHlsZWQuaW1nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbmBcbiIsImltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlLCBQcm9ncmVzcyB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IExpc3QsIExpc3RDb250YWluZXIsIElhLEltZywgTGlzdEl0ZW0sR3JpZENvbnRhaW5lciwgTGlzdFBhcmFncmFwaCwgTGlzdFRpdGxlLCBQcm9ncmVzc0JhciwgR3JpZCwgSXQsIFJvdywgQ29sLCBjb2xvcmVkTGluZSwgSXl9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGltZWxpbmU9KCk9PiAoXG48U2VjdGlvbiBpZD1cInRlY2hcIj5cbjxTZWN0aW9uRGl2aWRlci8+XG48U2VjdGlvblRpdGxlPkV4cGVyaWVuY2U8L1NlY3Rpb25UaXRsZT5cbjxHcmlkQ29udGFpbmVyPlxuICAgXG4gICAgICA8TGlzdD5cbiAgICAgIFxuICA8TGlzdENvbnRhaW5lcj5cbiAgPEltZyAgc3R5bGU9e3tcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGhlaWdodDogMTAwLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgYm9yZGVyV2lkdGg6IDUsXG4gICAgYm9yZGVyUmFkaXVzOiA3NSxcbiAgICBtYXJnaW5Ub3A6LTUwLFxuICAgIGNvbG9yOiAnYmxhY2snXG4gIH19IHNyYz1cIi9pbWFnZXMvOC5qcGdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cbiAgICA8SXQ+QmFuZ2FsdXJ1LCBJbmRpYTxJeT5KdWx5IDIwMjAtIFByZXNlbnQ8L0l5PjwvSXQ+IFxuICA8TGlzdFRpdGxlPlNvZnR3YXJlIEVuZ2luZWVyPC9MaXN0VGl0bGU+XG4gIDxJdD5CUklER0UgU09MVVRJT05TIEdST1VQIDwvSXQ+IFxuICA8aHIgY29sb3I9XCIjRkNDRDA0XCIvPlxuICA8TGlzdFBhcmFncmFwaD5cbiAg4oCiIERldmVsb3BlZCBhbmQgcGVyZm9ybWVkIHNldmVyYWwgb3B0aW1pemF0aW9ucyBvZiB0aGUgY29kZWJhc2UgZm9yIGZsYXdsZXNzIE9NUyBpbXBsZW1lbnRhdGlvbiBhcyBhIFxuU29mdHdhcmUgRW5naW5lZXIgZm9yIGEgbWFqb3IgdXBzY2FsZSBjaGFpbiBvZiBkZXBhcnRtZW50IHN0b3JlcyBiYXNlZCBpbiBNZXhpY28gKGluIHBhcnRuZXJzaGlwIHdpdGggRmx1ZW50IFxuY29tbWVyY2UpIDxici8+XG7igKIgQnVpbHQgc2lnbmlmaWNhbnQgY2xpZW50IHJlbGF0aW9uc2hpcHMgcmVzdWx0aW5nIGluIGNvbnRyYWN0IGV4dGVuc2lvbiBhbmQgYWRkaW5nIGEgdmFsdWFibGUgYXNzZXQgdG8gdGhlIGZpcm0uPGJyLz5cbuKAoiBTb2x2ZWQgY3JpdGljYWwgaXNzdWVzIHJhaXNlZCBieSBjbGllbnRzIGJ5IHNlYW1sZXNzbHkgY29vcmRpbmF0aW5nIHdpdGggdGhlIHRlYW0gYW5kIHRoZSBjbGllbnQuXG48SWE+VEVDSC9ET01BSU48L0lhPlxu4oCiSkFWQSA4IOKAoiBNYXZlbiDigKIgR3JhcGhRTCDigKIgSlNPTiDigKJQb3N0bWFuIOKAokluc29tbmlhXG5cbiAgPC9MaXN0UGFyYWdyYXBoPlxuXG4gIDwvTGlzdENvbnRhaW5lcj4gXG48L0xpc3Q+XG5cbiAgICAgIDxMaXN0PlxuICA8TGlzdENvbnRhaW5lcj5cbiAgPEltZyAgc3R5bGU9e3tcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGhlaWdodDogMTAwLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgYm9yZGVyV2lkdGg6IDUsXG4gICAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgICBtYXJnaW5Ub3A6LTQwLFxuICAgIGJveFNoYWRvdzogJyNGQ0NEMDQnLFxuICAgIGNvbG9yOiAnYmxhY2snXG4gIH19IHNyYz1cIi9pbWFnZXMvOC5qcGdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cbiAgICA8SXQ+QmFuZ2FsdXJ1LCBJbmRpYTxJeT5KYW4gMjAyMC1KdW5lIDIwMjA8L0l5PjwvSXQ+IFxuICA8TGlzdFRpdGxlPlNvZnR3YXJlIEVuZ2luZWVyIEludGVybjwvTGlzdFRpdGxlPlxuICA8SXQ+QlJJREdFIFNPTFVUSU9OUyBHUk9VUCA8L0l0PiBcbiAgPGhyIGNvbG9yPVwiI0ZDQ0QwNFwiLz5cbiAgPExpc3RQYXJhZ3JhcGg+XG4gIOKAoiBXb3JrZWQgYXMgYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGZvciBhbiBpbi1ob3VzZSBwcm9qZWN0IOKAmE1hZ251beKAmSBhbiBvbmxpbmUgYXNzZXNzbWVudCwgY291cnNlcywgYW5kIFxuY2VydGlmaWNhdGlvbiBwbGF0Zm9ybSBmb3IgdGhlIGVtcGxveWVlcy4gPGJyLz5cbuKAoiBXb3JrZWQgYXMgYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGZvciB0aGUgcHJvamVjdC0g4oCYVGhlIFBlcnNvbmFsIFNob3BwZXLigJkgYSBwZXJzb25hbCBzdHlsZSByZWNvbW1lbmRhdGlvbiBcbnBsYXRmb3JtIGZvciBjdXN0b21lcnMuIDxici8+XG7igKIgVXNlZCBSZWFjdEpTIGZvciB0aGUgZnJvbnQtZW5kIGRldmVsb3BtZW50IGludGVncmF0ZWQgd2l0aCB0aGUgUmFiYml0IGZyYW1ld29yayBhbmQgZG9ja2VyaXplZCB0aGUgXG5hcHBsaWNhdGlvbiB0byBhbGxvdyB0aGUgYXBwbGljYXRpb24gdG8gYmUgY29tbXV0ZWQgZWFzaWx5IGJldHdlZW4gZW52aXJvbm1lbnRzLjxici8+XG48SWE+VEVDSC9ET01BSU48L0lhPlxu4oCiUmVhY3RKUyDigKJEamFuZ28g4oCiUmFiYml0TVEgRnJhbWV3b3JrXG5cbiAgPC9MaXN0UGFyYWdyYXBoPlxuXG4gIDwvTGlzdENvbnRhaW5lcj4gXG48L0xpc3Q+XG5cbjxMaXN0PlxuICA8TGlzdENvbnRhaW5lcj5cbiAgPEltZyAgc3R5bGU9e3tcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGhlaWdodDogMTAwLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgYm9yZGVyV2lkdGg6IDUsXG4gICAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgICBtYXJnaW5Ub3A6LTQwLFxuICAgIGJveFNoYWRvdzogJyNGQ0NEMDQnLFxuICAgIGNvbG9yOiAnYmxhY2snXG4gIH19IHNyYz1cIi9pbWFnZXMvMTAucG5nXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XG4gICAgPEl0PlJhbmNoaSwgSW5kaWE8SXk+RGVjIDIwMTgtSmFuIDIwMTk8L0l5PjwvSXQ+IFxuICA8TGlzdFRpdGxlPkludGVybjwvTGlzdFRpdGxlPlxuICA8SXQ+IFJlc2VhcmNoICYgRGV2ZWxvcG1lbnQgY2VudHJlIGZvciBJcm9uIGFuZCBTdGVlbCA8L0l0PiBcbiAgPGhyIGNvbG9yPVwiI0ZDQ0QwNFwiLz5cbiAgPExpc3RQYXJhZ3JhcGg+XG4gIOKAoiBEZXZlbG9wZWQgYW4gRW1wbG95ZWUgTWFuYWdlbWVudCBTeXN0ZW0gZm9yIHRoZSBIdW1hbiByZXNvdXJjZSBkZXBhcnRtZW50IG9mIHRoZSBvcmdhbml6YXRpb24uPGJyLz5cbuKAoiBXb3JrZWQgaW5kZXBlbmRlbnRseSBhbmQgdXNlZCBIVE1ML0NTUyBmb3IgZnJvbnQtZW5kIGRlc2lnbmluZyB3aGljaCBpbmNsdWRlZCBtb2R1bGVzIGZvciBib3RoIFxuZW1wbG95ZWUgYW5kIGFkbWluIGRhc2hib2FyZCB0aGF0IGluY2x1ZGVkIG1hbnkgd2VicGFnZXMgZm9yIGFkbWluIGFuZCBlbXBsb3llZXMgdG8gdmlldyBhbmQgdXBkYXRlIFxuaW5mb3JtYXRpb24gcmVnYXJkaW5nIHByb2ZpbGUsIGxlYXZlcywgYW5kIHNhbGFyeSByZXZpc2lvbi5cbjxJYT5URUNIL0RPTUFJTjwvSWE+XG7igKJIVE1ML0NTUyDigKJNeVNRTCDigKJCb290U3RyYXBcblxuICA8L0xpc3RQYXJhZ3JhcGg+XG5cbiAgPC9MaXN0Q29udGFpbmVyPiBcbjwvTGlzdD5cbjxMaXN0PlxuICA8TGlzdENvbnRhaW5lcj5cbiAgPEltZyAgc3R5bGU9e3tcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGhlaWdodDogMTAwLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgYm9yZGVyV2lkdGg6IDUsXG4gICAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgICBtYXJnaW5Ub3A6LTQwLFxuICAgIGJveFNoYWRvdzogJyNGQ0NEMDQnLFxuICAgIGNvbG9yOiAnYmxhY2snXG4gIH19IHNyYz1cIi9pbWFnZXMvMTAucG5nXCIgcm91bmRlZENpcmNsZSByZXNpemVNb2RlPVwic3RyZXRjaFwiIC8+XG4gICAgPEl0PlJhbmNoaSwgSW5kaWE8SXk+TWF5IDIwMTgtSnVuIDIwMTk8L0l5PjwvSXQ+IFxuICA8TGlzdFRpdGxlPkludGVybjwvTGlzdFRpdGxlPlxuICA8SXQ+IFJlc2VhcmNoICYgRGV2ZWxvcG1lbnQgY2VudHJlIGZvciBJcm9uIGFuZCBTdGVlbCA8L0l0PiBcbiAgPGhyIGNvbG9yPVwiI0ZDQ0QwNFwiLz5cbiAgPExpc3RQYXJhZ3JhcGg+XG4gIOKAoiBEZXZlbG9wZWQgYSBMaWJyYXJ5IG1hbmFnZW1lbnQgc3lzdGVtIGZvciB0aGUgSXJvbiBhbmQgU3RlZWwgcmVzZWFyY2ggY2VudHJlIG9mIFN0ZWVsIEF1dGhvcml0eSBvZiBJbmRpYSBcbihTQUlMKS48YnIvPlxu4oCiIFdvcmtlZCBpbmRlcGVuZGVudGx5IGFuZCB1c2VkIEpBVkEgc3dpbmdzIHRvb2xraXQgZm9yIEdVSSBhbmQgSkRCQyBmb3IgYXBwbGljYXRpb24gcHJvZ3JhbW1pbmcgXG5pbnRlcmZhY2UuXG48SWE+VEVDSC9ET01BSU48L0lhPlxu4oCiSmF2YSDigKJTd2luZ0wg4oCiSkRCQ1xuXG4gIDwvTGlzdFBhcmFncmFwaD5cblxuICA8L0xpc3RDb250YWluZXI+IFxuPC9MaXN0PlxuPExpc3Q+XG4gIDxMaXN0Q29udGFpbmVyPlxuICA8SW1nICBzdHlsZT17e1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAxMDAsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBib3JkZXJXaWR0aDogNSxcbiAgICBib3JkZXJSYWRpdXM6IDUwLFxuICAgIG1hcmdpblRvcDotNDAsXG4gICAgYm94U2hhZG93OiAnI0ZDQ0QwNCcsXG4gICAgY29sb3I6ICdibGFjaydcbiAgfX0gc3JjPVwiL2ltYWdlcy8xMS5wbmdcIiByb3VuZGVkQ2lyY2xlIHJlc2l6ZU1vZGU9XCJzdHJldGNoXCIgLz5cbiAgICA8SXQ+UmFuY2hpLCBJbmRpYTxJeT5EZWMgMjAxNy1KYW4gMjAxODwvSXk+PC9JdD4gXG4gIDxMaXN0VGl0bGU+VHJhaW5lZTwvTGlzdFRpdGxlPlxuICA8SXQ+IEJoYXJhdCBTYW5jaGFyIE5pZ2FtIExpbWl0ZWQgPC9JdD4gXG4gIDxociBjb2xvcj1cIiNGQ0NEMDRcIi8+XG4gIDxMaXN0UGFyYWdyYXBoPlxuICDigKJBU1AuTkVUIHRyYWluaW5nIG9uIEludHJvZHVjdGlvbiAmIENvbnRyb2wsIEFyY2hpdGVjdHVyZSwgd29ya2luZyB3aXRoIFVzZXIgY29udHJvbCwgVmFsaWRhdGlvbiBjb250cm9scyAmIFxud2ViIGNhY2hpbmdcbjxJYT5URUNIL0RPTUFJTjwvSWE+XG7igKJBU1AuTkVUXG5cbiAgPC9MaXN0UGFyYWdyYXBoPlxuXG4gIDwvTGlzdENvbnRhaW5lcj4gXG48L0xpc3Q+XG4gICAgICAgIFxuICAgICAgICBcbiAgIFxuICA8L0dyaWRDb250YWluZXI+XG5cblxuPC9TZWN0aW9uPlxuKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuXG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogMnJlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbmJhY2tncm91bmQ6ICM2MTYxNjE7XG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5gXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xuICAgIG1hcmdpbjogNjRweCAwO1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgZ2FwOiA0cHhcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCAjRkNDRDA0O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICB3aWR0aDozODBweDtcblxuICBcbiAgYmFja2dyb3VuZDpibGFjaztcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogI0ZDQ0QwNDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuYFxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG5mbGV4OiAxLFxud2lkdGg6ICcxMDAlJyxcbmhlaWdodDogJzEwMCUnLFxucmVzaXplTW9kZTogJ2NvbnRhaW4nLFxuYFxuXG5leHBvcnQgY29uc3QgTGlzdFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgXG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IHN0eWxlZC5wYFxuICBjb2xvcjogeWVsbG93O1xuYFxuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgbWF4LXdpZHRoOiAyMDNweDtcbn1cblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OmZsZXg7XG5cbn1cbmBcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcbmJhY2tncm91bmQ6IGdyZXk7XG5kaXNwbGF5OmZsZXg7XG5gO1xuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuYDtcbmV4cG9ydCBjb25zdCBDb2wgPSBzdHlsZWQuZGl2YFxuZmxleDogJHsocHJvcHMpPT4gcHJvcHMuc2l6ZX07XG5gO1xuZXhwb3J0IGNvbnN0IEl0ID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTNweDtcbm1hcmdpbi1sZWZ0OiAzcHg7XG5tYXJnaW4tdG9wOjJweDtcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XG5mb250LXN0eWxlOiBpdGFsaWM7XG5gO1xuZXhwb3J0IGNvbnN0IGNvbG9yZWRMaW5lID0gc3R5bGVkLmRpdmBcbmNvbG9yOiB5ZWxsb3c7XG5iYWNrZ3JvdW5kOiAjRkNDRDA0O1xuaGVpZ2h0OiA1O1xuXG5gO1xuZXhwb3J0IGNvbnN0IEl5ID0gc3R5bGVkLmRpdmBcbmZvbnQtc2l6ZTogMTBweDtcbmNvbG9yOiNGQ0NEMDQ7XG50ZXh0LWFsaWduOiByaWdodDtcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XG5tYXJnaW4tcmlnaHQ6IDNweDtcbmA7XG5leHBvcnQgY29uc3QgSWEgPSBzdHlsZWQuZGl2YFxuZm9udC1zaXplOiAxMHB4O1xuY29sb3I6I0ZDQ0QwNDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OlJhbGV3YXk7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBMaXN0SWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxDb250YWluZXIgPSBzdHlsZWQudWxgXG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xuICBwYWRkaW5nOiAwcmVtO1xuICBsaXN0LXN0eWxlOm5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cblxuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgJjpmaXJzdC1vZi10eXBle1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuXG4gIC8vcmVtb3ZlIHNjcm9sbGJhclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICBcbiAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogJHsoeyBmaW5hbCB9KSA9PiBmaW5hbCA/IGAxMjAlO2AgOiBgbWluLWNvbnRlbnRgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1heC13aWR0aDogMTk2cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXgtd2lkdGg6IDEyNHB4O1xuICB9XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZDogIzBFMTMxRjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBvcGFjaXR5OiAxYCA6IGBvcGFjaXR5OiAwLjVgfTsgXG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRpdGxlID0gc3R5bGVkLmg0YFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogVGhpcyBncmFkaWVudCBpcyBkaWZmZXJlbnQgZHVlIHRvIHRoZSBzaXplIG9mIHRoZSBUaXRsZSBjb250YWluZXIsIGl0IG11c3QgdHJhbnNpdGlvbiBzb29uZXIgdG8gYmUgdmlzaWJsZSBvbiB0aGUgdGV4dCAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSAzMC4xNSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwKSk7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIH1cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9ucyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyODhweDtcblxuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgMWAgOiBgLjMzYH07XG4gIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgc2NhbGUoMS42KWAgOiBgc2NhbGUoMSlgfTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbkRvdCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuYFxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdNQUNISU5FIExFQVJOSU5HIEJBU0VEIEVBUkxZIERFUFJFU1NJT04gREVURUNUSU9OIFVTSU5HIFNPQ0lBTCBNRURJQSBEQVRBJyxcbiAgICBkZXNjcmlwdGlvbjogXCJFYXJseSBkZXRlY3Rpb24gb2YgZGVwcmVzc2lvbiBpbiBwZW9wbGUgYW5kIGN1cmJpbmcgdGhlIHJlbGF0ZWQgcHJvYmxlbXMgdXNpbmcgc29jaWFsIG1lZGlhIGRhdGEsIHdvcmtlZCBpbiBhIHRlYW0gb2YgMyB1c2luZyB0b29scyBsaWtlIFNjcmFwZSBzdG9ybSBhbmQgTkxUS1wiLFxuICAgIGltYWdlOiAnL2ltYWdlcy81LmpwZycsXG4gICAgdGFnczogWycgQmF5ZXMgdGhlb3JlbScsICdTVk0nLCAnUmFuZG9tIEZvcmVzdCcsICdMb2dpc3RpYyBSZWdyZXNzaW9uJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hBTkQgR0VTVFVSRSBSRUNPR05JVElPTiBVU0lORyBPUEVOQ1YnLFxuICAgIGRlc2NyaXB0aW9uOlwiV29ya2VkIGluIGEgZ3JvdXAgb2YgNSB0byBpbXBsZW1lbnQgaHVtYW4tY29tcHV0ZXIgaW50ZXJhY3Rpb24gdXNpbmcgYW4gaW5ub3ZhdGl2ZSByZWFsLXRpbWUgbWV0aG9kIGZvciBoYW5kIGdlc3R1cmUgZGV0ZWN0aW9uIGFuZCBmZWF0dXJlIGV4dHJhY3Rpb24gdXNpbmcgYSB3ZWJjYW0uXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzcuanBnJyxcbiAgICB0YWdzOiBbJ1B5dGhvbiddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXZWJSVEMgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMy5qcGcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdXZWJSVEMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVW5pY2hhdCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBnJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NoYXRFbmdpbmUnLCAnRmlyZWJhc2UnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgXG4gIGltYWdlOiAnL2ltYWdlcy9jb3Vyc2UxLmpwZycsIFxuICB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZvdW5kZWQgSmF2YVNjcmlwdCBNYXN0ZXJ5JywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLCB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGQnLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScsIH0sXG4gIFxuXTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL0xheW91dFN0eWxlcydcblxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgPEhlYWRlci8+XG4gICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+IFxuICAgICA8Rm9vdGVyLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxubWF4LXdpZHRoOiAxMjgwcHg7XG53aWR0aDogMTAwJTtcbm1hcmdpbjogYXV0bztcbmA7XG4iLCJpbXBvcnQgQWNvbXBsaXNobWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50cyc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cyc7XG5pbXBvcnQgVGVjaG5vbG9naWVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1RlY2hub2xvZ2llcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZSc7XG5pbXBvcnQgUHVibGljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QdWJsaWNhdGlvbnMvcHVibGljYXRpb24nO1xuaW1wb3J0IENlcnRpIGZyb20gJy4uL2NvbXBvbmVudHMvQ2VydGlmaWNhdGVBY2hpZXZlbWVudC9DZXJ0aWZpY2F0ZUFjaGlldmVtZW50JztcbmltcG9ydCBBY2hpZXZlIGZyb20gJy4uL2NvbXBvbmVudHMvQWNoaWV2ZW1lbnRzL0FjaGlldmVtZW50cyc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGFzdEZvb3Rlci9MYXN0Zm9vdGVyJztcbmltcG9ydCB7UmluZ30gZnJvbSAncmVhY3QtYXdlc29tZS1zcGlubmVycydcblxuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICBcblxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2VjdGlvbiBncmlkPiBcbiAgICAgIDxIZXJvIC8+IFxuICAgICAgIDwvU2VjdGlvbj4gICBcbiAgICAgICA8VGVjaG5vbG9naWVzIC8+IFxuICAgICAgIDxUaW1lbGluZSAvPlxuICAgICAgIDxBY29tcGxpc2htZW50cyAvPlxuICAgICAgPFByb2plY3RzIC8+XG4gICAgICA8UHVibGljYXRpb24gLz5cbiAgICAgIDxDZXJ0aS8+XG4gICAgICA8QWNoaWV2ZSAvPlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC9MYXlvdXQ+XG4gICAgXG4gICAgXG4gICAgXG4gICBcbiAgICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEJ1dHRvbkJhY2ssIEJ1dHRvbkZyb250IH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiAoXG4gIDxCdXR0b25CYWNrIGFsdD17cHJvcHMuYWx0fSBmb3JtPXtwcm9wcy5mb3JtfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn1cbiAgICA8QnV0dG9uRnJvbnQgYWx0PXtwcm9wcy5hbHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0+e3Byb3BzLmNoaWxkcmVufTwvQnV0dG9uRnJvbnQ+XG4gIDwvQnV0dG9uQmFjaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuXG5cblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IHByb3BzLmdyaWQgPyBcImdyaWRcIiA6IFwiZmxleFwiIH07XG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gcHJvcHMucm93ID8gXCJyb3dcIiA6IFwiY29sdW1uXCIgfTtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIzMnB4IDQ4cHggMFwiIH0gO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgcGFkZGluZzogMjRweCA0OHB4IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweCAwXCIgfSA7XG5cbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc0MHB4JyA6ICc0M3B4J307XG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1MHB4JyA6ICc1NHB4J307XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxOC43NyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgNjAuMTUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNXB4IDAgNnB4JyA6ICcwJ307XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc0MHB4IDAgMTJweCcgOiAnMCd9O1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzI4cHgnIDogJzMycHgnfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMzJweCcgOiAnNDBweCd9O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcxNnB4IDAgOHB4JyA6ICcwJ307XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA2NzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXG5cbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3JBbHQgPyBcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknIDpcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknfTtcblxuICAgIG1hcmdpbjogJHsocHJvcHMpID0+IHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIiB9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IFNlY3Rpb25TdWJUZXh0ID0gc3R5bGVkLnBgXG4gIG1heC13aWR0aDogODAwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA2NzJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMyk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogIzBmMTYyNDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2UwZTRlYjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzA0MTY5O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbi10b3A6IDI0cHg7IFxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTUwcHgnIDogJzE1MHB4J307XG4gIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzUwcHgnIDogJzYwcHgnfTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMTZweCcgOiAnMTZweCd9O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAkeyh7IGFsdCwgZm9ybSB9KSA9PiAoYWx0IHx8IGZvcm0pID8gJzAnIDogJzAgMCA4MHB4J307XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHllbGxvdyAwJSwgb3JhbmdlIDEwMCUpJ307XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMTg0cHgnfTtcbiAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc0OHB4J307XG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcwJyA6ICc2NHB4J307XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnMzJweCd9O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsIHllbGxvdyAwJSwgb3JhbmdlIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB5ZWxsb3cgMCUsIG9yYW5nZSAxMDAlKSd9O1xuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNXB4JyA6ICcxNXB4J307XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpJyA6ICdub25lJ307XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcyNHB4JyA6ICcxNnB4J307XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMTZweCcgOiAnOHB4J307XG5cbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMCcgOiAnOHB4J307XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtJY29uSW1nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDsgIFxuICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMzJweCcgOiAnMjRweCd9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBoZWlnaHQ6ICR7KHsgbmF2IH0pID0+IG5hdiA/ICcxNnB4JyA6ICcyNHB4J307XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzE2cHgnfTtcbiAgfVxuYFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlsZS1zYXZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF3ZXNvbWUtc3Bpbm5lcnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWVhc3ktbWFycXVlZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Rqcy1wb3B1cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=