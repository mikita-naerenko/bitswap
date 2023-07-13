"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favorites",{

/***/ "./src/pages/favorites.js":
/*!********************************!*\
  !*** ./src/pages/favorites.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Table */ \"./src/components/Table.js\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pagination */ \"./src/components/Pagination.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Favorites = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var favoritesCoin = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }).favoritesCoin;\n    var offset = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }).offset;\n    var _useGetFavoriteCoinsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.useGetFavoriteCoinsQuery)(favoritesCoin), favoriteConsList = _useGetFavoriteCoinsQuery.data, isLoading = _useGetFavoriteCoinsQuery.isLoading, isError = _useGetFavoriteCoinsQuery.isError;\n    console.log();\n    // const searchResultsForRender = favoriteConsList ? searchResults.data.slice(offset, offset + 10) : null;\n    var favoriteConsListToRender = favoriteConsList ? favoriteConsList.map(function(item) {\n        return item.data;\n    }) : null;\n    console.log(favoriteConsListToRender);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (favoriteConsList) {\n            dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_7__.setCountForPagination)(favoriteConsListToRender.length));\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            favoriteConsListToRender ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                row: favoriteConsListToRender\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 32,\n                columnNumber: 41\n            }, _this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                display: \"flex\",\n                justifyContent: \"center\",\n                sx: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                    lineNumber: 34,\n                    columnNumber: 23\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Favorites, \"bkIUVLbZYp7l+f/8dQ/O2QWlc+Y=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        _components_api__WEBPACK_IMPORTED_MODULE_5__.useGetFavoriteCoinsQuery\n    ];\n});\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3JpdGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNGO0FBQ2E7QUFDbkI7QUFDbUI7QUFDTTtBQUMzQjtBQUMyQjtBQUk3RCxJQUFNUyxZQUFZOztJQUNkLElBQU1DLFdBQVdOLHdEQUFXQTtJQUM1QixJQUFNLGdCQUFvQkMsd0RBQVdBLENBQUNPLFNBQUFBO2VBQVNBLE1BQU1DO09BQTdDRjtJQUNSLElBQU0sU0FBYU4sd0RBQVdBLENBQUNPLFNBQUFBO2VBQVNBLE1BQU1DO09BQXRDQztJQUNSLElBQXFEUiw0QkFBQUEseUVBQXdCQSxDQUFDSyxnQkFBdkVJLG1CQUE4Q1QsMEJBQTlDUyxNQUF3QkUsWUFBc0JYLDBCQUF0QlcsV0FBV0MsVUFBV1osMEJBQVhZO0lBQzFDQyxRQUFRQztJQUNSLDBHQUEwRztJQUMxRyxJQUFNQywyQkFBMkJMLG1CQUFtQkEsaUJBQWlCTSxJQUFJQyxTQUFBQTtlQUFRQSxLQUFLUjtTQUFPO0lBQzdGSSxRQUFRQyxJQUFJQztJQUNaZCxnREFBU0EsQ0FBQztRQUNOLElBQUlTLGtCQUFrQjtZQUNsQk4sU0FBU0YseUVBQXFCQSxDQUFDYSx5QkFBeUJHO1FBQzVEO0lBQ0o7SUFHQSxxQkFDSTs7MEJBQ0ksOERBQUN2QiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDd0I7MEJBQUc7Ozs7OztZQUNISix5Q0FBMkIsOERBQUNyQix5REFBVUE7Z0JBQUMwQixLQUFLTDs7Ozs7d0JBQThCOzBCQUMzRSw4REFBQ2xCLHlEQUFHQTtnQkFBQ3dCLFNBQVE7Z0JBQU9DLGdCQUFlO2dCQUFTQyxJQUFJO29CQUFDQyxXQUFXO2dCQUFNOzBCQUN4RCw0RUFBQzVCLDhEQUFlQTs7Ozs7Ozs7Ozs7O0FBS3RDO0dBM0JNTzs7UUFDZUwsb0RBQVdBO1FBQ0ZDLG9EQUFXQTtRQUNsQkEsb0RBQVdBO1FBQ3VCQyxxRUFBd0JBOzs7S0FKM0VHO0FBNkJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9mYXZvcml0ZXMuanM/NzA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzaWNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlJyBcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBCYXInO1xuaW1wb3J0IEJhc2ljUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VHZXRGYXZvcml0ZUNvaW5zUXVlcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL2FwaSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzZXRDb3VudEZvclBhZ2luYXRpb24gfSBmcm9tICcuLi9yZWR1eC9BcHBCYXJTbGljZSc7XG5cblxuXG5jb25zdCBGYXZvcml0ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHsgZmF2b3JpdGVzQ29pbiB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWFpbkNyeXB0b0xpc3QpO1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluQ3J5cHRvTGlzdCk7XG4gICAgY29uc3Qge2RhdGE6IGZhdm9yaXRlQ29uc0xpc3QsIGlzTG9hZGluZywgaXNFcnJvcn0gPSB1c2VHZXRGYXZvcml0ZUNvaW5zUXVlcnkoZmF2b3JpdGVzQ29pbik7XG4gICAgY29uc29sZS5sb2coKTtcbiAgICAvLyBjb25zdCBzZWFyY2hSZXN1bHRzRm9yUmVuZGVyID0gZmF2b3JpdGVDb25zTGlzdCA/IHNlYXJjaFJlc3VsdHMuZGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIDEwKSA6IG51bGw7XG4gICAgY29uc3QgZmF2b3JpdGVDb25zTGlzdFRvUmVuZGVyID0gZmF2b3JpdGVDb25zTGlzdCA/IGZhdm9yaXRlQ29uc0xpc3QubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKTogbnVsbDtcbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZUNvbnNMaXN0VG9SZW5kZXIpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChmYXZvcml0ZUNvbnNMaXN0KSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRDb3VudEZvclBhZ2luYXRpb24oZmF2b3JpdGVDb25zTGlzdFRvUmVuZGVyLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QXBwQmFyLz5cbiAgICAgICAgICAgIDxoMT5GYXZvcml0ZXM8L2gxPlxuICAgICAgICAgICAge2Zhdm9yaXRlQ29uc0xpc3RUb1JlbmRlciA/IDxCYXNpY1RhYmxlIHJvdz17ZmF2b3JpdGVDb25zTGlzdFRvUmVuZGVyfS8+IDogbnVsbH1cbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHN4PXt7bWFyZ2luVG9wOiAnMjBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QmFzaWNQYWdpbmF0aW9uLz4gIFxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlczsiXSwibmFtZXMiOlsiQmFzaWNUYWJsZSIsIkFwcEJhciIsIkJhc2ljUGFnaW5hdGlvbiIsIkJveCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VHZXRGYXZvcml0ZUNvaW5zUXVlcnkiLCJ1c2VFZmZlY3QiLCJzZXRDb3VudEZvclBhZ2luYXRpb24iLCJGYXZvcml0ZXMiLCJkaXNwYXRjaCIsImZhdm9yaXRlc0NvaW4iLCJzdGF0ZSIsIm1haW5DcnlwdG9MaXN0Iiwib2Zmc2V0IiwiZGF0YSIsImZhdm9yaXRlQ29uc0xpc3QiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiY29uc29sZSIsImxvZyIsImZhdm9yaXRlQ29uc0xpc3RUb1JlbmRlciIsIm1hcCIsIml0ZW0iLCJsZW5ndGgiLCJoMSIsInJvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN4IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/favorites.js\n"));

/***/ })

});