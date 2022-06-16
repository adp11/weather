/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/images/background.jpg */ "./dist/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  color: #fff\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 130px 1fr 0.5fr 2fr;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"current-temp current-stats\"\r\n  \"hourly hourly\"\r\n  \"daily daily\";\r\n  font-size: 10px;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.header {\r\n  grid-area: header;\r\n  padding: 20px;\r\n  font-size: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 40px;\r\n}\r\n\r\n.header>img {\r\n  margin: 0 60px;\r\n  width: 130px;\r\n  height: auto;\r\n}\r\n\r\n.query-box {\r\n  font-size: 1rem;\r\n  padding: 10px 15px;\r\n  border: 2px grey solid;\r\n  border-radius: 30px;\r\n  max-width: 500px;\r\n  flex: 1;\r\n  background-color: #797979;\r\n}\r\n\r\n::placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.query-box:focus {\r\n  outline: none;\r\n  border-color: royalblue;\r\n  box-shadow: 1px 1px 5px royalblue;\r\n}\r\n\r\n.unit-switch-button {\r\n  padding: 10px 40px;\r\n  font-size: 16px;\r\n  border-radius: 20px;\r\n  margin-left: auto;\r\n  min-width: 60px;\r\n  color: #fff;\r\n  background-color: \r\n  royalblue;\r\n}\r\n\r\n.unit-switch-button:active {\r\n  cursor: pointer;\r\n  color: royalblue;\r\n  background-color: #fff;\r\n  box-shadow: 1px 1px 5px royalblue;\r\n}\r\n\r\n.unit-switch-button:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.current-temp {\r\n  border-right: 1px #cccccc solid;\r\n  grid-area: current-temp;\r\n  font-size: 30px;\r\n  padding: 20px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.current-temp .temp {\r\n  font-size: 120px;\r\n}\r\n\r\n/* ------- */\r\n\r\n.current-stats {\r\n  grid-area: current-stats;\r\n  display: grid;\r\n  grid-template-rows: repeat(3, 100px);\r\n  grid-template-columns: repeat(2, 150px);\r\n  place-content: center;\r\n  gap: 20px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.stat-box {\r\n  border: 1.5px #cccccc solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1rem;\r\n  border-radius: 20px;\r\n}\r\n\r\n.stat-box>img {\r\n  width: 40px;\r\n  height: auto;\r\n  margin-right: 5px;\r\n}\r\n\r\n.stat-box>div>div:last-child {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n/* ----------- */\r\n\r\n.hourly-section {\r\n  grid-area: hourly;\r\n  padding: 30px;\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  background-color: rgba(145, 145, 145, 0.5);\r\n}\r\n\r\n.hourly-section .dot {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 3px 0;\r\n  border-radius: 50%;\r\n  border: 2px #fff solid;\r\n}\r\n\r\n.hourly-section>div>* {\r\n  cursor: pointer;\r\n}\r\n\r\n.hourly-weather {\r\n  display: flex;\r\n  /* flex-wrap: wrap; */\r\n  overflow-x: auto;\r\n}\r\n\r\n.hourly-box {\r\n  min-width: calc(100%/8);\r\n  padding: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n  font-weight: 400;\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.hourly-box>div:last-child {\r\n  width: 75px;\r\n  height: 75px;\r\n  background-repeat: no-repeat;\r\n  background-size: 120%;\r\n  position: relative;\r\n  top: -10px;\r\n  left: -10px;\r\n}\r\n\r\n/* --- */\r\n.daily-section {\r\n  grid-area: daily;\r\n  padding: 20px 20px;\r\n}\r\n\r\ntr img {\r\n  width: 80px;\r\n  height: auto;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n}\r\n\r\ntr, th {\r\n  border-bottom: 1px #cccccc solid;\r\n  padding: 10px 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\ntr:last-of-type {\r\n  border-bottom: none;\r\n}\r\n\r\n\r\n/* utilities */\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.current {\r\n  background-color: #fff;\r\n}\r\n\r\n.bold {\r\n  font-weight: 600;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .header {\r\n    gap: 20px;\r\n  }\r\n\r\n  .header img {\r\n    margin: 10px;\r\n  }\r\n\r\n  .unit-switch-button {\r\n    margin-left: 0;\r\n    font-size: 10px;\r\n    padding: 10px 30px;\r\n  }\r\n\r\n  .current-temp {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .current-temp .temp {\r\n    font-size: 50px;\r\n  }\r\n  \r\n  .current-stats {\r\n    grid-area: current-stats;\r\n    display: grid;\r\n    grid-template-rows: repeat(3, 80px);\r\n    grid-template-columns: repeat(2, 130px);\r\n    place-content: center;\r\n    gap: 20px;\r\n    padding: 20px 0;\r\n  }\r\n\r\n  .stat-box>img {\r\n    width: 35px;\r\n    height: auto;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .stat-box>div>div:last-child {\r\n    font-size: 16px\r\n  }\r\n\r\n  .hide {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .header {\r\n    gap: 10px;\r\n  }\r\n\r\n  .current-temp .temp {\r\n    font-size: 80px;\r\n  }\r\n\r\n  .header img {\r\n    width: 80px;\r\n    margin: 0;\r\n  }\r\n\r\n  .current-temp {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .unit-switch-button {\r\n    margin-left: 0;\r\n    padding: 5px 20px;\r\n  }\r\n\r\n  .query-box {\r\n    max-width: 250px;\r\n    padding: 5px 15px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .header {\r\n    padding: 10px;\r\n    gap: 10px;\r\n  }\r\n\r\n  .bold {\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n  }\r\n\r\n  body {\r\n    grid-template-rows: 100px 0.5fr 1fr 0.5fr 2fr;\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas: \r\n    \"header header\"\r\n    \"current-temp current-temp\"\r\n    \"current-stats current-stats\"\r\n    \"hourly hourly\"\r\n    \"daily daily\";\r\n  }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB;AACF;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,8BAA8B;EAC9B;;;;eAIa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,yCAAyC;EACzC,yDAAsD;EACtD,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,OAAO;EACP,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX;WACS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA,YAAY;;AAEZ;EACE,wBAAwB;EACxB,aAAa;EACb,oCAAoC;EACpC,uCAAuC;EACvC,qBAAqB;EACrB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,gBAAgB;;AAEhB;EACE,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,0CAA0C;AAC5C;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA,QAAQ;AACR;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;;AAGA,cAAc;AACd;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE;IACE,SAAS;EACX;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,cAAc;IACd,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,mCAAmC;IACnC,uCAAuC;IACvC,qBAAqB;IACrB,SAAS;IACT,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE;EACF;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,6CAA6C;IAC7C,0BAA0B;IAC1B;;;;;iBAKa;EACf;;AAEF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  color: #fff\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 130px 1fr 0.5fr 2fr;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"current-temp current-stats\"\r\n  \"hourly hourly\"\r\n  \"daily daily\";\r\n  font-size: 10px;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-image: url(\"../dist/images/background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.header {\r\n  grid-area: header;\r\n  padding: 20px;\r\n  font-size: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 40px;\r\n}\r\n\r\n.header>img {\r\n  margin: 0 60px;\r\n  width: 130px;\r\n  height: auto;\r\n}\r\n\r\n.query-box {\r\n  font-size: 1rem;\r\n  padding: 10px 15px;\r\n  border: 2px grey solid;\r\n  border-radius: 30px;\r\n  max-width: 500px;\r\n  flex: 1;\r\n  background-color: #797979;\r\n}\r\n\r\n::placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.query-box:focus {\r\n  outline: none;\r\n  border-color: royalblue;\r\n  box-shadow: 1px 1px 5px royalblue;\r\n}\r\n\r\n.unit-switch-button {\r\n  padding: 10px 40px;\r\n  font-size: 16px;\r\n  border-radius: 20px;\r\n  margin-left: auto;\r\n  min-width: 60px;\r\n  color: #fff;\r\n  background-color: \r\n  royalblue;\r\n}\r\n\r\n.unit-switch-button:active {\r\n  cursor: pointer;\r\n  color: royalblue;\r\n  background-color: #fff;\r\n  box-shadow: 1px 1px 5px royalblue;\r\n}\r\n\r\n.unit-switch-button:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.current-temp {\r\n  border-right: 1px #cccccc solid;\r\n  grid-area: current-temp;\r\n  font-size: 30px;\r\n  padding: 20px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.current-temp .temp {\r\n  font-size: 120px;\r\n}\r\n\r\n/* ------- */\r\n\r\n.current-stats {\r\n  grid-area: current-stats;\r\n  display: grid;\r\n  grid-template-rows: repeat(3, 100px);\r\n  grid-template-columns: repeat(2, 150px);\r\n  place-content: center;\r\n  gap: 20px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.stat-box {\r\n  border: 1.5px #cccccc solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1rem;\r\n  border-radius: 20px;\r\n}\r\n\r\n.stat-box>img {\r\n  width: 40px;\r\n  height: auto;\r\n  margin-right: 5px;\r\n}\r\n\r\n.stat-box>div>div:last-child {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n/* ----------- */\r\n\r\n.hourly-section {\r\n  grid-area: hourly;\r\n  padding: 30px;\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  background-color: rgba(145, 145, 145, 0.5);\r\n}\r\n\r\n.hourly-section .dot {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 3px 0;\r\n  border-radius: 50%;\r\n  border: 2px #fff solid;\r\n}\r\n\r\n.hourly-section>div>* {\r\n  cursor: pointer;\r\n}\r\n\r\n.hourly-weather {\r\n  display: flex;\r\n  /* flex-wrap: wrap; */\r\n  overflow-x: auto;\r\n}\r\n\r\n.hourly-box {\r\n  min-width: calc(100%/8);\r\n  padding: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n  font-weight: 400;\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.hourly-box>div:last-child {\r\n  width: 75px;\r\n  height: 75px;\r\n  background-repeat: no-repeat;\r\n  background-size: 120%;\r\n  position: relative;\r\n  top: -10px;\r\n  left: -10px;\r\n}\r\n\r\n/* --- */\r\n.daily-section {\r\n  grid-area: daily;\r\n  padding: 20px 20px;\r\n}\r\n\r\ntr img {\r\n  width: 80px;\r\n  height: auto;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n}\r\n\r\ntr, th {\r\n  border-bottom: 1px #cccccc solid;\r\n  padding: 10px 20px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\ntr:last-of-type {\r\n  border-bottom: none;\r\n}\r\n\r\n\r\n/* utilities */\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.current {\r\n  background-color: #fff;\r\n}\r\n\r\n.bold {\r\n  font-weight: 600;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .header {\r\n    gap: 20px;\r\n  }\r\n\r\n  .header img {\r\n    margin: 10px;\r\n  }\r\n\r\n  .unit-switch-button {\r\n    margin-left: 0;\r\n    font-size: 10px;\r\n    padding: 10px 30px;\r\n  }\r\n\r\n  .current-temp {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .current-temp .temp {\r\n    font-size: 50px;\r\n  }\r\n  \r\n  .current-stats {\r\n    grid-area: current-stats;\r\n    display: grid;\r\n    grid-template-rows: repeat(3, 80px);\r\n    grid-template-columns: repeat(2, 130px);\r\n    place-content: center;\r\n    gap: 20px;\r\n    padding: 20px 0;\r\n  }\r\n\r\n  .stat-box>img {\r\n    width: 35px;\r\n    height: auto;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .stat-box>div>div:last-child {\r\n    font-size: 16px\r\n  }\r\n\r\n  .hide {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .header {\r\n    gap: 10px;\r\n  }\r\n\r\n  .current-temp .temp {\r\n    font-size: 80px;\r\n  }\r\n\r\n  .header img {\r\n    width: 80px;\r\n    margin: 0;\r\n  }\r\n\r\n  .current-temp {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .unit-switch-button {\r\n    margin-left: 0;\r\n    padding: 5px 20px;\r\n  }\r\n\r\n  .query-box {\r\n    max-width: 250px;\r\n    padding: 5px 15px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .header {\r\n    padding: 10px;\r\n    gap: 10px;\r\n  }\r\n\r\n  .bold {\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n  }\r\n\r\n  body {\r\n    grid-template-rows: 100px 0.5fr 1fr 0.5fr 2fr;\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas: \r\n    \"header header\"\r\n    \"current-temp current-temp\"\r\n    \"current-stats current-stats\"\r\n    \"hourly hourly\"\r\n    \"daily daily\";\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/components/api.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");



