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

/***/ "./src/components/AppBar.js":
/*!**********************************!*\
  !*** ./src/components/AppBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonAppBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ButtonAppBar() {\n    _s();\n    var mainCryptoListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var favoritesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var portfolioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var accountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var currentPage = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.appBar;\n    }).currentPage;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            flexGrow: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            position: \"static\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        size: \"large\",\n                        edge: \"start\",\n                        color: \"inherit\",\n                        \"aria-label\": \"menu\",\n                        sx: {\n                            mr: 2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        variant: \"h6\",\n                        component: \"div\",\n                        sx: {\n                            flexGrow: 1\n                        },\n                        children: currentPage\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        display: \"flex\",\n                        flexGrow: 1,\n                        justifyContent: \"space-around\",\n                        children: [\n                            currentPage !== \"Main crypto-list\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                variant: \"h6\",\n                                component: \"div\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/\",\n                                    ref: mainCryptoListRef,\n                                    onClick: function() {\n                                        return dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(mainCryptoListRef.current.textContent));\n                                    },\n                                    children: \"Main crypto-list\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this) : null,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                variant: \"h6\",\n                                component: \"div\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/favorites/\",\n                                    ref: favoritesRef,\n                                    onClick: function() {\n                                        return dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(favoritesRef.current.textContent));\n                                    },\n                                    children: \" Favorites \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                variant: \"h6\",\n                                component: \"div\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/portfolio/\",\n                                    ref: portfolioRef,\n                                    onClick: function() {\n                                        return dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(portfolioRef.current.textContent));\n                                    },\n                                    children: \"Portfolio\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                variant: \"h6\",\n                                component: \"div\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/account/\",\n                                    ref: accountRef,\n                                    onClick: function() {\n                                        return dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(accountRef.current.textContent));\n                                    },\n                                    children: \"Account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/AppBar.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(ButtonAppBar, \"h7GjCFqRJu1LtdviTY0gZvVtHWI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = ButtonAppBar;\nvar _c;\n$RefreshReg$(_c, \"ButtonAppBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHBCYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNOO0FBQ1E7QUFDTTtBQUNSO0FBQ1E7QUFDRjtBQUVqQjtBQUN3QjtBQUNEO0FBRXpCO0FBRWQsU0FBU2E7O0lBQ3RCLElBQU1DLG9CQUFvQk4sNkNBQU1BLENBQUM7SUFDakMsSUFBTU8sZUFBZVAsNkNBQU1BLENBQUM7SUFDNUIsSUFBTVEsZUFBZVIsNkNBQU1BLENBQUM7SUFDNUIsSUFBTVMsYUFBYVQsNkNBQU1BLENBQUM7SUFDMUIsSUFBTSxjQUFrQkUsd0RBQVdBLENBQUNTLFNBQUFBO2VBQVNBLE1BQU1DO09BQTNDRjtJQUNSLElBQU1HLFdBQVdaLHdEQUFXQTtJQUM1QixxQkFDRSw4REFBQ1AseURBQUdBO1FBQUNvQixJQUFJO1lBQUVDLFVBQVU7UUFBRTtrQkFDckIsNEVBQUN0Qiw0REFBTUE7WUFBQ3VCLFVBQVM7c0JBQ2YsNEVBQUNyQiw2REFBT0E7O2tDQUNOLDhEQUFDRyxnRUFBVUE7d0JBQ1RtQixNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxPQUFNO3dCQUNOQyxjQUFXO3dCQUNYTixJQUFJOzRCQUFFTyxJQUFJO3dCQUFFO2tDQUVaLDRFQUFDdEIsZ0VBQVFBOzs7Ozs7Ozs7O2tDQUVYLDhEQUFDSCxpRUFBVUE7d0JBQUMwQixTQUFRO3dCQUFLQyxXQUFVO3dCQUFNVCxJQUFJOzRCQUFFQyxVQUFVO3dCQUFFO2tDQUMxREw7Ozs7OztrQ0FFRCw4REFBQ2hCLHlEQUFHQTt3QkFBQzhCLFNBQVM7d0JBQVFULFVBQVU7d0JBQUdVLGdCQUFnQjs7NEJBQ2xEZixnQkFBZ0IsbUNBQ2YsOERBQUNkLGlFQUFVQTtnQ0FBQzBCLFNBQVE7Z0NBQUtDLFdBQVU7MENBQ25DLDRFQUFDbkIsa0RBQUlBO29DQUFDc0IsTUFBTztvQ0FBSUMsS0FBS3JCO29DQUFtQnNCLFNBQVM7K0NBQU1mLFNBQVNWLGtFQUFjQSxDQUFDRyxrQkFBa0J1QixRQUFRQzs7OENBQWU7Ozs7Ozs7Ozs7dUNBRXpIOzBDQUdGLDhEQUFDbEMsaUVBQVVBO2dDQUFDMEIsU0FBUTtnQ0FBS0MsV0FBVTswQ0FDbkMsNEVBQUNuQixrREFBSUE7b0NBQUNzQixNQUFPO29DQUFjQyxLQUFLcEI7b0NBQWNxQixTQUFTOytDQUFNZixTQUFTVixrRUFBY0EsQ0FBQ0ksYUFBYXNCLFFBQVFDOzs4Q0FBZTs7Ozs7Ozs7Ozs7MENBRXpILDhEQUFDbEMsaUVBQVVBO2dDQUFDMEIsU0FBUTtnQ0FBS0MsV0FBVTswQ0FDbkMsNEVBQUNuQixrREFBSUE7b0NBQUNzQixNQUFPO29DQUFjQyxLQUFLbkI7b0NBQWNvQixTQUFTOytDQUFNZixTQUFTVixrRUFBY0EsQ0FBQ0ssYUFBYXFCLFFBQVFDOzs4Q0FBZTs7Ozs7Ozs7Ozs7MENBRXpILDhEQUFDbEMsaUVBQVVBO2dDQUFDMEIsU0FBUTtnQ0FBS0MsV0FBVTswQ0FDbkMsNEVBQUNuQixrREFBSUE7b0NBQUNzQixNQUFPO29DQUFZQyxLQUFLbEI7b0NBQVltQixTQUFTOytDQUFNZixTQUFTVixrRUFBY0EsQ0FBQ00sV0FBV29CLFFBQVFDOzs4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdIO0dBOUN3QnpCOztRQUtFSCxvREFBV0E7UUFDbEJELG9EQUFXQTs7O0tBTk5JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcEJhci5qcz80NGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xuXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRDdXJyZW50UGFnZSB9IGZyb20gJy4uL3JlZHV4L0FwcEJhclNsaWNlJztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQXBwQmFyKCkge1xuICBjb25zdCBtYWluQ3J5cHRvTGlzdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgZmF2b3JpdGVzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwb3J0Zm9saW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGFjY291bnRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFwcEJhcilcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXG4gICAgICAgICAgICBzeD17eyBtcjogMiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICB7Y3VycmVudFBhZ2V9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxCb3ggZGlzcGxheT17J2ZsZXgnfSBmbGV4R3Jvdz17MX0ganVzdGlmeUNvbnRlbnQ9eydzcGFjZS1hcm91bmQnfT4gXG4gICAgICAgICAge2N1cnJlbnRQYWdlICE9PSAnTWFpbiBjcnlwdG8tbGlzdCcgPyBcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0gcmVmPXttYWluQ3J5cHRvTGlzdFJlZn0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0Q3VycmVudFBhZ2UobWFpbkNyeXB0b0xpc3RSZWYuY3VycmVudC50ZXh0Q29udGVudCkpfT5NYWluIGNyeXB0by1saXN0PC9MaW5rPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PiA6XG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiID5cbiAgICAgICAgICA8TGluayBocmVmPXtgL2Zhdm9yaXRlcy9gfSByZWY9e2Zhdm9yaXRlc1JlZn0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0Q3VycmVudFBhZ2UoZmF2b3JpdGVzUmVmLmN1cnJlbnQudGV4dENvbnRlbnQpKX0+IEZhdm9yaXRlcyA8L0xpbms+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiID5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3BvcnRmb2xpby9gfSByZWY9e3BvcnRmb2xpb1JlZn0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0Q3VycmVudFBhZ2UocG9ydGZvbGlvUmVmLmN1cnJlbnQudGV4dENvbnRlbnQpKX0+UG9ydGZvbGlvPC9MaW5rPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiA+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9hY2NvdW50L2B9IHJlZj17YWNjb3VudFJlZn0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0Q3VycmVudFBhZ2UoYWNjb3VudFJlZi5jdXJyZW50LnRleHRDb250ZW50KSl9PkFjY291bnQ8L0xpbms+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHsvKiA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+ICovfVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIk1lbnVJY29uIiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldEN1cnJlbnRQYWdlIiwiTGluayIsIkJ1dHRvbkFwcEJhciIsIm1haW5DcnlwdG9MaXN0UmVmIiwiZmF2b3JpdGVzUmVmIiwicG9ydGZvbGlvUmVmIiwiYWNjb3VudFJlZiIsImN1cnJlbnRQYWdlIiwic3RhdGUiLCJhcHBCYXIiLCJkaXNwYXRjaCIsInN4IiwiZmxleEdyb3ciLCJwb3NpdGlvbiIsInNpemUiLCJlZGdlIiwiY29sb3IiLCJhcmlhLWxhYmVsIiwibXIiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaHJlZiIsInJlZiIsIm9uQ2xpY2siLCJjdXJyZW50IiwidGV4dENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AppBar.js\n"));

/***/ })

});