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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useWebSocketListeners: function() { return /* binding */ useWebSocketListeners; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actionCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actionCreator */ \"./src/redux/actionCreator.js\");\n/* harmony import */ var _redux_actionCreator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redux_actionCreator__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\nvar useWebSocketListeners = function(favoriteCoins) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        console.log(favoriteCoins);\n        var socket = new WebSocket(\"wss://ws.coincap.io/prices?assets=\".concat(favoriteCoins.join(\",\")));\n        // console.log(socket);\n        socket.onopen = function() {\n            console.log(\"WebSocket connection opened\");\n        };\n        socket.onclose = function() {\n            console.log(\"WebSocket connection closed\");\n        };\n        socket.onerror = function(error) {\n            console.error(\"WebSocket error:\", error);\n        };\n        var handleWebSocketMessage = function(event) {\n            //   console.log('WebSocket message received:', event);\n            var data = JSON.parse(event.data);\n        //   dispatchUpdateData(data)\n        // Dispatch an action or update your store with the received data\n        // For example, you can use the RTK Query's `dispatch` function to update the cache:\n        };\n        socket.addEventListener(\"message\", handleWebSocketMessage);\n        return function() {\n            socket.removeEventListener(\"message\", handleWebSocketMessage);\n            socket.close();\n        };\n    }, [\n        favoriteCoins\n    ]);\n}; // const socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');\n // // Listen for WebSocket events\n // socket.onopen = () => {\n //     console.log('WebSocket connection opened');\n //   };\n //   socket.onclose = () => {\n //     console.log('WebSocket connection closed');\n //   };\n //   socket.onerror = (error) => {\n //     console.error('WebSocket error:', error);\n //   };\n //   function handleWebSocketMessage(event) {\n //     console.log('WebSocket message received:', event);\n //     const data = JSON.parse(event.data);\n //     console.log(data);\n //     // Dispatch an action or update your store with the received data\n //     // For example, you can use the RTK Query's `dispatch` function to update the cache:\n //   }\n //   // Set up WebSocket event listeners\n // export function useWebSocketListeners() {\n //     useEffect(() => {\n //       socket.addEventListener('message', handleWebSocketMessage);\n //       return () => {\n //         socket.removeEventListener('message', handleWebSocketMessage);\n //       };\n //     }, []);\n //   }\n_s(useWebSocketListeners, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrQztBQUNxQjtBQUNLO0FBR3JELElBQU1JLHdCQUF3QixTQUFDQzs7SUFDcENMLGdEQUFTQSxDQUFDO1FBQ1JNLFFBQVFDLElBQUlGO1FBQ1osSUFBTUcsU0FBUyxJQUFJQyxVQUFVLHFDQUE2RCxPQUF4QkosY0FBY0ssS0FBSztRQUNyRix1QkFBdUI7UUFDdkJGLE9BQU9HLFNBQVM7WUFDZEwsUUFBUUMsSUFBSTtRQUNkO1FBRUFDLE9BQU9JLFVBQVU7WUFDZk4sUUFBUUMsSUFBSTtRQUNkO1FBRUFDLE9BQU9LLFVBQVUsU0FBQ0M7WUFDaEJSLFFBQVFRLE1BQU0sb0JBQW9CQTtRQUNwQztRQUVBLElBQU1DLHlCQUF5QixTQUFDQztZQUNoQyx1REFBdUQ7WUFFckQsSUFBTUMsT0FBT0MsS0FBS0MsTUFBTUgsTUFBTUM7UUFDaEMsNkJBQTZCO1FBQzNCLGlFQUFpRTtRQUNqRSxvRkFBb0Y7UUFDdEY7UUFFQVQsT0FBT1ksaUJBQWlCLFdBQVdMO1FBRW5DLE9BQU87WUFDTFAsT0FBT2Esb0JBQW9CLFdBQVdOO1lBQ3RDUCxPQUFPYztRQUNUO0lBQ0YsR0FBRztRQUFDakI7S0FBYztBQUNwQixFQUFFLENBR0Ysc0ZBQXNGO0NBRXRGLGlDQUFpQztDQUNqQywwQkFBMEI7Q0FDMUIsa0RBQWtEO0NBQ2xELE9BQU87Q0FFUCw2QkFBNkI7Q0FDN0Isa0RBQWtEO0NBQ2xELE9BQU87Q0FFUCxrQ0FBa0M7Q0FDbEMsZ0RBQWdEO0NBQ2hELE9BQU87Q0FFUCw2Q0FBNkM7Q0FDN0MseURBQXlEO0NBQ3pELDJDQUEyQztDQUMzQyx5QkFBeUI7Q0FDekIsd0VBQXdFO0NBQ3hFLDJGQUEyRjtDQUUzRixNQUFNO0NBRU4sd0NBQXdDO0NBQ3hDLDRDQUE0QztDQUM1Qyx3QkFBd0I7Q0FDeEIsb0VBQW9FO0NBRXBFLHVCQUF1QjtDQUN2Qix5RUFBeUU7Q0FDekUsV0FBVztDQUNYLGNBQWM7Q0FDZCxNQUFNO0dBckVPRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXQuanM/OTdmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkaXNwYXRjaFVwZGF0ZURhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25DcmVhdG9yJztcblxuXG5leHBvcnQgY29uc3QgdXNlV2ViU29ja2V0TGlzdGVuZXJzID0gKGZhdm9yaXRlQ29pbnMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZUNvaW5zKTtcbiAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3c3M6Ly93cy5jb2luY2FwLmlvL3ByaWNlcz9hc3NldHM9JHtmYXZvcml0ZUNvaW5zLmpvaW4oJywnKX1gKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzb2NrZXQpO1xuICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IGNvbm5lY3Rpb24gb3BlbmVkJyk7XG4gICAgfTtcblxuICAgIHNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBjb25uZWN0aW9uIGNsb3NlZCcpO1xuICAgIH07XG5cbiAgICBzb2NrZXQub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGVycm9yOicsIGVycm9yKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlV2ViU29ja2V0TWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBtZXNzYWdlIHJlY2VpdmVkOicsIGV2ZW50KTtcblxuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgLy8gICBkaXNwYXRjaFVwZGF0ZURhdGEoZGF0YSlcbiAgICAgIC8vIERpc3BhdGNoIGFuIGFjdGlvbiBvciB1cGRhdGUgeW91ciBzdG9yZSB3aXRoIHRoZSByZWNlaXZlZCBkYXRhXG4gICAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgdGhlIFJUSyBRdWVyeSdzIGBkaXNwYXRjaGAgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjYWNoZTpcbiAgICB9O1xuXG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVXZWJTb2NrZXRNZXNzYWdlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZVdlYlNvY2tldE1lc3NhZ2UpO1xuICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgfTtcbiAgfSwgW2Zhdm9yaXRlQ29pbnNdKTtcbn07XG5cblxuLy8gY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3NzOi8vd3MuY29pbmNhcC5pby9wcmljZXM/YXNzZXRzPWJpdGNvaW4sZXRoZXJldW0nKTtcblxuLy8gLy8gTGlzdGVuIGZvciBXZWJTb2NrZXQgZXZlbnRzXG4vLyBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBvcGVuZWQnKTtcbi8vICAgfTtcbiAgXG4vLyAgIHNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgY29ubmVjdGlvbiBjbG9zZWQnKTtcbi8vICAgfTtcbiAgXG4vLyAgIHNvY2tldC5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4vLyAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGVycm9yOicsIGVycm9yKTtcbi8vICAgfTtcblxuLy8gICBmdW5jdGlvbiBoYW5kbGVXZWJTb2NrZXRNZXNzYWdlKGV2ZW50KSB7XG4vLyAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBtZXNzYWdlIHJlY2VpdmVkOicsIGV2ZW50KTtcbi8vICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAvLyBEaXNwYXRjaCBhbiBhY3Rpb24gb3IgdXBkYXRlIHlvdXIgc3RvcmUgd2l0aCB0aGUgcmVjZWl2ZWQgZGF0YVxuLy8gICAgIC8vIEZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSB0aGUgUlRLIFF1ZXJ5J3MgYGRpc3BhdGNoYCBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNhY2hlOlxuICAgIFxuLy8gICB9XG5cbi8vICAgLy8gU2V0IHVwIFdlYlNvY2tldCBldmVudCBsaXN0ZW5lcnNcbi8vIGV4cG9ydCBmdW5jdGlvbiB1c2VXZWJTb2NrZXRMaXN0ZW5lcnMoKSB7XG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlV2ViU29ja2V0TWVzc2FnZSk7XG4gIFxuLy8gICAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVXZWJTb2NrZXRNZXNzYWdlKTtcbi8vICAgICAgIH07XG4vLyAgICAgfSwgW10pO1xuLy8gICB9Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJkaXNwYXRjaFVwZGF0ZURhdGEiLCJ1c2VXZWJTb2NrZXRMaXN0ZW5lcnMiLCJmYXZvcml0ZUNvaW5zIiwiY29uc29sZSIsImxvZyIsInNvY2tldCIsIldlYlNvY2tldCIsImpvaW4iLCJvbm9wZW4iLCJvbmNsb3NlIiwib25lcnJvciIsImVycm9yIiwiaGFuZGxlV2ViU29ja2V0TWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/WebSocket.js\n"));

/***/ })

});