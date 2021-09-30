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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes grow {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 6rem;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes fade-out {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes fade-in-down {\n  0% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n}\n@keyframes fade-in-down-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n}\n@keyframes fade-in-right {\n  0% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n}\n@keyframes fade-in-right-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n}\n@keyframes fade-in-left {\n  0% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n}\n@keyframes fade-in-left-reverse {\n  0% {\n    opacity: 100%;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0%;\n    transform: translateX(100%);\n  }\n}\n* {\n  box-sizing: border-box;\n  font-family: \"Rubik\";\n  color: #6743bb;\n}\n\n.inactive {\n  display: none !important;\n}\n\n.flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.high-priority {\n  background-color: rgba(255, 255, 255, 0.603) !important;\n  background-image: linear-gradient(-45deg, rgba(248, 54, 0, 0.267), rgba(249, 213, 35, 0.514)) !important;\n}\n\noption {\n  cursor: pointer;\n}\n\nbody {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  overflow-x: hidden;\n  background-image: linear-gradient(45deg, #b993d6, #8ca6db);\n}\n\n.backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n  animation: fade-in 1s;\n}\n\n.mobile-backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  animation: fade-in 1s;\n}\n\nbutton {\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  border-radius: 14px;\n  width: 5rem;\n  padding: 0.3rem;\n  font-size: 0.8rem;\n}\n\ninput,\nselect,\noption {\n  background-color: rgba(255, 255, 255, 0.603);\n}\n\nnav {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 1rem 0 1rem;\n  height: 8rem;\n}\n\nnav img {\n  min-width: 6rem;\n  width: 6rem;\n  margin-left: 1rem;\n}\n\n.mobile-menu {\n  display: none;\n}\n\n.nav-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  width: clamp(8rem, 80%, 25rem);\n  margin-top: 0.6rem;\n}\n\n.wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 14px;\n  transition: height;\n  width: 8rem;\n}\n\n.wrapper button {\n  background: transparent;\n  width: 8rem;\n}\n\n.filters-container,\n.add-project__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.603);\n  animation: grow 0.3s;\n  overflow: hidden;\n  width: 90%;\n}\n.filters-container button,\n.add-project__container button {\n  color: rgba(255, 255, 255, 0.877);\n}\n.filters-container .add-project_btn,\n.add-project__container .add-project_btn {\n  color: #6743bb;\n}\n\n.add-project__form {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.add-project__form input {\n  width: 90%;\n  margin: auto;\n}\n.add-project__form button {\n  color: #6743bb;\n}\n.add-project__form .buttons-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0.5rem 0;\n  width: 100%;\n}\n.add-project__form .buttons-container button {\n  width: 3rem;\n  padding: 0;\n  font-weight: normal;\n}\n\nmain {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 10rem;\n}\n\n.page-title__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.603);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.3rem;\n}\n.page-title__container h2 {\n  font-family: Pacifico;\n  color: rgba(255, 255, 255, 0.877);\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: normal;\n}\n.page-title__container .delete-project__btn {\n  background-color: #f01d5d;\n  color: rgba(255, 255, 255, 0.877);\n  position: absolute;\n  right: -6rem;\n  top: 1rem;\n  width: 4rem;\n}\n\n.add-task__btn {\n  width: 5rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 0.5rem 0;\n}\n\n.add-task__form {\n  position: absolute;\n  z-index: 50;\n  top: 30vh;\n  animation: fade-in-down 0.8s;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  row-gap: 0.8rem;\n  column-gap: 0.5rem;\n  width: clamp(10rem, 90%, 50rem);\n  box-shadow: -2px 2px rgba(255, 255, 255, 0.466);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 1rem;\n  border-radius: 15px;\n}\n\nmain form div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-column: 1/3;\n}\n\nmain form button {\n  background-color: transparent;\n  width: 5rem;\n  margin-top: 1rem;\n}\n\ninput,\nmain select {\n  height: 1.2rem;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n}\n\nlabel {\n  text-align: center;\n  font-size: 0.9rem;\n}\n\ninput:hover,\ninput:active,\ninput:focus,\nselect:hover,\nselect:active,\nselect:focus,\nbutton:hover,\nbutton:active,\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover {\n  color: #f01d5d !important;\n}\n\n.page-title__container button:hover {\n  color: #6743bb !important;\n}\n\n.list-container {\n  width: 100%;\n}\n\n.list-container ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style-type: none;\n  margin-block-start: 2rem;\n  margin-block-end: 2rem;\n  padding-inline-start: 0;\n  width: 100%;\n}\n\nli {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto auto;\n  grid-template-rows: 2rem 1.5rem;\n  grid-template-areas: \"TITLE DATE\" \"DESCRIPTION DESCRIPTION\";\n  width: clamp(10rem, 90%, 50rem);\n  margin: 0;\n  margin-bottom: 2rem;\n  padding: 0.5rem 1rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 20px;\n}\n\n.task-title {\n  grid-area: TITLE;\n}\n\n.task-description {\n  grid-area: DESCRIPTION;\n}\n\n.task-date {\n  grid-area: DATE;\n  font-size: 0.8rem;\n  margin-left: 0.8rem;\n}\n\n.delete-task__btn {\n  position: absolute;\n  right: 1.2rem;\n  top: center;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.603);\n  width: 1.3rem;\n  height: 1.3rem;\n  background-image: none;\n  background-color: transparent;\n}\n\nli h2,\nli p {\n  margin: 0;\n}\n\n@media (max-width: 600px) {\n  .mobile-menu {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    margin-top: 1.4rem;\n  }\n  .mobile-menu div {\n    width: 0.7rem;\n    height: 0.7rem;\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.774), rgba(255, 255, 255, 0.349));\n    border-radius: 50%;\n    margin-right: 0.3rem;\n  }\n\n  .nav-buttons {\n    animation: fade-in-left 0.8s;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    position: absolute;\n    z-index: 30;\n    top: 0;\n    right: 0;\n    width: clamp(10rem, 50vw, 40rem);\n    height: 100vh;\n    margin: 0;\n    background-color: rgba(255, 255, 255, 0.753);\n  }\n\n  .nav-buttons button {\n    font-size: 1.2rem;\n  }\n\n  .nav-buttons > button {\n    margin-top: 5rem;\n  }\n\n  .nav-buttons > div {\n    margin-top: 3rem;\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .nav-buttons button {\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .wrapper {\n    width: 80%;\n  }\n\n  .filters-container button,\n.projects-container button {\n    color: #9d5cc4;\n    font-size: 1.1rem;\n  }\n\n  .add-project__container button {\n    font-size: 1rem;\n  }\n\n  .filters-container,\n.add-project__container {\n    border-top: 1px solid rgba(103, 67, 187, 0.603);\n  }\n}\n\n/*# sourceMappingURL=main.css.map */\n", "",{"version":3,"sources":["webpack://./src/style/main.scss","webpack://./src/style/main.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
/* harmony export */   "titleInput": () => (/* binding */ titleInput),
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
const addProjectContainer = document.querySelector(
  ".add-project__container"
);

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
const titleInput = document.querySelector("#form-title");
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
  }else {
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
  filter.addEventListener("click", function(){
    filtersContainer.classList.add("inactive");
  })
}

// -------------------------MOBILE

function openMenu() {
  navButtons.classList.add("flex");
  mobileMenu.classList.add("inactive");
  mobileMenuDiv.classList.add("inactive");
  mobileBackdrop.classList.remove("inactive");
}

function closeMenu() {
  navButtons.classList.remove("flex");
  mobileMenu.classList.remove("inactive");
  mobileMenuDiv.classList.remove("inactive");
  mobileBackdrop.classList.add("inactive");
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
  constructor(title, description, dueDate, priority, project) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate =
      dueDate.value === ""
        ? ""
        : new Date(dueDate.value).toString().split(" ").slice(1, 4).join(" ");
    this.priority = priority.value;
    this.project = project.value;
  }
}

function createTask(title, description, dueDate, priority, project) {
  const taskObj = new Task(title, description, dueDate, priority, project);

  let taskEl = document.createElement("li");

  let taskTitle = document.createElement("h2");
  taskTitle.textContent = taskObj.title;

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

  taskEl.appendChild(deleteTaskBtn);
  taskEl.appendChild(taskTitle);
  taskEl.appendChild(taskDescription);
  taskEl.appendChild(taskDueDate);

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

const taskList = [];

function closeTaskForm() {
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.style.animation = "fade-in-down-reverse 0.8s";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.style.animation = "fade-out 0.8s";
  setTimeout(() => {
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.style.animation = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.style.animation = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.classList.add("inactive");
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.titleInput.value = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.value = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.dueDateInput.value = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.priorityInput.value = "normal";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput.value = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.classList.add("inactive");
  }, 800);

  setTimeout(() => {
    document.querySelector("ul").classList.remove("inactive");
    rerenderUl("inbox"); 
  }, 600);
}

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.addEventListener("click", closeTaskForm);

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let task = (0,_components_newTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.titleInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.dueDateInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.priorityInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput
  );

  closeTaskForm();
  setTimeout(() => {
    task.taskEl.style.animation = "fade-in-right 1s";
    (0,_components_tasks__WEBPACK_IMPORTED_MODULE_2__.addTask)(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer, task, taskList);
  }, 1000);

  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "Inbox";
  setTimeout(() => {
    task.taskEl.style.animation = "";
  }, 1800);

  // ------------------------------------------- Delete task functionality

  let deleteTaskBtn = [...task.taskEl.children].filter(
    (element) => element.className === "delete-task__btn"
  )[0];

  deleteTaskBtn.addEventListener("click", function () {
    task.taskEl.style.animation = "fade-in-right-reverse 0.8s";
    setTimeout(() => {
      task.taskEl.style.animation = "";
      (0,_components_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTask)(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer, task, taskList);
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
        _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "Inbox";
        _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.remove(deleteProjectBtn);
      });

      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.appendChild(deleteProjectBtn);
    });
  }
  closeAddProjectForm();
});

