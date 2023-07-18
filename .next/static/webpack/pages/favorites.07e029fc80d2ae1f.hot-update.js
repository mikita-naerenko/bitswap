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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Table */ \"./src/components/Table.js\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pagination */ \"./src/components/Pagination.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var _redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/MainCryptoListSlice */ \"./src/redux/MainCryptoListSlice.js\");\n/* harmony import */ var _components_WebSocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/WebSocket */ \"./src/components/WebSocket.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Favorites = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }), favoriteCoinsForRequest = _useSelector.favoriteCoinsForRequest, offset = _useSelector.offset, favoriteCoinsList = _useSelector.favoriteCoinsList;\n    var _useGetFavoriteCoinsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.useGetFavoriteCoinsQuery)(favoriteCoinsForRequest), favoriteCoinsListResponse = _useGetFavoriteCoinsQuery.data, isLoading = _useGetFavoriteCoinsQuery.isLoading, isError = _useGetFavoriteCoinsQuery.isError;\n    // Create a list to be rendered by using the offset value from Redux, which depends on the active button in the pagination\n    var favoriteConsListToRender = favoriteCoinsList ? favoriteCoinsList.map(function(item) {\n        return item;\n    }).slice(offset, offset + 10) : null;\n    var favoriteCoinsListTest = favoriteCoinsListResponse && favoriteCoinsListResponse.map(function(item) {\n        return item.data;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (favoriteCoinsListResponse) {\n            // Update state of button's quantity for pagination in redux by lendth of favorite coins list\n            dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_7__.setCountForPagination)(favoriteCoinsListResponse.length));\n            dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__.setFavoriteCoinsList)(favoriteCoinsListTest));\n            dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__.setOffset)(0));\n        }\n    }, [\n        favoriteCoinsListResponse\n    ]);\n    (0,_components_WebSocket__WEBPACK_IMPORTED_MODULE_9__.useWebSocketListeners)(favoriteCoinsForRequest);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, _this),\n            favoriteConsListToRender ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                row: favoriteConsListToRender\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 36,\n                columnNumber: 41\n            }, _this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                display: \"flex\",\n                justifyContent: \"center\",\n                sx: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                    lineNumber: 38,\n                    columnNumber: 23\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Favorites, \"ZXUZJ/ZufjB6xDWoOKLPJKa6FIg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        _components_api__WEBPACK_IMPORTED_MODULE_5__.useGetFavoriteCoinsQuery,\n        _components_WebSocket__WEBPACK_IMPORTED_MODULE_9__.useWebSocketListeners\n    ];\n});\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3JpdGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Y7QUFDYTtBQUNuQjtBQUNtQjtBQUNNO0FBQzNCO0FBQzJCO0FBQzJDO0FBQzFDO0FBSTlELElBQU1hLFlBQVk7O0lBQ2QsSUFBTUMsV0FBV1Ysd0RBQVdBO0lBQzVCLElBQStEQyxlQUFBQSx3REFBV0EsQ0FBQ1UsU0FBQUE7ZUFBU0EsTUFBTUM7UUFBbEZDLDBCQUF1RFosYUFBdkRZLHlCQUF5QkMsU0FBOEJiLGFBQTlCYSxRQUFRQyxvQkFBc0JkLGFBQXRCYztJQUN6QyxJQUE4RGIsNEJBQUFBLHlFQUF3QkEsQ0FBQ1csMEJBQWhGRyw0QkFBdURkLDBCQUF2RGMsTUFBaUNFLFlBQXNCaEIsMEJBQXRCZ0IsV0FBV0MsVUFBV2pCLDBCQUFYaUI7SUFDbkQsMEhBQTBIO0lBQzFILElBQU1DLDJCQUEyQkwsb0JBQW9CQSxrQkFBa0JNLElBQUlDLFNBQUFBO2VBQVFBO09BQU1DLE1BQU1ULFFBQVFBLFNBQVMsTUFBSztJQUNySCxJQUFNVSx3QkFBd0JQLDZCQUE2QkEsMEJBQTBCSSxJQUFJQyxTQUFBQTtlQUFRQSxLQUFLTjs7SUFDdEdiLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWMsMkJBQTJCO1lBQzNCLDZGQUE2RjtZQUM3RlAsU0FBU04seUVBQXFCQSxDQUFDYSwwQkFBMEJRO1lBQ3pEZixTQUFTSixnRkFBb0JBLENBQUNrQjtZQUM5QmQsU0FBU0wscUVBQVNBLENBQUM7UUFDdkI7SUFDSixHQUFFO1FBQUNZO0tBQTBCO0lBRTdCVCw0RUFBcUJBLENBQUNLO0lBRXRCLHFCQUNJOzswQkFDSSw4REFBQ2hCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUM2QjswQkFBRzs7Ozs7O1lBQ0hOLHlDQUEyQiw4REFBQ3hCLHlEQUFVQTtnQkFBQytCLEtBQUtQOzs7Ozt3QkFBOEI7MEJBQzNFLDhEQUFDckIsMERBQUdBO2dCQUFDNkIsU0FBUTtnQkFBT0MsZ0JBQWU7Z0JBQVNDLElBQUk7b0JBQUNDLFdBQVc7Z0JBQU07MEJBQ3hELDRFQUFDakMsOERBQWVBOzs7Ozs7Ozs7Ozs7QUFLdEM7R0E3Qk1XOztRQUNlVCxvREFBV0E7UUFDbUNDLG9EQUFXQTtRQUNaQyxxRUFBd0JBO1FBYXRGTSx3RUFBcUJBOzs7S0FoQm5CQztBQStCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZmF2b3JpdGVzLmpzPzcwOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2ljVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZScgXG5pbXBvcnQgQXBwQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQmFyJztcbmltcG9ydCBCYXNpY1BhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlR2V0RmF2b3JpdGVDb2luc1F1ZXJ5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hcGknO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2V0Q291bnRGb3JQYWdpbmF0aW9uIH0gZnJvbSAnLi4vcmVkdXgvQXBwQmFyU2xpY2UnO1xuaW1wb3J0IHsgc2V0T2Zmc2V0LCBzZXRGYXZvcml0ZUNvaW5zTGlzdCwgdXBkYXRlRmF2b3JpdGVDb2luc0xpc3QgfSBmcm9tICcuLi9yZWR1eC9NYWluQ3J5cHRvTGlzdFNsaWNlJztcbmltcG9ydCB7dXNlV2ViU29ja2V0TGlzdGVuZXJzfSBmcm9tICcuLi9jb21wb25lbnRzL1dlYlNvY2tldCc7XG5cblxuXG5jb25zdCBGYXZvcml0ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHsgZmF2b3JpdGVDb2luc0ZvclJlcXVlc3QsIG9mZnNldCwgZmF2b3JpdGVDb2luc0xpc3QgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW5DcnlwdG9MaXN0KTtcbiAgICBjb25zdCB7ZGF0YTogZmF2b3JpdGVDb2luc0xpc3RSZXNwb25zZSwgaXNMb2FkaW5nLCBpc0Vycm9yfSA9IHVzZUdldEZhdm9yaXRlQ29pbnNRdWVyeShmYXZvcml0ZUNvaW5zRm9yUmVxdWVzdCk7XG4gICAgLy8gQ3JlYXRlIGEgbGlzdCB0byBiZSByZW5kZXJlZCBieSB1c2luZyB0aGUgb2Zmc2V0IHZhbHVlIGZyb20gUmVkdXgsIHdoaWNoIGRlcGVuZHMgb24gdGhlIGFjdGl2ZSBidXR0b24gaW4gdGhlIHBhZ2luYXRpb25cbiAgICBjb25zdCBmYXZvcml0ZUNvbnNMaXN0VG9SZW5kZXIgPSBmYXZvcml0ZUNvaW5zTGlzdCA/IGZhdm9yaXRlQ29pbnNMaXN0Lm1hcChpdGVtID0+IGl0ZW0pLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgMTApOiBudWxsO1xuICAgIGNvbnN0IGZhdm9yaXRlQ29pbnNMaXN0VGVzdCA9IGZhdm9yaXRlQ29pbnNMaXN0UmVzcG9uc2UgJiYgZmF2b3JpdGVDb2luc0xpc3RSZXNwb25zZS5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChmYXZvcml0ZUNvaW5zTGlzdFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGUgb2YgYnV0dG9uJ3MgcXVhbnRpdHkgZm9yIHBhZ2luYXRpb24gaW4gcmVkdXggYnkgbGVuZHRoIG9mIGZhdm9yaXRlIGNvaW5zIGxpc3RcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldENvdW50Rm9yUGFnaW5hdGlvbihmYXZvcml0ZUNvaW5zTGlzdFJlc3BvbnNlLmxlbmd0aCkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0RmF2b3JpdGVDb2luc0xpc3QoZmF2b3JpdGVDb2luc0xpc3RUZXN0KSk7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRPZmZzZXQoMCkpO1xuICAgICAgICB9XG4gICAgfSxbZmF2b3JpdGVDb2luc0xpc3RSZXNwb25zZV0pXG4gICAgXG4gICAgdXNlV2ViU29ja2V0TGlzdGVuZXJzKGZhdm9yaXRlQ29pbnNGb3JSZXF1ZXN0KTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEFwcEJhci8+XG4gICAgICAgICAgICA8aDE+RmF2b3JpdGVzPC9oMT5cbiAgICAgICAgICAgIHtmYXZvcml0ZUNvbnNMaXN0VG9SZW5kZXIgPyA8QmFzaWNUYWJsZSByb3c9e2Zhdm9yaXRlQ29uc0xpc3RUb1JlbmRlcn0vPiA6IG51bGx9XG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBzeD17e21hcmdpblRvcDogJzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJhc2ljUGFnaW5hdGlvbi8+ICBcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXM7Il0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJBcHBCYXIiLCJCYXNpY1BhZ2luYXRpb24iLCJCb3giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlR2V0RmF2b3JpdGVDb2luc1F1ZXJ5IiwidXNlRWZmZWN0Iiwic2V0Q291bnRGb3JQYWdpbmF0aW9uIiwic2V0T2Zmc2V0Iiwic2V0RmF2b3JpdGVDb2luc0xpc3QiLCJ1cGRhdGVGYXZvcml0ZUNvaW5zTGlzdCIsInVzZVdlYlNvY2tldExpc3RlbmVycyIsIkZhdm9yaXRlcyIsImRpc3BhdGNoIiwic3RhdGUiLCJtYWluQ3J5cHRvTGlzdCIsImZhdm9yaXRlQ29pbnNGb3JSZXF1ZXN0Iiwib2Zmc2V0IiwiZmF2b3JpdGVDb2luc0xpc3QiLCJkYXRhIiwiZmF2b3JpdGVDb2luc0xpc3RSZXNwb25zZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJmYXZvcml0ZUNvbnNMaXN0VG9SZW5kZXIiLCJtYXAiLCJpdGVtIiwic2xpY2UiLCJmYXZvcml0ZUNvaW5zTGlzdFRlc3QiLCJsZW5ndGgiLCJoMSIsInJvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN4IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/favorites.js\n"));

/***/ })

});