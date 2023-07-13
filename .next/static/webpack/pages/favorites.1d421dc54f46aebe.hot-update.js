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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppBar */ \"./src/components/AppBar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/MainCryptoListSlice */ \"./src/redux/MainCryptoListSlice.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Favorites = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.mainCryptoList;\n    }), favoritesCoin = _useSelector.favoritesCoin, cryptoDetails = _useSelector.cryptoDetails;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        dispatch((0,_redux_MainCryptoListSlice__WEBPACK_IMPORTED_MODULE_3__.fetchCryptoDetailsForAll)(favoritesCoin));\n        console.log(cryptoDetails);\n    }, [\n        dispatch,\n        favoritesCoin,\n        cryptoDetails\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/pages/favorites.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Favorites, \"Yyw4a0qFl8Rbw++L/dhn6ghJYhA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3JpdGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ2E7QUFDaUI7QUFDdEM7QUFJbEMsSUFBTUssWUFBWTs7SUFDZCxJQUFNQyxXQUFXTCx3REFBV0E7SUFDNUIsSUFBeUNDLGVBQUFBLHdEQUFXQSxDQUFDSyxTQUFBQTtlQUFTQSxNQUFNQztRQUE1REMsZ0JBQWlDUCxhQUFqQ08sZUFBZUMsZ0JBQWtCUixhQUFsQlE7SUFDdkJOLGdEQUFTQSxDQUFDO1FBQ05FLFNBQVNILG9GQUF3QkEsQ0FBQ007UUFDbENFLFFBQVFDLElBQUlGO0lBQ2hCLEdBQUc7UUFBQ0o7UUFBVUc7UUFBZUM7S0FBYztJQUczQyxxQkFDSTs7MEJBQ0ksOERBQUNWLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNhOzBCQUFHOzs7Ozs7OztBQUtoQjtHQWpCTVI7O1FBQ2VKLG9EQUFXQTtRQUNhQyxvREFBV0E7OztLQUZsREc7QUFtQk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zhdm9yaXRlcy5qcz83MDkwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEFwcEJhciBmcm9tICcuLi9jb21wb25lbnRzL0FwcEJhcic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaENyeXB0b0RldGFpbHNGb3JBbGwgfSBmcm9tICcuLi9yZWR1eC9NYWluQ3J5cHRvTGlzdFNsaWNlJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5cbmNvbnN0IEZhdm9yaXRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgeyBmYXZvcml0ZXNDb2luLCBjcnlwdG9EZXRhaWxzIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tYWluQ3J5cHRvTGlzdCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDcnlwdG9EZXRhaWxzRm9yQWxsKGZhdm9yaXRlc0NvaW4pKTtcbiAgICAgICAgY29uc29sZS5sb2coY3J5cHRvRGV0YWlscyk7XG4gICAgfSwgW2Rpc3BhdGNoLCBmYXZvcml0ZXNDb2luLCBjcnlwdG9EZXRhaWxzXSk7XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEFwcEJhci8+XG4gICAgICAgICAgICA8aDE+RmF2b3JpdGVzPC9oMT5cbiAgICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXM7Il0sIm5hbWVzIjpbIkFwcEJhciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaENyeXB0b0RldGFpbHNGb3JBbGwiLCJ1c2VFZmZlY3QiLCJGYXZvcml0ZXMiLCJkaXNwYXRjaCIsInN0YXRlIiwibWFpbkNyeXB0b0xpc3QiLCJmYXZvcml0ZXNDb2luIiwiY3J5cHRvRGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/favorites.js\n"));

/***/ })

});