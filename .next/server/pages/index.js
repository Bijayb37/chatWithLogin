/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Toast */ \"./Components/Toast.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_SocketContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/SocketContext */ \"./contexts/SocketContext.js\");\n/* harmony import */ var _contexts_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/index.js */ \"./contexts/index.js\");\n\nvar _jsxFileName = \"/Users/bijaybohora/Documents/100 days/old/roomChat/pages/index.js\";\n\n\n\n\n\n\n\nfunction Login(props) {\n  const {\n    socket\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SocketContext__WEBPACK_IMPORTED_MODULE_4__.SocketContext);\n  const {\n    username,\n    setUsername,\n    room,\n    setRoom\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_index_js__WEBPACK_IMPORTED_MODULE_5__.MainContext);\n  const {\n    0: toastList,\n    1: setToastList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  const handleClick = () => {\n    socket.emit(\"login\", {\n      username,\n      room\n    }, error => {\n      if (error) {\n        let ranNumber = Math.floor(Math.random() * 101);\n        setToastList(prev => [...prev, {\n          id: ranNumber,\n          title: \"Login Failed\",\n          message: error,\n          color: \"red\"\n        }]);\n        return console.log(error);\n      }\n\n      router.push('/chat', null, {\n        shallow: true\n      });\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().signin),\n        children: \"Sign In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputs),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          placeholder: \"Username\",\n          onChange: e => setUsername(e.target.value),\n          id: \"roomInput\",\n          type: \"text\",\n          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().roomInput)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          placeholder: \"Room Name\",\n          onChange: e => setRoom(e.target.value),\n          id: \"nameInput\",\n          type: \"text\",\n          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().nameInput)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n        onClick: handleClick,\n        children: \"Click me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Toast__WEBPACK_IMPORTED_MODULE_2__.default, {\n        toastList: toastList,\n        setToastList: setToastList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXcvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJzb2NrZXQiLCJ1c2VDb250ZXh0IiwiU29ja2V0Q29udGV4dCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb29tIiwic2V0Um9vbSIsIk1haW5Db250ZXh0IiwidG9hc3RMaXN0Iiwic2V0VG9hc3RMaXN0IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDbGljayIsImVtaXQiLCJlcnJvciIsInJhbk51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInByZXYiLCJpZCIsInRpdGxlIiwibWVzc2FnZSIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJzaGFsbG93Iiwic3R5bGVzIiwiZSIsInRhcmdldCIsInZhbHVlIiwicm9vbUlucHV0IiwibmFtZUlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDcEIsUUFBTTtBQUFFQztBQUFGLE1BQWFDLGlEQUFVLENBQUNDLGtFQUFELENBQTdCO0FBQ0EsUUFBTTtBQUFFQyxZQUFGO0FBQVlDLGVBQVo7QUFBeUJDLFFBQXpCO0FBQStCQztBQUEvQixNQUEyQ0wsaURBQVUsQ0FBQ00sMkRBQUQsQ0FBM0Q7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJiLFVBQU0sQ0FBQ2MsSUFBUCxDQUFZLE9BQVosRUFBcUI7QUFBRVgsY0FBRjtBQUFZRTtBQUFaLEtBQXJCLEVBQXlDVSxLQUFLLElBQUk7QUFDaEQsVUFBSUEsS0FBSixFQUFXO0FBQ1QsWUFBSUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQWhCO0FBQ0FWLG9CQUFZLENBQUNXLElBQUksSUFBSSxDQUFDLEdBQUdBLElBQUosRUFBVTtBQUFFQyxZQUFFLEVBQUVMLFNBQU47QUFBaUJNLGVBQUssRUFBRSxjQUF4QjtBQUF3Q0MsaUJBQU8sRUFBRVIsS0FBakQ7QUFBd0RTLGVBQUssRUFBRTtBQUEvRCxTQUFWLENBQVQsQ0FBWjtBQUNBLGVBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaLENBQVA7QUFDRDs7QUFDREosWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLE9BQVosRUFBcUIsSUFBckIsRUFBMkI7QUFBQ0MsZUFBTyxFQUFFO0FBQVYsT0FBM0I7QUFDRCxLQVBEO0FBUUQsR0FURDs7QUFXQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQywwRUFBaEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLHVFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVBLHVFQUFoQjtBQUFBLGdDQUNFO0FBQU8scUJBQVcsRUFBQyxVQUFuQjtBQUE4QixrQkFBUSxFQUFHQyxDQUFELElBQU8xQixXQUFXLENBQUMwQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUExRDtBQUE0RSxZQUFFLEVBQUMsV0FBL0U7QUFBMkYsY0FBSSxFQUFDLE1BQWhHO0FBQXVHLG1CQUFTLEVBQUVILDBFQUFnQkk7QUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8scUJBQVcsRUFBQyxXQUFuQjtBQUErQixrQkFBUSxFQUFHSCxDQUFELElBQU94QixPQUFPLENBQUN3QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF2RDtBQUF5RSxZQUFFLEVBQUMsV0FBNUU7QUFBd0YsY0FBSSxFQUFDLE1BQTdGO0FBQW9HLG1CQUFTLEVBQUVILDBFQUFnQks7QUFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU1FO0FBQVEsaUJBQVMsRUFBRUwsdUVBQW5CO0FBQWtDLGVBQU8sRUFBRWhCLFdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRTtBQUFBLDZCQUNFLDhEQUFDLHNEQUFEO0FBQU8saUJBQVMsRUFBRUwsU0FBbEI7QUFBNkIsb0JBQVksRUFBRUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztBQUVELCtEQUFlWCxLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9Ub2FzdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NvY2tldENvbnRleHQnXG5pbXBvcnQgeyBNYWluQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL2luZGV4LmpzJyBcblxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgeyBzb2NrZXQgfSA9IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dClcbiAgY29uc3QgeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUsIHJvb20sIHNldFJvb20gfSA9IHVzZUNvbnRleHQoTWFpbkNvbnRleHQpXG4gIGNvbnN0IFt0b2FzdExpc3QsIHNldFRvYXN0TGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzb2NrZXQuZW1pdChcImxvZ2luXCIsIHsgdXNlcm5hbWUsIHJvb20gfSwgZXJyb3IgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7ICBcbiAgICAgICAgbGV0IHJhbk51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSlcbiAgICAgICAgc2V0VG9hc3RMaXN0KHByZXYgPT4gWy4uLnByZXYsIHsgaWQ6IHJhbk51bWJlciwgdGl0bGU6IFwiTG9naW4gRmFpbGVkXCIsIG1lc3NhZ2U6IGVycm9yLCBjb2xvcjogXCJyZWRcIiB9XSlcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgICAgcm91dGVyLnB1c2goJy9jaGF0JywgbnVsbCwge3NoYWxsb3c6IHRydWV9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zaWduaW59PlNpZ24gSW48L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gaWQ9XCJyb29tSW5wdXRcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLnJvb21JbnB1dH0gLz5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJSb29tIE5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHNldFJvb20oZS50YXJnZXQudmFsdWUpfSBpZD1cIm5hbWVJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMubmFtZUlucHV0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayBtZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8VG9hc3QgdG9hc3RMaXN0PXt0b2FzdExpc3R9IHNldFRvYXN0TGlzdD17c2V0VG9hc3RMaXN0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"signin\": \"Home_signin__3RSoj\",\n\t\"inputs\": \"Home_inputs__1mbAe\",\n\t\"nameInput\": \"Home_nameInput__3wkzJ\",\n\t\"roomInput\": \"Home_roomInput__EilGH\",\n\t\"button\": \"Home_button__Xc9mA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXcvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2NmNTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcInNpZ25pblwiOiBcIkhvbWVfc2lnbmluX18zUlNvalwiLFxuXHRcImlucHV0c1wiOiBcIkhvbWVfaW5wdXRzX18xbWJBZVwiLFxuXHRcIm5hbWVJbnB1dFwiOiBcIkhvbWVfbmFtZUlucHV0X18zd2t6SlwiLFxuXHRcInJvb21JbnB1dFwiOiBcIkhvbWVfcm9vbUlucHV0X19FaWxHSFwiLFxuXHRcImJ1dHRvblwiOiBcIkhvbWVfYnV0dG9uX19YYzltQVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["contexts_SocketContext_js-contexts_index_js","Components_Toast_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();