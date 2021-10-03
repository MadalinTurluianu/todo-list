/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes grow {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 6rem;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes fade-out {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes fade-in-down {\n  0% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n}\n@keyframes fade-in-down-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n}\n@keyframes fade-in-right {\n  0% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n}\n@keyframes fade-in-right-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n}\n@keyframes fade-in-left {\n  0% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n}\n@keyframes fade-in-left-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n}\n* {\n  box-sizing: border-box;\n  font-family: \"Rubik\";\n  color: #6743bb;\n}\n\n.inactive {\n  display: none !important;\n}\n\n.flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.high-priority {\n  background-color: rgba(255, 255, 255, 0.603) !important;\n  background-image: linear-gradient(-45deg, rgba(248, 54, 0, 0.267), rgba(249, 213, 35, 0.514)) !important;\n}\n\noption {\n  cursor: pointer;\n}\n\nbody {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  overflow-x: hidden;\n  background-image: linear-gradient(45deg, #b993d6, #8ca6db);\n}\n\n.backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n  animation: fade-in 1s;\n}\n\n.mobile-backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  animation: fade-in 1s;\n}\n\nbutton {\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  border-radius: 14px;\n  width: 5rem;\n  padding: 0.3rem;\n  font-size: 0.8rem;\n}\n\ninput,\nselect,\noption {\n  background-color: rgba(255, 255, 255, 0.603);\n}\n\nnav {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 1rem 0 1rem;\n  height: 8rem;\n}\n\nnav img {\n  min-width: 6rem;\n  width: 6rem;\n  margin-left: 1rem;\n}\n\n.mobile-menu {\n  display: none;\n}\n\n.nav-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  width: clamp(8rem, 80%, 25rem);\n  margin-top: 0.6rem;\n}\n\n.wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 14px;\n  transition: height;\n  width: 8rem;\n}\n\n.wrapper button {\n  background: transparent;\n  width: 8rem;\n}\n\n.filters-container,\n.add-project__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.603);\n  animation: grow 0.3s;\n  overflow: hidden;\n  width: 90%;\n}\n.filters-container button,\n.add-project__container button {\n  color: rgba(255, 255, 255, 0.877);\n}\n.filters-container .add-project_btn,\n.add-project__container .add-project_btn {\n  color: #6743bb;\n}\n\n.add-project__form {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.add-project__form input {\n  width: 90%;\n  margin: auto;\n}\n.add-project__form button {\n  color: #6743bb;\n}\n.add-project__form .buttons-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0.5rem 0;\n  width: 100%;\n}\n.add-project__form .buttons-container button {\n  width: 3rem;\n  padding: 0;\n  font-weight: normal;\n}\n\nmain {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 10rem;\n}\n\n.page-title__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.603);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.3rem;\n}\n.page-title__container h2 {\n  font-family: Pacifico;\n  color: rgba(255, 255, 255, 0.877);\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: normal;\n}\n.page-title__container .delete-project__btn {\n  background-color: #f01d5d;\n  color: rgba(255, 255, 255, 0.877);\n  position: absolute;\n  right: -6rem;\n  top: 1rem;\n  width: 4rem;\n}\n\n.add-task__btn {\n  width: 5rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 0.5rem 0;\n}\n\n.add-task__form {\n  position: absolute;\n  z-index: 50;\n  top: 30vh;\n  animation: fade-in-down 0.8s;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  row-gap: 0.8rem;\n  column-gap: 0.5rem;\n  width: clamp(10rem, 90%, 50rem);\n  box-shadow: -2px 2px rgba(255, 255, 255, 0.466);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 1rem;\n  border-radius: 15px;\n}\n\nmain form div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-column: 1/3;\n}\n\nmain form button {\n  background-color: transparent;\n  width: 5rem;\n  margin-top: 1rem;\n}\n\ninput,\nmain select {\n  height: 1.2rem;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n}\n\nlabel {\n  text-align: center;\n  font-size: 0.9rem;\n}\n\ninput:hover,\ninput:active,\ninput:focus,\nselect:hover,\nselect:active,\nselect:focus,\nbutton:hover,\nbutton:active,\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover {\n  color: #f01d5d !important;\n}\n\n.page-title__container button:hover {\n  color: #6743bb !important;\n}\n\n.list-container {\n  width: 100%;\n}\n\n.list-container ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style-type: none;\n  margin-block-start: 2rem;\n  margin-block-end: 2rem;\n  padding-inline-start: 0;\n  width: 100%;\n}\n\nli {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto auto;\n  grid-template-rows: 2rem auto;\n  width: clamp(10rem, 90%, 50rem);\n  margin: 0;\n  margin-bottom: 2rem;\n  padding: 0.5rem 1rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 20px;\n}\n\n.task-title {\n  margin-right: 0.4rem;\n  font-size: 1.3rem;\n}\n\n.task-date {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\n\n.delete-task__btn {\n  position: absolute;\n  right: 1.2rem;\n  top: center;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.603);\n  width: 1.2rem;\n  height: 1.2rem;\n  background-image: none;\n  background-color: transparent;\n}\n\nli h2,\nli p {\n  margin: 0;\n}\n\n@media (max-width: 600px) {\n  .mobile-menu {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    margin-top: 1.4rem;\n    cursor: pointer;\n    height: 1.4rem;\n  }\n  .mobile-menu div {\n    width: 0.7rem;\n    height: 0.7rem;\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.774), rgba(255, 255, 255, 0.349));\n    border-radius: 50%;\n    margin-right: 0.3rem;\n  }\n\n  .nav-buttons {\n    animation: fade-in-left 0.8s;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    position: absolute;\n    z-index: 30;\n    top: 0;\n    right: 0;\n    width: clamp(10rem, 50vw, 40rem);\n    height: 100vh;\n    margin: 0;\n    background-color: rgba(255, 255, 255, 0.753);\n  }\n\n  .nav-buttons button {\n    font-size: 1.2rem;\n  }\n\n  .nav-buttons > button {\n    margin-top: 5rem;\n  }\n\n  .nav-buttons > div {\n    margin-top: 3rem;\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .nav-buttons button {\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .wrapper {\n    width: 80%;\n  }\n\n  .filters-container button,\n.projects-container button {\n    color: #9d5cc4;\n    font-size: 1.1rem;\n  }\n\n  .add-project__container button {\n    font-size: 1rem;\n  }\n\n  .filters-container,\n.add-project__container {\n    border-top: 1px solid rgba(103, 67, 187, 0.603);\n  }\n}\n\n/*# sourceMappingURL=main.css.map */\n", "",{"version":3,"sources":["webpack://./src/style/main.scss","webpack://./src/style/main.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/DOM.js":
/*!*******************************!*\
  !*** ./src/components/DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backdrop": () => (/* binding */ backdrop),
/* harmony export */   "mobileBackdrop": () => (/* binding */ mobileBackdrop),
/* harmony export */   "navButtons": () => (/* binding */ navButtons),
/* harmony export */   "closeMenu": () => (/* binding */ closeMenu),
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "projectsContainer": () => (/* binding */ projectsContainer),
/* harmony export */   "inboxBtn": () => (/* binding */ inboxBtn),
/* harmony export */   "filtersContainer": () => (/* binding */ filtersContainer),
/* harmony export */   "dailyFilterBtn": () => (/* binding */ dailyFilterBtn),
/* harmony export */   "weeklyFilterBtn": () => (/* binding */ weeklyFilterBtn),
/* harmony export */   "highPriorityFilterBtn": () => (/* binding */ highPriorityFilterBtn),
/* harmony export */   "addProjectContainer": () => (/* binding */ addProjectContainer),
/* harmony export */   "projectForm": () => (/* binding */ projectForm),
/* harmony export */   "projectFormInput": () => (/* binding */ projectFormInput),
/* harmony export */   "projectFormCancelBtn": () => (/* binding */ projectFormCancelBtn),
/* harmony export */   "pageTitleContainer": () => (/* binding */ pageTitleContainer),
/* harmony export */   "pageTitle": () => (/* binding */ pageTitle),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "addTaskBtn": () => (/* binding */ addTaskBtn),
/* harmony export */   "ul": () => (/* binding */ ul),
/* harmony export */   "listContainer": () => (/* binding */ listContainer),
/* harmony export */   "taskForm": () => (/* binding */ taskForm),
/* harmony export */   "descriptionInput": () => (/* binding */ descriptionInput),
/* harmony export */   "dueDateInput": () => (/* binding */ dueDateInput),
/* harmony export */   "priorityInput": () => (/* binding */ priorityInput),
/* harmony export */   "projectInput": () => (/* binding */ projectInput),
/* harmony export */   "taskFormCancelBtn": () => (/* binding */ taskFormCancelBtn)
/* harmony export */ });
const backdrop = document.querySelector(".backdrop");
const mobileBackdrop = document.querySelector(".mobile-backdrop");
// ---------------------------------------------NAV