let count = 1;

class UI {
  static loadHomepage() {
    UI.openDefault();
    UI.addQueryListeners();
    UI.addSliderListeners();
    UI.addUnitSwitchButtonListeners();
  }

  static openDefault() {
    UI.processQuery('San Francisco').then((data) => {
      UI.loadCurrentWeather(data);
      UI.loadHourlyWeather(data);
      UI.refreshHourlyWeather(null, 1);
      UI.refreshDots(0);
      UI.loadDailyWeather(data);
    });
  }

  static addQueryListeners() {
    const input = document.querySelector("input[type='search']");
    input.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter' && UI.isValidQuery()) {
        UI.processQuery(input.value).then((data) => {
          UI.loadCurrentWeather(data);
          UI.loadHourlyWeather(data);
          UI.refreshHourlyWeather(null, 1);
          UI.refreshDots(0);
          UI.loadDailyWeather(data);
        });
      }
    });
  }

  // Need param 'position' because need to know which dot is being active. (Start from 1)
  static refreshDots(position) {
    const navDots = document.querySelectorAll('.dot');
    navDots.forEach((dot, index) => {
      if (index !== position) {
        dot.classList.remove('current');
      } else {
        dot.classList.add('current');
      }
    });
  }

  // Need param 'type' to correspond relevant actions to different DOM listeners
  // Need param 'position' to know which direction to slide (left/right/jump)
  static refreshHourlyWeather(type = null, position = null) {
    if (type === 'back') {
      if (count === 0) {
        count = 3;
      } else {
        count -= 1;
      }
    } else if (type === 'next') {
      if (count === 3) {
        count = 1;
      } else {
        count += 1;
      }
    } else if (position !== null) {
      count = position;
    }

    const hourlyBoxes = document.querySelectorAll('.hourly-box');
    hourlyBoxes.forEach((box, index) => {
      if (Math.floor(index / 8) === count - 1) {
        box.classList.remove('hidden');
      } else {
        box.classList.add('hidden');
      }
    });
  }

  static addSliderListeners() {
    const backward = document.querySelector('.fa-angle-left');
    const forward = document.querySelector('.fa-angle-right');
    const navDots = document.querySelectorAll('.dot');

    backward.addEventListener('click', () => {
      UI.refreshHourlyWeather('back');
      UI.refreshDots(count - 1);
    });

    forward.addEventListener('click', () => {
      UI.refreshHourlyWeather('next');
      UI.refreshDots(count - 1);
    });

    navDots.forEach((dot, idx) => dot.addEventListener('click', () => {
      UI.refreshHourlyWeather(null, idx + 1);
      UI.refreshDots(idx);
    }));
  }

  static loadCurrentWeather(data, defaultCity = 'San Francisco') {
    const input = document.querySelector("input[type='search']");
    const cityName = document.querySelector('.city-name');
    const weatherStatus = document.querySelector('.weather-status');
    const temp = document.querySelector('.temp');
    const lowTemp = document.querySelector('.low');
    const highTemp = document.querySelector('.high');
    const stats = document.querySelectorAll('.stat-box .stat');

    cityName.textContent = (input.value) ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.makeTitleCase)(input.value) : defaultCity;
    weatherStatus.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.makeTitleCase)(data.current.weather[0].description);
    temp.textContent = Math.round(data.current.temp);
    lowTemp.textContent = Math.round(data.daily[0].temp.min);
    highTemp.textContent = Math.round(data.daily[0].temp.max);

    const subData = [
      Math.round(data.current.feels_like),
      data.current.humidity,
      (Math.round(data.hourly[0].pop * 10) / 10),
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getTimeFromUnixTime)(data.current.sunrise),
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getTimeFromUnixTime)(data.current.sunset),
      Math.round(data.current.uvi * 10) / 10,
    ];

    stats.forEach((stat, index) => {
      stat.textContent = subData[index];
    });
  }

  static createHourlyBoxes() {
    const hourlyWeather = document.createElement('div');
    const hourlySection = document.querySelector('.hourly-section');
    hourlyWeather.classList.add('hourly-weather');
    hourlySection.appendChild(hourlyWeather);

    for (let i = 0; i < 24; i++) {
      const hourlyBox = document.createElement('div');
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const div3 = document.createElement('div');

      hourlyBox.classList.add('hourly-box');
      hourlyBox.append(div1, div2, div3);
      hourlyWeather.append(hourlyBox);
    }
  }

  static loadHourlyWeather(data) {
    const hourlyWeather = document.querySelector('.hourly-weather');
    if (hourlyWeather) {
      hourlyWeather.remove();
    }
    UI.createHourlyBoxes();
    const hourlyBoxes = document.querySelectorAll('.hourly-box');

    hourlyBoxes.forEach((hourlyBox, index) => {
      hourlyBox.children[0].textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getTimeFromUnixTime)(data.hourly[index].dt);
      hourlyBox.children[1].innerHTML = `${Math.round(data.hourly[index].temp)}&#176;`;
      hourlyBox.children[2].style.backgroundImage = `url(https://openweathermap.org/img/wn/${data.hourly[index].weather[0].icon}@2x.png)`;
    });
  }

  static createDailyWeather() {
    const dailyWeather = document.createElement('div');
    const body = document.querySelector('body');
    dailyWeather.classList.add('daily-section');
    body.appendChild(dailyWeather);

    dailyWeather.innerHTML += `
    <table>
      <colgroup>
      <col><col><col><col>
      </colgroup>
      <thead class="hide">
        <th colspan="2">DAY</th>
        <th class="hide">CHANCE OF RAIN</th>
        <th>TEMPERATURE</th>
      </thead>
      <tbody>
        <tr>
          <td></td><td></td><td class="hide"></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td class="hide"></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td class="hide"></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td class="hide"></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td class="hide"></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td class="hide"></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td class="hide"></td><td></td>
        </tr>
      </tbody>
    </table>`;
  }

  static loadDailyWeather(data) {
    const oldTable = document.querySelector('table');
    if (oldTable) {
      oldTable.remove();
    }
    UI.createDailyWeather();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach((row, index) => {
      const rowChildren = row.children;

      rowChildren[0].textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDayFromUnixTime)(data.daily[index].dt);

      const icon = document.createElement('img');
      icon.style.content = `url(https://openweathermap.org/img/wn/${data.daily[index].weather[0].icon}@2x.png)`;
      rowChildren[1].append(icon);

      rowChildren[2].textContent = `${Math.round(data.daily[index].pop * 100)}%`;

      rowChildren[3].innerHTML = `<span>${Math.round(data.daily[index].temp.max)}</span>&#176;  \t <span>${Math.round(data.daily[index].temp.min)}</span>&#176;`;
    });
  }

  static isValidQuery() {
    const input = document.querySelector('input[type="search"]');
    if (input.value.trim() === '') {
      return false;
    }
    if (input.validity.patternMismatch) {
      input.setCustomValidity('Invalid city name. City names must not a) have leading/trailing special characters and b) contain any characters that are not within the English alphabet. Some valid examples: \'Seattle\', \'San Francisco\', \'Ho Chi Minh\'.');
      input.reportValidity();
      return false;
    }
    input.setCustomValidity('');
    return true;
  }

  static async processQuery(value) {
    try {
      const coordinates = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getCoordinates)(value);
      const rawData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getRawData)(coordinates);
      const weatherData = (0,_api__WEBPACK_IMPORTED_MODULE_0__.filterData)(rawData);
      return weatherData;
    } catch {
      alert('No city found');
      throw new Error('No city found.');
    }
  }

  static addUnitSwitchButtonListeners() {
    const temp = document.querySelector('.temp');
    const lowTemp = document.querySelector('.low');
    const highTemp = document.querySelector('.high');
    const feelsLike = document.querySelector('.stat:first-of-type');
    const singles = [temp, lowTemp, highTemp, feelsLike];

    const button = document.querySelector('.unit-switch-button');

    button.addEventListener('click', () => {
      const hourlyBoxes = document.querySelectorAll('.hourly-box');
      const dailies = document.querySelectorAll('tbody tr td:last-child');

      if (hourlyBoxes[0] !== undefined && dailies[0] !== undefined) {
        if (button.children[0].classList.contains('bold')) {
          button.children[0].classList.toggle('bold');
          button.children[1].classList.toggle('bold');

          singles.forEach((single) => { single.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.celsiusToFah)(single.textContent); });
          hourlyBoxes.forEach((box) => { box.children[1].innerHTML = `${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.celsiusToFah)(box.children[1].textContent)}&#176;`; });
          dailies.forEach((daily) => {
            daily.children[0].textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.celsiusToFah)(daily.children[0].textContent);
            daily.children[1].textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.celsiusToFah)(daily.children[1].textContent);
          });
        } else {
          button.children[0].classList.toggle('bold');
          button.children[1].classList.toggle('bold');

          singles.forEach((single) => { single.textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fahToCelsius)(single.textContent); });
          hourlyBoxes.forEach((box) => { box.children[1].innerHTML = `${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.fahToCelsius)(box.children[1].textContent)}&#176;`; });
          dailies.forEach((daily) => {
            daily.children[0].textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fahToCelsius)(daily.children[0].textContent);
            daily.children[1].textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fahToCelsius)(daily.children[1].textContent);
          });
        }
      }
    });
  }
}


