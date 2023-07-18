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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var _components_SingleCoinCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SingleCoinCard */ \"./src/components/SingleCoinCard.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SingleCoinPage = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var currentCoin = query.singleCoinPage ||  true && localStorage.getItem(\"currentCoin\");\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {});\n    var _useGetCryptoDetailsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoDetailsQuery)(currentCoin), // Fetch data for selected coin\n    detailsData = _useGetCryptoDetailsQuery.data, detailsIsLoading = _useGetCryptoDetailsQuery.isLoading, detailsIsError = _useGetCryptoDetailsQuery.isError;\n    var _useGetCryptoHistoryQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoHistoryQuery)({\n        id: query.singleCoinPage,\n        interval: \"d1\"\n    }), // Fetch history for selected coin\n    historyData = _useGetCryptoHistoryQuery.data, historyIsLoading = _useGetCryptoHistoryQuery.isLoading, historyIsError = _useGetCryptoHistoryQuery.isError;\n    // console.log(historyData);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(currentCoin));\n        if (currentCoin) {\n            localStorage.setItem(\"currentCoin\", currentCoin);\n        }\n    }, [\n        currentCoin\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Single Coin Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCoinCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                data: detailsData ? detailsData : null\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(SingleCoinPage, \"vCxXdZVX6heJvqhyn0hKSg88Fjo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        _components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoDetailsQuery,\n        _components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoHistoryQuery\n    ];\n});\n_c = SingleCoinPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCoinPage);\nvar _c;\n$RefreshReg$(_c, \"SingleCoinPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NpbmdsZUNvaW5QYWdlXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNZO0FBQ0M7QUFDcEI7QUFDb0Q7QUFDN0I7QUFHMUQsSUFBTVMsaUJBQWlCOztJQUNuQixJQUFNLFFBQVVULHNEQUFTQSxHQUFsQlU7SUFDUCxJQUFNQyxjQUFjRCxNQUFNRSxrQkFBbUIsS0FBa0IsSUFBZUMsYUFBYUMsUUFBUTtJQUNuRyxJQUFNQyxXQUFXWix3REFBV0E7SUFDNUJFLGdEQUFTQSxDQUFDLFlBRVY7SUFDQSxJQUtNQyw0QkFBQUEseUVBQXdCQSxDQUFDSyxjQUo3QiwrQkFBK0I7SUFDdkJLLGNBR0pWLDBCQUhGVyxNQUNBQyxtQkFFRVosMEJBRkZZLFdBQ0FFLGlCQUNFZCwwQkFERmM7SUFHRixJQUtJYiw0QkFBQUEseUVBQXdCQSxDQUFDO1FBQUNlLElBQUlaLE1BQU1FO1FBQWdCVyxVQUFVO0lBQUksSUFKcEUsa0NBQWtDO0lBQzVCQyxjQUdKakIsMEJBSEZVLE1BQ0FDLG1CQUVFWCwwQkFGRlcsV0FDQUUsaUJBQ0ViLDBCQURGYTtJQUVGLDRCQUE0QjtJQUM1QmYsZ0RBQVNBLENBQUM7UUFDUlUsU0FBU2Isa0VBQWNBLENBQUNTO1FBQ3hCLElBQUlBLGFBQWE7WUFDZkUsYUFBYWMsUUFBUSxlQUFlaEI7UUFDdEM7SUFDRixHQUFHO1FBQUNBO0tBQVk7SUFFbEIscUJBQ0k7OzBCQUNJLDhEQUFDViwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDMkI7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ3BCLGtFQUFjQTtnQkFBQ1MsTUFBTUQsY0FBY0EsY0FBYzs7Ozs7Ozs7QUFNOUQ7R0F2Q01QOztRQUNjVCxrREFBU0E7UUFFUkcsb0RBQVdBO1FBU3RCRyxxRUFBd0JBO1FBT3hCQyxxRUFBd0JBOzs7S0FuQjVCRTtBQXlDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3NpbmdsZUNvaW5QYWdlXS5qcz8yOTBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBCYXInO1xuaW1wb3J0IHsgc2V0Q3VycmVudFBhZ2UgfSBmcm9tICcuLi9yZWR1eC9BcHBCYXJTbGljZSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5LCB1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL2FwaSc7XG5pbXBvcnQgU2luZ2xlQ29pbkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TaW5nbGVDb2luQ2FyZCc7XG5cblxuY29uc3QgU2luZ2xlQ29pblBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGN1cnJlbnRDb2luID0gcXVlcnkuc2luZ2xlQ29pblBhZ2UgfHwgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50Q29pbicpKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIFxuICAgIH0pXG4gICAgY29uc3Qge1xuICAgICAgLy8gRmV0Y2ggZGF0YSBmb3Igc2VsZWN0ZWQgY29pblxuICAgICAgICBkYXRhOiBkZXRhaWxzRGF0YSxcbiAgICAgICAgaXNMb2FkaW5nOiBkZXRhaWxzSXNMb2FkaW5nLFxuICAgICAgICBpc0Vycm9yOiBkZXRhaWxzSXNFcnJvcixcbiAgICAgIH0gPSB1c2VHZXRDcnlwdG9EZXRhaWxzUXVlcnkoY3VycmVudENvaW4pO1xuICAgICAgXG4gICAgICBjb25zdCB7XG4gICAgICAgIC8vIEZldGNoIGhpc3RvcnkgZm9yIHNlbGVjdGVkIGNvaW5cbiAgICAgICAgZGF0YTogaGlzdG9yeURhdGEsXG4gICAgICAgIGlzTG9hZGluZzogaGlzdG9yeUlzTG9hZGluZyxcbiAgICAgICAgaXNFcnJvcjogaGlzdG9yeUlzRXJyb3IsXG4gICAgICB9ID0gdXNlR2V0Q3J5cHRvSGlzdG9yeVF1ZXJ5KHtpZDogcXVlcnkuc2luZ2xlQ29pblBhZ2UsIGludGVydmFsOiAnZDEnfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhoaXN0b3J5RGF0YSk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50UGFnZShjdXJyZW50Q29pbikpO1xuICAgICAgICBpZiAoY3VycmVudENvaW4pIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudENvaW4nLCBjdXJyZW50Q29pbik7XG4gICAgICAgIH1cbiAgICAgIH0sIFtjdXJyZW50Q29pbl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxBcHBCYXIvPlxuICAgICAgICAgICAgPGgxPlNpbmdsZSBDb2luIFBhZ2U8L2gxPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8U2luZ2xlQ29pbkNhcmQgZGF0YT17ZGV0YWlsc0RhdGEgPyBkZXRhaWxzRGF0YSA6IG51bGx9Lz5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvaW5QYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBcHBCYXIiLCJzZXRDdXJyZW50UGFnZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJ1c2VHZXRDcnlwdG9EZXRhaWxzUXVlcnkiLCJ1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkiLCJTaW5nbGVDb2luQ2FyZCIsIlNpbmdsZUNvaW5QYWdlIiwicXVlcnkiLCJjdXJyZW50Q29pbiIsInNpbmdsZUNvaW5QYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc3BhdGNoIiwiZGV0YWlsc0RhdGEiLCJkYXRhIiwiaXNMb2FkaW5nIiwiZGV0YWlsc0lzTG9hZGluZyIsImlzRXJyb3IiLCJkZXRhaWxzSXNFcnJvciIsImlkIiwiaW50ZXJ2YWwiLCJoaXN0b3J5RGF0YSIsImhpc3RvcnlJc0xvYWRpbmciLCJoaXN0b3J5SXNFcnJvciIsInNldEl0ZW0iLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[singleCoinPage].js\n"));

/***/ })

});