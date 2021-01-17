/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./animation-demo.js":
/*!***************************!*\
  !*** ./animation-demo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./animation.js\");\n/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ease */ \"./ease.js\");\n\n\nvar tl = new _animation__WEBPACK_IMPORTED_MODULE_0__.TimeLine();\ntl.add(new _animation__WEBPACK_IMPORTED_MODULE_0__.Animation(document.querySelector(\"#el\").style, 'transform', 0, 500, 2000, 0, _ease__WEBPACK_IMPORTED_MODULE_1__.easeIn, function (v) {\n  return \"translateX(\".concat(v, \"px)\");\n}));\ndocument.querySelector(\"#el2\").style.transition = '2s ease-in';\ndocument.querySelector(\"#el2\").style.transform = 'translateX(500px)';\ndocument.querySelector(\"#pause-btn\").addEventListener(\"click\", function () {\n  return tl.pause();\n});\ndocument.querySelector(\"#resume-btn\").addEventListener(\"click\", function () {\n  return tl.resume();\n});\ntl.start();\n\n//# sourceURL=webpack://jsx/./animation-demo.js?");

/***/ }),

/***/ "./animation.js":
/*!**********************!*\
  !*** ./animation.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TimeLine\": () => /* binding */ TimeLine,\n/* harmony export */   \"Animation\": () => /* binding */ Animation\n/* harmony export */ });\n/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ease */ \"./ease.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar TICK = Symbol(\"tick\");\nvar TICK_HANDLER = Symbol(\"tick-handler\");\nvar ANIMATIONS = Symbol(\"animations\");\nvar START_TIME = Symbol(\"start-time\");\nvar PAUSE_START = Symbol(\"pause-start\");\nvar PAUSE_TIME = Symbol(\"pause-time\");\nvar TimeLine = /*#__PURE__*/function () {\n  function TimeLine() {\n    _classCallCheck(this, TimeLine);\n\n    this[ANIMATIONS] = new Set();\n    this[START_TIME] = new Map();\n  }\n\n  _createClass(TimeLine, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      var startTime = Date.now();\n      this[PAUSE_TIME] = 0;\n\n      this[TICK] = function () {\n        var now = Date.now();\n\n        var _iterator = _createForOfIteratorHelper(_this[ANIMATIONS]),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var animation = _step.value;\n            var t = void 0;\n\n            if (_this[START_TIME].get(animation) < startTime) {\n              t = now - startTime - _this[PAUSE_TIME] - animation.delay;\n            } else {\n              t = now - _this[START_TIME].get(animation) - _this[PAUSE_TIME] - animation.delay;\n            }\n\n            if (animation.duration < t) {\n              _this[ANIMATIONS][\"delete\"](animation);\n\n              t = animation.duration;\n            }\n\n            if (t > 0) {\n              animation.receive(t);\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        _this[TICK_HANDLER] = requestAnimationFrame(_this[TICK]);\n      };\n\n      this[TICK]();\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this[PAUSE_START] = Date.now();\n      cancelAnimationFrame(this[TICK_HANDLER]);\n    }\n  }, {\n    key: \"resume\",\n    value: function resume() {\n      this[PAUSE_TIME] += Date.now() - this[PAUSE_START];\n      this[TICK]();\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {}\n  }, {\n    key: \"add\",\n    value: function add(animation, startTime) {\n      if (arguments.length < 2) {\n        startTime = Date.now();\n      }\n\n      this[ANIMATIONS].add(animation);\n      this[START_TIME].set(animation, startTime);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {}\n  }]);\n\n  return TimeLine;\n}();\nvar Animation = /*#__PURE__*/function () {\n  function Animation(object, property, startValue, endValue, duration, delay, timeFunction, template) {\n    _classCallCheck(this, Animation);\n\n    timeFunction = timeFunction || function (v) {\n      return v;\n    };\n\n    template = template || function (v) {\n      return v;\n    };\n\n    this.object = object;\n    this.property = property;\n    this.startValue = startValue;\n    this.endValue = endValue;\n    this.duration = duration;\n    this.delay = delay;\n    this.timeFunction = timeFunction;\n    this.template = template;\n  }\n\n  _createClass(Animation, [{\n    key: \"receive\",\n    value: function receive(time) {\n      var range = this.endValue - this.startValue;\n      var progress = this.timeFunction(time / this.duration);\n      this.object[this.property] = this.template(this.startValue + range * progress);\n    }\n  }]);\n\n  return Animation;\n}();\n\n//# sourceURL=webpack://jsx/./animation.js?");

/***/ }),

/***/ "./ease.js":
/*!*****************!*\
  !*** ./ease.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"linear\": () => /* binding */ linear,\n/* harmony export */   \"ease\": () => /* binding */ ease,\n/* harmony export */   \"easeIn\": () => /* binding */ easeIn,\n/* harmony export */   \"easeOut\": () => /* binding */ easeOut,\n/* harmony export */   \"easeInOut\": () => /* binding */ easeInOut\n/* harmony export */ });\nvar linear = function linear(v) {\n  return v;\n};\n\nfunction cubicBezier(x1, y1, x2, y2) {\n  var getCoord = function getCoord(t) {\n    // 如果t取值不在0到1之间，则终止操作\n    if (t > 1 || t < 0) return;\n\n    var _t = 1 - t;\n\n    var coefficient1 = 3 * t * Math.pow(_t, 2);\n    var coefficient2 = 3 * _t * Math.pow(t, 2);\n    var coefficient3 = Math.pow(t, 3);\n    var px = coefficient1 * x1 + coefficient2 * x2 + coefficient3;\n    var py = coefficient1 * y1 + coefficient2 * y2 + coefficient3; // 结果只保留三位有效数字\n\n    return [parseFloat(px.toFixed(3)), parseFloat(py.toFixed(3))];\n  };\n\n  var getCoordsArray = function getCoordsArray(precision) {\n    var step = 1 / (precision + 1);\n    var result = [];\n\n    for (var t = 0; t <= precision + 1; t++) {\n      result.push(getCoord(t * step));\n    }\n\n    return result;\n  };\n\n  var precision = 100;\n  var coords = getCoordsArray(precision);\n  return function (x) {\n    if (x >= 1) return 1;\n    if (x <= 0) return 0;\n    var startX = 0;\n\n    for (var i = 0; i < coords.length; i++) {\n      if (coords[i][0] >= x) {\n        startX = i;\n        break;\n      }\n    }\n\n    var axis1 = coords[startX];\n    var axis2 = coords[startX - 1];\n    var k = (axis2[1] - axis1[1]) / (axis2[0] - axis1[0]);\n    var b = axis1[1] - k * axis1[0]; // 结果也只保留三位有效数字\n\n    return parseFloat((k * x + b).toFixed(3));\n  };\n}\n\nvar ease = cubicBezier(.25, .1, .25, 1);\nvar easeIn = cubicBezier(.42, 0, 1, 1);\nvar easeOut = cubicBezier(0, 0, .58, 1);\nvar easeInOut = cubicBezier(42, 0, .58, 1);\n\n//# sourceURL=webpack://jsx/./ease.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./animation-demo.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;