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

/***/ "./src/components/WebSocket.js":
/*!*************************************!*\
  !*** ./src/components/WebSocket.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useWebSocketListeners: function() { return /* binding */ useWebSocketListeners; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nvar socket = new WebSocket(\"wss://ws.coincap.io/prices?assets=ALL\");\n// Listen for WebSocket events\nsocket.onopen = function() {\n    console.log(\"WebSocket connection opened\");\n};\nsocket.onclose = function() {\n    console.log(\"WebSocket connection closed\");\n};\nsocket.onerror = function(error) {\n    console.error(\"WebSocket error:\", error);\n};\nfunction handleWebSocketMessage(event) {\n    console.log(\"WebSocket message received:\", event);\n// Dispatch an action or update your store with the received data\n// For example, you can use the RTK Query's `dispatch` function to update the cache:\n}\n// Set up WebSocket event listeners\nfunction useWebSocketListeners() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        socket.addEventListener(\"message\", handleWebSocketMessage);\n        return function() {\n            socket.removeEventListener(\"message\", handleWebSocketMessage);\n        };\n    }, []);\n}\n_s(useWebSocketListeners, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUlsQyxJQUFNQyxTQUFTLElBQUlDLFVBQVU7QUFFN0IsOEJBQThCO0FBQzlCRCxPQUFPRSxTQUFTO0lBQ1pDLFFBQVFDLElBQUk7QUFDZDtBQUVBSixPQUFPSyxVQUFVO0lBQ2ZGLFFBQVFDLElBQUk7QUFDZDtBQUVBSixPQUFPTSxVQUFVLFNBQUNDO0lBQ2hCSixRQUFRSSxNQUFNLG9CQUFvQkE7QUFDcEM7QUFFQSxTQUFTQyx1QkFBdUJDLEtBQUs7SUFDbkNOLFFBQVFDLElBQUksK0JBQStCSztBQUMzQyxpRUFBaUU7QUFDakUsb0ZBQW9GO0FBRXRGO0FBRUEsbUNBQW1DO0FBQzlCLFNBQVNDOztJQUNaWCxnREFBU0EsQ0FBQztRQUNSQyxPQUFPVyxpQkFBaUIsV0FBV0g7UUFFbkMsT0FBTztZQUNMUixPQUFPWSxvQkFBb0IsV0FBV0o7UUFDeEM7SUFDRixHQUFHLEVBQUU7QUFDUDtHQVJjRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXQuanM/OTdmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuXG5jb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3c3M6Ly93cy5jb2luY2FwLmlvL3ByaWNlcz9hc3NldHM9QUxMJyk7XG5cbi8vIExpc3RlbiBmb3IgV2ViU29ja2V0IGV2ZW50c1xuc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IGNvbm5lY3Rpb24gb3BlbmVkJyk7XG4gIH07XG4gIFxuICBzb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkJyk7XG4gIH07XG4gIFxuICBzb2NrZXQub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1dlYlNvY2tldCBlcnJvcjonLCBlcnJvcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlV2ViU29ja2V0TWVzc2FnZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgbWVzc2FnZSByZWNlaXZlZDonLCBldmVudCk7XG4gICAgLy8gRGlzcGF0Y2ggYW4gYWN0aW9uIG9yIHVwZGF0ZSB5b3VyIHN0b3JlIHdpdGggdGhlIHJlY2VpdmVkIGRhdGFcbiAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgdGhlIFJUSyBRdWVyeSdzIGBkaXNwYXRjaGAgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjYWNoZTpcbiAgICBcbiAgfVxuXG4gIC8vIFNldCB1cCBXZWJTb2NrZXQgZXZlbnQgbGlzdGVuZXJzXG5leHBvcnQgZnVuY3Rpb24gdXNlV2ViU29ja2V0TGlzdGVuZXJzKCkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZVdlYlNvY2tldE1lc3NhZ2UpO1xuICBcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlV2ViU29ja2V0TWVzc2FnZSk7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcbiAgfSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsIm9uZXJyb3IiLCJlcnJvciIsImhhbmRsZVdlYlNvY2tldE1lc3NhZ2UiLCJldmVudCIsInVzZVdlYlNvY2tldExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WebSocket.js\n"));

/***/ })

});