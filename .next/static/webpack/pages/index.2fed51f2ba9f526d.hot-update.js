"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Pagination.js":
/*!**************************************!*\
  !*** ./src/components/Pagination.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicPagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Pagination */ \"./node_modules/@mui/material/Pagination/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/MainCryptoListSlice */ \"./src/redux/MainCryptoListSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BasicPagination() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var handlePageChange = function(event, page) {\n        dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_2__.setOffset)((Number(page) - 1) * 10));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        spacing: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            count: 100,\n            onChange: handlePageChange,\n            color: \"primary\"\n        }, void 0, false, {\n            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Pagination.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Pagination.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(BasicPagination, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = BasicPagination;\nvar _c;\n$RefreshReg$(_c, \"BasicPagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNWO0FBQ0U7QUFDZTtBQUcxQyxTQUFTSTs7SUFFcEIsSUFBTUMsV0FBV0gsd0RBQVdBO0lBRTVCLElBQU1JLG1CQUFtQixTQUFDQyxPQUFPQztRQUM3QkgsU0FBU0YscUVBQVNBLENBQUMsQ0FBQ00sT0FBT0QsUUFBUSxLQUFLO0lBQzFDO0lBQ0oscUJBQ0UsOERBQUNQLDJEQUFLQTtRQUFDUyxTQUFTO2tCQUNaLDRFQUFDVixnRUFBVUE7WUFBQ1csT0FBTztZQUFLQyxVQUFVTjtZQUFrQk8sT0FBTTs7Ozs7Ozs7Ozs7QUFHbEU7R0Fad0JUOztRQUVIRixvREFBV0E7OztLQUZSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzPzRhOGIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbXVpL21hdGVyaWFsL1BhZ2luYXRpb24nO1xuaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRPZmZzZXQgfSBmcm9tICcuLi9yZWR1eC9NYWluQ3J5cHRvTGlzdFNsaWNlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1BhZ2luYXRpb24oKSB7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGV2ZW50LCBwYWdlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldE9mZnNldCgoTnVtYmVyKHBhZ2UpIC0gMSkgKiAxMCkpO1xuICAgICAgfTtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXsxMDB9IG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfSBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59Il0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJTdGFjayIsInVzZURpc3BhdGNoIiwic2V0T2Zmc2V0IiwiQmFzaWNQYWdpbmF0aW9uIiwiZGlzcGF0Y2giLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJwYWdlIiwiTnVtYmVyIiwic3BhY2luZyIsImNvdW50Iiwib25DaGFuZ2UiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pagination.js\n"));

/***/ })

});