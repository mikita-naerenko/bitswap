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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _components_MarketsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MarketsTable */ \"./src/components/MarketsTable.js\");\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var _components_SingleCoinCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SingleCoinCard */ \"./src/components/SingleCoinCard.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Pagination */ \"./src/components/Pagination.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar SingleCoinPage = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    var currentCoin = query.singleCoinPage ||  true && localStorage.getItem(\"currentCoin\");\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    var offset = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }).offset;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {});\n    var _useGetCryptoDetailsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_7__.useGetCryptoDetailsQuery)(currentCoin), // Fetch data for selected coin\n    detailsData = _useGetCryptoDetailsQuery.data, detailsIsLoading = _useGetCryptoDetailsQuery.isLoading, detailsIsError = _useGetCryptoDetailsQuery.isError;\n    var _useGetMarketsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_7__.useGetMarketsQuery)(currentCoin), // Fetch data for markets by id selected coin\n    marketsList = _useGetMarketsQuery.data, marketsListIsLoading = _useGetMarketsQuery.isLoading, marketsListIsError = _useGetMarketsQuery.isError;\n    var marketsListToRender = marketsList && marketsList.slice(offset, offset + 10);\n    var _useGetExchangesDetailsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_7__.useGetExchangesDetailsQuery)(currentCoin), // Fetch data for exchange list\n    exchangesList = _useGetExchangesDetailsQuery.data, exchangesListIsLoading = _useGetExchangesDetailsQuery.isLoading, exchangesListIsError = _useGetExchangesDetailsQuery.isError;\n    console.log(exchangesList);\n    var _useGetCryptoHistoryQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_7__.useGetCryptoHistoryQuery)({\n        id: query.singleCoinPage,\n        interval: \"d1\"\n    }), // Fetch history for selected coin\n    historyData = _useGetCryptoHistoryQuery.data, historyIsLoading = _useGetCryptoHistoryQuery.isLoading, historyIsError = _useGetCryptoHistoryQuery.isError;\n    // console.log(historyData);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentPage)(currentCoin));\n        if (currentCoin) {\n            localStorage.setItem(\"currentCoin\", currentCoin);\n        }\n    }, [\n        currentCoin\n    ]);\n    var displayMarketsTable = function(marketsList) {\n        if (marketsList) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MarketsTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    currentCoin: currentCoin,\n                    data: marketsList\n                }, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Single Coin Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, _this),\n            detailsData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCoinCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                data: detailsData\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 78,\n                columnNumber: 28\n            }, _this) : null,\n            displayMarketsTable(marketsList)\n        ]\n    }, void 0, true);\n};\n_s(SingleCoinPage, \"BUnsuLfpaAODqYcL40GuhP+HOlo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _components_api__WEBPACK_IMPORTED_MODULE_7__.useGetCryptoDetailsQuery,\n        _components_api__WEBPACK_IMPORTED_MODULE_7__.useGetMarketsQuery,\n        _components_api__WEBPACK_IMPORTED_MODULE_7__.useGetExchangesDetailsQuery,\n        _components_api__WEBPACK_IMPORTED_MODULE_7__.useGetCryptoHistoryQuery\n    ];\n});\n_c = SingleCoinPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCoinPage);\nvar _c;\n$RefreshReg$(_c, \"SingleCoinPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NpbmdsZUNvaW5QYWdlXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNFO0FBQ1k7QUFFQTtBQUNDO0FBQ3BCO0FBS0E7QUFDdUI7QUFDSDtBQUd2RCxJQUFNYSxpQkFBaUI7O0lBQ25CLElBQU0sUUFBVWIsc0RBQVNBLEdBQWxCYztJQUNQLElBQU1DLGNBQWNELE1BQU1FLGtCQUFtQixLQUFrQixJQUFlQyxhQUFhQyxRQUFRO0lBQ25HLElBQU1DLFdBQVdmLHdEQUFXQTtJQUM1QixJQUFNLFNBQWFDLHdEQUFXQSxDQUFDZ0IsU0FBQUE7ZUFBU0EsTUFBTUM7T0FBdENGO0lBQ1JkLGdEQUFTQSxDQUFDLFlBRVY7SUFDQSxJQUtNQyw0QkFBQUEseUVBQXdCQSxDQUFDUSxjQUo3QiwrQkFBK0I7SUFDdkJRLGNBR0poQiwwQkFIRmlCLE1BQ0FDLG1CQUVFbEIsMEJBRkZrQixXQUNBRSxpQkFDRXBCLDBCQURGb0I7SUFHRixJQUtNbEIsc0JBQUFBLG1FQUFrQkEsQ0FBQ00sY0FKdkIsNkNBQTZDO0lBQ3JDYyxjQUdKcEIsb0JBSEZlLE1BQ0FDLHVCQUVFaEIsb0JBRkZnQixXQUNBRSxxQkFDRWxCLG9CQURGa0I7SUFHRixJQUFNSyxzQkFBc0JILGVBQWVBLFlBQVlJLE1BQU1iLFFBQVFBLFNBQVM7SUFFOUUsSUFLTVYsK0JBQUFBLDRFQUEyQkEsQ0FBQ0ssY0FKaEMsK0JBQStCO0lBQ3ZCbUIsZ0JBR0p4Qiw2QkFIRmMsTUFDQUMseUJBRUVmLDZCQUZGZSxXQUNBRSx1QkFDRWpCLDZCQURGaUI7SUFFRlUsUUFBUUMsSUFBSUo7SUFFaEIsSUFLSTFCLDRCQUFBQSx5RUFBd0JBLENBQUM7UUFBQytCLElBQUl6QixNQUFNRTtRQUFnQndCLFVBQVU7SUFBSSxJQUpwRSxrQ0FBa0M7SUFDNUJDLGNBR0pqQywwQkFIRmdCLE1BQ0FDLG1CQUVFakIsMEJBRkZpQixXQUNBRSxpQkFDRW5CLDBCQURGbUI7SUFFRiw0QkFBNEI7SUFDNUJyQixnREFBU0EsQ0FBQztRQUNSYSxTQUFTaEIsa0VBQWNBLENBQUNZO1FBQ3hCLElBQUlBLGFBQWE7WUFDZkUsYUFBYTJCLFFBQVEsZUFBZTdCO1FBQ3RDO0lBQ0YsR0FBRztRQUFDQTtLQUFZO0lBSWhCLElBQU04QixzQkFBc0IsU0FBQ2hCO1FBQzNCLElBQUlBLGFBQWEscUJBQ2Y7OzhCQUNFLDhEQUFDM0IsZ0VBQVlBO29CQUFDYSxhQUFhQTtvQkFBYVMsTUFBTUs7Ozs7Ozs4QkFDOUMsOERBQUNqQiw4REFBZUE7Ozs7Ozs7SUFHdEI7SUFFRixxQkFDSTs7MEJBQ0ksOERBQUNYLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUM2QzswQkFBRzs7Ozs7O1lBQ0h2Qiw0QkFBYyw4REFBQ1osa0VBQWNBO2dCQUFDYSxNQUFNRDs7Ozs7d0JBQWlCO1lBR3BDc0Isb0JBQW9CaEI7OztBQU1sRDtHQXRFTWhCOztRQUNjYixrREFBU0E7UUFFUkksb0RBQVdBO1FBQ1RDLG9EQUFXQTtRQVN4QkUscUVBQXdCQTtRQU90QkUsK0RBQWtCQTtRQVNoQkMsd0VBQTJCQTtRQVEvQkYscUVBQXdCQTs7O0tBckM1Qks7QUF3RU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tzaW5nbGVDb2luUGFnZV0uanM/MjkwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQmFyJztcbmltcG9ydCBNYXJrZXRzVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9NYXJrZXRzVGFibGUnO1xuXG5pbXBvcnQgeyBzZXRDdXJyZW50UGFnZSB9IGZyb20gJy4uL3JlZHV4L0FwcEJhclNsaWNlJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHZXRDcnlwdG9EZXRhaWxzUXVlcnksXG4gICAgICAgICB1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnksIFxuICAgICAgICAgdXNlR2V0TWFya2V0c1F1ZXJ5LCBcbiAgICAgICAgIHVzZUdldEV4Y2hhbmdlc0RldGFpbHNRdWVyeSwgXG4gICAgICAgIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hcGknO1xuaW1wb3J0IFNpbmdsZUNvaW5DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2luZ2xlQ29pbkNhcmQnO1xuaW1wb3J0IEJhc2ljUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5cbmNvbnN0IFNpbmdsZUNvaW5QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBjdXJyZW50Q29pbiA9IHF1ZXJ5LnNpbmdsZUNvaW5QYWdlIHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudENvaW4nKSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluQ3J5cHRvTGlzdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIFxuICAgIH0pXG4gICAgY29uc3Qge1xuICAgICAgLy8gRmV0Y2ggZGF0YSBmb3Igc2VsZWN0ZWQgY29pblxuICAgICAgICBkYXRhOiBkZXRhaWxzRGF0YSxcbiAgICAgICAgaXNMb2FkaW5nOiBkZXRhaWxzSXNMb2FkaW5nLFxuICAgICAgICBpc0Vycm9yOiBkZXRhaWxzSXNFcnJvcixcbiAgICAgIH0gPSB1c2VHZXRDcnlwdG9EZXRhaWxzUXVlcnkoY3VycmVudENvaW4pO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIC8vIEZldGNoIGRhdGEgZm9yIG1hcmtldHMgYnkgaWQgc2VsZWN0ZWQgY29pblxuICAgICAgICAgIGRhdGE6IG1hcmtldHNMaXN0LFxuICAgICAgICAgIGlzTG9hZGluZzogbWFya2V0c0xpc3RJc0xvYWRpbmcsXG4gICAgICAgICAgaXNFcnJvcjogbWFya2V0c0xpc3RJc0Vycm9yLFxuICAgICAgICB9ID0gdXNlR2V0TWFya2V0c1F1ZXJ5KGN1cnJlbnRDb2luKTtcblxuICAgICAgICBjb25zdCBtYXJrZXRzTGlzdFRvUmVuZGVyID0gbWFya2V0c0xpc3QgJiYgbWFya2V0c0xpc3Quc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyAxMCk7XG4gICAgICBcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIC8vIEZldGNoIGRhdGEgZm9yIGV4Y2hhbmdlIGxpc3RcbiAgICAgICAgICAgIGRhdGE6IGV4Y2hhbmdlc0xpc3QsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGV4Y2hhbmdlc0xpc3RJc0xvYWRpbmcsXG4gICAgICAgICAgICBpc0Vycm9yOiBleGNoYW5nZXNMaXN0SXNFcnJvcixcbiAgICAgICAgICB9ID0gdXNlR2V0RXhjaGFuZ2VzRGV0YWlsc1F1ZXJ5KGN1cnJlbnRDb2luKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhleGNoYW5nZXNMaXN0KTtcbiAgICAgIFxuICAgICAgY29uc3Qge1xuICAgICAgICAvLyBGZXRjaCBoaXN0b3J5IGZvciBzZWxlY3RlZCBjb2luXG4gICAgICAgIGRhdGE6IGhpc3RvcnlEYXRhLFxuICAgICAgICBpc0xvYWRpbmc6IGhpc3RvcnlJc0xvYWRpbmcsXG4gICAgICAgIGlzRXJyb3I6IGhpc3RvcnlJc0Vycm9yLFxuICAgICAgfSA9IHVzZUdldENyeXB0b0hpc3RvcnlRdWVyeSh7aWQ6IHF1ZXJ5LnNpbmdsZUNvaW5QYWdlLCBpbnRlcnZhbDogJ2QxJ30pO1xuICAgICAgLy8gY29uc29sZS5sb2coaGlzdG9yeURhdGEpO1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFBhZ2UoY3VycmVudENvaW4pKTtcbiAgICAgICAgaWYgKGN1cnJlbnRDb2luKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRDb2luJywgY3VycmVudENvaW4pO1xuICAgICAgICB9XG4gICAgICB9LCBbY3VycmVudENvaW5dKTtcblxuXG5cbiAgICAgIGNvbnN0IGRpc3BsYXlNYXJrZXRzVGFibGUgPSAobWFya2V0c0xpc3QpID0+IHtcbiAgICAgICAgaWYgKG1hcmtldHNMaXN0KSByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8TWFya2V0c1RhYmxlIGN1cnJlbnRDb2luPXtjdXJyZW50Q29pbn0gZGF0YT17bWFya2V0c0xpc3R9Lz5cbiAgICAgICAgICAgIDxCYXNpY1BhZ2luYXRpb24vPlxuICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEFwcEJhci8+XG4gICAgICAgICAgICA8aDE+U2luZ2xlIENvaW4gUGFnZTwvaDE+XG4gICAgICAgICAgICB7ZGV0YWlsc0RhdGEgPyA8U2luZ2xlQ29pbkNhcmQgZGF0YT17ZGV0YWlsc0RhdGF9Lz4gOiBudWxsIH1cbiAgICAgICAgICAgIHsvKiB7bWFya2V0c0xpc3QgPyA8TWFya2V0c1RhYmxlIGN1cnJlbnRDb2luPXtjdXJyZW50Q29pbn0gZGF0YT17bWFya2V0c0xpc3R9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlNYXJrZXRzVGFibGUobWFya2V0c0xpc3QpfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgPC8+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ29pblBhZ2U7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkFwcEJhciIsIk1hcmtldHNUYWJsZSIsInNldEN1cnJlbnRQYWdlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUVmZmVjdCIsInVzZUdldENyeXB0b0RldGFpbHNRdWVyeSIsInVzZUdldENyeXB0b0hpc3RvcnlRdWVyeSIsInVzZUdldE1hcmtldHNRdWVyeSIsInVzZUdldEV4Y2hhbmdlc0RldGFpbHNRdWVyeSIsIlNpbmdsZUNvaW5DYXJkIiwiQmFzaWNQYWdpbmF0aW9uIiwiU2luZ2xlQ29pblBhZ2UiLCJxdWVyeSIsImN1cnJlbnRDb2luIiwic2luZ2xlQ29pblBhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzcGF0Y2giLCJvZmZzZXQiLCJzdGF0ZSIsIm1haW5DcnlwdG9MaXN0IiwiZGV0YWlsc0RhdGEiLCJkYXRhIiwiaXNMb2FkaW5nIiwiZGV0YWlsc0lzTG9hZGluZyIsImlzRXJyb3IiLCJkZXRhaWxzSXNFcnJvciIsIm1hcmtldHNMaXN0IiwibWFya2V0c0xpc3RJc0xvYWRpbmciLCJtYXJrZXRzTGlzdElzRXJyb3IiLCJtYXJrZXRzTGlzdFRvUmVuZGVyIiwic2xpY2UiLCJleGNoYW5nZXNMaXN0IiwiZXhjaGFuZ2VzTGlzdElzTG9hZGluZyIsImV4Y2hhbmdlc0xpc3RJc0Vycm9yIiwiY29uc29sZSIsImxvZyIsImlkIiwiaW50ZXJ2YWwiLCJoaXN0b3J5RGF0YSIsImhpc3RvcnlJc0xvYWRpbmciLCJoaXN0b3J5SXNFcnJvciIsInNldEl0ZW0iLCJkaXNwbGF5TWFya2V0c1RhYmxlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[singleCoinPage].js\n"));

/***/ })

});