self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var _jsxFileName = "C:\\Users\\HP\\Desktop\\portfolio_website-STARTER\\src\\components\\Hero\\Hero.js",
    _this = undefined;







var saveFile = function saveFile() {
  file_saver__WEBPACK_IMPORTED_MODULE_5___default().saveAs(process.env.REACT_APP_CLIENT_URL + "../../asset/Resume.pdf", "AmishaSinha_Resume.pdf");
};

var Hero = function Hero(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    row: true,
    nopadding: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      main: true,
      center: true,
      color: "black",
      children: "Hi I'm Amisha Sinha"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
      color: "black",
      children: ["I am Software Engineer with experience in Order Management System and E-Commerce implementations along with good working experience in consulting skills with the ability to identify issues in the process flow and develop solutions for OMS Clients.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 6
      }, _this), "I aspire to pursue a Master\u2019s in Computer Science to learn and enhance my knowledge and skills in various aspects of algorithm development and Machine Learning concepts. Post Masters, I intend to implement my acquired knowledge while working with interdisciplinary IT organizations as an expert in Data Science tools. In the long run, I want to develop expert system innovative prediction tools to assist the education and healthcare sectors worldwide."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
      onClick: saveFile,
      children: "Download Resume"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 2
  }, _this);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInNhdmVGaWxlIiwiRmlsZVNhdmVyIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9DTElFTlRfVVJMIiwiSGVybyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkMsMERBQUEsQ0FDRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQUFaLEdBQW1DLHdCQURyQyxFQUVFLHdCQUZGO0FBSUMsQ0FMSDs7QUFRQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsc0JBQ1osOERBQUMsNkRBQUQ7QUFBUyxPQUFHLE1BQVo7QUFBYSxhQUFTLE1BQXRCO0FBQUEsNEJBR0ksOERBQUMsa0VBQUQ7QUFBYyxVQUFJLE1BQWxCO0FBQW1CLFlBQU0sTUFBekI7QUFBMEIsV0FBSyxFQUFDLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFPSSw4REFBQyxpRUFBRDtBQUFhLFdBQUssRUFBQyxPQUFuQjtBQUFBLHlSQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQWdCSSw4REFBQyxvRUFBRDtBQUFRLGFBQU8sRUFBR04sUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFiOztLQUFNSyxJO0FBd0JOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI4ODRjZmIwMGEyZmNjNjA2NjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgTGVmdFNlY3Rpb24gfSBmcm9tICcuL0hlcm9TdHlsZXMnO1xuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcbmNvbnN0IHNhdmVGaWxlID0gKCkgPT4ge1xuICBGaWxlU2F2ZXIuc2F2ZUFzKFxuICAgIHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DTElFTlRfVVJMICsgXCIuLi8uLi9hc3NldC9SZXN1bWUucGRmXCIsXG4gICAgXCJBbWlzaGFTaW5oYV9SZXN1bWUucGRmXCJcbiAgKTtcbiAgfVxuXG5cbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IChcbiA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxuICAgXG4gICBcbiAgICAgPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlciBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgSGkgSSdtIFxuICAgICAgIEFtaXNoYSBTaW5oYVxuICAgICA8L1NlY3Rpb25UaXRsZT5cbiAgICAgPFNlY3Rpb25UZXh0IGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgSSBhbSBTb2Z0d2FyZSBFbmdpbmVlciB3aXRoIGV4cGVyaWVuY2UgaW4gT3JkZXIgTWFuYWdlbWVudCBTeXN0ZW0gYW5kIEUtQ29tbWVyY2UgaW1wbGVtZW50YXRpb25zIGFsb25nIHdpdGggZ29vZCB3b3JraW5nIGV4cGVyaWVuY2UgaW4gY29uc3VsdGluZyBza2lsbHMgd2l0aCB0aGUgYWJpbGl0eSB0byBpZGVudGlmeSBpc3N1ZXMgaW4gdGhlIHByb2Nlc3MgZmxvdyBhbmQgZGV2ZWxvcCBzb2x1dGlvbnMgZm9yIE9NUyBDbGllbnRzLlxuICAgICA8YnIvPlxuICAgICBJIGFzcGlyZSB0byBwdXJzdWUgYSBNYXN0ZXLigJlzIGluIENvbXB1dGVyIFNjaWVuY2UgdG8gbGVhcm4gYW5kIGVuaGFuY2UgbXkga25vd2xlZGdlIGFuZCBza2lsbHMgaW4gdmFyaW91cyBhc3BlY3RzIFxub2YgYWxnb3JpdGhtIGRldmVsb3BtZW50IGFuZCBNYWNoaW5lIExlYXJuaW5nIGNvbmNlcHRzLiBQb3N0IE1hc3RlcnMsIEkgaW50ZW5kIHRvIGltcGxlbWVudCBteSBhY3F1aXJlZCBcbmtub3dsZWRnZSB3aGlsZSB3b3JraW5nIHdpdGggaW50ZXJkaXNjaXBsaW5hcnkgSVQgb3JnYW5pemF0aW9ucyBhcyBhbiBleHBlcnQgaW4gRGF0YSBTY2llbmNlIHRvb2xzLiBJbiB0aGUgbG9uZyBydW4sIFxuSSB3YW50IHRvIGRldmVsb3AgZXhwZXJ0IHN5c3RlbSBpbm5vdmF0aXZlIHByZWRpY3Rpb24gdG9vbHMgdG8gYXNzaXN0IHRoZSBlZHVjYXRpb24gYW5kIGhlYWx0aGNhcmUgc2VjdG9ycyB3b3JsZHdpZGUuXG4gICAgIDwvU2VjdGlvblRleHQ+XG4gICAgIFxuICAgICA8QnV0dG9uIG9uQ2xpY2s9IHtzYXZlRmlsZX0+RG93bmxvYWQgUmVzdW1lPC9CdXR0b24+XG5cbiAgIFxuXG4gPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybzsiXSwic291cmNlUm9vdCI6IiJ9