/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "Components_Toast_js";
exports.ids = ["Components_Toast_js"];
exports.modules = {

/***/ "./Components/Toast.js":
/*!*****************************!*\
  !*** ./Components/Toast.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Toast; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Toast.module.css */ \"./styles/Toast.module.css\");\n/* harmony import */ var _styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/bijaybohora/Documents/100 days/old/roomChat/Components/Toast.js\";\n\n\nfunction Toast(props) {\n  const {\n    toastList,\n    setToastList\n  } = props;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const interval = setInterval(() => {\n      if (toastList.length > 0) {\n        removeToast(toastList[0].id);\n      }\n    }, 3000);\n    return () => {\n      clearInterval(interval);\n    }; // eslint-disable-next-line\n  }, [toastList]);\n\n  const removeToast = id => {\n    setToastList(prev => prev.filter(t => t.id !== id));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().notificationContainer),\n    children: toastList.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: toastList.map((toast, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().notification),\n        style: toast.color == \"red\" ? {\n          backgroundColor: \"#c0392b\"\n        } : {\n          backgroundColor: \"#16a085\"\n        },\n        onClick: () => removeToast(toast.id),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().notificationTitle),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: toast.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 29\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().notificationMessage),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: toast.message\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 29\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 25\n        }, this)]\n      }, i, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 21\n      }, this))\n    }, void 0, false)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXcvLi9Db21wb25lbnRzL1RvYXN0LmpzPzlkMTciXSwibmFtZXMiOlsiVG9hc3QiLCJwcm9wcyIsInRvYXN0TGlzdCIsInNldFRvYXN0TGlzdCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJyZW1vdmVUb2FzdCIsImlkIiwiY2xlYXJJbnRlcnZhbCIsInByZXYiLCJmaWx0ZXIiLCJ0Iiwic3R5bGVzIiwibWFwIiwidG9hc3QiLCJpIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ2pDLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQThCRixLQUFwQztBQUVBRyxrREFBUyxDQUFDLE1BQU07QUFDWixVQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxNQUFNO0FBQy9CLFVBQUlKLFNBQVMsQ0FBQ0ssTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QkMsbUJBQVcsQ0FBQ04sU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhTyxFQUFkLENBQVg7QUFDSDtBQUNKLEtBSjJCLEVBSXpCLElBSnlCLENBQTVCO0FBTUEsV0FBTyxNQUFNO0FBQ1RDLG1CQUFhLENBQUNMLFFBQUQsQ0FBYjtBQUNILEtBRkQsQ0FQWSxDQVVaO0FBQ0gsR0FYUSxFQVdOLENBQUNILFNBQUQsQ0FYTSxDQUFUOztBQWFBLFFBQU1NLFdBQVcsR0FBSUMsRUFBRCxJQUFRO0FBQ3hCTixnQkFBWSxDQUFDUSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsTUFBTCxDQUFhQyxDQUFELElBQU9BLENBQUMsQ0FBQ0osRUFBRixLQUFTQSxFQUE1QixDQUFULENBQVo7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFFSyx1RkFBaEI7QUFBQSxjQUNLWixTQUFTLENBQUNLLE1BQVYsR0FBbUIsQ0FBbkIsaUJBQXdCO0FBQUEsZ0JBQ25CTCxTQUFTLENBQUNhLEdBQVYsQ0FBYyxDQUFDQyxLQUFELEVBQVFDLENBQVIsa0JBQ1o7QUFFSSxpQkFBUyxFQUFFSCw4RUFGZjtBQUdJLGFBQUssRUFBR0UsS0FBSyxDQUFDRSxLQUFOLElBQWUsS0FBZixHQUF1QjtBQUFDQyx5QkFBZSxFQUFFO0FBQWxCLFNBQXZCLEdBQXNEO0FBQUNBLHlCQUFlLEVBQUU7QUFBbEIsU0FIbEU7QUFJSSxlQUFPLEVBQUUsTUFBTVgsV0FBVyxDQUFDUSxLQUFLLENBQUNQLEVBQVAsQ0FKOUI7QUFBQSxnQ0FNSTtBQUFLLG1CQUFTLEVBQUVLLG1GQUFoQjtBQUFBLGlDQUNJO0FBQUEsc0JBQUlFLEtBQUssQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQVNJO0FBQUssbUJBQVMsRUFBRU4scUZBQWhCO0FBQUEsaUNBQ0k7QUFBQSxzQkFBSUUsS0FBSyxDQUFDSztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUEsU0FDU0osQ0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFEbUI7QUFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUJIIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Ub2FzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1RvYXN0Lm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2FzdChwcm9wcykge1xuICAgIGNvbnN0IHsgdG9hc3RMaXN0LCBzZXRUb2FzdExpc3QgfSA9IHByb3BzXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b2FzdExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRvYXN0KHRvYXN0TGlzdFswXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9LCBbdG9hc3RMaXN0XSk7XG5cbiAgICBjb25zdCByZW1vdmVUb2FzdCA9IChpZCkgPT4ge1xuICAgICAgICBzZXRUb2FzdExpc3QocHJldiA9PiBwcmV2LmZpbHRlcigodCkgPT4gdC5pZCAhPT0gaWQpKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWZpY2F0aW9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgIHt0b2FzdExpc3QubGVuZ3RoID4gMCAmJiA8PlxuICAgICAgICAgICAgICAgIHsgdG9hc3RMaXN0Lm1hcCgodG9hc3QsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmaWNhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsgdG9hc3QuY29sb3IgPT0gXCJyZWRcIiA/IHtiYWNrZ3JvdW5kQ29sb3I6IFwiI2MwMzkyYlwifSA6IHtiYWNrZ3JvdW5kQ29sb3I6IFwiIzE2YTA4NVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRvYXN0KHRvYXN0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZmljYXRpb25UaXRsZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0b2FzdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWZpY2F0aW9uTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RvYXN0Lm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Toast.js\n");

