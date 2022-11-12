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

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\nconst Banana = __webpack_require__(/*! ./scripts/banana.js */ \"./src/scripts/banana.js\");\nconst banana = new Banana();\n// window.Banana = Banana;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n  canvasEle.width = window.innerWidth * .65;\n  canvasEle.height = window.innerHeight * .65;\n  const context = canvasEle.getContext(\"2d\");\n  banana.draw(context);\n  setInterval(function () {\n    banana.move(context);\n    banana.draw(context);\n  }, 10);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0ksTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzdDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixNQUFNLEVBQUU7QUFDM0I7O0FBRUpHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUd0RCxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzVERCxTQUFTLENBQUNFLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVLEdBQUcsR0FBRztFQUN6Q0osU0FBUyxDQUFDSyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxHQUFHLEdBQUc7RUFFM0MsTUFBTUMsT0FBTyxHQUFHUCxTQUFTLENBQUNRLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFFMUNYLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDRixPQUFPLENBQUM7RUFDcEJHLFdBQVcsQ0FBQyxZQUFZO0lBQ3BCYixNQUFNLENBQUNjLElBQUksQ0FBQ0osT0FBTyxDQUFDO0lBQ3BCVixNQUFNLENBQUNZLElBQUksQ0FBQ0YsT0FBTyxDQUFDO0VBQ3hCLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDVixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3JpbGxhcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pO1xuXG5cbiAgICBjb25zdCBCYW5hbmEgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2JhbmFuYS5qc1wiKTtcbiAgICBjb25zdCBiYW5hbmEgPSBuZXcgQmFuYW5hKCk7XG4gICAgLy8gd2luZG93LkJhbmFuYSA9IEJhbmFuYTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIFxuXG4gICAgY29uc3QgY2FudmFzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzRWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuNjU7XG4gICAgY2FudmFzRWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC42NTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXNFbGUuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgYmFuYW5hLmRyYXcoY29udGV4dCk7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBiYW5hbmEubW92ZShjb250ZXh0KTtcbiAgICAgICAgYmFuYW5hLmRyYXcoY29udGV4dCk7XG4gICAgfSwgMTApO1xufSkiXSwibmFtZXMiOlsiQmFuYW5hIiwicmVxdWlyZSIsImJhbmFuYSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYXciLCJzZXRJbnRlcnZhbCIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/banana.js":
/*!*******************************!*\
  !*** ./src/scripts/banana.js ***!
  \*******************************/
/***/ (function(module) {

eval("// const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n// const canvasLeft = canvasEle.getBoundingClientRect().left;\n// const canvasRight = canvasEle.getBoundingClientRect().right;\n// const canvasTop = canvasEle.getBoundingClientRect().top;\n// const canvasBottom = canvasEle.getBoundingClientRect().bottom;\n\ncanvasWidth = window.innerWidth * .65;\ncanvasHeight = window.innerHeight * .65;\nfunction Banana() {\n  this.pos = [0 + canvasWidth / 10, canvasHeight * (4 / 5)];\n  this.radius = 15;\n  this.color = '#F6BE00'; //yellow in hex \n\n  this.vel = [1.5, -2];\n  this.gravityY = 0;\n  this.gravity = 0.0098;\n}\nBanana.prototype.draw = function (context) {\n  context.fillStyle = this.color;\n  context.beginPath();\n  context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  context.fill();\n  // context.closePath();\n};\n\nBanana.prototype.move = function (context) {\n  this.gravityY += this.gravity;\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1] + this.gravityY;\n};\nmodule.exports = Banana;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYW5hbmEuanMuanMiLCJuYW1lcyI6WyJjYW52YXNXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbm5lckhlaWdodCIsIkJhbmFuYSIsInBvcyIsInJhZGl1cyIsImNvbG9yIiwidmVsIiwiZ3Jhdml0eVkiLCJncmF2aXR5IiwicHJvdG90eXBlIiwiZHJhdyIsImNvbnRleHQiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwibW92ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvcmlsbGFzLy4vc3JjL3NjcmlwdHMvYmFuYW5hLmpzPzMzZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgY2FudmFzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4vLyBjb25zdCBjYW52YXNMZWZ0ID0gY2FudmFzRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4vLyBjb25zdCBjYW52YXNSaWdodCA9IGNhbnZhc0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcbi8vIGNvbnN0IGNhbnZhc1RvcCA9IGNhbnZhc0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4vLyBjb25zdCBjYW52YXNCb3R0b20gPSBjYW52YXNFbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuXG5jYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjY1O1xuY2FudmFzSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogLjY1O1xuXG5mdW5jdGlvbiBCYW5hbmEoKSB7XG5cbiAgICB0aGlzLnBvcyA9IFswICsgY2FudmFzV2lkdGgvMTAsIGNhbnZhc0hlaWdodCooNC81KV07XG4gICAgdGhpcy5yYWRpdXMgPSAxNTtcbiAgICB0aGlzLmNvbG9yID0gJyNGNkJFMDAnOyAvL3llbGxvdyBpbiBoZXggXG5cbiAgICB0aGlzLnZlbCA9IFsxLjUsIC0yXVxuICAgIHRoaXMuZ3Jhdml0eVkgPSAwO1xuICAgIHRoaXMuZ3Jhdml0eSA9IDAuMDA5ODtcbn1cblxuQmFuYW5hLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIC8vIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbn1cblxuQmFuYW5hLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAgIHRoaXMuZ3Jhdml0eVkgKz0gdGhpcy5ncmF2aXR5O1xuXG4gICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF07XG4gICAgdGhpcy5wb3NbMV0gKz0gKHRoaXMudmVsWzFdICsgdGhpcy5ncmF2aXR5WSk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYW5hbmE7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7QUFDckNDLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxXQUFXLEdBQUcsR0FBRztBQUV2QyxTQUFTQyxNQUFNLEdBQUc7RUFFZCxJQUFJLENBQUNDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBR04sV0FBVyxHQUFDLEVBQUUsRUFBRUcsWUFBWSxJQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuRCxJQUFJLENBQUNJLE1BQU0sR0FBRyxFQUFFO0VBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDOztFQUV4QixJQUFJLENBQUNDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO0VBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHLE1BQU07QUFDekI7QUFFQU4sTUFBTSxDQUFDTyxTQUFTLENBQUNDLElBQUksR0FBRyxVQUFVQyxPQUFPLEVBQUU7RUFFdkNBLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ1AsS0FBSztFQUU5Qk0sT0FBTyxDQUFDRSxTQUFTLEVBQUU7RUFDbkJGLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLElBQUksQ0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUdXLElBQUksQ0FBQ0MsRUFBRSxDQUFDO0VBQ2xFTCxPQUFPLENBQUNNLElBQUksRUFBRTtFQUNkO0FBRUosQ0FBQzs7QUFFRGYsTUFBTSxDQUFDTyxTQUFTLENBQUNTLElBQUksR0FBRyxVQUFVUCxPQUFPLEVBQUU7RUFFdkMsSUFBSSxDQUFDSixRQUFRLElBQUksSUFBSSxDQUFDQyxPQUFPO0VBRTdCLElBQUksQ0FBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0csR0FBRyxDQUFDLENBQUMsQ0FBQztFQUMxQixJQUFJLENBQUNILEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSyxJQUFJLENBQUNHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNDLFFBQVM7QUFFaEQsQ0FBQztBQUVEWSxNQUFNLENBQUNDLE9BQU8sR0FBR2xCLE1BQU0ifQ==\n//# sourceURL=webpack-internal:///./src/scripts/banana.js\n");

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