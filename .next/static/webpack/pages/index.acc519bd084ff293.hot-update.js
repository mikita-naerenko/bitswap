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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Table */ \"./src/components/Table.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pagination */ \"./src/components/Pagination.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Index = function() {\n    _s();\n    var offset = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }).offset;\n    var searchResults = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.appBar;\n    }).searchResults;\n    console.log(searchResults);\n    var searchResultsForRender = searchResults ? searchResults.data.slice(offset, offset + 10) : null;\n    console.log(searchResultsForRender);\n    var _useGetCryptoListQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.useGetCryptoListQuery)({\n        offset: offset\n    }), data = _useGetCryptoListQuery.data, isLoading = _useGetCryptoListQuery.isLoading, isError = _useGetCryptoListQuery.isError;\n    console.log(data);\n    console.log(searchResultsForRender);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                maxWidth: \"xl\",\n                sx: {\n                    marginTop: \"20px\"\n                },\n                children: [\n                    data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        row: searchResultsForRender ? searchResultsForRender : data\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 29\n                    }, _this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        sx: {\n                            marginTop: \"20px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 23\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"3NJy02NbaK1oJQTofbDI4rL8PFA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _components_api__WEBPACK_IMPORTED_MODULE_4__.useGetCryptoListQuery\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNFO0FBQ0k7QUFDWjtBQUNtQjtBQUNHO0FBQ2hCO0FBRzFDLElBQU1PLFFBQVE7O0lBQ1YsSUFBTSxTQUFhRCx3REFBV0EsQ0FBQ0csU0FBQUE7ZUFBU0EsTUFBTUM7T0FBdENGO0lBQ1IsSUFBTSxnQkFBb0JGLHdEQUFXQSxDQUFDRyxTQUFBQTtlQUFTQSxNQUFNRztPQUE3Q0Q7SUFDUkUsUUFBUUMsSUFBSUg7SUFDWixJQUFNSSx5QkFBeUJKLGdCQUFnQkEsY0FBY0ssS0FBS0MsTUFBTVQsUUFBUUEsU0FBUyxNQUFNO0lBQy9GSyxRQUFRQyxJQUFJQztJQUNaLElBQTJDVix5QkFBQUEsc0VBQXFCQSxDQUFDO1FBQUNHLFFBQUFBO0lBQU0sSUFBaEVRLE9BQW1DWCx1QkFBbkNXLE1BQVlFLFlBQXVCYix1QkFBdkJhLFdBQVdDLFVBQVlkLHVCQUFaYztJQUMvQk4sUUFBUUMsSUFBSUU7SUFDWkgsUUFBUUMsSUFBSUM7SUFDWixxQkFDUTs7MEJBQ0ksOERBQUNmLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNFLCtEQUFTQTtnQkFBQ2tCLFVBQVM7Z0JBQUtDLElBQUk7b0JBQUNDLFdBQVc7Z0JBQU07O29CQUMxQ04scUJBQU8sOERBQUNmLHlEQUFVQTt3QkFBQ3NCLEtBQUtSLHlCQUF5QkEseUJBQXlCQzs7Ozs7Z0NBQVU7a0NBQ3JGLDhEQUFDYix5REFBR0E7d0JBQUNxQixTQUFRO3dCQUFPQyxnQkFBZTt3QkFBU0osSUFBSTs0QkFBQ0MsV0FBVzt3QkFBTTtrQ0FDaEUsNEVBQUNsQiw4REFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV0QztHQXpCTUc7O1FBQ2lCRCxvREFBV0E7UUFDSkEsb0RBQVdBO1FBSU1ELGtFQUFxQkE7OztLQU45REU7QUEyQk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEJhciBmcm9tICcuLi9jb21wb25lbnRzL0FwcEJhcic7XG5pbXBvcnQgQmFzaWNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlJyBcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQmFzaWNQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5pbXBvcnQgeyB1c2VHZXRDcnlwdG9MaXN0UXVlcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL2FwaSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbkNyeXB0b0xpc3QpO1xuICAgIGNvbnN0IHsgc2VhcmNoUmVzdWx0cyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXBwQmFyKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHRzKTtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzRm9yUmVuZGVyID0gc2VhcmNoUmVzdWx0cyA/IHNlYXJjaFJlc3VsdHMuZGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIDEwKSA6IG51bGw7XG4gICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0c0ZvclJlbmRlcik7XG4gICAgY29uc3QgeyBkYXRhOiBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IHVzZUdldENyeXB0b0xpc3RRdWVyeSh7b2Zmc2V0fSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0c0ZvclJlbmRlcik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEFwcEJhci8+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCIgc3g9e3ttYXJnaW5Ub3A6ICcyMHB4J319PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSA/IDxCYXNpY1RhYmxlIHJvdz17c2VhcmNoUmVzdWx0c0ZvclJlbmRlciA/IHNlYXJjaFJlc3VsdHNGb3JSZW5kZXIgOiBkYXRhfS8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgc3g9e3ttYXJnaW5Ub3A6ICcyMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgIDxCYXNpY1BhZ2luYXRpb24vPiAgXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgIFxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJuYW1lcyI6WyJBcHBCYXIiLCJCYXNpY1RhYmxlIiwiQ29udGFpbmVyIiwiQm94IiwiQmFzaWNQYWdpbmF0aW9uIiwidXNlR2V0Q3J5cHRvTGlzdFF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJJbmRleCIsIm9mZnNldCIsInN0YXRlIiwibWFpbkNyeXB0b0xpc3QiLCJzZWFyY2hSZXN1bHRzIiwiYXBwQmFyIiwiY29uc29sZSIsImxvZyIsInNlYXJjaFJlc3VsdHNGb3JSZW5kZXIiLCJkYXRhIiwic2xpY2UiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwibWF4V2lkdGgiLCJzeCIsIm1hcmdpblRvcCIsInJvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});