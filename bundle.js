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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n.inactive {\n  display: none !important;\n}\n\nbody {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-template-columns: clamp(10rem, 30%, 20rem) 1fr;\n  grid-template-rows: 5rem 1fr;\n  grid-template-areas: \"HEADER HEADER\" \"NAV MAIN\";\n  margin: 0;\n  color: #353d40;\n  width: 100%;\n  height: 100vh;\n}\n\nbutton {\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n}\n\nheader {\n  grid-area: HEADER;\n  background-color: #1b1b1b;\n  color: #f2f2f2;\n  padding-left: 3rem;\n}\n\nnav {\n  grid-area: NAV;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  background-color: #404040;\n  color: #f2f2f2;\n}\n\nnav h2 {\n  margin-top: 2rem;\n  margin-bottom: 0;\n  text-align: center;\n  width: 80%;\n  border-bottom: 1px solid #f2f2f2;\n  padding-bottom: 1rem;\n}\n\nnav button {\n  background-color: #404040;\n  color: #f2f2f2;\n  border-radius: 5px;\n  width: clamp(6rem, 80%, 20rem);\n  margin-top: 1rem;\n  padding: 0.3rem;\n  font-size: clamp(0.8rem, 3vw, 1rem);\n}\n\nnav button:hover,\nnav button:focus {\n  background-color: #1b1b1b;\n}\n\nmain {\n  grid-area: MAIN;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  background-color: #f2f2f2;\n}\n\n.add-task__btn {\n  width: 5rem;\n  background-color: #404040;\n  color: #f2f2f2;\n  padding: 0.5rem 0;\n  border-radius: 15px;\n}\n\nform {\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  row-gap: 0.8rem;\n  column-gap: 0.5rem;\n  width: clamp(10rem, 90%, 50rem);\n  box-shadow: 0px 2px 6px #0d0d0d;\n  background-color: #404040;\n  padding: 1rem;\n  border-radius: 15px;\n}\n\nform div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-column: 1/3;\n}\n\nform button {\n  background-color: #f2f2f2;\n  color: #353d40;\n  border-radius: 15px;\n  width: 5rem;\n  margin-top: 1rem;\n}\n\ninput,\nselect {\n  height: 1.2rem;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n}\n\nlabel {\n  color: #f2f2f2;\n  text-align: center;\n}\n\ninput {\n  background-color: #f2f2f2;\n}\n\n#form-priority {\n  color: #f2f2f2;\n  background-color: #003f63;\n}\n\ninput:hover,\ninput:active,\ninput:focus,\nselect:hover,\nselect:active,\nselect:focus,\nbutton:hover,\nbutton:active,\nbutton:focus {\n  outline: none;\n}\n\noption {\n  cursor: pointer;\n}\n\noption[value=normal] {\n  color: #f2f2f2;\n  background-color: #003f63;\n}\n\noption[value=high] {\n  color: #353d40;\n  background-color: #f2b138;\n}\n\n.list-container {\n  width: 100%;\n}\n\n.list-container ul {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style-type: none;\n  margin-block-start: 2rem;\n  margin-block-end: 2rem;\n  padding-inline-start: 0;\n  width: 100%;\n}\n\nli {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  grid-template-columns: 1fr 5rem;\n  grid-template-rows: 2rem 1.5rem;\n  grid-template-areas: \"TITLE DATE\" \"DESCRIPTION DESCRIPTION\";\n  width: clamp(10rem, 90%, 50rem);\n  margin: 0;\n  margin-bottom: 2rem;\n  padding: 0.5rem 1rem;\n  box-shadow: 0px 2px 6px #0d0d0d;\n  border-radius: 20px;\n}\n\n.task-title {\n  grid-area: TITLE;\n}\n\n.task-description {\n  grid-area: DESCRIPTION;\n}\n\n.task-date {\n  grid-area: DATE;\n  justify-self: end;\n}\n\n.delete-task__btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  border-radius: 50%;\n  width: 1.7rem;\n  height: 1.7rem;\n  background-color: red;\n  transform: translate(0.6rem, -0.6rem);\n}\n\nli h2,\nli p {\n  margin: 0;\n}\n\n/*# sourceMappingURL=main.css.map */\n", "",{"version":3,"sources":["webpack://./src/style/main.scss","webpack://./src/style/main.css"],"names":[],"mappings":"AAgBA;EACE,sBAAA;ACfF;;ADkBA;EACE,wBAAA;ACfF;;ADkBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mDAAA;EACA,4BAAA;EACA,+CACE;EAEF,SAAA;EACA,cA9BmB;EA+BnB,WAAA;EACA,aAAA;ACjBF;;ADoBA;EACE,iBAAA;EACA,YAAA;EACA,eAAA;ACjBF;;ADoBA;EACE,iBAAA;EACA,yBA9CgB;EA+ChB,cA3CqB;EA4CrB,kBAAA;ACjBF;;ADoBA;EACE,cAAA;EA3CA,oBAAA;EACA,qBAAA;EACA,oBAAA;EACA,aAAA;EA0CA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAxDY;EAyDZ,cAtDqB;ACwCvB;;ADiBA;EACE,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,gCAAA;EACA,oBAAA;ACdF;;ADiBA;EACE,yBAtEY;EAuEZ,cApEqB;EAqErB,kBAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;EACA,mCAAA;ACdF;;ADiBA;;EAEE,yBAlFgB;ACoElB;;ADiBA;EACE,eAAA;EA7EA,oBAAA;EACA,qBAAA;EACA,oBAAA;EACA,aAAA;EA4EA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,yBA5Fc;ACiFhB;;ADcA;EACE,WAAA;EACA,yBA/FY;EAgGZ,cA7FqB;EA8FrB,iBAAA;EACA,mBAAA;ACXF;;ADcA;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,+BAAA;EACA,wBAAA;EACA,eAAA;EACA,kBAAA;EACA,+BAAA;EACA,+BAAA;EACA,yBA/GY;EAgHZ,aAAA;EACA,mBAAA;ACXF;;ADcA;EA5GE,oBAAA;EACA,qBAAA;EACA,oBAAA;EACA,aAAA;EA2GA,mBAAA;EACA,6BAAA;EACA,gBAAA;ACRF;;ADWA;EACE,yBA9Hc;EA+Hd,cA3HmB;EA4HnB,mBAAA;EACA,WAAA;EACA,gBAAA;ACRF;;ADWA;;EAEE,cAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;ACRF;;ADWA;EACE,cAzIqB;EA0IrB,kBAAA;ACRF;;ADWA;EACE,yBAnJc;AC2IhB;;ADWA;EACE,cAlJqB;EAmJrB,yBAlJsB;AC0IxB;;ADWA;;;;;;;;;EASE,aAAA;ACRF;;ADWA;EACE,eAAA;ACRF;;ADWA;EACE,cAvKqB;EAwKrB,yBAvKsB;AC+JxB;;ADWA;EACE,cA7KmB;EA8KnB,yBA3KoB;ACmKtB;;ADWA;EACE,WAAA;ACRF;;ADWA;EA/KE,oBAAA;EACA,qBAAA;EACA,oBAAA;EACA,aAAA;EA8KA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,wBAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;ACLF;;ADQA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,+BAAA;EACA,+BAAA;EACA,2DACE;EAEF,+BAAA;EACA,SAAA;EACA,mBAAA;EACA,oBAAA;EACA,+BAAA;EACA,mBAAA;ACPF;;ADUA;EACE,gBAAA;ACPF;;ADUA;EACE,sBAAA;ACPF;;ADUA;EACE,eAAA;EACA,iBAAA;ACPF;;ADUA;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,qBAAA;EACA,qCAAA;ACPF;;ADUA;;EAEE,SAAA;ACPF;;AAEA,mCAAmC","sourceRoot":""}]);
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
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "addTaskBtn": () => (/* binding */ addTaskBtn),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "titleInput": () => (/* binding */ titleInput),
/* harmony export */   "descriptionInput": () => (/* binding */ descriptionInput),
/* harmony export */   "dueDateInput": () => (/* binding */ dueDateInput),
/* harmony export */   "priorityInput": () => (/* binding */ priorityInput),
/* harmony export */   "ul": () => (/* binding */ ul),
/* harmony export */   "formCancelBtn": () => (/* binding */ formCancelBtn),
/* harmony export */   "inboxBtn": () => (/* binding */ inboxBtn),
/* harmony export */   "todayFilterBtn": () => (/* binding */ todayFilterBtn),
/* harmony export */   "weeklyBtn": () => (/* binding */ weeklyBtn),
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "listContainer": () => (/* binding */ listContainer)
/* harmony export */ });
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.js */ "./src/components/colors.js");