/***/ }),

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterData": () => (/* binding */ filterData),
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "getRawData": () => (/* binding */ getRawData)
/* harmony export */ });
const API_KEY = '398634b816b70a2d391979c5b9432d34';

const getURL = (arg) => {
  if (arg.length === 1) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${arg[0]}&APPID=${API_KEY}`;
  }
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${arg[0]}&lon=${arg[1]}&exclude=minutely&units=metric&appid=${API_KEY}`;
};

const getCoordinates = async (cityName) => {
  const response = await fetch(getURL([cityName]), { mode: 'cors' });
  if (response.status === 404) {
    throw new Error('City not found');
  }

  const cityData = await response.json();
  return cityData.coord;
};

const getRawData = async ({ lon, lat }) => {
  try {
    const response = await fetch(getURL([lat, lon]), { mode: 'cors' });
    const rawData = await response.json();

    return rawData;
  } catch (err) {
    throw new Error('Network error');
  }
};

const filterData = (rawData) => ({ current: rawData.current, hourly: rawData.hourly.slice(0, 24), daily: rawData.daily.slice(0, 8) });




/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "celsiusToFah": () => (/* binding */ celsiusToFah),
/* harmony export */   "fahToCelsius": () => (/* binding */ fahToCelsius),
/* harmony export */   "getDayFromUnixTime": () => (/* binding */ getDayFromUnixTime),
/* harmony export */   "getTimeFromUnixTime": () => (/* binding */ getTimeFromUnixTime),
/* harmony export */   "makeTitleCase": () => (/* binding */ makeTitleCase)
/* harmony export */ });
const makeTitleCase = (cityName) => {
  const newName = cityName.toLowerCase().split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return newName.join(' ');
};

const getTimeFromUnixTime = (unixTime) => {
  const date = new Date(unixTime * 1000);
  return `${`${date.getHours()}`.padStart(2, '0')}:${`${date.getMinutes()}`.padEnd(2, '0')}`;
};

const getDayFromUnixTime = (unixTime) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = new Date(unixTime * 1000);
  return days[date.getDay()];
};

const celsiusToFah = (stat) => Math.round((parseInt(stat, 10) * 1.8 + 32));

const fahToCelsius = (stat) => Math.round(((parseInt(stat, 10) - 32) * (5 / 9)));




/***/ }),

/***/ "./dist/images/background.jpg":
/*!************************************!*\
  !*** ./dist/images/background.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dc4ae9b61685264c365.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UI */ "./src/components/UI.js");



