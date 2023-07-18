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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Table */ \"./src/components/Table.js\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pagination */ \"./src/components/Pagination.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var _redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/MainCryptoListSlice */ \"./src/redux/MainCryptoListSlice.js\");\n/* harmony import */ var _components_WebSocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/WebSocket */ \"./src/components/WebSocket.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Favorites = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }), favoriteCoinsForRequest = _useSelector.favoriteCoinsForRequest, offset = _useSelector.offset;\n    var _useGetFavoriteCoinsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.useGetFavoriteCoinsQuery)(favoriteCoinsForRequest), favoriteCoinsList = _useGetFavoriteCoinsQuery.data, isLoading = _useGetFavoriteCoinsQuery.isLoading, isError = _useGetFavoriteCoinsQuery.isError;\n    // Create a list to be rendered by using the offset value from Redux, which depends on the active button in the pagination\n    var favoriteConsListToRender = favoriteCoinsList ? favoriteCoinsList.map(function(item) {\n        return item.data;\n    }).slice(offset, offset + 10) : null;\n    var favoriteCoinsListTest = favoriteCoinsList && favoriteCoinsList.map(function(item) {\n        return item.data;\n    });\n    console.log(favoriteCoinsListTest);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (favoriteCoinsList) {\n            // Update state of button's quantity for pagination in redux by lendth of favorite coins list\n            dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_7__.setCountForPagination)(favoriteCoinsList.length));\n            dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__.setFavoriteCoinsList)(favoriteCoinsListTest));\n            dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__.setOffset)(0));\n            dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__.updateFavoriteCoinsList)());\n        }\n    }, [\n        favoriteCoinsListTest\n    ]);\n    (0,_components_WebSocket__WEBPACK_IMPORTED_MODULE_9__.useWebSocketListeners)(favoriteCoinsForRequest);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this),\n            favoriteConsListToRender ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                row: favoriteConsListToRender\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 38,\n                columnNumber: 41\n            }, _this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                display: \"flex\",\n                justifyContent: \"center\",\n                sx: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                    lineNumber: 40,\n                    columnNumber: 23\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Favorites, \"yQKuBMYzCR0HbFvXDxLVZMS7DJM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        _components_api__WEBPACK_IMPORTED_MODULE_5__.useGetFavoriteCoinsQuery,\n        _components_WebSocket__WEBPACK_IMPORTED_MODULE_9__.useWebSocketListeners\n    ];\n});\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3JpdGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Y7QUFDYTtBQUNuQjtBQUNtQjtBQUNNO0FBQzNCO0FBQzJCO0FBQzJDO0FBQzFDO0FBSTlELElBQU1hLFlBQVk7O0lBQ2QsSUFBTUMsV0FBV1Ysd0RBQVdBO0lBQzVCLElBQTRDQyxlQUFBQSx3REFBV0EsQ0FBQ1UsU0FBQUE7ZUFBU0EsTUFBTUM7UUFBL0RDLDBCQUFvQ1osYUFBcENZLHlCQUF5QkMsU0FBV2IsYUFBWGE7SUFDakMsSUFBc0RaLDRCQUFBQSx5RUFBd0JBLENBQUNXLDBCQUF4RUUsb0JBQStDYiwwQkFBL0NhLE1BQXlCRSxZQUFzQmYsMEJBQXRCZSxXQUFXQyxVQUFXaEIsMEJBQVhnQjtJQUMzQywwSEFBMEg7SUFDMUgsSUFBTUMsMkJBQTJCSCxvQkFBb0JBLGtCQUFrQkksSUFBSUMsU0FBQUE7ZUFBUUEsS0FBS047T0FBTU8sTUFBTVIsUUFBUUEsU0FBUyxNQUFLO0lBQzFILElBQU1TLHdCQUF3QlAscUJBQXFCQSxrQkFBa0JJLElBQUlDLFNBQUFBO2VBQVFBLEtBQUtOOztJQUN0RlMsUUFBUUMsSUFBSUY7SUFDWnBCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWEsbUJBQW1CO1lBQ25CLDZGQUE2RjtZQUM3Rk4sU0FBU04seUVBQXFCQSxDQUFDWSxrQkFBa0JVO1lBQ2pEaEIsU0FBU0osZ0ZBQW9CQSxDQUFDaUI7WUFDOUJiLFNBQVNMLHFFQUFTQSxDQUFDO1lBQ25CSyxTQUFTSCxtRkFBdUJBO1FBQ3BDO0lBQ0osR0FBRTtRQUFDZ0I7S0FBc0I7SUFDekJmLDRFQUFxQkEsQ0FBQ0s7SUFHdEIscUJBQ0k7OzBCQUNJLDhEQUFDaEIsMERBQU1BOzs7OzswQkFDUCw4REFBQzhCOzBCQUFHOzs7Ozs7WUFDSFIseUNBQTJCLDhEQUFDdkIseURBQVVBO2dCQUFDZ0MsS0FBS1Q7Ozs7O3dCQUE4QjswQkFDM0UsOERBQUNwQiwwREFBR0E7Z0JBQUM4QixTQUFRO2dCQUFPQyxnQkFBZTtnQkFBU0MsSUFBSTtvQkFBQ0MsV0FBVztnQkFBTTswQkFDeEQsNEVBQUNsQyw4REFBZUE7Ozs7Ozs7Ozs7OztBQUt0QztHQS9CTVc7O1FBQ2VULG9EQUFXQTtRQUNnQkMsb0RBQVdBO1FBQ0RDLHFFQUF3QkE7UUFjOUVNLHdFQUFxQkE7OztLQWpCbkJDO0FBaUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9mYXZvcml0ZXMuanM/NzA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzaWNUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlJyBcbmltcG9ydCBBcHBCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBCYXInO1xuaW1wb3J0IEJhc2ljUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VHZXRGYXZvcml0ZUNvaW5zUXVlcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL2FwaSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzZXRDb3VudEZvclBhZ2luYXRpb24gfSBmcm9tICcuLi9yZWR1eC9BcHBCYXJTbGljZSc7XG5pbXBvcnQgeyBzZXRPZmZzZXQsIHNldEZhdm9yaXRlQ29pbnNMaXN0LCB1cGRhdGVGYXZvcml0ZUNvaW5zTGlzdCB9IGZyb20gJy4uL3JlZHV4L01haW5DcnlwdG9MaXN0U2xpY2UnO1xuaW1wb3J0IHt1c2VXZWJTb2NrZXRMaXN0ZW5lcnN9IGZyb20gJy4uL2NvbXBvbmVudHMvV2ViU29ja2V0JztcblxuXG5cbmNvbnN0IEZhdm9yaXRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgeyBmYXZvcml0ZUNvaW5zRm9yUmVxdWVzdCwgb2Zmc2V0IH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluQ3J5cHRvTGlzdCk7XG4gICAgY29uc3Qge2RhdGE6IGZhdm9yaXRlQ29pbnNMaXN0LCBpc0xvYWRpbmcsIGlzRXJyb3J9ID0gdXNlR2V0RmF2b3JpdGVDb2luc1F1ZXJ5KGZhdm9yaXRlQ29pbnNGb3JSZXF1ZXN0KTtcbiAgICAvLyBDcmVhdGUgYSBsaXN0IHRvIGJlIHJlbmRlcmVkIGJ5IHVzaW5nIHRoZSBvZmZzZXQgdmFsdWUgZnJvbSBSZWR1eCwgd2hpY2ggZGVwZW5kcyBvbiB0aGUgYWN0aXZlIGJ1dHRvbiBpbiB0aGUgcGFnaW5hdGlvblxuICAgIGNvbnN0IGZhdm9yaXRlQ29uc0xpc3RUb1JlbmRlciA9IGZhdm9yaXRlQ29pbnNMaXN0ID8gZmF2b3JpdGVDb2luc0xpc3QubWFwKGl0ZW0gPT4gaXRlbS5kYXRhKS5zbGljZShvZmZzZXQsIG9mZnNldCArIDEwKTogbnVsbDtcbiAgICBjb25zdCBmYXZvcml0ZUNvaW5zTGlzdFRlc3QgPSBmYXZvcml0ZUNvaW5zTGlzdCAmJiBmYXZvcml0ZUNvaW5zTGlzdC5tYXAoaXRlbSA9PiBpdGVtLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlQ29pbnNMaXN0VGVzdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGZhdm9yaXRlQ29pbnNMaXN0KSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGUgb2YgYnV0dG9uJ3MgcXVhbnRpdHkgZm9yIHBhZ2luYXRpb24gaW4gcmVkdXggYnkgbGVuZHRoIG9mIGZhdm9yaXRlIGNvaW5zIGxpc3RcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldENvdW50Rm9yUGFnaW5hdGlvbihmYXZvcml0ZUNvaW5zTGlzdC5sZW5ndGgpKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEZhdm9yaXRlQ29pbnNMaXN0KGZhdm9yaXRlQ29pbnNMaXN0VGVzdCkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0T2Zmc2V0KDApKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUZhdm9yaXRlQ29pbnNMaXN0KCkpXG4gICAgICAgIH1cbiAgICB9LFtmYXZvcml0ZUNvaW5zTGlzdFRlc3RdKVxuICAgIHVzZVdlYlNvY2tldExpc3RlbmVycyhmYXZvcml0ZUNvaW5zRm9yUmVxdWVzdCk7XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEFwcEJhci8+XG4gICAgICAgICAgICA8aDE+RmF2b3JpdGVzPC9oMT5cbiAgICAgICAgICAgIHtmYXZvcml0ZUNvbnNMaXN0VG9SZW5kZXIgPyA8QmFzaWNUYWJsZSByb3c9e2Zhdm9yaXRlQ29uc0xpc3RUb1JlbmRlcn0vPiA6IG51bGx9XG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBzeD17e21hcmdpblRvcDogJzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJhc2ljUGFnaW5hdGlvbi8+ICBcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXM7Il0sIm5hbWVzIjpbIkJhc2ljVGFibGUiLCJBcHBCYXIiLCJCYXNpY1BhZ2luYXRpb24iLCJCb3giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlR2V0RmF2b3JpdGVDb2luc1F1ZXJ5IiwidXNlRWZmZWN0Iiwic2V0Q291bnRGb3JQYWdpbmF0aW9uIiwic2V0T2Zmc2V0Iiwic2V0RmF2b3JpdGVDb2luc0xpc3QiLCJ1cGRhdGVGYXZvcml0ZUNvaW5zTGlzdCIsInVzZVdlYlNvY2tldExpc3RlbmVycyIsIkZhdm9yaXRlcyIsImRpc3BhdGNoIiwic3RhdGUiLCJtYWluQ3J5cHRvTGlzdCIsImZhdm9yaXRlQ29pbnNGb3JSZXF1ZXN0Iiwib2Zmc2V0IiwiZGF0YSIsImZhdm9yaXRlQ29pbnNMaXN0IiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImZhdm9yaXRlQ29uc0xpc3RUb1JlbmRlciIsIm1hcCIsIml0ZW0iLCJzbGljZSIsImZhdm9yaXRlQ29pbnNMaXN0VGVzdCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJoMSIsInJvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN4IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/favorites.js\n"));

/***/ })

});