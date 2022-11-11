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

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\nconst Banana = __webpack_require__(/*! ./scripts/banana.js */ \"./src/scripts/banana.js\");\nconst banana = new Banana();\n// window.Banana = Banana;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n  canvasEle.width = 500;\n  canvasEle.height = 500;\n  const context = canvasEle.getContext(\"2d\");\n  banana.draw(context);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzdDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixNQUFNLEVBQUU7QUFDM0I7O0FBRUFHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzVERCxTQUFTLENBQUNFLEtBQUssR0FBRyxHQUFHO0VBQ3JCRixTQUFTLENBQUNHLE1BQU0sR0FBRyxHQUFHO0VBRXRCLE1BQU1DLE9BQU8sR0FBR0osU0FBUyxDQUFDSyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRTFDUixNQUFNLENBQUNTLElBQUksQ0FBQ0YsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvcmlsbGFzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuLy8gICAgIG5ldyBFeGFtcGxlKG1haW4pO1xuLy8gfSk7XG5cblxuY29uc3QgQmFuYW5hID0gcmVxdWlyZShcIi4vc2NyaXB0cy9iYW5hbmEuanNcIik7XG5jb25zdCBiYW5hbmEgPSBuZXcgQmFuYW5hKCk7XG4vLyB3aW5kb3cuQmFuYW5hID0gQmFuYW5hO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzRWxlLndpZHRoID0gNTAwO1xuICAgIGNhbnZhc0VsZS5oZWlnaHQgPSA1MDA7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzRWxlLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGJhbmFuYS5kcmF3KGNvbnRleHQpO1xufSkiXSwibmFtZXMiOlsiQmFuYW5hIiwicmVxdWlyZSIsImJhbmFuYSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/banana.js":
/*!*******************************!*\
  !*** ./src/scripts/banana.js ***!
  \*******************************/
/***/ (function(module) {

eval("function Banana() {\n  this.pos = [10, 10];\n  this.radius = 5;\n  this.color = '#000000';\n  // this.color = '#FFFF00'; //yellow in hex \n}\n\nBanana.prototype.draw = function (context) {\n  context.fillStyle = this.color;\n  context.beginPath();\n  context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  context.fill();\n  // context.closePath();\n};\n\nmodule.exports = Banana;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYW5hbmEuanMuanMiLCJuYW1lcyI6WyJCYW5hbmEiLCJwb3MiLCJyYWRpdXMiLCJjb2xvciIsInByb3RvdHlwZSIsImRyYXciLCJjb250ZXh0IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvcmlsbGFzLy4vc3JjL3NjcmlwdHMvYmFuYW5hLmpzPzMzZjUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQmFuYW5hKCkge1xuICAgIHRoaXMucG9zID0gWzEwLCAxMF07XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgIHRoaXMuY29sb3IgPSAnIzAwMDAwMCc7XG4gICAgLy8gdGhpcy5jb2xvciA9ICcjRkZGRjAwJzsgLy95ZWxsb3cgaW4gaGV4IFxufVxuXG5CYW5hbmEucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgLy8gY29udGV4dC5jbG9zZVBhdGgoKTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhbmFuYTsiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQU0sR0FBRztFQUNkLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0VBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsU0FBUztFQUN0QjtBQUNKOztBQUVBSCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHLFVBQVVDLE9BQU8sRUFBRTtFQUV2Q0EsT0FBTyxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDSixLQUFLO0VBRTlCRyxPQUFPLENBQUNFLFNBQVMsRUFBRTtFQUNuQkYsT0FBTyxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDUixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBR1EsSUFBSSxDQUFDQyxFQUFFLENBQUM7RUFDbEVMLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO0VBQ2Q7QUFFSixDQUFDOztBQUVEQyxNQUFNLENBQUNDLE9BQU8sR0FBR2QsTUFBTSJ9\n//# sourceURL=webpack-internal:///./src/scripts/banana.js\n");

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