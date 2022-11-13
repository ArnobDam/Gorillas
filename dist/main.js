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

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\nlet canvasWidth = window.innerWidth * .65;\nlet canvasHeight = window.innerHeight * .65;\nconst Banana = __webpack_require__(/*! ./scripts/banana.js */ \"./src/scripts/banana.js\");\nconst banana1 = new Banana({\n  pos: [canvasWidth / 10, canvasHeight * (4 / 5)],\n  vel: [1.5, -2],\n  color: '#F6BE00' //yellow in hex \n});\n\nconst banana2 = new Banana({\n  pos: [canvasWidth * (9 / 10), canvasHeight * (4 / 5)],\n  vel: [-1.5, -2.5],\n  color: '#F67E80'\n});\n// window.Banana = Banana;\n\nlet turn = 2;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n  canvasEle.width = window.innerWidth * .65;\n  canvasEle.height = window.innerHeight * .65;\n  const context = canvasEle.getContext(\"2d\");\n\n  // banana1.draw(context);\n  // banana2.draw(context);\n\n  // setInterval(function () {\n  //     context.clearRect(0, 0, canvasEle.width, canvasEle.height);\n\n  //     banana1.move(context);\n  //     banana1.draw(context);\n\n  //     banana2.move(context);\n  //     banana2.draw(context);\n  // }, 10);\n\n  window.requestAnimationFrame(function () {\n    if (turn === 1) {\n      banana1.draw(context);\n    } else {\n      banana2.draw(context);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxHQUFHO0FBQ3pDLElBQUlDLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxXQUFXLEdBQUcsR0FBRztBQUUzQyxNQUFNQyxNQUFNLEdBQUdDLG1CQUFPLENBQUMsb0RBQXFCLENBQUM7QUFDN0MsTUFBTUMsT0FBTyxHQUFHLElBQUlGLE1BQU0sQ0FBQztFQUN2QkcsR0FBRyxFQUFFLENBQUNSLFdBQVcsR0FBRyxFQUFFLEVBQUVHLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDL0NNLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNkQyxLQUFLLEVBQUUsU0FBUyxDQUFDO0FBQ3JCLENBQUMsQ0FBQzs7QUFDRixNQUFNQyxPQUFPLEdBQUcsSUFBSU4sTUFBTSxDQUFDO0VBQ3ZCRyxHQUFHLEVBQUUsQ0FBQ1IsV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRUcsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNyRE0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7RUFDakJDLEtBQUssRUFBRTtBQUNYLENBQUMsQ0FBQztBQUNGOztBQUVBLElBQUlFLElBQUksR0FBRyxDQUFDO0FBRVpDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUV0RCxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRTVERCxTQUFTLENBQUNFLEtBQUssR0FBR2hCLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7RUFDekNhLFNBQVMsQ0FBQ0csTUFBTSxHQUFHakIsTUFBTSxDQUFDRyxXQUFXLEdBQUcsR0FBRztFQUUzQyxNQUFNZSxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQzs7RUFFMUM7RUFDQTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBbkIsTUFBTSxDQUFDb0IscUJBQXFCLENBQUMsWUFBWTtJQUNyQyxJQUFJVCxJQUFJLEtBQUssQ0FBQyxFQUFFO01BQ1pMLE9BQU8sQ0FBQ2UsSUFBSSxDQUFDSCxPQUFPLENBQUM7SUFDekIsQ0FBQyxNQUFNO01BQ0hSLE9BQU8sQ0FBQ1csSUFBSSxDQUFDSCxPQUFPLENBQUM7SUFDekI7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3JpbGxhcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pO1xuXG5sZXQgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC42NTtcbmxldCBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNjU7XG5cbmNvbnN0IEJhbmFuYSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYmFuYW5hLmpzXCIpO1xuY29uc3QgYmFuYW5hMSA9IG5ldyBCYW5hbmEoe1xuICAgIHBvczogW2NhbnZhc1dpZHRoIC8gMTAsIGNhbnZhc0hlaWdodCAqICg0IC8gNSldLFxuICAgIHZlbDogWzEuNSwgLTJdLFxuICAgIGNvbG9yOiAnI0Y2QkUwMCcgLy95ZWxsb3cgaW4gaGV4IFxufSk7XG5jb25zdCBiYW5hbmEyID0gbmV3IEJhbmFuYSh7XG4gICAgcG9zOiBbY2FudmFzV2lkdGggKiAoOSAvIDEwKSwgY2FudmFzSGVpZ2h0ICogKDQgLyA1KV0sXG4gICAgdmVsOiBbLTEuNSwgLTIuNV0sXG4gICAgY29sb3I6ICcjRjY3RTgwJ1xufSk7XG4vLyB3aW5kb3cuQmFuYW5hID0gQmFuYW5hO1xuXG5sZXQgdHVybiA9IDI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGNhbnZhc0VsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuXG4gICAgY2FudmFzRWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuNjU7XG4gICAgY2FudmFzRWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC42NTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXNFbGUuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgLy8gYmFuYW5hMS5kcmF3KGNvbnRleHQpO1xuICAgIC8vIGJhbmFuYTIuZHJhdyhjb250ZXh0KTtcblxuICAgIC8vIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWxlLndpZHRoLCBjYW52YXNFbGUuaGVpZ2h0KTtcblxuICAgIC8vICAgICBiYW5hbmExLm1vdmUoY29udGV4dCk7XG4gICAgLy8gICAgIGJhbmFuYTEuZHJhdyhjb250ZXh0KTtcblxuICAgIC8vICAgICBiYW5hbmEyLm1vdmUoY29udGV4dCk7XG4gICAgLy8gICAgIGJhbmFuYTIuZHJhdyhjb250ZXh0KTtcbiAgICAvLyB9LCAxMCk7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR1cm4gPT09IDEpIHtcbiAgICAgICAgICAgIGJhbmFuYTEuZHJhdyhjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhbmFuYTIuZHJhdyhjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pXG59KSJdLCJuYW1lcyI6WyJjYW52YXNXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbm5lckhlaWdodCIsIkJhbmFuYSIsInJlcXVpcmUiLCJiYW5hbmExIiwicG9zIiwidmVsIiwiY29sb3IiLCJiYW5hbmEyIiwidHVybiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/banana.js":
/*!*******************************!*\
  !*** ./src/scripts/banana.js ***!
  \*******************************/
/***/ (function(module) {

eval("// const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n// const canvasLeft = canvasEle.getBoundingClientRect().left;\n// const canvasRight = canvasEle.getBoundingClientRect().right;\n// const canvasTop = canvasEle.getBoundingClientRect().top;\n// const canvasBottom = canvasEle.getBoundingClientRect().bottom;\n\nlet canvasWidth = window.innerWidth * .65;\nlet canvasHeight = window.innerHeight * .65;\nfunction Banana(object) {\n  this.pos = object.pos;\n  this.vel = object.vel;\n  this.color = object.color;\n  this.gravityY = 0;\n  this.gravity = 0.0098;\n  this.radius = 15;\n}\nBanana.prototype.draw = function (context) {\n  context.clearRect(0, 0, canvasWidth, canvasHeight);\n  context.fillStyle = this.color;\n  context.beginPath();\n  context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  context.fill();\n  context.closePath();\n  this.move();\n  let that = this;\n  if (!this.outOfBounds()) {\n    window.requestAnimationFrame(function () {\n      that.draw(context);\n    });\n  }\n};\nBanana.prototype.move = function () {\n  this.gravityY += this.gravity;\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1] + this.gravityY;\n};\nBanana.prototype.outOfBounds = function () {\n  if (this.pos[0] > canvasWidth || this.pos[0] < 0 || this.pos[1] > canvasHeight || this.pos[1] < 0) {\n    return true;\n  } else {\n    return false;\n  }\n};\nmodule.exports = Banana;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYW5hbmEuanMuanMiLCJuYW1lcyI6WyJjYW52YXNXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbm5lckhlaWdodCIsIkJhbmFuYSIsIm9iamVjdCIsInBvcyIsInZlbCIsImNvbG9yIiwiZ3Jhdml0eVkiLCJncmF2aXR5IiwicmFkaXVzIiwicHJvdG90eXBlIiwiZHJhdyIsImNvbnRleHQiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwibW92ZSIsInRoYXQiLCJvdXRPZkJvdW5kcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvcmlsbGFzLy4vc3JjL3NjcmlwdHMvYmFuYW5hLmpzPzMzZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgY2FudmFzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4vLyBjb25zdCBjYW52YXNMZWZ0ID0gY2FudmFzRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4vLyBjb25zdCBjYW52YXNSaWdodCA9IGNhbnZhc0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcbi8vIGNvbnN0IGNhbnZhc1RvcCA9IGNhbnZhc0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4vLyBjb25zdCBjYW52YXNCb3R0b20gPSBjYW52YXNFbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuXG5sZXQgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC42NTtcbmxldCBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNjU7XG5cbmZ1bmN0aW9uIEJhbmFuYShvYmplY3QpIHtcblxuICAgIHRoaXMucG9zID0gb2JqZWN0LnBvcztcbiAgICB0aGlzLnZlbCA9IG9iamVjdC52ZWw7XG4gICAgdGhpcy5jb2xvciA9IG9iamVjdC5jb2xvcjtcblxuICAgIHRoaXMuZ3Jhdml0eVkgPSAwO1xuICAgIHRoaXMuZ3Jhdml0eSA9IDAuMDA5ODtcblxuICAgIHRoaXMucmFkaXVzID0gMTU7XG5cbn1cblxuQmFuYW5hLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICB0aGlzLm1vdmUoKTtcblxuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIGlmICghdGhpcy5vdXRPZkJvdW5kcygpKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5kcmF3KGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuQmFuYW5hLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdGhpcy5ncmF2aXR5WSArPSB0aGlzLmdyYXZpdHk7XG5cbiAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXTtcbiAgICB0aGlzLnBvc1sxXSArPSAodGhpcy52ZWxbMV0gKyB0aGlzLmdyYXZpdHlZKTtcblxufVxuXG5CYW5hbmEucHJvdG90eXBlLm91dE9mQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnBvc1swXSA+IGNhbnZhc1dpZHRoIHx8IHRoaXMucG9zWzBdIDwgMCB8fCB0aGlzLnBvc1sxXSA+IGNhbnZhc0hlaWdodCB8fCB0aGlzLnBvc1sxXSA8IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhbmFuYTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxHQUFHO0FBQ3pDLElBQUlDLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxXQUFXLEdBQUcsR0FBRztBQUUzQyxTQUFTQyxNQUFNLENBQUNDLE1BQU0sRUFBRTtFQUVwQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDQyxHQUFHO0VBQ3JCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRixNQUFNLENBQUNFLEdBQUc7RUFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0csS0FBSztFQUV6QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO0VBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFFckIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtBQUVwQjtBQUVBUCxNQUFNLENBQUNRLFNBQVMsQ0FBQ0MsSUFBSSxHQUFHLFVBQVVDLE9BQU8sRUFBRTtFQUN2Q0EsT0FBTyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWhCLFdBQVcsRUFBRUcsWUFBWSxDQUFDO0VBRWxEWSxPQUFPLENBQUNFLFNBQVMsR0FBRyxJQUFJLENBQUNSLEtBQUs7RUFFOUJNLE9BQU8sQ0FBQ0csU0FBUyxFQUFFO0VBQ25CSCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxJQUFJLENBQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNLLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHUSxJQUFJLENBQUNDLEVBQUUsQ0FBQztFQUNsRU4sT0FBTyxDQUFDTyxJQUFJLEVBQUU7RUFDZFAsT0FBTyxDQUFDUSxTQUFTLEVBQUU7RUFFbkIsSUFBSSxDQUFDQyxJQUFJLEVBQUU7RUFFWCxJQUFJQyxJQUFJLEdBQUcsSUFBSTtFQUVmLElBQUksQ0FBQyxJQUFJLENBQUNDLFdBQVcsRUFBRSxFQUFFO0lBQ3JCekIsTUFBTSxDQUFDMEIscUJBQXFCLENBQUMsWUFBWTtNQUNyQ0YsSUFBSSxDQUFDWCxJQUFJLENBQUNDLE9BQU8sQ0FBQztJQUN0QixDQUFDLENBQUM7RUFDTjtBQUVKLENBQUM7QUFFRFYsTUFBTSxDQUFDUSxTQUFTLENBQUNXLElBQUksR0FBRyxZQUFZO0VBRWhDLElBQUksQ0FBQ2QsUUFBUSxJQUFJLElBQUksQ0FBQ0MsT0FBTztFQUU3QixJQUFJLENBQUNKLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDMUIsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUssSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDRSxRQUFTO0FBRWhELENBQUM7QUFFREwsTUFBTSxDQUFDUSxTQUFTLENBQUNhLFdBQVcsR0FBRyxZQUFZO0VBQ3ZDLElBQUksSUFBSSxDQUFDbkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHUCxXQUFXLElBQUksSUFBSSxDQUFDTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSixZQUFZLElBQUksSUFBSSxDQUFDSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQy9GLE9BQU8sSUFBSTtFQUNmLENBQUMsTUFBTTtJQUNILE9BQU8sS0FBSztFQUNoQjtBQUNKLENBQUM7QUFHRHFCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHeEIsTUFBTSJ9\n//# sourceURL=webpack-internal:///./src/scripts/banana.js\n");

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