const nav = document.querySelector("nav");
const main = document.querySelector("main");
const addTaskBtn = document.querySelector(".add-task__btn");
const form = document.querySelector("form");
const titleInput = document.querySelector("#form-title");
const descriptionInput = document.querySelector("#form-description");
const dueDateInput = document.querySelector("#form-due-date");
const priorityInput = document.querySelector("#form-priority");
const ul = document.querySelector("ul");
const formCancelBtn = document.querySelector("form button[type='button']");
const inboxBtn = document.querySelector(".inbox");
const todayFilterBtn = document.querySelector(".today");
const weeklyBtn = document.querySelector(".this-week");
const addProjectBtn = document.querySelector(".add-project_btn");
const listContainer = document.querySelector(".list-container");

priorityInput.addEventListener("change", function () {
  if (priorityInput.value === "normal") {
    priorityInput.style.backgroundColor = _colors_js__WEBPACK_IMPORTED_MODULE_0__.normalPriorityColor;
    priorityInput.style.color = _colors_js__WEBPACK_IMPORTED_MODULE_0__.secondaryFontColor;
  } else if (priorityInput.value === "high") {
    priorityInput.style.backgroundColor = _colors_js__WEBPACK_IMPORTED_MODULE_0__.highPriorityColor;
    priorityInput.style.color = _colors_js__WEBPACK_IMPORTED_MODULE_0__.primaryFontColor;
  }
});

