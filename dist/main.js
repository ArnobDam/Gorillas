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

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\nconst Banana = __webpack_require__(/*! ./scripts/banana.js */ \"./src/scripts/banana.js\");\nconst banana1 = new Banana({\n  pos: [canvasWidth / 10, canvasHeight * (4 / 5)],\n  vel: [1.5, -2],\n  color: '#F6BE00' //yellow in hex \n});\n\nconst banana2 = new Banana({\n  pos: [canvasWidth * (9 / 10), canvasHeight * (4 / 5)],\n  vel: [-1.5, -2.5],\n  color: '#F67E80'\n});\n// window.Banana = Banana;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n  canvasEle.width = window.innerWidth * .65;\n  canvasEle.height = window.innerHeight * .65;\n  const context = canvasEle.getContext(\"2d\");\n  banana1.draw(context);\n  banana2.draw(context);\n\n  // setInterval(function () {\n  //     context.clearRect(0, 0, canvasEle.width, canvasEle.height);\n\n  //     banana1.move(context);\n  //     banana1.draw(context);\n\n  //     banana2.move(context);\n  //     banana2.draw(context);\n  // }, 10);\n\n  window.requestAnimationFrame(function () {\n    context.clearRect(0, 0, canvasEle.width, canvasEle.height);\n    banana1.move(context);\n    banana1.draw(context);\n    banana2.move(context);\n    banana2.draw(context);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzdDLE1BQU1DLE9BQU8sR0FBRyxJQUFJRixNQUFNLENBQUM7RUFDdkJHLEdBQUcsRUFBRSxDQUFDQyxXQUFXLEdBQUcsRUFBRSxFQUFFQyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQy9DQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDZEMsS0FBSyxFQUFFLFNBQVMsQ0FBQztBQUNyQixDQUFDLENBQUM7O0FBQ0YsTUFBTUMsT0FBTyxHQUFHLElBQUlSLE1BQU0sQ0FBQztFQUN2QkcsR0FBRyxFQUFFLENBQUNDLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUVDLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDckRDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0VBQ2pCQyxLQUFLLEVBQUU7QUFDWCxDQUFDLENBQUM7QUFDRjs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBRXRELE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFNURELFNBQVMsQ0FBQ0UsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxHQUFHO0VBQ3pDSixTQUFTLENBQUNLLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxXQUFXLEdBQUcsR0FBRztFQUUzQyxNQUFNQyxPQUFPLEdBQUdQLFNBQVMsQ0FBQ1EsVUFBVSxDQUFDLElBQUksQ0FBQztFQUUxQ2pCLE9BQU8sQ0FBQ2tCLElBQUksQ0FBQ0YsT0FBTyxDQUFDO0VBQ3JCVixPQUFPLENBQUNZLElBQUksQ0FBQ0YsT0FBTyxDQUFDOztFQUVyQjtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBSixNQUFNLENBQUNPLHFCQUFxQixDQUFDLFlBQVk7SUFDckNILE9BQU8sQ0FBQ0ksU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVYLFNBQVMsQ0FBQ0UsS0FBSyxFQUFFRixTQUFTLENBQUNLLE1BQU0sQ0FBQztJQUUxRGQsT0FBTyxDQUFDcUIsSUFBSSxDQUFDTCxPQUFPLENBQUM7SUFDckJoQixPQUFPLENBQUNrQixJQUFJLENBQUNGLE9BQU8sQ0FBQztJQUVyQlYsT0FBTyxDQUFDZSxJQUFJLENBQUNMLE9BQU8sQ0FBQztJQUNyQlYsT0FBTyxDQUFDWSxJQUFJLENBQUNGLE9BQU8sQ0FBQztFQUN6QixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3JpbGxhcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pO1xuXG5jb25zdCBCYW5hbmEgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2JhbmFuYS5qc1wiKTtcbmNvbnN0IGJhbmFuYTEgPSBuZXcgQmFuYW5hKHtcbiAgICBwb3M6IFtjYW52YXNXaWR0aCAvIDEwLCBjYW52YXNIZWlnaHQgKiAoNCAvIDUpXSxcbiAgICB2ZWw6IFsxLjUsIC0yXSxcbiAgICBjb2xvcjogJyNGNkJFMDAnIC8veWVsbG93IGluIGhleCBcbn0pO1xuY29uc3QgYmFuYW5hMiA9IG5ldyBCYW5hbmEoe1xuICAgIHBvczogW2NhbnZhc1dpZHRoICogKDkgLyAxMCksIGNhbnZhc0hlaWdodCAqICg0IC8gNSldLFxuICAgIHZlbDogWy0xLjUsIC0yLjVdLFxuICAgIGNvbG9yOiAnI0Y2N0U4MCdcbn0pO1xuLy8gd2luZG93LkJhbmFuYSA9IEJhbmFuYTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgY2FudmFzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG5cbiAgICBjYW52YXNFbGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC42NTtcbiAgICBjYW52YXNFbGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogLjY1O1xuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhc0VsZS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBiYW5hbmExLmRyYXcoY29udGV4dCk7XG4gICAgYmFuYW5hMi5kcmF3KGNvbnRleHQpO1xuXG4gICAgLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbGUud2lkdGgsIGNhbnZhc0VsZS5oZWlnaHQpO1xuXG4gICAgLy8gICAgIGJhbmFuYTEubW92ZShjb250ZXh0KTtcbiAgICAvLyAgICAgYmFuYW5hMS5kcmF3KGNvbnRleHQpO1xuXG4gICAgLy8gICAgIGJhbmFuYTIubW92ZShjb250ZXh0KTtcbiAgICAvLyAgICAgYmFuYW5hMi5kcmF3KGNvbnRleHQpO1xuICAgIC8vIH0sIDEwKTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbGUud2lkdGgsIGNhbnZhc0VsZS5oZWlnaHQpO1xuXG4gICAgICAgIGJhbmFuYTEubW92ZShjb250ZXh0KTtcbiAgICAgICAgYmFuYW5hMS5kcmF3KGNvbnRleHQpO1xuXG4gICAgICAgIGJhbmFuYTIubW92ZShjb250ZXh0KTtcbiAgICAgICAgYmFuYW5hMi5kcmF3KGNvbnRleHQpO1xuICAgIH0pXG59KSJdLCJuYW1lcyI6WyJCYW5hbmEiLCJyZXF1aXJlIiwiYmFuYW5hMSIsInBvcyIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidmVsIiwiY29sb3IiLCJiYW5hbmEyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWxlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/banana.js":
/*!*******************************!*\
  !*** ./src/scripts/banana.js ***!
  \*******************************/
/***/ (function(module) {

eval("// const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n// const canvasLeft = canvasEle.getBoundingClientRect().left;\n// const canvasRight = canvasEle.getBoundingClientRect().right;\n// const canvasTop = canvasEle.getBoundingClientRect().top;\n// const canvasBottom = canvasEle.getBoundingClientRect().bottom;\n\ncanvasWidth = window.innerWidth * .65;\ncanvasHeight = window.innerHeight * .65;\nfunction Banana(object) {\n  this.pos = object.pos;\n  this.vel = object.vel;\n  this.color = object.color;\n  this.gravityY = 0;\n  this.gravity = 0.0098;\n  this.radius = 15;\n}\nBanana.prototype.draw = function (context) {\n  context.fillStyle = this.color;\n  context.beginPath();\n  context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  context.fill();\n  // context.closePath();\n};\n\nBanana.prototype.move = function (context) {\n  this.gravityY += this.gravity;\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1] + this.gravityY;\n};\nmodule.exports = Banana;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYW5hbmEuanMuanMiLCJuYW1lcyI6WyJjYW52YXNXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbm5lckhlaWdodCIsIkJhbmFuYSIsIm9iamVjdCIsInBvcyIsInZlbCIsImNvbG9yIiwiZ3Jhdml0eVkiLCJncmF2aXR5IiwicmFkaXVzIiwicHJvdG90eXBlIiwiZHJhdyIsImNvbnRleHQiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwibW92ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvcmlsbGFzLy4vc3JjL3NjcmlwdHMvYmFuYW5hLmpzPzMzZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgY2FudmFzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4vLyBjb25zdCBjYW52YXNMZWZ0ID0gY2FudmFzRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4vLyBjb25zdCBjYW52YXNSaWdodCA9IGNhbnZhc0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcbi8vIGNvbnN0IGNhbnZhc1RvcCA9IGNhbnZhc0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4vLyBjb25zdCBjYW52YXNCb3R0b20gPSBjYW52YXNFbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuXG5jYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjY1O1xuY2FudmFzSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogLjY1O1xuXG5mdW5jdGlvbiBCYW5hbmEob2JqZWN0KSB7XG5cbiAgICB0aGlzLnBvcyA9IG9iamVjdC5wb3M7XG4gICAgdGhpcy52ZWwgPSBvYmplY3QudmVsO1xuICAgIHRoaXMuY29sb3IgPSBvYmplY3QuY29sb3I7XG5cbiAgICB0aGlzLmdyYXZpdHlZID0gMDtcbiAgICB0aGlzLmdyYXZpdHkgPSAwLjAwOTg7XG5cbiAgICB0aGlzLnJhZGl1cyA9IDE1O1xuXG5cbn1cblxuQmFuYW5hLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIC8vIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbn1cblxuQmFuYW5hLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAgIHRoaXMuZ3Jhdml0eVkgKz0gdGhpcy5ncmF2aXR5O1xuXG4gICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF07XG4gICAgdGhpcy5wb3NbMV0gKz0gKHRoaXMudmVsWzFdICsgdGhpcy5ncmF2aXR5WSk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYW5hbmE7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7QUFDckNDLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxXQUFXLEdBQUcsR0FBRztBQUV2QyxTQUFTQyxNQUFNLENBQUNDLE1BQU0sRUFBRTtFQUVwQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDQyxHQUFHO0VBQ3JCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRixNQUFNLENBQUNFLEdBQUc7RUFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0csS0FBSztFQUV6QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO0VBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFFckIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtBQUdwQjtBQUVBUCxNQUFNLENBQUNRLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHLFVBQVVDLE9BQU8sRUFBRTtFQUV2Q0EsT0FBTyxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDUCxLQUFLO0VBRTlCTSxPQUFPLENBQUNFLFNBQVMsRUFBRTtFQUNuQkYsT0FBTyxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDSyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBR08sSUFBSSxDQUFDQyxFQUFFLENBQUM7RUFDbEVMLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO0VBQ2Q7QUFFSixDQUFDOztBQUVEaEIsTUFBTSxDQUFDUSxTQUFTLENBQUNTLElBQUksR0FBRyxVQUFVUCxPQUFPLEVBQUU7RUFFdkMsSUFBSSxDQUFDTCxRQUFRLElBQUksSUFBSSxDQUFDQyxPQUFPO0VBRTdCLElBQUksQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUMxQixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNFLFFBQVM7QUFFaEQsQ0FBQztBQUVEYSxNQUFNLENBQUNDLE9BQU8sR0FBR25CLE1BQU0ifQ==\n//# sourceURL=webpack-internal:///./src/scripts/banana.js\n");

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