const nav = document.querySelector("nav");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuDiv = document.querySelector(".mobile-menu div");
const navButtons = document.querySelector(".nav-buttons");

const addProjectBtn = document.querySelector(".add-project_btn");
const projectsContainer = document.querySelector(".projects-container");

// --FILTERS

const inboxBtn = document.querySelector(".inbox");
const filtersBtn = document.querySelector(".filters");
const projectsBtn = document.querySelector(".projects");
const filtersContainer = document.querySelector(".filters-container");
const dailyFilterBtn = document.querySelector(".daily-filter");
const weeklyFilterBtn = document.querySelector(".weekly-filter");
const highPriorityFilterBtn = document.querySelector(".hp-filter");

// ---PROJECT FORM CONTENT
const addProjectContainer = document.querySelector(".add-project__container");

const projectForm = document.querySelector(".add-project__form");
const projectFormInput = projectForm.querySelector("input");
const projectFormCancelBtn = projectForm.querySelector("button[type='button']");

// ---------------------------------------------MAIN

const main = document.querySelector("main");
const addTaskBtn = document.querySelector(".add-task__btn");
const ul = document.querySelector("ul");
const listContainer = document.querySelector(".list-container");

// ---PAGE TITLE + CANCEL PROJECT

const pageTitleContainer = document.querySelector(".page-title__container");
const pageTitle = document.createElement("h2");
pageTitle.textContent = "Inbox";
pageTitleContainer.appendChild(pageTitle);

// ---TASK FORM CONTENT

const taskForm = document.querySelector(".add-task__form");
const descriptionInput = document.querySelector("#form-description");
const dueDateInput = document.querySelector("#form-due-date");
const priorityInput = document.querySelector("#form-priority");
const projectInput = document.querySelector("#belong-project");
const taskFormCancelBtn = document.querySelector(
  ".add-task__form button[type='button']"
);

// ---------------------------------------------LOGIC

priorityInput.addEventListener("change", function () {
  if (priorityInput.value === "high") {
    priorityInput.classList.add("high-priority");
  } else {
    priorityInput.classList.remove("high-priority");
  }
});

addTaskBtn.addEventListener("click", function () {
  taskForm.classList.remove("inactive");
  priorityInput.classList.remove("high-priority");
  backdrop.classList.remove("inactive");
  document.querySelector("ul").classList.add("inactive");
  filtersContainer.classList.add("inactive");
  addProjectContainer.classList.add("inactive");
});

inboxBtn.addEventListener("click", function () {
  filtersContainer.classList.add("inactive");
  addProjectContainer.classList.add("inactive");
});

filtersBtn.addEventListener("click", function () {
  filtersContainer.classList.toggle("inactive");
  addProjectContainer.classList.add("inactive");
});

projectsBtn.addEventListener("click", function () {
  filtersContainer.classList.add("inactive");
  addProjectContainer.classList.toggle("inactive");
});

for (let filter of [...filtersContainer.children]) {
  filter.addEventListener("click", function () {
    filtersContainer.classList.add("inactive");
  });
}

// -------------------------MOBILE

function openMenu() {
  navButtons.classList.add("flex");
  mobileMenu.classList.add("inactive");
  mobileBackdrop.classList.remove("inactive");
}

function closeMenu() {
  let mobile = document.body.clientWidth < 600 ? true : false;

  if (mobile) {
    addProjectContainer.classList.add("inactive");
    filtersContainer.classList.add("inactive");
    mobileBackdrop.style.animation = "fade-out 0.8s";
    navButtons.style.animation = "fade-in-left-reverse 0.8s";
    mobileMenu.style.animation = "fade-in 1.6s";
    mobileMenu.classList.remove("inactive");

    setTimeout(() => {
      navButtons.classList.remove("flex");
      mobileBackdrop.classList.add("inactive");
      mobileBackdrop.style.animation = "";
      navButtons.style.animation = "";
    }, 800);
  }
}

mobileMenu.addEventListener("click", openMenu);
mobileMenuDiv.addEventListener("click", openMenu);




/***/ }),

/***/ "./src/components/filteredLists.js":
/*!*****************************************!*\
  !*** ./src/components/filteredLists.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilteredList": () => (/* binding */ createFilteredList)
