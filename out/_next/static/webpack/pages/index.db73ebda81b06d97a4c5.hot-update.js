self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Achievements/AchievementStyle.js":
/*!*********************************************************!*\
  !*** ./src/components/Achievements/AchievementStyle.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "AchievementStyle__GridContainer",
  componentId: "sc-1szbvr-0"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:2rem;place-items:center;column-gap:2rem;row-gap:3rem;background:#36454F;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var List = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "AchievementStyle__List",
  componentId: "sc-1szbvr-1"
})(["list-style-type:none;grid-template-columns:repeat(2,1fr);gap:20px;margin:2rem 0;@media ", "{margin:64px 0;}@media ", "{margin:4px 0;gap:4px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], function (props) {
  return props.theme.breakpoints.lg;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__ListContainer",
  componentId: "sc-1szbvr-2"
})(["display:flex;flex-direction:column;box-shadow:3px 3px 20px white;margin-left:4px;width:300px;background:black;@media ", "{display:flex;margin-left:18px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h4.withConfig({
  displayName: "AchievementStyle__ListTitle",
  componentId: "sc-1szbvr-3"
})(["font-weight:500;font-size:15px;line-height:32px;letter-spacing:0.02em;color:#FCCD04;margin-bottom:8px;margin-left:5px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "AchievementStyle__Image",
  componentId: "sc-1szbvr-4"
})(["flex:1,width:200px', height: '100%', resizeMode: 'contain',"]);
var ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "AchievementStyle__ListParagraph",
  componentId: "sc-1szbvr-5"
})(["font-size:12px;line-height:22px;margin-left:8px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "AchievementStyle__ProgressBar",
  componentId: "sc-1szbvr-6"
})(["color:yellow;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "AchievementStyle__ListItem",
  componentId: "sc-1szbvr-7"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;display:flex;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__Grid",
  componentId: "sc-1szbvr-8"
})(["background:grey;display:flex;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__Row",
  componentId: "sc-1szbvr-9"
})(["display:flex;"]);
var Col = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__Col",
  componentId: "sc-1szbvr-10"
})(["flex:", ";"], function (props) {
  return props.size;
});
var It = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__It",
  componentId: "sc-1szbvr-11"
})(["font-size:15px;margin-left:3px;margin-top:2px;font-family:cursive;"]);
var CarouselContaine = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "AchievementStyle__CarouselContaine",
  componentId: "sc-1szbvr-12"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var coloredLine = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__coloredLine",
  componentId: "sc-1szbvr-13"
})(["color:yellow;background:#FCCD04;height:5;"]);
var Iy = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__Iy",
  componentId: "sc-1szbvr-14"
})(["font-size:12px;color:#FCCD04;font-family:Raleway;margin-right:3px;"]);
var Ia = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__Ia",
  componentId: "sc-1szbvr-15"
})(["font-size:11px;color:white;text-align:justify;font-family:cursive;margin-left:3px;margin-right:3px;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__Button",
  componentId: "sc-1szbvr-16"
})(["width:", ";height:", ";border-radius:80px;font-size:", ";font-weight:500;display:flex;text-align:center;align-items:center;justify-content:center;margin-left:80px;color:black;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";&:hover{color:white;background:orange;}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? '100px' : '120px';
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? '40px' : '40px';
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? '12px' : '12px';
}, function (_ref4) {
  var alt = _ref4.alt;
  return alt ? 'linear-gradient(270deg, yellow 0%, orange 100%)' : 'linear-gradient(270deg, yellow 0%, orange 100%)';
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled ? '.5' : '1';
});
var ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "AchievementStyle__ListIcon",
  componentId: "sc-1szbvr-17"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "AchievementStyle__CarouselContainer",
  componentId: "sc-1szbvr-18"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__CarouselMobileScrollNode",
  componentId: "sc-1szbvr-19"
})(["@media ", "{display:flex;min-width:", "}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref6) {
  var _final = _ref6["final"];
  return _final ? "120%;" : "min-content";
});
var CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__CarouselItem",
  componentId: "sc-1szbvr-20"
})(["background:#0F1624;border-radius:3px;max-width:300px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.active === props.index ? "opacity: 1" : "opacity: 0.5";
});
var CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h4.withConfig({
  displayName: "AchievementStyle__CarouselItemTitle",
  componentId: "sc-1szbvr-21"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.svg.withConfig({
  displayName: "AchievementStyle__CarouselItemImg",
  componentId: "sc-1szbvr-22"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "AchievementStyle__CarouselItemText",
  componentId: "sc-1szbvr-23"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__CarouselButtons",
  componentId: "sc-1szbvr-24"
})(["width:400px;display:none;@media ", "{display:flex;margin-bottom:48px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "AchievementStyle__CarouselButton",
  componentId: "sc-1szbvr-25"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], function (props) {
  return props.active === props.index ? "1" : ".33";
}, function (props) {
  return props.active === props.index ? "scale(1.6)" : "scale(1)";
});
var CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AchievementStyle__CarouselButtonDot",
  componentId: "sc-1szbvr-26"
})(["background-color:white;border-radius:100%;margin:auto;width:5px;height:5px;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNoaWV2ZW1lbnRzL0FjaGlldmVtZW50U3R5bGUuanMiXSwibmFtZXMiOlsiR3JpZENvbnRhaW5lciIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtIiwiTGlzdCIsImxnIiwibWQiLCJMaXN0Q29udGFpbmVyIiwiTGlzdFRpdGxlIiwiSW1hZ2UiLCJMaXN0UGFyYWdyYXBoIiwiUHJvZ3Jlc3NCYXIiLCJMaXN0SXRlbSIsIkdyaWQiLCJSb3ciLCJDb2wiLCJzaXplIiwiSXQiLCJDYXJvdXNlbENvbnRhaW5lIiwiY29sb3JlZExpbmUiLCJJeSIsIklhIiwiQnV0dG9uIiwiYWx0IiwiZGlzYWJsZWQiLCJMaXN0SWNvbiIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiZmluYWwiLCJDYXJvdXNlbEl0ZW0iLCJhY3RpdmUiLCJpbmRleCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFTyxJQUFNQSxhQUFhLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDhPQVFqQixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FSaUIsQ0FBbkI7QUFnQkEsSUFBTUMsSUFBSSxHQUFHTCxvRUFBSDtBQUFBO0FBQUE7QUFBQSxtTkFNTixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JHLEVBQTVCO0FBQUEsQ0FOQyxFQVVOLFVBQUFMLEtBQUs7QUFBQSxTQUFJ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WDtBQUFBLENBUGMsRUFRWixVQUFDL0IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQzhCLE1BQU4sS0FBaUI5QixLQUFLLENBQUMrQixLQUF2Qiw0QkFBWDtBQUFBLENBUlksQ0FBcEI7QUFlQSxJQUFNTSxpQkFBaUIsR0FBR3RDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1GQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYjczZWJkYTgxYjA2ZDk3YTRjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbnBhZGRpbmc6IDJyZW07XHJcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbmNvbHVtbi1nYXA6IDJyZW07XHJcbnJvdy1nYXA6IDNyZW07XHJcbmJhY2tncm91bmQ6ICMzNjQ1NEY7XHJcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xyXG4gICAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgZ2FwOiA0cHhcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDMycHggMDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgd2lkdGg6MzAwcHg7XHJcblxyXG4gIFxyXG4gIGJhY2tncm91bmQ6YmxhY2s7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogI0ZDQ0QwNDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG5mbGV4OiAxLFxyXG53aWR0aDogMjAwcHgnLFxyXG5oZWlnaHQ6ICcxMDAlJyxcclxucmVzaXplTW9kZTogJ2NvbnRhaW4nLFxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIFxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NCYXIgPSBzdHlsZWQucGBcclxuICBjb2xvcjogeWVsbG93O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgbWF4LXdpZHRoOiAyMDNweDtcclxufVxyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuXHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQ6IGdyZXk7XHJcbmRpc3BsYXk6ZmxleDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDb2wgPSBzdHlsZWQuZGl2YFxyXG5mbGV4OiAkeyhwcm9wcyk9PiBwcm9wcy5zaXplfTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEl0ID0gc3R5bGVkLmRpdmBcclxuZm9udC1zaXplOiAxNXB4O1xyXG5tYXJnaW4tbGVmdDogM3B4O1xyXG5tYXJnaW4tdG9wOjJweDtcclxuZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbENvbnRhaW5lID0gc3R5bGVkLnVsYFxyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgcGFkZGluZzogMHJlbTtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIC8vcmVtb3ZlIHNjcm9sbGJhclxyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIFxyXG4gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IGNvbG9yZWRMaW5lID0gc3R5bGVkLmRpdmBcclxuY29sb3I6IHllbGxvdztcclxuYmFja2dyb3VuZDogI0ZDQ0QwNDtcclxuaGVpZ2h0OiA1O1xyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IEl5ID0gc3R5bGVkLmRpdmBcclxuZm9udC1zaXplOiAxMnB4O1xyXG5jb2xvcjojRkNDRDA0O1xyXG5mb250LWZhbWlseTpSYWxld2F5O1xyXG5tYXJnaW4tcmlnaHQ6IDNweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IElhID0gc3R5bGVkLmRpdmBcclxuZm9udC1zaXplOiAxMXB4O1xyXG5jb2xvcjp3aGl0ZTtcclxudGV4dC1hbGlnbjoganVzdGlmeTtcclxuZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxubWFyZ2luLWxlZnQ6M3B4O1xyXG5tYXJnaW4tcmlnaHQ6M3B4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzEwMHB4JyA6ICcxMjBweCd9O1xyXG4gIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzQwcHgnIDogJzQwcHgnfTtcclxuICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzEycHgnIDogJzEycHgnfTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB5ZWxsb3cgMCUsIG9yYW5nZSAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgeWVsbG93IDAlLCBvcmFuZ2UgMTAwJSknfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcclxuICB9XHJcblxyXG5cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SWNvbiA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC51bGBcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xyXG4gIHBhZGRpbmc6IDByZW07XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICY6Zmlyc3Qtb2YtdHlwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAvL3JlbW92ZSBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICBcclxuICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcclxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSA9IHN0eWxlZC5kaXZgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6ICR7KHsgZmluYWwgfSkgPT4gZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDEyNHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBFMTMxRjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgXHJcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBvcGFjaXR5OiAxYCA6IGBvcGFjaXR5OiAwLjVgfTsgXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBUaGlzIGdyYWRpZW50IGlzIGRpZmZlcmVudCBkdWUgdG8gdGhlIHNpemUgb2YgdGhlIFRpdGxlIGNvbnRhaW5lciwgaXQgbXVzdCB0cmFuc2l0aW9uIHNvb25lciB0byBiZSB2aXNpYmxlIG9uIHRoZSB0ZXh0ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgMzAuMTUlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXHJcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICB9XHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgXHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGAxYCA6IGAuMzNgfTtcclxuICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYHNjYWxlKDEuNilgIDogYHNjYWxlKDEpYH07XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbkRvdCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuYFxyXG4iXSwic291cmNlUm9vdCI6IiJ9