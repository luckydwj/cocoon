"use strict";
(self["webpackChunkrabbit_scripts"] = self["webpackChunkrabbit_scripts"] || []).push([["main"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ 52);
// import './index.less'
// import Icon from './icon.png';

function component() {
    // const element = document.createElement("div");
    const element = document.createElement('pre');
    // element.innerHTML = "hello webapck7777"
    // const myIcon = new Image();
    // myIcon.src = Icon;
  
    // element.appendChild(myIcon);
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cube)(5)
      ].join('\n\n');
  return element;
}

document.body.appendChild(component());

/***/ }),

/***/ 52:
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cube: () => (/* binding */ cube)
/* harmony export */ });
/* unused harmony export square */
function square(x) {
    return x * x;
  }
  
  function cube(x) {
    return x * x * x;
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMjA4MTM0ZDIwOWY2OTdiZDlkMC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsOENBQUk7QUFDckM7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2xCTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFiYml0LXNjcmlwdHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmFiYml0LXNjcmlwdHMvLi9zcmMvbWF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vaW5kZXgubGVzcydcbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuaW1wb3J0IHsgY3ViZSAsc3F1YXJlfSBmcm9tICcuL21hdGguanMnO1xuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAvLyBlbGVtZW50LmlubmVySFRNTCA9IFwiaGVsbG8gd2ViYXBjazc3NzdcIlxuICAgIC8vIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIG15SWNvbi5zcmMgPSBJY29uO1xuICBcbiAgICAvLyBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBbXG4gICAgICAgICdIZWxsbyB3ZWJwYWNrIScsXG4gICAgICAgICc1IGN1YmVkIGlzIGVxdWFsIHRvICcgKyBjdWJlKDUpXG4gICAgICBdLmpvaW4oJ1xcblxcbicpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7IiwiZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4KSB7XG4gICAgcmV0dXJuIHggKiB4O1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gY3ViZSh4KSB7XG4gICAgcmV0dXJuIHggKiB4ICogeDtcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==