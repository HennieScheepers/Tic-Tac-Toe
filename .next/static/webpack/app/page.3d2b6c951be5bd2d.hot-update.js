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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction checkGame(gameTracker) {\n    if (gameTracker[0].symbol !== null && gameTracker[0].symbol === gameTracker[1].symbol && gameTracker[1].symbol === gameTracker[2].symbol) {\n        return \"\".concat(gameTracker[0].symbol, \" is the winner!\");\n    }\n    if (gameTracker[0].symbol !== null && gameTracker[0].symbol === gameTracker[3].symbol && gameTracker[3].symbol === gameTracker[6].symbol) {\n        return \"\".concat(gameTracker[0].symbol, \" is the winner!\");\n    }\n    if (gameTracker[1].symbol !== null && gameTracker[1].symbol === gameTracker[4].symbol && gameTracker[4].symbol === gameTracker[7].symbol) {\n        return \"\".concat(gameTracker[1].symbol, \" is the winner!\");\n    }\n    if (gameTracker[2].symbol !== null && gameTracker[2].symbol === gameTracker[5].symbol && gameTracker[5].symbol === gameTracker[8].symbol) {\n        return \"\".concat(gameTracker[2].symbol, \" is the winner!\");\n    }\n    if (gameTracker[3].symbol !== null && gameTracker[3].symbol === gameTracker[4].symbol && gameTracker[4].symbol === gameTracker[5].symbol) {\n        return \"\".concat(gameTracker[3].symbol, \" is the winner!\");\n    }\n    if (gameTracker[6].symbol !== null && gameTracker[6].symbol === gameTracker[7].symbol && gameTracker[7].symbol === gameTracker[8].symbol) {\n        return \"\".concat(gameTracker[6].symbol, \" is the winner!\");\n    }\n    if (gameTracker[0].symbol !== null && gameTracker[0].symbol === gameTracker[4].symbol && gameTracker[4].symbol === gameTracker[8].symbol) {\n        return \"\".concat(gameTracker[0].symbol, \" is the winner!\");\n    }\n    if (gameTracker[2].symbol !== null && gameTracker[2].symbol === gameTracker[4].symbol && gameTracker[4].symbol === gameTracker[6].symbol) {\n        return \"\".concat(gameTracker[2].symbol, \" is the winner!\");\n    } else {\n        return \"It's a draw\";\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkGame);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssUUFDMUJELFdBQVcsQ0FBQyxFQUFFLENBQUNDLE1BQU0sS0FBS0QsV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsTUFBTSxJQUMvQ0QsV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsTUFBTSxLQUFLRCxXQUFXLENBQUMsRUFBRSxDQUFDQyxNQUFNLEVBQy9DO1FBQ0EsT0FBTyxHQUF5QixPQUF0QkQsV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsTUFBTSxFQUFDO0lBQ2xDLE9BQU87UUFDTCxPQUFRO0lBQ1Y7QUFDRjtBQUVBLCtEQUFlRixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9oZWxwZXJzLmpzPzQ1MzkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2hlY2tHYW1lKGdhbWVUcmFja2VyKSB7XG4gIGlmIChcbiAgICBnYW1lVHJhY2tlclswXS5zeW1ib2wgIT09IG51bGwgJiZcbiAgICBnYW1lVHJhY2tlclswXS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzFdLnN5bWJvbCAmJlxuICAgIGdhbWVUcmFja2VyWzFdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbMl0uc3ltYm9sXG4gICkge1xuICAgIHJldHVybiBgJHtnYW1lVHJhY2tlclswXS5zeW1ib2x9IGlzIHRoZSB3aW5uZXIhYDtcbiAgfVxuICBpZiAoXG4gICAgZ2FtZVRyYWNrZXJbMF0uc3ltYm9sICE9PSBudWxsICYmXG4gICAgZ2FtZVRyYWNrZXJbMF0uc3ltYm9sID09PSBnYW1lVHJhY2tlclszXS5zeW1ib2wgJiZcbiAgICBnYW1lVHJhY2tlclszXS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzZdLnN5bWJvbFxuICApIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbMF0uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKFxuICAgIGdhbWVUcmFja2VyWzFdLnN5bWJvbCAhPT0gbnVsbCAmJlxuICAgIGdhbWVUcmFja2VyWzFdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbNF0uc3ltYm9sICYmXG4gICAgZ2FtZVRyYWNrZXJbNF0uc3ltYm9sID09PSBnYW1lVHJhY2tlcls3XS5zeW1ib2xcbiAgKSB7XG4gICAgcmV0dXJuIGAke2dhbWVUcmFja2VyWzFdLnN5bWJvbH0gaXMgdGhlIHdpbm5lciFgO1xuICB9XG4gIGlmIChcbiAgICBnYW1lVHJhY2tlclsyXS5zeW1ib2wgIT09IG51bGwgJiZcbiAgICBnYW1lVHJhY2tlclsyXS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzVdLnN5bWJvbCAmJlxuICAgIGdhbWVUcmFja2VyWzVdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbOF0uc3ltYm9sXG4gICkge1xuICAgIHJldHVybiBgJHtnYW1lVHJhY2tlclsyXS5zeW1ib2x9IGlzIHRoZSB3aW5uZXIhYDtcbiAgfVxuICBpZiAoXG4gICAgZ2FtZVRyYWNrZXJbM10uc3ltYm9sICE9PSBudWxsICYmXG4gICAgZ2FtZVRyYWNrZXJbM10uc3ltYm9sID09PSBnYW1lVHJhY2tlcls0XS5zeW1ib2wgJiZcbiAgICBnYW1lVHJhY2tlcls0XS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzVdLnN5bWJvbFxuICApIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbM10uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH1cbiAgaWYgKFxuICAgIGdhbWVUcmFja2VyWzZdLnN5bWJvbCAhPT0gbnVsbCAmJlxuICAgIGdhbWVUcmFja2VyWzZdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbN10uc3ltYm9sICYmXG4gICAgZ2FtZVRyYWNrZXJbN10uc3ltYm9sID09PSBnYW1lVHJhY2tlcls4XS5zeW1ib2xcbiAgKSB7XG4gICAgcmV0dXJuIGAke2dhbWVUcmFja2VyWzZdLnN5bWJvbH0gaXMgdGhlIHdpbm5lciFgO1xuICB9XG4gIGlmIChcbiAgICBnYW1lVHJhY2tlclswXS5zeW1ib2wgIT09IG51bGwgJiZcbiAgICBnYW1lVHJhY2tlclswXS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzRdLnN5bWJvbCAmJlxuICAgIGdhbWVUcmFja2VyWzRdLnN5bWJvbCA9PT0gZ2FtZVRyYWNrZXJbOF0uc3ltYm9sXG4gICkge1xuICAgIHJldHVybiBgJHtnYW1lVHJhY2tlclswXS5zeW1ib2x9IGlzIHRoZSB3aW5uZXIhYDtcbiAgfVxuICBpZiAoXG4gICAgZ2FtZVRyYWNrZXJbMl0uc3ltYm9sICE9PSBudWxsICYmXG4gICAgZ2FtZVRyYWNrZXJbMl0uc3ltYm9sID09PSBnYW1lVHJhY2tlcls0XS5zeW1ib2wgJiZcbiAgICBnYW1lVHJhY2tlcls0XS5zeW1ib2wgPT09IGdhbWVUcmFja2VyWzZdLnN5bWJvbFxuICApIHtcbiAgICByZXR1cm4gYCR7Z2FtZVRyYWNrZXJbMl0uc3ltYm9sfSBpcyB0aGUgd2lubmVyIWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBJdCdzIGEgZHJhd2A7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tHYW1lO1xuIl0sIm5hbWVzIjpbImNoZWNrR2FtZSIsImdhbWVUcmFja2VyIiwic3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/helpers.js\n"));

/***/ })

});