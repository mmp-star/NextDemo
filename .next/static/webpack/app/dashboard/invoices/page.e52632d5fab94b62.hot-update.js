"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/search.tsx":
/*!***************************!*\
  !*** ./app/ui/search.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=MagnifyingGlassIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * @Author: Mina\n * @Date: 2024-02-23 22:22:25\n * @LastEditors: Mina\n * @LastEditTime: 2024-05-30 14:05:20\n * @Description: \n */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Search(param) {\n    let { placeholder } = param;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    function handleSearch(term) {\n        const params = new URLSearchParams(searchParams);\n        if (term) {\n            params.set(\"query\", term);\n        } else {\n            params.delete(\"query\");\n        }\n        console.log(term);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-1 flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"search\",\n                className: \"sr-only\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/renpho/Desktop/workspace/React/Next/app/ui/search.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                placeholder: placeholder,\n                onChange: (e)=>{\n                    handleSearch(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/renpho/Desktop/workspace/React/Next/app/ui/search.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MagnifyingGlassIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n            }, void 0, false, {\n                fileName: \"/Users/renpho/Desktop/workspace/React/Next/app/ui/search.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/renpho/Desktop/workspace/React/Next/app/ui/search.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztDQU1DOztBQUdpRTtBQUNoQjtBQUVuQyxTQUFTRSxPQUFPLEtBQXdDO1FBQXhDLEVBQUVDLFdBQVcsRUFBMkIsR0FBeEM7O0lBRTdCLE1BQU1DLGVBQWVILGdFQUFlQTtJQUVwQyxTQUFTSSxhQUFhQyxJQUFZO1FBQ2hDLE1BQU1DLFNBQVMsSUFBSUMsZ0JBQWdCSjtRQUNuQyxJQUFJRSxNQUFNO1lBQ1JDLE9BQU9FLEdBQUcsQ0FBQyxTQUFTSDtRQUN0QixPQUFPO1lBQ0xDLE9BQU9HLE1BQU0sQ0FBQztRQUNoQjtRQUNBQyxRQUFRQyxHQUFHLENBQUNOO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFNQyxTQUFRO2dCQUFTRixXQUFVOzBCQUFVOzs7Ozs7MEJBRzVDLDhEQUFDRztnQkFDQ0gsV0FBVTtnQkFDVlgsYUFBYUE7Z0JBQ2JlLFVBQVUsQ0FBQ0M7b0JBQ1RkLGFBQWFjLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFDN0I7Ozs7OzswQkFFRiw4REFBQ3JCLDZHQUFtQkE7Z0JBQUNjLFdBQVU7Ozs7Ozs7Ozs7OztBQUdyQztHQTdCd0JaOztRQUVERCw0REFBZUE7OztLQUZkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvc2VhcmNoLnRzeD8xYTE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBNaW5hXG4gKiBARGF0ZTogMjAyNC0wMi0yMyAyMjoyMjoyNVxuICogQExhc3RFZGl0b3JzOiBNaW5hXG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA1LTMwIDE0OjA1OjIwXG4gKiBARGVzY3JpcHRpb246IFxuICovXG4ndXNlIGNsaWVudCc7XG4gXG5pbXBvcnQgeyBNYWduaWZ5aW5nR2xhc3NJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7IHBsYWNlaG9sZGVyIH06IHsgcGxhY2Vob2xkZXI6IHN0cmluZyB9KSB7XG5cbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKHRlcm06IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKTtcbiAgICBpZiAodGVybSkge1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCB0ZXJtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zLmRlbGV0ZSgncXVlcnknKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGVybSk7XG4gIH1cbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC0xIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxuICAgICAgICBTZWFyY2hcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwicGVlciBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHB5LVs5cHhdIHBsLTEwIHRleHQtc20gb3V0bGluZS0yIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDBcIlxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZVNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPE1hZ25pZnlpbmdHbGFzc0ljb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC1bMThweF0gdy1bMThweF0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwIHBlZXItZm9jdXM6dGV4dC1ncmF5LTkwMFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIk1hZ25pZnlpbmdHbGFzc0ljb24iLCJ1c2VTZWFyY2hQYXJhbXMiLCJTZWFyY2giLCJwbGFjZWhvbGRlciIsInNlYXJjaFBhcmFtcyIsImhhbmRsZVNlYXJjaCIsInRlcm0iLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZXQiLCJkZWxldGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/search.tsx\n"));

/***/ })

});