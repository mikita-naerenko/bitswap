"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[singleCoinPage]",{

/***/ "./src/pages/[singleCoinPage].js":
/*!***************************************!*\
  !*** ./src/pages/[singleCoinPage].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar SingleCoinPage = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    // const { data, isLoading, isError } = useGetCryptoDetailsQuery(query.singleCoinPage);\n    var interval = \"d1\";\n    var _useGetCryptoHistoryQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoHistoryQuery)(query.singleCoinPage, interval), data = _useGetCryptoHistoryQuery.data, isLoading = _useGetCryptoHistoryQuery.isLoading, isError = _useGetCryptoHistoryQuery.isError;\n    console.log(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(query.singleCoinPage));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Single Coin Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(SingleCoinPage, \"n8q0weatYPhX0mhfk7qWKTmK1dU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        _components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoHistoryQuery\n    ];\n});\n_c = SingleCoinPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCoinPage);\nvar _c;\n$RefreshReg$(_c, \"SingleCoinPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NpbmdsZUNvaW5QYWdlXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNFO0FBQ1k7QUFDWjtBQUNQO0FBQ29EO0FBRXZGLElBQU1PLGlCQUFpQjs7SUFDbkIsSUFBTSxRQUFVUCxzREFBU0EsR0FBbEJRO0lBQ1AsSUFBTUMsV0FBV04sd0RBQVdBO0lBQzVCLHVGQUF1RjtJQUN2RixJQUFNTyxXQUFXO0lBQ2pCLElBQXFDSiw0QkFBQUEseUVBQXdCQSxDQUFDRSxNQUFNRyxnQkFBZ0JELFdBQTVFRSxPQUE2Qk4sMEJBQTdCTSxNQUFNQyxZQUF1QlAsMEJBQXZCTyxXQUFXQyxVQUFZUiwwQkFBWlE7SUFDekJDLFFBQVFDLElBQUlKO0lBQ1pSLGdEQUFTQSxDQUFDO1FBQ05LLFNBQVNQLGtFQUFjQSxDQUFDTSxNQUFNRztJQUNsQyxHQUFFLEVBQUU7SUFFSixxQkFDSTs7MEJBQ0ksOERBQUNWLDBEQUFNQTs7Ozs7MEJBRVAsOERBQUNnQjswQkFBRzs7Ozs7Ozs7QUFLaEI7R0FwQk1WOztRQUNjUCxrREFBU0E7UUFDUkcsb0RBQVdBO1FBR1NHLHFFQUF3QkE7OztLQUwzREM7QUFzQk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tzaW5nbGVDb2luUGFnZV0uanM/MjkwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQmFyJztcbmltcG9ydCB7IHNldEN1cnJlbnRQYWdlIH0gZnJvbSAnLi4vcmVkdXgvQXBwQmFyU2xpY2UnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5LCB1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL2FwaSc7XG5cbmNvbnN0IFNpbmdsZUNvaW5QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgLy8gY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IHVzZUdldENyeXB0b0RldGFpbHNRdWVyeShxdWVyeS5zaW5nbGVDb2luUGFnZSk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSAnZDEnO1xuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkocXVlcnkuc2luZ2xlQ29pblBhZ2UsIGludGVydmFsKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50UGFnZShxdWVyeS5zaW5nbGVDb2luUGFnZSkpXG4gICAgfSxbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QXBwQmFyLz5cblxuICAgICAgICAgICAgPGgxPlNpbmdsZSBDb2luIFBhZ2U8L2gxPlxuXG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvaW5QYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBcHBCYXIiLCJzZXRDdXJyZW50UGFnZSIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5IiwidXNlR2V0Q3J5cHRvSGlzdG9yeVF1ZXJ5IiwiU2luZ2xlQ29pblBhZ2UiLCJxdWVyeSIsImRpc3BhdGNoIiwiaW50ZXJ2YWwiLCJzaW5nbGVDb2luUGFnZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiY29uc29sZSIsImxvZyIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[singleCoinPage].js\n"));

/***/ })

});