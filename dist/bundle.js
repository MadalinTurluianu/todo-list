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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes grow {\n  0% {\n    max-height: 0px;\n  }\n  100% {\n    max-height: 6rem;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes fade-in-down {\n  0% {\n    opacity: 0%;\n    transform: translateY(-2rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0rem);\n  }\n}\n@keyframes fade-in-right {\n  0% {\n    opacity: 0%;\n    transform: translateX(-3rem);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateX(0rem);\n  }\n}\n* {\n  box-sizing: border-box;\n  font-family: sans-serif;\n  color: #6743bb;\n}\n\n.inactive {\n  display: none !important;\n}\n\n.high-priority {\n  background-color: rgba(255, 255, 255, 0.603) !important;\n  background-image: linear-gradient(-45deg, rgba(248, 54, 0, 0.267), rgba(249, 213, 35, 0.514)) !important;\n}\n\noption {\n  cursor: pointer;\n}\n\nbody {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  overflow-x: hidden;\n  background-image: linear-gradient(45deg, #B993D6, #8CA6DB);\n}\n\n.backdrop {\n  background-image: linear-gradient(45deg, #ffffff8e, #ffffff52 30%, #ffffffa8 30%, #ffffff3b 32%, #ffffff3b 32%, #ffffff0a 90%, #ffffffa8 90%, #ffffff09 92%, #ffffff00);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  animation: fade-in 1s;\n}\n\nbutton {\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  border-radius: 14px;\n  width: 5rem;\n  padding: 0.3rem;\n  font-size: 0.8rem;\n}\n\ninput,\nselect,\noption {\n  background-color: rgba(255, 255, 255, 0.603);\n}\n\nnav {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 1rem 0 1rem;\n  height: 8rem;\n}\n\nnav h1 {\n  color: rgba(255, 255, 255, 0.877);\n  min-width: 7rem;\n  margin: 0;\n}\n\n.nav-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  width: clamp(8rem, 80%, 25rem);\n}\n\n.wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 14px;\n  transition: height;\n  width: 8rem;\n}\n\n.wrapper button {\n  background: transparent;\n  width: 8rem;\n}\n\n.filters-container,\n.add-project__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.603);\n  animation: grow 0.3s;\n  overflow: hidden;\n  width: 90%;\n}\n.filters-container button,\n.add-project__container button {\n  color: rgba(255, 255, 255, 0.877);\n}\n.filters-container .add-project_btn,\n.add-project__container .add-project_btn {\n  color: #6743bb;\n}\n\n.add-project__form {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.add-project__form input {\n  width: 90%;\n  margin: auto;\n}\n.add-project__form button {\n  color: #6743bb;\n}\n\n.buttons-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n}\n.buttons-container button {\n  width: 3rem;\n  padding: 0;\n}\n\nmain {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 10rem;\n}\n\n.page-title__container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.603);\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.3rem;\n}\n.page-title__container h2 {\n  color: rgba(255, 255, 255, 0.877);\n  margin: 0;\n}\n.page-title__container .delete-project__btn {\n  position: absolute;\n  right: -6rem;\n  top: center;\n}\n\n.add-task__btn {\n  width: 5rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 0.5rem 0;\n}\n\n.add-task__form {\n  position: absolute;\n  z-index: 3;\n  top: 30vh;\n  animation: fade-in-down 0.8s;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  row-gap: 0.8rem;\n  column-gap: 0.5rem;\n  width: clamp(10rem, 90%, 50rem);\n  box-shadow: -2px 2px rgba(255, 255, 255, 0.466);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  padding: 1rem;\n  border-radius: 15px;\n}\n\nmain form div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-column: 1/3;\n}\n\nmain form button {\n  background-color: transparent;\n  width: 5rem;\n  margin-top: 1rem;\n}\n\ninput,\nmain select {\n  height: 1.2rem;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n}\n\nlabel {\n  text-align: center;\n  font-size: 0.9rem;\n}\n\ninput:hover,\ninput:active,\ninput:focus,\nselect:hover,\nselect:active,\nselect:focus,\nbutton:hover,\nbutton:active,\nbutton:focus {\n  outline: none;\n}\n\n.list-container {\n  width: 100%;\n}\n\n.list-container ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style-type: none;\n  margin-block-start: 2rem;\n  margin-block-end: 2rem;\n  padding-inline-start: 0;\n  width: 100%;\n}\n\nli {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto auto;\n  grid-template-rows: 2rem 1.5rem;\n  grid-template-areas: \"TITLE DATE\" \"DESCRIPTION DESCRIPTION\";\n  width: clamp(10rem, 90%, 50rem);\n  margin: 0;\n  margin-bottom: 2rem;\n  padding: 0.5rem 1rem;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.432), rgba(255, 255, 255, 0.178));\n  border-radius: 20px;\n}\n\n.task-title {\n  grid-area: TITLE;\n}\n\n.task-description {\n  grid-area: DESCRIPTION;\n}\n\n.task-date {\n  grid-area: DATE;\n  font-size: 0.8rem;\n  margin-left: 0.8rem;\n}\n\n.delete-task__btn {\n  position: absolute;\n  right: 1.2rem;\n  top: center;\n  border-radius: 5px;\n  border: 1px solid rgba(255, 255, 255, 0.603);\n  width: 1.3rem;\n  height: 1.3rem;\n  background-image: none;\n  background-color: transparent;\n}\n\nli h2,\nli p {\n  margin: 0;\n}\n\n/*# sourceMappingURL=main.css.map */\n", "",{"version":3,"sources":["webpack://./src/style/main.scss","webpack://./src/style/main.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "projectsContainer": () => (/* binding */ projectsContainer),
/* harmony export */   "inboxBtn": () => (/* binding */ inboxBtn),
/* harmony export */   "dailyFilterBtn": () => (/* binding */ dailyFilterBtn),
/* harmony export */   "weeklyFilterBtn": () => (/* binding */ weeklyFilterBtn),
/* harmony export */   "highPriorityFilterBtn": () => (/* binding */ highPriorityFilterBtn),
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

// ---------------------------------------------NAV

const nav = document.querySelector("nav");

const addProjectBtn = document.querySelector(".add-project_btn");
const projectsContainer = document.querySelector(".projects-container");

// --FILTERS

const inboxBtn = document.querySelector(".inbox");
const filtersBtn = document.querySelector(".filters");
const projectsBtn = document.querySelector(".projects");
const filtersContainerBtn = document.querySelector(".filters-container");
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

backdrop.addEventListener("click", function() {
  taskForm.classList.add("inactive");
  backdrop.classList.add("inactive");
})

priorityInput.addEventListener("change", function () {
  if (priorityInput.value === "high") {
    priorityInput.classList.add("high-priority");
  }
});

addTaskBtn.addEventListener("click", function () {
  taskForm.classList.remove("inactive");
  priorityInput.classList.remove("high-priority");
  backdrop.classList.remove("inactive");
  document.querySelector("ul").classList.add("inactive");
});

inboxBtn.addEventListener("click", function () {
  filtersContainerBtn.classList.add("inactive");
  addProjectContainer.classList.add("inactive");
  pageTitle.textContent = "Index";
});

filtersBtn.addEventListener("click", function () {
  filtersContainerBtn.classList.toggle("inactive");
  addProjectContainer.classList.add("inactive");
});

projectsBtn.addEventListener("click", function () {
  filtersContainerBtn.classList.add("inactive");
  addProjectContainer.classList.toggle("inactive");
});




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
      let index = week.indexOf(currentDate.split(" ")[0]);

      console.log(currentDate.split(" ")[2]);
      console.log(taskDay);

      for (let i = 0; i <= index; i++) {
        if (
          `${taskDay} ${taskMonth} ${taskYear}` ===
          `${Number(currentDate.split(" ")[2]) - index - i} ${currentDate.split(" ")[1]} ${currentDate.split(" ")[3]}`
        ) {
          return true;
        }
      }
      for (let i = index+1; i < 6; i++) {
        if (
          `${taskDay} ${taskMonth} ${taskYear}` ===
          `${Number(currentDate.split(" ")[2]) + 6 - i} ${currentDate.split(" ")[1]} ${currentDate.split(" ")[3]}`
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
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.classList.add("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.titleInput.value = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput.value = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.dueDateInput.value = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.priorityInput.value = "normal";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput.value = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.backdrop.classList.add("inactive");
  document.querySelector("ul").classList.remove("inactive");
}

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let task = (0,_components_newTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.titleInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.descriptionInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.dueDateInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.priorityInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput
  );

  task.taskEl.style.animation = "fade-in-right 1s";
  (0,_components_tasks__WEBPACK_IMPORTED_MODULE_2__.addTask)(_components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer, task, taskList);
  closeTaskForm();
  rerenderUl("inbox");
  setTimeout(() => {
    task.taskEl.style.animation = ""
  }, 1000);;

  // ------------------------------------------- Delete task functionality

  let deleteTaskBtn = [...task.taskEl.children].filter(
    (element) => element.className === "delete-task__btn"
  )[0];

  deleteTaskBtn.addEventListener(
    "click",
    _components_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTask.bind(null, _components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer, task, taskList)
  );
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

      let deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "delete-project__btn";
      deleteProjectBtn.textContent = "Delete"

      deleteProjectBtn.addEventListener("click", function() {
        ;(0,_components_project__WEBPACK_IMPORTED_MODULE_4__.removeProject)(project.name, taskList, _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectInput, _components_DOM__WEBPACK_IMPORTED_MODULE_5__.projectsContainer);
        rerenderUl("inbox");
        _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "Inbox";
        _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.removeChild(deleteProjectBtn);
      })

      _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitleContainer.appendChild(deleteProjectBtn);
    });
  }
  closeAddProjectForm();
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "Inbox";
});