addTaskBtn.addEventListener("click", function () {
  form.classList.remove("inactive");
  addTaskBtn.classList.add("inactive");
  priorityInput.style.backgroundColor = _colors_js__WEBPACK_IMPORTED_MODULE_0__.normalPriorityColor;
  priorityInput.style.color = _colors_js__WEBPACK_IMPORTED_MODULE_0__.secondaryFontColor;
});




/***/ }),

/***/ "./src/components/colors.js":
/*!**********************************!*\
  !*** ./src/components/colors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalPriorityColor": () => (/* binding */ normalPriorityColor),
/* harmony export */   "highPriorityColor": () => (/* binding */ highPriorityColor),
/* harmony export */   "primaryFontColor": () => (/* binding */ primaryFontColor),
/* harmony export */   "secondaryFontColor": () => (/* binding */ secondaryFontColor),
/* harmony export */   "primaryColor": () => (/* binding */ primaryColor),
/* harmony export */   "secondaryColor": () => (/* binding */ secondaryColor),
/* harmony export */   "thirdColor": () => (/* binding */ thirdColor),
/* harmony export */   "shadowColor": () => (/* binding */ shadowColor)
/* harmony export */ });
let normalPriorityColor = "#003F63";
let highPriorityColor = "#F2B138";
let primaryFontColor = "#353D40";
let secondaryFontColor = "#F2F2F2";
let primaryColor = "#F2F2F2";
let secondaryColor = "#0D0D0D";
let thirdColor = "#404040";
let shadowColor = "#0D0D0D";



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
function createFilteredList(filterType, originList) {
  const filteredList = document.createElement("ul");
  let filteredArray;
  if (filterType === "today") {
    filteredArray = originList.filter((task) => {
      let taskDate = new Date(task.taskObj.dueDate)
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
      let currentDate = new Date().toString().split(" ").slice(0, 4).join(" ");
      return taskDate === currentDate;
    });
  }else if(filterType === "inbox"){
    filteredArray = originList;
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
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.js */ "./src/components/colors.js");


class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate =
      dueDate.value === ""
        ? ""
        : new Date(dueDate.value).toString().split(" ").slice(1, 4).join(" ");
    this.priority = priority.value;
  }
}