/* harmony export */ });
function createFilteredList(filterType, originList, projectName = "") {
  const filteredList = document.createElement("ul");
  let currentDate = new Date().toString().split(" ").slice(0, 4).join(" ");
  let filteredArray;

  // ------------------------------------------------ Inbox

  if (filterType === "inbox") {
    filteredArray = originList;

    // ---------------------------------------------- HP filter
  } else if (filterType === "high priority") {
    filteredArray = originList.filter(
      (task) => task.taskObj.priority === "high"
    );

    // ---------------------------------------------- daily filter
  } else if (filterType === "today") {
    filteredArray = originList.filter((task) => {
      let taskDate = new Date(task.taskObj.dueDate)
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
      return taskDate === currentDate;
    });

    // ---------------------------------------------- weekly filter
  } else if (filterType === "week") {
    filteredArray = originList.filter((task) => {
      const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      let taskDateArr = new Date(task.taskObj.dueDate)
        .toString()
        .split(" ")
        .slice(0, 4);
      let taskMonth = taskDateArr[1];
      let taskDay = taskDateArr[2];
      let taskYear = taskDateArr[3];
      let currentDay = Number(currentDate.split(" ")[2]);
      let currentMonth = currentDate.split(" ")[1];
      let currentYear = currentDate.split(" ")[3];
      let weekIndex = week.indexOf(currentDate.split(" ")[0]);

      const months = {
        all: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        31: ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"],
        30: ["Apr", "Jun", "Sep", "Nov"],
        29: Number(currentYear) % 4 === 0 ? ["Feb"] : [],
        28: Number(currentYear) % 4 === 0 ? [] : ["Feb"],
      };

      for (let i = weekIndex; i <= weekIndex + 6; i++) {
        let thisWeekDay = currentDay + (6 - i);
        let thisWeekMonth = currentMonth;
        let thisWeekYear = currentYear;

        // ---GET TO NEXT MONTH/YEAR

        function setNextMonthYear() {
          if (thisWeekMonth === "Dec") {
            thisWeekMonth = "Jan";
            thisWeekYear = (Number(thisWeekYear) + 1).toString();
          } else {
            thisWeekMonth = months.all[months.all.indexOf(thisWeekMonth) + 1];
          }
        }

        function setPreviousMonthYear() {
          if (thisWeekMonth === "Jan") {
            thisWeekMonth = "Dec";
            thisWeekYear = (Number(thisWeekYear) - 1).toString();
          } else {
            thisWeekMonth = months.all[months.all.indexOf(thisWeekMonth) - 1];
          }
        }

        if (months[31].includes(thisWeekMonth) && thisWeekDay > 31) {
          thisWeekDay = thisWeekDay - 31;
          setNextMonthYear();
        } else if (months[30].includes(thisWeekMonth) && thisWeekDay > 30) {
          setNextMonthYear();
          thisWeekDay = thisWeekDay - 30;
        } else if (months[29].includes(thisWeekMonth) && thisWeekDay > 29) {
          thisWeekDay = thisWeekDay - 29;
          setNextMonthYear();
        } else if (months[28].includes(thisWeekMonth) && thisWeekDay > 28) {
          thisWeekDay = thisWeekDay - 28;
          setNextMonthYear();
        }

        // ---GET TO PREVIOUS MONTH/YEAR
        else if (thisWeekDay < 1) {
          setPreviousMonthYear();

          if (months[31].includes(thisWeekMonth)) {
            thisWeekDay = 31 + thisWeekDay;
          } else if (months[30].includes(thisWeekMonth)) {
            thisWeekDay = 30 + thisWeekDay;
          } else if (months[29].includes(thisWeekMonth)) {
            thisWeekDay = 29 + thisWeekDay;
          } else if (months[28].includes(thisWeekMonth)) {
            thisWeekDay = 28 + thisWeekDay;
          }
        }

        // ---NORMAL BEHAVIOR
        else {
          thisWeekDay = thisWeekDay;
        }

        if (
          `${Number(taskDay)} ${taskMonth} ${taskYear}` ===
          `${thisWeekDay} ${thisWeekMonth} ${thisWeekYear}`
        ) {
          return true;
        }
      }
    });

    // ---------------------------------------------- filter by project
  } else if (filterType === "project") {
    filteredArray = originList.filter(
      (task) => projectName === task.taskObj.project
    );
  }

  filteredArray.map((task) => {
    filteredList.appendChild(task.taskEl);
  });

  return filteredList;
}




/***/ }),

/***/ "./src/components/newTask.js":
/*!***********************************!*\
  !*** ./src/components/newTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
class Task {
  constructor(description, dueDate, priority, project) {
    this.description = description;
    this.dueDate =
      dueDate === ""
        ? ""
        : new Date(dueDate).toString().split(" ").slice(1, 4).join(" ");
    this.priority = priority;
    this.project = project;
  }
}

function createTask(description, dueDate, priority, project) {
  const taskObj = new Task(description, dueDate, priority, project);

  let taskEl = document.createElement("li");

  let taskTitle = document.createElement("h2");
  taskTitle.textContent = taskObj.project === "" ? "" : taskObj.project;
  taskTitle.className = "task-title";

  let taskDescription = document.createElement("p");
  taskDescription.textContent = taskObj.description;
  taskDescription.className = "task-description";

  let taskDueDate = document.createElement("p");
  let date = new Date(taskObj.dueDate);
  taskDueDate.textContent = taskObj.dueDate === "" ? "" :`${date.getDate() >= 10 ? date.getDate(): `0${date.getDate()}`}-${date.getMonth() + 1 >= 10 ? date.getMonth() + 1: `0${date.getMonth() + 1}`}-${date.getFullYear()}`;
  taskDueDate.className = "task-date";

  if (taskObj.priority === "high") {
    taskEl.classList.add("high-priority");
  } 

  let deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "delete-task__btn";

  if (taskTitle.textContent !== "") {
    taskEl.appendChild(taskTitle);
  }else {
    taskDueDate.style.gridColumn = "1 / 3"
  }

  if (taskDueDate.textContent !== "") {
    taskEl.appendChild(taskDueDate);
  }

  taskEl.appendChild(taskDescription);
  taskEl.appendChild(deleteTaskBtn);

  return { taskEl, taskObj };
}




/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
function createProject(projectName, optionParent, btnParent) {
  let option = document.createElement("option");
  option.value = projectName;
  option.textContent = projectName;
  optionParent.appendChild(option);

  let button = document.createElement("button");
  button.textContent = projectName;
  btnParent.appendChild(button);

  let name = projectName;

  return { option, button, name };
}

function removeProject(projectName, originalArray, select, projContainer) {
  for (let task of originalArray) {
    if (task.taskObj.project === projectName) {
      originalArray.splice(originalArray.indexOf(task), 1);
    }
  }

  let options = [...select.children];
  let index = options.findIndex((option) => option.textContent === projectName);

  select.removeChild(select.children[index]);

  let projects = [...projContainer.children];
  let index2 = projects.findIndex(
    (project) => project.textContent === projectName
  );
  projContainer.removeChild(projContainer.children[index2]);
}




/***/ }),

/***/ "./src/components/tasks.js":
/*!*********************************!*\
  !*** ./src/components/tasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
function addTask(container, task, storageArray) {
  container.querySelector("ul").appendChild(task.taskEl);
  storageArray.push(task);
}

function removeTask(container, task, storageArray) {
  container.querySelector("ul").removeChild(task.taskEl);
  storageArray.splice(storageArray.indexOf(task), 1);
}




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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ "./src/style/main.css");
/* harmony import */ var _components_newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/newTask */ "./src/components/newTask.js");
/* harmony import */ var _components_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tasks */ "./src/components/tasks.js");
/* harmony import */ var _components_filteredLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filteredLists */ "./src/components/filteredLists.js");
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project */ "./src/components/project.js");
/* harmony import */ var _components_DOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DOM */ "./src/components/DOM.js");







// ------------------------------------------- Tasks handling

const oldTasks = JSON.parse(localStorage.getItem("taskObjects"));

const taskList = [];

