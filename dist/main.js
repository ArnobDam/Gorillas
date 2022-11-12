/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\nconst Banana = __webpack_require__(/*! ./scripts/banana.js */ \"./src/scripts/banana.js\");\nconst banana = new Banana();\n// window.Banana = Banana;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n  canvasEle.width = window.innerWidth * .66;\n  canvasEle.height = window.innerHeight * .65;\n  const context = canvasEle.getContext(\"2d\");\n  banana.draw(context);\n  setInterval(function () {\n    banana.move(context);\n    banana.draw(context);\n  }, 10);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzdDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixNQUFNLEVBQUU7QUFDM0I7O0FBRUFHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzVERCxTQUFTLENBQUNFLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVLEdBQUcsR0FBRztFQUN6Q0osU0FBUyxDQUFDSyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxHQUFHLEdBQUc7RUFFM0MsTUFBTUMsT0FBTyxHQUFHUCxTQUFTLENBQUNRLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFFMUNYLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDRixPQUFPLENBQUM7RUFDcEJHLFdBQVcsQ0FBQyxZQUFZO0lBQ3BCYixNQUFNLENBQUNjLElBQUksQ0FBQ0osT0FBTyxDQUFDO0lBQ3BCVixNQUFNLENBQUNZLElBQUksQ0FBQ0YsT0FBTyxDQUFDO0VBQ3hCLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDVixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3JpbGxhcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pO1xuXG5cbmNvbnN0IEJhbmFuYSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYmFuYW5hLmpzXCIpO1xuY29uc3QgYmFuYW5hID0gbmV3IEJhbmFuYSgpO1xuLy8gd2luZG93LkJhbmFuYSA9IEJhbmFuYTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhc0VsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjY2O1xuICAgIGNhbnZhc0VsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNjU7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzRWxlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGJhbmFuYS5kcmF3KGNvbnRleHQpO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmFuYW5hLm1vdmUoY29udGV4dCk7XG4gICAgICAgIGJhbmFuYS5kcmF3KGNvbnRleHQpO1xuICAgIH0sIDEwKTtcbn0pIl0sIm5hbWVzIjpbIkJhbmFuYSIsInJlcXVpcmUiLCJiYW5hbmEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/banana.js":
/*!*******************************!*\
  !*** ./src/scripts/banana.js ***!
  \*******************************/
/***/ (function(module) {

eval("function Banana() {\n  this.pos = [100, 300];\n  this.radius = 15;\n  this.color = '#F6BE00'; //yellow in hex \n  // this.speed = speed;\n  // this.angle = angle;\n  this.vel = [1, -1];\n  this.gravityY = 0;\n  this.gravity = 0.0098;\n}\nBanana.prototype.draw = function (context) {\n  context.fillStyle = this.color;\n  context.beginPath();\n  context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  context.fill();\n  // context.closePath();\n};\n\nBanana.prototype.move = function (context) {\n  this.gravityY += this.gravity;\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1] + this.gravityY;\n};\nmodule.exports = Banana;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYW5hbmEuanMuanMiLCJuYW1lcyI6WyJCYW5hbmEiLCJwb3MiLCJyYWRpdXMiLCJjb2xvciIsInZlbCIsImdyYXZpdHlZIiwiZ3Jhdml0eSIsInByb3RvdHlwZSIsImRyYXciLCJjb250ZXh0IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm1vdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3JpbGxhcy8uL3NyYy9zY3JpcHRzL2JhbmFuYS5qcz8zM2Y1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEJhbmFuYSgpIHtcbiAgICB0aGlzLnBvcyA9IFsxMDAsIDMwMF07XG4gICAgdGhpcy5yYWRpdXMgPSAxNTtcbiAgICB0aGlzLmNvbG9yID0gJyNGNkJFMDAnOyAvL3llbGxvdyBpbiBoZXggXG4gICAgLy8gdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIC8vIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB0aGlzLnZlbCA9IFsxLCAtMV1cbiAgICB0aGlzLmdyYXZpdHlZID0gMDtcbiAgICB0aGlzLmdyYXZpdHkgPSAwLjAwOTg7XG59XG5cbkJhbmFuYS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAvLyBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG59XG5cbkJhbmFuYS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbiAgICB0aGlzLmdyYXZpdHlZICs9IHRoaXMuZ3Jhdml0eTtcblxuICAgIHRoaXMucG9zWzBdICs9IHRoaXMudmVsWzBdO1xuICAgIHRoaXMucG9zWzFdICs9ICh0aGlzLnZlbFsxXSArIHRoaXMuZ3Jhdml0eVkpO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFuYW5hOyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsTUFBTSxHQUFHO0VBQ2QsSUFBSSxDQUFDQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ3JCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7RUFDeEI7RUFDQTtFQUNBLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLENBQUM7RUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUcsTUFBTTtBQUN6QjtBQUVBTixNQUFNLENBQUNPLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHLFVBQVVDLE9BQU8sRUFBRTtFQUV2Q0EsT0FBTyxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDUCxLQUFLO0VBRTlCTSxPQUFPLENBQUNFLFNBQVMsRUFBRTtFQUNuQkYsT0FBTyxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBR1csSUFBSSxDQUFDQyxFQUFFLENBQUM7RUFDbEVMLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO0VBQ2Q7QUFFSixDQUFDOztBQUVEZixNQUFNLENBQUNPLFNBQVMsQ0FBQ1MsSUFBSSxHQUFHLFVBQVVQLE9BQU8sRUFBRTtFQUV2QyxJQUFJLENBQUNKLFFBQVEsSUFBSSxJQUFJLENBQUNDLE9BQU87RUFFN0IsSUFBSSxDQUFDTCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzFCLElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFLLElBQUksQ0FBQ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsUUFBUztBQUVoRCxDQUFDO0FBRURZLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbEIsTUFBTSJ9\n//# sourceURL=webpack-internal:///./src/scripts/banana.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3JpbGxhcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;