/***/ }),

/***/ "./styles/Toast.module.css":
/*!*********************************!*\
  !*** ./styles/Toast.module.css ***!
  \*********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"notificationContainer\": \"Toast_notificationContainer__2tZxS\",\n\t\"toast-in-right\": \"Toast_toast-in-right__1ELGa\",\n\t\"notification\": \"Toast_notification__3kfxC\",\n\t\"notificationTitle\": \"Toast_notificationTitle__2tAys\",\n\t\"notificationMessage\": \"Toast_notificationMessage__1Rf1w\",\n\t\"toast-in-left\": \"Toast_toast-in-left__1MTFF\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXcvLi9zdHlsZXMvVG9hc3QubW9kdWxlLmNzcz9mNDUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9Ub2FzdC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibm90aWZpY2F0aW9uQ29udGFpbmVyXCI6IFwiVG9hc3Rfbm90aWZpY2F0aW9uQ29udGFpbmVyX18ydFp4U1wiLFxuXHRcInRvYXN0LWluLXJpZ2h0XCI6IFwiVG9hc3RfdG9hc3QtaW4tcmlnaHRfXzFFTEdhXCIsXG5cdFwibm90aWZpY2F0aW9uXCI6IFwiVG9hc3Rfbm90aWZpY2F0aW9uX18za2Z4Q1wiLFxuXHRcIm5vdGlmaWNhdGlvblRpdGxlXCI6IFwiVG9hc3Rfbm90aWZpY2F0aW9uVGl0bGVfXzJ0QXlzXCIsXG5cdFwibm90aWZpY2F0aW9uTWVzc2FnZVwiOiBcIlRvYXN0X25vdGlmaWNhdGlvbk1lc3NhZ2VfXzFSZjF3XCIsXG5cdFwidG9hc3QtaW4tbGVmdFwiOiBcIlRvYXN0X3RvYXN0LWluLWxlZnRfXzFNVEZGXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Toast.module.css\n");

/***/ })

};
;