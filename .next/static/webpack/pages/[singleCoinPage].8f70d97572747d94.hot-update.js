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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var _components_SingleCoinCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SingleCoinCard */ \"./src/components/SingleCoinCard.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SingleCoinPage = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    // const { currentPage } = useSelector(state => state.appBar);\n    var currentCoin = query.singleCoinPage ||  true && localStorage.getItem(\"currentCoin\");\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {});\n    var _useGetCryptoDetailsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoDetailsQuery)(currentCoin), // Fetch data for selected coin\n    detailsData = _useGetCryptoDetailsQuery.data, detailsIsLoading = _useGetCryptoDetailsQuery.isLoading, detailsIsError = _useGetCryptoDetailsQuery.isError;\n    console.log(detailsData);\n    var _useGetCryptoHistoryQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoHistoryQuery)({\n        id: query.singleCoinPage,\n        interval: \"d1\"\n    }), // Fetch history for selected coin\n    historyData = _useGetCryptoHistoryQuery.data, historyIsLoading = _useGetCryptoHistoryQuery.isLoading, historyIsError = _useGetCryptoHistoryQuery.isError;\n    // console.log(historyData);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        // const currentCoin = query.singleCoinPage || localStorage.getItem('currentCoin');\n        dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(currentCoin));\n        if (currentCoin) {\n            localStorage.setItem(\"currentCoin\", currentCoin);\n        }\n    }, [\n        currentCoin\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Single Coin Page\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCoinCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/[singleCoinPage].js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(SingleCoinPage, \"vCxXdZVX6heJvqhyn0hKSg88Fjo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        _components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoDetailsQuery,\n        _components_api__WEBPACK_IMPORTED_MODULE_6__.useGetCryptoHistoryQuery\n    ];\n});\n_c = SingleCoinPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCoinPage);\nvar _c;\n$RefreshReg$(_c, \"SingleCoinPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NpbmdsZUNvaW5QYWdlXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNZO0FBQ0M7QUFDcEI7QUFDb0Q7QUFDN0I7QUFHMUQsSUFBTVMsaUJBQWlCOztJQUNuQixJQUFNLFFBQVVULHNEQUFTQSxHQUFsQlU7SUFDUCw4REFBOEQ7SUFDOUQsSUFBTUMsY0FBY0QsTUFBTUUsa0JBQW1CLEtBQWtCLElBQWVDLGFBQWFDLFFBQVE7SUFDbkcsSUFBTUMsV0FBV1osd0RBQVdBO0lBQzVCRSxnREFBU0EsQ0FBQyxZQUVWO0lBQ0EsSUFLTUMsNEJBQUFBLHlFQUF3QkEsQ0FBQ0ssY0FKN0IsK0JBQStCO0lBQ3ZCSyxjQUdKViwwQkFIRlcsTUFDQUMsbUJBRUVaLDBCQUZGWSxXQUNBRSxpQkFDRWQsMEJBREZjO0lBRUZFLFFBQVFDLElBQUlQO0lBRVosSUFLSVQsNEJBQUFBLHlFQUF3QkEsQ0FBQztRQUFDaUIsSUFBSWQsTUFBTUU7UUFBZ0JhLFVBQVU7SUFBSSxJQUpwRSxrQ0FBa0M7SUFDNUJDLGNBR0puQiwwQkFIRlUsTUFDQUMsbUJBRUVYLDBCQUZGVyxXQUNBRSxpQkFDRWIsMEJBREZhO0lBRUYsNEJBQTRCO0lBQzVCZixnREFBU0EsQ0FBQztRQUNSLG1GQUFtRjtRQUNuRlUsU0FBU2Isa0VBQWNBLENBQUNTO1FBQ3hCLElBQUlBLGFBQWE7WUFDZkUsYUFBYWdCLFFBQVEsZUFBZWxCO1FBQ3RDO0lBQ0YsR0FBRztRQUFDQTtLQUFZO0lBRWxCLHFCQUNJOzswQkFDSSw4REFBQ21COzBCQUFHOzs7Ozs7MEJBQ0osOERBQUM3QiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDTyxrRUFBY0E7Ozs7Ozs7QUFNM0I7R0F6Q01DOztRQUNjVCxrREFBU0E7UUFHUkcsb0RBQVdBO1FBU3RCRyxxRUFBd0JBO1FBUXhCQyxxRUFBd0JBOzs7S0FyQjVCRTtBQTJDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3NpbmdsZUNvaW5QYWdlXS5qcz8yOTBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBCYXInO1xuaW1wb3J0IHsgc2V0Q3VycmVudFBhZ2UgfSBmcm9tICcuLi9yZWR1eC9BcHBCYXJTbGljZSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5LCB1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL2FwaSc7XG5pbXBvcnQgU2luZ2xlQ29pbkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TaW5nbGVDb2luQ2FyZCc7XG5cblxuY29uc3QgU2luZ2xlQ29pblBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpO1xuICAgIC8vIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFwcEJhcik7XG4gICAgY29uc3QgY3VycmVudENvaW4gPSBxdWVyeS5zaW5nbGVDb2luUGFnZSB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRDb2luJykpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgXG4gICAgfSlcbiAgICBjb25zdCB7XG4gICAgICAvLyBGZXRjaCBkYXRhIGZvciBzZWxlY3RlZCBjb2luXG4gICAgICAgIGRhdGE6IGRldGFpbHNEYXRhLFxuICAgICAgICBpc0xvYWRpbmc6IGRldGFpbHNJc0xvYWRpbmcsXG4gICAgICAgIGlzRXJyb3I6IGRldGFpbHNJc0Vycm9yLFxuICAgICAgfSA9IHVzZUdldENyeXB0b0RldGFpbHNRdWVyeShjdXJyZW50Q29pbik7XG4gICAgICBjb25zb2xlLmxvZyhkZXRhaWxzRGF0YSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8gRmV0Y2ggaGlzdG9yeSBmb3Igc2VsZWN0ZWQgY29pblxuICAgICAgICBkYXRhOiBoaXN0b3J5RGF0YSxcbiAgICAgICAgaXNMb2FkaW5nOiBoaXN0b3J5SXNMb2FkaW5nLFxuICAgICAgICBpc0Vycm9yOiBoaXN0b3J5SXNFcnJvcixcbiAgICAgIH0gPSB1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkoe2lkOiBxdWVyeS5zaW5nbGVDb2luUGFnZSwgaW50ZXJ2YWw6ICdkMSd9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGhpc3RvcnlEYXRhKTtcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGN1cnJlbnRDb2luID0gcXVlcnkuc2luZ2xlQ29pblBhZ2UgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRDb2luJyk7XG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRQYWdlKGN1cnJlbnRDb2luKSk7XG4gICAgICAgIGlmIChjdXJyZW50Q29pbikge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50Q29pbicsIGN1cnJlbnRDb2luKTtcbiAgICAgICAgfVxuICAgICAgfSwgW2N1cnJlbnRDb2luXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPlNpbmdsZSBDb2luIFBhZ2U8L2gxPlxuICAgICAgICAgICAgPEFwcEJhci8+XG4gICAgICAgICAgICA8U2luZ2xlQ29pbkNhcmQgLz5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvaW5QYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBcHBCYXIiLCJzZXRDdXJyZW50UGFnZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJ1c2VHZXRDcnlwdG9EZXRhaWxzUXVlcnkiLCJ1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkiLCJTaW5nbGVDb2luQ2FyZCIsIlNpbmdsZUNvaW5QYWdlIiwicXVlcnkiLCJjdXJyZW50Q29pbiIsInNpbmdsZUNvaW5QYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc3BhdGNoIiwiZGV0YWlsc0RhdGEiLCJkYXRhIiwiaXNMb2FkaW5nIiwiZGV0YWlsc0lzTG9hZGluZyIsImlzRXJyb3IiLCJkZXRhaWxzSXNFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImludGVydmFsIiwiaGlzdG9yeURhdGEiLCJoaXN0b3J5SXNMb2FkaW5nIiwiaGlzdG9yeUlzRXJyb3IiLCJzZXRJdGVtIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[singleCoinPage].js\n"));

/***/ })

});