// ------------------------------------------- Filter handling

function rerenderUl(filterType, projectName = "") {
  let newUlList = (0,_components_filteredLists__WEBPACK_IMPORTED_MODULE_3__.createFilteredList)(filterType, taskList, projectName);
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer.innerHTML = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.listContainer.appendChild(newUlList);
}

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.inboxBtn.addEventListener("click", function () {
  rerenderUl("inbox");
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.highPriorityFilterBtn.addEventListener("click", function () {
  rerenderUl("high priority");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "High priority";
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.dailyFilterBtn.addEventListener("click", function () {
  rerenderUl("today");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "Today";
});

_components_DOM__WEBPACK_IMPORTED_MODULE_5__.weeklyFilterBtn.addEventListener("click", function () {
  rerenderUl("week");
  _components_DOM__WEBPACK_IMPORTED_MODULE_5__.pageTitle.textContent = "This week";
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsS0FBSyxPQUFPLFlBQVksTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxhQUFhLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxN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aEM7QUFDQSxFQUFFLGtFQUFxQjtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uY3NzPzgzMzEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZmlsdGVyZWRMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBncm93IHtcXG4gIDAlIHtcXG4gICAgbWF4LWhlaWdodDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG1heC1oZWlnaHQ6IDZyZW07XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbi1kb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcmVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuICB9XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDI0OCwgNTQsIDAsIDAuMjY3KSwgcmdiYSgyNDksIDIxMywgMzUsIDAuNTE0KSkgIWltcG9ydGFudDtcXG59XFxuXFxub3B0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjQjk5M0Q2LCAjOENBNkRCKTtcXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZmZmZjhlLCAjZmZmZmZmNTIgMzAlLCAjZmZmZmZmYTggMzAlLCAjZmZmZmZmM2IgMzIlLCAjZmZmZmZmM2IgMzIlLCAjZmZmZmZmMGEgOTAlLCAjZmZmZmZmYTggOTAlLCAjZmZmZmZmMDkgOTIlLCAjZmZmZmZmMDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgd2lkdGg6IDVyZW07XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbm9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG59XFxuXFxubmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbn1cXG5cXG5uYXYgaDEge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xcbiAgbWluLXdpZHRoOiA3cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IGNsYW1wKDhyZW0sIDgwJSwgMjVyZW0pO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIHRyYW5zaXRpb246IGhlaWdodDtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuXFxuLmZpbHRlcnMtY29udGFpbmVyLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxuICBhbmltYXRpb246IGdyb3cgMC4zcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogOTAlO1xcbn1cXG4uZmlsdGVycy1jb250YWluZXIgYnV0dG9uLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3Nyk7XFxufVxcbi5maWx0ZXJzLWNvbnRhaW5lciAuYWRkLXByb2plY3RfYnRuLFxcbi5hZGQtcHJvamVjdF9fY29udGFpbmVyIC5hZGQtcHJvamVjdF9idG4ge1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5hZGQtcHJvamVjdF9fZm9ybSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLmFkZC1wcm9qZWN0X19mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5hZGQtcHJvamVjdF9fZm9ybSBidXR0b24ge1xcbiAgY29sb3I6ICM2NzQzYmI7XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG4uYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXG59XFxuXFxuLnBhZ2UtdGl0bGVfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxufVxcbi5wYWdlLXRpdGxlX19jb250YWluZXIgaDIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzcpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucGFnZS10aXRsZV9fY29udGFpbmVyIC5kZWxldGUtcHJvamVjdF9fYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNnJlbTtcXG4gIHRvcDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2tfX2J0biB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNzgpKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2tfX2Zvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIHRvcDogMzB2aDtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbi1kb3duIDAuOHM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgcm93LWdhcDogMC44cmVtO1xcbiAgY29sdW1uLWdhcDogMC41cmVtO1xcbiAgd2lkdGg6IGNsYW1wKDEwcmVtLCA5MCUsIDUwcmVtKTtcXG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjYpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDMyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3OCkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbm1haW4gZm9ybSBkaXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG5tYWluIGZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCxcXG5tYWluIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuaW5wdXQ6aG92ZXIsXFxuaW5wdXQ6YWN0aXZlLFxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpob3ZlcixcXG5zZWxlY3Q6YWN0aXZlLFxcbnNlbGVjdDpmb2N1cyxcXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmFjdGl2ZSxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgdWwge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMnJlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDJyZW07XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5saSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiVElUTEUgREFURVxcXCIgXFxcIkRFU0NSSVBUSU9OIERFU0NSSVBUSU9OXFxcIjtcXG4gIHdpZHRoOiBjbGFtcCgxMHJlbSwgOTAlLCA1MHJlbSk7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc4KSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBncmlkLWFyZWE6IFRJVExFO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IERFU0NSSVBUSU9OO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGdyaWQtYXJlYTogREFURTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcXG59XFxuXFxuLmRlbGV0ZS10YXNrX19idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEuMnJlbTtcXG4gIHRvcDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XFxuICB3aWR0aDogMS4zcmVtO1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmxpIGgyLFxcbmxpIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tYWluLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBNEJBO0VBQ0U7SUFDRSxlQUFBO0VDM0JGO0VENEJDO0lBQ0MsZ0JBQUE7RUMxQkY7QUFDRjtBRDZCQTtFQUNFO0lBQ0UsV0FBQTtFQzNCRjtFRDRCQztJQUNDLGFBQUE7RUMxQkY7QUFDRjtBRDZCQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLDRCQUFBO0VDM0JGO0VENEJDO0lBQ0MsYUFBQTtJQUNBLDJCQUFBO0VDMUJGO0FBQ0Y7QUQ2QkE7RUFDRTtJQUNFLFdBQUE7SUFDQSw0QkFBQTtFQzNCRjtFRDRCQztJQUNDLGFBQUE7SUFDQSwyQkFBQTtFQzFCRjtBQUNGO0FEK0JBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBaEVVO0FDbUNaOztBRGdDQTtFQUNFLHdCQUFBO0FDN0JGOztBRGdDQTtFQUNFLHVEQUFBO0VBQ0Esd0dBQUE7QUM3QkY7O0FEZ0NBO0VBQ0UsZUFBQTtBQzdCRjs7QURnQ0E7RUFqRUUsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtF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RSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BOztFQUVFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0E7Ozs7Ozs7OztFQVNFLGFBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURPQTtFQTlSRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBNlJBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkRBQ0U7RUFFRiwrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0dBdlVlO0VBd1VmLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0F6Vk87RUEwVlAsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FDSEY7O0FETUE7O0VBRUUsU0FBQTtBQ0hGOztBQUVBLG1DQUFtQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2Ryb3BcIik7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5BVlxuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdF9idG5cIik7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4vLyAtLUZJTFRFUlNcblxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xuY29uc3QgZmlsdGVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyc1wiKTtcbmNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IGZpbHRlcnNDb250YWluZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcnMtY29udGFpbmVyXCIpO1xuY29uc3QgZGFpbHlGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWZpbHRlclwiKTtcbmNvbnN0IHdlZWtseUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vla2x5LWZpbHRlclwiKTtcbmNvbnN0IGhpZ2hQcmlvcml0eUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHAtZmlsdGVyXCIpO1xuXG4vLyAtLS1QUk9KRUNUIEZPUk0gQ09OVEVOVFxuY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLmFkZC1wcm9qZWN0X19jb250YWluZXJcIlxuKTtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0X19mb3JtXCIpO1xuY29uc3QgcHJvamVjdEZvcm1JbnB1dCA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnN0IHByb2plY3RGb3JtQ2FuY2VsQnRuID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPSdidXR0b24nXVwiKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTUFJTlxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza19fYnRuXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWNvbnRhaW5lclwiKTtcblxuLy8gLS0tUEFHRSBUSVRMRSArIENBTkNFTCBQUk9KRUNUXG5cbmNvbnN0IHBhZ2VUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS10aXRsZV9fY29udGFpbmVyXCIpO1xuY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xucGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xucGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG5cbi8vIC0tLVRBU0sgRk9STSBDT05URU5UXG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza19fZm9ybVwiKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tdGl0bGVcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWR1ZS1kYXRlXCIpO1xuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1wcmlvcml0eVwiKTtcbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmVsb25nLXByb2plY3RcIik7XG5jb25zdCB0YXNrRm9ybUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLmFkZC10YXNrX19mb3JtIGJ1dHRvblt0eXBlPSdidXR0b24nXVwiXG4pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MT0dJQ1xuXG5iYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xufSlcblxucHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHByaW9yaXR5SW5wdXQudmFsdWUgPT09IFwiaGlnaFwiKSB7XG4gICAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgfVxufSk7XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoLXByaW9yaXR5XCIpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG59KTtcblxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmlsdGVyc0NvbnRhaW5lckJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkluZGV4XCI7XG59KTtcblxuZmlsdGVyc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBmaWx0ZXJzQ29udGFpbmVyQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG59KTtcblxucHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZmlsdGVyc0NvbnRhaW5lckJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xufSk7XG5cbmV4cG9ydCB7XG4gIGJhY2tkcm9wLFxuICBuYXYsXG4gIGFkZFByb2plY3RCdG4sXG4gIHByb2plY3RzQ29udGFpbmVyLFxuICBpbmJveEJ0bixcbiAgZGFpbHlGaWx0ZXJCdG4sXG4gIHdlZWtseUZpbHRlckJ0bixcbiAgaGlnaFByaW9yaXR5RmlsdGVyQnRuLFxuICBwcm9qZWN0Rm9ybSxcbiAgcHJvamVjdEZvcm1JbnB1dCxcbiAgcHJvamVjdEZvcm1DYW5jZWxCdG4sXG4gIHBhZ2VUaXRsZUNvbnRhaW5lcixcbiAgcGFnZVRpdGxlLFxuICBtYWluLFxuICBhZGRUYXNrQnRuLFxuICB1bCxcbiAgbGlzdENvbnRhaW5lcixcbiAgdGFza0Zvcm0sXG4gIHRpdGxlSW5wdXQsXG4gIGRlc2NyaXB0aW9uSW5wdXQsXG4gIGR1ZURhdGVJbnB1dCxcbiAgcHJpb3JpdHlJbnB1dCxcbiAgcHJvamVjdElucHV0LFxuICB0YXNrRm9ybUNhbmNlbEJ0bixcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVGaWx0ZXJlZExpc3QoZmlsdGVyVHlwZSwgb3JpZ2luTGlzdCwgcHJvamVjdE5hbWUgPSBcIlwiKSB7XG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNwbGl0KFwiIFwiKS5zbGljZSgwLCA0KS5qb2luKFwiIFwiKTtcbiAgbGV0IGZpbHRlcmVkQXJyYXk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluYm94XG5cbiAgaWYgKGZpbHRlclR5cGUgPT09IFwiaW5ib3hcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIUCBmaWx0ZXJcbiAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcImhpZ2ggcHJpb3JpdHlcIikge1xuICAgIGZpbHRlcmVkQXJyYXkgPSBvcmlnaW5MaXN0LmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiB0YXNrLnRhc2tPYmoucHJpb3JpdHkgPT09IFwiaGlnaFwiXG4gICAgKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGFpbHkgZmlsdGVyXG4gIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tPYmouZHVlRGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuc2xpY2UoMCwgNClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHRhc2tEYXRlID09PSBjdXJyZW50RGF0ZTtcbiAgICB9KTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2Vla2x5IGZpbHRlclxuICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwid2Vla1wiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB3ZWVrID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xuICAgICAgbGV0IHRhc2tEYXRlQXJyID0gbmV3IERhdGUodGFzay50YXNrT2JqLmR1ZURhdGUpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLnNsaWNlKDAsIDQpO1xuICAgICAgbGV0IHRhc2tNb250aCA9IHRhc2tEYXRlQXJyWzFdO1xuICAgICAgbGV0IHRhc2tEYXkgPSB0YXNrRGF0ZUFyclsyXTtcbiAgICAgIGxldCB0YXNrWWVhciA9IHRhc2tEYXRlQXJyWzNdO1xuICAgICAgbGV0IGluZGV4ID0gd2Vlay5pbmRleE9mKGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVswXSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVsyXSk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrRGF5KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYCR7dGFza0RheX0gJHt0YXNrTW9udGh9ICR7dGFza1llYXJ9YCA9PT1cbiAgICAgICAgICBgJHtOdW1iZXIoY3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzJdKSAtIGluZGV4IC0gaX0gJHtjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMV19ICR7Y3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzNdfWBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBpbmRleCsxOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBgJHt0YXNrRGF5fSAke3Rhc2tNb250aH0gJHt0YXNrWWVhcn1gID09PVxuICAgICAgICAgIGAke051bWJlcihjdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMl0pICsgNiAtIGl9ICR7Y3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzFdfSAke2N1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVszXX1gXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZpbHRlciBieSBwcm9qZWN0XG4gIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICBmaWx0ZXJlZEFycmF5ID0gb3JpZ2luTGlzdC5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gcHJvamVjdE5hbWUgPT09IHRhc2sudGFza09iai5wcm9qZWN0XG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlcmVkQXJyYXkubWFwKCh0YXNrKSA9PiB7XG4gICAgZmlsdGVyZWRMaXN0LmFwcGVuZENoaWxkKHRhc2sudGFza0VsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRmlsdGVyZWRMaXN0IH07XG4iLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgdGhpcy5kdWVEYXRlID1cbiAgICAgIGR1ZURhdGUudmFsdWUgPT09IFwiXCJcbiAgICAgICAgPyBcIlwiXG4gICAgICAgIDogbmV3IERhdGUoZHVlRGF0ZS52YWx1ZSkudG9TdHJpbmcoKS5zcGxpdChcIiBcIikuc2xpY2UoMSwgNCkuam9pbihcIiBcIik7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3QudmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tPYmogPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcblxuICBsZXQgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tPYmoudGl0bGU7XG5cbiAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrT2JqLmRlc2NyaXB0aW9uO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG5cbiAgbGV0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodGFza09iai5kdWVEYXRlKTtcbiAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLmR1ZURhdGUgPT09IFwiXCIgPyBcIlwiIDpgJHtkYXRlLmdldERhdGUoKSA+PSAxMCA/IGRhdGUuZ2V0RGF0ZSgpOiBgMCR7ZGF0ZS5nZXREYXRlKCl9YH0tJHtkYXRlLmdldE1vbnRoKCkgKyAxID49IDEwID8gZGF0ZS5nZXRNb250aCgpICsgMTogYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YH0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbiAgdGFza0R1ZURhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWRhdGVcIjtcblxuICBpZiAodGFza09iai5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gIH0gXG5cbiAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVUYXNrQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlLXRhc2tfX2J0blwiO1xuXG4gIHRhc2tFbC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gIHJldHVybiB7IHRhc2tFbCwgdGFza09iaiB9O1xufVxuXG5leHBvcnQgeyBUYXNrLCBjcmVhdGVUYXNrIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBvcHRpb25QYXJlbnQsIGJ0blBhcmVudCkge1xuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWU7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICBvcHRpb25QYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIGJ0blBhcmVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGxldCBuYW1lID0gcHJvamVjdE5hbWU7XG5cbiAgcmV0dXJuIHsgb3B0aW9uLCBidXR0b24sIG5hbWUgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSwgb3JpZ2luYWxBcnJheSwgc2VsZWN0LCBwcm9qQ29udGFpbmVyKSB7XG4gIGZvciAobGV0IHRhc2sgb2Ygb3JpZ2luYWxBcnJheSkge1xuICAgIGlmICh0YXNrLnRhc2tPYmoucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIG9yaWdpbmFsQXJyYXkuc3BsaWNlKG9yaWdpbmFsQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG9wdGlvbnMgPSBbLi4uc2VsZWN0LmNoaWxkcmVuXTtcbiAgbGV0IGluZGV4ID0gb3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uLnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZSk7XG5cbiAgc2VsZWN0LnJlbW92ZUNoaWxkKHNlbGVjdC5jaGlsZHJlbltpbmRleF0pO1xuXG4gIGxldCBwcm9qZWN0cyA9IFsuLi5wcm9qQ29udGFpbmVyLmNoaWxkcmVuXTtcbiAgbGV0IGluZGV4MiA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWVcbiAgKTtcbiAgcHJvakNvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qQ29udGFpbmVyLmNoaWxkcmVuW2luZGV4Ml0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH07XG4iLCJmdW5jdGlvbiBhZGRUYXNrKGNvbnRhaW5lciwgdGFzaywgc3RvcmFnZUFycmF5KSB7XG4gIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwidWxcIikuYXBwZW5kQ2hpbGQodGFzay50YXNrRWwpO1xuICBzdG9yYWdlQXJyYXkucHVzaCh0YXNrKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhjb250YWluZXIsIHRhc2ssIHN0b3JhZ2VBcnJheSkge1xuICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcInVsXCIpLnJlbW92ZUNoaWxkKHRhc2sudGFza0VsKTtcbiAgc3RvcmFnZUFycmF5LnNwbGljZShzdG9yYWdlQXJyYXkuaW5kZXhPZih0YXNrKSwgMSk7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2ssIHJlbW92ZVRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlL21haW4uY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY29tcG9uZW50cy9uZXdUYXNrXCI7XG5pbXBvcnQgeyBhZGRUYXNrLCByZW1vdmVUYXNrIH0gZnJvbSBcIi4vY29tcG9uZW50cy90YXNrc1wiO1xuaW1wb3J0IHsgY3JlYXRlRmlsdGVyZWRMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWx0ZXJlZExpc3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0XCI7XG5pbXBvcnQge1xuICBiYWNrZHJvcCxcbiAgYWRkUHJvamVjdEJ0bixcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIGluYm94QnRuLFxuICBkYWlseUZpbHRlckJ0bixcbiAgd2Vla2x5RmlsdGVyQnRuLFxuICBoaWdoUHJpb3JpdHlGaWx0ZXJCdG4sXG4gIHByb2plY3RGb3JtLFxuICBwcm9qZWN0Rm9ybUlucHV0LFxuICBwcm9qZWN0Rm9ybUNhbmNlbEJ0bixcbiAgcGFnZVRpdGxlQ29udGFpbmVyLFxuICBwYWdlVGl0bGUsXG4gIGxpc3RDb250YWluZXIsXG4gIHRhc2tGb3JtLFxuICB0aXRsZUlucHV0LFxuICBkZXNjcmlwdGlvbklucHV0LFxuICBkdWVEYXRlSW5wdXQsXG4gIHByaW9yaXR5SW5wdXQsXG4gIHByb2plY3RJbnB1dCxcbiAgdGFza0Zvcm1DYW5jZWxCdG4sXG59IGZyb20gXCIuL2NvbXBvbmVudHMvRE9NXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVGFza3MgaGFuZGxpbmdcblxuY29uc3QgdGFza0xpc3QgPSBbXTtcblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBcIm5vcm1hbFwiO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG59XG5cbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgcHJpb3JpdHlJbnB1dCxcbiAgICBwcm9qZWN0SW5wdXRcbiAgKTtcblxuICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcImZhZGUtaW4tcmlnaHQgMXNcIjtcbiAgYWRkVGFzayhsaXN0Q29udGFpbmVyLCB0YXNrLCB0YXNrTGlzdCk7XG4gIGNsb3NlVGFza0Zvcm0oKTtcbiAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXNrLnRhc2tFbC5zdHlsZS5hbmltYXRpb24gPSBcIlwiXG4gIH0sIDEwMDApOztcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERlbGV0ZSB0YXNrIGZ1bmN0aW9uYWxpdHlcblxuICBsZXQgZGVsZXRlVGFza0J0biA9IFsuLi50YXNrLnRhc2tFbC5jaGlsZHJlbl0uZmlsdGVyKFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJkZWxldGUtdGFza19fYnRuXCJcbiAgKVswXTtcblxuICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIHJlbW92ZVRhc2suYmluZChudWxsLCBsaXN0Q29udGFpbmVyLCB0YXNrLCB0YXNrTGlzdClcbiAgKTtcbn0pO1xuXG50YXNrRm9ybUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUHJvamVjdHMgaGFuZGxpbmdcblxuLy8gLS0tQUREIFBST0pFQ1RcblxuZnVuY3Rpb24gY2xvc2VBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgcHJvamVjdEZvcm1JbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbn0pO1xuXG5wcm9qZWN0Rm9ybUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VBZGRQcm9qZWN0Rm9ybSk7XG5cbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKHByb2plY3RGb3JtSW5wdXQudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgbGV0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFxuICAgICAgcHJvamVjdEZvcm1JbnB1dC52YWx1ZS50cmltKCksXG4gICAgICBwcm9qZWN0SW5wdXQsXG4gICAgICBwcm9qZWN0c0NvbnRhaW5lclxuICAgICk7XG4gICAgcHJvamVjdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlcmVuZGVyVWwoXCJwcm9qZWN0XCIsIHByb2plY3QubmFtZSk7XG5cbiAgICAgIC8vIC0tLVJFTU9WRSBQUk9KRUNUXG5cbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcGFnZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtcHJvamVjdF9fYnRuXCI7XG4gICAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxuXG4gICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0Lm5hbWUsIHRhc2tMaXN0LCBwcm9qZWN0SW5wdXQsIHByb2plY3RzQ29udGFpbmVyKTtcbiAgICAgICAgcmVyZW5kZXJVbChcImluYm94XCIpO1xuICAgICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG4gICAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5yZW1vdmVDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgIH0pXG5cbiAgICAgIHBhZ2VUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICB9KTtcbiAgfVxuICBjbG9zZUFkZFByb2plY3RGb3JtKCk7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbn0pO1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmlsdGVyIGhhbmRsaW5nXG5cbmZ1bmN0aW9uIHJlcmVuZGVyVWwoZmlsdGVyVHlwZSwgcHJvamVjdE5hbWUgPSBcIlwiKSB7XG4gIGxldCBuZXdVbExpc3QgPSBjcmVhdGVGaWx0ZXJlZExpc3QoZmlsdGVyVHlwZSwgdGFza0xpc3QsIHByb2plY3ROYW1lKTtcbiAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1VsTGlzdCk7XG59XG5cbmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJpbmJveFwiKTtcbn0pO1xuXG5oaWdoUHJpb3JpdHlGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVyZW5kZXJVbChcImhpZ2ggcHJpb3JpdHlcIik7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiSGlnaCBwcmlvcml0eVwiO1xufSk7XG5cbmRhaWx5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcmVuZGVyVWwoXCJ0b2RheVwiKTtcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xufSk7XG5cbndlZWtseUZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZXJlbmRlclVsKFwid2Vla1wiKTtcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJUaGlzIHdlZWtcIjtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9