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

/***/ "./src/components/SearchInput.js":
/*!***************************************!*\
  !*** ./src/components/SearchInput.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchInput; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Autocomplete */ \"./node_modules/@mui/material/Autocomplete/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SearchInput() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchQuery = _useState[0], setSearchQuery = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), userInteracted = _useState1[0], setUserInteracted = _useState1[1];\n    var _useSearchCoinsQuery = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useSearchCoinsQuery)(searchQuery), searchResults = _useSearchCoinsQuery.data, isLoading = _useSearchCoinsQuery.isLoading, isError = _useSearchCoinsQuery.isError;\n    var data = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetCryptoListQuery)({\n        offset: 0,\n        limit: 1000\n    }).data;\n    var handleSearch = function(searchQuery) {\n        setUserInteracted(true);\n        setSearchQuery(searchQuery);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (userInteracted) {\n            // Update the state with search results only when the user has interacted with the input\n            dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__.setSearchResults)(searchResults));\n        }\n    }, [\n        userInteracted,\n        searchResults,\n        dispatch\n    ]);\n    console.log(searchResults);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        spacing: 2,\n        sx: {\n            width: 300\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            freeSolo: true,\n            id: \"free-solo-2-demo\",\n            disableClearable: true,\n            onChange: function(e) {\n                handleSearch(e.target.value);\n                console.log(e.target.value);\n            },\n            options: data ? data.data.map(function(option) {\n                console.log(option);\n                return option.name;\n            }) : [],\n            renderInput: function(params) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_9__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_10__._)({}, params), {\n                    label: \"Search input\",\n                    InputProps: (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_9__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_10__._)({}, params.InputProps), {\n                        type: \"search\"\n                    })\n                }), void 0, false, void 0, void 0);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SearchInput.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SearchInput.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchInput, \"Rmmu3AkcVOdQiAwyLEgjkZrxpcM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        _api__WEBPACK_IMPORTED_MODULE_2__.useSearchCoinsQuery,\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetCryptoListQuery\n    ];\n});\n_c = SearchInput;\nvar _c;\n$RefreshReg$(_c, \"SearchInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hJbnB1dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ2lCO0FBQ1I7QUFDYztBQUNhO0FBQ3ZCO0FBQ1k7QUFDZDtBQUUzQixTQUFTVTs7SUFDcEIsSUFBTUMsV0FBV0Ysd0RBQVdBO0lBQzVCLElBQXNDSCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBeENNLGNBQStCTixjQUFsQk8saUJBQWtCUDtJQUN0QyxJQUE0Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQTlDUSxpQkFBcUNSLGVBQXJCUyxvQkFBcUJUO0lBQzVDLElBQW9ERix1QkFBQUEseURBQW1CQSxDQUFDUSxjQUFoRUksZ0JBQTRDWixxQkFBNUNZLE1BQXFCRSxZQUF1QmQscUJBQXZCYyxXQUFXQyxVQUFZZixxQkFBWmU7SUFDeEMsSUFBTSxPQUFXZCwyREFBcUJBLENBQUM7UUFBQ2UsUUFBUTtRQUFHQyxPQUFPO0lBQUksR0FBdERMO0lBQ1IsSUFBTU0sZUFBZSxTQUFDVjtRQUNsQkcsa0JBQWtCO1FBQ2xCRixlQUFlRDtJQUNqQjtJQUNGTCxnREFBU0EsQ0FBQztRQUNOLElBQUlPLGdCQUFnQjtZQUNsQix3RkFBd0Y7WUFDeEZILFNBQVNILG9FQUFnQkEsQ0FBQ1M7UUFDNUI7SUFDRixHQUFHO1FBQUNIO1FBQWdCRztRQUFlTjtLQUFTO0lBQzVDWSxRQUFRQyxJQUFJUDtJQUNoQixxQkFDRSw4REFBQ2YsMkRBQUtBO1FBQUN1QixTQUFTO1FBQUdDLElBQUk7WUFBRUMsT0FBTztRQUFJO2tCQUNsQyw0RUFBQ3hCLGtFQUFZQTtZQUNYeUIsUUFBUTtZQUNSQyxJQUFHO1lBQ0hDLGdCQUFnQjtZQUNoQkMsVUFBVSxTQUFDQztnQkFDU1YsYUFBYVUsRUFBRUMsT0FBT0M7Z0JBQ3RCWCxRQUFRQyxJQUFJUSxFQUFFQyxPQUFPQztZQUN6QjtZQUVoQkMsU0FBU25CLE9BQU9BLEtBQUtBLEtBQUtvQixJQUFJLFNBQUNDO2dCQUFhZCxRQUFRQyxJQUFJYTtnQkFBUyxPQUFPQSxPQUFPQztZQUFJLEtBQUssRUFBRTtZQUMxRkMsYUFBYSxTQUFDQztxQ0FDWiw4REFBQ3ZDLCtEQUFTQSxFQUFBQSxtRUFBQUEsQ0FBQUEsOERBQUFBLEtBQ0p1QztvQkFDSkMsT0FBTTtvQkFDTkMsWUFBWSx1SUFDUEYsT0FBT0U7d0JBQ1ZDLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FBT3BCO0dBMUN3QmpDOztRQUNIRCxvREFBV0E7UUFHd0JMLHFEQUFtQkE7UUFDdERDLHVEQUFxQkE7OztLQUxsQksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5wdXQuanM/NDUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG11aS9tYXRlcmlhbC9BdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgdXNlU2VhcmNoQ29pbnNRdWVyeSwgdXNlR2V0Q3J5cHRvTGlzdFF1ZXJ5IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNldFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuLi9yZWR1eC9BcHBCYXJTbGljZSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoSW5wdXQoKSB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt1c2VySW50ZXJhY3RlZCwgc2V0VXNlckludGVyYWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgZGF0YTogc2VhcmNoUmVzdWx0cywgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VTZWFyY2hDb2luc1F1ZXJ5KHNlYXJjaFF1ZXJ5KTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldENyeXB0b0xpc3RRdWVyeSh7b2Zmc2V0OiAwLCBsaW1pdDogMTAwMH0pO1xuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChzZWFyY2hRdWVyeSkgPT4ge1xuICAgICAgICBzZXRVc2VySW50ZXJhY3RlZCh0cnVlKTtcbiAgICAgICAgc2V0U2VhcmNoUXVlcnkoc2VhcmNoUXVlcnkpO1xuICAgICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlckludGVyYWN0ZWQpIHtcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggc2VhcmNoIHJlc3VsdHMgb25seSB3aGVuIHRoZSB1c2VyIGhhcyBpbnRlcmFjdGVkIHdpdGggdGhlIGlucHV0XG4gICAgICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoUmVzdWx0cyhzZWFyY2hSZXN1bHRzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIFt1c2VySW50ZXJhY3RlZCwgc2VhcmNoUmVzdWx0cywgZGlzcGF0Y2hdKTtcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdHMpO1xuICByZXR1cm4gKFxuICAgIDxTdGFjayBzcGFjaW5nPXsyfSBzeD17eyB3aWR0aDogMzAwIH19PlxuICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICBmcmVlU29sb1xuICAgICAgICBpZD1cImZyZWUtc29sby0yLWRlbW9cIlxuICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgXG4gICAgICAgIG9wdGlvbnM9e2RhdGEgPyBkYXRhLmRhdGEubWFwKChvcHRpb24pID0+IHsgY29uc29sZS5sb2cob3B0aW9uKTsgcmV0dXJuIG9wdGlvbi5uYW1lfSkgOiBbXX1cbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggaW5wdXRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAuLi5wYXJhbXMuSW5wdXRQcm9wcyxcbiAgICAgICAgICAgICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0RmllbGQiLCJTdGFjayIsIkF1dG9jb21wbGV0ZSIsInVzZVNlYXJjaENvaW5zUXVlcnkiLCJ1c2VHZXRDcnlwdG9MaXN0UXVlcnkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNldFNlYXJjaFJlc3VsdHMiLCJ1c2VEaXNwYXRjaCIsIlNlYXJjaElucHV0IiwiZGlzcGF0Y2giLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwidXNlckludGVyYWN0ZWQiLCJzZXRVc2VySW50ZXJhY3RlZCIsImRhdGEiLCJzZWFyY2hSZXN1bHRzIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIm9mZnNldCIsImxpbWl0IiwiaGFuZGxlU2VhcmNoIiwiY29uc29sZSIsImxvZyIsInNwYWNpbmciLCJzeCIsIndpZHRoIiwiZnJlZVNvbG8iLCJpZCIsImRpc2FibGVDbGVhcmFibGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJuYW1lIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJsYWJlbCIsIklucHV0UHJvcHMiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchInput.js\n"));

/***/ })

});