if (oldTasks !== null) {
  for (let obj of oldTasks) {
    let task = (0,_components_newTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(
      obj.description,
      obj.dueDate,
      obj.priority,
      obj.project
    );
    (0,_components_tasks__WEBPACK_IMPORTED_MODULE_2__.addTask)(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer, task, taskList);

    let deleteTaskBtn = [...task.taskEl.children].filter(
      (element) => element.className === "delete-task__btn"
    )[0];
  
    deleteTaskBtn.addEventListener("click", function () {
      task.taskEl.style.animation = "fade-in-right-reverse 0.8s";
      setTimeout(() => {
        task.taskEl.style.animation = "";
        (0,_components_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTask)(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer, task, taskList);
        localStorage.setItem("taskObjects", JSON.stringify(taskList.map(task => task.taskObj)));
      }, 800);
    });
  }
}

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.addEventListener("change", function() {
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.value = _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.value.trim();
})

function closeTaskForm() {
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.style.animation = "fade-in-down-reverse 0.8s";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.style.animation = "fade-out 0.8s";
  rerenderUl("inbox");

  setTimeout(() => {
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.style.animation = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.style.animation = "";
    document.querySelector("ul").style.animation = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.classList.add("inactive");
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.value = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.dueDateInput.value = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.priorityInput.value = "normal";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput.value = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.classList.add("inactive");
  }, 800);
}

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.addEventListener("click", closeTaskForm);

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let task = (0,_components_newTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.value,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.dueDateInput.value,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.priorityInput.value,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput.value
  );

  closeTaskForm();

  setTimeout(() => {
    task.taskEl.style.animation = "fade-in-right 1s";
    (0,_components_tasks__WEBPACK_IMPORTED_MODULE_2__.addTask)(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer, task, taskList);
    localStorage.setItem("taskObjects", JSON.stringify(taskList.map(task => task.taskObj)));
  }, 400);

  setTimeout(() => {
    task.taskEl.style.animation = "";
  }, 1400);

  // ------------------------------------------- Delete task functionality

  let deleteTaskBtn = [...task.taskEl.children].filter(
    (element) => element.className === "delete-task__btn"
  )[0];

  deleteTaskBtn.addEventListener("click", function () {
    task.taskEl.style.animation = "fade-in-right-reverse 0.8s";
    setTimeout(() => {
      task.taskEl.style.animation = "";
      (0,_components_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTask)(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer, task, taskList);
      localStorage.setItem("taskObjects", JSON.stringify(taskList.map(task => task.taskObj)));
    }, 800);
  });
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskFormCancelBtn.addEventListener("click", closeTaskForm);

// ------------------------------------------- Projects handling

// ---ADD PROJECT

function closeAddProjectForm() {
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.addProjectBtn.classList.remove("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectForm.classList.add("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectFormInput.value = "";
}

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.addProjectBtn.addEventListener("click", function () {
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.addProjectBtn.classList.add("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectForm.classList.remove("inactive");
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectFormCancelBtn.addEventListener("click", closeAddProjectForm);

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (_components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectFormInput.value.trim() !== "") {
    let project = (0,_components_project__WEBPACK_IMPORTED_MODULE_4__.createProject)(
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectFormInput.value.trim(),
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput,
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectsContainer
    );
    project.button.addEventListener("click", function () {
      rerenderUl("project", project.name);

      // ---REMOVE PROJECT

      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.innerHTML = "";
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.appendChild(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle);
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = project.name;
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.addProjectContainer.classList.add("inactive");

      let deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "delete-project__btn";
      deleteProjectBtn.textContent = "Delete";

      deleteProjectBtn.addEventListener("click", function () {
        (0,_components_project__WEBPACK_IMPORTED_MODULE_4__.removeProject)(project.name, taskList, _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput, _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectsContainer);
        rerenderUl("inbox");
        _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.remove(deleteProjectBtn);
      });

      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.appendChild(deleteProjectBtn);
      (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
    });
  }
  closeAddProjectForm();
});

// ---MOBILE CLOSE ADD PROJECT FORM

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.mobileBackdrop.addEventListener("click", function () {
  closeAddProjectForm();
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

// ------------------------------------------- Filter handling

function rerenderUl(filterType, projectName = "") {
  let newUlList = (0,_components_filteredLists__WEBPACK_IMPORTED_MODULE_3__.createFilteredList)(filterType, taskList, projectName);
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer.innerHTML = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer.appendChild(newUlList);
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.innerHTML = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent =
    filterType === "inbox"
      ? "Inbox"
      : filterType === "high priority"
      ? "High priority"
      : filterType === "today"
      ? "Today"
      : filterType === "week"
      ? "This week"
      : filterType === "project"
      ? projectName
      : "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.appendChild(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle);
  for (let t of taskList) {
    t.taskEl.style.animation = "fade-in 1.4s";
  }
}

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.inboxBtn.addEventListener("click", function () {
  rerenderUl("inbox");
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.highPriorityFilterBtn.addEventListener("click", function () {
  rerenderUl("high priority");
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.dailyFilterBtn.addEventListener("click", function () {
  rerenderUl("today");
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.weeklyFilterBtn.addEventListener("click", function () {
  rerenderUl("week");
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsV0FBVyxVQUFVLFdBQVcsYUFBYSxRQUFRLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLGFBQWEsYUFBYSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxRQUFRLGFBQWEsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFX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QUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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bi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5jc3M/ODMzMSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJlZExpc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGdyb3cge1xcbiAgMCUge1xcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbWF4LWhlaWdodDogNnJlbTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1kb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZG93bi1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcmVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1yaWdodC1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNyZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tbGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tbGVmdC1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiO1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDI0OCwgNTQsIDAsIDAuMjY3KSwgcmdiYSgyNDksIDIxMywgMzUsIDAuNTE0KSkgIWltcG9ydGFudDtcXG59XFxuXFxub3B0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2I5OTNkNiwgIzhjYTZkYik7XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZmZmY4ZSwgI2ZmZmZmZjUyIDMwJSwgI2ZmZmZmZmE4IDMwJSwgI2ZmZmZmZjNiIDMyJSwgI2ZmZmZmZjNiIDMyJSwgI2ZmZmZmZjBhIDkwJSwgI2ZmZmZmZmE4IDkwJSwgI2ZmZmZmZjA5IDkyJSwgI2ZmZmZmZjAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMjA7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcblxcbi5tb2JpbGUtYmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmZmZmOGUsICNmZmZmZmY1MiAzMCUsICNmZmZmZmZhOCAzMCUsICNmZmZmZmYzYiAzMiUsICNmZmZmZmYzYiAzMiUsICNmZmZmZmYwYSA5MCUsICNmZmZmZmZhOCA5MCUsICNmZmZmZmYwOSA5MiUsICNmZmZmZmYwMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICB3aWR0aDogNXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbn1cXG5cXG5uYXYgaW1nIHtcXG4gIG1pbi13aWR0aDogNnJlbTtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5tb2JpbGUtbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IGNsYW1wKDhyZW0sIDgwJSwgMjVyZW0pO1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIHRyYW5zaXRpb246IGhlaWdodDtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuXFxuLmZpbHRlcnMtY29udGFpbmVyLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxuICBhbmltYXRpb246IGdyb3cgMC4zcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogOTAlO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIgYnV0dG9uLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3Nyk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lciAuYWRkLXByb2plY3RfYnRuLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIC5hZGQtcHJvamVjdF9idG4ge1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5hZGQtcHJvamVjdF9fZm9ybSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLmFkZC1wcm9qZWN0X19mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSBidXR0b24ge1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTByZW07XFxufVxcblxcbi5wYWdlLXRpdGxlX19jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG4ucGFnZS10aXRsZV9fY29udGFpbmVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBQYWNpZmljbztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnBhZ2UtdGl0bGVfX2NvbnRhaW5lciAuZGVsZXRlLXByb2plY3RfX2J0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAxZDVkO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC02cmVtO1xcbiAgdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5hZGQtdGFza19fYnRuIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi5hZGQtdGFza19fZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1MDtcXG4gIHRvcDogMzB2aDtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbi1kb3duIDAuOHM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgcm93LWdhcDogMC44cmVtO1xcbiAgY29sdW1uLWdhcDogMC41cmVtO1xcbiAgd2lkdGg6IGNsYW1wKDEwcmVtLCA5MCUsIDUwcmVtKTtcXG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjYpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbm1haW4gZm9ybSBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG5tYWluIGZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCxcXG5tYWluIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuaW5wdXQ6aG92ZXIsXFxuaW5wdXQ6YWN0aXZlLFxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpob3ZlcixcXG5zZWxlY3Q6YWN0aXZlLFxcbnNlbGVjdDpmb2N1cyxcXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmFjdGl2ZSxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjAxZDVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYWdlLXRpdGxlX19jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjNjc0M2JiICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHVsIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDJyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAycmVtO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gYXV0bztcXG4gIHdpZHRoOiBjbGFtcCgxMHJlbSwgOTAlLCA1MHJlbSk7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZWxldGUtdGFza19fYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxLjJyZW07XFxuICB0b3A6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbiAgd2lkdGg6IDEuMnJlbTtcXG4gIGhlaWdodDogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5saSBoMixcXG5saSBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubW9iaWxlLW1lbnUge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMS40cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgfVxcbiAgLm1vYmlsZS1tZW51IGRpdiB7XFxuICAgIHdpZHRoOiAwLjdyZW07XFxuICAgIGhlaWdodDogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NzQpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQ5KSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxuICB9XFxuXFxuICAubmF2LWJ1dHRvbnMge1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4tbGVmdCAwLjhzO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiBjbGFtcCgxMHJlbSwgNTB2dywgNDByZW0pO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gIH1cXG5cXG4gIC5uYXYtYnV0dG9ucyA+IGRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgfVxcblxcbiAgLndyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtY29udGFpbmVyIGJ1dHRvbixcXG4ucHJvamVjdHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjOWQ1Y2M0O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5hZGQtcHJvamVjdF9fY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWNvbnRhaW5lcixcXG4uYWRkLXByb2plY3RfX2NvbnRhaW5lciB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEwMywgNjcsIDE4NywgMC42MDMpO1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBbURBO0VBQ0U7SUFDRSxlQUFBO0VDbERGO0VEb0RBO0lBQ0UsZ0JBQUE7RUNsREY7QUFDRjtBRHFEQTtFQUNFO0lB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QUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQy9CRjtFRGlDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZ0dBL2NVO0lBZ2RWLGtCQUFBO0lBQ0Esb0JBQUE7RUMvQko7O0VEbUNBO0lBQ0UsNEJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsNENBNWRjO0VDNGJoQjs7RURtQ0E7SUFDRSxpQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxnQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxnQkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0JBQUE7RUNoQ0Y7O0VEbUNBO0lBQ0UsNkJBQUE7SUFDQSxzQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxVQUFBO0VDaENGOztFRG1DQTs7SUFFRSxjQXJmVTtJQXNmVixpQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxlQUFBO0VDaENGOztFRG1DQTs7SUFFRSwrQ0ExZmM7RUMwZGhCO0FBQ0Y7O0FBRUEsbUNBQW1DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZHJvcFwiKTtcbmNvbnN0IG1vYmlsZUJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtYmFja2Ryb3BcIik7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OQVZcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcblxuY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIik7XG5jb25zdCBtb2JpbGVNZW51RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudSBkaXZcIik7XG5jb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYnV0dG9uc1wiKTtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RfYnRuXCIpO1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuLy8gLS1GSUxURVJTXG5cbmNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFwiKTtcbmNvbnN0IGZpbHRlcnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcnNcIik7XG5jb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBmaWx0ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJzLWNvbnRhaW5lclwiKTtcbmNvbnN0IGRhaWx5RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseS1maWx0ZXJcIik7XG5jb25zdCB3ZWVrbHlGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZWtseS1maWx0ZXJcIik7XG5jb25zdCBoaWdoUHJpb3JpdHlGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhwLWZpbHRlclwiKTtcblxuLy8gLS0tUFJPSkVDVCBGT1JNIENPTlRFTlRcbmNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0X19jb250YWluZXJcIik7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdF9fZm9ybVwiKTtcbmNvbnN0IHByb2plY3RGb3JtSW5wdXQgPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBwcm9qZWN0Rm9ybUNhbmNlbEJ0biA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT0nYnV0dG9uJ11cIik7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1BSU5cblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tfX2J0blwiKTtcbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1jb250YWluZXJcIik7XG5cbi8vIC0tLVBBR0UgVElUTEUgKyBDQU5DRUwgUFJPSkVDVFxuXG5jb25zdCBwYWdlVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtdGl0bGVfX2NvbnRhaW5lclwiKTtcbmNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbnBhZ2VUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuXG4vLyAtLS1UQVNLIEZPUk0gQ09OVEVOVFxuXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tfX2Zvcm1cIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWR1ZS1kYXRlXCIpO1xuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1wcmlvcml0eVwiKTtcbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmVsb25nLXByb2plY3RcIik7XG5jb25zdCB0YXNrRm9ybUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLmFkZC10YXNrX19mb3JtIGJ1dHRvblt0eXBlPSdidXR0b24nXVwiXG4pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MT0dJQ1xuXG5wcmlvcml0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAocHJpb3JpdHlJbnB1dC52YWx1ZSA9PT0gXCJoaWdoXCIpIHtcbiAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICB9IGVsc2Uge1xuICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2gtcHJpb3JpdHlcIik7XG4gIH1cbn0pO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG59KTtcblxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xufSk7XG5cbmZpbHRlcnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xufSk7XG5cbnByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbn0pO1xuXG5mb3IgKGxldCBmaWx0ZXIgb2YgWy4uLmZpbHRlcnNDb250YWluZXIuY2hpbGRyZW5dKSB7XG4gIGZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB9KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1PQklMRVxuXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgbmF2QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIG1vYmlsZUJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICBsZXQgbW9iaWxlID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDYwMCA/IHRydWUgOiBmYWxzZTtcblxuICBpZiAobW9iaWxlKSB7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgbW9iaWxlQmFja2Ryb3Auc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLW91dCAwLjhzXCI7XG4gICAgbmF2QnV0dG9ucy5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tbGVmdC1yZXZlcnNlIDAuOHNcIjtcbiAgICBtb2JpbGVNZW51LnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbiAxLjZzXCI7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5hdkJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZShcImZsZXhcIik7XG4gICAgICBtb2JpbGVCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICBtb2JpbGVCYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgbmF2QnV0dG9ucy5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIH0sIDgwMCk7XG4gIH1cbn1cblxubW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1lbnUpO1xubW9iaWxlTWVudURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1lbnUpO1xuXG5leHBvcnQge1xuICBiYWNrZHJvcCxcbiAgbW9iaWxlQmFja2Ryb3AsXG4gIG5hdkJ1dHRvbnMsXG4gIGNsb3NlTWVudSxcbiAgbmF2LFxuICBhZGRQcm9qZWN0QnRuLFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgaW5ib3hCdG4sXG4gIGZpbHRlcnNDb250YWluZXIsXG4gIGRhaWx5RmlsdGVyQnRuLFxuICB3ZWVrbHlGaWx0ZXJCdG4sXG4gIGhpZ2hQcmlvcml0eUZpbHRlckJ0bixcbiAgYWRkUHJvamVjdENvbnRhaW5lcixcbiAgcHJvamVjdEZvcm0sXG4gIHByb2plY3RGb3JtSW5wdXQsXG4gIHByb2plY3RGb3JtQ2FuY2VsQnRuLFxuICBwYWdlVGl0bGVDb250YWluZXIsXG4gIHBhZ2VUaXRsZSxcbiAgbWFpbixcbiAgYWRkVGFza0J0bixcbiAgdWwsXG4gIGxpc3RDb250YWluZXIsXG4gIHRhc2tGb3JtLFxuICBkZXNjcmlwdGlvbklucHV0LFxuICBkdWVEYXRlSW5wdXQsXG4gIHByaW9yaXR5SW5wdXQsXG4gIHByb2plY3RJbnB1dCxcbiAgdGFza0Zvcm1DYW5jZWxCdG4sXG59O1xuIiwiZnVuY3Rpb24gY3JlYXRlRmlsdGVyZWRMaXN0KGZpbHRlclR5cGUsIG9yaWdpbkxpc3QsIHByb2plY3ROYW1lID0gXCJcIikge1xuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKS5zcGxpdChcIiBcIikuc2xpY2UoMCwgNCkuam9pbihcIiBcIik7XG4gIGxldCBmaWx0ZXJlZEFycmF5O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmJveFxuXG4gIGlmIChmaWx0ZXJUeXBlID09PSBcImluYm94XCIpIHtcbiAgICBmaWx0ZXJlZEFycmF5ID0gb3JpZ2luTGlzdDtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSFAgZmlsdGVyXG4gIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJoaWdoIHByaW9yaXR5XCIpIHtcbiAgICBmaWx0ZXJlZEFycmF5ID0gb3JpZ2luTGlzdC5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay50YXNrT2JqLnByaW9yaXR5ID09PSBcImhpZ2hcIlxuICAgICk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhaWx5IGZpbHRlclxuICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwidG9kYXlcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay50YXNrT2JqLmR1ZURhdGUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLnNsaWNlKDAsIDQpXG4gICAgICAgIC5qb2luKFwiIFwiKTtcbiAgICAgIHJldHVybiB0YXNrRGF0ZSA9PT0gY3VycmVudERhdGU7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHdlZWtseSBmaWx0ZXJcbiAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcIndlZWtcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgY29uc3Qgd2VlayA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcblxuICAgICAgbGV0IHRhc2tEYXRlQXJyID0gbmV3IERhdGUodGFzay50YXNrT2JqLmR1ZURhdGUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLnNsaWNlKDAsIDQpO1xuICAgICAgbGV0IHRhc2tNb250aCA9IHRhc2tEYXRlQXJyWzFdO1xuICAgICAgbGV0IHRhc2tEYXkgPSB0YXNrRGF0ZUFyclsyXTtcbiAgICAgIGxldCB0YXNrWWVhciA9IHRhc2tEYXRlQXJyWzNdO1xuICAgICAgbGV0IGN1cnJlbnREYXkgPSBOdW1iZXIoY3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzJdKTtcbiAgICAgIGxldCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMV07XG4gICAgICBsZXQgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbM107XG4gICAgICBsZXQgd2Vla0luZGV4ID0gd2Vlay5pbmRleE9mKGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVswXSk7XG5cbiAgICAgIGNvbnN0IG1vbnRocyA9IHtcbiAgICAgICAgYWxsOiBbXG4gICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICBcIkZlYlwiLFxuICAgICAgICAgIFwiTWFyXCIsXG4gICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgIFwiSnVuXCIsXG4gICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICBcIkF1Z1wiLFxuICAgICAgICAgIFwiU2VwXCIsXG4gICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICBcIk5vdlwiLFxuICAgICAgICAgIFwiRGVjXCIsXG4gICAgICAgIF0sXG4gICAgICAgIDMxOiBbXCJKYW5cIiwgXCJNYXJcIiwgXCJNYXlcIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJPY3RcIiwgXCJEZWNcIl0sXG4gICAgICAgIDMwOiBbXCJBcHJcIiwgXCJKdW5cIiwgXCJTZXBcIiwgXCJOb3ZcIl0sXG4gICAgICAgIDI5OiBOdW1iZXIoY3VycmVudFllYXIpICUgNCA9PT0gMCA/IFtcIkZlYlwiXSA6IFtdLFxuICAgICAgICAyODogTnVtYmVyKGN1cnJlbnRZZWFyKSAlIDQgPT09IDAgPyBbXSA6IFtcIkZlYlwiXSxcbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGkgPSB3ZWVrSW5kZXg7IGkgPD0gd2Vla0luZGV4ICsgNjsgaSsrKSB7XG4gICAgICAgIGxldCB0aGlzV2Vla0RheSA9IGN1cnJlbnREYXkgKyAoNiAtIGkpO1xuICAgICAgICBsZXQgdGhpc1dlZWtNb250aCA9IGN1cnJlbnRNb250aDtcbiAgICAgICAgbGV0IHRoaXNXZWVrWWVhciA9IGN1cnJlbnRZZWFyO1xuXG4gICAgICAgIC8vIC0tLUdFVCBUTyBORVhUIE1PTlRIL1lFQVJcblxuICAgICAgICBmdW5jdGlvbiBzZXROZXh0TW9udGhZZWFyKCkge1xuICAgICAgICAgIGlmICh0aGlzV2Vla01vbnRoID09PSBcIkRlY1wiKSB7XG4gICAgICAgICAgICB0aGlzV2Vla01vbnRoID0gXCJKYW5cIjtcbiAgICAgICAgICAgIHRoaXNXZWVrWWVhciA9IChOdW1iZXIodGhpc1dlZWtZZWFyKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNXZWVrTW9udGggPSBtb250aHMuYWxsW21vbnRocy5hbGwuaW5kZXhPZih0aGlzV2Vla01vbnRoKSArIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFByZXZpb3VzTW9udGhZZWFyKCkge1xuICAgICAgICAgIGlmICh0aGlzV2Vla01vbnRoID09PSBcIkphblwiKSB7XG4gICAgICAgICAgICB0aGlzV2Vla01vbnRoID0gXCJEZWNcIjtcbiAgICAgICAgICAgIHRoaXNXZWVrWWVhciA9IChOdW1iZXIodGhpc1dlZWtZZWFyKSAtIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNXZWVrTW9udGggPSBtb250aHMuYWxsW21vbnRocy5hbGwuaW5kZXhPZih0aGlzV2Vla01vbnRoKSAtIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb250aHNbMzFdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpICYmIHRoaXNXZWVrRGF5ID4gMzEpIHtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5IC0gMzE7XG4gICAgICAgICAgc2V0TmV4dE1vbnRoWWVhcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1szMF0uaW5jbHVkZXModGhpc1dlZWtNb250aCkgJiYgdGhpc1dlZWtEYXkgPiAzMCkge1xuICAgICAgICAgIHNldE5leHRNb250aFllYXIoKTtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5IC0gMzA7XG4gICAgICAgIH0gZWxzZSBpZiAobW9udGhzWzI5XS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSAmJiB0aGlzV2Vla0RheSA+IDI5KSB7XG4gICAgICAgICAgdGhpc1dlZWtEYXkgPSB0aGlzV2Vla0RheSAtIDI5O1xuICAgICAgICAgIHNldE5leHRNb250aFllYXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMjhdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpICYmIHRoaXNXZWVrRGF5ID4gMjgpIHtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5IC0gMjg7XG4gICAgICAgICAgc2V0TmV4dE1vbnRoWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tR0VUIFRPIFBSRVZJT1VTIE1PTlRIL1lFQVJcbiAgICAgICAgZWxzZSBpZiAodGhpc1dlZWtEYXkgPCAxKSB7XG4gICAgICAgICAgc2V0UHJldmlvdXNNb250aFllYXIoKTtcblxuICAgICAgICAgIGlmIChtb250aHNbMzFdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpKSB7XG4gICAgICAgICAgICB0aGlzV2Vla0RheSA9IDMxICsgdGhpc1dlZWtEYXk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMzBdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpKSB7XG4gICAgICAgICAgICB0aGlzV2Vla0RheSA9IDMwICsgdGhpc1dlZWtEYXk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMjldLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpKSB7XG4gICAgICAgICAgICB0aGlzV2Vla0RheSA9IDI5ICsgdGhpc1dlZWtEYXk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMjhdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpKSB7XG4gICAgICAgICAgICB0aGlzV2Vla0RheSA9IDI4ICsgdGhpc1dlZWtEYXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tTk9STUFMIEJFSEFWSU9SXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgYCR7TnVtYmVyKHRhc2tEYXkpfSAke3Rhc2tNb250aH0gJHt0YXNrWWVhcn1gID09PVxuICAgICAgICAgIGAke3RoaXNXZWVrRGF5fSAke3RoaXNXZWVrTW9udGh9ICR7dGhpc1dlZWtZZWFyfWBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmlsdGVyIGJ5IHByb2plY3RcbiAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcInByb2plY3RcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiBwcm9qZWN0TmFtZSA9PT0gdGFzay50YXNrT2JqLnByb2plY3RcbiAgICApO1xuICB9XG5cbiAgZmlsdGVyZWRBcnJheS5tYXAoKHRhc2spID0+IHtcbiAgICBmaWx0ZXJlZExpc3QuYXBwZW5kQ2hpbGQodGFzay50YXNrRWwpO1xuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRMaXN0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVGaWx0ZXJlZExpc3QgfTtcbiIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID1cbiAgICAgIGR1ZURhdGUgPT09IFwiXCJcbiAgICAgICAgPyBcIlwiXG4gICAgICAgIDogbmV3IERhdGUoZHVlRGF0ZSkudG9TdHJpbmcoKS5zcGxpdChcIiBcIikuc2xpY2UoMSwgNCkuam9pbihcIiBcIik7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgY29uc3QgdGFza09iaiA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cbiAgbGV0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLnByb2plY3QgPT09IFwiXCIgPyBcIlwiIDogdGFza09iai5wcm9qZWN0O1xuICB0YXNrVGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrLXRpdGxlXCI7XG5cbiAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrT2JqLmRlc2NyaXB0aW9uO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG5cbiAgbGV0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodGFza09iai5kdWVEYXRlKTtcbiAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLmR1ZURhdGUgPT09IFwiXCIgPyBcIlwiIDpgJHtkYXRlLmdldERhdGUoKSA+PSAxMCA/IGRhdGUuZ2V0RGF0ZSgpOiBgMCR7ZGF0ZS5nZXREYXRlKCl9YH0tJHtkYXRlLmdldE1vbnRoKCkgKyAxID49IDEwID8gZGF0ZS5nZXRNb250aCgpICsgMTogYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YH0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbiAgdGFza0R1ZURhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWRhdGVcIjtcblxuICBpZiAodGFza09iai5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gIH0gXG5cbiAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVUYXNrQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlLXRhc2tfX2J0blwiO1xuXG4gIGlmICh0YXNrVGl0bGUudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgfWVsc2Uge1xuICAgIHRhc2tEdWVEYXRlLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEgLyAzXCJcbiAgfVxuXG4gIGlmICh0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gIH1cblxuICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuXG4gIHJldHVybiB7IHRhc2tFbCwgdGFza09iaiB9O1xufVxuXG5leHBvcnQgeyBUYXNrLCBjcmVhdGVUYXNrIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBvcHRpb25QYXJlbnQsIGJ0blBhcmVudCkge1xuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWU7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICBvcHRpb25QYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIGJ0blBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGxldCBuYW1lID0gcHJvamVjdE5hbWU7XG5cbiAgcmV0dXJuIHsgb3B0aW9uLCBidXR0b24sIG5hbWUgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSwgb3JpZ2luYWxBcnJheSwgc2VsZWN0LCBwcm9qQ29udGFpbmVyKSB7XG4gIGZvciAobGV0IHRhc2sgb2Ygb3JpZ2luYWxBcnJheSkge1xuICAgIGlmICh0YXNrLnRhc2tPYmoucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIG9yaWdpbmFsQXJyYXkuc3BsaWNlKG9yaWdpbmFsQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG9wdGlvbnMgPSBbLi4uc2VsZWN0LmNoaWxkcmVuXTtcbiAgbGV0IGluZGV4ID0gb3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uLnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZSk7XG5cbiAgc2VsZWN0LnJlbW92ZUNoaWxkKHNlbGVjdC5jaGlsZHJlbltpbmRleF0pO1xuXG4gIGxldCBwcm9qZWN0cyA9IFsuLi5wcm9qQ29udGFpbmVyLmNoaWxkcmVuXTtcbiAgbGV0IGluZGV4MiA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWVcbiAgKTtcbiAgcHJvakNvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qQ29udGFpbmVyLmNoaWxkcmVuW2luZGV4Ml0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH07XG4iLCJmdW5jdGlvbiBhZGRUYXNrKGNvbnRhaW5lciwgdGFzaywgc3RvcmFnZUFycmF5KSB7XG4gIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwidWxcIikuYXBwZW5kQ2hpbGQodGFzay50YXNrRWwpO1xuICBzdG9yYWdlQXJyYXkucHVzaCh0YXNrKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhjb250YWluZXIsIHRhc2ssIHN0b3JhZ2VBcnJheSkge1xuICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcInVsXCIpLnJlbW92ZUNoaWxkKHRhc2sudGFza0VsKTtcbiAgc3RvcmFnZUFycmF5LnNwbGljZShzdG9yYWdlQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2ssIHJlbW92ZVRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlL21haW4uY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY29tcG9uZW50cy9uZXdUYXNrXCI7XG5pbXBvcnQgeyBhZGRUYXNrLCByZW1vdmVUYXNrIH0gZnJvbSBcIi4vY29tcG9uZW50cy90YXNrc1wiO1xuaW1wb3J0IHsgY3JlYXRlRmlsdGVyZWRMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWx0ZXJlZExpc3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0XCI7XG5pbXBvcnQge1xuICBiYWNrZHJvcCxcbiAgbW9iaWxlQmFja2Ryb3AsXG4gIGNsb3NlTWVudSxcbiAgYWRkUHJvamVjdEJ0bixcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIGluYm94QnRuLFxuICBkYWlseUZpbHRlckJ0bixcbiAgd2Vla2x5RmlsdGVyQnRuLFxuICBoaWdoUHJpb3JpdHlGaWx0ZXJCdG4sXG4gIGFkZFByb2plY3RDb250YWluZXIsXG4gIHByb2plY3RGb3JtLFxuICBwcm9qZWN0Rm9ybUlucHV0LFxuICBwcm9qZWN0Rm9ybUNhbmNlbEJ0bixcbiAgcGFnZVRpdGxlQ29udGFpbmVyLFxuICBwYWdlVGl0bGUsXG4gIGxpc3RDb250YWluZXIsXG4gIHRhc2tGb3JtLFxuICBkZXNjcmlwdGlvbklucHV0LFxuICBkdWVEYXRlSW5wdXQsXG4gIHByaW9yaXR5SW5wdXQsXG4gIHByb2plY3RJbnB1dCxcbiAgdGFza0Zvcm1DYW5jZWxCdG4sXG59IGZyb20gXCIuL2NvbXBvbmVudHMvRE9NXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVGFza3MgaGFuZGxpbmdcblxuY29uc3Qgb2xkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza09iamVjdHNcIikpO1xuXG5jb25zdCB0YXNrTGlzdCA9IFtdO1xuXG5pZiAob2xkVGFza3MgIT09IG51bGwpIHtcbiAgZm9yIChsZXQgb2JqIG9mIG9sZFRhc2tzKSB7XG4gICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKFxuICAgICAgb2JqLmRlc2NyaXB0aW9uLFxuICAgICAgb2JqLmR1ZURhdGUsXG4gICAgICBvYmoucHJpb3JpdHksXG4gICAgICBvYmoucHJvamVjdFxuICAgICk7XG4gICAgYWRkVGFzayhsaXN0Q29udGFpbmVyLCB0YXNrLCB0YXNrTGlzdCk7XG5cbiAgICBsZXQgZGVsZXRlVGFza0J0biA9IFsuLi50YXNrLnRhc2tFbC5jaGlsZHJlbl0uZmlsdGVyKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NOYW1lID09PSBcImRlbGV0ZS10YXNrX19idG5cIlxuICAgIClbMF07XG4gIFxuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhc2sudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbi1yaWdodC1yZXZlcnNlIDAuOHNcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgICByZW1vdmVUYXNrKGxpc3RDb250YWluZXIsIHRhc2ssIHRhc2tMaXN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrT2JqZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdC5tYXAodGFzayA9PiB0YXNrLnRhc2tPYmopKSk7XG4gICAgICB9LCA4MDApO1xuICAgIH0pO1xuICB9XG59XG5cbmRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWUudHJpbSgpO1xufSlcblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgdGFza0Zvcm0uc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluLWRvd24tcmV2ZXJzZSAwLjhzXCI7XG4gIGJhY2tkcm9wLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1vdXQgMC44c1wiO1xuICByZXJlbmRlclVsKFwiaW5ib3hcIik7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFza0Zvcm0uc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICBiYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBcIm5vcm1hbFwiO1xuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB9LCA4MDApO1xufVxuXG5iYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5cbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKFxuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgcHJvamVjdElucHV0LnZhbHVlXG4gICk7XG5cbiAgY2xvc2VUYXNrRm9ybSgpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhc2sudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbi1yaWdodCAxc1wiO1xuICAgIGFkZFRhc2sobGlzdENvbnRhaW5lciwgdGFzaywgdGFza0xpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza09iamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QubWFwKHRhc2sgPT4gdGFzay50YXNrT2JqKSkpO1xuICB9LCA0MDApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhc2sudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gIH0sIDE0MDApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRGVsZXRlIHRhc2sgZnVuY3Rpb25hbGl0eVxuXG4gIGxldCBkZWxldGVUYXNrQnRuID0gWy4uLnRhc2sudGFza0VsLmNoaWxkcmVuXS5maWx0ZXIoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NOYW1lID09PSBcImRlbGV0ZS10YXNrX19idG5cIlxuICApWzBdO1xuXG4gIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tcmlnaHQtcmV2ZXJzZSAwLjhzXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgcmVtb3ZlVGFzayhsaXN0Q29udGFpbmVyLCB0YXNrLCB0YXNrTGlzdCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tPYmplY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0Lm1hcCh0YXNrID0+IHRhc2sudGFza09iaikpKTtcbiAgICB9LCA4MDApO1xuICB9KTtcbn0pO1xuXG50YXNrRm9ybUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUHJvamVjdHMgaGFuZGxpbmdcblxuLy8gLS0tQUREIFBST0pFQ1RcblxuZnVuY3Rpb24gY2xvc2VBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgcHJvamVjdEZvcm1JbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbn0pO1xuXG5wcm9qZWN0Rm9ybUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VBZGRQcm9qZWN0Rm9ybSk7XG5cbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKHByb2plY3RGb3JtSW5wdXQudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgbGV0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFxuICAgICAgcHJvamVjdEZvcm1JbnB1dC52YWx1ZS50cmltKCksXG4gICAgICBwcm9qZWN0SW5wdXQsXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lclxuICAgICk7XG4gICAgcHJvamVjdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlcmVuZGVyVWwoXCJwcm9qZWN0XCIsIHByb2plY3QubmFtZSk7XG5cbiAgICAgIC8vIC0tLVJFTU9WRSBQUk9KRUNUXG5cbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcblxuICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS1wcm9qZWN0X19idG5cIjtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdC5uYW1lLCB0YXNrTGlzdCwgcHJvamVjdElucHV0LCBwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICAgIHJlcmVuZGVyVWwoXCJpbmJveFwiKTtcbiAgICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLnJlbW92ZShkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgICBjbG9zZU1lbnUoKTtcbiAgICB9KTtcbiAgfVxuICBjbG9zZUFkZFByb2plY3RGb3JtKCk7XG59KTtcblxuLy8gLS0tTU9CSUxFIENMT1NFIEFERCBQUk9KRUNUIEZPUk1cblxubW9iaWxlQmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY2xvc2VBZGRQcm9qZWN0Rm9ybSgpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZpbHRlciBoYW5kbGluZ1xuXG5mdW5jdGlvbiByZXJlbmRlclVsKGZpbHRlclR5cGUsIHByb2plY3ROYW1lID0gXCJcIikge1xuICBsZXQgbmV3VWxMaXN0ID0gY3JlYXRlRmlsdGVyZWRMaXN0KGZpbHRlclR5cGUsIHRhc2tMaXN0LCBwcm9qZWN0TmFtZSk7XG4gIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdVbExpc3QpO1xuICBwYWdlVGl0bGVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID1cbiAgICBmaWx0ZXJUeXBlID09PSBcImluYm94XCJcbiAgICAgID8gXCJJbmJveFwiXG4gICAgICA6IGZpbHRlclR5cGUgPT09IFwiaGlnaCBwcmlvcml0eVwiXG4gICAgICA/IFwiSGlnaCBwcmlvcml0eVwiXG4gICAgICA6IGZpbHRlclR5cGUgPT09IFwidG9kYXlcIlxuICAgICAgPyBcIlRvZGF5XCJcbiAgICAgIDogZmlsdGVyVHlwZSA9PT0gXCJ3ZWVrXCJcbiAgICAgID8gXCJUaGlzIHdlZWtcIlxuICAgICAgOiBmaWx0ZXJUeXBlID09PSBcInByb2plY3RcIlxuICAgICAgPyBwcm9qZWN0TmFtZVxuICAgICAgOiBcIlwiO1xuICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgZm9yIChsZXQgdCBvZiB0YXNrTGlzdCkge1xuICAgIHQudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbiAxLjRzXCI7XG4gIH1cbn1cblxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuXG5oaWdoUHJpb3JpdHlGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcImhpZ2ggcHJpb3JpdHlcIik7XG4gIGNsb3NlTWVudSgpO1xufSk7XG5cbmRhaWx5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJ0b2RheVwiKTtcbiAgY2xvc2VNZW51KCk7XG59KTtcblxud2Vla2x5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJ3ZWVrXCIpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9