function createTask(title, description, dueDate, priority) {
  const taskObj = new Task(title, description, dueDate, priority);

  let taskEl = document.createElement("li");

  let taskTitle = document.createElement("h2");
  taskTitle.textContent = taskObj.title;

  let taskDescription = document.createElement("p");
  taskDescription.textContent = taskObj.description;
  taskDescription.className = "task-description";

  let taskDueDate = document.createElement("p");
  taskDueDate.textContent = taskObj.dueDate;
  taskDueDate.className = "task-date";

  if (taskObj.priority === "normal") {
    taskEl.style.backgroundColor = _colors_js__WEBPACK_IMPORTED_MODULE_0__.normalPriorityColor;
    taskEl.style.color = _colors_js__WEBPACK_IMPORTED_MODULE_0__.secondaryFontColor;
  } else {
    taskEl.style.backgroundColor = _colors_js__WEBPACK_IMPORTED_MODULE_0__.highPriorityColor;
  }

  let deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "delete-task__btn";
  deleteTaskBtn.textContent = "X";

  taskEl.appendChild(deleteTaskBtn);
  taskEl.appendChild(taskTitle);
  taskEl.appendChild(taskDescription);
  taskEl.appendChild(taskDueDate);

  return { taskEl, taskObj };
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
/* harmony import */ var _components_DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DOM */ "./src/components/DOM.js");






const taskList = [];

// ------------------------------------------- Form handling

function closeForm() {
  _components_DOM__WEBPACK_IMPORTED_MODULE_4__.addTaskBtn.classList.remove("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_4__.form.classList.add("inactive");
  _components_DOM__WEBPACK_IMPORTED_MODULE_4__.titleInput.value = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_4__.descriptionInput.value = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_4__.dueDateInput.value = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_4__.priorityInput.value = "normal";
}

_components_DOM__WEBPACK_IMPORTED_MODULE_4__.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let task = (0,_components_newTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(
    _components_DOM__WEBPACK_IMPORTED_MODULE_4__.titleInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_4__.descriptionInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_4__.dueDateInput,
    _components_DOM__WEBPACK_IMPORTED_MODULE_4__.priorityInput
  );

  (0,_components_tasks__WEBPACK_IMPORTED_MODULE_2__.addTask)(_components_DOM__WEBPACK_IMPORTED_MODULE_4__.listContainer, task, taskList);
  closeForm();

  // ------------------------------------------- Delete task functionality

  let deleteTaskBtn = [...task.taskEl.children].filter(
    (element) => element.className === "delete-task__btn"
  )[0];

  deleteTaskBtn.addEventListener(
    "click",
    _components_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTask.bind(null, _components_DOM__WEBPACK_IMPORTED_MODULE_4__.listContainer, task, taskList)
  );
});

_components_DOM__WEBPACK_IMPORTED_MODULE_4__.formCancelBtn.addEventListener("click", closeForm);

// ------------------------------------------- Filter handling

function rerenderUl(filterType) {
  let newUlList = (0,_components_filteredLists__WEBPACK_IMPORTED_MODULE_3__.createFilteredList)(filterType, taskList);
  _components_DOM__WEBPACK_IMPORTED_MODULE_4__.listContainer.innerHTML = "";
  _components_DOM__WEBPACK_IMPORTED_MODULE_4__.listContainer.appendChild(newUlList);
}

_components_DOM__WEBPACK_IMPORTED_MODULE_4__.inboxBtn.addEventListener("click", function(){
  rerenderUl("inbox");
})

