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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Table */ \"./src/components/Table.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pagination */ \"./src/components/Pagination.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Index = function() {\n    _s();\n    var offset = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }).offset;\n    var searchResults = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.appBar;\n    }).searchResults;\n    console.log(searchResults);\n    var searchResultsForRender = searchResults ? searchResults.data.slice(offset, offset + 10) : null;\n    console.log(searchResultsForRender);\n    var _useGetCryptoListQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.useGetCryptoListQuery)({\n        offset: offset\n    }), data = _useGetCryptoListQuery.data, isLoading = _useGetCryptoListQuery.isLoading, isError = _useGetCryptoListQuery.isError;\n    console.log(data[data]);\n    console.log(searchResultsForRender);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                maxWidth: \"xl\",\n                sx: {\n                    marginTop: \"20px\"\n                },\n                children: [\n                    data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        row: searchResultsForRender ? searchResultsForRender : data\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 29\n                    }, _this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        sx: {\n                            marginTop: \"20px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 23\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"7gcJdNYyHzvIrR8P/3yiaAcTPgo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _components_api__WEBPACK_IMPORTED_MODULE_4__.useGetCryptoListQuery\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNFO0FBQ0k7QUFDWjtBQUNtQjtBQUNHO0FBQ2hCO0FBRzFDLElBQU1PLFFBQVE7O0lBQ1YsSUFBTSxTQUFhRCx3REFBV0EsQ0FBQ0csU0FBQUE7ZUFBU0EsTUFBTUM7T0FBdENGO0lBQ1IsSUFBTSxnQkFBb0JGLHdEQUFXQSxDQUFDRyxTQUFBQTtlQUFTQSxNQUFNRztPQUE3Q0Q7SUFDUkUsUUFBUUMsSUFBSUg7SUFDWixJQUFNSSx5QkFBeUJKLGdCQUFnQkEsY0FBY0ssS0FBS0MsTUFBTVQsUUFBUUEsU0FBUyxNQUFNO0lBQy9GSyxRQUFRQyxJQUFJQztJQUNaLElBQXFDVix5QkFBQUEsc0VBQXFCQSxDQUFDO1FBQUNHLFFBQUFBO0lBQU0sSUFBMURRLE9BQTZCWCx1QkFBN0JXLE1BQU1FLFlBQXVCYix1QkFBdkJhLFdBQVdDLFVBQVlkLHVCQUFaYztJQUN6Qk4sUUFBUUMsSUFBSUUsSUFBSSxDQUFDQSxLQUFLO0lBQ3RCSCxRQUFRQyxJQUFJQztJQUNaLHFCQUNROzswQkFDSSw4REFBQ2YsMERBQU1BOzs7OzswQkFDUCw4REFBQ0UsK0RBQVNBO2dCQUFDa0IsVUFBUztnQkFBS0MsSUFBSTtvQkFBQ0MsV0FBVztnQkFBTTs7b0JBQzFDTixxQkFBTyw4REFBQ2YseURBQVVBO3dCQUFDc0IsS0FBS1IseUJBQXlCQSx5QkFBeUJDOzs7OztnQ0FBVTtrQ0FDckYsOERBQUNiLHlEQUFHQTt3QkFBQ3FCLFNBQVE7d0JBQU9DLGdCQUFlO3dCQUFTSixJQUFJOzRCQUFDQyxXQUFXO3dCQUFNO2tDQUNoRSw0RUFBQ2xCLDhEQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXRDO0dBekJNRzs7UUFDaUJELG9EQUFXQTtRQUNKQSxvREFBV0E7UUFJQUQsa0VBQXFCQTs7O0tBTnhERTtBQTJCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQmFyJztcbmltcG9ydCBCYXNpY1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUnIFxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBCYXNpY1BhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcbmltcG9ydCB7IHVzZUdldENyeXB0b0xpc3RRdWVyeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXBpJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluQ3J5cHRvTGlzdCk7XG4gICAgY29uc3QgeyBzZWFyY2hSZXN1bHRzIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hcHBCYXIpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdHMpO1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHNGb3JSZW5kZXIgPSBzZWFyY2hSZXN1bHRzID8gc2VhcmNoUmVzdWx0cy5kYXRhLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgMTApIDogbnVsbDtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHRzRm9yUmVuZGVyKTtcbiAgICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciB9ID0gdXNlR2V0Q3J5cHRvTGlzdFF1ZXJ5KHtvZmZzZXR9KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhW2RhdGFdKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHRzRm9yUmVuZGVyKTtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8QXBwQmFyLz5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIiBzeD17e21hcmdpblRvcDogJzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhID8gPEJhc2ljVGFibGUgcm93PXtzZWFyY2hSZXN1bHRzRm9yUmVuZGVyID8gc2VhcmNoUmVzdWx0c0ZvclJlbmRlciA6IGRhdGF9Lz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBzeD17e21hcmdpblRvcDogJzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJhc2ljUGFnaW5hdGlvbi8+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgXG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIkFwcEJhciIsIkJhc2ljVGFibGUiLCJDb250YWluZXIiLCJCb3giLCJCYXNpY1BhZ2luYXRpb24iLCJ1c2VHZXRDcnlwdG9MaXN0UXVlcnkiLCJ1c2VTZWxlY3RvciIsIkluZGV4Iiwib2Zmc2V0Iiwic3RhdGUiLCJtYWluQ3J5cHRvTGlzdCIsInNlYXJjaFJlc3VsdHMiLCJhcHBCYXIiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoUmVzdWx0c0ZvclJlbmRlciIsImRhdGEiLCJzbGljZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJtYXhXaWR0aCIsInN4IiwibWFyZ2luVG9wIiwicm93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});