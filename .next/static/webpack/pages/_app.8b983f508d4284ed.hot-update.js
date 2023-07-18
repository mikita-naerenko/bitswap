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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFavoritesCoin: function() { return /* binding */ addFavoritesCoin; },\n/* harmony export */   removeFavoritesCoin: function() { return /* binding */ removeFavoritesCoin; },\n/* harmony export */   selectAll: function() { return /* binding */ selectAll; },\n/* harmony export */   setFavoritePrice: function() { return /* binding */ setFavoritePrice; },\n/* harmony export */   setOffset: function() { return /* binding */ setOffset; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/api */ \"./src/components/api.js\");\n\n\n\nvar filtersAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();\nvar initialState = filtersAdapter.getInitialState({\n    offset: 0,\n    favoritesCoin: [],\n    cryptoDetails: {},\n    favoritePrice: {}\n});\nvar mainCryptoListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"mainCryptoList\",\n    initialState: initialState,\n    reducers: {\n        setOffset: function(state, action) {\n            state.offset = action.payload;\n        },\n        addFavoritesCoin: function(state, action) {\n            var newFavorite = action.payload;\n            state.favoritesCoin.push(newFavorite);\n        },\n        removeFavoritesCoin: function(state, action) {\n            var coinToRemove = action.payload;\n            state.favoritesCoin = state.favoritesCoin.filter(function(coin) {\n                return coin !== coinToRemove;\n            });\n        },\n        setFavoritePrice: function(state, action) {\n            var newData = action.payload;\n            if (Object.keys(state.favoritePrice).length > 0) {\n                Object.entries(newData).forEach(function(param) {\n                    var _param = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(param, 2), coin = _param[0], price = _param[1];\n                    if (state[coin] !== price) {\n                        state[coin] = price;\n                    }\n                });\n            } else {\n                state.favoritePrice = newData;\n            }\n        }\n    },\n    extraReducers: function(builder) {}\n});\nvar actions = mainCryptoListSlice.actions, reducer = mainCryptoListSlice.reducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\nvar selectAll = filtersAdapter.getSelectors(function(state) {\n    return state.mainCryptoList;\n}).selectAll;\nvar setOffset = actions.setOffset, addFavoritesCoin = actions.addFavoritesCoin, removeFavoritesCoin = actions.removeFavoritesCoin, setFavoritePrice = actions.setFavoritePrice;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvTWFpbkNyeXB0b0xpc3RTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0Y7QUFDekI7QUFFN0QsSUFBTUksaUJBQWlCRixxRUFBbUJBO0FBRTFDLElBQU1HLGVBQWVELGVBQWVFLGdCQUFnQjtJQUNoREMsUUFBUTtJQUNSQyxlQUFlLEVBQUU7SUFDakJDLGVBQWUsQ0FBQztJQUNoQkMsZUFBZSxDQUFDO0FBQ3BCO0FBR0EsSUFBTUMsc0JBQXNCWCw2REFBV0EsQ0FBQztJQUNwQ1ksTUFBTTtJQUNOUCxjQUFBQTtJQUNBUSxVQUFVO1FBQ05DLFdBQVcsU0FBQ0MsT0FBT0M7WUFBWUQsTUFBTVIsU0FBU1MsT0FBT0M7UUFBTztRQUU1REMsa0JBQWtCLFNBQUNILE9BQU9DO1lBQ3RCLElBQU1HLGNBQWNILE9BQU9DO1lBQzNCRixNQUFNUCxjQUFjWSxLQUFLRDtRQUMzQjtRQUNGRSxxQkFBcUIsU0FBQ04sT0FBT0M7WUFDekIsSUFBTU0sZUFBZU4sT0FBT0M7WUFDNUJGLE1BQU1QLGdCQUFnQk8sTUFBTVAsY0FBY2UsT0FDeEMsU0FBQ0M7dUJBQVNBLFNBQVNGOztRQUV2QjtRQUNBRyxrQkFBa0IsU0FBQ1YsT0FBTUM7WUFDdkIsSUFBTVUsVUFBVVYsT0FBT0M7WUFDdkIsSUFBSVUsT0FBT0MsS0FBS2IsTUFBTUwsZUFBZW1CLFNBQVMsR0FBRztnQkFDL0NGLE9BQU9HLFFBQVFKLFNBQVNLLFFBQVE7NEdBQUVQLGtCQUFNUTtvQkFDdEMsSUFBSWpCLEtBQUssQ0FBQ1MsS0FBSyxLQUFLUSxPQUFPO3dCQUN6QmpCLEtBQUssQ0FBQ1MsS0FBSyxHQUFHUTtvQkFDaEI7Z0JBQ0Y7WUFDRixPQUFPO2dCQUNMakIsTUFBTUwsZ0JBQWdCZ0I7WUFDeEI7UUFHRjtJQUNOO0lBQ0FPLGVBQWUsU0FBQ0MsVUFDbEI7QUFDRjtBQUVBLElBQU9DLFVBQW9CeEIsb0JBQXBCd0IsU0FBU0MsVUFBV3pCLG9CQUFYeUI7QUFDaEIsK0RBQWVBLE9BQU9BLEVBQUM7QUFDaEIsSUFBTSxZQUFjaEMsZUFBZWtDLGFBQWF2QixTQUFBQTtXQUFTQSxNQUFNd0I7R0FBeERGLFVBQXdFO0FBRy9FLElBQ0h2QixZQUlBcUIsUUFKQXJCLFdBQ0FJLG1CQUdBaUIsUUFIQWpCLGtCQUNBRyxzQkFFQWMsUUFGQWQscUJBQ0FJLG1CQUNBVSxRQURBVixpQkFDUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvTWFpbkNyeXB0b0xpc3RTbGljZS5qcz8yMDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVFbnRpdHlBZGFwdGVyIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHVzZUdldENyeXB0b0RldGFpbHNRdWVyeSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2FwaVwiO1xuXG5jb25zdCBmaWx0ZXJzQWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXIoKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gZmlsdGVyc0FkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgZmF2b3JpdGVzQ29pbjogW10sXG4gICAgY3J5cHRvRGV0YWlsczoge30gLFxuICAgIGZhdm9yaXRlUHJpY2U6IHt9XG59KVxuXG5cbmNvbnN0IG1haW5DcnlwdG9MaXN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ21haW5DcnlwdG9MaXN0JyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0T2Zmc2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge3N0YXRlLm9mZnNldCA9IGFjdGlvbi5wYXlsb2FkfSxcbiAgICAgICAgXG4gICAgICAgIGFkZEZhdm9yaXRlc0NvaW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdGYXZvcml0ZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgc3RhdGUuZmF2b3JpdGVzQ29pbi5wdXNoKG5ld0Zhdm9yaXRlKTtcbiAgICAgICAgICB9LFxuICAgICAgICByZW1vdmVGYXZvcml0ZXNDb2luOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29pblRvUmVtb3ZlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICBzdGF0ZS5mYXZvcml0ZXNDb2luID0gc3RhdGUuZmF2b3JpdGVzQ29pbi5maWx0ZXIoXG4gICAgICAgICAgICAgIChjb2luKSA9PiBjb2luICE9PSBjb2luVG9SZW1vdmVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXRGYXZvcml0ZVByaWNlOiAoc3RhdGUsYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUuZmF2b3JpdGVQcmljZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhuZXdEYXRhKS5mb3JFYWNoKChbY29pbiwgcHJpY2VdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlW2NvaW5dICE9PSBwcmljZSkge1xuICAgICAgICAgICAgICAgICAgc3RhdGVbY29pbl0gPSBwcmljZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhdGUuZmF2b3JpdGVQcmljZSA9IG5ld0RhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgfSxcbn0pOyBcblxuY29uc3Qge2FjdGlvbnMsIHJlZHVjZXJ9ID0gbWFpbkNyeXB0b0xpc3RTbGljZTtcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5leHBvcnQgY29uc3Qge3NlbGVjdEFsbH0gPSBmaWx0ZXJzQWRhcHRlci5nZXRTZWxlY3RvcnMoc3RhdGUgPT4gc3RhdGUubWFpbkNyeXB0b0xpc3QpO1xuXG5cbmV4cG9ydCBjb25zdCB7XG4gICAgc2V0T2Zmc2V0LFxuICAgIGFkZEZhdm9yaXRlc0NvaW4sXG4gICAgcmVtb3ZlRmF2b3JpdGVzQ29pbixcbiAgICBzZXRGYXZvcml0ZVByaWNlXG59ID0gYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVFbnRpdHlBZGFwdGVyIiwidXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5IiwiZmlsdGVyc0FkYXB0ZXIiLCJpbml0aWFsU3RhdGUiLCJnZXRJbml0aWFsU3RhdGUiLCJvZmZzZXQiLCJmYXZvcml0ZXNDb2luIiwiY3J5cHRvRGV0YWlscyIsImZhdm9yaXRlUHJpY2UiLCJtYWluQ3J5cHRvTGlzdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0T2Zmc2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWRkRmF2b3JpdGVzQ29pbiIsIm5ld0Zhdm9yaXRlIiwicHVzaCIsInJlbW92ZUZhdm9yaXRlc0NvaW4iLCJjb2luVG9SZW1vdmUiLCJmaWx0ZXIiLCJjb2luIiwic2V0RmF2b3JpdGVQcmljZSIsIm5ld0RhdGEiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZW50cmllcyIsImZvckVhY2giLCJwcmljZSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJzZWxlY3RBbGwiLCJnZXRTZWxlY3RvcnMiLCJtYWluQ3J5cHRvTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/MainCryptoListSlice.js\n"));

/***/ })

});