exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Toast; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(825);
/* harmony import */ var _styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2__);





function Toast(props) {
  const {
    toastList,
    setToastList
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => {
      if (toastList.length > 0) {
        removeToast(toastList[0].id);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    }; // eslint-disable-next-line
  }, [toastList]);

  const removeToast = id => {
    setToastList(prev => prev.filter(t => t.id !== id));
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().notificationContainer),
    children: toastList.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: toastList.map((toast, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().notification),
        style: toast.color == "red" ? {
          backgroundColor: "#c0392b"
        } : {
          backgroundColor: "#16a085"
        },
        onClick: () => removeToast(toast.id),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().notificationTitle),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: toast.title
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_Toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().notificationMessage),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: toast.message
          })
        })]
      }, i))
    })
  });
}

/***/ }),

/***/ 825:
/***/ (function(module) {

// Exports
module.exports = {
	"notificationContainer": "Toast_notificationContainer__2tZxS",
	"toast-in-right": "Toast_toast-in-right__1ELGa",
	"notification": "Toast_notification__3kfxC",
	"notificationTitle": "Toast_notificationTitle__2tAys",
	"notificationMessage": "Toast_notificationMessage__1Rf1w",
	"toast-in-left": "Toast_toast-in-left__1MTFF"
};


/***/ })

};
;