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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _components_MarketsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MarketsTable */ \"./src/components/MarketsTable.js\");\n/* harmony import */ var _redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/MainCryptoListSlice */ \"./src/redux/MainCryptoListSlice.js\");\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var _components_SingleCoinCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SingleCoinCard */ \"./src/components/SingleCoinCard.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Pagination */ \"./src/components/Pagination.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar SingleCoinPage = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var currentCoin = query.singleCoinPage ||  true && localStorage.getItem(\"currentCoin\");\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    var offset = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }).offset;\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {});\n    var _useGetCryptoDetailsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_8__.useGetCryptoDetailsQuery)(currentCoin), // Fetch data for selected coin\n    detailsData = _useGetCryptoDetailsQuery.data, detailsIsLoading = _useGetCryptoDetailsQuery.isLoading, detailsIsError = _useGetCryptoDetailsQuery.isError;\n    var _useGetMarketsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_8__.useGetMarketsQuery)(currentCoin), // Fetch data for markets by id selected coin\n    marketsList = _useGetMarketsQuery.data, marketsListIsLoading = _useGetMarketsQuery.isLoading, marketsListIsError = _useGetMarketsQuery.isError;\n    console.log(marketsListIsLoading);\n    var marketsListToRender = marketsList && marketsList.data.slice(offset, offset + 10);\n    console.log(marketsListToRender);\n    var _useGetExchangesDetailsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_8__.useGetExchangesDetailsQuery)(currentCoin), // Fetch data for exchange list\n    exchangesList = _useGetExchangesDetailsQuery.data, exchangesListIsLoading = _useGetExchangesDetailsQuery.isLoading, exchangesListIsError = _useGetExchangesDetailsQuery.isError;\n    console.log(exchangesList);\n    var _useGetCryptoHistoryQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_8__.useGetCryptoHistoryQuery)({\n        id: query.singleCoinPage,\n        interval: \"d1\"\n    }), // Fetch history for selected coin\n    historyData = _useGetCryptoHistoryQuery.data, historyIsLoading = _useGetCryptoHistoryQuery.isLoading, historyIsError = _useGetCryptoHistoryQuery.isError;\n    // console.log(historyData);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_5__.setCurrentPage)(currentCoin));\n        if (currentCoin) {\n            localStorage.setItem(\"currentCoin\", currentCoin);\n        }\n    }, [\n        currentCoin\n    ]);\n    var displayMarketsTable = function(marketsList) {\n        if (marketsList) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MarketsTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    currentCoin: currentCoin,\n                    data: marketsList\n                }, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Single Coin Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, _this),\n            detailsData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCoinCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                data: detailsData\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 77,\n                columnNumber: 28\n            }, _this) : null,\n            displayMarketsTable(marketsListToRender)\n        ]\n    }, void 0, true);\n};\n_s(SingleCoinPage, \"BUnsuLfpaAODqYcL40GuhP+HOlo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        _components_api__WEBPACK_IMPORTED_MODULE_8__.useGetCryptoDetailsQuery,\n        _components_api__WEBPACK_IMPORTED_MODULE_8__.useGetMarketsQuery,\n        _components_api__WEBPACK_IMPORTED_MODULE_8__.useGetExchangesDetailsQuery,\n        _components_api__WEBPACK_IMPORTED_MODULE_8__.useGetCryptoHistoryQuery\n    ];\n});\n_c = SingleCoinPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCoinPage);\nvar _c;\n$RefreshReg$(_c, \"SingleCoinPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NpbmdsZUNvaW5QYWdlXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNZO0FBQ0c7QUFDSDtBQUNDO0FBQ3BCO0FBS0E7QUFDdUI7QUFDSDtBQUd2RCxJQUFNYyxpQkFBaUI7O0lBQ25CLElBQU0sUUFBVWQsc0RBQVNBLEdBQWxCZTtJQUNQLElBQU1DLGNBQWNELE1BQU1FLGtCQUFtQixLQUFrQixJQUFlQyxhQUFhQyxRQUFRO0lBQ25HLElBQU1DLFdBQVdmLHdEQUFXQTtJQUM1QixJQUFNLFNBQWFDLHdEQUFXQSxDQUFDZ0IsU0FBQUE7ZUFBU0EsTUFBTUM7T0FBdENGO0lBQ1JkLGdEQUFTQSxDQUFDLFlBQ1Y7SUFDQSxJQUtNQyw0QkFBQUEseUVBQXdCQSxDQUFDUSxjQUo3QiwrQkFBK0I7SUFDdkJRLGNBR0poQiwwQkFIRmlCLE1BQ0FDLG1CQUVFbEIsMEJBRkZrQixXQUNBRSxpQkFDRXBCLDBCQURGb0I7SUFHRixJQUtNbEIsc0JBQUFBLG1FQUFrQkEsQ0FBQ00sY0FKdkIsNkNBQTZDO0lBQ3JDYyxjQUdKcEIsb0JBSEZlLE1BQ0FDLHVCQUVFaEIsb0JBRkZnQixXQUNBRSxxQkFDRWxCLG9CQURGa0I7SUFFRkssUUFBUUMsSUFBSUg7SUFDWixJQUFNSSxzQkFBc0JMLGVBQWVBLFlBQVlMLEtBQUtXLE1BQU1mLFFBQVFBLFNBQVM7SUFDbkZZLFFBQVFDLElBQUlDO0lBQ1osSUFLTXhCLCtCQUFBQSw0RUFBMkJBLENBQUNLLGNBSmhDLCtCQUErQjtJQUN2QnFCLGdCQUdKMUIsNkJBSEZjLE1BQ0FDLHlCQUVFZiw2QkFGRmUsV0FDQUUsdUJBQ0VqQiw2QkFERmlCO0lBRUZLLFFBQVFDLElBQUlHO0lBRWhCLElBS0k1Qiw0QkFBQUEseUVBQXdCQSxDQUFDO1FBQUMrQixJQUFJekIsTUFBTUU7UUFBZ0J3QixVQUFVO0lBQUksSUFKcEUsa0NBQWtDO0lBQzVCQyxjQUdKakMsMEJBSEZnQixNQUNBQyxtQkFFRWpCLDBCQUZGaUIsV0FDQUUsaUJBQ0VuQiwwQkFERm1CO0lBRUYsNEJBQTRCO0lBQzVCckIsZ0RBQVNBLENBQUM7UUFDUmEsU0FBU2hCLGtFQUFjQSxDQUFDWTtRQUN4QixJQUFJQSxhQUFhO1lBQ2ZFLGFBQWEyQixRQUFRLGVBQWU3QjtRQUN0QztJQUNGLEdBQUc7UUFBQ0E7S0FBWTtJQUloQixJQUFNOEIsc0JBQXNCLFNBQUNoQjtRQUMzQixJQUFJQSxhQUFhLHFCQUNmOzs4QkFDRSw4REFBQzVCLGdFQUFZQTtvQkFBQ2MsYUFBYUE7b0JBQWFTLE1BQU1LOzs7Ozs7OEJBQzlDLDhEQUFDakIsK0RBQWVBOzs7Ozs7O0lBR3RCO0lBRUYscUJBQ0k7OzBCQUNJLDhEQUFDWiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDOEM7MEJBQUc7Ozs7OztZQUNIdkIsNEJBQWMsOERBQUNaLGtFQUFjQTtnQkFBQ2EsTUFBTUQ7Ozs7O3dCQUFpQjtZQUdwQ3NCLG9CQUFvQlg7OztBQU1sRDtHQXJFTXJCOztRQUNjZCxrREFBU0E7UUFFUkssb0RBQVdBO1FBQ1RDLG9EQUFXQTtRQVF4QkUscUVBQXdCQTtRQU90QkUsK0RBQWtCQTtRQVNoQkMsd0VBQTJCQTtRQVEvQkYscUVBQXdCQTs7O0tBcEM1Qks7QUF1RU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tzaW5nbGVDb2luUGFnZV0uanM/MjkwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQmFyJztcbmltcG9ydCBNYXJrZXRzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9NYXJrZXRzVGFibGUnO1xuaW1wb3J0IHsgc2V0T2Zmc2V0IH0gZnJvbSAnLi4vcmVkdXgvTWFpbkNyeXB0b0xpc3RTbGljZSc7XG5pbXBvcnQgeyBzZXRDdXJyZW50UGFnZSB9IGZyb20gJy4uL3JlZHV4L0FwcEJhclNsaWNlJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHZXRDcnlwdG9EZXRhaWxzUXVlcnksXG4gICAgICAgICB1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnksIFxuICAgICAgICAgdXNlR2V0TWFya2V0c1F1ZXJ5LCBcbiAgICAgICAgIHVzZUdldEV4Y2hhbmdlc0RldGFpbHNRdWVyeSwgXG4gICAgICAgIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hcGknO1xuaW1wb3J0IFNpbmdsZUNvaW5DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2luZ2xlQ29pbkNhcmQnO1xuaW1wb3J0IEJhc2ljUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5cbmNvbnN0IFNpbmdsZUNvaW5QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBjdXJyZW50Q29pbiA9IHF1ZXJ5LnNpbmdsZUNvaW5QYWdlIHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudENvaW4nKSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluQ3J5cHRvTGlzdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB9KVxuICAgIGNvbnN0IHtcbiAgICAgIC8vIEZldGNoIGRhdGEgZm9yIHNlbGVjdGVkIGNvaW5cbiAgICAgICAgZGF0YTogZGV0YWlsc0RhdGEsXG4gICAgICAgIGlzTG9hZGluZzogZGV0YWlsc0lzTG9hZGluZyxcbiAgICAgICAgaXNFcnJvcjogZGV0YWlsc0lzRXJyb3IsXG4gICAgICB9ID0gdXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5KGN1cnJlbnRDb2luKTtcblxuICAgICAgY29uc3Qge1xuICAgICAgICAvLyBGZXRjaCBkYXRhIGZvciBtYXJrZXRzIGJ5IGlkIHNlbGVjdGVkIGNvaW5cbiAgICAgICAgICBkYXRhOiBtYXJrZXRzTGlzdCxcbiAgICAgICAgICBpc0xvYWRpbmc6IG1hcmtldHNMaXN0SXNMb2FkaW5nLFxuICAgICAgICAgIGlzRXJyb3I6IG1hcmtldHNMaXN0SXNFcnJvcixcbiAgICAgICAgfSA9IHVzZUdldE1hcmtldHNRdWVyeShjdXJyZW50Q29pbik7XG4gICAgICAgIGNvbnNvbGUubG9nKG1hcmtldHNMaXN0SXNMb2FkaW5nKTtcbiAgICAgICAgY29uc3QgbWFya2V0c0xpc3RUb1JlbmRlciA9IG1hcmtldHNMaXN0ICYmIG1hcmtldHNMaXN0LmRhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyAxMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1hcmtldHNMaXN0VG9SZW5kZXIpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgLy8gRmV0Y2ggZGF0YSBmb3IgZXhjaGFuZ2UgbGlzdFxuICAgICAgICAgICAgZGF0YTogZXhjaGFuZ2VzTGlzdCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZXhjaGFuZ2VzTGlzdElzTG9hZGluZyxcbiAgICAgICAgICAgIGlzRXJyb3I6IGV4Y2hhbmdlc0xpc3RJc0Vycm9yLFxuICAgICAgICAgIH0gPSB1c2VHZXRFeGNoYW5nZXNEZXRhaWxzUXVlcnkoY3VycmVudENvaW4pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGV4Y2hhbmdlc0xpc3QpO1xuICAgICAgXG4gICAgICBjb25zdCB7XG4gICAgICAgIC8vIEZldGNoIGhpc3RvcnkgZm9yIHNlbGVjdGVkIGNvaW5cbiAgICAgICAgZGF0YTogaGlzdG9yeURhdGEsXG4gICAgICAgIGlzTG9hZGluZzogaGlzdG9yeUlzTG9hZGluZyxcbiAgICAgICAgaXNFcnJvcjogaGlzdG9yeUlzRXJyb3IsXG4gICAgICB9ID0gdXNlR2V0Q3J5cHRvSGlzdG9yeVF1ZXJ5KHtpZDogcXVlcnkuc2luZ2xlQ29pblBhZ2UsIGludGVydmFsOiAnZDEnfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhoaXN0b3J5RGF0YSk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50UGFnZShjdXJyZW50Q29pbikpO1xuICAgICAgICBpZiAoY3VycmVudENvaW4pIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudENvaW4nLCBjdXJyZW50Q29pbik7XG4gICAgICAgIH1cbiAgICAgIH0sIFtjdXJyZW50Q29pbl0pO1xuXG5cblxuICAgICAgY29uc3QgZGlzcGxheU1hcmtldHNUYWJsZSA9IChtYXJrZXRzTGlzdCkgPT4ge1xuICAgICAgICBpZiAobWFya2V0c0xpc3QpIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNYXJrZXRzVGFibGUgY3VycmVudENvaW49e2N1cnJlbnRDb2lufSBkYXRhPXttYXJrZXRzTGlzdH0vPlxuICAgICAgICAgICAgPEJhc2ljUGFnaW5hdGlvbi8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QXBwQmFyLz5cbiAgICAgICAgICAgIDxoMT5TaW5nbGUgQ29pbiBQYWdlPC9oMT5cbiAgICAgICAgICAgIHtkZXRhaWxzRGF0YSA/IDxTaW5nbGVDb2luQ2FyZCBkYXRhPXtkZXRhaWxzRGF0YX0vPiA6IG51bGwgfVxuICAgICAgICAgICAgey8qIHttYXJrZXRzTGlzdCA/IDxNYXJrZXRzVGFibGUgY3VycmVudENvaW49e2N1cnJlbnRDb2lufSBkYXRhPXttYXJrZXRzTGlzdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheU1hcmtldHNUYWJsZShtYXJrZXRzTGlzdFRvUmVuZGVyKX1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvaW5QYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBcHBCYXIiLCJNYXJrZXRzVGFibGUiLCJzZXRPZmZzZXQiLCJzZXRDdXJyZW50UGFnZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJ1c2VHZXRDcnlwdG9EZXRhaWxzUXVlcnkiLCJ1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkiLCJ1c2VHZXRNYXJrZXRzUXVlcnkiLCJ1c2VHZXRFeGNoYW5nZXNEZXRhaWxzUXVlcnkiLCJTaW5nbGVDb2luQ2FyZCIsIkJhc2ljUGFnaW5hdGlvbiIsIlNpbmdsZUNvaW5QYWdlIiwicXVlcnkiLCJjdXJyZW50Q29pbiIsInNpbmdsZUNvaW5QYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc3BhdGNoIiwib2Zmc2V0Iiwic3RhdGUiLCJtYWluQ3J5cHRvTGlzdCIsImRldGFpbHNEYXRhIiwiZGF0YSIsImlzTG9hZGluZyIsImRldGFpbHNJc0xvYWRpbmciLCJpc0Vycm9yIiwiZGV0YWlsc0lzRXJyb3IiLCJtYXJrZXRzTGlzdCIsIm1hcmtldHNMaXN0SXNMb2FkaW5nIiwibWFya2V0c0xpc3RJc0Vycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcmtldHNMaXN0VG9SZW5kZXIiLCJzbGljZSIsImV4Y2hhbmdlc0xpc3QiLCJleGNoYW5nZXNMaXN0SXNMb2FkaW5nIiwiZXhjaGFuZ2VzTGlzdElzRXJyb3IiLCJpZCIsImludGVydmFsIiwiaGlzdG9yeURhdGEiLCJoaXN0b3J5SXNMb2FkaW5nIiwiaGlzdG9yeUlzRXJyb3IiLCJzZXRJdGVtIiwiZGlzcGxheU1hcmtldHNUYWJsZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[singleCoinPage].js\n"));

/***/ })

});