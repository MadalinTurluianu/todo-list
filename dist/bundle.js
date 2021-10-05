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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsV0FBVyxVQUFVLFdBQVcsYUFBYSxRQUFRLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLGFBQWEsYUFBYSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxRQUFRLGFBQWEsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFX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QUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QzlCLEVBQUUsa0VBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJFQUE4QixDQUFDLHNEQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUF5QjtBQUN6QjtBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDOztBQUVELG1GQUFzQztBQUN0QztBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDOztBQUVELDRFQUErQjtBQUMvQjtBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDOztBQUVELDZFQUFnQztBQUNoQztBQUNBLEVBQUUsMERBQVM7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uY3NzPzgzMzEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZmlsdGVyZWRMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBncm93IHtcXG4gIDAlIHtcXG4gICAgbWF4LWhlaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG1heC1oZWlnaHQ6IDZyZW07XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluLWRvd24tcmV2ZXJzZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluLXJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3JlbSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tcmlnaHQtcmV2ZXJzZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcmVtKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluLWxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluLWxlZnQtcmV2ZXJzZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIjtcXG4gIGNvbG9yOiAjNjc0M2JiO1xcbn1cXG5cXG4uaW5hY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyNDgsIDU0LCAwLCAwLjI2NyksIHJnYmEoMjQ5LCAyMTMsIDM1LCAwLjUxNCkpICFpbXBvcnRhbnQ7XFxufVxcblxcbm9wdGlvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNiOTkzZDYsICM4Y2E2ZGIpO1xcbn1cXG5cXG4uYmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmZmZmOGUsICNmZmZmZmY1MiAzMCUsICNmZmZmZmZhOCAzMCUsICNmZmZmZmYzYiAzMiUsICNmZmZmZmYzYiAzMiUsICNmZmZmZmYwYSA5MCUsICNmZmZmZmZhOCA5MCUsICNmZmZmZmYwOSA5MiUsICNmZmZmZmYwMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbn1cXG5cXG4ubW9iaWxlLWJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZmZmZjhlLCAjZmZmZmZmNTIgMzAlLCAjZmZmZmZmYTggMzAlLCAjZmZmZmZmM2IgMzIlLCAjZmZmZmZmM2IgMzIlLCAjZmZmZmZmMGEgOTAlLCAjZmZmZmZmYTggOTAlLCAjZmZmZmZmMDkgOTIlLCAjZmZmZmZmMDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgd2lkdGg6IDVyZW07XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbm9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG59XFxuXFxubmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbTtcXG4gIGhlaWdodDogOHJlbTtcXG59XFxuXFxubmF2IGltZyB7XFxuICBtaW4td2lkdGg6IDZyZW07XFxuICB3aWR0aDogNnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdi1idXR0b25zIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiBjbGFtcCg4cmVtLCA4MCUsIDI1cmVtKTtcXG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNzgpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQ7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuXFxuLndyYXBwZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDhyZW07XFxufVxcblxcbi5maWx0ZXJzLWNvbnRhaW5lcixcXG4uYWRkLXByb2plY3RfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbiAgYW5pbWF0aW9uOiBncm93IDAuM3M7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLmZpbHRlcnMtY29udGFpbmVyIGJ1dHRvbixcXG4uYWRkLXByb2plY3RfX2NvbnRhaW5lciBidXR0b24ge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIgLmFkZC1wcm9qZWN0X2J0bixcXG4uYWRkLXByb2plY3RfX2NvbnRhaW5lciAuYWRkLXByb2plY3RfYnRuIHtcXG4gIGNvbG9yOiAjNjc0M2JiO1xcbn1cXG5cXG4uYWRkLXByb2plY3RfX2Zvcm0ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uYWRkLXByb2plY3RfX2Zvcm0gYnV0dG9uIHtcXG4gIGNvbG9yOiAjNjc0M2JiO1xcbn1cXG4uYWRkLXByb2plY3RfX2Zvcm0gLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWRkLXByb2plY3RfX2Zvcm0gLmJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogM3JlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcbn1cXG5cXG4ucGFnZS10aXRsZV9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG59XFxuLnBhZ2UtdGl0bGVfX2NvbnRhaW5lciBoMiB7XFxuICBmb250LWZhbWlseTogUGFjaWZpY287XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3Nyk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5wYWdlLXRpdGxlX19jb250YWluZXIgLmRlbGV0ZS1wcm9qZWN0X19idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMWQ1ZDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNnJlbTtcXG4gIHRvcDogMXJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2tfX2J0biB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNzgpKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2tfX2Zvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogNTA7XFxuICB0b3A6IDMwdmg7XFxuICBhbmltYXRpb246IGZhZGUtaW4tZG93biAwLjhzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIHJvdy1nYXA6IDAuOHJlbTtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIHdpZHRoOiBjbGFtcCgxMHJlbSwgOTAlLCA1MHJlbSk7XFxuICBib3gtc2hhZG93OiAtMnB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNzgpKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5tYWluIGZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxubWFpbiBmb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuaW5wdXQsXFxubWFpbiBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbmlucHV0OmhvdmVyLFxcbmlucHV0OmFjdGl2ZSxcXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6aG92ZXIsXFxuc2VsZWN0OmFjdGl2ZSxcXG5zZWxlY3Q6Zm9jdXMsXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjphY3RpdmUsXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2YwMWQ1ZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGFnZS10aXRsZV9fY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzY3NDNiYiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB1bCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAycmVtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMnJlbTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIGF1dG87XFxuICB3aWR0aDogY2xhbXAoMTByZW0sIDkwJSwgNTByZW0pO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2tfX2J0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMS4ycmVtO1xcbiAgdG9wOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG4gIHdpZHRoOiAxLjJyZW07XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxubGkgaDIsXFxubGkgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm1vYmlsZS1tZW51IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEuNHJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gIH1cXG4gIC5tb2JpbGUtbWVudSBkaXYge1xcbiAgICB3aWR0aDogMC43cmVtO1xcbiAgICBoZWlnaHQ6IDAuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM0OSkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWxlZnQgMC44cztcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDMwO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogY2xhbXAoMTByZW0sIDUwdncsIDQwcmVtKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUzKTtcXG4gIH1cXG5cXG4gIC5uYXYtYnV0dG9ucyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5uYXYtYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICB9XFxuXFxuICAubmF2LWJ1dHRvbnMgPiBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXYtYnV0dG9ucyBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIH1cXG5cXG4gIC53cmFwcGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWNvbnRhaW5lciBidXR0b24sXFxuLnByb2plY3RzLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBjb2xvcjogIzlkNWNjNDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxuXFxuICAuYWRkLXByb2plY3RfX2NvbnRhaW5lciBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuZmlsdGVycy1jb250YWluZXIsXFxuLmFkZC1wcm9qZWN0X19jb250YWluZXIge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMDMsIDY3LCAxODcsIDAuNjAzKTtcXG4gIH1cXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQW1EQTtFQUNFO0lBQ0UsZUFBQTtFQ2xERjtFRG9EQTtJQUNFLGdCQUFBO0VDbERGO0FBQ0Y7QURxREE7RUFDRTtJQUNFLFdBQUE7RUNuREY7RURxREE7SUFDRSxhQUFBO0VDbkRGO0FBQ0Y7QURzREE7RUFDRTtJQUNFLGFBQUE7RUNwREY7RURzREE7SUFDRSxXQUFBO0VDcERGO0FBQ0Y7QUR1REE7RUFDRTtJQUNFLFdBQUE7SUFDQSw0QkFBQTtFQ3JERjtFRHVEQTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtFQ3JERjtBQUNGO0FEd0RBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7RUN0REY7RUR3REE7SUFDRSxXQUFBO0lBQ0EsNEJBQUE7RUN0REY7QUFDRjtBRHlEQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLDRCQUFBO0VDdkRGO0VEeURBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0VDdkRGO0FBQ0Y7QUQwREE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtFQ3hERjtFRDBEQTtJQUNFLFdBQUE7SUFDQSw0QkFBQTtFQ3hERjtBQUNGO0FEMkRBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsMkJBQUE7RUN6REY7RUQyREE7SUFDRSxhQUFBO0lBQ0Esd0JBQUE7RUN6REY7QUFDRjtBRDREQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHdCQUFBO0VDMURGO0VENERBO0lBQ0UsV0FBQTtJQUNBLDJCQUFBO0VDMURGO0FBQ0Y7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ZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2Ryb3BcIik7XG5jb25zdCBtb2JpbGVCYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLWJhY2tkcm9wXCIpO1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTkFWXG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpO1xuY29uc3QgbW9iaWxlTWVudURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUgZGl2XCIpO1xuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJ1dHRvbnNcIik7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0X2J0blwiKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG5cbi8vIC0tRklMVEVSU1xuXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XG5jb25zdCBmaWx0ZXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJzXCIpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuY29uc3QgZmlsdGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVycy1jb250YWluZXJcIik7XG5jb25zdCBkYWlseUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktZmlsdGVyXCIpO1xuY29uc3Qgd2Vla2x5RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrbHktZmlsdGVyXCIpO1xuY29uc3QgaGlnaFByaW9yaXR5RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ocC1maWx0ZXJcIik7XG5cbi8vIC0tLVBST0pFQ1QgRk9STSBDT05URU5UXG5jb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdF9fY29udGFpbmVyXCIpO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RfX2Zvcm1cIik7XG5jb25zdCBwcm9qZWN0Rm9ybUlucHV0ID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3QgcHJvamVjdEZvcm1DYW5jZWxCdG4gPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J2J1dHRvbiddXCIpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NQUlOXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrX19idG5cIik7XG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtY29udGFpbmVyXCIpO1xuXG4vLyAtLS1QQUdFIFRJVExFICsgQ0FOQ0VMIFBST0pFQ1RcblxuY29uc3QgcGFnZVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLXRpdGxlX19jb250YWluZXJcIik7XG5jb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5wYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcblxuLy8gLS0tVEFTSyBGT1JNIENPTlRFTlRcblxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrX19mb3JtXCIpO1xuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1kZXNjcmlwdGlvblwiKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1kdWUtZGF0ZVwiKTtcbmNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tcHJpb3JpdHlcIik7XG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JlbG9uZy1wcm9qZWN0XCIpO1xuY29uc3QgdGFza0Zvcm1DYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5hZGQtdGFza19fZm9ybSBidXR0b25bdHlwZT0nYnV0dG9uJ11cIlxuKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTE9HSUNcblxucHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHByaW9yaXR5SW5wdXQudmFsdWUgPT09IFwiaGlnaFwiKSB7XG4gICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgfSBlbHNlIHtcbiAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoLXByaW9yaXR5XCIpO1xuICB9XG59KTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICB0YXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2gtcHJpb3JpdHlcIik7XG4gIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xufSk7XG5cbmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbn0pO1xuXG5maWx0ZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbn0pO1xuXG5wcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG59KTtcblxuZm9yIChsZXQgZmlsdGVyIG9mIFsuLi5maWx0ZXJzQ29udGFpbmVyLmNoaWxkcmVuXSkge1xuICBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NT0JJTEVcblxuZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gIG5hdkJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG4gIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBtb2JpbGVCYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgbGV0IG1vYmlsZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA2MDAgPyB0cnVlIDogZmFsc2U7XG5cbiAgaWYgKG1vYmlsZSkge1xuICAgIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgIG1vYmlsZUJhY2tkcm9wLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1vdXQgMC44c1wiO1xuICAgIG5hdkJ1dHRvbnMuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluLWxlZnQtcmV2ZXJzZSAwLjhzXCI7XG4gICAgbW9iaWxlTWVudS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4gMS42c1wiO1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBuYXZCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoXCJmbGV4XCIpO1xuICAgICAgbW9iaWxlQmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgbW9iaWxlQmFja2Ryb3Auc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgIG5hdkJ1dHRvbnMuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICB9LCA4MDApO1xuICB9XG59XG5cbm1vYmlsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5NZW51KTtcbm1vYmlsZU1lbnVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5NZW51KTtcblxuZXhwb3J0IHtcbiAgYmFja2Ryb3AsXG4gIG1vYmlsZUJhY2tkcm9wLFxuICBuYXZCdXR0b25zLFxuICBjbG9zZU1lbnUsXG4gIG5hdixcbiAgYWRkUHJvamVjdEJ0bixcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIGluYm94QnRuLFxuICBmaWx0ZXJzQ29udGFpbmVyLFxuICBkYWlseUZpbHRlckJ0bixcbiAgd2Vla2x5RmlsdGVyQnRuLFxuICBoaWdoUHJpb3JpdHlGaWx0ZXJCdG4sXG4gIGFkZFByb2plY3RDb250YWluZXIsXG4gIHByb2plY3RGb3JtLFxuICBwcm9qZWN0Rm9ybUlucHV0LFxuICBwcm9qZWN0Rm9ybUNhbmNlbEJ0bixcbiAgcGFnZVRpdGxlQ29udGFpbmVyLFxuICBwYWdlVGl0bGUsXG4gIG1haW4sXG4gIGFkZFRhc2tCdG4sXG4gIHVsLFxuICBsaXN0Q29udGFpbmVyLFxuICB0YXNrRm9ybSxcbiAgZGVzY3JpcHRpb25JbnB1dCxcbiAgZHVlRGF0ZUlucHV0LFxuICBwcmlvcml0eUlucHV0LFxuICBwcm9qZWN0SW5wdXQsXG4gIHRhc2tGb3JtQ2FuY2VsQnRuLFxufTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUZpbHRlcmVkTGlzdChmaWx0ZXJUeXBlLCBvcmlnaW5MaXN0LCBwcm9qZWN0TmFtZSA9IFwiXCIpIHtcbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIDQpLmpvaW4oXCIgXCIpO1xuICBsZXQgZmlsdGVyZWRBcnJheTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5ib3hcblxuICBpZiAoZmlsdGVyVHlwZSA9PT0gXCJpbmJveFwiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3Q7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEhQIGZpbHRlclxuICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwiaGlnaCBwcmlvcml0eVwiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKFxuICAgICAgKHRhc2spID0+IHRhc2sudGFza09iai5wcmlvcml0eSA9PT0gXCJoaWdoXCJcbiAgICApO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYWlseSBmaWx0ZXJcbiAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcInRvZGF5XCIpIHtcbiAgICBmaWx0ZXJlZEFycmF5ID0gb3JpZ2luTGlzdC5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2sudGFza09iai5kdWVEYXRlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5zbGljZSgwLCA0KVxuICAgICAgICAuam9pbihcIiBcIik7XG4gICAgICByZXR1cm4gdGFza0RhdGUgPT09IGN1cnJlbnREYXRlO1xuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3ZWVrbHkgZmlsdGVyXG4gIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJ3ZWVrXCIpIHtcbiAgICBmaWx0ZXJlZEFycmF5ID0gb3JpZ2luTGlzdC5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHdlZWsgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XG5cbiAgICAgIGxldCB0YXNrRGF0ZUFyciA9IG5ldyBEYXRlKHRhc2sudGFza09iai5kdWVEYXRlKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5zbGljZSgwLCA0KTtcbiAgICAgIGxldCB0YXNrTW9udGggPSB0YXNrRGF0ZUFyclsxXTtcbiAgICAgIGxldCB0YXNrRGF5ID0gdGFza0RhdGVBcnJbMl07XG4gICAgICBsZXQgdGFza1llYXIgPSB0YXNrRGF0ZUFyclszXTtcbiAgICAgIGxldCBjdXJyZW50RGF5ID0gTnVtYmVyKGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVsyXSk7XG4gICAgICBsZXQgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzFdO1xuICAgICAgbGV0IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzNdO1xuICAgICAgbGV0IHdlZWtJbmRleCA9IHdlZWsuaW5kZXhPZihjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMF0pO1xuXG4gICAgICBjb25zdCBtb250aHMgPSB7XG4gICAgICAgIGFsbDogW1xuICAgICAgICAgIFwiSmFuXCIsXG4gICAgICAgICAgXCJGZWJcIixcbiAgICAgICAgICBcIk1hclwiLFxuICAgICAgICAgIFwiQXByXCIsXG4gICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICBcIkp1blwiLFxuICAgICAgICAgIFwiSnVsXCIsXG4gICAgICAgICAgXCJBdWdcIixcbiAgICAgICAgICBcIlNlcFwiLFxuICAgICAgICAgIFwiT2N0XCIsXG4gICAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgICBcIkRlY1wiLFxuICAgICAgICBdLFxuICAgICAgICAzMTogW1wiSmFuXCIsIFwiTWFyXCIsIFwiTWF5XCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiT2N0XCIsIFwiRGVjXCJdLFxuICAgICAgICAzMDogW1wiQXByXCIsIFwiSnVuXCIsIFwiU2VwXCIsIFwiTm92XCJdLFxuICAgICAgICAyOTogTnVtYmVyKGN1cnJlbnRZZWFyKSAlIDQgPT09IDAgPyBbXCJGZWJcIl0gOiBbXSxcbiAgICAgICAgMjg6IE51bWJlcihjdXJyZW50WWVhcikgJSA0ID09PSAwID8gW10gOiBbXCJGZWJcIl0sXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBpID0gd2Vla0luZGV4OyBpIDw9IHdlZWtJbmRleCArIDY7IGkrKykge1xuICAgICAgICBsZXQgdGhpc1dlZWtEYXkgPSBjdXJyZW50RGF5ICsgKDYgLSBpKTtcbiAgICAgICAgbGV0IHRoaXNXZWVrTW9udGggPSBjdXJyZW50TW9udGg7XG4gICAgICAgIGxldCB0aGlzV2Vla1llYXIgPSBjdXJyZW50WWVhcjtcblxuICAgICAgICAvLyAtLS1HRVQgVE8gTkVYVCBNT05USC9ZRUFSXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0TmV4dE1vbnRoWWVhcigpIHtcbiAgICAgICAgICBpZiAodGhpc1dlZWtNb250aCA9PT0gXCJEZWNcIikge1xuICAgICAgICAgICAgdGhpc1dlZWtNb250aCA9IFwiSmFuXCI7XG4gICAgICAgICAgICB0aGlzV2Vla1llYXIgPSAoTnVtYmVyKHRoaXNXZWVrWWVhcikgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzV2Vla01vbnRoID0gbW9udGhzLmFsbFttb250aHMuYWxsLmluZGV4T2YodGhpc1dlZWtNb250aCkgKyAxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRQcmV2aW91c01vbnRoWWVhcigpIHtcbiAgICAgICAgICBpZiAodGhpc1dlZWtNb250aCA9PT0gXCJKYW5cIikge1xuICAgICAgICAgICAgdGhpc1dlZWtNb250aCA9IFwiRGVjXCI7XG4gICAgICAgICAgICB0aGlzV2Vla1llYXIgPSAoTnVtYmVyKHRoaXNXZWVrWWVhcikgLSAxKS50b1N0cmluZygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzV2Vla01vbnRoID0gbW9udGhzLmFsbFttb250aHMuYWxsLmluZGV4T2YodGhpc1dlZWtNb250aCkgLSAxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9udGhzWzMxXS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSAmJiB0aGlzV2Vla0RheSA+IDMxKSB7XG4gICAgICAgICAgdGhpc1dlZWtEYXkgPSB0aGlzV2Vla0RheSAtIDMxO1xuICAgICAgICAgIHNldE5leHRNb250aFllYXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMzBdLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpICYmIHRoaXNXZWVrRGF5ID4gMzApIHtcbiAgICAgICAgICBzZXROZXh0TW9udGhZZWFyKCk7XG4gICAgICAgICAgdGhpc1dlZWtEYXkgPSB0aGlzV2Vla0RheSAtIDMwO1xuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1syOV0uaW5jbHVkZXModGhpc1dlZWtNb250aCkgJiYgdGhpc1dlZWtEYXkgPiAyOSkge1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXkgLSAyOTtcbiAgICAgICAgICBzZXROZXh0TW9udGhZZWFyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9udGhzWzI4XS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSAmJiB0aGlzV2Vla0RheSA+IDI4KSB7XG4gICAgICAgICAgdGhpc1dlZWtEYXkgPSB0aGlzV2Vla0RheSAtIDI4O1xuICAgICAgICAgIHNldE5leHRNb250aFllYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLUdFVCBUTyBQUkVWSU9VUyBNT05USC9ZRUFSXG4gICAgICAgIGVsc2UgaWYgKHRoaXNXZWVrRGF5IDwgMSkge1xuICAgICAgICAgIHNldFByZXZpb3VzTW9udGhZZWFyKCk7XG5cbiAgICAgICAgICBpZiAobW9udGhzWzMxXS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSkge1xuICAgICAgICAgICAgdGhpc1dlZWtEYXkgPSAzMSArIHRoaXNXZWVrRGF5O1xuICAgICAgICAgIH0gZWxzZSBpZiAobW9udGhzWzMwXS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSkge1xuICAgICAgICAgICAgdGhpc1dlZWtEYXkgPSAzMCArIHRoaXNXZWVrRGF5O1xuICAgICAgICAgIH0gZWxzZSBpZiAobW9udGhzWzI5XS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSkge1xuICAgICAgICAgICAgdGhpc1dlZWtEYXkgPSAyOSArIHRoaXNXZWVrRGF5O1xuICAgICAgICAgIH0gZWxzZSBpZiAobW9udGhzWzI4XS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSkge1xuICAgICAgICAgICAgdGhpc1dlZWtEYXkgPSAyOCArIHRoaXNXZWVrRGF5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLU5PUk1BTCBCRUhBVklPUlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGAke051bWJlcih0YXNrRGF5KX0gJHt0YXNrTW9udGh9ICR7dGFza1llYXJ9YCA9PT1cbiAgICAgICAgICBgJHt0aGlzV2Vla0RheX0gJHt0aGlzV2Vla01vbnRofSAke3RoaXNXZWVrWWVhcn1gXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZpbHRlciBieSBwcm9qZWN0XG4gIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICBmaWx0ZXJlZEFycmF5ID0gb3JpZ2luTGlzdC5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gcHJvamVjdE5hbWUgPT09IHRhc2sudGFza09iai5wcm9qZWN0XG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlcmVkQXJyYXkubWFwKCh0YXNrKSA9PiB7XG4gICAgZmlsdGVyZWRMaXN0LmFwcGVuZENoaWxkKHRhc2sudGFza0VsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRmlsdGVyZWRMaXN0IH07XG4iLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9XG4gICAgICBkdWVEYXRlID09PSBcIlwiXG4gICAgICAgID8gXCJcIlxuICAgICAgICA6IG5ldyBEYXRlKGR1ZURhdGUpLnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpLnNsaWNlKDEsIDQpLmpvaW4oXCIgXCIpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tPYmogPSBuZXcgVGFzayhkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuXG4gIGxldCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza09iai5wcm9qZWN0ID09PSBcIlwiID8gXCJcIiA6IHRhc2tPYmoucHJvamVjdDtcbiAgdGFza1RpdGxlLmNsYXNzTmFtZSA9IFwidGFzay10aXRsZVwiO1xuXG4gIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza09iai5kZXNjcmlwdGlvbjtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xuXG4gIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRhc2tPYmouZHVlRGF0ZSk7XG4gIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza09iai5kdWVEYXRlID09PSBcIlwiID8gXCJcIiA6YCR7ZGF0ZS5nZXREYXRlKCkgPj0gMTAgPyBkYXRlLmdldERhdGUoKTogYDAke2RhdGUuZ2V0RGF0ZSgpfWB9LSR7ZGF0ZS5nZXRNb250aCgpICsgMSA+PSAxMCA/IGRhdGUuZ2V0TW9udGgoKSArIDE6IGAwJHtkYXRlLmdldE1vbnRoKCkgKyAxfWB9LSR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gIHRhc2tEdWVEYXRlLmNsYXNzTmFtZSA9IFwidGFzay1kYXRlXCI7XG5cbiAgaWYgKHRhc2tPYmoucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICB9IFxuXG4gIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlVGFza0J0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS10YXNrX19idG5cIjtcblxuICBpZiAodGFza1RpdGxlLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIH1lbHNlIHtcbiAgICB0YXNrRHVlRGF0ZS5zdHlsZS5ncmlkQ29sdW1uID0gXCIxIC8gM1wiXG4gIH1cblxuICBpZiAodGFza1RpdGxlLnRleHRDb250ZW50ICE9PSBcIlwiIHx8IHRhc2tEdWVEYXRlLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLmdyaWRSb3cgPSBcIjIgLyAzXCI7XG4gIH1cblxuICBpZiAodGFza0R1ZURhdGUudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICB9XG5cbiAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIHRhc2tFbC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcblxuICByZXR1cm4geyB0YXNrRWwsIHRhc2tPYmogfTtcbn1cblxuZXhwb3J0IHsgVGFzaywgY3JlYXRlVGFzayB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgb3B0aW9uUGFyZW50LCBidG5QYXJlbnQpIHtcbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3ROYW1lO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgb3B0aW9uUGFyZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICBidG5QYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xuXG4gIHJldHVybiB7IG9wdGlvbiwgYnV0dG9uLCBuYW1lIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUsIG9yaWdpbmFsQXJyYXksIHNlbGVjdCwgcHJvakNvbnRhaW5lcikge1xuICBmb3IgKGxldCB0YXNrIG9mIG9yaWdpbmFsQXJyYXkpIHtcbiAgICBpZiAodGFzay50YXNrT2JqLnByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBvcmlnaW5hbEFycmF5LnNwbGljZShvcmlnaW5hbEFycmF5LmluZGV4T2YodGFzayksIDEpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBvcHRpb25zID0gWy4uLnNlbGVjdC5jaGlsZHJlbl07XG4gIGxldCBpbmRleCA9IG9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbi50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWUpO1xuXG4gIHNlbGVjdC5yZW1vdmVDaGlsZChzZWxlY3QuY2hpbGRyZW5baW5kZXhdKTtcblxuICBsZXQgcHJvamVjdHMgPSBbLi4ucHJvakNvbnRhaW5lci5jaGlsZHJlbl07XG4gIGxldCBpbmRleDIgPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QudGV4dENvbnRlbnQgPT09IHByb2plY3ROYW1lXG4gICk7XG4gIHByb2pDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvakNvbnRhaW5lci5jaGlsZHJlbltpbmRleDJdKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xuIiwiZnVuY3Rpb24gYWRkVGFzayhjb250YWluZXIsIHRhc2ssIHN0b3JhZ2VBcnJheSkge1xuICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKHRhc2sudGFza0VsKTtcbiAgc3RvcmFnZUFycmF5LnB1c2godGFzayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soY29udGFpbmVyLCB0YXNrLCBzdG9yYWdlQXJyYXkpIHtcbiAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5yZW1vdmVDaGlsZCh0YXNrLnRhc2tFbCk7XG4gIHN0b3JhZ2VBcnJheS5zcGxpY2Uoc3RvcmFnZUFycmF5LmluZGV4T2YodGFzayksIDEpO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrLCByZW1vdmVUYXNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS9tYWluLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmV3VGFza1wiO1xuaW1wb3J0IHsgYWRkVGFzaywgcmVtb3ZlVGFzayB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFza3NcIjtcbmltcG9ydCB7IGNyZWF0ZUZpbHRlcmVkTGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyZWRMaXN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgYmFja2Ryb3AsXG4gIG1vYmlsZUJhY2tkcm9wLFxuICBjbG9zZU1lbnUsXG4gIGFkZFByb2plY3RCdG4sXG4gIHByb2plY3RzQ29udGFpbmVyLFxuICBpbmJveEJ0bixcbiAgZGFpbHlGaWx0ZXJCdG4sXG4gIHdlZWtseUZpbHRlckJ0bixcbiAgaGlnaFByaW9yaXR5RmlsdGVyQnRuLFxuICBhZGRQcm9qZWN0Q29udGFpbmVyLFxuICBwcm9qZWN0Rm9ybSxcbiAgcHJvamVjdEZvcm1JbnB1dCxcbiAgcHJvamVjdEZvcm1DYW5jZWxCdG4sXG4gIHBhZ2VUaXRsZUNvbnRhaW5lcixcbiAgcGFnZVRpdGxlLFxuICBsaXN0Q29udGFpbmVyLFxuICB0YXNrRm9ybSxcbiAgZGVzY3JpcHRpb25JbnB1dCxcbiAgZHVlRGF0ZUlucHV0LFxuICBwcmlvcml0eUlucHV0LFxuICBwcm9qZWN0SW5wdXQsXG4gIHRhc2tGb3JtQ2FuY2VsQnRuLFxufSBmcm9tIFwiLi9jb21wb25lbnRzL0RPTVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRhc2tzIGhhbmRsaW5nXG5cbmNvbnN0IG9sZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tPYmplY3RzXCIpKTtcblxuY29uc3QgdGFza0xpc3QgPSBbXTtcblxuaWYgKG9sZFRhc2tzICE9PSBudWxsKSB7XG4gIGZvciAobGV0IG9iaiBvZiBvbGRUYXNrcykge1xuICAgIGxldCB0YXNrID0gY3JlYXRlVGFzayhcbiAgICAgIG9iai5kZXNjcmlwdGlvbixcbiAgICAgIG9iai5kdWVEYXRlLFxuICAgICAgb2JqLnByaW9yaXR5LFxuICAgICAgb2JqLnByb2plY3RcbiAgICApO1xuICAgIGFkZFRhc2sobGlzdENvbnRhaW5lciwgdGFzaywgdGFza0xpc3QpO1xuXG4gICAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBbLi4udGFzay50YXNrRWwuY2hpbGRyZW5dLmZpbHRlcihcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJkZWxldGUtdGFza19fYnRuXCJcbiAgICApWzBdO1xuICBcbiAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tcmlnaHQtcmV2ZXJzZSAwLjhzXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgICAgcmVtb3ZlVGFzayhsaXN0Q29udGFpbmVyLCB0YXNrLCB0YXNrTGlzdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza09iamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QubWFwKHRhc2sgPT4gdGFzay50YXNrT2JqKSkpO1xuICAgICAgfSwgODAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBvbGRQcm9qZWN0c0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNMaXN0XCIpKTtcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbmlmIChvbGRQcm9qZWN0c0xpc3QgIT09IG51bGwpIHtcbiAgZm9yIChsZXQgcHJvamVjdE5hbWUgb2Ygb2xkUHJvamVjdHNMaXN0KSB7XG4gICAgbGV0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFxuICAgICAgcHJvamVjdE5hbWUsXG4gICAgICBwcm9qZWN0SW5wdXQsXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lclxuICAgICk7XG5cbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG5cblxuICAgIHByb2plY3QuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXJlbmRlclVsKFwicHJvamVjdFwiLCBwcm9qZWN0TmFtZSk7XG5cbiAgICAgIC8vIC0tLVJFTU9WRSBQUk9KRUNUXG5cbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuXG4gICAgICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlLXByb2plY3RfX2J0blwiO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSwgdGFza0xpc3QsIHByb2plY3RJbnB1dCwgcHJvamVjdHNDb250YWluZXIpO1xuICAgICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKHByb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3ROYW1lKSwgMSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgICAgIHJlcmVuZGVyVWwoXCJpbmJveFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgfSlcbiAgfVxufVxuXG5kZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlLnRyaW0oKTtcbn0pXG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gIHRhc2tGb3JtLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbi1kb3duLXJldmVyc2UgMC44c1wiO1xuICBiYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtb3V0IDAuOHNcIjtcbiAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhc2tGb3JtLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgYmFja2Ryb3Auc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gXCJub3JtYWxcIjtcbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfSwgODAwKTtcbn1cblxuYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0Zvcm0pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGxldCB0YXNrID0gY3JlYXRlVGFzayhcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxuICAgIHByb2plY3RJbnB1dC52YWx1ZVxuICApO1xuXG4gIGNsb3NlVGFza0Zvcm0oKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tcmlnaHQgMXNcIjtcbiAgICBhZGRUYXNrKGxpc3RDb250YWluZXIsIHRhc2ssIHRhc2tMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tPYmplY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0Lm1hcCh0YXNrID0+IHRhc2sudGFza09iaikpKTtcbiAgfSwgNDAwKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICB9LCAxNDAwKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERlbGV0ZSB0YXNrIGZ1bmN0aW9uYWxpdHlcblxuICBsZXQgZGVsZXRlVGFza0J0biA9IFsuLi50YXNrLnRhc2tFbC5jaGlsZHJlbl0uZmlsdGVyKFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJkZWxldGUtdGFza19fYnRuXCJcbiAgKVswXTtcblxuICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluLXJpZ2h0LXJldmVyc2UgMC44c1wiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgIHJlbW92ZVRhc2sobGlzdENvbnRhaW5lciwgdGFzaywgdGFza0xpc3QpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrT2JqZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdC5tYXAodGFzayA9PiB0YXNrLnRhc2tPYmopKSk7XG4gICAgfSwgODAwKTtcbiAgfSk7XG59KTtcblxudGFza0Zvcm1DYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0Zvcm0pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFByb2plY3RzIGhhbmRsaW5nXG5cbi8vIC0tLUFERCBQUk9KRUNUXG5cbmZ1bmN0aW9uIGNsb3NlQWRkUHJvamVjdEZvcm0oKSB7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHByb2plY3RGb3JtSW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG59KTtcblxucHJvamVjdEZvcm1DYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQWRkUHJvamVjdEZvcm0pO1xuXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmIChwcm9qZWN0Rm9ybUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xuICAgIGxldCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcbiAgICAgIHByb2plY3RGb3JtSW5wdXQudmFsdWUudHJpbSgpLFxuICAgICAgcHJvamVjdElucHV0LFxuICAgICAgcHJvamVjdHNDb250YWluZXJcbiAgICApO1xuXG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdC5uYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcblxuXG4gICAgcHJvamVjdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlcmVuZGVyVWwoXCJwcm9qZWN0XCIsIHByb2plY3QubmFtZSk7XG5cbiAgICAgIC8vIC0tLVJFTU9WRSBQUk9KRUNUXG5cbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcblxuICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS1wcm9qZWN0X19idG5cIjtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdC5uYW1lLCB0YXNrTGlzdCwgcHJvamVjdElucHV0LCBwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UocHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdC5uYW1lKSwgMSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgICAgIHJlcmVuZGVyVWwoXCJpbmJveFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgICBjbG9zZU1lbnUoKTtcbiAgICB9KTtcbiAgfVxuICBjbG9zZUFkZFByb2plY3RGb3JtKCk7XG59KTtcblxuLy8gLS0tTU9CSUxFIENMT1NFIEFERCBQUk9KRUNUIEZPUk1cblxubW9iaWxlQmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY2xvc2VBZGRQcm9qZWN0Rm9ybSgpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZpbHRlciBoYW5kbGluZ1xuXG5mdW5jdGlvbiByZXJlbmRlclVsKGZpbHRlclR5cGUsIHByb2plY3ROYW1lID0gXCJcIikge1xuICBsZXQgbmV3VWxMaXN0ID0gY3JlYXRlRmlsdGVyZWRMaXN0KGZpbHRlclR5cGUsIHRhc2tMaXN0LCBwcm9qZWN0TmFtZSk7XG4gIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdVbExpc3QpO1xuICBwYWdlVGl0bGVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID1cbiAgICBmaWx0ZXJUeXBlID09PSBcImluYm94XCJcbiAgICAgID8gXCJJbmJveFwiXG4gICAgICA6IGZpbHRlclR5cGUgPT09IFwiaGlnaCBwcmlvcml0eVwiXG4gICAgICA/IFwiSGlnaCBwcmlvcml0eVwiXG4gICAgICA6IGZpbHRlclR5cGUgPT09IFwidG9kYXlcIlxuICAgICAgPyBcIlRvZGF5XCJcbiAgICAgIDogZmlsdGVyVHlwZSA9PT0gXCJ3ZWVrXCJcbiAgICAgID8gXCJUaGlzIHdlZWtcIlxuICAgICAgOiBmaWx0ZXJUeXBlID09PSBcInByb2plY3RcIlxuICAgICAgPyBwcm9qZWN0TmFtZVxuICAgICAgOiBcIlwiO1xuICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgZm9yIChsZXQgdCBvZiB0YXNrTGlzdCkge1xuICAgIHQudGFza0VsLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbiAxLjRzXCI7XG4gIH1cbn1cblxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuXG5oaWdoUHJpb3JpdHlGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcImhpZ2ggcHJpb3JpdHlcIik7XG4gIGNsb3NlTWVudSgpO1xufSk7XG5cbmRhaWx5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJ0b2RheVwiKTtcbiAgY2xvc2VNZW51KCk7XG59KTtcblxud2Vla2x5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJ3ZWVrXCIpO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9