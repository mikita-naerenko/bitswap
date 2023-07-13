"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/redux/MainCryptoListSlice.js":
/*!******************************************!*\
  !*** ./src/redux/MainCryptoListSlice.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFavoritesCoin: function() { return /* binding */ addFavoritesCoin; },\n/* harmony export */   fetchCryptoDetailsForAll: function() { return /* binding */ fetchCryptoDetailsForAll; },\n/* harmony export */   removeFavoritesCoin: function() { return /* binding */ removeFavoritesCoin; },\n/* harmony export */   selectAll: function() { return /* binding */ selectAll; },\n/* harmony export */   setOffset: function() { return /* binding */ setOffset; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n\n\n\n\nvar filtersAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();\nvar initialState = filtersAdapter.getInitialState({\n    offset: 0,\n    favoritesCoin: []\n});\nvar fetchCryptoDetailsForAll = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"crypto/fetchDetailsForAll\", function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(arr) {\n        var _s, promises, result;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _s = $RefreshSig$();\n                    promises = arr.map(_s(function(id) {\n                        _s();\n                        return (0,_components_api__WEBPACK_IMPORTED_MODULE_0__.useGetCryptoDetailsQuery)(id);\n                    }, \"/264VgEEfIryT9fyQrlBrLRCuY4=\", false, function() {\n                        return [\n                            _components_api__WEBPACK_IMPORTED_MODULE_0__.useGetCryptoDetailsQuery\n                        ];\n                    }));\n                    return [\n                        4,\n                        Promise.all(promises)\n                    ];\n                case 1:\n                    result = _state.sent();\n                    return [\n                        2,\n                        result\n                    ];\n            }\n        });\n    });\n    return function(arr) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar mainCryptoListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"mainCryptoList\",\n    initialState: initialState,\n    reducers: {\n        setOffset: function(state, action) {\n            state.offset = action.payload;\n        },\n        addFavoritesCoin: function(state, action) {\n            var newFavorite = action.payload;\n            state.favoritesCoin.push(newFavorite);\n        },\n        removeFavoritesCoin: function(state, action) {\n            var coinToRemove = action.payload;\n            state.favoritesCoin = state.favoritesCoin.filter(function(coin) {\n                return coin !== coinToRemove;\n            });\n        }\n    }\n});\nvar actions = mainCryptoListSlice.actions, reducer = mainCryptoListSlice.reducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\nvar selectAll = filtersAdapter.getSelectors(function(state) {\n    return state.mainCryptoList;\n}).selectAll;\nvar setOffset = actions.setOffset, addFavoritesCoin = actions.addFavoritesCoin, removeFavoritesCoin = actions.removeFavoritesCoin;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvTWFpbkNyeXB0b0xpc3RTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUN6QjtBQUU3RCxJQUFNSSxpQkFBaUJGLHFFQUFtQkE7QUFFMUMsSUFBTUcsZUFBZUQsZUFBZUUsZ0JBQWdCO0lBQ2hEQyxRQUFRO0lBQ1JDLGVBQWUsRUFBRTtBQUNyQjtBQUVPLElBQU1DLDJCQUEyQlIsa0VBQWdCQSxDQUN0RDtlQUNBLDRFQUFPUztnQkFDQ0MsVUFDQUM7Ozs7O29CQURBRCxXQUFXRCxJQUFJRyxPQUFJLFNBQUNDOzt3QkFBT1gsT0FBQUEseUVBQXdCQSxDQUFDVztvQkFBRTs7NEJBQTNCWCxxRUFBd0JBOzs7b0JBQzFDOzt3QkFBTVksUUFBUUMsSUFBSUw7OztvQkFBM0JDLFNBQVM7b0JBQ2Y7O3dCQUFPQTs7OztJQUNUO29CQUpPRjs7O0tBS1A7QUFHRixJQUFNTyxzQkFBc0JqQiw2REFBV0EsQ0FBQztJQUNwQ2tCLE1BQU07SUFDTmIsY0FBQUE7SUFDQWMsVUFBVTtRQUNOQyxXQUFXLFNBQUNDLE9BQU9DO1lBQVlELE1BQU1kLFNBQVNlLE9BQU9DO1FBQU87UUFDNURDLGtCQUFrQixTQUFDSCxPQUFPQztZQUN0QixJQUFNRyxjQUFjSCxPQUFPQztZQUMzQkYsTUFBTWIsY0FBY2tCLEtBQUtEO1FBQzNCO1FBQ0ZFLHFCQUFxQixTQUFDTixPQUFPQztZQUN6QixJQUFNTSxlQUFlTixPQUFPQztZQUM1QkYsTUFBTWIsZ0JBQWdCYSxNQUFNYixjQUFjcUIsT0FDeEMsU0FBQ0M7dUJBQVNBLFNBQVNGOztRQUV2QjtJQUNOO0FBV0o7QUFFQSxJQUFPRyxVQUFvQmQsb0JBQXBCYyxTQUFTQyxVQUFXZixvQkFBWGU7QUFDaEIsK0RBQWVBLE9BQU9BLEVBQUM7QUFDaEIsSUFBTSxZQUFjNUIsZUFBZThCLGFBQWFiLFNBQUFBO1dBQVNBLE1BQU1jO0dBQXhERixVQUF3RTtBQUcvRSxJQUNIYixZQUdBVyxRQUhBWCxXQUNBSSxtQkFFQU8sUUFGQVAsa0JBQ0FHLHNCQUNBSSxRQURBSixvQkFDUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvTWFpbkNyeXB0b0xpc3RTbGljZS5qcz8yMDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVFbnRpdHlBZGFwdGVyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHVzZUdldENyeXB0b0RldGFpbHNRdWVyeSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2FwaVwiO1xuXG5jb25zdCBmaWx0ZXJzQWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXIoKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gZmlsdGVyc0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgZmF2b3JpdGVzQ29pbjogW10sXG59KVxuXG5leHBvcnQgY29uc3QgZmV0Y2hDcnlwdG9EZXRhaWxzRm9yQWxsID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgJ2NyeXB0by9mZXRjaERldGFpbHNGb3JBbGwnLFxuICBhc3luYyAoYXJyKSA9PiB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBhcnIubWFwKChpZCkgPT4gdXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5KGlkKSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuKTtcblxuXG5jb25zdCBtYWluQ3J5cHRvTGlzdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdtYWluQ3J5cHRvTGlzdCcsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldE9mZnNldDogKHN0YXRlLCBhY3Rpb24pID0+IHtzdGF0ZS5vZmZzZXQgPSBhY3Rpb24ucGF5bG9hZH0sXG4gICAgICAgIGFkZEZhdm9yaXRlc0NvaW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdGYXZvcml0ZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgc3RhdGUuZmF2b3JpdGVzQ29pbi5wdXNoKG5ld0Zhdm9yaXRlKTtcbiAgICAgICAgICB9LFxuICAgICAgICByZW1vdmVGYXZvcml0ZXNDb2luOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29pblRvUmVtb3ZlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICBzdGF0ZS5mYXZvcml0ZXNDb2luID0gc3RhdGUuZmF2b3JpdGVzQ29pbi5maWx0ZXIoXG4gICAgICAgICAgICAgIChjb2luKSA9PiBjb2luICE9PSBjb2luVG9SZW1vdmVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgLy8gICAgIGJ1aWxkZXIgXG4gICAgLy8gICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hGaWx0ZXJzLnBlbmRpbmcsIHN0YXRlID0+IHtzdGF0ZS5maWx0ZXJzTG9hZGluZ1N0YXR1cyA9ICdsb2FkaW5nJ30pXG4gICAgLy8gICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hGaWx0ZXJzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgc3RhdGUuZmlsdGVyc0xvYWRpbmdTdGF0dXMgPSAnaWRsZSc7XG4gICAgLy8gICAgICAgICAgICAgICAgIGZpbHRlcnNBZGFwdGVyLnNldEFsbChzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hGaWx0ZXJzLnJlamVjdGVkLCBzdGF0ZSA9PiB7c3RhdGUuZmlsdGVyc0xvYWRpbmdTdGF0dXMgPSAnZXJyb3InfSlcbiAgICAvLyAgICAgICAgICAgICAuYWRkRGVmYXVsdENhc2UoKCkgPT4ge30pXG4gICAgLy8gfVxufSk7IFxuXG5jb25zdCB7YWN0aW9ucywgcmVkdWNlcn0gPSBtYWluQ3J5cHRvTGlzdFNsaWNlO1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbmV4cG9ydCBjb25zdCB7c2VsZWN0QWxsfSA9IGZpbHRlcnNBZGFwdGVyLmdldFNlbGVjdG9ycyhzdGF0ZSA9PiBzdGF0ZS5tYWluQ3J5cHRvTGlzdCk7XG5cblxuZXhwb3J0IGNvbnN0IHtcbiAgICBzZXRPZmZzZXQsXG4gICAgYWRkRmF2b3JpdGVzQ29pbixcbiAgICByZW1vdmVGYXZvcml0ZXNDb2luXG59ID0gYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVFbnRpdHlBZGFwdGVyIiwidXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5IiwiZmlsdGVyc0FkYXB0ZXIiLCJpbml0aWFsU3RhdGUiLCJnZXRJbml0aWFsU3RhdGUiLCJvZmZzZXQiLCJmYXZvcml0ZXNDb2luIiwiZmV0Y2hDcnlwdG9EZXRhaWxzRm9yQWxsIiwiYXJyIiwicHJvbWlzZXMiLCJyZXN1bHQiLCJtYXAiLCJpZCIsIlByb21pc2UiLCJhbGwiLCJtYWluQ3J5cHRvTGlzdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0T2Zmc2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWRkRmF2b3JpdGVzQ29pbiIsIm5ld0Zhdm9yaXRlIiwicHVzaCIsInJlbW92ZUZhdm9yaXRlc0NvaW4iLCJjb2luVG9SZW1vdmUiLCJmaWx0ZXIiLCJjb2luIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJzZWxlY3RBbGwiLCJnZXRTZWxlY3RvcnMiLCJtYWluQ3J5cHRvTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/MainCryptoListSlice.js\n"));

/***/ })

});