/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favorites",{

/***/ "./src/components/WebSocket.js":
/*!*************************************!*\
  !*** ./src/components/WebSocket.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/favorites.js":
/*!********************************!*\
  !*** ./src/pages/favorites.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Table */ \"./src/components/Table.js\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Pagination */ \"./src/components/Pagination.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/AppBarSlice */ \"./src/redux/AppBarSlice.js\");\n/* harmony import */ var _redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/MainCryptoListSlice */ \"./src/redux/MainCryptoListSlice.js\");\n/* harmony import */ var _components_WebSocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/WebSocket */ \"./src/components/WebSocket.js\");\n/* harmony import */ var _components_WebSocket__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_WebSocket__WEBPACK_IMPORTED_MODULE_9__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Favorites = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }), favoritesCoin = _useSelector.favoritesCoin, offset = _useSelector.offset;\n    var _useGetFavoriteCoinsQuery = (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.useGetFavoriteCoinsQuery)(favoritesCoin), favoriteCoinsList = _useGetFavoriteCoinsQuery.data, isLoading = _useGetFavoriteCoinsQuery.isLoading, isError = _useGetFavoriteCoinsQuery.isError;\n    // Create a list to be rendered by using the offset value from Redux, which depends on the active button in the pagination\n    var favoriteConsListToRender = favoriteCoinsList ? favoriteCoinsList.map(function(item) {\n        return item.data;\n    }).slice(offset, offset + 10) : null;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (favoriteCoinsList) {\n            // Update state of button's quantity for pagination in redux by lendth of favorite coins list\n            dispatch((0,_redux_AppBarSlice__WEBPACK_IMPORTED_MODULE_7__.setCountForPagination)(favoriteCoinsList.length));\n            dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_8__.setOffset)(0));\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            favoriteConsListToRender ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                row: favoriteConsListToRender\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 33,\n                columnNumber: 41\n            }, _this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                display: \"flex\",\n                justifyContent: \"center\",\n                sx: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                    lineNumber: 35,\n                    columnNumber: 23\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Favorites, \"uJ4g2U3Z95A6b7YZpx5VR8VOSic=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        _components_api__WEBPACK_IMPORTED_MODULE_5__.useGetFavoriteCoinsQuery\n    ];\n});\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3JpdGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNGO0FBQ2E7QUFDbkI7QUFDbUI7QUFDTTtBQUMzQjtBQUMyQjtBQUNKO0FBQ0s7QUFJOUQsSUFBTVcsWUFBWTs7SUFDZCxJQUFNQyxXQUFXUix3REFBV0E7SUFDNUIsSUFBa0NDLGVBQUFBLHdEQUFXQSxDQUFDUSxTQUFBQTtlQUFTQSxNQUFNQztRQUFyREMsZ0JBQTBCVixhQUExQlUsZUFBZUMsU0FBV1gsYUFBWFc7SUFDdkIsSUFBc0RWLDRCQUFBQSx5RUFBd0JBLENBQUNTLGdCQUF4RUUsb0JBQStDWCwwQkFBL0NXLE1BQXlCRSxZQUFzQmIsMEJBQXRCYSxXQUFXQyxVQUFXZCwwQkFBWGM7SUFDM0MsMEhBQTBIO0lBQzFILElBQU1DLDJCQUEyQkgsb0JBQW9CQSxrQkFBa0JJLElBQUlDLFNBQUFBO2VBQVFBLEtBQUtOO09BQU1PLE1BQU1SLFFBQVFBLFNBQVMsTUFBSztJQUMxSFQsZ0RBQVNBLENBQUM7UUFDTixJQUFJVyxtQkFBbUI7WUFDbkIsNkZBQTZGO1lBQzdGTixTQUFTSix5RUFBcUJBLENBQUNVLGtCQUFrQk87WUFDakRiLFNBQVNILHFFQUFTQSxDQUFDO1FBQ3ZCO0lBQ0o7SUFHQSxxQkFDSTs7MEJBQ0ksOERBQUNSLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUN5QjswQkFBRzs7Ozs7O1lBQ0hMLHlDQUEyQiw4REFBQ3JCLHlEQUFVQTtnQkFBQzJCLEtBQUtOOzs7Ozt3QkFBOEI7MEJBQzNFLDhEQUFDbEIsMERBQUdBO2dCQUFDeUIsU0FBUTtnQkFBT0MsZ0JBQWU7Z0JBQVNDLElBQUk7b0JBQUNDLFdBQVc7Z0JBQU07MEJBQ3hELDRFQUFDN0IsOERBQWVBOzs7Ozs7Ozs7Ozs7QUFLdEM7R0ExQk1TOztRQUNlUCxvREFBV0E7UUFDTUMsb0RBQVdBO1FBQ1NDLHFFQUF3QkE7OztLQUg1RUs7QUE0Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zhdm9yaXRlcy5qcz83MDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNpY1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUnIFxuaW1wb3J0IEFwcEJhciBmcm9tICcuLi9jb21wb25lbnRzL0FwcEJhcic7XG5pbXBvcnQgQmFzaWNQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUdldEZhdm9yaXRlQ29pbnNRdWVyeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXBpJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNldENvdW50Rm9yUGFnaW5hdGlvbiB9IGZyb20gJy4uL3JlZHV4L0FwcEJhclNsaWNlJztcbmltcG9ydCB7IHNldE9mZnNldCB9IGZyb20gJy4uL3JlZHV4L01haW5DcnlwdG9MaXN0U2xpY2UnO1xuaW1wb3J0IHt1c2VXZWJTb2NrZXRMaXN0ZW5lcnN9IGZyb20gJy4uL2NvbXBvbmVudHMvV2ViU29ja2V0JztcblxuXG5cbmNvbnN0IEZhdm9yaXRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgeyBmYXZvcml0ZXNDb2luLCBvZmZzZXQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1haW5DcnlwdG9MaXN0KTtcbiAgICBjb25zdCB7ZGF0YTogZmF2b3JpdGVDb2luc0xpc3QsIGlzTG9hZGluZywgaXNFcnJvcn0gPSB1c2VHZXRGYXZvcml0ZUNvaW5zUXVlcnkoZmF2b3JpdGVzQ29pbik7XG4gICAgLy8gQ3JlYXRlIGEgbGlzdCB0byBiZSByZW5kZXJlZCBieSB1c2luZyB0aGUgb2Zmc2V0IHZhbHVlIGZyb20gUmVkdXgsIHdoaWNoIGRlcGVuZHMgb24gdGhlIGFjdGl2ZSBidXR0b24gaW4gdGhlIHBhZ2luYXRpb25cbiAgICBjb25zdCBmYXZvcml0ZUNvbnNMaXN0VG9SZW5kZXIgPSBmYXZvcml0ZUNvaW5zTGlzdCA/IGZhdm9yaXRlQ29pbnNMaXN0Lm1hcChpdGVtID0+IGl0ZW0uZGF0YSkuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyAxMCk6IG51bGw7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGZhdm9yaXRlQ29pbnNMaXN0KSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGUgb2YgYnV0dG9uJ3MgcXVhbnRpdHkgZm9yIHBhZ2luYXRpb24gaW4gcmVkdXggYnkgbGVuZHRoIG9mIGZhdm9yaXRlIGNvaW5zIGxpc3RcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldENvdW50Rm9yUGFnaW5hdGlvbihmYXZvcml0ZUNvaW5zTGlzdC5sZW5ndGgpKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldE9mZnNldCgwKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxBcHBCYXIvPlxuICAgICAgICAgICAgPGgxPkZhdm9yaXRlczwvaDE+XG4gICAgICAgICAgICB7ZmF2b3JpdGVDb25zTGlzdFRvUmVuZGVyID8gPEJhc2ljVGFibGUgcm93PXtmYXZvcml0ZUNvbnNMaXN0VG9SZW5kZXJ9Lz4gOiBudWxsfVxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgc3g9e3ttYXJnaW5Ub3A6ICcyMHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgIDxCYXNpY1BhZ2luYXRpb24vPiAgXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzOyJdLCJuYW1lcyI6WyJCYXNpY1RhYmxlIiwiQXBwQmFyIiwiQmFzaWNQYWdpbmF0aW9uIiwiQm94IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUdldEZhdm9yaXRlQ29pbnNRdWVyeSIsInVzZUVmZmVjdCIsInNldENvdW50Rm9yUGFnaW5hdGlvbiIsInNldE9mZnNldCIsInVzZVdlYlNvY2tldExpc3RlbmVycyIsIkZhdm9yaXRlcyIsImRpc3BhdGNoIiwic3RhdGUiLCJtYWluQ3J5cHRvTGlzdCIsImZhdm9yaXRlc0NvaW4iLCJvZmZzZXQiLCJkYXRhIiwiZmF2b3JpdGVDb2luc0xpc3QiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZmF2b3JpdGVDb25zTGlzdFRvUmVuZGVyIiwibWFwIiwiaXRlbSIsInNsaWNlIiwibGVuZ3RoIiwiaDEiLCJyb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJzeCIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/favorites.js\n"));

/***/ })

});