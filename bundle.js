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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes grow {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 100vh;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes fade-out {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes fade-in-down {\n  0% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n}\n@keyframes fade-in-down-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n}\n@keyframes fade-in-right {\n  0% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n}\n@keyframes fade-in-right-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n}\n@keyframes fade-in-left {\n  0% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n}\n@keyframes fade-in-left-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n}\n* {\n  box-sizing: border-box;\n  font-family: \"Rubik\";\n  color: #6743bb;\n}\n\n.inactive {\n  display: none !important;\n}\n\n.flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.high-priority {\n  background-color: rgba(255, 255, 255, 0.603) !important;\n  background-image: linear-gradient(-45deg, rgba(248, 54, 0, 0.267), rgba(249, 213, 35, 0.514)) !important;\n}\n\noption {\n  cursor: pointer;\n}\n\nbody {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  overflow-x: hidden;\n  background-image: linear-gradient(45deg, #b993d6, #8ca6db);\n}\n\n.backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n  animation: fade-in 1s;\n}\n\n.mobile-backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  animation: fade-in 1s;\n}\n\nbutton {\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  border-radius: 14px;\n  width: 5rem;\n  padding: 0.3rem;\n  font-size: 0.8rem;\n}\n\ninput,\nselect,\noption {\n  background-color: rgba(255, 255, 255, 0.603);\n}\n\nnav {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 1rem 0 1rem;\n  height: 8rem;\n}\n\nnav img {\n  min-width: 6rem;\n  width: 6rem;\n  margin-left: 1rem;\n}\n\n.mobile-menu {\n  display: none;\n}\n\n.nav-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  width: clamp(8rem, 80%, 25rem);\n  margin-top: 0.6rem;\n}\n\n.wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 14px;\n  transition: height;\n  width: 8rem;\n}\n\n.wrapper button {\n  background: transparent;\n  width: 8rem;\n}\n\n.filters-container,\n.add-project__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.603);\n  animation: grow 1.5s;\n  overflow: hidden;\n  width: 90%;\n}\n.filters-container button,\n.add-project__container button {\n  color: rgba(255, 255, 255, 0.877);\n}\n.filters-container .add-project_btn,\n.add-project__container .add-project_btn {\n  color: #6743bb;\n}\n\n.add-project__form {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.add-project__form input {\n  width: 90%;\n  margin: auto;\n}\n.add-project__form button {\n  color: #6743bb;\n}\n.add-project__form .buttons-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0.5rem 0;\n  width: 100%;\n}\n.add-project__form .buttons-container button {\n  width: 3rem;\n  padding: 0;\n  font-weight: normal;\n}\n\nmain {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: calc(100vh - 18rem);\n  margin-top: 10rem;\n}\n\n.page-title__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.603);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.3rem;\n  animation: fade-in 1s;\n}\n.page-title__container h2 {\n  font-family: Pacifico;\n  color: rgba(255, 255, 255, 0.877);\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: normal;\n}\n.page-title__container .delete-project__btn {\n  background-color: #f01d5d;\n  color: rgba(255, 255, 255, 0.877);\n  position: absolute;\n  right: -6rem;\n  top: 1rem;\n  width: 4rem;\n}\n\n.add-task__btn {\n  animation: fade-in 1s;\n  width: 5rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 0.5rem 0;\n}\n\n.add-task__form {\n  position: absolute;\n  z-index: 50;\n  top: 30vh;\n  animation: fade-in-down 0.8s;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  row-gap: 0.8rem;\n  column-gap: 0.5rem;\n  width: clamp(10rem, 90%, 50rem);\n  box-shadow: -2px 2px rgba(255, 255, 255, 0.466);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 1rem;\n  border-radius: 15px;\n}\n\nmain form div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-column: 1/3;\n}\n\nmain form button {\n  background-color: transparent;\n  width: 5rem;\n  margin-top: 1rem;\n}\n\ninput,\nmain select {\n  height: 1.2rem;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n}\n\nlabel {\n  text-align: center;\n  font-size: 0.9rem;\n}\n\ninput:hover,\ninput:active,\ninput:focus,\nselect:hover,\nselect:active,\nselect:focus,\nbutton:hover,\nbutton:active,\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover {\n  color: #f01d5d !important;\n}\n\n.page-title__container button:hover {\n  color: #6743bb !important;\n}\n\n.list-container {\n  width: 100%;\n  height: 100%;\n}\n\n.list-container ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style-type: none;\n  margin-block-start: 2rem;\n  margin-block-end: 2rem;\n  padding-inline-start: 0;\n  width: 100%;\n  height: 100%;\n}\n\nli {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto auto;\n  width: clamp(10rem, 90%, 50rem);\n  margin: 0;\n  margin-bottom: 2rem;\n  padding: 0.5rem 1rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 20px;\n}\n\n.task-title {\n  margin-right: 0.4rem;\n  font-size: 1.3rem;\n}\n\n.task-date {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\n\n.delete-task__btn {\n  position: absolute;\n  right: 1.2rem;\n  top: center;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.603);\n  width: 1.2rem;\n  height: 1.2rem;\n  background-image: none;\n  background-color: transparent;\n}\n\nli h2,\nli p {\n  margin: 0 1rem 0 0;\n}\n\n.task-description {\n  width: clamp(4rem, 75%, 45rem);\n  overflow: auto;\n  overflow-wrap: break-word;\n}\n\n@media (max-width: 600px) {\n  .backdrop {\n    height: 120vh;\n  }\n\n  .mobile-menu {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    margin-top: 1.4rem;\n    cursor: pointer;\n    height: 1.4rem;\n  }\n  .mobile-menu div {\n    width: 0.7rem;\n    height: 0.7rem;\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.774), rgba(255, 255, 255, 0.349));\n    border-radius: 50%;\n    margin-right: 0.3rem;\n  }\n\n  .nav-buttons {\n    animation: fade-in-left 0.8s;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    position: absolute;\n    z-index: 30;\n    top: 0;\n    right: 0;\n    width: clamp(10rem, 50vw, 40rem);\n    height: 100vh;\n    margin: 0;\n    background-color: rgba(255, 255, 255, 0.753);\n  }\n\n  .nav-buttons button {\n    font-size: 1.2rem;\n  }\n\n  .nav-buttons > button {\n    margin-top: 5rem;\n  }\n\n  .nav-buttons > div {\n    margin-top: 3rem;\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .nav-buttons button {\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .wrapper {\n    width: 80%;\n  }\n\n  .filters-container button,\n.projects-container button {\n    color: #9d5cc4;\n    font-size: 1.1rem;\n  }\n\n  .add-project__container button {\n    font-size: 1rem;\n  }\n\n  .filters-container,\n.add-project__container {\n    border-top: 1px solid rgba(103, 67, 187, 0.603);\n  }\n}\n\n/*# sourceMappingURL=main.css.map */\n", "",{"version":3,"sources":["webpack://./src/style/main.scss","webpack://./src/style/main.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
  addTaskBtn.classList.add("inactive");
  pageTitleContainer.classList.add("inactive");
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

  if (taskTitle.textContent !== "" || taskDueDate.textContent !== "") {
    taskDescription.style.gridRow = "2 / 3";
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

const oldProjectsList = JSON.parse(localStorage.getItem("projectsList"));

const projectsList = [];

if (oldProjectsList !== null) {
  for (let projectName of oldProjectsList) {
    let project = (0,_components_project__WEBPACK_IMPORTED_MODULE_4__.createProject)(
      projectName,
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput,
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectsContainer
    );

    projectsList.push(projectName);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));


    project.button.addEventListener("click", function () {
      rerenderUl("project", projectName);

      // ---REMOVE PROJECT

      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.innerHTML = "";
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.appendChild(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle);
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = projectName;
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.addProjectContainer.classList.add("inactive");

      let deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "delete-project__btn";
      deleteProjectBtn.textContent = "Delete";

      deleteProjectBtn.addEventListener("click", function () {
        (0,_components_project__WEBPACK_IMPORTED_MODULE_4__.removeProject)(projectName, taskList, _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput, _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectsContainer);
        projectsList.splice(projectsList.indexOf(projectName), 1)
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
        rerenderUl("inbox");
      });

      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.appendChild(deleteProjectBtn);
    })
  }
}

// ------------------------------------ADD TASK FORM LOGIC

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.addEventListener("change", function() {
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.value = _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.value.trim();
})

function closeTaskForm() {
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.style.animation = "fade-in-down-reverse 0.8s";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.style.animation = "fade-out 0.8s";
  rerenderUl("inbox");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.addTaskBtn.classList.remove("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.classList.remove("inactive");

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

  if (_components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectFormInput.value.trim() !== "" && !projectsList.includes(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectFormInput.value.trim())) {
    let project = (0,_components_project__WEBPACK_IMPORTED_MODULE_4__.createProject)(
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectFormInput.value.trim(),
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput,
      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectsContainer
    );

    projectsList.push(project.name);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));


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
        projectsList.splice(projectsList.indexOf(project.name), 1)
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
        rerenderUl("inbox");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLGFBQWEsUUFBUSxNQUFNLGFBQWEsYUFBYSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxhQUFhLGFBQWEsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sUUFBUSxhQUFhLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sT0FBTyxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxZQUFZLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxjQUFjLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxRQUFRLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sTUFBTSxV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LE1BQU0sMkVBQThCO0FBQ3BDLE1BQU0sMERBQVM7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsNEVBQStCO0FBQy9CO0FBQ0EsRUFBRSwwREFBUztBQUNYLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxrQkFBa0IsNkVBQWtCO0FBQ3BDLEVBQUUsb0VBQXVCO0FBQ3pCLEVBQUUsc0VBQXlCO0FBQzNCLEVBQUUseUVBQTRCO0FBQzlCLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJFQUE4QixDQUFDLHNEQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUF5QjtBQUN6QjtBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDOztBQUVELG1GQUFzQztBQUN0QztBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDOztBQUVELDRFQUErQjtBQUMvQjtBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDOztBQUVELDZFQUFnQztBQUNoQztBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uY3NzPzgzMzEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZmlsdGVyZWRMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBncm93IHtcXG4gIDAlIHtcXG4gICAgbWF4LWhlaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluLWRvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1kb3duLXJldmVyc2Uge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1yaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNyZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluLXJpZ2h0LXJldmVyc2Uge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3JlbSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1sZWZ0LXJldmVyc2Uge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIH1cXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpa1xcXCI7XFxuICBjb2xvcjogIzY3NDNiYjtcXG59XFxuXFxuLmluYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjQ4LCA1NCwgMCwgMC4yNjcpLCByZ2JhKDI0OSwgMjEzLCAzNSwgMC41MTQpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5vcHRpb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYjk5M2Q2LCAjOGNhNmRiKTtcXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZmZmZjhlLCAjZmZmZmZmNTIgMzAlLCAjZmZmZmZmYTggMzAlLCAjZmZmZmZmM2IgMzIlLCAjZmZmZmZmM2IgMzIlLCAjZmZmZmZmMGEgOTAlLCAjZmZmZmZmYTggOTAlLCAjZmZmZmZmMDkgOTIlLCAjZmZmZmZmMDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAyMDtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcztcXG59XFxuXFxuLm1vYmlsZS1iYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZmZmY4ZSwgI2ZmZmZmZjUyIDMwJSwgI2ZmZmZmZmE4IDMwJSwgI2ZmZmZmZjNiIDMyJSwgI2ZmZmZmZjNiIDMyJSwgI2ZmZmZmZjBhIDkwJSwgI2ZmZmZmZmE4IDkwJSwgI2ZmZmZmZjA5IDkyJSwgI2ZmZmZmZjAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNzgpKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG5vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxufVxcblxcbm5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxuICBoZWlnaHQ6IDhyZW07XFxufVxcblxcbm5hdiBpbWcge1xcbiAgbWluLXdpZHRoOiA2cmVtO1xcbiAgd2lkdGg6IDZyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm1vYmlsZS1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogY2xhbXAoOHJlbSwgODAlLCAyNXJlbSk7XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0O1xcbiAgd2lkdGg6IDhyZW07XFxufVxcblxcbi53cmFwcGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG5cXG4uZmlsdGVycy1jb250YWluZXIsXFxuLmFkZC1wcm9qZWN0X19jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG4gIGFuaW1hdGlvbjogZ3JvdyAxLjVzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lciBidXR0b24sXFxuLmFkZC1wcm9qZWN0X19jb250YWluZXIgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KTtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyIC5hZGQtcHJvamVjdF9idG4sXFxuLmFkZC1wcm9qZWN0X19jb250YWluZXIgLmFkZC1wcm9qZWN0X2J0biB7XFxuICBjb2xvcjogIzY3NDNiYjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0X19mb3JtIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4uYWRkLXByb2plY3RfX2Zvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLmFkZC1wcm9qZWN0X19mb3JtIGJ1dHRvbiB7XFxuICBjb2xvcjogIzY3NDNiYjtcXG59XFxuLmFkZC1wcm9qZWN0X19mb3JtIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFkZC1wcm9qZWN0X19mb3JtIC5idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDNyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOHJlbSk7XFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXG59XFxuXFxuLnBhZ2UtdGl0bGVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcbi5wYWdlLXRpdGxlX19jb250YWluZXIgaDIge1xcbiAgZm9udC1mYW1pbHk6IFBhY2lmaWNvO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4ucGFnZS10aXRsZV9fY29udGFpbmVyIC5kZWxldGUtcHJvamVjdF9fYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDFkNWQ7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3Nyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTZyZW07XFxuICB0b3A6IDFyZW07XFxuICB3aWR0aDogNHJlbTtcXG59XFxuXFxuLmFkZC10YXNrX19idG4ge1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbiAgd2lkdGg6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuXFxuLmFkZC10YXNrX19mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDUwO1xcbiAgdG9wOiAzMHZoO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluLWRvd24gMC44cztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICByb3ctZ2FwOiAwLjhyZW07XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxuICB3aWR0aDogY2xhbXAoMTByZW0sIDkwJSwgNTByZW0pO1xcbiAgYm94LXNoYWRvdzogLTJweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ2Nik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxubWFpbiBmb3JtIGRpdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbm1haW4gZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogNXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbmlucHV0LFxcbm1haW4gc2VsZWN0IHtcXG4gIGhlaWdodDogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5pbnB1dDpob3ZlcixcXG5pbnB1dDphY3RpdmUsXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmhvdmVyLFxcbnNlbGVjdDphY3RpdmUsXFxuc2VsZWN0OmZvY3VzLFxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246YWN0aXZlLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmMDFkNWQgIWltcG9ydGFudDtcXG59XFxuXFxuLnBhZ2UtdGl0bGVfX2NvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM2NzQzYmIgIWltcG9ydGFudDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgdWwge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMnJlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDJyZW07XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5saSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIHdpZHRoOiBjbGFtcCgxMHJlbSwgOTAlLCA1MHJlbSk7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZWxldGUtdGFza19fYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxLjJyZW07XFxuICB0b3A6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbiAgd2lkdGg6IDEuMnJlbTtcXG4gIGhlaWdodDogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5saSBoMixcXG5saSBwIHtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IGNsYW1wKDRyZW0sIDc1JSwgNDVyZW0pO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5iYWNrZHJvcCB7XFxuICAgIGhlaWdodDogMTIwdmg7XFxuICB9XFxuXFxuICAubW9iaWxlLW1lbnUge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMS40cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgfVxcbiAgLm1vYmlsZS1tZW51IGRpdiB7XFxuICAgIHdpZHRoOiAwLjdyZW07XFxuICAgIGhlaWdodDogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NzQpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQ5KSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxuICB9XFxuXFxuICAubmF2LWJ1dHRvbnMge1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4tbGVmdCAwLjhzO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiBjbGFtcCgxMHJlbSwgNTB2dywgNDByZW0pO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gIH1cXG5cXG4gIC5uYXYtYnV0dG9ucyA+IGRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgfVxcblxcbiAgLndyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtY29udGFpbmVyIGJ1dHRvbixcXG4ucHJvamVjdHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjOWQ1Y2M0O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5hZGQtcHJvamVjdF9fY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWNvbnRhaW5lcixcXG4uYWRkLXByb2plY3RfX2NvbnRhaW5lciB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEwMywgNjcsIDE4NywgMC42MDMpO1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBbURBO0VBQ0U7SUFDRSxlQUFBO0VDbERGO0VEb0RBO0lBQ0UsaUJBQUE7RUNsREY7QUFDRjtBRHFEQTtFQUNFO0lBQ0UsV0FBQTtFQ25ERjtFRHFEQTtJQUNFLGFBQUE7RUNuREY7QUFDRjtBRHNEQTtFQUNFO0lBQ0UsYUFBQTtFQ3BERjtFRHNEQTtJQUNFLFdBQUE7RUNwREY7QUFDRjtBRHVEQTtFQUNFO0lBQ0Us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QUE7SUFDQSxjQUFBO0VDOUJGO0VEZ0NFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxnR0EzZFU7SUE0ZFYsa0JBQUE7SUFDQSxvQkFBQTtFQzlCSjs7RURrQ0E7SUFDRSw0QkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSw0Q0F4ZWM7RUN5Y2hCOztFRGtDQTtJQUNFLGlCQUFBO0VDL0JGOztFRGtDQTtJQUNFLGdCQUFBO0VDL0JGOztFRGtDQTtJQUNFLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQkFBQTtFQy9CRjs7RURrQ0E7SUFDRSw2QkFBQTtJQUNBLHNCQUFBO0VDL0JGOztFRGtDQTtJQUNFLFVBQUE7RUMvQkY7O0VEa0NBOztJQUVFLGNBamdCVTtJQWtnQlYsaUJBQUE7RUMvQkY7O0VEa0NBO0lBQ0UsZUFBQTtFQy9CRjs7RURrQ0E7O0lBRUUsK0NBdGdCYztFQ3VlaEI7QUFDRjs7QUFFQSxtQ0FBbUNcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tkcm9wXCIpO1xuY29uc3QgbW9iaWxlQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1iYWNrZHJvcFwiKTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5BVlxuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudVwiKTtcbmNvbnN0IG1vYmlsZU1lbnVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51IGRpdlwiKTtcbmNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1idXR0b25zXCIpO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdF9idG5cIik7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4vLyAtLUZJTFRFUlNcblxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xuY29uc3QgZmlsdGVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyc1wiKTtcbmNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IGZpbHRlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcnMtY29udGFpbmVyXCIpO1xuY29uc3QgZGFpbHlGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWZpbHRlclwiKTtcbmNvbnN0IHdlZWtseUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vla2x5LWZpbHRlclwiKTtcbmNvbnN0IGhpZ2hQcmlvcml0eUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHAtZmlsdGVyXCIpO1xuXG4vLyAtLS1QUk9KRUNUIEZPUk0gQ09OVEVOVFxuY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RfX2NvbnRhaW5lclwiKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0X19mb3JtXCIpO1xuY29uc3QgcHJvamVjdEZvcm1JbnB1dCA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnN0IHByb2plY3RGb3JtQ2FuY2VsQnRuID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPSdidXR0b24nXVwiKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTUFJTlxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza19fYnRuXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWNvbnRhaW5lclwiKTtcblxuLy8gLS0tUEFHRSBUSVRMRSArIENBTkNFTCBQUk9KRUNUXG5cbmNvbnN0IHBhZ2VUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS10aXRsZV9fY29udGFpbmVyXCIpO1xuY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xucGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xucGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG5cbi8vIC0tLVRBU0sgRk9STSBDT05URU5UXG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza19fZm9ybVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZGVzY3JpcHRpb25cIik7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZHVlLWRhdGVcIik7XG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXByaW9yaXR5XCIpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZWxvbmctcHJvamVjdFwiKTtcbmNvbnN0IHRhc2tGb3JtQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIuYWRkLXRhc2tfX2Zvcm0gYnV0dG9uW3R5cGU9J2J1dHRvbiddXCJcbik7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxPR0lDXG5cbnByaW9yaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChwcmlvcml0eUlucHV0LnZhbHVlID09PSBcImhpZ2hcIikge1xuICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgfVxufSk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHBhZ2VUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG59KTtcblxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xufSk7XG5cbmZpbHRlcnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xufSk7XG5cbnByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbn0pO1xuXG5mb3IgKGxldCBmaWx0ZXIgb2YgWy4uLmZpbHRlcnNDb250YWluZXIuY2hpbGRyZW5dKSB7XG4gIGZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB9KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1PQklMRVxuXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgbmF2QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIG1vYmlsZUJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICBsZXQgbW9iaWxlID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDYwMCA/IHRydWUgOiBmYWxzZTtcblxuICBpZiAobW9iaWxlKSB7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgbW9iaWxlQmFja2Ryb3Auc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLW91dCAwLjhzXCI7XG4gICAgbmF2QnV0dG9ucy5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tbGVmdC1yZXZlcnNlIDAuOHNcIjtcbiAgICBtb2JpbGVNZW51LnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbiAxLjZzXCI7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5hdkJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZShcImZsZXhcIik7XG4gICAgICBtb2JpbGVCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICBtb2JpbGVCYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgbmF2QnV0dG9ucy5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIH0sIDgwMCk7XG4gIH1cbn1cblxubW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1lbnUpO1xubW9iaWxlTWVudURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1lbnUpO1xuXG5leHBvcnQge1xuICBiYWNrZHJvcCxcbiAgbW9iaWxlQmFja2Ryb3AsXG4gIG5hdkJ1dHRvbnMsXG4gIGNsb3NlTWVudSxcbiAgbmF2LFxuICBhZGRQcm9qZWN0QnRuLFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgaW5ib3hCdG4sXG4gIGZpbHRlcnNDb250YWluZXIsXG4gIGRhaWx5RmlsdGVyQnRuLFxuICB3ZWVrbHlGaWx0ZXJCdG4sXG4gIGhpZ2hQcmlvcml0eUZpbHRlckJ0bixcbiAgYWRkUHJvamVjdENvbnRhaW5lcixcbiAgcHJvamVjdEZvcm0sXG4gIHByb2plY3RGb3JtSW5wdXQsXG4gIHByb2plY3RGb3JtQ2FuY2VsQnRuLFxuICBwYWdlVGl0bGVDb250YWluZXIsXG4gIHBhZ2VUaXRsZSxcbiAgbWFpbixcbiAgYWRkVGFza0J0bixcbiAgdWwsXG4gIGxpc3RDb250YWluZXIsXG4gIHRhc2tGb3JtLFxuICBkZXNjcmlwdGlvbklucHV0LFxuICBkdWVEYXRlSW5wdXQsXG4gIHByaW9yaXR5SW5wdXQsXG4gIHByb2plY3RJbnB1dCxcbiAgdGFza0Zvcm1DYW5jZWxCdG4sXG59O1xuIiwiZnVuY3Rpb24gY3JlYXRlRmlsdGVyZWRMaXN0KGZpbHRlclR5cGUsIG9yaWdpbkxpc3QsIHByb2plY3ROYW1lID0gXCJcIikge1xuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKS5zcGxpdChcIiBcIikuc2xpY2UoMCwgNCkuam9pbihcIiBcIik7XG4gIGxldCBmaWx0ZXJlZEFycmF5O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmJveFxuXG4gIGlmIChmaWx0ZXJUeXBlID09PSBcImluYm94XCIpIHtcbiAgICBmaWx0ZXJlZEFycmF5ID0gb3JpZ2luTGlzdDtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSFAgZmlsdGVyXG4gIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJoaWdoIHByaW9yaXR5XCIpIHtcbiAgICBmaWx0ZXJlZEFycmF5ID0gb3JpZ2luTGlzdC5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay50YXNrT2JqLnByaW9yaXR5ID09PSBcImhpZ2hcIlxuICAgICk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhaWx5IGZpbHRlclxuICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwidG9kYXlcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay50YXNrT2JqLmR1ZURhdGUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLnNsaWNlKDAsIDQpXG4gICAgICAgIC5qb2luKFwiIFwiKTtcbiAgICAgIHJldHVybiB0YXNrRGF0ZSA9PT0gY3VycmVudERhdGU7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHdlZWtseSBmaWx0ZXJcbiAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcIndlZWtcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgY29uc3Qgd2VlayA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcblxuICAgICAgbGV0IHRhc2tEYXRlQXJyID0gbmV3IERhdGUodGFzay50YXNrT2JqLmR1ZURhdGUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLnNsaWNlKDAsIDQpO1xuICAgICAgbGV0IHRhc2tNb250aCA9IHRhc2tEYXRlQXJyWzFdO1xuICAgICAgbGV0IHRhc2tEYXkgPSB0YXNrRGF0ZUFyclsyXTtcbiAgICAgIGxldCB0YXNrWWVhciA9IHRhc2tEYXRlQXJyWzNdO1xuICAgICAgbGV0IGN1cnJlbnREYXkgPSBOdW1iZXIoY3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzJdKTtcbiAgICAgIGxldCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMV07XG4gICAgICBsZXQgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbM107XG4gICAgICBsZXQgd2Vla0luZGV4ID0gd2Vlay5pbmRleE9mKGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVswXSk7XG5cbiAgICAgIGNvbnN0IG1vbnRocyA9IHtcbiAgICAgICAgYWxsOiBbXG4gICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICBcIkZlYlwiLFxuICAgICAgICAgIFwiTWFyXCIsXG4gICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgIFwiSnVuXCIsXG4gICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICBcIkF1Z1wiLFxuICAgICAgICAgIFwiU2VwXCIsXG4gICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICBcIk5vdlwiLFxuICAgICAgICAgIFwiRGVjXCIsXG4gICAgICAgIF0sXG4gICAgICAgIDMxOiBbXCJKYW5cIiwgXCJNYXJcIiwgXCJNYXlcIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJPY3RcIiwgXCJEZWNcIl0sXG4gICAgICAgIDMwOiBbXCJBcHJcIiwgXCJKdW5cIiwgXCJTZXBcIiwgXCJOb3ZcIl0sXG4gICAgICAgIDI5OiBOdW1iZXIoY3VycmVudFllYXIpICUgNCA9PT0gMCA/IFtcIkZlYlwiXSA6IFtdLFxuICAgICAgICAyODogTnVtYmVyKGN1cnJlbnRZZWFyKSAlIDQgPT09IDAgPyBbXSA6IFtcIkZlYlwiXSxcbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGkgPSB3ZWVrSW5kZXg7IGkgPD0gd2Vla0luZGV4ICsgNjsgaSsrKSB7XG4gICAgICAgIGxldCB0aGlzV2Vla0RheSA9IGN1cnJlbnREYXkgKyAoNiAtIGkpO1xuICAgICAgICBsZXQgdGhpc1dlZWtNb250aCA9IGN1cnJlbnRNb250aDtcbiAgICAgICAgbGV0IHRoaXNXZWVrWWVhciA9IGN1cnJlbnRZZWFyO1xuXG4gICAgICAgIC8vIC0tLUdFVCBUTyBORVhUIE1PTlRIL1lFQVJcblxuICAgICAgICBmdW5jdGlvbiBzZXROZXh0TW9udGhZZWFyKCkge1xuICAgICAgICAgIGlmICh0aGlzV2Vla01vbnRoID09PSBcIkRlY1wiKSB7XG4gICAgICAgICAgICB0aGlzV2Vla01vbnRoID0gXCJKYW5cIjtcbiAgICAgICAgICAgIHRoaXNXZWVrWWVhciA9IChOdW1iZXIodGhpc1dlZWtZZWFyKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNXZWVrTW9udGggPSBtb250aHMuYWxsW21vbnRocy5hbGwuaW5kZXhPZih0aGlzV2Vla01vbnRoKSArIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFByZXZpb3VzTW9udGhZZWFyKCkge1xuICAgICAgICAgIGlmICh0aGlzV2Vla01vbnRoID09PSBcIkphblwiKSB7XG4gICAgICAgICAgICB0aGlzV2Vla01vbnRoID0gXCJEZWNcIjtcbiAgICAgICAgICAgIHRoaXNXZWVrWWVhciA9IChOdW1iZXIodGhpc1dlZWtZZWFyKSAtIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNXZWVrTW9udGggPSBtb250aHMuYWxsW21vbnRocy5hbGwuaW5kZXhPZih0aGlzV2Vla01vbnRoKSAtIDFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb250aHNbMzFdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpICYmIHRoaXNXZWVrRGF5ID4gMzEpIHtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5IC0gMzE7XG4gICAgICAgICAgc2V0TmV4dE1vbnRoWWVhcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1szMF0uaW5jbHVkZXModGhpc1dlZWtNb250aCkgJiYgdGhpc1dlZWtEYXkgPiAzMCkge1xuICAgICAgICAgIHNldE5leHRNb250aFllYXIoKTtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5IC0gMzA7XG4gICAgICAgIH0gZWxzZSBpZiAobW9udGhzWzI5XS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSAmJiB0aGlzV2Vla0RheSA+IDI5KSB7XG4gICAgICAgICAgdGhpc1dlZWtEYXkgPSB0aGlzV2Vla0RheSAtIDI5O1xuICAgICAgICAgIHNldE5leHRNb250aFllYXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMjhdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpICYmIHRoaXNXZWVrRGF5ID4gMjgpIHtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5IC0gMjg7XG4gICAgICAgICAgc2V0TmV4dE1vbnRoWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tR0VUIFRPIFBSRVZJT1VTIE1PTlRIL1lFQVJcbiAgICAgICAgZWxzZSBpZiAodGhpc1dlZWtEYXkgPCAxKSB7XG4gICAgICAgICAgc2V0UHJldmlvdXNNb250aFllYXIoKTtcblxuICAgICAgICAgIGlmIChtb250aHNbMzFdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpKSB7XG4gICAgICAgICAgICB0aGlzV2Vla0RheSA9IDMxICsgdGhpc1dlZWtEYXk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMzBdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpKSB7XG4gICAgICAgICAgICB0aGlzV2Vla0RheSA9IDMwICsgdGhpc1dlZWtEYXk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMjldLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpKSB7XG4gICAgICAgICAgICB0aGlzV2Vla0RheSA9IDI5ICsgdGhpc1dlZWtEYXk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMjhdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpKSB7XG4gICAgICAgICAgICB0aGlzV2Vla0RheSA9IDI4ICsgdGhpc1dlZWtEYXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tTk9STUFMIEJFSEFWSU9SXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgYCR7TnVtYmVyKHRhc2tEYXkpfSAke3Rhc2tNb250aH0gJHt0YXNrWWVhcn1gID09PVxuICAgICAgICAgIGAke3RoaXNXZWVrRGF5fSAke3RoaXNXZWVrTW9udGh9ICR7dGhpc1dlZWtZZWFyfWBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmlsdGVyIGJ5IHByb2plY3RcbiAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcInByb2plY3RcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiBwcm9qZWN0TmFtZSA9PT0gdGFzay50YXNrT2JqLnByb2plY3RcbiAgICApO1xuICB9XG5cbiAgZmlsdGVyZWRBcnJheS5tYXAoKHRhc2spID0+IHtcbiAgICBmaWx0ZXJlZExpc3QuYXBwZW5kQ2hpbGQodGFzay50YXNrRWwpO1xuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRMaXN0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVGaWx0ZXJlZExpc3QgfTtcbiIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID1cbiAgICAgIGR1ZURhdGUgPT09IFwiXCJcbiAgICAgICAgPyBcIlwiXG4gICAgICAgIDogbmV3IERhdGUoZHVlRGF0ZSkudG9TdHJpbmcoKS5zcGxpdChcIiBcIikuc2xpY2UoMSwgNCkuam9pbihcIiBcIik7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgY29uc3QgdGFza09iaiA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cbiAgbGV0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLnByb2plY3QgPT09IFwiXCIgPyBcIlwiIDogdGFza09iai5wcm9qZWN0O1xuICB0YXNrVGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrLXRpdGxlXCI7XG5cbiAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrT2JqLmRlc2NyaXB0aW9uO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG5cbiAgbGV0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodGFza09iai5kdWVEYXRlKTtcbiAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLmR1ZURhdGUgPT09IFwiXCIgPyBcIlwiIDpgJHtkYXRlLmdldERhdGUoKSA+PSAxMCA/IGRhdGUuZ2V0RGF0ZSgpOiBgMCR7ZGF0ZS5nZXREYXRlKCl9YH0tJHtkYXRlLmdldE1vbnRoKCkgKyAxID49IDEwID8gZGF0ZS5nZXRNb250aCgpICsgMTogYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YH0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbiAgdGFza0R1ZURhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWRhdGVcIjtcblxuICBpZiAodGFza09iai5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gIH0gXG5cbiAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVUYXNrQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlLXRhc2tfX2J0blwiO1xuXG4gIGlmICh0YXNrVGl0bGUudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgfWVsc2Uge1xuICAgIHRhc2tEdWVEYXRlLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEgLyAzXCJcbiAgfVxuXG4gIGlmICh0YXNrVGl0bGUudGV4dENvbnRlbnQgIT09IFwiXCIgfHwgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICB0YXNrRGVzY3JpcHRpb24uc3R5bGUuZ3JpZFJvdyA9IFwiMiAvIDNcIjtcbiAgfVxuXG4gIGlmICh0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gIH1cblxuICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuXG4gIHJldHVybiB7IHRhc2tFbCwgdGFza09iaiB9O1xufVxuXG5leHBvcnQgeyBUYXNrLCBjcmVhdGVUYXNrIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBvcHRpb25QYXJlbnQsIGJ0blBhcmVudCkge1xuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWU7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICBvcHRpb25QYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIGJ0blBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGxldCBuYW1lID0gcHJvamVjdE5hbWU7XG5cbiAgcmV0dXJuIHsgb3B0aW9uLCBidXR0b24sIG5hbWUgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSwgb3JpZ2luYWxBcnJheSwgc2VsZWN0LCBwcm9qQ29udGFpbmVyKSB7XG4gIGZvciAobGV0IHRhc2sgb2Ygb3JpZ2luYWxBcnJheSkge1xuICAgIGlmICh0YXNrLnRhc2tPYmoucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIG9yaWdpbmFsQXJyYXkuc3BsaWNlKG9yaWdpbmFsQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG9wdGlvbnMgPSBbLi4uc2VsZWN0LmNoaWxkcmVuXTtcbiAgbGV0IGluZGV4ID0gb3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uLnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZSk7XG5cbiAgc2VsZWN0LnJlbW92ZUNoaWxkKHNlbGVjdC5jaGlsZHJlbltpbmRleF0pO1xuXG4gIGxldCBwcm9qZWN0cyA9IFsuLi5wcm9qQ29udGFpbmVyLmNoaWxkcmVuXTtcbiAgbGV0IGluZGV4MiA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWVcbiAgKTtcbiAgcHJvakNvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qQ29udGFpbmVyLmNoaWxkcmVuW2luZGV4Ml0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH07XG4iLCJmdW5jdGlvbiBhZGRUYXNrKGNvbnRhaW5lciwgdGFzaywgc3RvcmFnZUFycmF5KSB7XG4gIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwidWxcIikuYXBwZW5kQ2hpbGQodGFzay50YXNrRWwpO1xuICBzdG9yYWdlQXJyYXkucHVzaCh0YXNrKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhjb250YWluZXIsIHRhc2ssIHN0b3JhZ2VBcnJheSkge1xuICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcInVsXCIpLnJlbW92ZUNoaWxkKHRhc2sudGFza0VsKTtcbiAgc3RvcmFnZUFycmF5LnNwbGljZShzdG9yYWdlQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2ssIHJlbW92ZVRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlL21haW4uY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY29tcG9uZW50cy9uZXdUYXNrXCI7XG5pbXBvcnQgeyBhZGRUYXNrLCByZW1vdmVUYXNrIH0gZnJvbSBcIi4vY29tcG9uZW50cy90YXNrc1wiO1xuaW1wb3J0IHsgY3JlYXRlRmlsdGVyZWRMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWx0ZXJlZExpc3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0XCI7XG5pbXBvcnQge1xuICBiYWNrZHJvcCxcbiAgbW9iaWxlQmFja2Ryb3AsXG4gIGNsb3NlTWVudSxcbiAgYWRkUHJvamVjdEJ0bixcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIGluYm94QnRuLFxuICBkYWlseUZpbHRlckJ0bixcbiAgd2Vla2x5RmlsdGVyQnRuLFxuICBoaWdoUHJpb3JpdHlGaWx0ZXJCdG4sXG4gIGFkZFByb2plY3RDb250YWluZXIsXG4gIHByb2plY3RGb3JtLFxuICBwcm9qZWN0Rm9ybUlucHV0LFxuICBwcm9qZWN0Rm9ybUNhbmNlbEJ0bixcbiAgcGFnZVRpdGxlQ29udGFpbmVyLFxuICBwYWdlVGl0bGUsXG4gIGxpc3RDb250YWluZXIsXG4gIHRhc2tGb3JtLFxuICBkZXNjcmlwdGlvbklucHV0LFxuICBkdWVEYXRlSW5wdXQsXG4gIHByaW9yaXR5SW5wdXQsXG4gIHByb2plY3RJbnB1dCxcbiAgdGFza0Zvcm1DYW5jZWxCdG4sXG4gIGFkZFRhc2tCdG4sXG59IGZyb20gXCIuL2NvbXBvbmVudHMvRE9NXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVGFza3MgaGFuZGxpbmdcblxuY29uc3Qgb2xkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza09iamVjdHNcIikpO1xuXG5jb25zdCB0YXNrTGlzdCA9IFtdO1xuXG5pZiAob2xkVGFza3MgIT09IG51bGwpIHtcbiAgZm9yIChsZXQgb2JqIG9mIG9sZFRhc2tzKSB7XG4gICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKFxuICAgICAgb2JqLmRlc2NyaXB0aW9uLFxuICAgICAgb2JqLmR1ZURhdGUsXG4gICAgICBvYmoucHJpb3JpdHksXG4gICAgICBvYmoucHJvamVjdFxuICAgICk7XG4gICAgYWRkVGFzayhsaXN0Q29udGFpbmVyLCB0YXNrLCB0YXNrTGlzdCk7XG5cbiAgICBsZXQgZGVsZXRlVGFza0J0biA9IFsuLi50YXNrLnRhc2tFbC5jaGlsZHJlbl0uZmlsdGVyKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NOYW1lID09PSBcImRlbGV0ZS10YXNrX19idG5cIlxuICAgIClbMF07XG4gIFxuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhc2sudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbi1yaWdodC1yZXZlcnNlIDAuOHNcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgICByZW1vdmVUYXNrKGxpc3RDb250YWluZXIsIHRhc2ssIHRhc2tMaXN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrT2JqZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdC5tYXAodGFzayA9PiB0YXNrLnRhc2tPYmopKSk7XG4gICAgICB9LCA4MDApO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IG9sZFByb2plY3RzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIikpO1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcblxuaWYgKG9sZFByb2plY3RzTGlzdCAhPT0gbnVsbCkge1xuICBmb3IgKGxldCBwcm9qZWN0TmFtZSBvZiBvbGRQcm9qZWN0c0xpc3QpIHtcbiAgICBsZXQgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXG4gICAgICBwcm9qZWN0TmFtZSxcbiAgICAgIHByb2plY3RJbnB1dCxcbiAgICAgIHByb2plY3RzQ29udGFpbmVyXG4gICAgKTtcblxuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3ROYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcblxuXG4gICAgcHJvamVjdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlcmVuZGVyVWwoXCJwcm9qZWN0XCIsIHByb2plY3ROYW1lKTtcblxuICAgICAgLy8gLS0tUkVNT1ZFIFBST0pFQ1RcblxuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG5cbiAgICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtcHJvamVjdF9fYnRuXCI7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrTGlzdCwgcHJvamVjdElucHV0LCBwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UocHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdE5hbWUpLCAxKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgICAgICAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICAgICAgfSk7XG5cbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICB9KVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFERCBUQVNLIEZPUk0gTE9HSUNcblxuZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZS50cmltKCk7XG59KVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuICB0YXNrRm9ybS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tZG93bi1yZXZlcnNlIDAuOHNcIjtcbiAgYmFja2Ryb3Auc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLW91dCAwLjhzXCI7XG4gIHJlcmVuZGVyVWwoXCJpbmJveFwiKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIHBhZ2VUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFza0Zvcm0uc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICBiYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBcIm5vcm1hbFwiO1xuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB9LCA4MDApO1xufVxuXG5iYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5cbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICBsZXQgdGFzayA9IGNyZWF0ZVRhc2soXG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICBwcm9qZWN0SW5wdXQudmFsdWVcbiAgKTtcblxuICBjbG9zZVRhc2tGb3JtKCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluLXJpZ2h0IDFzXCI7XG4gICAgYWRkVGFzayhsaXN0Q29udGFpbmVyLCB0YXNrLCB0YXNrTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrT2JqZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdC5tYXAodGFzayA9PiB0YXNrLnRhc2tPYmopKSk7XG4gIH0sIDQwMCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgfSwgMTQwMCk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEZWxldGUgdGFzayBmdW5jdGlvbmFsaXR5XG5cbiAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBbLi4udGFzay50YXNrRWwuY2hpbGRyZW5dLmZpbHRlcihcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc05hbWUgPT09IFwiZGVsZXRlLXRhc2tfX2J0blwiXG4gIClbMF07XG5cbiAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRhc2sudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbi1yaWdodC1yZXZlcnNlIDAuOHNcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhc2sudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgICByZW1vdmVUYXNrKGxpc3RDb250YWluZXIsIHRhc2ssIHRhc2tMaXN0KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza09iamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QubWFwKHRhc2sgPT4gdGFzay50YXNrT2JqKSkpO1xuICAgIH0sIDgwMCk7XG4gIH0pO1xufSk7XG5cbnRhc2tGb3JtQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRhc2tGb3JtKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQcm9qZWN0cyBoYW5kbGluZ1xuXG4vLyAtLS1BREQgUFJPSkVDVFxuXG5mdW5jdGlvbiBjbG9zZUFkZFByb2plY3RGb3JtKCkge1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBwcm9qZWN0Rm9ybUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xufSk7XG5cbnByb2plY3RGb3JtQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUFkZFByb2plY3RGb3JtKTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAocHJvamVjdEZvcm1JbnB1dC52YWx1ZS50cmltKCkgIT09IFwiXCIgJiYgIXByb2plY3RzTGlzdC5pbmNsdWRlcyhwcm9qZWN0Rm9ybUlucHV0LnZhbHVlLnRyaW0oKSkpIHtcbiAgICBsZXQgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXG4gICAgICBwcm9qZWN0Rm9ybUlucHV0LnZhbHVlLnRyaW0oKSxcbiAgICAgIHByb2plY3RJbnB1dCxcbiAgICAgIHByb2plY3RzQ29udGFpbmVyXG4gICAgKTtcblxuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QubmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG5cblxuICAgIHByb2plY3QuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXJlbmRlclVsKFwicHJvamVjdFwiLCBwcm9qZWN0Lm5hbWUpO1xuXG4gICAgICAvLyAtLS1SRU1PVkUgUFJPSkVDVFxuXG4gICAgICBwYWdlVGl0bGVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuICAgICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG5cbiAgICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtcHJvamVjdF9fYnRuXCI7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3QubmFtZSwgdGFza0xpc3QsIHByb2plY3RJbnB1dCwgcHJvamVjdHNDb250YWluZXIpO1xuICAgICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKHByb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3QubmFtZSksIDEpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgICAgICByZXJlbmRlclVsKFwiaW5ib3hcIik7XG4gICAgICB9KTtcblxuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgICAgY2xvc2VNZW51KCk7XG4gICAgfSk7XG4gIH1cbiAgY2xvc2VBZGRQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbi8vIC0tLU1PQklMRSBDTE9TRSBBREQgUFJPSkVDVCBGT1JNXG5cbm1vYmlsZUJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNsb3NlQWRkUHJvamVjdEZvcm0oKTtcbiAgY2xvc2VNZW51KCk7XG59KTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGaWx0ZXIgaGFuZGxpbmdcblxuZnVuY3Rpb24gcmVyZW5kZXJVbChmaWx0ZXJUeXBlLCBwcm9qZWN0TmFtZSA9IFwiXCIpIHtcbiAgbGV0IG5ld1VsTGlzdCA9IGNyZWF0ZUZpbHRlcmVkTGlzdChmaWx0ZXJUeXBlLCB0YXNrTGlzdCwgcHJvamVjdE5hbWUpO1xuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VWxMaXN0KTtcbiAgcGFnZVRpdGxlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9XG4gICAgZmlsdGVyVHlwZSA9PT0gXCJpbmJveFwiXG4gICAgICA/IFwiSW5ib3hcIlxuICAgICAgOiBmaWx0ZXJUeXBlID09PSBcImhpZ2ggcHJpb3JpdHlcIlxuICAgICAgPyBcIkhpZ2ggcHJpb3JpdHlcIlxuICAgICAgOiBmaWx0ZXJUeXBlID09PSBcInRvZGF5XCJcbiAgICAgID8gXCJUb2RheVwiXG4gICAgICA6IGZpbHRlclR5cGUgPT09IFwid2Vla1wiXG4gICAgICA/IFwiVGhpcyB3ZWVrXCJcbiAgICAgIDogZmlsdGVyVHlwZSA9PT0gXCJwcm9qZWN0XCJcbiAgICAgID8gcHJvamVjdE5hbWVcbiAgICAgIDogXCJcIjtcbiAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gIGZvciAobGV0IHQgb2YgdGFza0xpc3QpIHtcbiAgICB0LnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4gMS40c1wiO1xuICB9XG59XG5cbmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJpbmJveFwiKTtcbiAgY2xvc2VNZW51KCk7XG59KTtcblxuaGlnaFByaW9yaXR5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJoaWdoIHByaW9yaXR5XCIpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuXG5kYWlseUZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZXJlbmRlclVsKFwidG9kYXlcIik7XG4gIGNsb3NlTWVudSgpO1xufSk7XG5cbndlZWtseUZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZXJlbmRlclVsKFwid2Vla1wiKTtcbiAgY2xvc2VNZW51KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==