// ---MOBILE CLOSE ADD PROJECT FORM

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.mobileBackdrop.addEventListener("click", function () {
  closeAddProjectForm();
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.addProjectContainer.classList.add("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.filtersContainer.classList.add("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.mobileBackdrop.style.animation = "fade-out 0.8s";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.navButtons.style.animation = "fade-in-left-reverse 0.8s";
  setTimeout(() => {
    (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.mobileBackdrop.style.animation = "";
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.navButtons.style.animation = "";
  }, 800);
});

// ------------------------------------------- Filter handling

function rerenderUl(filterType, projectName = "") {
  let newUlList = (0,_components_filteredLists__WEBPACK_IMPORTED_MODULE_3__.createFilteredList)(filterType, taskList, projectName);
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer.innerHTML = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer.appendChild(newUlList);
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.innerHTML = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.appendChild(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle);
}

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.inboxBtn.addEventListener("click", function () {
  rerenderUl("inbox");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "Inbox";
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.highPriorityFilterBtn.addEventListener("click", function () {
  rerenderUl("high priority");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "High priority";
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.dailyFilterBtn.addEventListener("click", function () {
  rerenderUl("today");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "Today";
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.weeklyFilterBtn.addEventListener("click", function () {
  rerenderUl("week");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "This week";
  (0,_components_DOM__WEBPACK_IMPORTED_MODULE_5__.closeMenu)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsYUFBYSxRQUFRLE1BQU0sYUFBYSxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLGFBQWEsYUFBYSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxRQUFRLGFBQWEsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVB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aUM7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0VBQWEseUJBQXlCLHlEQUFZLEVBQUUsOERBQWlCO0FBQzdFO0FBQ0EsUUFBUSxrRUFBcUI7QUFDN0IsUUFBUSxzRUFBeUI7QUFDakMsT0FBTzs7QUFFUCxNQUFNLDJFQUE4QjtBQUNwQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsNEVBQStCO0FBQy9CO0FBQ0EsRUFBRSw4RUFBaUM7QUFDbkMsRUFBRSwyRUFBOEI7QUFDaEMsRUFBRSwyRUFBOEI7QUFDaEMsRUFBRSx1RUFBMEI7QUFDNUI7QUFDQSxJQUFJLDBEQUFTO0FBQ2IsSUFBSSwyRUFBOEI7QUFDbEMsSUFBSSx1RUFBMEI7QUFDOUIsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxrQkFBa0IsNkVBQWtCO0FBQ3BDLEVBQUUsb0VBQXVCO0FBQ3pCLEVBQUUsc0VBQXlCO0FBQzNCLEVBQUUseUVBQTRCO0FBQzlCLEVBQUUsMkVBQThCLENBQUMsc0RBQVM7QUFDMUM7O0FBRUEsc0VBQXlCO0FBQ3pCO0FBQ0EsRUFBRSxrRUFBcUI7QUFDdkIsRUFBRSwwREFBUztBQUNYLENBQUM7O0FBRUQsbUZBQXNDO0FBQ3RDO0FBQ0EsRUFBRSxrRUFBcUI7QUFDdkIsRUFBRSwwREFBUztBQUNYLENBQUM7O0FBRUQsNEVBQStCO0FBQy9CO0FBQ0EsRUFBRSxrRUFBcUI7QUFDdkIsRUFBRSwwREFBUztBQUNYLENBQUM7O0FBRUQsNkVBQWdDO0FBQ2hDO0FBQ0EsRUFBRSxrRUFBcUI7QUFDdkIsRUFBRSwwREFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvbWFpbi5jc3M/ODMzMSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJlZExpc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGdyb3cge1xcbiAgMCUge1xcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbWF4LWhlaWdodDogNnJlbTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1kb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZG93bi1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcmVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1yaWdodC1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNyZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tbGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tbGVmdC1yZXZlcnNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiO1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDI0OCwgNTQsIDAsIDAuMjY3KSwgcmdiYSgyNDksIDIxMywgMzUsIDAuNTE0KSkgIWltcG9ydGFudDtcXG59XFxuXFxub3B0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2I5OTNkNiwgIzhjYTZkYik7XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZmZmY4ZSwgI2ZmZmZmZjUyIDMwJSwgI2ZmZmZmZmE4IDMwJSwgI2ZmZmZmZjNiIDMyJSwgI2ZmZmZmZjNiIDMyJSwgI2ZmZmZmZjBhIDkwJSwgI2ZmZmZmZmE4IDkwJSwgI2ZmZmZmZjA5IDkyJSwgI2ZmZmZmZjAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMjA7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcblxcbi5tb2JpbGUtYmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmZmZmOGUsICNmZmZmZmY1MiAzMCUsICNmZmZmZmZhOCAzMCUsICNmZmZmZmYzYiAzMiUsICNmZmZmZmYzYiAzMiUsICNmZmZmZmYwYSA5MCUsICNmZmZmZmZhOCA5MCUsICNmZmZmZmYwOSA5MiUsICNmZmZmZmYwMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICB3aWR0aDogNXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbn1cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbn1cXG5cXG5uYXYgaW1nIHtcXG4gIG1pbi13aWR0aDogNnJlbTtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5tb2JpbGUtbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IGNsYW1wKDhyZW0sIDgwJSwgMjVyZW0pO1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIHRyYW5zaXRpb246IGhlaWdodDtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuXFxuLmZpbHRlcnMtY29udGFpbmVyLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxuICBhbmltYXRpb246IGdyb3cgMC4zcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogOTAlO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIgYnV0dG9uLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3Nyk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lciAuYWRkLXByb2plY3RfYnRuLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIC5hZGQtcHJvamVjdF9idG4ge1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5hZGQtcHJvamVjdF9fZm9ybSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLmFkZC1wcm9qZWN0X19mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSBidXR0b24ge1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTByZW07XFxufVxcblxcbi5wYWdlLXRpdGxlX19jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbn1cXG4ucGFnZS10aXRsZV9fY29udGFpbmVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBQYWNpZmljbztcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODc3KTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnBhZ2UtdGl0bGVfX2NvbnRhaW5lciAuZGVsZXRlLXByb2plY3RfX2J0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAxZDVkO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC02cmVtO1xcbiAgdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5hZGQtdGFza19fYnRuIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi5hZGQtdGFza19fZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA1MDtcXG4gIHRvcDogMzB2aDtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbi1kb3duIDAuOHM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgcm93LWdhcDogMC44cmVtO1xcbiAgY29sdW1uLWdhcDogMC41cmVtO1xcbiAgd2lkdGg6IGNsYW1wKDEwcmVtLCA5MCUsIDUwcmVtKTtcXG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjYpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbm1haW4gZm9ybSBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG5tYWluIGZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCxcXG5tYWluIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuaW5wdXQ6aG92ZXIsXFxuaW5wdXQ6YWN0aXZlLFxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpob3ZlcixcXG5zZWxlY3Q6YWN0aXZlLFxcbnNlbGVjdDpmb2N1cyxcXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmFjdGl2ZSxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjAxZDVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYWdlLXRpdGxlX19jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjNjc0M2JiICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHVsIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDJyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAycmVtO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMS41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIlRJVExFIERBVEVcXFwiIFxcXCJERVNDUklQVElPTiBERVNDUklQVElPTlxcXCI7XFxuICB3aWR0aDogY2xhbXAoMTByZW0sIDkwJSwgNTByZW0pO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBUSVRMRTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBERVNDUklQVElPTjtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBncmlkLWFyZWE6IERBVEU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjhyZW07XFxufVxcblxcbi5kZWxldGUtdGFza19fYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxLjJyZW07XFxuICB0b3A6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpO1xcbiAgd2lkdGg6IDEuM3JlbTtcXG4gIGhlaWdodDogMS4zcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5saSBoMixcXG5saSBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubW9iaWxlLW1lbnUge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMS40cmVtO1xcbiAgfVxcbiAgLm1vYmlsZS1tZW51IGRpdiB7XFxuICAgIHdpZHRoOiAwLjdyZW07XFxuICAgIGhlaWdodDogMC43cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NzQpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQ5KSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XFxuICB9XFxuXFxuICAubmF2LWJ1dHRvbnMge1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4tbGVmdCAwLjhzO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMzA7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiBjbGFtcCgxMHJlbSwgNTB2dywgNDByZW0pO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTMpO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gIH1cXG5cXG4gIC5uYXYtYnV0dG9ucyA+IGRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgfVxcblxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgfVxcblxcbiAgLndyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLmZpbHRlcnMtY29udGFpbmVyIGJ1dHRvbixcXG4ucHJvamVjdHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjOWQ1Y2M0O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5hZGQtcHJvamVjdF9fY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5maWx0ZXJzLWNvbnRhaW5lcixcXG4uYWRkLXByb2plY3RfX2NvbnRhaW5lciB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEwMywgNjcsIDE4NywgMC42MDMpO1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBbURBO0VBQ0U7SUFDRSxlQUFBO0VDbERGO0VEb0RBO0lBQ0UsZ0JBQUE7RUNsREY7QUFDRjtBRHFEQTtFQUNFO0lBQ0UsV0FBQTtFQ25ERjtFRHFEQTtJQUNFLGFBQUE7RUNuREY7QUFDRjtBRHNEQTtFQUNF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Q0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxnR0FwZFU7SUFxZFYsa0JBQUE7SUFDQSxvQkFBQTtFQ2pDSjs7RURxQ0E7SUFDRSw0QkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSw0Q0FqZWM7RUMrYmhCOztFRHFDQTtJQUNFLGlCQUFBO0VDbENGOztFRHFDQTtJQUNFLGdCQUFBO0VDbENGOztFRHFDQTtJQUNFLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxzQkFBQTtFQ2xDRjs7RURxQ0E7SUFDRSw2QkFBQTtJQUNBLHNCQUFBO0VDbENGOztFRHFDQTtJQUNFLFVBQUE7RUNsQ0Y7O0VEcUNBOztJQUVFLGNBMWZVO0lBMmZWLGlCQUFBO0VDbENGOztFRHFDQTtJQUNFLGVBQUE7RUNsQ0Y7O0VEcUNBOztJQUVFLCtDQS9mYztFQzZkaEI7QUFDRjs7QUFFQSxtQ0FBbUNcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tkcm9wXCIpO1xuY29uc3QgbW9iaWxlQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1iYWNrZHJvcFwiKTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5BVlxuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudVwiKTtcbmNvbnN0IG1vYmlsZU1lbnVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51IGRpdlwiKTtcbmNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1idXR0b25zXCIpO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdF9idG5cIik7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4vLyAtLUZJTFRFUlNcblxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xuY29uc3QgZmlsdGVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyc1wiKTtcbmNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IGZpbHRlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcnMtY29udGFpbmVyXCIpO1xuY29uc3QgZGFpbHlGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWZpbHRlclwiKTtcbmNvbnN0IHdlZWtseUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vla2x5LWZpbHRlclwiKTtcbmNvbnN0IGhpZ2hQcmlvcml0eUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHAtZmlsdGVyXCIpO1xuXG4vLyAtLS1QUk9KRUNUIEZPUk0gQ09OVEVOVFxuY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLmFkZC1wcm9qZWN0X19jb250YWluZXJcIlxuKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0X19mb3JtXCIpO1xuY29uc3QgcHJvamVjdEZvcm1JbnB1dCA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnN0IHByb2plY3RGb3JtQ2FuY2VsQnRuID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPSdidXR0b24nXVwiKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTUFJTlxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza19fYnRuXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWNvbnRhaW5lclwiKTtcblxuLy8gLS0tUEFHRSBUSVRMRSArIENBTkNFTCBQUk9KRUNUXG5cbmNvbnN0IHBhZ2VUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS10aXRsZV9fY29udGFpbmVyXCIpO1xuY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xucGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xucGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG5cbi8vIC0tLVRBU0sgRk9STSBDT05URU5UXG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza19fZm9ybVwiKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tdGl0bGVcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWR1ZS1kYXRlXCIpO1xuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1wcmlvcml0eVwiKTtcbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmVsb25nLXByb2plY3RcIik7XG5jb25zdCB0YXNrRm9ybUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLmFkZC10YXNrX19mb3JtIGJ1dHRvblt0eXBlPSdidXR0b24nXVwiXG4pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MT0dJQ1xuXG5wcmlvcml0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAocHJpb3JpdHlJbnB1dC52YWx1ZSA9PT0gXCJoaWdoXCIpIHtcbiAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICB9ZWxzZSB7XG4gICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgfVxufSk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoLXByaW9yaXR5XCIpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBhZGRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbn0pO1xuXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG59KTtcblxuZmlsdGVyc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG59KTtcblxucHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xufSk7XG5cbmZvciAobGV0IGZpbHRlciBvZiBbLi4uZmlsdGVyc0NvbnRhaW5lci5jaGlsZHJlbl0pIHtcbiAgZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGZpbHRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB9KVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTU9CSUxFXG5cbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICBuYXZCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgbW9iaWxlTWVudURpdi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIG1vYmlsZUJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICBuYXZCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoXCJmbGV4XCIpO1xuICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgbW9iaWxlTWVudURpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIG1vYmlsZUJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbn1cblxubW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1lbnUpO1xubW9iaWxlTWVudURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1lbnUpO1xuXG5cbmV4cG9ydCB7XG4gIGJhY2tkcm9wLFxuICBtb2JpbGVCYWNrZHJvcCxcbiAgbmF2QnV0dG9ucyxcbiAgY2xvc2VNZW51LFxuICBuYXYsXG4gIGFkZFByb2plY3RCdG4sXG4gIHByb2plY3RzQ29udGFpbmVyLFxuICBpbmJveEJ0bixcbiAgZmlsdGVyc0NvbnRhaW5lcixcbiAgZGFpbHlGaWx0ZXJCdG4sXG4gIHdlZWtseUZpbHRlckJ0bixcbiAgaGlnaFByaW9yaXR5RmlsdGVyQnRuLFxuICBhZGRQcm9qZWN0Q29udGFpbmVyLFxuICBwcm9qZWN0Rm9ybSxcbiAgcHJvamVjdEZvcm1JbnB1dCxcbiAgcHJvamVjdEZvcm1DYW5jZWxCdG4sXG4gIHBhZ2VUaXRsZUNvbnRhaW5lcixcbiAgcGFnZVRpdGxlLFxuICBtYWluLFxuICBhZGRUYXNrQnRuLFxuICB1bCxcbiAgbGlzdENvbnRhaW5lcixcbiAgdGFza0Zvcm0sXG4gIHRpdGxlSW5wdXQsXG4gIGRlc2NyaXB0aW9uSW5wdXQsXG4gIGR1ZURhdGVJbnB1dCxcbiAgcHJpb3JpdHlJbnB1dCxcbiAgcHJvamVjdElucHV0LFxuICB0YXNrRm9ybUNhbmNlbEJ0bixcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVGaWx0ZXJlZExpc3QoZmlsdGVyVHlwZSwgb3JpZ2luTGlzdCwgcHJvamVjdE5hbWUgPSBcIlwiKSB7XG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNwbGl0KFwiIFwiKS5zbGljZSgwLCA0KS5qb2luKFwiIFwiKTtcbiAgbGV0IGZpbHRlcmVkQXJyYXk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluYm94XG5cbiAgaWYgKGZpbHRlclR5cGUgPT09IFwiaW5ib3hcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIUCBmaWx0ZXJcbiAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcImhpZ2ggcHJpb3JpdHlcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiB0YXNrLnRhc2tPYmoucHJpb3JpdHkgPT09IFwiaGlnaFwiXG4gICAgKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGFpbHkgZmlsdGVyXG4gIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tPYmouZHVlRGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuc2xpY2UoMCwgNClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHRhc2tEYXRlID09PSBjdXJyZW50RGF0ZTtcbiAgICB9KTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2Vla2x5IGZpbHRlclxuICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwid2Vla1wiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB3ZWVrID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xuXG4gICAgICBsZXQgdGFza0RhdGVBcnIgPSBuZXcgRGF0ZSh0YXNrLnRhc2tPYmouZHVlRGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuc2xpY2UoMCwgNCk7XG4gICAgICBsZXQgdGFza01vbnRoID0gdGFza0RhdGVBcnJbMV07XG4gICAgICBsZXQgdGFza0RheSA9IHRhc2tEYXRlQXJyWzJdO1xuICAgICAgbGV0IHRhc2tZZWFyID0gdGFza0RhdGVBcnJbM107XG4gICAgICBsZXQgY3VycmVudERheSA9IE51bWJlcihjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMl0pO1xuICAgICAgbGV0IGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVsxXTtcbiAgICAgIGxldCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVszXTtcbiAgICAgIGxldCB3ZWVrSW5kZXggPSB3ZWVrLmluZGV4T2YoY3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzBdKTtcblxuICAgICAgY29uc3QgbW9udGhzID0ge1xuICAgICAgICBhbGw6IFtcbiAgICAgICAgICBcIkphblwiLFxuICAgICAgICAgIFwiRmViXCIsXG4gICAgICAgICAgXCJNYXJcIixcbiAgICAgICAgICBcIkFwclwiLFxuICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgXCJKdW5cIixcbiAgICAgICAgICBcIkp1bFwiLFxuICAgICAgICAgIFwiQXVnXCIsXG4gICAgICAgICAgXCJTZXBcIixcbiAgICAgICAgICBcIk9jdFwiLFxuICAgICAgICAgIFwiTm92XCIsXG4gICAgICAgICAgXCJEZWNcIixcbiAgICAgICAgXSxcbiAgICAgICAgMzE6IFtcIkphblwiLCBcIk1hclwiLCBcIk1heVwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIk9jdFwiLCBcIkRlY1wiXSxcbiAgICAgICAgMzA6IFtcIkFwclwiLCBcIkp1blwiLCBcIlNlcFwiLCBcIk5vdlwiXSxcbiAgICAgICAgMjk6IE51bWJlcihjdXJyZW50WWVhcikgJSA0ID09PSAwID8gW1wiRmViXCJdIDogW10sXG4gICAgICAgIDI4OiBOdW1iZXIoY3VycmVudFllYXIpICUgNCA9PT0gMCA/IFtdIDogW1wiRmViXCJdLFxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgaSA9IHdlZWtJbmRleDsgaSA8PSB3ZWVrSW5kZXggKyA2OyBpKyspIHtcbiAgICAgICAgbGV0IHRoaXNXZWVrRGF5ID0gY3VycmVudERheSArICg2IC0gaSk7XG4gICAgICAgIGxldCB0aGlzV2Vla01vbnRoID0gY3VycmVudE1vbnRoO1xuICAgICAgICBsZXQgdGhpc1dlZWtZZWFyID0gY3VycmVudFllYXI7XG5cbiAgICAgICAgLy8gLS0tR0VUIFRPIE5FWFQgTU9OVEgvWUVBUlxuXG4gICAgICAgIGZ1bmN0aW9uIHNldE5leHRNb250aFllYXIoKSB7XG4gICAgICAgICAgaWYgKHRoaXNXZWVrTW9udGggPT09IFwiRGVjXCIpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrTW9udGggPSBcIkphblwiO1xuICAgICAgICAgICAgdGhpc1dlZWtZZWFyID0gKE51bWJlcih0aGlzV2Vla1llYXIpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1dlZWtNb250aCA9IG1vbnRocy5hbGxbbW9udGhzLmFsbC5pbmRleE9mKHRoaXNXZWVrTW9udGgpICsgMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0UHJldmlvdXNNb250aFllYXIoKSB7XG4gICAgICAgICAgaWYgKHRoaXNXZWVrTW9udGggPT09IFwiSmFuXCIpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrTW9udGggPSBcIkRlY1wiO1xuICAgICAgICAgICAgdGhpc1dlZWtZZWFyID0gKE51bWJlcih0aGlzV2Vla1llYXIpIC0gMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1dlZWtNb250aCA9IG1vbnRocy5hbGxbbW9udGhzLmFsbC5pbmRleE9mKHRoaXNXZWVrTW9udGgpIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vbnRoc1szMV0uaW5jbHVkZXModGhpc1dlZWtNb250aCkgJiYgdGhpc1dlZWtEYXkgPiAzMSkge1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXkgLSAzMTtcbiAgICAgICAgICBzZXROZXh0TW9udGhZZWFyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9udGhzWzMwXS5pbmNsdWRlcyh0aGlzV2Vla01vbnRoKSAmJiB0aGlzV2Vla0RheSA+IDMwKSB7XG4gICAgICAgICAgc2V0TmV4dE1vbnRoWWVhcigpO1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXkgLSAzMDtcbiAgICAgICAgfSBlbHNlIGlmIChtb250aHNbMjldLmluY2x1ZGVzKHRoaXNXZWVrTW9udGgpICYmIHRoaXNXZWVrRGF5ID4gMjkpIHtcbiAgICAgICAgICB0aGlzV2Vla0RheSA9IHRoaXNXZWVrRGF5IC0gMjk7XG4gICAgICAgICAgc2V0TmV4dE1vbnRoWWVhcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1syOF0uaW5jbHVkZXModGhpc1dlZWtNb250aCkgJiYgdGhpc1dlZWtEYXkgPiAyOCkge1xuICAgICAgICAgIHRoaXNXZWVrRGF5ID0gdGhpc1dlZWtEYXkgLSAyODtcbiAgICAgICAgICBzZXROZXh0TW9udGhZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS1HRVQgVE8gUFJFVklPVVMgTU9OVEgvWUVBUlxuICAgICAgICBlbHNlIGlmICh0aGlzV2Vla0RheSA8IDEpIHtcbiAgICAgICAgICBzZXRQcmV2aW91c01vbnRoWWVhcigpO1xuXG4gICAgICAgICAgaWYgKG1vbnRoc1szMV0uaW5jbHVkZXModGhpc1dlZWtNb250aCkpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrRGF5ID0gMzEgKyB0aGlzV2Vla0RheTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1szMF0uaW5jbHVkZXModGhpc1dlZWtNb250aCkpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrRGF5ID0gMzAgKyB0aGlzV2Vla0RheTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1syOV0uaW5jbHVkZXModGhpc1dlZWtNb250aCkpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrRGF5ID0gMjkgKyB0aGlzV2Vla0RheTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc1syOF0uaW5jbHVkZXModGhpc1dlZWtNb250aCkpIHtcbiAgICAgICAgICAgIHRoaXNXZWVrRGF5ID0gMjggKyB0aGlzV2Vla0RheTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS1OT1JNQUwgQkVIQVZJT1JcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpc1dlZWtEYXkgPSB0aGlzV2Vla0RheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBgJHtOdW1iZXIodGFza0RheSl9ICR7dGFza01vbnRofSAke3Rhc2tZZWFyfWAgPT09XG4gICAgICAgICAgYCR7dGhpc1dlZWtEYXl9ICR7dGhpc1dlZWtNb250aH0gJHt0aGlzV2Vla1llYXJ9YFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmaWx0ZXIgYnkgcHJvamVjdFxuICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwicHJvamVjdFwiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKFxuICAgICAgKHRhc2spID0+IHByb2plY3ROYW1lID09PSB0YXNrLnRhc2tPYmoucHJvamVjdFxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJlZEFycmF5Lm1hcCgodGFzaykgPT4ge1xuICAgIGZpbHRlcmVkTGlzdC5hcHBlbmRDaGlsZCh0YXNrLnRhc2tFbCk7XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZExpc3Q7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZpbHRlcmVkTGlzdCB9O1xuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUudmFsdWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuICAgIHRoaXMuZHVlRGF0ZSA9XG4gICAgICBkdWVEYXRlLnZhbHVlID09PSBcIlwiXG4gICAgICAgID8gXCJcIlxuICAgICAgICA6IG5ldyBEYXRlKGR1ZURhdGUudmFsdWUpLnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpLnNsaWNlKDEsIDQpLmpvaW4oXCIgXCIpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0LnZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICBjb25zdCB0YXNrT2JqID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cbiAgbGV0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLnRpdGxlO1xuXG4gIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza09iai5kZXNjcmlwdGlvbjtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xuXG4gIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRhc2tPYmouZHVlRGF0ZSk7XG4gIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza09iai5kdWVEYXRlID09PSBcIlwiID8gXCJcIiA6YCR7ZGF0ZS5nZXREYXRlKCkgPj0gMTAgPyBkYXRlLmdldERhdGUoKTogYDAke2RhdGUuZ2V0RGF0ZSgpfWB9LSR7ZGF0ZS5nZXRNb250aCgpICsgMSA+PSAxMCA/IGRhdGUuZ2V0TW9udGgoKSArIDE6IGAwJHtkYXRlLmdldE1vbnRoKCkgKyAxfWB9LSR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gIHRhc2tEdWVEYXRlLmNsYXNzTmFtZSA9IFwidGFzay1kYXRlXCI7XG5cbiAgaWYgKHRhc2tPYmoucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgdGFza0VsLmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICB9IFxuXG4gIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlVGFza0J0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS10YXNrX19idG5cIjtcblxuICB0YXNrRWwuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICByZXR1cm4geyB0YXNrRWwsIHRhc2tPYmogfTtcbn1cblxuZXhwb3J0IHsgVGFzaywgY3JlYXRlVGFzayB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgb3B0aW9uUGFyZW50LCBidG5QYXJlbnQpIHtcbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3ROYW1lO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgb3B0aW9uUGFyZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICBidG5QYXJlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xuXG4gIHJldHVybiB7IG9wdGlvbiwgYnV0dG9uLCBuYW1lIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUsIG9yaWdpbmFsQXJyYXksIHNlbGVjdCwgcHJvakNvbnRhaW5lcikge1xuICBmb3IgKGxldCB0YXNrIG9mIG9yaWdpbmFsQXJyYXkpIHtcbiAgICBpZiAodGFzay50YXNrT2JqLnByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBvcmlnaW5hbEFycmF5LnNwbGljZShvcmlnaW5hbEFycmF5LmluZGV4T2YodGFzayksIDEpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBvcHRpb25zID0gWy4uLnNlbGVjdC5jaGlsZHJlbl07XG4gIGxldCBpbmRleCA9IG9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbi50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWUpO1xuXG4gIHNlbGVjdC5yZW1vdmVDaGlsZChzZWxlY3QuY2hpbGRyZW5baW5kZXhdKTtcblxuICBsZXQgcHJvamVjdHMgPSBbLi4ucHJvakNvbnRhaW5lci5jaGlsZHJlbl07XG4gIGxldCBpbmRleDIgPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QudGV4dENvbnRlbnQgPT09IHByb2plY3ROYW1lXG4gICk7XG4gIHByb2pDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvakNvbnRhaW5lci5jaGlsZHJlbltpbmRleDJdKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xuIiwiZnVuY3Rpb24gYWRkVGFzayhjb250YWluZXIsIHRhc2ssIHN0b3JhZ2VBcnJheSkge1xuICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKHRhc2sudGFza0VsKTtcbiAgc3RvcmFnZUFycmF5LnB1c2godGFzayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soY29udGFpbmVyLCB0YXNrLCBzdG9yYWdlQXJyYXkpIHtcbiAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5yZW1vdmVDaGlsZCh0YXNrLnRhc2tFbCk7XG4gIHN0b3JhZ2VBcnJheS5zcGxpY2Uoc3RvcmFnZUFycmF5LmluZGV4T2YodGFzayksIDEpO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrLCByZW1vdmVUYXNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS9tYWluLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmV3VGFza1wiO1xuaW1wb3J0IHsgYWRkVGFzaywgcmVtb3ZlVGFzayB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFza3NcIjtcbmltcG9ydCB7IGNyZWF0ZUZpbHRlcmVkTGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyZWRMaXN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgYmFja2Ryb3AsXG4gIG1vYmlsZUJhY2tkcm9wLFxuICBuYXZCdXR0b25zLFxuICBjbG9zZU1lbnUsXG4gIGFkZFByb2plY3RCdG4sXG4gIHByb2plY3RzQ29udGFpbmVyLFxuICBpbmJveEJ0bixcbiAgZmlsdGVyc0NvbnRhaW5lcixcbiAgZGFpbHlGaWx0ZXJCdG4sXG4gIHdlZWtseUZpbHRlckJ0bixcbiAgaGlnaFByaW9yaXR5RmlsdGVyQnRuLFxuICBhZGRQcm9qZWN0Q29udGFpbmVyLFxuICBwcm9qZWN0Rm9ybSxcbiAgcHJvamVjdEZvcm1JbnB1dCxcbiAgcHJvamVjdEZvcm1DYW5jZWxCdG4sXG4gIHBhZ2VUaXRsZUNvbnRhaW5lcixcbiAgcGFnZVRpdGxlLFxuICBsaXN0Q29udGFpbmVyLFxuICB0YXNrRm9ybSxcbiAgdGl0bGVJbnB1dCxcbiAgZGVzY3JpcHRpb25JbnB1dCxcbiAgZHVlRGF0ZUlucHV0LFxuICBwcmlvcml0eUlucHV0LFxuICBwcm9qZWN0SW5wdXQsXG4gIHRhc2tGb3JtQ2FuY2VsQnRuLFxufSBmcm9tIFwiLi9jb21wb25lbnRzL0RPTVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRhc2tzIGhhbmRsaW5nXG5cbmNvbnN0IHRhc2tMaXN0ID0gW107XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gIHRhc2tGb3JtLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZS1pbi1kb3duLXJldmVyc2UgMC44c1wiO1xuICBiYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtb3V0IDAuOHNcIjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFza0Zvcm0uc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICBiYWNrZHJvcC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBcIm5vcm1hbFwiO1xuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB9LCA4MDApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgcmVyZW5kZXJVbChcImluYm94XCIpOyBcbiAgfSwgNjAwKTtcbn1cblxuYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0Zvcm0pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGxldCB0YXNrID0gY3JlYXRlVGFzayhcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgZHVlRGF0ZUlucHV0LFxuICAgIHByaW9yaXR5SW5wdXQsXG4gICAgcHJvamVjdElucHV0XG4gICk7XG5cbiAgY2xvc2VUYXNrRm9ybSgpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tcmlnaHQgMXNcIjtcbiAgICBhZGRUYXNrKGxpc3RDb250YWluZXIsIHRhc2ssIHRhc2tMaXN0KTtcbiAgfSwgMTAwMCk7XG5cbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICB9LCAxODAwKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERlbGV0ZSB0YXNrIGZ1bmN0aW9uYWxpdHlcblxuICBsZXQgZGVsZXRlVGFza0J0biA9IFsuLi50YXNrLnRhc2tFbC5jaGlsZHJlbl0uZmlsdGVyKFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJkZWxldGUtdGFza19fYnRuXCJcbiAgKVswXTtcblxuICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluLXJpZ2h0LXJldmVyc2UgMC44c1wiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFzay50YXNrRWwuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgIHJlbW92ZVRhc2sobGlzdENvbnRhaW5lciwgdGFzaywgdGFza0xpc3QpO1xuICAgIH0sIDgwMCk7XG4gIH0pO1xufSk7XG5cbnRhc2tGb3JtQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRhc2tGb3JtKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQcm9qZWN0cyBoYW5kbGluZ1xuXG4vLyAtLS1BREQgUFJPSkVDVFxuXG5mdW5jdGlvbiBjbG9zZUFkZFByb2plY3RGb3JtKCkge1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBwcm9qZWN0Rm9ybUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xufSk7XG5cbnByb2plY3RGb3JtQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUFkZFByb2plY3RGb3JtKTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAocHJvamVjdEZvcm1JbnB1dC52YWx1ZS50cmltKCkgIT09IFwiXCIpIHtcbiAgICBsZXQgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXG4gICAgICBwcm9qZWN0Rm9ybUlucHV0LnZhbHVlLnRyaW0oKSxcbiAgICAgIHByb2plY3RJbnB1dCxcbiAgICAgIHByb2plY3RzQ29udGFpbmVyXG4gICAgKTtcbiAgICBwcm9qZWN0LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVyZW5kZXJVbChcInByb2plY3RcIiwgcHJvamVjdC5uYW1lKTtcblxuICAgICAgLy8gLS0tUkVNT1ZFIFBST0pFQ1RcblxuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuXG4gICAgICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlLXByb2plY3RfX2J0blwiO1xuICAgICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0Lm5hbWUsIHRhc2tMaXN0LCBwcm9qZWN0SW5wdXQsIHByb2plY3RzQ29udGFpbmVyKTtcbiAgICAgICAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICAgICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5yZW1vdmUoZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgICB9KTtcblxuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIH0pO1xuICB9XG4gIGNsb3NlQWRkUHJvamVjdEZvcm0oKTtcbn0pO1xuXG4vLyAtLS1NT0JJTEUgQ0xPU0UgQUREIFBST0pFQ1QgRk9STVxuXG5tb2JpbGVCYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjbG9zZUFkZFByb2plY3RGb3JtKCk7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBmaWx0ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgbW9iaWxlQmFja2Ryb3Auc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLW91dCAwLjhzXCI7XG4gIG5hdkJ1dHRvbnMuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlLWluLWxlZnQtcmV2ZXJzZSAwLjhzXCI7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNsb3NlTWVudSgpO1xuICAgIG1vYmlsZUJhY2tkcm9wLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgbmF2QnV0dG9ucy5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICB9LCA4MDApO1xufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmlsdGVyIGhhbmRsaW5nXG5cbmZ1bmN0aW9uIHJlcmVuZGVyVWwoZmlsdGVyVHlwZSwgcHJvamVjdE5hbWUgPSBcIlwiKSB7XG4gIGxldCBuZXdVbExpc3QgPSBjcmVhdGVGaWx0ZXJlZExpc3QoZmlsdGVyVHlwZSwgdGFza0xpc3QsIHByb2plY3ROYW1lKTtcbiAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1VsTGlzdCk7XG4gIHBhZ2VUaXRsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBwYWdlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbn1cblxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gIGNsb3NlTWVudSgpO1xufSk7XG5cbmhpZ2hQcmlvcml0eUZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZXJlbmRlclVsKFwiaGlnaCBwcmlvcml0eVwiKTtcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJIaWdoIHByaW9yaXR5XCI7XG4gIGNsb3NlTWVudSgpO1xufSk7XG5cbmRhaWx5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJ0b2RheVwiKTtcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICBjbG9zZU1lbnUoKTtcbn0pO1xuXG53ZWVrbHlGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcIndlZWtcIik7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiVGhpcyB3ZWVrXCI7XG4gIGNsb3NlTWVudSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=