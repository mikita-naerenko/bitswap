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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicPagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Pagination */ \"./node_modules/@mui/material/Pagination/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/MainCryptoListSlice */ \"./src/redux/MainCryptoListSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BasicPagination() {\n    _s();\n    var searchResults = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.appBar;\n    }).searchResults;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    console.log(searchResults ? searchResults.length : null);\n    var handlePageChange = function(event, page) {\n        dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_2__.setOffset)((Number(page) - 1) * 10));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        spacing: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            count: searchResults ? searchResults.length : 100,\n            onChange: handlePageChange,\n            color: \"primary\"\n        }, void 0, false, {\n            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Pagination.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Pagination.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(BasicPagination, \"N+AnY9GbtOvrNbhqRtCWjyup2pk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = BasicPagination;\nvar _c;\n$RefreshReg$(_c, \"BasicPagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNWO0FBQ2U7QUFDRTtBQUcxQyxTQUFTSzs7SUFDbkIsSUFBTSxnQkFBb0JGLHdEQUFXQSxDQUFDSSxTQUFBQTtlQUFTQSxNQUFNQztPQUE3Q0Y7SUFDVCxJQUFNRyxXQUFXUCx3REFBV0E7SUFDNUJRLFFBQVFDLElBQUlMLGdCQUFnQkEsY0FBY00sU0FBUztJQUNuRCxJQUFNQyxtQkFBbUIsU0FBQ0MsT0FBT0M7UUFDN0JOLFNBQVNMLHFFQUFTQSxDQUFDLENBQUNZLE9BQU9ELFFBQVEsS0FBSztJQUMxQztJQUNKLHFCQUNFLDhEQUFDZCwyREFBS0E7UUFBQ2dCLFNBQVM7a0JBQ1osNEVBQUNqQixnRUFBVUE7WUFBQ2tCLE9BQU9aLGdCQUFnQkEsY0FBY00sU0FBUztZQUFLTyxVQUFVTjtZQUFrQk8sT0FBTTs7Ozs7Ozs7Ozs7QUFHekc7R0Fad0JmOztRQUNPRixvREFBV0E7UUFDckJELG9EQUFXQTs7O0tBRlJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24uanM/NGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFnaW5hdGlvbic7XG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRPZmZzZXQgfSBmcm9tICcuLi9yZWR1eC9NYWluQ3J5cHRvTGlzdFNsaWNlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1BhZ2luYXRpb24oKSB7XG4gICAgIGNvbnN0IHsgc2VhcmNoUmVzdWx0cyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXBwQmFyKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hSZXN1bHRzID8gc2VhcmNoUmVzdWx0cy5sZW5ndGggOiBudWxsKTtcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGV2ZW50LCBwYWdlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldE9mZnNldCgoTnVtYmVyKHBhZ2UpIC0gMSkgKiAxMCkpO1xuICAgICAgfTtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXtzZWFyY2hSZXN1bHRzID8gc2VhcmNoUmVzdWx0cy5sZW5ndGggOiAxMDB9IG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfSBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59Il0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJTdGFjayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRPZmZzZXQiLCJCYXNpY1BhZ2luYXRpb24iLCJzZWFyY2hSZXN1bHRzIiwic3RhdGUiLCJhcHBCYXIiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJwYWdlIiwiTnVtYmVyIiwic3BhY2luZyIsImNvdW50Iiwib25DaGFuZ2UiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pagination.js\n"));

/***/ })

});