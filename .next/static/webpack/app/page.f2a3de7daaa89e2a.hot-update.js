"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/helpers.js":
/*!************************!*\
  !*** ./app/helpers.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction checkGame(gameTracker) {\n    const condition1 = gameTracker[0].symbol !== null && gameTracker[0].symbol === gameTracker[1].symbol && gameTracker[1].symbol === gameTracker[2].symbol;\n    const condition2 = gameTracker[0].symbol !== null && gameTracker[0].symbol === gameTracker[3].symbol && gameTracker[3].symbol === gameTracker[6].symbol;\n    const condition3 = gameTracker[1].symbol !== null && gameTracker[1].symbol === gameTracker[4].symbol && gameTracker[4].symbol === gameTracker[7].symbol;\n    const condition4 = gameTracker[2].symbol !== null && gameTracker[2].symbol === gameTracker[5].symbol && gameTracker[5].symbol === gameTracker[8].symbol;\n    const condition5 = gameTracker[3].symbol !== null && gameTracker[3].symbol === gameTracker[4].symbol && gameTracker[4].symbol === gameTracker[5].symbol;\n    const condition6 = gameTracker[6].symbol !== null && gameTracker[6].symbol === gameTracker[7].symbol && gameTracker[7].symbol === gameTracker[8].symbol;\n    const condition7 = gameTracker[0].symbol !== null && gameTracker[0].symbol === gameTracker[4].symbol && gameTracker[4].symbol === gameTracker[8].symbol;\n    if (condition1) {\n        return \"\".concat(gameTracker[0].symbol, \" is the winner!\");\n    }\n    if (condition2) {\n        return \"\".concat(gameTracker[0].symbol, \" is the winner!\");\n    }\n    if (condition3) {\n        return \"\".concat(gameTracker[1].symbol, \" is the winner!\");\n    }\n    if (condition4) {\n        return \"\".concat(gameTracker[2].symbol, \" is the winner!\");\n    }\n    if (condition5) {\n        return \"\".concat(gameTracker[3].symbol, \" is the winner!\");\n    }\n    if (condition6) {\n        return \"\".concat(gameTracker[6].symbol, \" is the winner!\");\n    }\n    if (condition7) {\n        return \"\".concat(gameTracker[0].symbol, \" is the winner!\");\n    }\n    if (gameTracker[2].symbol !== null && gameTracker[2].symbol === gameTracker[4].symbol && gameTracker[4].symbol === gameTracker[6].symbol) {\n        return \"\".concat(gameTracker[2].symbol, \" is the winner!\");\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkGame);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xDO0lBQ0EsSUFBSU0sWUFBWTtRQUNkLE9BQU8sR0FBeUIsT0FBdEJSLFdBQVcsQ0FBQyxFQUFFLENBQUNFLE1BQU0sRUFBQztJQUNsQztJQUNBLElBQ0VGLFdBQVcsQ0FBQyxFQUFFLENBQUNFLE1BQU0sS0FBSyxRQUMxQkYsV0FBVyxDQUFDLEVBQUUsQ0FBQ0UsTUFBTSxLQUFLRixXQUFXLENBQUMsRUFBRSxDQUFDRSxNQUFNLElBQy9DRixXQUFXLENBQUMsRUFBRSxDQUFDRSxNQUFNLEtBQUtGLFdBQVcsQ0FBQyxFQUFFLENBQUNFLE1BQU0sRUFDL0M7UUFDQSxPQUFPLEdBQXlCLE9BQXRCRixXQUFXLENBQUMsRUFBRSxDQUFDRSxNQUFNLEVBQUM7SUFDbEM7QUFDRjtBQUVBLCtEQUFlSCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9oZWxwZXJzLmpzPzQ1MzkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2hlY2tHYW1lKGdhbWVUcmFja2VyKSB7XG4gIGNvbnN0IGNvbmRpdGlvbjEgPVxuICAgIGdhbWVUcmFja2VyWzBdLnN5bWJvbCAhPT0gbnVsbCAmJlxuICAgIGdhbWVUcmFja2VyWzBdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbMV0uc3ltYm9sICYmXG4gICAgZ2FtZVRyYWNrZXJbMV0uc3ltYm9sID09PSBnYW1lVHJhY2tlclsyXS5zeW1ib2w7XG5cbiAgY29uc3QgY29uZGl0aW9uMiA9XG4gICAgZ2FtZVRyYWNrZXJbMF0uc3ltYm9sICE9PSBudWxsICYmXG4gICAgZ2FtZVRyYWNrZXJbMF0uc3ltYm9sID09PSBnYW1lVHJhY2tlclszXS5zeW1ib2wgJiZcbiAgICBnYW1lVHJhY2tlclszXS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzZdLnN5bWJvbDtcblxuICBjb25zdCBjb25kaXRpb24zID1cbiAgICBnYW1lVHJhY2tlclsxXS5zeW1ib2wgIT09IG51bGwgJiZcbiAgICBnYW1lVHJhY2tlclsxXS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzRdLnN5bWJvbCAmJlxuICAgIGdhbWVUcmFja2VyWzRdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbN10uc3ltYm9sO1xuXG4gIGNvbnN0IGNvbmRpdGlvbjQgPVxuICAgIGdhbWVUcmFja2VyWzJdLnN5bWJvbCAhPT0gbnVsbCAmJlxuICAgIGdhbWVUcmFja2VyWzJdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbNV0uc3ltYm9sICYmXG4gICAgZ2FtZVRyYWNrZXJbNV0uc3ltYm9sID09PSBnYW1lVHJhY2tlcls4XS5zeW1ib2w7XG5cbiAgY29uc3QgY29uZGl0aW9uNSA9XG4gICAgZ2FtZVRyYWNrZXJbM10uc3ltYm9sICE9PSBudWxsICYmXG4gICAgZ2FtZVRyYWNrZXJbM10uc3ltYm9sID09PSBnYW1lVHJhY2tlcls0XS5zeW1ib2wgJiZcbiAgICBnYW1lVHJhY2tlcls0XS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzVdLnN5bWJvbDtcblxuICBjb25zdCBjb25kaXRpb242ID1cbiAgICBnYW1lVHJhY2tlcls2XS5zeW1ib2wgIT09IG51bGwgJiZcbiAgICBnYW1lVHJhY2tlcls2XS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzddLnN5bWJvbCAmJlxuICAgIGdhbWVUcmFja2VyWzddLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbOF0uc3ltYm9sO1xuXG4gIGNvbnN0IGNvbmRpdGlvbjcgPVxuICAgIGdhbWVUcmFja2VyWzBdLnN5bWJvbCAhPT0gbnVsbCAmJlxuICAgIGdhbWVUcmFja2VyWzBdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbNF0uc3ltYm9sICYmXG4gICAgZ2FtZVRyYWNrZXJbNF0uc3ltYm9sID09PSBnYW1lVHJhY2tlcls4XS5zeW1ib2w7XG5cbiAgaWYgKGNvbmRpdGlvbjEpIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbMF0uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKGNvbmRpdGlvbjIpIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbMF0uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKGNvbmRpdGlvbjMpIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbMV0uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKGNvbmRpdGlvbjQpIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbMl0uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKGNvbmRpdGlvbjUpIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbM10uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKGNvbmRpdGlvbjYpIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbNl0uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKGNvbmRpdGlvbjcpIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbMF0uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKFxuICAgIGdhbWVUcmFja2VyWzJdLnN5bWJvbCAhPT0gbnVsbCAmJlxuICAgIGdhbWVUcmFja2VyWzJdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbNF0uc3ltYm9sICYmXG4gICAgZ2FtZVRyYWNrZXJbNF0uc3ltYm9sID09PSBnYW1lVHJhY2tlcls2XS5zeW1ib2xcbiAgKSB7XG4gICAgcmV0dXJuIGAke2dhbWVUcmFja2VyWzJdLnN5bWJvbH0gaXMgdGhlIHdpbm5lciFgO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrR2FtZTtcbiJdLCJuYW1lcyI6WyJjaGVja0dhbWUiLCJnYW1lVHJhY2tlciIsImNvbmRpdGlvbjEiLCJzeW1ib2wiLCJjb25kaXRpb24yIiwiY29uZGl0aW9uMyIsImNvbmRpdGlvbjQiLCJjb25kaXRpb241IiwiY29uZGl0aW9uNiIsImNvbmRpdGlvbjciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/helpers.js\n"));

/***/ })

});