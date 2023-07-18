"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[singleCoinPage]",{

/***/ "./src/components/SingleCoinCard.js":
/*!******************************************!*\
  !*** ./src/components/SingleCoinCard.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleCoinCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n\n\n\n\n\n\n\nvar bull = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    component: \"span\",\n    sx: {\n        display: \"inline-block\",\n        mx: \"2px\",\n        transform: \"scale(0.8)\"\n    },\n    children: \"•\"\n}, void 0, false, {\n    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n    lineNumber: 9,\n    columnNumber: 3\n}, undefined);\nfunction SingleCoinCard(param) {\n    var data = param.data;\n    var selectedCoin = data.data;\n    console.log(selectedCoin);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            minWidth: 275\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            fontSize: 14\n                        },\n                        color: \"text.secondary\",\n                        gutterBottom: true,\n                        children: \"Selected coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"h5\",\n                        component: \"div\",\n                        children: selectedCoin.name\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            mb: 1.5\n                        },\n                        color: \"text.secondary\",\n                        children: [\n                            \"Price USD: \",\n                            Number(selectedCoin.priceUsd).toFixed(5)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            mb: 1.5\n                        },\n                        color: \"text.secondary\",\n                        children: [\n                            \"Market cap: \",\n                            Number(selectedCoin.marketCapUsd).toFixed(5)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            mb: 1.5\n                        },\n                        color: \"text.secondary\",\n                        children: [\n                            \"Volume (24h): \",\n                            Number(selectedCoin.volumeUsd24Hr).toFixed(5)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"body2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    size: \"small\",\n                    children: \"Learn More\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikita/Documents/js_learning/react-learning/bitswap/src/components/SingleCoinCard.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = SingleCoinCard;\nvar _c;\n$RefreshReg$(_c, \"SingleCoinCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nbGVDb2luQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ2M7QUFDQTtBQUNWO0FBQ1E7QUFDZDtBQUVwQyxJQUFNTSxxQkFDSiw4REFBQ0QseURBQUdBO0lBQ0ZFLFdBQVU7SUFDVkMsSUFBSTtRQUFFQyxTQUFTO1FBQWdCQyxJQUFJO1FBQU9DLFdBQVc7SUFBYTtjQUNuRTs7Ozs7O0FBS1ksU0FBU0MsZUFBZSxLQUFNO1FBQU4sYUFBQ0M7SUFDdEMsSUFBT0EsZUFBc0JBLEtBQXRCQTtJQUNQRSxRQUFRQyxJQUFJRjtJQUNaLHFCQUNFLDhEQUFDZCwwREFBSUE7UUFBQ1EsSUFBSTtZQUFFUyxVQUFVO1FBQUk7OzBCQUN4Qiw4REFBQ2YsaUVBQVdBOztrQ0FDViw4REFBQ0UsZ0VBQVVBO3dCQUFDSSxJQUFJOzRCQUFFVSxVQUFVO3dCQUFHO3dCQUFHQyxPQUFNO3dCQUFpQkMsWUFBWTtrQ0FBQzs7Ozs7O2tDQUd0RSw4REFBQ2hCLGdFQUFVQTt3QkFBQ2lCLFNBQVE7d0JBQUtkLFdBQVU7a0NBQ2hDTyxhQUFhUTs7Ozs7O2tDQUVoQiw4REFBQ2xCLGdFQUFVQTt3QkFBQ0ksSUFBSTs0QkFBRWUsSUFBSTt3QkFBSTt3QkFBR0osT0FBTTs7NEJBQWlCOzRCQUN0Q0ssT0FBT1YsYUFBYVcsVUFBVUMsUUFBUTs7Ozs7OztrQ0FFcEQsOERBQUN0QixnRUFBVUE7d0JBQUNJLElBQUk7NEJBQUVlLElBQUk7d0JBQUk7d0JBQUdKLE9BQU07OzRCQUFpQjs0QkFDdkNLLE9BQU9WLGFBQWFhLGNBQWNELFFBQVE7Ozs7Ozs7a0NBRXZELDhEQUFDdEIsZ0VBQVVBO3dCQUFDSSxJQUFJOzRCQUFFZSxJQUFJO3dCQUFJO3dCQUFHSixPQUFNOzs0QkFBaUI7NEJBQ3JDSyxPQUFPVixhQUFhYyxlQUFlRixRQUFROzs7Ozs7O2tDQUUxRCw4REFBQ3RCLGdFQUFVQTt3QkFBQ2lCLFNBQVE7Ozs7Ozs7Ozs7OzswQkFJdEIsOERBQUNwQixpRUFBV0E7MEJBQ1YsNEVBQUNFLDREQUFNQTtvQkFBQzBCLE1BQUs7OEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdCO0tBOUJ3QmpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpbmdsZUNvaW5DYXJkLmpzPzMwMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuXG5jb25zdCBidWxsID0gKFxuICA8Qm94XG4gICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgc3g9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIG14OiAnMnB4JywgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScgfX1cbiAgPlxuICAgIOKAolxuICA8L0JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZUNvaW5DYXJkKHtkYXRhfSkge1xuICBjb25zdCB7ZGF0YTogc2VsZWN0ZWRDb2lufSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29pbik7XG4gIHJldHVybiAoXG4gICAgPENhcmQgc3g9e3sgbWluV2lkdGg6IDI3NSB9fT5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE0IH19IGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgU2VsZWN0ZWQgY29pblxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgIHtzZWxlY3RlZENvaW4ubmFtZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMS41IH19IGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICBQcmljZSBVU0Q6IHtOdW1iZXIoc2VsZWN0ZWRDb2luLnByaWNlVXNkKS50b0ZpeGVkKDUpfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiAxLjUgfX0gY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICBNYXJrZXQgY2FwOiB7TnVtYmVyKHNlbGVjdGVkQ29pbi5tYXJrZXRDYXBVc2QpLnRvRml4ZWQoNSl9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuNSB9fSBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgIFZvbHVtZSAoMjRoKToge051bWJlcihzZWxlY3RlZENvaW4udm9sdW1lVXNkMjRIcikudG9GaXhlZCg1KX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICBcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj5MZWFybiBNb3JlPC9CdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiQm94IiwiYnVsbCIsImNvbXBvbmVudCIsInN4IiwiZGlzcGxheSIsIm14IiwidHJhbnNmb3JtIiwiU2luZ2xlQ29pbkNhcmQiLCJkYXRhIiwic2VsZWN0ZWRDb2luIiwiY29uc29sZSIsImxvZyIsIm1pbldpZHRoIiwiZm9udFNpemUiLCJjb2xvciIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJuYW1lIiwibWIiLCJOdW1iZXIiLCJwcmljZVVzZCIsInRvRml4ZWQiLCJtYXJrZXRDYXBVc2QiLCJ2b2x1bWVVc2QyNEhyIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingleCoinCard.js\n"));

/***/ })

});