_components_DOM__WEBPACK_IMPORTED_MODULE_4__.todayFilterBtn.addEventListener("click", function(){
  rerenderUl("today");
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL21haW4uY3NzPzgzMzEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY29sb3JzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcmVkTGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMTByZW0sIDMwJSwgMjByZW0pIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiSEVBREVSIEhFQURFUlxcXCIgXFxcIk5BViBNQUlOXFxcIjtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjMzUzZDQwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IEhFQURFUjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcXG59XFxuXFxubmF2IHtcXG4gIGdyaWQtYXJlYTogTkFWO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxuICBjb2xvcjogI2YyZjJmMjtcXG59XFxuXFxubmF2IGgyIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IGNsYW1wKDZyZW0sIDgwJSwgMjByZW0pO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAzdncsIDFyZW0pO1xcbn1cXG5cXG5uYXYgYnV0dG9uOmhvdmVyLFxcbm5hdiBidXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYjtcXG59XFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IE1BSU47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLmFkZC10YXNrX19idG4ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIHJvdy1nYXA6IDAuOHJlbTtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIHdpZHRoOiBjbGFtcCgxMHJlbSwgOTAlLCA1MHJlbSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMGQwZDBkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5mb3JtIGRpdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjb2xvcjogIzM1M2Q0MDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogNXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuI2Zvcm0tcHJpb3JpdHkge1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzZjYzO1xcbn1cXG5cXG5pbnB1dDpob3ZlcixcXG5pbnB1dDphY3RpdmUsXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmhvdmVyLFxcbnNlbGVjdDphY3RpdmUsXFxuc2VsZWN0OmZvY3VzLFxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246YWN0aXZlLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5vcHRpb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5vcHRpb25bdmFsdWU9bm9ybWFsXSB7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNmNjM7XFxufVxcblxcbm9wdGlvblt2YWx1ZT1oaWdoXSB7XFxuICBjb2xvcjogIzM1M2Q0MDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmIxMzg7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHVsIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDJyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAycmVtO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiVElUTEUgREFURVxcXCIgXFxcIkRFU0NSSVBUSU9OIERFU0NSSVBUSU9OXFxcIjtcXG4gIHdpZHRoOiBjbGFtcCgxMHJlbSwgOTAlLCA1MHJlbSk7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMGQwZDBkO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBUSVRMRTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBERVNDUklQVElPTjtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBncmlkLWFyZWE6IERBVEU7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrX19idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMS43cmVtO1xcbiAgaGVpZ2h0OiAxLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjZyZW0sIC0wLjZyZW0pO1xcbn1cXG5cXG5saSBoMixcXG5saSBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdCQTtFQUNFLHNCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSwr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cnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBub3JtYWxQcmlvcml0eUNvbG9yLFxuICBoaWdoUHJpb3JpdHlDb2xvcixcbiAgcHJpbWFyeUZvbnRDb2xvcixcbiAgc2Vjb25kYXJ5Rm9udENvbG9yLFxuICBwcmltYXJ5Q29sb3IsXG4gIHNlY29uZGFyeUNvbG9yLFxuICB0aGlyZENvbG9yLFxuICBzaGFkb3dDb2xvcixcbn0gZnJvbSBcIi4vY29sb3JzLmpzXCI7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza19fYnRuXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10aXRsZVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZGVzY3JpcHRpb25cIik7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZHVlLWRhdGVcIik7XG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXByaW9yaXR5XCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBmb3JtQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uW3R5cGU9J2J1dHRvbiddXCIpO1xuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xuY29uc3QgdG9kYXlGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xuY29uc3Qgd2Vla2x5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGlzLXdlZWtcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdF9idG5cIik7XG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWNvbnRhaW5lclwiKTtcblxucHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHByaW9yaXR5SW5wdXQudmFsdWUgPT09IFwibm9ybWFsXCIpIHtcbiAgICBwcmlvcml0eUlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5vcm1hbFByaW9yaXR5Q29sb3I7XG4gICAgcHJpb3JpdHlJbnB1dC5zdHlsZS5jb2xvciA9IHNlY29uZGFyeUZvbnRDb2xvcjtcbiAgfSBlbHNlIGlmIChwcmlvcml0eUlucHV0LnZhbHVlID09PSBcImhpZ2hcIikge1xuICAgIHByaW9yaXR5SW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGlnaFByaW9yaXR5Q29sb3I7XG4gICAgcHJpb3JpdHlJbnB1dC5zdHlsZS5jb2xvciA9IHByaW1hcnlGb250Q29sb3I7XG4gIH1cbn0pO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBub3JtYWxQcmlvcml0eUNvbG9yO1xuICBwcmlvcml0eUlucHV0LnN0eWxlLmNvbG9yID0gc2Vjb25kYXJ5Rm9udENvbG9yO1xufSk7XG5cbmV4cG9ydCB7XG4gIG5hdixcbiAgbWFpbixcbiAgYWRkVGFza0J0bixcbiAgZm9ybSxcbiAgdGl0bGVJbnB1dCxcbiAgZGVzY3JpcHRpb25JbnB1dCxcbiAgZHVlRGF0ZUlucHV0LFxuICBwcmlvcml0eUlucHV0LFxuICB1bCxcbiAgZm9ybUNhbmNlbEJ0bixcbiAgaW5ib3hCdG4sXG4gIHRvZGF5RmlsdGVyQnRuLFxuICB3ZWVrbHlCdG4sXG4gIGFkZFByb2plY3RCdG4sXG4gIGxpc3RDb250YWluZXIsXG59O1xuIiwibGV0IG5vcm1hbFByaW9yaXR5Q29sb3IgPSBcIiMwMDNGNjNcIjtcbmxldCBoaWdoUHJpb3JpdHlDb2xvciA9IFwiI0YyQjEzOFwiO1xubGV0IHByaW1hcnlGb250Q29sb3IgPSBcIiMzNTNENDBcIjtcbmxldCBzZWNvbmRhcnlGb250Q29sb3IgPSBcIiNGMkYyRjJcIjtcbmxldCBwcmltYXJ5Q29sb3IgPSBcIiNGMkYyRjJcIjtcbmxldCBzZWNvbmRhcnlDb2xvciA9IFwiIzBEMEQwRFwiO1xubGV0IHRoaXJkQ29sb3IgPSBcIiM0MDQwNDBcIjtcbmxldCBzaGFkb3dDb2xvciA9IFwiIzBEMEQwRFwiO1xuXG5leHBvcnQge1xuICAgIG5vcm1hbFByaW9yaXR5Q29sb3IsXG4gICAgaGlnaFByaW9yaXR5Q29sb3IsXG4gICAgcHJpbWFyeUZvbnRDb2xvcixcbiAgICBzZWNvbmRhcnlGb250Q29sb3IsXG4gICAgcHJpbWFyeUNvbG9yLFxuICAgIHNlY29uZGFyeUNvbG9yLFxuICAgIHRoaXJkQ29sb3IsXG4gICAgc2hhZG93Q29sb3Jcbn0iLCJmdW5jdGlvbiBjcmVhdGVGaWx0ZXJlZExpc3QoZmlsdGVyVHlwZSwgb3JpZ2luTGlzdCkge1xuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxldCBmaWx0ZXJlZEFycmF5O1xuICBpZiAoZmlsdGVyVHlwZSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3QuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tPYmouZHVlRGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuc2xpY2UoMCwgNClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNwbGl0KFwiIFwiKS5zbGljZSgwLCA0KS5qb2luKFwiIFwiKTtcbiAgICAgIHJldHVybiB0YXNrRGF0ZSA9PT0gY3VycmVudERhdGU7XG4gICAgfSk7XG4gIH1lbHNlIGlmKGZpbHRlclR5cGUgPT09IFwiaW5ib3hcIil7XG4gICAgZmlsdGVyZWRBcnJheSA9IG9yaWdpbkxpc3Q7XG4gIH1cblxuICBmaWx0ZXJlZEFycmF5Lm1hcCgodGFzaykgPT4ge1xuICAgIGZpbHRlcmVkTGlzdC5hcHBlbmRDaGlsZCh0YXNrLnRhc2tFbCk7XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZExpc3Q7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZpbHRlcmVkTGlzdCB9O1xuIiwiaW1wb3J0IHtcbiAgbm9ybWFsUHJpb3JpdHlDb2xvcixcbiAgaGlnaFByaW9yaXR5Q29sb3IsXG4gIHByaW1hcnlGb250Q29sb3IsXG4gIHNlY29uZGFyeUZvbnRDb2xvcixcbiAgcHJpbWFyeUNvbG9yLFxuICBzZWNvbmRhcnlDb2xvcixcbiAgdGhpcmRDb2xvcixcbiAgc2hhZG93Q29sb3IsXG59IGZyb20gXCIuL2NvbG9ycy5qc1wiO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgdGhpcy5kdWVEYXRlID1cbiAgICAgIGR1ZURhdGUudmFsdWUgPT09IFwiXCJcbiAgICAgICAgPyBcIlwiXG4gICAgICAgIDogbmV3IERhdGUoZHVlRGF0ZS52YWx1ZSkudG9TdHJpbmcoKS5zcGxpdChcIiBcIikuc2xpY2UoMSwgNCkuam9pbihcIiBcIik7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCB0YXNrT2JqID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgbGV0IHRhc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLnRpdGxlO1xuXG4gIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza09iai5kZXNjcmlwdGlvbjtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xuXG4gIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tPYmouZHVlRGF0ZTtcbiAgdGFza0R1ZURhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWRhdGVcIjtcblxuICBpZiAodGFza09iai5wcmlvcml0eSA9PT0gXCJub3JtYWxcIikge1xuICAgIHRhc2tFbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBub3JtYWxQcmlvcml0eUNvbG9yO1xuICAgIHRhc2tFbC5zdHlsZS5jb2xvciA9IHNlY29uZGFyeUZvbnRDb2xvcjtcbiAgfSBlbHNlIHtcbiAgICB0YXNrRWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGlnaFByaW9yaXR5Q29sb3I7XG4gIH1cblxuICBsZXQgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVRhc2tCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtdGFza19fYnRuXCI7XG4gIGRlbGV0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICB0YXNrRWwuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gIHRhc2tFbC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0YXNrRWwuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgdGFza0VsLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICByZXR1cm4geyB0YXNrRWwsIHRhc2tPYmogfTtcbn1cblxuZXhwb3J0IHsgVGFzaywgY3JlYXRlVGFzayB9O1xuIiwiZnVuY3Rpb24gYWRkVGFzayhjb250YWluZXIsIHRhc2ssIHN0b3JhZ2VBcnJheSkge1xuICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKHRhc2sudGFza0VsKTtcbiAgc3RvcmFnZUFycmF5LnB1c2godGFzayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soY29udGFpbmVyLCB0YXNrLCBzdG9yYWdlQXJyYXkpIHtcbiAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5yZW1vdmVDaGlsZCh0YXNrLnRhc2tFbCk7XG4gIHN0b3JhZ2VBcnJheS5zcGxpY2Uoc3RvcmFnZUFycmF5LmluZGV4T2YodGFzayksIDEpO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrLCByZW1vdmVUYXNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS9tYWluLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmV3VGFza1wiO1xuaW1wb3J0IHsgYWRkVGFzaywgcmVtb3ZlVGFzayB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFza3NcIjtcbmltcG9ydCB7IGNyZWF0ZUZpbHRlcmVkTGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyZWRMaXN0c1wiO1xuaW1wb3J0IHtcbiAgYWRkVGFza0J0bixcbiAgZm9ybSxcbiAgdGl0bGVJbnB1dCxcbiAgZGVzY3JpcHRpb25JbnB1dCxcbiAgZHVlRGF0ZUlucHV0LFxuICBwcmlvcml0eUlucHV0LFxuICBmb3JtQ2FuY2VsQnRuLFxuICBpbmJveEJ0bixcbiAgdG9kYXlGaWx0ZXJCdG4sXG4gIGxpc3RDb250YWluZXIsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvRE9NXCI7XG5cbmNvbnN0IHRhc2tMaXN0ID0gW107XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRm9ybSBoYW5kbGluZ1xuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gXCJub3JtYWxcIjtcbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGxldCB0YXNrID0gY3JlYXRlVGFzayhcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgZHVlRGF0ZUlucHV0LFxuICAgIHByaW9yaXR5SW5wdXRcbiAgKTtcblxuICBhZGRUYXNrKGxpc3RDb250YWluZXIsIHRhc2ssIHRhc2tMaXN0KTtcbiAgY2xvc2VGb3JtKCk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEZWxldGUgdGFzayBmdW5jdGlvbmFsaXR5XG5cbiAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBbLi4udGFzay50YXNrRWwuY2hpbGRyZW5dLmZpbHRlcihcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc05hbWUgPT09IFwiZGVsZXRlLXRhc2tfX2J0blwiXG4gIClbMF07XG5cbiAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICByZW1vdmVUYXNrLmJpbmQobnVsbCwgbGlzdENvbnRhaW5lciwgdGFzaywgdGFza0xpc3QpXG4gICk7XG59KTtcblxuZm9ybUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGaWx0ZXIgaGFuZGxpbmdcblxuZnVuY3Rpb24gcmVyZW5kZXJVbChmaWx0ZXJUeXBlKSB7XG4gIGxldCBuZXdVbExpc3QgPSBjcmVhdGVGaWx0ZXJlZExpc3QoZmlsdGVyVHlwZSwgdGFza0xpc3QpO1xuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VWxMaXN0KTtcbn1cblxuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gIHJlcmVuZGVyVWwoXCJpbmJveFwiKTtcbn0pXG5cbnRvZGF5RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICByZXJlbmRlclVsKFwidG9kYXlcIik7XG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=