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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: function() { return /* binding */ api; },\n/* harmony export */   useGetCryptoDetailsQuery: function() { return /* binding */ useGetCryptoDetailsQuery; },\n/* harmony export */   useGetCryptoHistoryQuery: function() { return /* binding */ useGetCryptoHistoryQuery; },\n/* harmony export */   useGetCryptoListQuery: function() { return /* binding */ useGetCryptoListQuery; },\n/* harmony export */   useSearchCoinsQuery: function() { return /* binding */ useSearchCoinsQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n\nvar api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://api.coincap.io/v2\"\n    }),\n    tagTypes: [\n        \"Get\"\n    ],\n    endpoints: function(builder) {\n        return {\n            getCryptoList: builder.query({\n                query: function(params) {\n                    var offset = params.offset, limit = params.limit;\n                    var defaultLimit = 10;\n                    var requestLimit = limit || defaultLimit;\n                    return \"/assets?offset=\".concat(offset, \"&limit=\").concat(requestLimit);\n                }\n            }),\n            getCryptoDetails: builder.query({\n                query: function(ids) {\n                    var idArray = Array.isArray(ids) ? ids : [\n                        ids\n                    ];\n                    // console.log(idArray.map((id) => `/assets/${id}`));\n                    return idArray.map(function(id) {\n                        return \"/assets/\".concat(id);\n                    });\n                }\n            }),\n            getCryptoHistory: builder.query({\n                query: function(params) {\n                    var id = params.id, interval = params.interval;\n                    return \"/assets/\".concat(id, \"/history?interval=\").concat(interval);\n                }\n            }),\n            searchCoins: builder.query({\n                query: function(searchTerm) {\n                    return \"assets?search=\".concat(searchTerm);\n                }\n            })\n        };\n    }\n});\nvar useGetCryptoListQuery = api.useGetCryptoListQuery, useGetCryptoDetailsQuery = api.useGetCryptoDetailsQuery, useGetCryptoHistoryQuery = api.useGetCryptoHistoryQuery, useSearchCoinsQuery = api.useSearchCoinsQuery; // Authorization: 'Bearer 98c6563a-3f10-4d05-91e0-fd1279fe6f4b',\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlFO0FBR2xFLElBQU1FLE1BQU1GLHVFQUFTQSxDQUFDO0lBQzNCRyxXQUFXRiw0RUFBY0EsQ0FBQztRQUFFRyxTQUFTO0lBQTRCO0lBQ2pFQyxVQUFVO1FBQUM7S0FBTTtJQUNqQkMsV0FBVyxTQUFDQztlQUFhO1lBQ3ZCQyxlQUFlRCxRQUFRRSxNQUFNO2dCQUMzQkEsT0FBTyxTQUFDQztvQkFDTixJQUFRQyxTQUFpQkQsT0FBakJDLFFBQU9DLFFBQVVGLE9BQVZFO29CQUNmLElBQU1DLGVBQWU7b0JBQ3JCLElBQU1DLGVBQWVGLFNBQVNDO29CQUM5QixPQUFPLGtCQUFrQ0MsT0FBaEJILFFBQU8sV0FBc0IsT0FBYkc7Z0JBQzdDO1lBQ0E7WUFDQUMsa0JBQWtCUixRQUFRRSxNQUFNO2dCQUM5QkEsT0FBTyxTQUFDTztvQkFDTixJQUFNQyxVQUFVQyxNQUFNQyxRQUFRSCxPQUFPQSxNQUFNO3dCQUFDQTtxQkFBSTtvQkFDaEQscURBQXFEO29CQUNyRCxPQUFPQyxRQUFRRyxJQUFJLFNBQUNDOytCQUFPLFdBQWMsT0FBSEE7O2dCQUN4QztZQU1GO1lBQ0FDLGtCQUFrQmYsUUFBUUUsTUFBTTtnQkFDOUJBLE9BQU8sU0FBQ0M7b0JBQ04sSUFBUVcsS0FBaUJYLE9BQWpCVyxJQUFJRSxXQUFhYixPQUFiYTtvQkFDWixPQUFPLFdBQWtDQSxPQUF2QkYsSUFBRyxzQkFBNkIsT0FBVEU7Z0JBQzNDO1lBQ0Y7WUFDQUMsYUFBYWpCLFFBQVFFLE1BQU07Z0JBQ3pCQSxPQUFPLFNBQUNnQjsyQkFBZSxpQkFBNEIsT0FBWEE7O1lBQzFDO1FBQ0Y7O0FBQ0YsR0FBRztBQUVJLElBQVFDLHdCQUFtR3hCLElBQW5Hd0IsdUJBQXVCQywyQkFBNEV6QixJQUE1RXlCLDBCQUEwQkMsMkJBQWtEMUIsSUFBbEQwQiwwQkFBMEJDLHNCQUF3QjNCLElBQXhCMkIsb0JBQTRCLENBS3RILGdFQUFnRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hcGkuanM/MDQ1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IGFwaSA9IGNyZWF0ZUFwaSh7XG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiAnaHR0cHM6Ly9hcGkuY29pbmNhcC5pby92MicgfSksXG4gIHRhZ1R5cGVzOiBbJ0dldCddLFxuICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgIGdldENyeXB0b0xpc3Q6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChwYXJhbXMpID0+IHsgXG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0LGxpbWl0IH0gPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRMaW1pdCA9IDEwO1xuICAgICAgICBjb25zdCByZXF1ZXN0TGltaXQgPSBsaW1pdCB8fCBkZWZhdWx0TGltaXQ7XG4gICAgICAgIHJldHVybiBgL2Fzc2V0cz9vZmZzZXQ9JHtvZmZzZXR9JmxpbWl0PSR7cmVxdWVzdExpbWl0fWA7XG4gICAgfVxuICAgIH0pLFxuICAgIGdldENyeXB0b0RldGFpbHM6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChpZHMpID0+IHtcbiAgICAgICAgY29uc3QgaWRBcnJheSA9IEFycmF5LmlzQXJyYXkoaWRzKSA/IGlkcyA6IFtpZHNdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZEFycmF5Lm1hcCgoaWQpID0+IGAvYXNzZXRzLyR7aWR9YCkpO1xuICAgICAgICByZXR1cm4gaWRBcnJheS5tYXAoKGlkKSA9PiBgL2Fzc2V0cy8ke2lkfWApO1xuICAgICAgfSxcbiAgICAgIC8vIHF1ZXJ5Rm46IGFzeW5jICh1cmxzKSA9PiB7XG4gICAgICAvLyAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHVybHMubWFwKCh1cmwpID0+IGZldGNoKHVybCkpKTtcbiAgICAgIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHJlc3BvbnNlcy5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpKTtcbiAgICAgIC8vICAgcmV0dXJuIGRhdGE7XG4gICAgICAvLyB9LFxuICAgIH0pLFxuICAgIGdldENyeXB0b0hpc3Rvcnk6IGJ1aWxkZXIucXVlcnkoe1xuICAgICAgcXVlcnk6IChwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCwgaW50ZXJ2YWwgfSA9IHBhcmFtcztcbiAgICAgICAgcmV0dXJuIGAvYXNzZXRzLyR7aWR9L2hpc3Rvcnk/aW50ZXJ2YWw9JHtpbnRlcnZhbH1gO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBzZWFyY2hDb2luczogYnVpbGRlci5xdWVyeSh7XG4gICAgICBxdWVyeTogKHNlYXJjaFRlcm0pID0+IGBhc3NldHM/c2VhcmNoPSR7c2VhcmNoVGVybX1gLFxuICAgIH0pLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyB1c2VHZXRDcnlwdG9MaXN0UXVlcnksIHVzZUdldENyeXB0b0RldGFpbHNRdWVyeSwgdXNlR2V0Q3J5cHRvSGlzdG9yeVF1ZXJ5LCB1c2VTZWFyY2hDb2luc1F1ZXJ5IH0gPSBhcGk7XG5cblxuXG5cbi8vIEF1dGhvcml6YXRpb246ICdCZWFyZXIgOThjNjU2M2EtM2YxMC00ZDA1LTkxZTAtZmQxMjc5ZmU2ZjRiJywiXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJhcGkiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwidGFnVHlwZXMiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwiZ2V0Q3J5cHRvTGlzdCIsInF1ZXJ5IiwicGFyYW1zIiwib2Zmc2V0IiwibGltaXQiLCJkZWZhdWx0TGltaXQiLCJyZXF1ZXN0TGltaXQiLCJnZXRDcnlwdG9EZXRhaWxzIiwiaWRzIiwiaWRBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImlkIiwiZ2V0Q3J5cHRvSGlzdG9yeSIsImludGVydmFsIiwic2VhcmNoQ29pbnMiLCJzZWFyY2hUZXJtIiwidXNlR2V0Q3J5cHRvTGlzdFF1ZXJ5IiwidXNlR2V0Q3J5cHRvRGV0YWlsc1F1ZXJ5IiwidXNlR2V0Q3J5cHRvSGlzdG9yeVF1ZXJ5IiwidXNlU2VhcmNoQ29pbnNRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/api.js\n"));

/***/ })

});