"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/[id]/edit/page",{

/***/ "(app-pages-browser)/./app/lib/actions.ts":
/*!****************************!*\
  !*** ./app/lib/actions.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createInvoice: function() { return /* binding */ createInvoice; },\n/* harmony export */   deleteInvoice: function() { return /* binding */ deleteInvoice; },\n/* harmony export */   updateInvoice: function() { return /* binding */ updateInvoice; }\n/* harmony export */ });\n/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ \"(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js\");\n/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-proxy */ \"(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js\");\n/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ \"(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js\");\n\n\n\nfunction __build_action__(action, args) {\n  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)\n}\n\n/*\n * @Author: Mina\n * @Date: 2024-05-30 15:35:05\n * @LastEditors: Mina\n * @LastEditTime: 2024-05-30 17:20:08\n * @Description: \n */ /* __next_internal_action_entry_do_not_use__ {\"643a2bb504a097ae7754e66cc8154138bb0b5052\":\"deleteInvoice\",\"6b714292edbe830d4b213eb7e6d1d8bdb05cd567\":\"createInvoice\",\"01d76b9e898d5b789d7db6d97a1d2ea4c75537be\":\"updateInvoice\"} */ \n\nvar createInvoice = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)(\"6b714292edbe830d4b213eb7e6d1d8bdb05cd567\");\nvar updateInvoice = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)(\"01d76b9e898d5b789d7db6d97a1d2ea4c75537be\");\nvar deleteInvoice = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)(\"643a2bb504a097ae7754e66cc8154138bb0b5052\");\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvYWN0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9hY3Rpb25zLnRzPzlmMTUiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IE1pbmFcbiAqIEBEYXRlOiAyMDI0LTA1LTMwIDE1OjM1OjA1XG4gKiBATGFzdEVkaXRvcnM6IE1pbmFcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjQtMDUtMzAgMTc6MjA6MDhcbiAqIEBEZXNjcmlwdGlvbjogXG4gKi9cbid1c2Ugc2VydmVyJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgc3FsIH0gZnJvbSAnQHZlcmNlbC9wb3N0Z3Jlcyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5jb25zdCBGb3JtU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3VzdG9tZXJJZDogei5zdHJpbmcoKSxcbiAgYW1vdW50OiB6LmNvZXJjZS5udW1iZXIoKSxcbiAgc3RhdHVzOiB6LmVudW0oWydwZW5kaW5nJywgJ3BhaWQnXSksXG4gIGRhdGU6IHouc3RyaW5nKCksXG59KTtcbiBcbmNvbnN0IENyZWF0ZUludm9pY2UgPSBGb3JtU2NoZW1hLm9taXQoeyBpZDogdHJ1ZSwgZGF0ZTogdHJ1ZSB9KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUludm9pY2UoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHsgY3VzdG9tZXJJZCwgYW1vdW50LCBzdGF0dXMgfSA9IENyZWF0ZUludm9pY2UucGFyc2Uoe1xuICAgIGN1c3RvbWVySWQ6IGZvcm1EYXRhLmdldCgnY3VzdG9tZXJJZCcpLFxuICAgIGFtb3VudDogZm9ybURhdGEuZ2V0KCdhbW91bnQnKSxcbiAgICBzdGF0dXM6IGZvcm1EYXRhLmdldCgnc3RhdHVzJyksXG4gIH0pO1xuIFxuICBjb25zdCBhbW91bnRJbkNlbnRzID0gYW1vdW50ICogMTAwO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gXG4gIHRyeSB7XG4gICAgYXdhaXQgc3FsYFxuICAgICAgSU5TRVJUIElOVE8gaW52b2ljZXMgKGN1c3RvbWVyX2lkLCBhbW91bnQsIHN0YXR1cywgZGF0ZSlcbiAgICAgIFZBTFVFUyAoJHtjdXN0b21lcklkfSwgJHthbW91bnRJbkNlbnRzfSwgJHtzdGF0dXN9LCAke2RhdGV9KVxuICAgIGA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBJbnZvaWNlLicsXG4gICAgfTtcbiAgfVxuIFxuICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICByZWRpcmVjdCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xufVxuXG4vLyBVc2UgWm9kIHRvIHVwZGF0ZSB0aGUgZXhwZWN0ZWQgdHlwZXNcbmNvbnN0IFVwZGF0ZUludm9pY2UgPSBGb3JtU2NoZW1hLm9taXQoeyBpZDogdHJ1ZSwgZGF0ZTogdHJ1ZSB9KTtcbiBcbi8vIC4uLlxuIFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludm9pY2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHsgY3VzdG9tZXJJZCwgYW1vdW50LCBzdGF0dXMgfSA9IFVwZGF0ZUludm9pY2UucGFyc2Uoe1xuICAgIGN1c3RvbWVySWQ6IGZvcm1EYXRhLmdldCgnY3VzdG9tZXJJZCcpLFxuICAgIGFtb3VudDogZm9ybURhdGEuZ2V0KCdhbW91bnQnKSxcbiAgICBzdGF0dXM6IGZvcm1EYXRhLmdldCgnc3RhdHVzJyksXG4gIH0pO1xuIFxuICBjb25zdCBhbW91bnRJbkNlbnRzID0gYW1vdW50ICogMTAwO1xuIFxuICB0cnkge1xuICAgIGF3YWl0IHNxbGBcbiAgICAgICAgVVBEQVRFIGludm9pY2VzXG4gICAgICAgIFNFVCBjdXN0b21lcl9pZCA9ICR7Y3VzdG9tZXJJZH0sIGFtb3VudCA9ICR7YW1vdW50SW5DZW50c30sIHN0YXR1cyA9ICR7c3RhdHVzfVxuICAgICAgICBXSEVSRSBpZCA9ICR7aWR9XG4gICAgICBgO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIFVwZGF0ZSBJbnZvaWNlLicgfTtcbiAgfVxuIFxuICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICByZWRpcmVjdCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW52b2ljZShpZDogc3RyaW5nKSB7XG4gIFxuICB0cnkge1xuICAgIGF3YWl0IHNxbGBERUxFVEUgRlJPTSBpbnZvaWNlcyBXSEVSRSBpZCA9ICR7aWR9YDtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdEZWxldGVkIEludm9pY2UuJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIERlbGV0ZSBJbnZvaWNlLicgfTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/actions.ts\n"));

/***/ })

});