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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-size: 10px;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 130px 2fr 1.5fr 3fr 50px;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"current-temp current-stats\"\r\n  \"hourly hourly\"\r\n  \"daily daily\"\r\n  \"footer footer\";\r\n}\r\n\r\n.header {\r\n  grid-area: header;\r\n  padding: 20px;\r\n  font-size: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  min-width: 550px;\r\n  background-color: #cccccc;\r\n}\r\n\r\n.header>img {\r\n  width: 150px;\r\n  height: 100px;\r\n}\r\n\r\n.query-box {\r\n  font-size: 1rem;\r\n  padding: 10px;\r\n  border: 2px grey solid;\r\n  border-radius: 30px;\r\n  min-width: 200px;\r\n  width: 50%;\r\n}\r\n\r\n.query-box:focus {\r\n  outline: none;\r\n  border-color: royalblue;\r\n  box-shadow: 1px 1px 5px royalblue;\r\n}\r\n\r\n.unit-switch-button {\r\n  padding: 10px 40px;\r\n  font-size: 1.2rem;\r\n  border-radius: 20px;\r\n  margin-left: auto;\r\n  min-width: 60px;\r\n  color: #fff;\r\n  background-color: \r\n  royalblue;\r\n}\r\n\r\n.unit-switch-button:active {\r\n  cursor: pointer;\r\n  color: royalblue;\r\n  background-color: #fff;\r\n  box-shadow: 1px 1px 5px royalblue;\r\n}\r\n\r\n.unit-switch-button:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.current-temp {\r\n  border: 1px black solid;\r\n  grid-area: current-temp;\r\n  font-size: 1.5rem;\r\n  padding: 20px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n/* ------- */\r\n\r\n.current-stats {\r\n  border: 1px black solid;\r\n  grid-area: current-stats;\r\n  display: grid;\r\n  grid-template-rows: repeat(3, 80px);\r\n  grid-template-columns: repeat(2, 130px);\r\n  place-content: center;\r\n  gap: 20px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.stat-box {\r\n  border: 1.5px black solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1rem;\r\n  border-radius: 20px;\r\n}\r\n\r\n.stat-box>i {\r\n  font-size: 2rem;\r\n  margin-right: 5px;\r\n}\r\n\r\n.stat-box>img {\r\n  width: 35px;\r\n  height: 40px;\r\n  margin-right: 5px;\r\n}\r\n\r\n\r\n.stat-box>div>div:last-child {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n/* ----------- */\r\n\r\n.hourly-section {\r\n  grid-area: hourly;\r\n  padding: 0 30px;\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  background-color: #cccccc;\r\n}\r\n\r\n.hourly-section .dot {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 3px 0;\r\n  border-radius: 50%;\r\n  border: 2px black solid;\r\n}\r\n\r\n.hourly-section>div>* {\r\n  cursor: pointer;\r\n}\r\n\r\n.hourly-weather {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.hourly-box {\r\n  min-width: calc(100%/8);\r\n  padding: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n  font-weight: 400;\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.hourly-box>div:last-child {\r\n  width: 75px;\r\n  height: 75px;\r\n  background-repeat: no-repeat;\r\n  background-size: 120%;\r\n  position: relative;\r\n  top: -10px;\r\n  left: -10px;\r\n}\r\n\r\n/* --- */\r\n.daily-section {\r\n  grid-area: daily;\r\n  padding: 20px 20px;\r\n}\r\n\r\n\r\ntr img {\r\n  width: 50px;\r\n  height: 50px;\r\n  \r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n}\r\n\r\ntd, th {\r\n  border: 1px black solid;\r\n  padding: 10px 20px;\r\n}\r\n\r\nfooter {\r\n  grid-area: footer;\r\n  background-color: #cccccc;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: 1rem;\r\n}\r\n\r\na {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n/* utilities */\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.current {\r\n  background-color: black;\r\n}\r\n\r\n.bold {\r\n  font-weight: 600;\r\n  font-size: 1.5rem;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,SAAS;EACT,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,4CAA4C;EAC5C,8BAA8B;EAC9B;;;;;iBAKe;AACjB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX;WACS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA,YAAY;;AAEZ;EACE,uBAAuB;EACvB,wBAAwB;EACxB,aAAa;EACb,mCAAmC;EACnC,uCAAuC;EACvC,qBAAqB;EACrB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA,gBAAgB;;AAEhB;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA,QAAQ;AACR;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;;AAGA;EACE,WAAW;EACX,YAAY;;AAEd;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA,cAAc;AACd;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-size: 10px;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 130px 2fr 1.5fr 3fr 50px;\r\n  grid-template-columns: 1fr 2fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"current-temp current-stats\"\r\n  \"hourly hourly\"\r\n  \"daily daily\"\r\n  \"footer footer\";\r\n}\r\n\r\n.header {\r\n  grid-area: header;\r\n  padding: 20px;\r\n  font-size: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  min-width: 550px;\r\n  background-color: #cccccc;\r\n}\r\n\r\n.header>img {\r\n  width: 150px;\r\n  height: 100px;\r\n}\r\n\r\n.query-box {\r\n  font-size: 1rem;\r\n  padding: 10px;\r\n  border: 2px grey solid;\r\n  border-radius: 30px;\r\n  min-width: 200px;\r\n  width: 50%;\r\n}\r\n\r\n.query-box:focus {\r\n  outline: none;\r\n  border-color: royalblue;\r\n  box-shadow: 1px 1px 5px royalblue;\r\n}\r\n\r\n.unit-switch-button {\r\n  padding: 10px 40px;\r\n  font-size: 1.2rem;\r\n  border-radius: 20px;\r\n  margin-left: auto;\r\n  min-width: 60px;\r\n  color: #fff;\r\n  background-color: \r\n  royalblue;\r\n}\r\n\r\n.unit-switch-button:active {\r\n  cursor: pointer;\r\n  color: royalblue;\r\n  background-color: #fff;\r\n  box-shadow: 1px 1px 5px royalblue;\r\n}\r\n\r\n.unit-switch-button:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.current-temp {\r\n  border: 1px black solid;\r\n  grid-area: current-temp;\r\n  font-size: 1.5rem;\r\n  padding: 20px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n/* ------- */\r\n\r\n.current-stats {\r\n  border: 1px black solid;\r\n  grid-area: current-stats;\r\n  display: grid;\r\n  grid-template-rows: repeat(3, 80px);\r\n  grid-template-columns: repeat(2, 130px);\r\n  place-content: center;\r\n  gap: 20px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.stat-box {\r\n  border: 1.5px black solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1rem;\r\n  border-radius: 20px;\r\n}\r\n\r\n.stat-box>i {\r\n  font-size: 2rem;\r\n  margin-right: 5px;\r\n}\r\n\r\n.stat-box>img {\r\n  width: 35px;\r\n  height: 40px;\r\n  margin-right: 5px;\r\n}\r\n\r\n\r\n.stat-box>div>div:last-child {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n/* ----------- */\r\n\r\n.hourly-section {\r\n  grid-area: hourly;\r\n  padding: 0 30px;\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  background-color: #cccccc;\r\n}\r\n\r\n.hourly-section .dot {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 3px 0;\r\n  border-radius: 50%;\r\n  border: 2px black solid;\r\n}\r\n\r\n.hourly-section>div>* {\r\n  cursor: pointer;\r\n}\r\n\r\n.hourly-weather {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.hourly-box {\r\n  min-width: calc(100%/8);\r\n  padding: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n  font-weight: 400;\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.hourly-box>div:last-child {\r\n  width: 75px;\r\n  height: 75px;\r\n  background-repeat: no-repeat;\r\n  background-size: 120%;\r\n  position: relative;\r\n  top: -10px;\r\n  left: -10px;\r\n}\r\n\r\n/* --- */\r\n.daily-section {\r\n  grid-area: daily;\r\n  padding: 20px 20px;\r\n}\r\n\r\n\r\ntr img {\r\n  width: 50px;\r\n  height: 50px;\r\n  \r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n}\r\n\r\ntd, th {\r\n  border: 1px black solid;\r\n  padding: 10px 20px;\r\n}\r\n\r\nfooter {\r\n  grid-area: footer;\r\n  background-color: #cccccc;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: 1rem;\r\n}\r\n\r\na {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n/* utilities */\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.current {\r\n  background-color: black;\r\n}\r\n\r\n.bold {\r\n  font-weight: 600;\r\n  font-size: 1.5rem;\r\n}"],"sourceRoot":""}]);
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
    const hourlyWeather = document.querySelector('.hourly-weather');

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
    UI.createHourlyBoxes();
    const hourlyBoxes = document.querySelectorAll('.hourly-box');

    hourlyBoxes.forEach((hourlyBox, index) => {
      hourlyBox.children[0].textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getTimeFromUnixTime)(data.hourly[index].dt);
      hourlyBox.children[1].innerHTML = `${Math.round(data.hourly[index].temp)}&#176;`;
      hourlyBox.children[2].style.backgroundImage = `url(https://openweathermap.org/img/wn/${data.hourly[index].weather[0].icon}@2x.png)`;
    });
  }

  static createDailyWeather() {
    const dailyWeather = document.querySelector('.daily-section');
    dailyWeather.innerHTML += `
    <table>
      <colgroup>
      <col><col><col><col>
      </colgroup>
      <thead>
        <td colspan="2">DAY</td>
        <th>CHANCE OF RAIN</th>
        <th>TEMPERATURE</th>
      </thead>
      <tbody>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
      </tbody>
    </table>`;
  }

  static loadDailyWeather(data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNoQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLEdBQUcsa0JBQWtCLGlCQUFpQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFOzs7Ozs7O1VDeEJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ1k7QUFDakM7QUFDQSxtRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jb21wb25lbnRzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IDJmciAxLjVmciAzZnIgNTBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICBcXFwiY3VycmVudC10ZW1wIGN1cnJlbnQtc3RhdHNcXFwiXFxyXFxuICBcXFwiaG91cmx5IGhvdXJseVxcXCJcXHJcXG4gIFxcXCJkYWlseSBkYWlseVxcXCJcXHJcXG4gIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIG1pbi13aWR0aDogNTUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyPmltZyB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucXVlcnktYm94IHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVlcnktYm94OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJveWFsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuaXQtc3dpdGNoLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogNjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogXFxyXFxuICByb3lhbGJsdWU7XFxyXFxufVxcclxcblxcclxcbi51bml0LXN3aXRjaC1idXR0b246YWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcm95YWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udW5pdC1zd2l0Y2gtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtdGVtcCB7XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGdyaWQtYXJlYTogY3VycmVudC10ZW1wO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLSAqL1xcclxcblxcclxcbi5jdXJyZW50LXN0YXRzIHtcXHJcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyZW50LXN0YXRzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDgwcHgpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTMwcHgpO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC1ib3gge1xcclxcbiAgYm9yZGVyOiAxLjVweCBibGFjayBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC1ib3g+aSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtYm94PmltZyB7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3RhdC1ib3g+ZGl2PmRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5ob3VybHktc2VjdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGhvdXJseTtcXHJcXG4gIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktc2VjdGlvbiAuZG90IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luOiAzcHggMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LXNlY3Rpb24+ZGl2Pioge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LXdlYXRoZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1ib3gge1xcclxcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUvOCk7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWJveD5kaXY6bGFzdC1jaGlsZCB7XFxyXFxuICB3aWR0aDogNzVweDtcXHJcXG4gIGhlaWdodDogNzVweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiAgbGVmdDogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSAqL1xcclxcbi5kYWlseS1zZWN0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGFpbHk7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbnRyIGltZyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbnRkLCB0aCB7XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1dGlsaXRpZXMgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLDhCQUE4QjtFQUM5Qjs7Ozs7aUJBS2U7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWDtXQUNTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyx1Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBLFFBQVE7QUFDUjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IDJmciAxLjVmciAzZnIgNTBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICBcXFwiY3VycmVudC10ZW1wIGN1cnJlbnQtc3RhdHNcXFwiXFxyXFxuICBcXFwiaG91cmx5IGhvdXJseVxcXCJcXHJcXG4gIFxcXCJkYWlseSBkYWlseVxcXCJcXHJcXG4gIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIG1pbi13aWR0aDogNTUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyPmltZyB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucXVlcnktYm94IHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVlcnktYm94OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6IHJveWFsYmx1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJveWFsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuaXQtc3dpdGNoLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogNjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogXFxyXFxuICByb3lhbGJsdWU7XFxyXFxufVxcclxcblxcclxcbi51bml0LXN3aXRjaC1idXR0b246YWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByb3lhbGJsdWU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcm95YWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udW5pdC1zd2l0Y2gtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtdGVtcCB7XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGdyaWQtYXJlYTogY3VycmVudC10ZW1wO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLSAqL1xcclxcblxcclxcbi5jdXJyZW50LXN0YXRzIHtcXHJcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgZ3JpZC1hcmVhOiBjdXJyZW50LXN0YXRzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDgwcHgpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTMwcHgpO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC1ib3gge1xcclxcbiAgYm9yZGVyOiAxLjVweCBibGFjayBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdC1ib3g+aSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtYm94PmltZyB7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3RhdC1ib3g+ZGl2PmRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5ob3VybHktc2VjdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGhvdXJseTtcXHJcXG4gIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktc2VjdGlvbiAuZG90IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luOiAzcHggMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LXNlY3Rpb24+ZGl2Pioge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LXdlYXRoZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1ib3gge1xcclxcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUvOCk7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWJveD5kaXY6bGFzdC1jaGlsZCB7XFxyXFxuICB3aWR0aDogNzVweDtcXHJcXG4gIGhlaWdodDogNzVweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiAgbGVmdDogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSAqL1xcclxcbi5kYWlseS1zZWN0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGFpbHk7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbnRyIGltZyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbnRkLCB0aCB7XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1dGlsaXRpZXMgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0Q29vcmRpbmF0ZXMsIGdldFJhd0RhdGEsIGZpbHRlckRhdGEgfSBmcm9tICcuL2FwaSc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VGltZUZyb21Vbml4VGltZSwgbWFrZVRpdGxlQ2FzZSwgY2Vsc2l1c1RvRmFoLCBmYWhUb0NlbHNpdXMsIGdldERheUZyb21Vbml4VGltZSxcclxufSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmxldCBjb3VudCA9IDE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XHJcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcclxuICAgIFVJLm9wZW5EZWZhdWx0KCk7XHJcbiAgICBVSS5hZGRRdWVyeUxpc3RlbmVycygpO1xyXG4gICAgVUkuYWRkU2xpZGVyTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5hZGRVbml0U3dpdGNoQnV0dG9uTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb3BlbkRlZmF1bHQoKSB7XHJcbiAgICBVSS5wcm9jZXNzUXVlcnkoJ1NhbiBGcmFuY2lzY28nKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIFVJLmxvYWRDdXJyZW50V2VhdGhlcihkYXRhKTtcclxuICAgICAgVUkubG9hZEhvdXJseVdlYXRoZXIoZGF0YSk7XHJcbiAgICAgIFVJLnJlZnJlc2hIb3VybHlXZWF0aGVyKG51bGwsIDEpO1xyXG4gICAgICBVSS5yZWZyZXNoRG90cygwKTtcclxuICAgICAgVUkubG9hZERhaWx5V2VhdGhlcihkYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFF1ZXJ5TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0nc2VhcmNoJ11cIik7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBVSS5pc1ZhbGlkUXVlcnkoKSkge1xyXG4gICAgICAgIFVJLnByb2Nlc3NRdWVyeShpbnB1dC52YWx1ZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgVUkubG9hZEN1cnJlbnRXZWF0aGVyKGRhdGEpO1xyXG4gICAgICAgICAgVUkubG9hZEhvdXJseVdlYXRoZXIoZGF0YSk7XHJcbiAgICAgICAgICBVSS5yZWZyZXNoSG91cmx5V2VhdGhlcihudWxsLCAxKTtcclxuICAgICAgICAgIFVJLnJlZnJlc2hEb3RzKDApO1xyXG4gICAgICAgICAgVUkubG9hZERhaWx5V2VhdGhlcihkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBOZWVkIHBhcmFtICdwb3NpdGlvbicgYmVjYXVzZSBuZWVkIHRvIGtub3cgd2hpY2ggZG90IGlzIGJlaW5nIGFjdGl2ZS4gKFN0YXJ0IGZyb20gMSlcclxuICBzdGF0aWMgcmVmcmVzaERvdHMocG9zaXRpb24pIHtcclxuICAgIGNvbnN0IG5hdkRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XHJcbiAgICBuYXZEb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBwb3NpdGlvbikge1xyXG4gICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBOZWVkIHBhcmFtICd0eXBlJyB0byBjb3JyZXNwb25kIHJlbGV2YW50IGFjdGlvbnMgdG8gZGlmZmVyZW50IERPTSBsaXN0ZW5lcnNcclxuICAvLyBOZWVkIHBhcmFtICdwb3NpdGlvbicgdG8ga25vdyB3aGljaCBkaXJlY3Rpb24gdG8gc2xpZGUgKGxlZnQvcmlnaHQvanVtcClcclxuICBzdGF0aWMgcmVmcmVzaEhvdXJseVdlYXRoZXIodHlwZSA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCkge1xyXG4gICAgaWYgKHR5cGUgPT09ICdiYWNrJykge1xyXG4gICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICBjb3VudCA9IDM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY291bnQgLT0gMTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmV4dCcpIHtcclxuICAgICAgaWYgKGNvdW50ID09PSAzKSB7XHJcbiAgICAgICAgY291bnQgPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcclxuICAgICAgY291bnQgPSBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob3VybHlCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHktYm94Jyk7XHJcbiAgICBob3VybHlCb3hlcy5mb3JFYWNoKChib3gsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChNYXRoLmZsb29yKGluZGV4IC8gOCkgPT09IGNvdW50IC0gMSkge1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFNsaWRlckxpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGJhY2t3YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWFuZ2xlLWxlZnQnKTtcclxuICAgIGNvbnN0IGZvcndhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtYW5nbGUtcmlnaHQnKTtcclxuICAgIGNvbnN0IG5hdkRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XHJcblxyXG4gICAgYmFja3dhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIFVJLnJlZnJlc2hIb3VybHlXZWF0aGVyKCdiYWNrJyk7XHJcbiAgICAgIFVJLnJlZnJlc2hEb3RzKGNvdW50IC0gMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3J3YXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBVSS5yZWZyZXNoSG91cmx5V2VhdGhlcignbmV4dCcpO1xyXG4gICAgICBVSS5yZWZyZXNoRG90cyhjb3VudCAtIDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmF2RG90cy5mb3JFYWNoKChkb3QsIGlkeCkgPT4gZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBVSS5yZWZyZXNoSG91cmx5V2VhdGhlcihudWxsLCBpZHggKyAxKTtcclxuICAgICAgVUkucmVmcmVzaERvdHMoaWR4KTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsb2FkQ3VycmVudFdlYXRoZXIoZGF0YSwgZGVmYXVsdENpdHkgPSAnU2FuIEZyYW5jaXNjbycpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3NlYXJjaCddXCIpO1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJyk7XHJcbiAgICBjb25zdCB3ZWF0aGVyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItc3RhdHVzJyk7XHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcclxuICAgIGNvbnN0IGxvd1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93Jyk7XHJcbiAgICBjb25zdCBoaWdoVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoJyk7XHJcbiAgICBjb25zdCBzdGF0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0LWJveCAuc3RhdCcpO1xyXG5cclxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gKGlucHV0LnZhbHVlKSA/IG1ha2VUaXRsZUNhc2UoaW5wdXQudmFsdWUpIDogZGVmYXVsdENpdHk7XHJcbiAgICB3ZWF0aGVyU3RhdHVzLnRleHRDb250ZW50ID0gbWFrZVRpdGxlQ2FzZShkYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcCk7XHJcbiAgICBsb3dUZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnRlbXAubWluKTtcclxuICAgIGhpZ2hUZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnRlbXAubWF4KTtcclxuXHJcbiAgICBjb25zdCBzdWJEYXRhID0gW1xyXG4gICAgICBNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc19saWtlKSxcclxuICAgICAgZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxyXG4gICAgICAoTWF0aC5yb3VuZChkYXRhLmhvdXJseVswXS5wb3AgKiAxMCkgLyAxMCksXHJcbiAgICAgIGdldFRpbWVGcm9tVW5peFRpbWUoZGF0YS5jdXJyZW50LnN1bnJpc2UpLFxyXG4gICAgICBnZXRUaW1lRnJvbVVuaXhUaW1lKGRhdGEuY3VycmVudC5zdW5zZXQpLFxyXG4gICAgICBNYXRoLnJvdW5kKGRhdGEuY3VycmVudC51dmkgKiAxMCkgLyAxMCxcclxuICAgIF07XHJcblxyXG4gICAgc3RhdHMuZm9yRWFjaCgoc3RhdCwgaW5kZXgpID0+IHtcclxuICAgICAgc3RhdC50ZXh0Q29udGVudCA9IHN1YkRhdGFbaW5kZXhdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlSG91cmx5Qm94ZXMoKSB7XHJcbiAgICBjb25zdCBob3VybHlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS13ZWF0aGVyJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGhvdXJseUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgaG91cmx5Qm94LmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1ib3gnKTtcclxuICAgICAgaG91cmx5Qm94LmFwcGVuZChkaXYxLCBkaXYyLCBkaXYzKTtcclxuICAgICAgaG91cmx5V2VhdGhlci5hcHBlbmQoaG91cmx5Qm94KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBsb2FkSG91cmx5V2VhdGhlcihkYXRhKSB7XHJcbiAgICBVSS5jcmVhdGVIb3VybHlCb3hlcygpO1xyXG4gICAgY29uc3QgaG91cmx5Qm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5LWJveCcpO1xyXG5cclxuICAgIGhvdXJseUJveGVzLmZvckVhY2goKGhvdXJseUJveCwgaW5kZXgpID0+IHtcclxuICAgICAgaG91cmx5Qm94LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZ2V0VGltZUZyb21Vbml4VGltZShkYXRhLmhvdXJseVtpbmRleF0uZHQpO1xyXG4gICAgICBob3VybHlCb3guY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChkYXRhLmhvdXJseVtpbmRleF0udGVtcCl9JiMxNzY7YDtcclxuICAgICAgaG91cmx5Qm94LmNoaWxkcmVuWzJdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5ob3VybHlbaW5kZXhdLndlYXRoZXJbMF0uaWNvbn1AMngucG5nKWA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVEYWlseVdlYXRoZXIoKSB7XHJcbiAgICBjb25zdCBkYWlseVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktc2VjdGlvbicpO1xyXG4gICAgZGFpbHlXZWF0aGVyLmlubmVySFRNTCArPSBgXHJcbiAgICA8dGFibGU+XHJcbiAgICAgIDxjb2xncm91cD5cclxuICAgICAgPGNvbD48Y29sPjxjb2w+PGNvbD5cclxuICAgICAgPC9jb2xncm91cD5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPkRBWTwvdGQ+XHJcbiAgICAgICAgPHRoPkNIQU5DRSBPRiBSQUlOPC90aD5cclxuICAgICAgICA8dGg+VEVNUEVSQVRVUkU8L3RoPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD48dGQ+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPjx0ZD48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+YDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsb2FkRGFpbHlXZWF0aGVyKGRhdGEpIHtcclxuICAgIFVJLmNyZWF0ZURhaWx5V2VhdGhlcigpO1xyXG4gICAgY29uc3Qgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XHJcblxyXG4gICAgcm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd0NoaWxkcmVuID0gcm93LmNoaWxkcmVuO1xyXG5cclxuICAgICAgcm93Q2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBnZXREYXlGcm9tVW5peFRpbWUoZGF0YS5kYWlseVtpbmRleF0uZHQpO1xyXG5cclxuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBpY29uLnN0eWxlLmNvbnRlbnQgPSBgdXJsKGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuZGFpbHlbaW5kZXhdLndlYXRoZXJbMF0uaWNvbn1AMngucG5nKWA7XHJcbiAgICAgIHJvd0NoaWxkcmVuWzFdLmFwcGVuZChpY29uKTtcclxuXHJcbiAgICAgIHJvd0NoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmRhaWx5W2luZGV4XS5wb3AgKiAxMDApfSVgO1xyXG5cclxuICAgICAgcm93Q2hpbGRyZW5bM10uaW5uZXJIVE1MID0gYDxzcGFuPiR7TWF0aC5yb3VuZChkYXRhLmRhaWx5W2luZGV4XS50ZW1wLm1heCl9PC9zcGFuPiYjMTc2OyAgXFx0IDxzcGFuPiR7TWF0aC5yb3VuZChkYXRhLmRhaWx5W2luZGV4XS50ZW1wLm1pbil9PC9zcGFuPiYjMTc2O2A7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1ZhbGlkUXVlcnkoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJzZWFyY2hcIl0nKTtcclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChpbnB1dC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcclxuICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0ludmFsaWQgY2l0eSBuYW1lLiBDaXR5IG5hbWVzIG11c3Qgbm90IGEpIGhhdmUgbGVhZGluZy90cmFpbGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIGIpIGNvbnRhaW4gYW55IGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IHdpdGhpbiB0aGUgRW5nbGlzaCBhbHBoYWJldC4gU29tZSB2YWxpZCBleGFtcGxlczogXFwnU2VhdHRsZVxcJywgXFwnU2FuIEZyYW5jaXNjb1xcJywgXFwnSG8gQ2hpIE1pbmhcXCcuJyk7XHJcbiAgICAgIGlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHByb2Nlc3NRdWVyeSh2YWx1ZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyh2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBnZXRSYXdEYXRhKGNvb3JkaW5hdGVzKTtcclxuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBmaWx0ZXJEYXRhKHJhd0RhdGEpO1xyXG4gICAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgYWxlcnQoJ05vIGNpdHkgZm91bmQnKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjaXR5IGZvdW5kLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFVuaXRTd2l0Y2hCdXR0b25MaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcclxuICAgIGNvbnN0IGxvd1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93Jyk7XHJcbiAgICBjb25zdCBoaWdoVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoJyk7XHJcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdDpmaXJzdC1vZi10eXBlJyk7XHJcbiAgICBjb25zdCBzaW5nbGVzID0gW3RlbXAsIGxvd1RlbXAsIGhpZ2hUZW1wLCBmZWVsc0xpa2VdO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0LXN3aXRjaC1idXR0b24nKTtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhvdXJseUJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseS1ib3gnKTtcclxuICAgICAgY29uc3QgZGFpbGllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyIHRkOmxhc3QtY2hpbGQnKTtcclxuXHJcbiAgICAgIGlmIChob3VybHlCb3hlc1swXSAhPT0gdW5kZWZpbmVkICYmIGRhaWxpZXNbMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChidXR0b24uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdib2xkJykpIHtcclxuICAgICAgICAgIGJ1dHRvbi5jaGlsZHJlblswXS5jbGFzc0xpc3QudG9nZ2xlKCdib2xkJyk7XHJcbiAgICAgICAgICBidXR0b24uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZSgnYm9sZCcpO1xyXG5cclxuICAgICAgICAgIHNpbmdsZXMuZm9yRWFjaCgoc2luZ2xlKSA9PiB7IHNpbmdsZS50ZXh0Q29udGVudCA9IGNlbHNpdXNUb0ZhaChzaW5nbGUudGV4dENvbnRlbnQpOyB9KTtcclxuICAgICAgICAgIGhvdXJseUJveGVzLmZvckVhY2goKGJveCkgPT4geyBib3guY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gYCR7Y2Vsc2l1c1RvRmFoKGJveC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCl9JiMxNzY7YDsgfSk7XHJcbiAgICAgICAgICBkYWlsaWVzLmZvckVhY2goKGRhaWx5KSA9PiB7XHJcbiAgICAgICAgICAgIGRhaWx5LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gY2Vsc2l1c1RvRmFoKGRhaWx5LmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgZGFpbHkuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBjZWxzaXVzVG9GYWgoZGFpbHkuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJ1dHRvbi5jaGlsZHJlblswXS5jbGFzc0xpc3QudG9nZ2xlKCdib2xkJyk7XHJcbiAgICAgICAgICBidXR0b24uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZSgnYm9sZCcpO1xyXG5cclxuICAgICAgICAgIHNpbmdsZXMuZm9yRWFjaCgoc2luZ2xlKSA9PiB7IHNpbmdsZS50ZXh0Q29udGVudCA9IGZhaFRvQ2Vsc2l1cyhzaW5nbGUudGV4dENvbnRlbnQpOyB9KTtcclxuICAgICAgICAgIGhvdXJseUJveGVzLmZvckVhY2goKGJveCkgPT4geyBib3guY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gYCR7ZmFoVG9DZWxzaXVzKGJveC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCl9JiMxNzY7YDsgfSk7XHJcbiAgICAgICAgICBkYWlsaWVzLmZvckVhY2goKGRhaWx5KSA9PiB7XHJcbiAgICAgICAgICAgIGRhaWx5LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZmFoVG9DZWxzaXVzKGRhaWx5LmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgZGFpbHkuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBmYWhUb0NlbHNpdXMoZGFpbHkuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgQVBJX0tFWSA9ICczOTg2MzRiODE2YjcwYTJkMzkxOTc5YzViOTQzMmQzNCc7XHJcblxyXG5jb25zdCBnZXRVUkwgPSAoYXJnKSA9PiB7XHJcbiAgaWYgKGFyZy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2FyZ1swXX0mQVBQSUQ9JHtBUElfS0VZfWA7XHJcbiAgfVxyXG4gIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7YXJnWzBdfSZsb249JHthcmdbMV19JmV4Y2x1ZGU9bWludXRlbHkmdW5pdHM9bWV0cmljJmFwcGlkPSR7QVBJX0tFWX1gO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSBhc3luYyAoY2l0eU5hbWUpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChbY2l0eU5hbWVdKSwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpdHkgbm90IGZvdW5kJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gY2l0eURhdGEuY29vcmQ7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSYXdEYXRhID0gYXN5bmMgKHsgbG9uLCBsYXQgfSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChbbGF0LCBsb25dKSwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiByYXdEYXRhO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIGVycm9yJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmlsdGVyRGF0YSA9IChyYXdEYXRhKSA9PiAoeyBjdXJyZW50OiByYXdEYXRhLmN1cnJlbnQsIGhvdXJseTogcmF3RGF0YS5ob3VybHkuc2xpY2UoMCwgMjQpLCBkYWlseTogcmF3RGF0YS5kYWlseS5zbGljZSgwLCA4KSB9KTtcclxuXHJcbmV4cG9ydCB7IGdldENvb3JkaW5hdGVzLCBnZXRSYXdEYXRhLCBmaWx0ZXJEYXRhIH07XHJcbiIsImNvbnN0IG1ha2VUaXRsZUNhc2UgPSAoY2l0eU5hbWUpID0+IHtcclxuICBjb25zdCBuZXdOYW1lID0gY2l0eU5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpXHJcbiAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSk7XHJcbiAgcmV0dXJuIG5ld05hbWUuam9pbignICcpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZUZyb21Vbml4VGltZSA9ICh1bml4VGltZSkgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1bml4VGltZSAqIDEwMDApO1xyXG4gIHJldHVybiBgJHtgJHtkYXRlLmdldEhvdXJzKCl9YC5wYWRTdGFydCgyLCAnMCcpfToke2Ake2RhdGUuZ2V0TWludXRlcygpfWAucGFkRW5kKDIsICcwJyl9YDtcclxufTtcclxuXHJcbmNvbnN0IGdldERheUZyb21Vbml4VGltZSA9ICh1bml4VGltZSkgPT4ge1xyXG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1bml4VGltZSAqIDEwMDApO1xyXG4gIHJldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldO1xyXG59O1xyXG5cclxuY29uc3QgY2Vsc2l1c1RvRmFoID0gKHN0YXQpID0+IE1hdGgucm91bmQoKHBhcnNlSW50KHN0YXQsIDEwKSAqIDEuOCArIDMyKSk7XHJcblxyXG5jb25zdCBmYWhUb0NlbHNpdXMgPSAoc3RhdCkgPT4gTWF0aC5yb3VuZCgoKHBhcnNlSW50KHN0YXQsIDEwKSAtIDMyKSAqICg1IC8gOSkpKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgbWFrZVRpdGxlQ2FzZSwgZ2V0VGltZUZyb21Vbml4VGltZSwgY2Vsc2l1c1RvRmFoLCBmYWhUb0NlbHNpdXMsIGdldERheUZyb21Vbml4VGltZSxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9jb21wb25lbnRzL1VJJztcclxuXHJcblVJLmxvYWRIb21lcGFnZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=