_components_UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsa0lBQWdEO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2Qyw2QkFBNkIsc0JBQXNCLGNBQWMsb0JBQW9CLDhDQUE4QyxxQ0FBcUMsbUlBQW1JLHNCQUFzQixpQkFBaUIsZ0JBQWdCLGdEQUFnRCx3RUFBd0UsbUNBQW1DLDZCQUE2QixrQ0FBa0MsbUNBQW1DLEtBQUssaUJBQWlCLHdCQUF3QixvQkFBb0Isc0JBQXNCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQixLQUFLLHFCQUFxQixxQkFBcUIsbUJBQW1CLG1CQUFtQixLQUFLLG9CQUFvQixzQkFBc0IseUJBQXlCLDZCQUE2QiwwQkFBMEIsdUJBQXVCLGNBQWMsZ0NBQWdDLEtBQUssdUJBQXVCLGtCQUFrQixLQUFLLDBCQUEwQixvQkFBb0IsOEJBQThCLHdDQUF3QyxLQUFLLDZCQUE2Qix5QkFBeUIsc0JBQXNCLDBCQUEwQix3QkFBd0Isc0JBQXNCLGtCQUFrQix3Q0FBd0MsS0FBSyxvQ0FBb0Msc0JBQXNCLHVCQUF1Qiw2QkFBNkIsd0NBQXdDLEtBQUssbUNBQW1DLHNCQUFzQixLQUFLLHVCQUF1QixzQ0FBc0MsOEJBQThCLHNCQUFzQixzQkFBc0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGdCQUFnQixLQUFLLDZCQUE2Qix1QkFBdUIsS0FBSyw2Q0FBNkMsK0JBQStCLG9CQUFvQiwyQ0FBMkMsOENBQThDLDRCQUE0QixnQkFBZ0Isc0JBQXNCLEtBQUssbUJBQW1CLGtDQUFrQyxvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsMEJBQTBCLEtBQUssdUJBQXVCLGtCQUFrQixtQkFBbUIsd0JBQXdCLEtBQUssc0NBQXNDLHdCQUF3QixLQUFLLGtEQUFrRCx3QkFBd0Isb0JBQW9CLHdCQUF3QixvQkFBb0IsNkJBQTZCLG9DQUFvQyxpREFBaUQsS0FBSyw4QkFBOEIsNEJBQTRCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHlCQUF5Qiw2QkFBNkIsS0FBSywrQkFBK0Isc0JBQXNCLEtBQUsseUJBQXlCLG9CQUFvQiwwQkFBMEIseUJBQXlCLEtBQUsscUJBQXFCLDhCQUE4QixvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsMEJBQTBCLHVCQUF1QixxQkFBcUIsS0FBSyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixtQ0FBbUMsNEJBQTRCLHlCQUF5QixpQkFBaUIsa0JBQWtCLEtBQUsscUNBQXFDLHVCQUF1Qix5QkFBeUIsS0FBSyxnQkFBZ0Isa0JBQWtCLG1CQUFtQixLQUFLLGVBQWUsZ0NBQWdDLGtCQUFrQixzQkFBc0IsS0FBSyxnQkFBZ0IsdUNBQXVDLHlCQUF5Qix5QkFBeUIsc0JBQXNCLEtBQUsseUJBQXlCLDBCQUEwQixLQUFLLHdDQUF3QyxvQkFBb0IsS0FBSyxrQkFBa0IsNkJBQTZCLEtBQUssZUFBZSx1QkFBdUIsd0JBQXdCLEtBQUssOENBQThDLGVBQWUsa0JBQWtCLE9BQU8sdUJBQXVCLHFCQUFxQixPQUFPLCtCQUErQix1QkFBdUIsd0JBQXdCLDJCQUEyQixPQUFPLHlCQUF5Qix3QkFBd0IsT0FBTywrQkFBK0Isd0JBQXdCLE9BQU8sNEJBQTRCLGlDQUFpQyxzQkFBc0IsNENBQTRDLGdEQUFnRCw4QkFBOEIsa0JBQWtCLHdCQUF3QixPQUFPLHlCQUF5QixvQkFBb0IscUJBQXFCLDBCQUEwQixPQUFPLDBDQUEwQyw4QkFBOEIsaUJBQWlCLHNCQUFzQixPQUFPLEtBQUssOENBQThDLGVBQWUsa0JBQWtCLE9BQU8sK0JBQStCLHdCQUF3QixPQUFPLHVCQUF1QixvQkFBb0Isa0JBQWtCLE9BQU8seUJBQXlCLHdCQUF3QixPQUFPLCtCQUErQix1QkFBdUIsMEJBQTBCLE9BQU8sc0JBQXNCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLE9BQU8scUJBQXFCLHNCQUFzQixrQkFBa0IsT0FBTyxpQkFBaUIseUJBQXlCLHdCQUF3QixPQUFPLGdCQUFnQixzREFBc0QsbUNBQW1DLG1MQUFtTCxPQUFPLFNBQVMsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFFBQVEsVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsVUFBVSxNQUFNLE1BQU0sNEJBQTRCLDZCQUE2QixzQkFBc0IsY0FBYyxvQkFBb0IsOENBQThDLHFDQUFxQyxtSUFBbUksc0JBQXNCLGlCQUFpQixnQkFBZ0IsZ0RBQWdELCtEQUErRCxtQ0FBbUMsNkJBQTZCLGtDQUFrQyxtQ0FBbUMsS0FBSyxpQkFBaUIsd0JBQXdCLG9CQUFvQixzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLEtBQUsscUJBQXFCLHFCQUFxQixtQkFBbUIsbUJBQW1CLEtBQUssb0JBQW9CLHNCQUFzQix5QkFBeUIsNkJBQTZCLDBCQUEwQix1QkFBdUIsY0FBYyxnQ0FBZ0MsS0FBSyx1QkFBdUIsa0JBQWtCLEtBQUssMEJBQTBCLG9CQUFvQiw4QkFBOEIsd0NBQXdDLEtBQUssNkJBQTZCLHlCQUF5QixzQkFBc0IsMEJBQTBCLHdCQUF3QixzQkFBc0Isa0JBQWtCLHdDQUF3QyxLQUFLLG9DQUFvQyxzQkFBc0IsdUJBQXVCLDZCQUE2Qix3Q0FBd0MsS0FBSyxtQ0FBbUMsc0JBQXNCLEtBQUssdUJBQXVCLHNDQUFzQyw4QkFBOEIsc0JBQXNCLHNCQUFzQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEtBQUssNkJBQTZCLHVCQUF1QixLQUFLLDZDQUE2QywrQkFBK0Isb0JBQW9CLDJDQUEyQyw4Q0FBOEMsNEJBQTRCLGdCQUFnQixzQkFBc0IsS0FBSyxtQkFBbUIsa0NBQWtDLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQiwwQkFBMEIsS0FBSyx1QkFBdUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsS0FBSyxzQ0FBc0Msd0JBQXdCLEtBQUssa0RBQWtELHdCQUF3QixvQkFBb0Isd0JBQXdCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLGlEQUFpRCxLQUFLLDhCQUE4Qiw0QkFBNEIsa0JBQWtCLG1CQUFtQixvQkFBb0IseUJBQXlCLDZCQUE2QixLQUFLLCtCQUErQixzQkFBc0IsS0FBSyx5QkFBeUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsS0FBSyxxQkFBcUIsOEJBQThCLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQiwwQkFBMEIsdUJBQXVCLHFCQUFxQixLQUFLLG9DQUFvQyxrQkFBa0IsbUJBQW1CLG1DQUFtQyw0QkFBNEIseUJBQXlCLGlCQUFpQixrQkFBa0IsS0FBSyxxQ0FBcUMsdUJBQXVCLHlCQUF5QixLQUFLLGdCQUFnQixrQkFBa0IsbUJBQW1CLEtBQUssZUFBZSxnQ0FBZ0Msa0JBQWtCLHNCQUFzQixLQUFLLGdCQUFnQix1Q0FBdUMseUJBQXlCLHlCQUF5QixzQkFBc0IsS0FBSyx5QkFBeUIsMEJBQTBCLEtBQUssd0NBQXdDLG9CQUFvQixLQUFLLGtCQUFrQiw2QkFBNkIsS0FBSyxlQUFlLHVCQUF1Qix3QkFBd0IsS0FBSyw4Q0FBOEMsZUFBZSxrQkFBa0IsT0FBTyx1QkFBdUIscUJBQXFCLE9BQU8sK0JBQStCLHVCQUF1Qix3QkFBd0IsMkJBQTJCLE9BQU8seUJBQXlCLHdCQUF3QixPQUFPLCtCQUErQix3QkFBd0IsT0FBTyw0QkFBNEIsaUNBQWlDLHNCQUFzQiw0Q0FBNEMsZ0RBQWdELDhCQUE4QixrQkFBa0Isd0JBQXdCLE9BQU8seUJBQXlCLG9CQUFvQixxQkFBcUIsMEJBQTBCLE9BQU8sMENBQTBDLDhCQUE4QixpQkFBaUIsc0JBQXNCLE9BQU8sS0FBSyw4Q0FBOEMsZUFBZSxrQkFBa0IsT0FBTywrQkFBK0Isd0JBQXdCLE9BQU8sdUJBQXVCLG9CQUFvQixrQkFBa0IsT0FBTyx5QkFBeUIsd0JBQXdCLE9BQU8sK0JBQStCLHVCQUF1QiwwQkFBMEIsT0FBTyxzQkFBc0IseUJBQXlCLDBCQUEwQix3QkFBd0IsT0FBTyxxQkFBcUIsc0JBQXNCLGtCQUFrQixPQUFPLGlCQUFpQix5QkFBeUIsd0JBQXdCLE9BQU8sZ0JBQWdCLHNEQUFzRCxtQ0FBbUMsbUxBQW1MLE9BQU8sU0FBUyxtQkFBbUI7QUFDN29jO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZitEO0FBRzlDO0FBQ2pCO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFEQUFhO0FBQ3hELGdDQUFnQyxxREFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBbUI7QUFDekIsTUFBTSwyREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyREFBbUI7QUFDN0QsMkNBQTJDLG9DQUFvQyxNQUFNO0FBQ3JGLDZGQUE2RixtQ0FBbUM7QUFDaEksS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBEQUFrQjtBQUNyRDtBQUNBO0FBQ0Esb0VBQW9FLGtDQUFrQztBQUN0RztBQUNBO0FBQ0Esc0NBQXNDLHdDQUF3QztBQUM5RTtBQUNBLDBDQUEwQyx1Q0FBdUMsZUFBZSxXQUFXLHVDQUF1QyxhQUFhO0FBQy9KLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0RBQWM7QUFDOUMsNEJBQTRCLGdEQUFVO0FBQ3RDLDBCQUEwQixnREFBVTtBQUNwQztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQixvREFBWSx1QkFBdUI7QUFDaEcseUNBQXlDLCtCQUErQixvREFBWSw4QkFBOEIsTUFBTSxJQUFJO0FBQzVIO0FBQ0EsNENBQTRDLG9EQUFZO0FBQ3hELDRDQUE0QyxvREFBWTtBQUN4RCxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxQkFBcUIsb0RBQVksdUJBQXVCO0FBQ2hHLHlDQUF5QywrQkFBK0Isb0RBQVksOEJBQThCLE1BQU0sSUFBSTtBQUM1SDtBQUNBLDRDQUE0QyxvREFBWTtBQUN4RCw0Q0FBNEMsb0RBQVk7QUFDeEQsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsT0FBTyxTQUFTLFFBQVE7QUFDeEY7QUFDQSxnRUFBZ0UsT0FBTyxPQUFPLE9BQU8sdUNBQXVDLFFBQVE7QUFDcEk7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlHQUFpRztBQUNwSTtBQUNrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsR0FBRyxrQkFBa0IsaUJBQWlCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0U7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNZO0FBQ2pDO0FBQ0EsbUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Rpc3QvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmZcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCAxZnIgMC41ZnIgMmZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gIFxcXCJjdXJyZW50LXRlbXAgY3VycmVudC1zdGF0c1xcXCJcXHJcXG4gIFxcXCJob3VybHkgaG91cmx5XFxcIlxcclxcbiAgXFxcImRhaWx5IGRhaWx5XFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcj5pbWcge1xcclxcbiAgbWFyZ2luOiAwIDYwcHg7XFxyXFxuICB3aWR0aDogMTMwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5xdWVyeS1ib3gge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYm9yZGVyOiAycHggZ3JleSBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTc5Nzk7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5xdWVyeS1ib3g6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcm95YWxibHVlO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcm95YWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udW5pdC1zd2l0Y2gtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogNjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogXFxyXFxuICByb3lhbGJsdWU7XFxyXFxufVxcclxcblxcclxcbi51bml0LXN3aXRjaC1idXR0b246YWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcm95YWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udW5pdC1zd2l0Y2gtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtdGVtcCB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCAjY2NjY2NjIHNvbGlkO1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyZW50LXRlbXA7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtdGVtcCAudGVtcCB7XFxyXFxuICBmb250LXNpemU6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tICovXFxyXFxuXFxyXFxuLmN1cnJlbnQtc3RhdHMge1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyZW50LXN0YXRzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDEwMHB4KTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDE1MHB4KTtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtYm94IHtcXHJcXG4gIGJvcmRlcjogMS41cHggI2NjY2NjYyBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC1ib3g+aW1nIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0LWJveD5kaXY+ZGl2Omxhc3QtY2hpbGQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmhvdXJseS1zZWN0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogaG91cmx5O1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1zZWN0aW9uIC5kb3Qge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IDNweCAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiAycHggI2ZmZiBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1zZWN0aW9uPmRpdj4qIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS13ZWF0aGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWJveCB7XFxyXFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJS84KTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktYm94PmRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIHdpZHRoOiA3NXB4O1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tICovXFxyXFxuLmRhaWx5LXNlY3Rpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkYWlseTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudHIgaW1nIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbnRyLCB0aCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggI2NjY2NjYyBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudHI6bGFzdC1vZi10eXBlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHV0aWxpdGllcyAqL1xcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVuaXQtc3dpdGNoLWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jdXJyZW50LXRlbXAge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3VycmVudC10ZW1wIC50ZW1wIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3VycmVudC1zdGF0cyB7XFxyXFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1zdGF0cztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgODBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDEzMHB4KTtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdGF0LWJveD5pbWcge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnN0YXQtYm94PmRpdj5kaXY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweFxcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jdXJyZW50LXRlbXAgLnRlbXAge1xcclxcbiAgICBmb250LXNpemU6IDgwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3VycmVudC10ZW1wIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVuaXQtc3dpdGNoLWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5xdWVyeS1ib3gge1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvbGQge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAwLjVmciAxZnIgMC41ZnIgMmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICBcXFwiY3VycmVudC10ZW1wIGN1cnJlbnQtdGVtcFxcXCJcXHJcXG4gICAgXFxcImN1cnJlbnQtc3RhdHMgY3VycmVudC1zdGF0c1xcXCJcXHJcXG4gICAgXFxcImhvdXJseSBob3VybHlcXFwiXFxyXFxuICAgIFxcXCJkYWlseSBkYWlseVxcXCI7XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsOEJBQThCO0VBQzlCOzs7O2VBSWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCx5Q0FBeUM7RUFDekMseURBQXNEO0VBQ3RELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixp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Q1g7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDZDQUE2QztJQUM3QywwQkFBMEI7SUFDMUI7Ozs7O2lCQUthO0VBQ2Y7O0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmZcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCAxZnIgMC41ZnIgMmZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gIFxcXCJjdXJyZW50LXRlbXAgY3VycmVudC1zdGF0c1xcXCJcXHJcXG4gIFxcXCJob3VybHkgaG91cmx5XFxcIlxcclxcbiAgXFxcImRhaWx5IGRhaWx5XFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vZGlzdC9pbWFnZXMvYmFja2dyb3VuZC5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyPmltZyB7XFxyXFxuICBtYXJnaW46IDAgNjBweDtcXHJcXG4gIHdpZHRoOiAxMzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnF1ZXJ5LWJveCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5Nzk3OTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnF1ZXJ5LWJveDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByb3lhbGJsdWU7XFxyXFxufVxcclxcblxcclxcbi51bml0LXN3aXRjaC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiA2MHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHJcXG4gIHJveWFsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuaXQtc3dpdGNoLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByb3lhbGJsdWU7XFxyXFxufVxcclxcblxcclxcbi51bml0LXN3aXRjaC1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC10ZW1wIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4ICNjY2NjY2Mgc29saWQ7XFxyXFxuICBncmlkLWFyZWE6IGN1cnJlbnQtdGVtcDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC10ZW1wIC50ZW1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uY3VycmVudC1zdGF0cyB7XFxyXFxuICBncmlkLWFyZWE6IGN1cnJlbnQtc3RhdHM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMTAwcHgpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTUwcHgpO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC1ib3gge1xcclxcbiAgYm9yZGVyOiAxLjVweCAjY2NjY2NjIHNvbGlkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0LWJveD5pbWcge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtYm94PmRpdj5kaXY6bGFzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uaG91cmx5LXNlY3Rpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBob3VybHk7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LXNlY3Rpb24gLmRvdCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIG1hcmdpbjogM3B4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IDJweCAjZmZmIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LXNlY3Rpb24+ZGl2Pioge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LXdlYXRoZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktYm94IHtcXHJcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlLzgpO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmbGV4OiAxIDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1ib3g+ZGl2Omxhc3QtY2hpbGQge1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMjAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gKi9cXHJcXG4uZGFpbHktc2VjdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRhaWx5O1xcclxcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ciBpbWcge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxudHIsIHRoIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCAjY2NjY2NjIHNvbGlkO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50cjpsYXN0LW9mLXR5cGUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogdXRpbGl0aWVzICovXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciBpbWcge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudW5pdC1zd2l0Y2gtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmN1cnJlbnQtdGVtcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jdXJyZW50LXRlbXAgLnRlbXAge1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jdXJyZW50LXN0YXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjdXJyZW50LXN0YXRzO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA4MHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTMwcHgpO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN0YXQtYm94PmltZyB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc3RhdC1ib3g+ZGl2PmRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmN1cnJlbnQtdGVtcCAudGVtcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jdXJyZW50LXRlbXAge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudW5pdC1zd2l0Y2gtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnF1ZXJ5LWJveCB7XFxyXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm9sZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDAuNWZyIDFmciAwLjVmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICAgIFxcXCJjdXJyZW50LXRlbXAgY3VycmVudC10ZW1wXFxcIlxcclxcbiAgICBcXFwiY3VycmVudC1zdGF0cyBjdXJyZW50LXN0YXRzXFxcIlxcclxcbiAgICBcXFwiaG91cmx5IGhvdXJseVxcXCJcXHJcXG4gICAgXFxcImRhaWx5IGRhaWx5XFxcIjtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldENvb3JkaW5hdGVzLCBnZXRSYXdEYXRhLCBmaWx0ZXJEYXRhIH0gZnJvbSAnLi9hcGknO1xyXG5pbXBvcnQge1xyXG4gIGdldFRpbWVGcm9tVW5peFRpbWUsIG1ha2VUaXRsZUNhc2UsIGNlbHNpdXNUb0ZhaCwgZmFoVG9DZWxzaXVzLCBnZXREYXlGcm9tVW5peFRpbWUsXHJcbn0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5sZXQgY291bnQgPSAxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gIHN0YXRpYyBsb2FkSG9tZXBhZ2UoKSB7XHJcbiAgICBVSS5vcGVuRGVmYXVsdCgpO1xyXG4gICAgVUkuYWRkUXVlcnlMaXN0ZW5lcnMoKTtcclxuICAgIFVJLmFkZFNsaWRlckxpc3RlbmVycygpO1xyXG4gICAgVUkuYWRkVW5pdFN3aXRjaEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG9wZW5EZWZhdWx0KCkge1xyXG4gICAgVUkucHJvY2Vzc1F1ZXJ5KCdTYW4gRnJhbmNpc2NvJykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBVSS5sb2FkQ3VycmVudFdlYXRoZXIoZGF0YSk7XHJcbiAgICAgIFVJLmxvYWRIb3VybHlXZWF0aGVyKGRhdGEpO1xyXG4gICAgICBVSS5yZWZyZXNoSG91cmx5V2VhdGhlcihudWxsLCAxKTtcclxuICAgICAgVUkucmVmcmVzaERvdHMoMCk7XHJcbiAgICAgIFVJLmxvYWREYWlseVdlYXRoZXIoZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRRdWVyeUxpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3NlYXJjaCddXCIpO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgVUkuaXNWYWxpZFF1ZXJ5KCkpIHtcclxuICAgICAgICBVSS5wcm9jZXNzUXVlcnkoaW5wdXQudmFsdWUpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIFVJLmxvYWRDdXJyZW50V2VhdGhlcihkYXRhKTtcclxuICAgICAgICAgIFVJLmxvYWRIb3VybHlXZWF0aGVyKGRhdGEpO1xyXG4gICAgICAgICAgVUkucmVmcmVzaEhvdXJseVdlYXRoZXIobnVsbCwgMSk7XHJcbiAgICAgICAgICBVSS5yZWZyZXNoRG90cygwKTtcclxuICAgICAgICAgIFVJLmxvYWREYWlseVdlYXRoZXIoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTmVlZCBwYXJhbSAncG9zaXRpb24nIGJlY2F1c2UgbmVlZCB0byBrbm93IHdoaWNoIGRvdCBpcyBiZWluZyBhY3RpdmUuIChTdGFydCBmcm9tIDEpXHJcbiAgc3RhdGljIHJlZnJlc2hEb3RzKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBuYXZEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xyXG4gICAgbmF2RG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gcG9zaXRpb24pIHtcclxuICAgICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTmVlZCBwYXJhbSAndHlwZScgdG8gY29ycmVzcG9uZCByZWxldmFudCBhY3Rpb25zIHRvIGRpZmZlcmVudCBET00gbGlzdGVuZXJzXHJcbiAgLy8gTmVlZCBwYXJhbSAncG9zaXRpb24nIHRvIGtub3cgd2hpY2ggZGlyZWN0aW9uIHRvIHNsaWRlIChsZWZ0L3JpZ2h0L2p1bXApXHJcbiAgc3RhdGljIHJlZnJlc2hIb3VybHlXZWF0aGVyKHR5cGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwpIHtcclxuICAgIGlmICh0eXBlID09PSAnYmFjaycpIHtcclxuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgY291bnQgPSAzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdW50IC09IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25leHQnKSB7XHJcbiAgICAgIGlmIChjb3VudCA9PT0gMykge1xyXG4gICAgICAgIGNvdW50ID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgIGNvdW50ID0gcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG91cmx5Qm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5LWJveCcpO1xyXG4gICAgaG91cmx5Qm94ZXMuZm9yRWFjaCgoYm94LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoTWF0aC5mbG9vcihpbmRleCAvIDgpID09PSBjb3VudCAtIDEpIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRTbGlkZXJMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBiYWNrd2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1hbmdsZS1sZWZ0Jyk7XHJcbiAgICBjb25zdCBmb3J3YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWFuZ2xlLXJpZ2h0Jyk7XHJcbiAgICBjb25zdCBuYXZEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xyXG5cclxuICAgIGJhY2t3YXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBVSS5yZWZyZXNoSG91cmx5V2VhdGhlcignYmFjaycpO1xyXG4gICAgICBVSS5yZWZyZXNoRG90cyhjb3VudCAtIDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yd2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgVUkucmVmcmVzaEhvdXJseVdlYXRoZXIoJ25leHQnKTtcclxuICAgICAgVUkucmVmcmVzaERvdHMoY291bnQgLSAxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG5hdkRvdHMuZm9yRWFjaCgoZG90LCBpZHgpID0+IGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgVUkucmVmcmVzaEhvdXJseVdlYXRoZXIobnVsbCwgaWR4ICsgMSk7XHJcbiAgICAgIFVJLnJlZnJlc2hEb3RzKGlkeCk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9hZEN1cnJlbnRXZWF0aGVyKGRhdGEsIGRlZmF1bHRDaXR5ID0gJ1NhbiBGcmFuY2lzY28nKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdzZWFyY2gnXVwiKTtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpO1xyXG4gICAgY29uc3Qgd2VhdGhlclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXN0YXR1cycpO1xyXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XHJcbiAgICBjb25zdCBsb3dUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdycpO1xyXG4gICAgY29uc3QgaGlnaFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaCcpO1xyXG4gICAgY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdC1ib3ggLnN0YXQnKTtcclxuXHJcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IChpbnB1dC52YWx1ZSkgPyBtYWtlVGl0bGVDYXNlKGlucHV0LnZhbHVlKSA6IGRlZmF1bHRDaXR5O1xyXG4gICAgd2VhdGhlclN0YXR1cy50ZXh0Q29udGVudCA9IG1ha2VUaXRsZUNhc2UoZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXApO1xyXG4gICAgbG93VGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF0YS5kYWlseVswXS50ZW1wLm1pbik7XHJcbiAgICBoaWdoVGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF0YS5kYWlseVswXS50ZW1wLm1heCk7XHJcblxyXG4gICAgY29uc3Qgc3ViRGF0YSA9IFtcclxuICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSksXHJcbiAgICAgIGRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgICAgKE1hdGgucm91bmQoZGF0YS5ob3VybHlbMF0ucG9wICogMTApIC8gMTApLFxyXG4gICAgICBnZXRUaW1lRnJvbVVuaXhUaW1lKGRhdGEuY3VycmVudC5zdW5yaXNlKSxcclxuICAgICAgZ2V0VGltZUZyb21Vbml4VGltZShkYXRhLmN1cnJlbnQuc3Vuc2V0KSxcclxuICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudXZpICogMTApIC8gMTAsXHJcbiAgICBdO1xyXG5cclxuICAgIHN0YXRzLmZvckVhY2goKHN0YXQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHN0YXQudGV4dENvbnRlbnQgPSBzdWJEYXRhW2luZGV4XTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZUhvdXJseUJveGVzKCkge1xyXG4gICAgY29uc3QgaG91cmx5V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaG91cmx5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktc2VjdGlvbicpO1xyXG4gICAgaG91cmx5V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdob3VybHktd2VhdGhlcicpO1xyXG4gICAgaG91cmx5U2VjdGlvbi5hcHBlbmRDaGlsZChob3VybHlXZWF0aGVyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgY29uc3QgaG91cmx5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBob3VybHlCb3guY2xhc3NMaXN0LmFkZCgnaG91cmx5LWJveCcpO1xyXG4gICAgICBob3VybHlCb3guYXBwZW5kKGRpdjEsIGRpdjIsIGRpdjMpO1xyXG4gICAgICBob3VybHlXZWF0aGVyLmFwcGVuZChob3VybHlCb3gpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWRIb3VybHlXZWF0aGVyKGRhdGEpIHtcclxuICAgIGNvbnN0IGhvdXJseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LXdlYXRoZXInKTtcclxuICAgIGlmIChob3VybHlXZWF0aGVyKSB7XHJcbiAgICAgIGhvdXJseVdlYXRoZXIucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBVSS5jcmVhdGVIb3VybHlCb3hlcygpO1xyXG4gICAgY29uc3QgaG91cmx5Qm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5LWJveCcpO1xyXG5cclxuICAgIGhvdXJseUJveGVzLmZvckVhY2goKGhvdXJseUJveCwgaW5kZXgpID0+IHtcclxuICAgICAgaG91cmx5Qm94LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZ2V0VGltZUZyb21Vbml4VGltZShkYXRhLmhvdXJseVtpbmRleF0uZHQpO1xyXG4gICAgICBob3VybHlCb3guY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChkYXRhLmhvdXJseVtpbmRleF0udGVtcCl9JiMxNzY7YDtcclxuICAgICAgaG91cmx5Qm94LmNoaWxkcmVuWzJdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5ob3VybHlbaW5kZXhdLndlYXRoZXJbMF0uaWNvbn1AMngucG5nKWA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVEYWlseVdlYXRoZXIoKSB7XHJcbiAgICBjb25zdCBkYWlseVdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBkYWlseVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktc2VjdGlvbicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChkYWlseVdlYXRoZXIpO1xyXG5cclxuICAgIGRhaWx5V2VhdGhlci5pbm5lckhUTUwgKz0gYFxyXG4gICAgPHRhYmxlPlxyXG4gICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgIDxjb2w+PGNvbD48Y29sPjxjb2w+XHJcbiAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgIDx0aGVhZCBjbGFzcz1cImhpZGVcIj5cclxuICAgICAgICA8dGggY29sc3Bhbj1cIjJcIj5EQVk8L3RoPlxyXG4gICAgICAgIDx0aCBjbGFzcz1cImhpZGVcIj5DSEFOQ0UgT0YgUkFJTjwvdGg+XHJcbiAgICAgICAgPHRoPlRFTVBFUkFUVVJFPC90aD5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD48L3RkPjx0ZD48L3RkPjx0ZCBjbGFzcz1cImhpZGVcIj48L3RkPjx0ZD48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPjwvdGQ+PHRkPjwvdGQ+PHRkIGNsYXNzPVwiaGlkZVwiPjwvdGQ+PHRkPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+PC90ZD48dGQ+PC90ZD48dGQgY2xhc3M9XCJoaWRlXCI+PC90ZD48dGQ+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD48L3RkPjx0ZD48L3RkPjx0ZCBjbGFzcz1cImhpZGVcIj48L3RkPjx0ZD48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPjwvdGQ+PHRkPjwvdGQ+PHRkIGNsYXNzPVwiaGlkZVwiPjwvdGQ+PHRkPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+PC90ZD48dGQ+PC90ZD48dGQgY2xhc3M9XCJoaWRlXCI+PC90ZD48dGQ+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD48L3RkPjx0ZD48L3RkPjx0ZCBjbGFzcz1cImhpZGVcIj48L3RkPjx0ZD48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPmA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9hZERhaWx5V2VhdGhlcihkYXRhKSB7XHJcbiAgICBjb25zdCBvbGRUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICBpZiAob2xkVGFibGUpIHtcclxuICAgICAgb2xkVGFibGUucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBVSS5jcmVhdGVEYWlseVdlYXRoZXIoKTtcclxuICAgIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xyXG5cclxuICAgIHJvd3MuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCByb3dDaGlsZHJlbiA9IHJvdy5jaGlsZHJlbjtcclxuXHJcbiAgICAgIHJvd0NoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZ2V0RGF5RnJvbVVuaXhUaW1lKGRhdGEuZGFpbHlbaW5kZXhdLmR0KTtcclxuXHJcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgaWNvbi5zdHlsZS5jb250ZW50ID0gYHVybChodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmRhaWx5W2luZGV4XS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZylgO1xyXG4gICAgICByb3dDaGlsZHJlblsxXS5hcHBlbmQoaWNvbik7XHJcblxyXG4gICAgICByb3dDaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5kYWlseVtpbmRleF0ucG9wICogMTAwKX0lYDtcclxuXHJcbiAgICAgIHJvd0NoaWxkcmVuWzNdLmlubmVySFRNTCA9IGA8c3Bhbj4ke01hdGgucm91bmQoZGF0YS5kYWlseVtpbmRleF0udGVtcC5tYXgpfTwvc3Bhbj4mIzE3NjsgIFxcdCA8c3Bhbj4ke01hdGgucm91bmQoZGF0YS5kYWlseVtpbmRleF0udGVtcC5taW4pfTwvc3Bhbj4mIzE3NjtgO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNWYWxpZFF1ZXJ5KCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XHJcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XHJcbiAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdJbnZhbGlkIGNpdHkgbmFtZS4gQ2l0eSBuYW1lcyBtdXN0IG5vdCBhKSBoYXZlIGxlYWRpbmcvdHJhaWxpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBiKSBjb250YWluIGFueSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCB3aXRoaW4gdGhlIEVuZ2xpc2ggYWxwaGFiZXQuIFNvbWUgdmFsaWQgZXhhbXBsZXM6IFxcJ1NlYXR0bGVcXCcsIFxcJ1NhbiBGcmFuY2lzY29cXCcsIFxcJ0hvIENoaSBNaW5oXFwnLicpO1xyXG4gICAgICBpbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBwcm9jZXNzUXVlcnkodmFsdWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXModmFsdWUpO1xyXG4gICAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgZ2V0UmF3RGF0YShjb29yZGluYXRlcyk7XHJcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gZmlsdGVyRGF0YShyYXdEYXRhKTtcclxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGFsZXJ0KCdObyBjaXR5IGZvdW5kJyk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2l0eSBmb3VuZC4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRVbml0U3dpdGNoQnV0dG9uTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XHJcbiAgICBjb25zdCBsb3dUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdycpO1xyXG4gICAgY29uc3QgaGlnaFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaCcpO1xyXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXQ6Zmlyc3Qtb2YtdHlwZScpO1xyXG4gICAgY29uc3Qgc2luZ2xlcyA9IFt0ZW1wLCBsb3dUZW1wLCBoaWdoVGVtcCwgZmVlbHNMaWtlXTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC1zd2l0Y2gtYnV0dG9uJyk7XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBob3VybHlCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHktYm94Jyk7XHJcbiAgICAgIGNvbnN0IGRhaWxpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0ciB0ZDpsYXN0LWNoaWxkJyk7XHJcblxyXG4gICAgICBpZiAoaG91cmx5Qm94ZXNbMF0gIT09IHVuZGVmaW5lZCAmJiBkYWlsaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoYnV0dG9uLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5jb250YWlucygnYm9sZCcpKSB7XHJcbiAgICAgICAgICBidXR0b24uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnYm9sZCcpO1xyXG4gICAgICAgICAgYnV0dG9uLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoJ2JvbGQnKTtcclxuXHJcbiAgICAgICAgICBzaW5nbGVzLmZvckVhY2goKHNpbmdsZSkgPT4geyBzaW5nbGUudGV4dENvbnRlbnQgPSBjZWxzaXVzVG9GYWgoc2luZ2xlLnRleHRDb250ZW50KTsgfSk7XHJcbiAgICAgICAgICBob3VybHlCb3hlcy5mb3JFYWNoKChib3gpID0+IHsgYm94LmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IGAke2NlbHNpdXNUb0ZhaChib3guY2hpbGRyZW5bMV0udGV4dENvbnRlbnQpfSYjMTc2O2A7IH0pO1xyXG4gICAgICAgICAgZGFpbGllcy5mb3JFYWNoKChkYWlseSkgPT4ge1xyXG4gICAgICAgICAgICBkYWlseS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGNlbHNpdXNUb0ZhaChkYWlseS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGRhaWx5LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gY2Vsc2l1c1RvRmFoKGRhaWx5LmNoaWxkcmVuWzFdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidXR0b24uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnYm9sZCcpO1xyXG4gICAgICAgICAgYnV0dG9uLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoJ2JvbGQnKTtcclxuXHJcbiAgICAgICAgICBzaW5nbGVzLmZvckVhY2goKHNpbmdsZSkgPT4geyBzaW5nbGUudGV4dENvbnRlbnQgPSBmYWhUb0NlbHNpdXMoc2luZ2xlLnRleHRDb250ZW50KTsgfSk7XHJcbiAgICAgICAgICBob3VybHlCb3hlcy5mb3JFYWNoKChib3gpID0+IHsgYm94LmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IGAke2ZhaFRvQ2Vsc2l1cyhib3guY2hpbGRyZW5bMV0udGV4dENvbnRlbnQpfSYjMTc2O2A7IH0pO1xyXG4gICAgICAgICAgZGFpbGllcy5mb3JFYWNoKChkYWlseSkgPT4ge1xyXG4gICAgICAgICAgICBkYWlseS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGZhaFRvQ2Vsc2l1cyhkYWlseS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGRhaWx5LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gZmFoVG9DZWxzaXVzKGRhaWx5LmNoaWxkcmVuWzFdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IEFQSV9LRVkgPSAnMzk4NjM0YjgxNmI3MGEyZDM5MTk3OWM1Yjk0MzJkMzQnO1xyXG5cclxuY29uc3QgZ2V0VVJMID0gKGFyZykgPT4ge1xyXG4gIGlmIChhcmcubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHthcmdbMF19JkFQUElEPSR7QVBJX0tFWX1gO1xyXG4gIH1cclxuICByZXR1cm4gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2FyZ1swXX0mbG9uPSR7YXJnWzFdfSZleGNsdWRlPW1pbnV0ZWx5JnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSV9LRVl9YDtcclxufTtcclxuXHJcbmNvbnN0IGdldENvb3JkaW5hdGVzID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnZXRVUkwoW2NpdHlOYW1lXSksIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDaXR5IG5vdCBmb3VuZCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGNpdHlEYXRhLmNvb3JkO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmF3RGF0YSA9IGFzeW5jICh7IGxvbiwgbGF0IH0pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnZXRVUkwoW2xhdCwgbG9uXSksIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gcmF3RGF0YTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBlcnJvcicpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGZpbHRlckRhdGEgPSAocmF3RGF0YSkgPT4gKHsgY3VycmVudDogcmF3RGF0YS5jdXJyZW50LCBob3VybHk6IHJhd0RhdGEuaG91cmx5LnNsaWNlKDAsIDI0KSwgZGFpbHk6IHJhd0RhdGEuZGFpbHkuc2xpY2UoMCwgOCkgfSk7XHJcblxyXG5leHBvcnQgeyBnZXRDb29yZGluYXRlcywgZ2V0UmF3RGF0YSwgZmlsdGVyRGF0YSB9O1xyXG4iLCJjb25zdCBtYWtlVGl0bGVDYXNlID0gKGNpdHlOYW1lKSA9PiB7XHJcbiAgY29uc3QgbmV3TmFtZSA9IGNpdHlOYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKVxyXG4gICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpO1xyXG4gIHJldHVybiBuZXdOYW1lLmpvaW4oJyAnKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWVGcm9tVW5peFRpbWUgPSAodW5peFRpbWUpID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodW5peFRpbWUgKiAxMDAwKTtcclxuICByZXR1cm4gYCR7YCR7ZGF0ZS5nZXRIb3VycygpfWAucGFkU3RhcnQoMiwgJzAnKX06JHtgJHtkYXRlLmdldE1pbnV0ZXMoKX1gLnBhZEVuZCgyLCAnMCcpfWA7XHJcbn07XHJcblxyXG5jb25zdCBnZXREYXlGcm9tVW5peFRpbWUgPSAodW5peFRpbWUpID0+IHtcclxuICBjb25zdCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG5cclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodW5peFRpbWUgKiAxMDAwKTtcclxuICByZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXTtcclxufTtcclxuXHJcbmNvbnN0IGNlbHNpdXNUb0ZhaCA9IChzdGF0KSA9PiBNYXRoLnJvdW5kKChwYXJzZUludChzdGF0LCAxMCkgKiAxLjggKyAzMikpO1xyXG5cclxuY29uc3QgZmFoVG9DZWxzaXVzID0gKHN0YXQpID0+IE1hdGgucm91bmQoKChwYXJzZUludChzdGF0LCAxMCkgLSAzMikgKiAoNSAvIDkpKSk7XHJcblxyXG5leHBvcnQge1xyXG4gIG1ha2VUaXRsZUNhc2UsIGdldFRpbWVGcm9tVW5peFRpbWUsIGNlbHNpdXNUb0ZhaCwgZmFoVG9DZWxzaXVzLCBnZXREYXlGcm9tVW5peFRpbWUsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9jb21wb25lbnRzL1VJJztcclxuXHJcblVJLmxvYWRIb21lcGFnZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=