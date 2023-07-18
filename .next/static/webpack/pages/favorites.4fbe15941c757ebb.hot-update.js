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

/***/ "./src/components/Table.js":
/*!*********************************!*\
  !*** ./src/components/Table.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableHead */ \"./node_modules/@mui/material/TableHead/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/TableRow/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _ButtonAddToFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonAddToFavorites */ \"./src/components/ButtonAddToFavorites.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/MainCryptoListSlice */ \"./src/redux/MainCryptoListSlice.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction BasicTable(props) {\n    var _this = this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var favoriteCoinsForRequest = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }).favoriteCoinsForRequest;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var handleClick = function(id) {\n        // Add or remove from favoritesCoin state \n        if (!favoriteCoinsForRequest.includes(id)) {\n            dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_4__.addFavoriteCoinsForRequest)(id));\n        } else {\n            dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_4__.removeFavoriteCoinsForRequest)(id));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            sx: {\n                minWidth: 650\n            },\n            \"aria-label\": \"simple table\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                children: \"Favorites\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                children: \"Rank\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                align: \"right\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                align: \"right\",\n                                children: \"priceUsd\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                align: \"right\",\n                                children: \"volumeUsd24Hr\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                align: \"right\",\n                                children: \"Supply\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    children: props.row.map(function(row) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            sx: {\n                                \"&:last-child td, &:last-child th\": {\n                                    border: 0\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    align: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonAddToFavorites__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        ref: ref,\n                                        onClick: handleClick,\n                                        id: row.id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    component: \"th\",\n                                    scope: \"row\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/\".concat(row.id),\n                                        children: row.rank\n                                    }, row.id, false, {\n                                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    align: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/\".concat(row.id),\n                                        children: row.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    align: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/\".concat(row.id),\n                                        children: Number(row.priceUsd).toFixed(5)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    align: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/\".concat(row.id),\n                                        children: Number(row.volumeUsd24Hr).toFixed(5)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    align: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/\".concat(row.id),\n                                        children: Number(row.supply).toFixed(5)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 42\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, row.rank, true, {\n                            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/Table.js\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, this);\n}\n_s(BasicTable, \"TP0NVJcsKfE3ug/BJeL15HSDAgs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = BasicTable;\nvar _c;\n$RefreshReg$(_c, \"BasicTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS8uL3NyYy9jb21wb25lbnRzL1RhYmxlLmpzPzQyODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVSb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbkFkZFRvRmF2b3JpdGVzIGZyb20gJy4vQnV0dG9uQWRkVG9GYXZvcml0ZXMnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWRkRmF2b3JpdGVDb2luc0ZvclJlcXVlc3QsIHJlbW92ZUZhdm9yaXRlQ29pbnNGb3JSZXF1ZXN0IH0gZnJvbSAnLi4vcmVkdXgvTWFpbkNyeXB0b0xpc3RTbGljZSc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNUYWJsZShwcm9wcykge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7IGZhdm9yaXRlQ29pbnNGb3JSZXF1ZXN0IH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluQ3J5cHRvTGlzdCk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaWQpID0+IHtcbiAgICAgIC8vIEFkZCBvciByZW1vdmUgZnJvbSBmYXZvcml0ZXNDb2luIHN0YXRlIFxuICAgICAgaWYgKCFmYXZvcml0ZUNvaW5zRm9yUmVxdWVzdC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgZGlzcGF0Y2goYWRkRmF2b3JpdGVDb2luc0ZvclJlcXVlc3QoaWQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZUZhdm9yaXRlQ29pbnNGb3JSZXF1ZXN0KGlkKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCB9fSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5GYXZvcml0ZXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5SYW5rPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPk5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+cHJpY2VVc2Q8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+dm9sdW1lVXNkMjRIcjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5TdXBwbHk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHtwcm9wcy5yb3cubWFwKChyb3cpID0+IChcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICBrZXk9e3Jvdy5yYW5rfVxuICAgICAgICAgICAgICAgIHN4PXt7ICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6IHsgYm9yZGVyOiAwIH0gfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPjxCdXR0b25BZGRUb0Zhdm9yaXRlcyByZWY9e3JlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IGlkPXtyb3cuaWR9Lz48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cm93LmlkfWB9IGtleT17cm93LmlkfT57cm93LnJhbmt9PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPjxMaW5rIGhyZWY9e2AvJHtyb3cuaWR9YH0+e3Jvdy5uYW1lfTwvTGluaz48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj48TGluayBocmVmPXtgLyR7cm93LmlkfWB9PntOdW1iZXIocm93LnByaWNlVXNkKS50b0ZpeGVkKDUpfTwvTGluaz48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj48TGluayBocmVmPXtgLyR7cm93LmlkfWB9PntOdW1iZXIocm93LnZvbHVtZVVzZDI0SHIpLnRvRml4ZWQoNSl9PC9MaW5rPjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPjxMaW5rIGhyZWY9e2AvJHtyb3cuaWR9YH0+e051bWJlcihyb3cuc3VwcGx5KS50b0ZpeGVkKDUpfTwvTGluaz48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICk7XG4gIH0iXSwibmFtZXMiOlsiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiUGFwZXIiLCJCdXR0b25BZGRUb0Zhdm9yaXRlcyIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJhZGRGYXZvcml0ZUNvaW5zRm9yUmVxdWVzdCIsInJlbW92ZUZhdm9yaXRlQ29pbnNGb3JSZXF1ZXN0IiwiTGluayIsIkJhc2ljVGFibGUiLCJwcm9wcyIsImRpc3BhdGNoIiwiZmF2b3JpdGVDb2luc0ZvclJlcXVlc3QiLCJzdGF0ZSIsIm1haW5DcnlwdG9MaXN0IiwicmVmIiwiaGFuZGxlQ2xpY2siLCJpZCIsImluY2x1ZGVzIiwiY29tcG9uZW50Iiwic3giLCJtaW5XaWR0aCIsImFyaWEtbGFiZWwiLCJhbGlnbiIsInJvdyIsIm1hcCIsImJvcmRlciIsIm9uQ2xpY2siLCJzY29wZSIsImhyZWYiLCJyYW5rIiwibmFtZSIsIk51bWJlciIsInByaWNlVXNkIiwidG9GaXhlZCIsInZvbHVtZVVzZDI0SHIiLCJzdXBwbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Table.js\n"));

/***/ })

});