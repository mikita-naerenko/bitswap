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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: function() { return /* binding */ api; },\n/* harmony export */   useGetCryptoDetailsQuery: function() { return /* binding */ useGetCryptoDetailsQuery; },\n/* harmony export */   useGetCryptoHistoryQuery: function() { return /* binding */ useGetCryptoHistoryQuery; },\n/* harmony export */   useGetCryptoListQuery: function() { return /* binding */ useGetCryptoListQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n\nvar api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://api.coincap.io/v2\"\n    }),\n    tagTypes: [\n        \"Get\"\n    ],\n    endpoints: function(builder) {\n        return {\n            getCryptoList: builder.query({\n                query: function(offset) {\n                    return \"/assets?offset=\".concat(offset, \"&limit=\", 10);\n                }\n            }),\n            getCryptoDetails: builder.query({\n                query: function(id) {\n                    return \"/assets/\".concat(id);\n                }\n            }),\n            getCryptoHistory: builder.query({\n                query: function(id, interval) {\n                    return \"/assets/\".concat(id, \"/history?interval=\").concat(interval);\n                }\n            })\n        };\n    }\n});\nvar useGetCryptoListQuery = api.useGetCryptoListQuery, useGetCryptoDetailsQuery = api.useGetCryptoDetailsQuery, useGetCryptoHistoryQuery = api.useGetCryptoHistoryQuery; // Authorization: 'Bearer 98c6563a-3f10-4d05-91e0-fd1279fe6f4b',\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUU7QUFHbEUsSUFBTUUsTUFBTUYsdUVBQVNBLENBQUM7SUFDM0JHLFdBQVdGLDRFQUFjQSxDQUFDO1FBQUVHLFNBQVM7SUFBNEI7SUFDakVDLFVBQVU7UUFBQztLQUFNO0lBQ2pCQyxXQUFXLFNBQUNDO2VBQWE7WUFDdkJDLGVBQWVELFFBQVFFLE1BQU07Z0JBQzNCQSxPQUFPLFNBQUNDOzJCQUNSLGtCQUFxQyxPQUFuQkEsUUFBTyxXQUFTOztZQUNwQztZQUNBQyxrQkFBa0JKLFFBQVFFLE1BQU07Z0JBQzlCQSxPQUFPLFNBQUNHOzJCQUFPLFdBQWMsT0FBSEE7O1lBQzVCO1lBQ0FDLGtCQUFrQk4sUUFBUUUsTUFBTTtnQkFDOUJBLE9BQU8sU0FBQ0csSUFBR0U7MkJBQWEsV0FBa0NBLE9BQXZCRixJQUFHLHNCQUE2QixPQUFURTs7WUFDNUQ7UUFDRjs7QUFDRixHQUFHO0FBRUksSUFBUUMsd0JBQThFYixJQUE5RWEsdUJBQXVCQywyQkFBdURkLElBQXZEYywwQkFBMEJDLDJCQUE2QmYsSUFBN0JlLHlCQUFpQyxDQUtqRyxnRUFBZ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXBpLmpzPzA0NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBhcGkgPSBjcmVhdGVBcGkoe1xuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogJ2h0dHBzOi8vYXBpLmNvaW5jYXAuaW8vdjInIH0pLFxuICB0YWdUeXBlczogWydHZXQnXSxcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICBnZXRDcnlwdG9MaXN0OiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiAob2Zmc2V0KSA9PiBcbiAgICAgIGAvYXNzZXRzP29mZnNldD0ke29mZnNldH0mbGltaXQ9JHsxMH1gLFxuICAgIH0pLFxuICAgIGdldENyeXB0b0RldGFpbHM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZCkgPT4gYC9hc3NldHMvJHtpZH1gLFxuICAgIH0pLFxuICAgIGdldENyeXB0b0hpc3Rvcnk6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZCxpbnRlcnZhbCkgPT4gYC9hc3NldHMvJHtpZH0vaGlzdG9yeT9pbnRlcnZhbD0ke2ludGVydmFsfWAsXG4gICAgfSlcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0Q3J5cHRvTGlzdFF1ZXJ5LCB1c2VHZXRDcnlwdG9EZXRhaWxzUXVlcnksIHVzZUdldENyeXB0b0hpc3RvcnlRdWVyeSB9ID0gYXBpO1xuXG5cblxuXG4vLyBBdXRob3JpemF0aW9uOiAnQmVhcmVyIDk4YzY1NjNhLTNmMTAtNGQwNS05MWUwLWZkMTI3OWZlNmY0YicsIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiYXBpIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsInRhZ1R5cGVzIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldENyeXB0b0xpc3QiLCJxdWVyeSIsIm9mZnNldCIsImdldENyeXB0b0RldGFpbHMiLCJpZCIsImdldENyeXB0b0hpc3RvcnkiLCJpbnRlcnZhbCIsInVzZUdldENyeXB0b0xpc3RRdWVyeSIsInVzZUdldENyeXB0b0RldGFpbHNRdWVyeSIsInVzZUdldENyeXB0b0hpc3RvcnlRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/api.js\n"));

/***/ })

});