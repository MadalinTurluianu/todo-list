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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes grow {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 100vh;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes fade-out {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes fade-in-down {\n  0% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n}\n@keyframes fade-in-down-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n}\n@keyframes fade-in-right {\n  0% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n}\n@keyframes fade-in-right-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n}\n@keyframes fade-in-left {\n  0% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n}\n@keyframes fade-in-left-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n}\n* {\n  box-sizing: border-box;\n  font-family: \"Rubik\";\n  color: #6743bb;\n}\n\n.inactive {\n  display: none !important;\n}\n\n.flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.high-priority {\n  background-color: rgba(255, 255, 255, 0.603) !important;\n  background-image: linear-gradient(-45deg, rgba(248, 54, 0, 0.267), rgba(249, 213, 35, 0.514)) !important;\n}\n\noption {\n  cursor: pointer;\n}\n\nbody {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  overflow-x: hidden;\n  background-image: linear-gradient(45deg, #b993d6, #8ca6db);\n}\n\n.backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n  animation: fade-in 1s;\n}\n\n.mobile-backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  animation: fade-in 1s;\n}\n\nbutton {\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  border-radius: 14px;\n  width: 5rem;\n  padding: 0.3rem;\n  font-size: 0.8rem;\n}\n\ninput,\nselect,\noption {\n  background-color: rgba(255, 255, 255, 0.603);\n}\n\nnav {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 1rem 0 1rem;\n  height: 8rem;\n}\n\nnav img {\n  min-width: 6rem;\n  width: 6rem;\n  margin-left: 1rem;\n}\n\n.mobile-menu {\n  display: none;\n}\n\n.nav-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  width: clamp(8rem, 80%, 25rem);\n  margin-top: 0.6rem;\n}\n\n.wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 14px;\n  transition: height;\n  width: 8rem;\n}\n\n.wrapper button {\n  background: transparent;\n  width: 8rem;\n}\n\n.filters-container,\n.add-project__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.603);\n  animation: grow 1.5s;\n  overflow: hidden;\n  width: 90%;\n}\n.filters-container button,\n.add-project__container button {\n  color: rgba(255, 255, 255, 0.877);\n}\n.filters-container .add-project_btn,\n.add-project__container .add-project_btn {\n  color: #6743bb;\n}\n\n.add-project__form {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.add-project__form input {\n  width: 90%;\n  margin: auto;\n}\n.add-project__form button {\n  color: #6743bb;\n}\n.add-project__form .buttons-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0.5rem 0;\n  width: 100%;\n}\n.add-project__form .buttons-container button {\n  width: 3rem;\n  padding: 0;\n  font-weight: normal;\n}\n\nmain {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: calc(100vh - 18rem);\n  margin-top: 10rem;\n}\n\n.page-title__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.603);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.3rem;\n  animation: fade-in 1s;\n}\n.page-title__container h2 {\n  font-family: Pacifico;\n  color: rgba(255, 255, 255, 0.877);\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: normal;\n}\n.page-title__container .delete-project__btn {\n  background-color: #f01d5d;\n  color: rgba(255, 255, 255, 0.877);\n  position: absolute;\n  right: -6rem;\n  top: 1rem;\n  width: 4rem;\n}\n\n.add-task__btn {\n  animation: fade-in 1s;\n  width: 5rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 0.5rem 0;\n}\n\n.add-task__form {\n  position: absolute;\n  z-index: 50;\n  top: 30vh;\n  animation: fade-in-down 0.8s;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  row-gap: 0.8rem;\n  column-gap: 0.5rem;\n  width: clamp(10rem, 90%, 50rem);\n  box-shadow: -2px 2px rgba(255, 255, 255, 0.466);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 1rem;\n  border-radius: 15px;\n}\n\nmain form div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-column: 1/3;\n}\n\nmain form button {\n  background-color: transparent;\n  width: 5rem;\n  margin-top: 1rem;\n}\n\ninput,\nmain select {\n  height: 1.2rem;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n}\n\nlabel {\n  text-align: center;\n  font-size: 0.9rem;\n}\n\ninput:hover,\ninput:active,\ninput:focus,\nselect:hover,\nselect:active,\nselect:focus,\nbutton:hover,\nbutton:active,\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover {\n  color: #f01d5d !important;\n}\n\n.page-title__container button:hover {\n  color: #6743bb !important;\n}\n\n.list-container {\n  width: 100%;\n  height: 100%;\n}\n\n.list-container ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style-type: none;\n  margin-block-start: 2rem;\n  margin-block-end: 2rem;\n  padding-inline-start: 0;\n  width: 100%;\n  height: 100%;\n}\n\nli {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto auto;\n  width: clamp(10rem, 90%, 50rem);\n  margin: 0;\n  margin-bottom: 2rem;\n  padding: 0.5rem 1rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 20px;\n}\n\n.task-title {\n  margin-right: 0.4rem;\n  font-size: 1.3rem;\n}\n\n.task-date {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\n\n.delete-task__btn {\n  position: absolute;\n  right: 1.2rem;\n  top: center;\n  border-radius: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.603);\n  width: 1.2rem;\n  height: 1.2rem;\n  background-image: none;\n  background-color: transparent;\n}\n\nli h2,\nli p {\n  margin: 0 1rem 0 0;\n}\n\n.task-description {\n  width: clamp(4rem, 75%, 45rem);\n  overflow: auto;\n  overflow-wrap: break-word;\n}\n\n@media (max-width: 600px) {\n  .mobile-menu {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    margin-top: 1.4rem;\n    cursor: pointer;\n    height: 1.4rem;\n  }\n  .mobile-menu div {\n    width: 0.7rem;\n    height: 0.7rem;\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.774), rgba(255, 255, 255, 0.349));\n    border-radius: 50%;\n    margin-right: 0.3rem;\n  }\n\n  .nav-buttons {\n    animation: fade-in-left 0.8s;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    position: absolute;\n    z-index: 30;\n    top: 0;\n    right: 0;\n    width: clamp(10rem, 50vw, 40rem);\n    height: 100vh;\n    margin: 0;\n    background-color: rgba(255, 255, 255, 0.753);\n  }\n\n  .nav-buttons button {\n    font-size: 1.2rem;\n  }\n\n  .nav-buttons > button {\n    margin-top: 5rem;\n  }\n\n  .nav-buttons > div {\n    margin-top: 3rem;\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .nav-buttons button {\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .wrapper {\n    width: 80%;\n  }\n\n  .filters-container button,\n.projects-container button {\n    color: #9d5cc4;\n    font-size: 1.1rem;\n  }\n\n  .add-project__container button {\n    font-size: 1rem;\n  }\n\n  .filters-container,\n.add-project__container {\n    border-top: 1px solid rgba(103, 67, 187, 0.603);\n  }\n}\n\n/*# sourceMappingURL=main.css.map */\n", "",{"version":3,"sources":["webpack://./src/style/main.scss","webpack://./src/style/main.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxhQUFhLFFBQVEsTUFBTSxhQUFhLGFBQWEsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLFFBQVEsYUFBYSxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxZQUFZLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sY0FBYyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sNkJB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O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtB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Q2YsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLDRFQUErQjtBQUMvQjtBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDOztBQUVEOztBQUVBO0FBQ0Esa0JBQWtCLDZFQUFrQjtBQUNwQyxFQUFFLG9FQUF1QjtBQUN6QixFQUFFLHNFQUF5QjtBQUMzQixFQUFFLHlFQUE0QjtBQUM5QixFQUFFLGtFQUFxQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyRUFBOEIsQ0FBQyxzREFBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRUFBeUI7QUFDekI7QUFDQSxFQUFFLDBEQUFTO0FBQ1gsQ0FBQzs7QUFFRCxtRkFBc0M7QUFDdEM7QUFDQSxFQUFFLDBEQUFTO0FBQ1gsQ0FBQzs7QUFFRCw0RUFBK0I7QUFDL0I7QUFDQSxFQUFFLDBEQUFTO0FBQ1gsQ0FBQzs7QUFFRCw2RUFBZ0M7QUFDaEM7QUFDQSxFQUFFLDBEQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9tYWluLmNzcz84MzMxIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcmVkTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZ3JvdyB7XFxuICAwJSB7XFxuICAgIG1heC1oZWlnaHQ6IDBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1kb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZG93bi1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcmVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1yaWdodC1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNyZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tbGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tbGVmdC1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiO1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDI0OCwgNTQsIDAsIDAuMjY3KSwgcmdiYSgyNDksIDIxMywgMzUsIDAuNTE0KSkgIWltcG9ydGFudDtcXG59XFxuXFxub3B0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2I5OTNkNiwgIzhjYTZkYik7XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZmZmY4ZSwgI2ZmZmZmZjUyIDMwJSwgI2ZmZmZmZmE4IDMwJSwgI2ZmZmZmZjNiIDMyJSwgI2ZmZmZmZjNiIDMyJSwgI2ZmZmZmZjBhIDkwJSwgI2ZmZmZmZmE4IDkwJSwgI2ZmZmZmZjA5IDkyJSwgI2ZmZmZmZjAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMjA7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcblxcbi5tb2JpbGUtYmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmZmZmOGUsICNmZmZmZmY1MiAzMCUsICNmZmZmZmZhOCAzMCUsICNmZmZmZmYzYiAzMiUsICNmZmZmZmYzYiAzMiUsICNmZmZmZmYwYSA5MCUsICNmZmZmZmZhOCA5MCUsICNmZmZmZmYwOSA5MiUsICNmZmZmZmYwMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICB3aWR0aDogNXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbn1cXG5cXG5uYXYgaW1nIHtcXG4gIG1pbi13aWR0aDogNnJlbTtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5tb2JpbGUtbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IGNsYW1wKDhyZW0sIDgwJSwgMjVyZW0pO1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIHRyYW5zaXRpb246IGhlaWdodDtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuXFxuLmZpbHRlcnMtY29udGFpbmVyLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxuICBhbmltYXRpb246IGdyb3cgMS41cztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogOTAlO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIgYnV0dG9uLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3Nyk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lciAuYWRkLXByb2plY3RfYnRuLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIC5hZGQtcHJvamVjdF9idG4ge1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5hZGQtcHJvamVjdF9fZm9ybSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLmFkZC1wcm9qZWN0X19mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSBidXR0b24ge1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMThyZW0pO1xcbiAgbWFyZ2luLXRvcDogMTByZW07XFxufVxcblxcbi5wYWdlLXRpdGxlX19jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbn1cXG4ucGFnZS10aXRsZV9fY29udGFpbmVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBQYWNpZmljbztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnBhZ2UtdGl0bGVfX2NvbnRhaW5lciAuZGVsZXRlLXByb2plY3RfX2J0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAxZDVkO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC02cmVtO1xcbiAgdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5hZGQtdGFza19fYnRuIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcztcXG4gIHdpZHRoOiA1cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi5hZGQtdGFza19fZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1MDtcXG4gIHRvcDogMzB2aDtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbi1kb3duIDAuOHM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgcm93LWdhcDogMC44cmVtO1xcbiAgY29sdW1uLWdhcDogMC41cmVtO1xcbiAgd2lkdGg6IGNsYW1wKDEwcmVtLCA5MCUsIDUwcmVtKTtcXG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjYpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbm1haW4gZm9ybSBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG5tYWluIGZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCxcXG5tYWluIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuaW5wdXQ6aG92ZXIsXFxuaW5wdXQ6YWN0aXZlLFxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpob3ZlcixcXG5zZWxlY3Q6YWN0aXZlLFxcbnNlbGVjdDpmb2N1cyxcXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmFjdGl2ZSxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjAxZDVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYWdlLXRpdGxlX19jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjNjc0M2JiICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHVsIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDJyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAycmVtO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB3aWR0aDogY2xhbXAoMTByZW0sIDkwJSwgNTByZW0pO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2tfX2J0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMS4ycmVtO1xcbiAgdG9wOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG4gIHdpZHRoOiAxLjJyZW07XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxubGkgaDIsXFxubGkgcCB7XFxuICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiBjbGFtcCg0cmVtLCA3NSUsIDQ1cmVtKTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubW9iaWxlLW1lbnUge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMS40cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgfVxcbiAgLm1vYmlsZS1tZW51IGRpdiB7XFxuICAgIHdpZHRoOiAwLjdyZW07XFxuICAgIGhlaWdodDogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NzQpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQ5KSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxuICB9XFxuXFxuICAubmF2LWJ1dHRvbnMge1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4tbGVmdCAwLjhzO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiBjbGFtcCgxMHJlbSwgNTB2dywgNDByZW0pO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gIH1cXG5cXG4gIC5uYXYtYnV0dG9ucyA+IGRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgfVxcblxcbiAgLndyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtY29udGFpbmVyIGJ1dHRvbixcXG4ucHJvamVjdHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjOWQ1Y2M0O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5hZGQtcHJvamVjdF9fY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWNvbnRhaW5lcixcXG4uYWRkLXByb2plY3RfX2NvbnRhaW5lciB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEwMywgNjcsIDE4NywgMC42MDMpO1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBbURBO0VBQ0U7SUFDRSxlQUFBO0VDbERGO0VEb0RBO0lBQ0UsaUJBQUE7RUNsREY7QUFDRjtBRHFEQTtFQUNFO0lBQ0UsV0FBQTtFQ25ERjtFRHFEQTtJQUNFLGFBQUE7RUNuREY7QUFDRjtBRHNEQTtFQUNFO0lBQ0UsYUFBQTtFQ3BERjtFRHNEQTtJQUNFLFdBQUE7RUNwREY7QUFDRjtBRHVEQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLDRCQUFBO0VDckRGO0VEdURBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0VDckRGO0FBQ0Y7QUR3REE7RUFDRTtJQUNFLGFB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QUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsNENBcmVjO0VDcWNoQjs7RURtQ0E7SUFDRSxpQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxnQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxnQkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0JBQUE7RUNoQ0Y7O0VEbUNBO0lBQ0UsNkJBQUE7SUFDQSxzQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxVQUFBO0VDaENGOztFRG1DQTs7SUFFRSxjQTlmVTtJQStmVixpQkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxlQUFBO0VDaENGOztFRG1DQTs7SUFFRSwrQ0FuZ0JjO0VDbWVoQjtBQUNGOztBQUVBLG1DQUFtQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2Ryb3BcIik7XG5jb25zdCBtb2JpbGVCYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLWJhY2tkcm9wXCIpO1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTkFWXG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpO1xuY29uc3QgbW9iaWxlTWVudURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUgZGl2XCIpO1xuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJ1dHRvbnNcIik7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0X2J0blwiKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG5cbi8vIC0tRklMVEVSU1xuXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XG5jb25zdCBmaWx0ZXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJzXCIpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuY29uc3QgZmlsdGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVycy1jb250YWluZXJcIik7XG5jb25zdCBkYWlseUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktZmlsdGVyXCIpO1xuY29uc3Qgd2Vla2x5RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrbHktZmlsdGVyXCIpO1xuY29uc3QgaGlnaFByaW9yaXR5RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ocC1maWx0ZXJcIik7XG5cbi8vIC0tLVBST0pFQ1QgRk9STSBDT05URU5UXG5jb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdF9fY29udGFpbmVyXCIpO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RfX2Zvcm1cIik7XG5jb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3QgcHJvamVjdEZvcm1DYW5jZWxCdG4gPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J2J1dHRvbiddXCIpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NQUlOXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrX19idG5cIik7XG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtY29udGFpbmVyXCIpO1xuXG4vLyAtLS1QQUdFIFRJVExFICsgQ0FOQ0VMIFBST0pFQ1RcblxuY29uc3QgcGFnZVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLXRpdGxlX19jb250YWluZXJcIik7XG5jb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5wYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcblxuLy8gLS0tVEFTSyBGT1JNIENPTlRFTlRcblxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrX19mb3JtXCIpO1xuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1kZXNjcmlwdGlvblwiKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1kdWUtZGF0ZVwiKTtcbmNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tcHJpb3JpdHlcIik7XG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JlbG9uZy1wcm9qZWN0XCIpO1xuY29uc3QgdGFza0Zvcm1DYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5hZGQtdGFza19fZm9ybSBidXR0b25bdHlwZT0nYnV0dG9uJ11cIlxuKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTE9HSUNcblxucHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHByaW9yaXR5SW5wdXQudmFsdWUgPT09IFwiaGlnaFwiKSB7XG4gICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgfSBlbHNlIHtcbiAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoLXByaW9yaXR5XCIpO1xuICB9XG59KTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgcGFnZVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoLXByaW9yaXR5XCIpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbn0pO1xuXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG59KTtcblxuZmlsdGVyc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG59KTtcblxucHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xufSk7XG5cbmZvciAobGV0IGZpbHRlciBvZiBbLi4uZmlsdGVyc0NvbnRhaW5lci5jaGlsZHJlbl0pIHtcbiAgZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTU9CSUxFXG5cbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICBuYXZCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgbW9iaWxlQmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gIGxldCBtb2JpbGUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgNjAwID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGlmIChtb2JpbGUpIHtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICBtb2JpbGVCYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtb3V0IDAuOHNcIjtcbiAgICBuYXZCdXR0b25zLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbi1sZWZ0LXJldmVyc2UgMC44c1wiO1xuICAgIG1vYmlsZU1lbnUuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluIDEuNnNcIjtcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbmF2QnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKFwiZmxleFwiKTtcbiAgICAgIG1vYmlsZUJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICAgIG1vYmlsZUJhY2tkcm9wLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgICBuYXZCdXR0b25zLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgfSwgODAwKTtcbiAgfVxufVxuXG5tb2JpbGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTWVudSk7XG5tb2JpbGVNZW51RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTWVudSk7XG5cbmV4cG9ydCB7XG4gIGJhY2tkcm9wLFxuICBtb2JpbGVCYWNrZHJvcCxcbiAgbmF2QnV0dG9ucyxcbiAgY2xvc2VNZW51LFxuICBuYXYsXG4gIGFkZFByb2plY3RCdG4sXG4gIHByb2plY3RzQ29udGFpbmVyLFxuICBpbmJveEJ0bixcbiAgZmlsdGVyc0NvbnRhaW5lcixcbiAgZGFpbHlGaWx0ZXJCdG4sXG4gIHdlZWtseUZpbHRlckJ0bixcbiAgaGlnaFByaW9yaXR5RmlsdGVyQnRuLFxuICBhZGRQcm9qZWN0Q29udGFpbmVyLFxuICBwcm9qZWN0Rm9ybSxcbiAgcHJvamVjdEZvcm1JbnB1dCxcbiAgcHJvamVjdEZvcm1DYW5jZWxCdG4sXG4gIHBhZ2VUaXRsZUNvbnRhaW5lcixcbiAgcGFnZVRpdGxlLFxuICBtYWluLFxuICBhZGRUYXNrQnRuLFxuICB1bCxcbiAgbGlzdENvbnRhaW5lcixcbiAgdGFza0Zvcm0sXG4gIGRlc2NyaXB0aW9uSW5wdXQsXG4gIGR1ZURhdGVJbnB1dCxcbiAgcHJpb3JpdHlJbnB1dCxcbiAgcHJvamVjdElucHV0LFxuICB0YXNrRm9ybUNhbmNlbEJ0bixcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVGaWx0ZXJlZExpc3QoZmlsdGVyVHlwZSwgb3JpZ2luTGlzdCwgcHJvamVjdE5hbWUgPSBcIlwiKSB7XG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNwbGl0KFwiIFwiKS5zbGljZSgwLCA0KS5qb2luKFwiIFwiKTtcbiAgbGV0IGZpbHRlcmVkQXJyYXk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluYm94XG5cbiAgaWYgKGZpbHRlclR5cGUgPT09IFwiaW5ib3hcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIUCBmaWx0ZXJcbiAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcImhpZ2ggcHJpb3JpdHlcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiB0YXNrLnRhc2tPYmoucHJpb3JpdHkgPT09IFwiaGlnaFwiXG4gICAgKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGFpbHkgZmlsdGVyXG4gIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tPYmouZHVlRGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuc2xpY2UoMCwgNClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHRhc2tEYXRlID09PSBjdXJyZW50RGF0ZTtcbiAgICB9KTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2Vla2x5IGZpbHRlclxuICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwid2Vla1wiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB3ZWVrID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xuXG4gICAgICBsZXQgdGFza0RhdGVBcnIgPSBuZXcgRGF0ZSh0YXNrLnRhc2tPYmouZHVlRGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuc2xpY2UoMCwgNCk7XG4gICAgICBsZXQgdGFza01vbnRoID0gdGFza0RhdGVBcnJbMV07XG4gICAgICBsZXQgdGFza0RheSA9IHRhc2tEYXRlQXJyWzJdO1xuICAgICAgbGV0IHRhc2tZZWFyID0gdGFza0RhdGVBcnJbM107XG4gICAgICBsZXQgY3VycmVudERheSA9IE51bWJlcihjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMl0pO1xuICAgICAgbGV0IGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVsxXTtcbiAgICAgIGxldCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVszXTtcbiAgICAgIGxldCB3ZWVrSW5kZXggPSB3ZWVrLmluZGV4T2YoY3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzBdKTtcblxuICAgICAgY29uc3QgbW9udGhzID0ge1xuICAgICAgICBhbGw6IFtcbiAgICAgICAgICBcIkphblwiLFxuICAgICAgICAgIFwiRmViXCIsXG4gICAgICAgICAgXCJNYXJcIixcbiAgICAgICAgICBcIkFwclwiLFxuICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgXCJKdW5cIixcbiAgICAgICAgICBcIkp1bFwiLFxuICAgICAgICAgIFwiQXVnXCIsXG4gICAgICAgICAgXCJTZXBcIixcbiAgICAgICAgICBcIk9jdFwiLFxuICAgICAgICAgIFwiTm92XCIsXG4gICAgICAgICAgXCJEZWNcIixcbiAgICAgICAgXSxcbiAgICAgICAgMzE6IFtcIkphblwiLCBcIk1hclwiLCBcIk1heVwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIk9jdFwiLCBcIkRlY1wiXSxcbiAgICAgICAgMzA6IFtcIkFwclwiLCBcIkp1blwiLCBcIlNlcFwiLCBcIk5vdlwiXSxcbiAgICAgICAgMjk6IE51bWJlcihjdXJyZW50WWVhcikgJSA0ID09PSAwID8gW1wiRmViXCJdIDogW10sXG4gICAgICAgIDI4OiBOdW1iZXIoY3VycmVudFllYXIpICUgNCA9PT0gMCA/IFtdIDogW1wiRmViXCJdLFxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgaSA9IHdlZWtJbmRleDsgaSA8PSB3ZWVrSW5kZXggKyA2OyBpKyspIHtcbiAgICAgICAgbGV0IHRoaXNXZWVrRGF5ID0gY3VycmVudERheSArICg2IC0gaSk7XG4gICAgICAgIGxldCB0aGlzV2Vla01vbnRoID0gY3VycmVudE1vbnRoO1xuICAgICAgICBsZXQgdGhpc1dlZWtZZWFyID0gY3VycmVudFllYXI7XG5cbiAgICAgICAgLy8gLS0tR0VUIFRPIE5FWFQgTU9OVEgvWUVBUlxuXG4gICAgICAgIGZ1bmN0aW9uIHNldE5leHRNb250aFllYXIoKSB7XG4gICAgICAgICAgaWYgKHRoaXNXZWVrTW9udGggPT09IFwiRGVjXCIpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrTW9udGggPSBcIkphblwiO1xuICAgICAgICAgICAgdGhpc1dlZWtZZWFyID0gKE51bWJlcih0aGlzV2Vla1llYXIpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1dlZWtNb250aCA9IG1vbnRocy5hbGxbbW9udGhzLmFsbC5pbmRleE9mKHRoaXNXZWVrTW9udGgpICsgMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0UHJldmlvdXNNb250aFllYXIoKSB7XG4gICAgICAgICAgaWYgKHRoaXNXZWVrTW9udGggPT09IFwiSmFuXCIpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrTW9udGggPSBcIkRlY1wiO1xuICAgICAgICAgICAgdGhpc1dlZWtZZWFyID0gKE51bWJlcih0aGlzV2Vla1llYXIpIC0gMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1dlZWtNb250aCA9IG1vbnRocy5hbGxbbW9udGhzLmFsbC5pbmRleE9mKHRoaXNXZWVrTW9udGgpIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vbnRoc1szMV0uaW5jbHVkZXModGhpc1dlZWtNb250aCkgJiYgdGhpc1dlZWtEYXkgPiAzMSkge1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXkgLSAzMTtcbiAgICAgICAgICBzZXROZXh0TW9udGhZZWFyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9udGhzWzMwXS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSAmJiB0aGlzV2Vla0RheSA+IDMwKSB7XG4gICAgICAgICAgc2V0TmV4dE1vbnRoWWVhcigpO1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXkgLSAzMDtcbiAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMjldLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpICYmIHRoaXNXZWVrRGF5ID4gMjkpIHtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5IC0gMjk7XG4gICAgICAgICAgc2V0TmV4dE1vbnRoWWVhcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1syOF0uaW5jbHVkZXModGhpc1dlZWtNb250aCkgJiYgdGhpc1dlZWtEYXkgPiAyOCkge1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXkgLSAyODtcbiAgICAgICAgICBzZXROZXh0TW9udGhZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS1HRVQgVE8gUFJFVklPVVMgTU9OVEgvWUVBUlxuICAgICAgICBlbHNlIGlmICh0aGlzV2Vla0RheSA8IDEpIHtcbiAgICAgICAgICBzZXRQcmV2aW91c01vbnRoWWVhcigpO1xuXG4gICAgICAgICAgaWYgKG1vbnRoc1szMV0uaW5jbHVkZXModGhpc1dlZWtNb250aCkpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrRGF5ID0gMzEgKyB0aGlzV2Vla0RheTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1szMF0uaW5jbHVkZXModGhpc1dlZWtNb250aCkpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrRGF5ID0gMzAgKyB0aGlzV2Vla0RheTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1syOV0uaW5jbHVkZXModGhpc1dlZWtNb250aCkpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrRGF5ID0gMjkgKyB0aGlzV2Vla0RheTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1syOF0uaW5jbHVkZXModGhpc1dlZWtNb250aCkpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrRGF5ID0gMjggKyB0aGlzV2Vla0RheTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS1OT1JNQUwgQkVIQVZJT1JcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpc1dlZWtEYXkgPSB0aGlzV2Vla0RheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBgJHtOdW1iZXIodGFza0RheSl9ICR7dGFza01vbnRofSAke3Rhc2tZZWFyfWAgPT09XG4gICAgICAgICAgYCR7dGhpc1dlZWtEYXl9ICR7dGhpc1dlZWtNb250aH0gJHt0aGlzV2Vla1llYXJ9YFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmaWx0ZXIgYnkgcHJvamVjdFxuICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwicHJvamVjdFwiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKFxuICAgICAgKHRhc2spID0+IHByb2plY3ROYW1lID09PSB0YXNrLnRhc2tPYmoucHJvamVjdFxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJlZEFycmF5Lm1hcCgodGFzaykgPT4ge1xuICAgIGZpbHRlcmVkTGlzdC5hcHBlbmRDaGlsZCh0YXNrLnRhc2tFbCk7XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZExpc3Q7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZpbHRlcmVkTGlzdCB9O1xuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPVxuICAgICAgZHVlRGF0ZSA9PT0gXCJcIlxuICAgICAgICA/IFwiXCJcbiAgICAgICAgOiBuZXcgRGF0ZShkdWVEYXRlKS50b1N0cmluZygpLnNwbGl0KFwiIFwiKS5zbGljZSgxLCA0KS5qb2luKFwiIFwiKTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICBjb25zdCB0YXNrT2JqID0gbmV3IFRhc2soZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcblxuICBsZXQgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tPYmoucHJvamVjdCA9PT0gXCJcIiA/IFwiXCIgOiB0YXNrT2JqLnByb2plY3Q7XG4gIHRhc2tUaXRsZS5jbGFzc05hbWUgPSBcInRhc2stdGl0bGVcIjtcblxuICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tPYmouZGVzY3JpcHRpb247XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInRhc2stZGVzY3JpcHRpb25cIjtcblxuICBsZXQgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0YXNrT2JqLmR1ZURhdGUpO1xuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tPYmouZHVlRGF0ZSA9PT0gXCJcIiA/IFwiXCIgOmAke2RhdGUuZ2V0RGF0ZSgpID49IDEwID8gZGF0ZS5nZXREYXRlKCk6IGAwJHtkYXRlLmdldERhdGUoKX1gfS0ke2RhdGUuZ2V0TW9udGgoKSArIDEgPj0gMTAgPyBkYXRlLmdldE1vbnRoKCkgKyAxOiBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gfS0ke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICB0YXNrRHVlRGF0ZS5jbGFzc05hbWUgPSBcInRhc2stZGF0ZVwiO1xuXG4gIGlmICh0YXNrT2JqLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgfSBcblxuICBsZXQgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVRhc2tCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtdGFza19fYnRuXCI7XG5cbiAgaWYgKHRhc2tUaXRsZS50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB9ZWxzZSB7XG4gICAgdGFza0R1ZURhdGUuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDNcIlxuICB9XG5cbiAgaWYgKHRhc2tUaXRsZS50ZXh0Q29udGVudCAhPT0gXCJcIiB8fCB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS5ncmlkUm93ID0gXCIyIC8gM1wiO1xuICB9XG5cbiAgaWYgKHRhc2tEdWVEYXRlLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgfVxuXG4gIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICB0YXNrRWwuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG5cbiAgcmV0dXJuIHsgdGFza0VsLCB0YXNrT2JqIH07XG59XG5cbmV4cG9ydCB7IFRhc2ssIGNyZWF0ZVRhc2sgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUsIG9wdGlvblBhcmVudCwgYnRuUGFyZW50KSB7XG4gIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24udmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIG9wdGlvblBhcmVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgYnRuUGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcblxuICByZXR1cm4geyBvcHRpb24sIGJ1dHRvbiwgbmFtZSB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lLCBvcmlnaW5hbEFycmF5LCBzZWxlY3QsIHByb2pDb250YWluZXIpIHtcbiAgZm9yIChsZXQgdGFzayBvZiBvcmlnaW5hbEFycmF5KSB7XG4gICAgaWYgKHRhc2sudGFza09iai5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgb3JpZ2luYWxBcnJheS5zcGxpY2Uob3JpZ2luYWxBcnJheS5pbmRleE9mKHRhc2spLCAxKTtcbiAgICB9XG4gIH1cblxuICBsZXQgb3B0aW9ucyA9IFsuLi5zZWxlY3QuY2hpbGRyZW5dO1xuICBsZXQgaW5kZXggPSBvcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24udGV4dENvbnRlbnQgPT09IHByb2plY3ROYW1lKTtcblxuICBzZWxlY3QucmVtb3ZlQ2hpbGQoc2VsZWN0LmNoaWxkcmVuW2luZGV4XSk7XG5cbiAgbGV0IHByb2plY3RzID0gWy4uLnByb2pDb250YWluZXIuY2hpbGRyZW5dO1xuICBsZXQgaW5kZXgyID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZVxuICApO1xuICBwcm9qQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2pDb250YWluZXIuY2hpbGRyZW5baW5kZXgyXSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QgfTtcbiIsImZ1bmN0aW9uIGFkZFRhc2soY29udGFpbmVyLCB0YXNrLCBzdG9yYWdlQXJyYXkpIHtcbiAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5hcHBlbmRDaGlsZCh0YXNrLnRhc2tFbCk7XG4gIHN0b3JhZ2VBcnJheS5wdXNoKHRhc2spO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGNvbnRhaW5lciwgdGFzaywgc3RvcmFnZUFycmF5KSB7XG4gIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwidWxcIikucmVtb3ZlQ2hpbGQodGFzay50YXNrRWwpO1xuICBzdG9yYWdlQXJyYXkuc3BsaWNlKHN0b3JhZ2VBcnJheS5pbmRleE9mKHRhc2spLCAxKTtcbn1cblxuZXhwb3J0IHsgYWRkVGFzaywgcmVtb3ZlVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUvbWFpbi5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jb21wb25lbnRzL25ld1Rhc2tcIjtcbmltcG9ydCB7IGFkZFRhc2ssIHJlbW92ZVRhc2sgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2tzXCI7XG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXJlZExpc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbHRlcmVkTGlzdHNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RcIjtcbmltcG9ydCB7XG4gIGJhY2tkcm9wLFxuICBtb2JpbGVCYWNrZHJvcCxcbiAgY2xvc2VNZW51LFxuICBhZGRQcm9qZWN0QnRuLFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgaW5ib3hCdG4sXG4gIGRhaWx5RmlsdGVyQnRuLFxuICB3ZWVrbHlGaWx0ZXJCdG4sXG4gIGhpZ2hQcmlvcml0eUZpbHRlckJ0bixcbiAgYWRkUHJvamVjdENvbnRhaW5lcixcbiAgcHJvamVjdEZvcm0sXG4gIHByb2plY3RGb3JtSW5wdXQsXG4gIHByb2plY3RGb3JtQ2FuY2VsQnRuLFxuICBwYWdlVGl0bGVDb250YWluZXIsXG4gIHBhZ2VUaXRsZSxcbiAgbGlzdENvbnRhaW5lcixcbiAgdGFza0Zvcm0sXG4gIGRlc2NyaXB0aW9uSW5wdXQsXG4gIGR1ZURhdGVJbnB1dCxcbiAgcHJpb3JpdHlJbnB1dCxcbiAgcHJvamVjdElucHV0LFxuICB0YXNrRm9ybUNhbmNlbEJ0bixcbiAgYWRkVGFza0J0bixcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9ET01cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUYXNrcyBoYW5kbGluZ1xuXG5jb25zdCBvbGRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrT2JqZWN0c1wiKSk7XG5cbmNvbnN0IHRhc2tMaXN0ID0gW107XG5cbmlmIChvbGRUYXNrcyAhPT0gbnVsbCkge1xuICBmb3IgKGxldCBvYmogb2Ygb2xkVGFza3MpIHtcbiAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2soXG4gICAgICBvYmouZGVzY3JpcHRpb24sXG4gICAgICBvYmouZHVlRGF0ZSxcbiAgICAgIG9iai5wcmlvcml0eSxcbiAgICAgIG9iai5wcm9qZWN0XG4gICAgKTtcbiAgICBhZGRUYXNrKGxpc3RDb250YWluZXIsIHRhc2ssIHRhc2tMaXN0KTtcblxuICAgIGxldCBkZWxldGVUYXNrQnRuID0gWy4uLnRhc2sudGFza0VsLmNoaWxkcmVuXS5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc05hbWUgPT09IFwiZGVsZXRlLXRhc2tfX2J0blwiXG4gICAgKVswXTtcbiAgXG4gICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluLXJpZ2h0LXJldmVyc2UgMC44c1wiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRhc2sudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgICAgIHJlbW92ZVRhc2sobGlzdENvbnRhaW5lciwgdGFzaywgdGFza0xpc3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tPYmplY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0Lm1hcCh0YXNrID0+IHRhc2sudGFza09iaikpKTtcbiAgICAgIH0sIDgwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3Qgb2xkUHJvamVjdHNMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzTGlzdFwiKSk7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG5pZiAob2xkUHJvamVjdHNMaXN0ICE9PSBudWxsKSB7XG4gIGZvciAobGV0IHByb2plY3ROYW1lIG9mIG9sZFByb2plY3RzTGlzdCkge1xuICAgIGxldCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcbiAgICAgIHByb2plY3ROYW1lLFxuICAgICAgcHJvamVjdElucHV0LFxuICAgICAgcHJvamVjdHNDb250YWluZXJcbiAgICApO1xuXG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdE5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuXG5cbiAgICBwcm9qZWN0LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVyZW5kZXJVbChcInByb2plY3RcIiwgcHJvamVjdE5hbWUpO1xuXG4gICAgICAvLyAtLS1SRU1PVkUgUFJPSkVDVFxuXG4gICAgICBwYWdlVGl0bGVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuICAgICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcblxuICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS1wcm9qZWN0X19idG5cIjtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUsIHRhc2tMaXN0LCBwcm9qZWN0SW5wdXQsIHByb2plY3RzQ29udGFpbmVyKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShwcm9qZWN0c0xpc3QuaW5kZXhPZihwcm9qZWN0TmFtZSksIDEpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgICAgICByZXJlbmRlclVsKFwiaW5ib3hcIik7XG4gICAgICB9KTtcblxuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIH0pXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQUREIFRBU0sgRk9STSBMT0dJQ1xuXG5kZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlLnRyaW0oKTtcbn0pXG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gIHRhc2tGb3JtLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbi1kb3duLXJldmVyc2UgMC44c1wiO1xuICBiYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtb3V0IDAuOHNcIjtcbiAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgcGFnZVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXNrRm9ybS5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIGJhY2tkcm9wLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IFwibm9ybWFsXCI7XG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIH0sIDgwMCk7XG59XG5cbmJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRhc2tGb3JtKTtcblxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXG4gIGxldCB0YXNrID0gY3JlYXRlVGFzayhcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxuICAgIHByb2plY3RJbnB1dC52YWx1ZVxuICApO1xuXG4gIGNsb3NlVGFza0Zvcm0oKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tcmlnaHQgMXNcIjtcbiAgICBhZGRUYXNrKGxpc3RDb250YWluZXIsIHRhc2ssIHRhc2tMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tPYmplY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0Lm1hcCh0YXNrID0+IHRhc2sudGFza09iaikpKTtcbiAgfSwgNDAwKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICB9LCAxNDAwKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERlbGV0ZSB0YXNrIGZ1bmN0aW9uYWxpdHlcblxuICBsZXQgZGVsZXRlVGFza0J0biA9IFsuLi50YXNrLnRhc2tFbC5jaGlsZHJlbl0uZmlsdGVyKFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJkZWxldGUtdGFza19fYnRuXCJcbiAgKVswXTtcblxuICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluLXJpZ2h0LXJldmVyc2UgMC44c1wiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgIHJlbW92ZVRhc2sobGlzdENvbnRhaW5lciwgdGFzaywgdGFza0xpc3QpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrT2JqZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdC5tYXAodGFzayA9PiB0YXNrLnRhc2tPYmopKSk7XG4gICAgfSwgODAwKTtcbiAgfSk7XG59KTtcblxudGFza0Zvcm1DYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0Zvcm0pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFByb2plY3RzIGhhbmRsaW5nXG5cbi8vIC0tLUFERCBQUk9KRUNUXG5cbmZ1bmN0aW9uIGNsb3NlQWRkUHJvamVjdEZvcm0oKSB7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHByb2plY3RGb3JtSW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG59KTtcblxucHJvamVjdEZvcm1DYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQWRkUHJvamVjdEZvcm0pO1xuXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmIChwcm9qZWN0Rm9ybUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIiAmJiAhcHJvamVjdHNMaXN0LmluY2x1ZGVzKHByb2plY3RGb3JtSW5wdXQudmFsdWUudHJpbSgpKSkge1xuICAgIGxldCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcbiAgICAgIHByb2plY3RGb3JtSW5wdXQudmFsdWUudHJpbSgpLFxuICAgICAgcHJvamVjdElucHV0LFxuICAgICAgcHJvamVjdHNDb250YWluZXJcbiAgICApO1xuXG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdC5uYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcblxuXG4gICAgcHJvamVjdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlcmVuZGVyVWwoXCJwcm9qZWN0XCIsIHByb2plY3QubmFtZSk7XG5cbiAgICAgIC8vIC0tLVJFTU9WRSBQUk9KRUNUXG5cbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcblxuICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS1wcm9qZWN0X19idG5cIjtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdC5uYW1lLCB0YXNrTGlzdCwgcHJvamVjdElucHV0LCBwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UocHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdC5uYW1lKSwgMSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgICAgIHJlcmVuZGVyVWwoXCJpbmJveFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgICBjbG9zZU1lbnUoKTtcbiAgICB9KTtcbiAgfVxuICBjbG9zZUFkZFByb2plY3RGb3JtKCk7XG59KTtcblxuLy8gLS0tTU9CSUxFIENMT1NFIEFERCBQUk9KRUNUIEZPUk1cblxubW9iaWxlQmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY2xvc2VBZGRQcm9qZWN0Rm9ybSgpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZpbHRlciBoYW5kbGluZ1xuXG5mdW5jdGlvbiByZXJlbmRlclVsKGZpbHRlclR5cGUsIHByb2plY3ROYW1lID0gXCJcIikge1xuICBsZXQgbmV3VWxMaXN0ID0gY3JlYXRlRmlsdGVyZWRMaXN0KGZpbHRlclR5cGUsIHRhc2tMaXN0LCBwcm9qZWN0TmFtZSk7XG4gIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdVbExpc3QpO1xuICBwYWdlVGl0bGVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID1cbiAgICBmaWx0ZXJUeXBlID09PSBcImluYm94XCJcbiAgICAgID8gXCJJbmJveFwiXG4gICAgICA6IGZpbHRlclR5cGUgPT09IFwiaGlnaCBwcmlvcml0eVwiXG4gICAgICA/IFwiSGlnaCBwcmlvcml0eVwiXG4gICAgICA6IGZpbHRlclR5cGUgPT09IFwidG9kYXlcIlxuICAgICAgPyBcIlRvZGF5XCJcbiAgICAgIDogZmlsdGVyVHlwZSA9PT0gXCJ3ZWVrXCJcbiAgICAgID8gXCJUaGlzIHdlZWtcIlxuICAgICAgOiBmaWx0ZXJUeXBlID09PSBcInByb2plY3RcIlxuICAgICAgPyBwcm9qZWN0TmFtZVxuICAgICAgOiBcIlwiO1xuICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgZm9yIChsZXQgdCBvZiB0YXNrTGlzdCkge1xuICAgIHQudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbiAxLjRzXCI7XG4gIH1cbn1cblxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuXG5oaWdoUHJpb3JpdHlGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcImhpZ2ggcHJpb3JpdHlcIik7XG4gIGNsb3NlTWVudSgpO1xufSk7XG5cbmRhaWx5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJ0b2RheVwiKTtcbiAgY2xvc2VNZW51KCk7XG59KTtcblxud2Vla2x5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJ3ZWVrXCIpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9