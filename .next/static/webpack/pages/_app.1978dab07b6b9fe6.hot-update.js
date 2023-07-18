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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: function() { return /* binding */ api; },\n/* harmony export */   useGetCryptoDetailsQuery: function() { return /* binding */ useGetCryptoDetailsQuery; },\n/* harmony export */   useGetCryptoHistoryQuery: function() { return /* binding */ useGetCryptoHistoryQuery; },\n/* harmony export */   useGetCryptoListQuery: function() { return /* binding */ useGetCryptoListQuery; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"/assets/\",\n        \"/history?interval=\",\n        \"\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"https://api.coincap.io/v2\"\n    }),\n    tagTypes: [\n        \"Get\"\n    ],\n    endpoints: function(builder) {\n        return {\n            getCryptoList: builder.query({\n                query: function(offset) {\n                    return \"/assets?offset=\".concat(offset, \"&limit=\", 10);\n                }\n            }),\n            getCryptoDetails: builder.query({\n                query: function(id) {\n                    return \"/assets/\".concat(id);\n                }\n            }),\n            getCryptoHistory: builder.query({\n                query: function(id, interval) {\n                    return console.log(id)(_templateObject(), id, interval);\n                }\n            })\n        };\n    }\n});\nvar useGetCryptoListQuery = api.useGetCryptoListQuery, useGetCryptoDetailsQuery = api.useGetCryptoDetailsQuery, useGetCryptoHistoryQuery = api.useGetCryptoHistoryQuery; // Authorization: 'Bearer 98c6563a-3f10-4d05-91e0-fd1279fe6f4b',\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlFO0FBR2xFLElBQU1FLE1BQU1GLHVFQUFTQSxDQUFDO0lBQzNCRyxXQUFXRiw0RUFBY0EsQ0FBQztRQUFFRyxTQUFTO0lBQTRCO0lBQ2pFQyxVQUFVO1FBQUM7S0FBTTtJQUNqQkMsV0FBVyxTQUFDQztlQUFhO1lBQ3ZCQyxlQUFlRCxRQUFRRSxNQUFNO2dCQUMzQkEsT0FBTyxTQUFDQzsyQkFDUixrQkFBcUMsT0FBbkJBLFFBQU8sV0FBUzs7WUFDcEM7WUFDQUMsa0JBQWtCSixRQUFRRSxNQUFNO2dCQUM5QkEsT0FBTyxTQUFDRzsyQkFBTyxXQUFjLE9BQUhBOztZQUM1QjtZQUNBQyxrQkFBa0JOLFFBQVFFLE1BQU07Z0JBQzlCQSxPQUFPLFNBQUNHLElBQUdFOzJCQUFhQyxRQUFRQyxJQUFJSix1QkFBZUEsSUFBdUJFOztZQUM1RTtRQUNGOztBQUNGLEdBQUc7QUFFSSxJQUFRRyx3QkFBOEVmLElBQTlFZSx1QkFBdUJDLDJCQUF1RGhCLElBQXZEZ0IsMEJBQTBCQywyQkFBNkJqQixJQUE3QmlCLHlCQUFpQyxDQUtqRyxnRUFBZ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXBpLmpzPzA0NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBhcGkgPSBjcmVhdGVBcGkoe1xuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogJ2h0dHBzOi8vYXBpLmNvaW5jYXAuaW8vdjInIH0pLFxuICB0YWdUeXBlczogWydHZXQnXSxcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICBnZXRDcnlwdG9MaXN0OiBidWlsZGVyLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiAob2Zmc2V0KSA9PiBcbiAgICAgIGAvYXNzZXRzP29mZnNldD0ke29mZnNldH0mbGltaXQ9JHsxMH1gLFxuICAgIH0pLFxuICAgIGdldENyeXB0b0RldGFpbHM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZCkgPT4gYC9hc3NldHMvJHtpZH1gLFxuICAgIH0pLFxuICAgIGdldENyeXB0b0hpc3Rvcnk6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZCxpbnRlcnZhbCkgPT4gY29uc29sZS5sb2coaWQpIGAvYXNzZXRzLyR7aWR9L2hpc3Rvcnk/aW50ZXJ2YWw9JHtpbnRlcnZhbH1gLFxuICAgIH0pXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHVzZUdldENyeXB0b0xpc3RRdWVyeSwgdXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5LCB1c2VHZXRDcnlwdG9IaXN0b3J5UXVlcnkgfSA9IGFwaTtcblxuXG5cblxuLy8gQXV0aG9yaXphdGlvbjogJ0JlYXJlciA5OGM2NTYzYS0zZjEwLTRkMDUtOTFlMC1mZDEyNzlmZTZmNGInLCJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsImFwaSIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJ0YWdUeXBlcyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRDcnlwdG9MaXN0IiwicXVlcnkiLCJvZmZzZXQiLCJnZXRDcnlwdG9EZXRhaWxzIiwiaWQiLCJnZXRDcnlwdG9IaXN0b3J5IiwiaW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwidXNlR2V0Q3J5cHRvTGlzdFF1ZXJ5IiwidXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5IiwidXNlR2V0Q3J5cHRvSGlzdG9yeVF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/api.js\n"));

/***/ })

});