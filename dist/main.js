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

eval("// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\nconst Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\nconst GameView = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\nlet canvasWidth = window.innerWidth * .65;\nlet canvasHeight = window.innerHeight * .65;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n  canvasEle.width = canvasWidth;\n  canvasEle.height = canvasHeight;\n  const context = canvasEle.getContext(\"2d\");\n  const game = new Game();\n  const gameView = new GameView(context, game);\n  gameView.animate();\n\n  // gorilla1.draw(context);\n  // gorilla2.draw(context);\n\n  // banana1.draw(context);\n  // banana2.draw(context);\n\n  // if (turn === 1) {\n  //     banana1.draw(context);\n  // } else {\n  //     banana2.draw(context);\n  // }\n\n  // setInterval(function () {\n  //     context.clearRect(0, 0, canvasEle.width, canvasEle.height);\n\n  //     banana1.move(context);\n  //     banana1.draw(context);\n\n  //     banana2.move(context);\n  //     banana2.draw(context);\n  // }, 10);\n\n  // window.requestAnimationFrame(function () {\n  //     if (turn === 1) {\n  //         banana1.draw(context);\n  //     } else {\n  //         banana2.draw(context);\n  //     }\n  // })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFtQixDQUFDO0FBQ3pDLE1BQU1DLFFBQVEsR0FBR0QsbUJBQU8sQ0FBQywwREFBd0IsQ0FBQztBQUVsRCxJQUFJRSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7QUFDekMsSUFBSUMsWUFBWSxHQUFHRixNQUFNLENBQUNHLFdBQVcsR0FBRyxHQUFHO0FBRzNDQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFFdEQsTUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUU1REQsU0FBUyxDQUFDRSxLQUFLLEdBQUdULFdBQVc7RUFDN0JPLFNBQVMsQ0FBQ0csTUFBTSxHQUFHUCxZQUFZO0VBRS9CLE1BQU1RLE9BQU8sR0FBR0osU0FBUyxDQUFDSyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRTFDLE1BQU1DLElBQUksR0FBRyxJQUFJaEIsSUFBSSxFQUFFO0VBQ3ZCLE1BQU1pQixRQUFRLEdBQUcsSUFBSWYsUUFBUSxDQUFDWSxPQUFPLEVBQUVFLElBQUksQ0FBQztFQUM1Q0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7O0VBRWxCO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3JpbGxhcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pO1xuXG5jb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWVfdmlldy5qc1wiKTtcblxubGV0IGNhbnZhc1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAuNjU7XG5sZXQgY2FudmFzSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogLjY1O1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGNhbnZhc0VsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuXG4gICAgY2FudmFzRWxlLndpZHRoID0gY2FudmFzV2lkdGg7XG4gICAgY2FudmFzRWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXNFbGUuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY29udGV4dCwgZ2FtZSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xuXG4gICAgLy8gZ29yaWxsYTEuZHJhdyhjb250ZXh0KTtcbiAgICAvLyBnb3JpbGxhMi5kcmF3KGNvbnRleHQpO1xuXG4gICAgLy8gYmFuYW5hMS5kcmF3KGNvbnRleHQpO1xuICAgIC8vIGJhbmFuYTIuZHJhdyhjb250ZXh0KTtcblxuICAgIC8vIGlmICh0dXJuID09PSAxKSB7XG4gICAgLy8gICAgIGJhbmFuYTEuZHJhdyhjb250ZXh0KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBiYW5hbmEyLmRyYXcoY29udGV4dCk7XG4gICAgLy8gfVxuXG4gICAgLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbGUud2lkdGgsIGNhbnZhc0VsZS5oZWlnaHQpO1xuXG4gICAgLy8gICAgIGJhbmFuYTEubW92ZShjb250ZXh0KTtcbiAgICAvLyAgICAgYmFuYW5hMS5kcmF3KGNvbnRleHQpO1xuXG4gICAgLy8gICAgIGJhbmFuYTIubW92ZShjb250ZXh0KTtcbiAgICAvLyAgICAgYmFuYW5hMi5kcmF3KGNvbnRleHQpO1xuICAgIC8vIH0sIDEwKTtcblxuICAgIC8vIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBpZiAodHVybiA9PT0gMSkge1xuICAgIC8vICAgICAgICAgYmFuYW5hMS5kcmF3KGNvbnRleHQpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgYmFuYW5hMi5kcmF3KGNvbnRleHQpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSlcbn0pXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwiY2FudmFzV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJnYW1lIiwiZ2FtZVZpZXciLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/banana.js":
/*!*******************************!*\
  !*** ./src/scripts/banana.js ***!
  \*******************************/
/***/ (function(module) {

eval("// const canvasEle = document.getElementsByTagName(\"canvas\")[0];\n// const canvasLeft = canvasEle.getBoundingClientRect().left;\n// const canvasRight = canvasEle.getBoundingClientRect().right;\n// const canvasTop = canvasEle.getBoundingClientRect().top;\n// const canvasBottom = canvasEle.getBoundingClientRect().bottom;\n\nlet canvasWidth = window.innerWidth * .65;\nlet canvasHeight = window.innerHeight * .65;\nfunction Banana(object) {\n  this.pos = object.pos;\n  this.vel = object.vel;\n  this.color = object.color;\n  this.gravityY = 0;\n  this.gravity = 0.0098;\n  this.radius = 15;\n}\nBanana.prototype.draw = function (context) {\n  // context.clearRect(0, 0, canvasWidth, canvasHeight);\n\n  context.fillStyle = this.color;\n  context.beginPath();\n  context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  context.fill();\n  context.closePath();\n  this.move();\n  let that = this;\n\n  // if (!this.outOfBounds()) {\n  //     window.requestAnimationFrame(function () {\n  //         that.draw(context);\n  //     });\n  // }\n};\n\nBanana.prototype.move = function () {\n  this.gravityY += this.gravity;\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1] + this.gravityY;\n};\nBanana.prototype.outOfBounds = function () {\n  if (this.pos[0] > canvasWidth || this.pos[0] < 0 || this.pos[1] > canvasHeight) {\n    return true;\n  } else {\n    return false;\n  }\n};\nmodule.exports = Banana;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYW5hbmEuanMuanMiLCJuYW1lcyI6WyJjYW52YXNXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbm5lckhlaWdodCIsIkJhbmFuYSIsIm9iamVjdCIsInBvcyIsInZlbCIsImNvbG9yIiwiZ3Jhdml0eVkiLCJncmF2aXR5IiwicmFkaXVzIiwicHJvdG90eXBlIiwiZHJhdyIsImNvbnRleHQiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwibW92ZSIsInRoYXQiLCJvdXRPZkJvdW5kcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvcmlsbGFzLy4vc3JjL3NjcmlwdHMvYmFuYW5hLmpzPzMzZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgY2FudmFzRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4vLyBjb25zdCBjYW52YXNMZWZ0ID0gY2FudmFzRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4vLyBjb25zdCBjYW52YXNSaWdodCA9IGNhbnZhc0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcbi8vIGNvbnN0IGNhbnZhc1RvcCA9IGNhbnZhc0VsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4vLyBjb25zdCBjYW52YXNCb3R0b20gPSBjYW52YXNFbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuXG5sZXQgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIC42NTtcbmxldCBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNjU7XG5cbmZ1bmN0aW9uIEJhbmFuYShvYmplY3QpIHtcblxuICAgIHRoaXMucG9zID0gb2JqZWN0LnBvcztcbiAgICB0aGlzLnZlbCA9IG9iamVjdC52ZWw7XG4gICAgdGhpcy5jb2xvciA9IG9iamVjdC5jb2xvcjtcblxuICAgIHRoaXMuZ3Jhdml0eVkgPSAwO1xuICAgIHRoaXMuZ3Jhdml0eSA9IDAuMDA5ODtcblxuICAgIHRoaXMucmFkaXVzID0gMTU7XG5cbn1cblxuQmFuYW5hLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAvLyBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICB0aGlzLm1vdmUoKTtcblxuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIC8vIGlmICghdGhpcy5vdXRPZkJvdW5kcygpKSB7XG4gICAgLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgdGhhdC5kcmF3KGNvbnRleHQpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbn1cblxuQmFuYW5hLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdGhpcy5ncmF2aXR5WSArPSB0aGlzLmdyYXZpdHk7XG5cbiAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXTtcbiAgICB0aGlzLnBvc1sxXSArPSAodGhpcy52ZWxbMV0gKyB0aGlzLmdyYXZpdHlZKTtcblxufVxuXG5CYW5hbmEucHJvdG90eXBlLm91dE9mQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnBvc1swXSA+IGNhbnZhc1dpZHRoIHx8IHRoaXMucG9zWzBdIDwgMCB8fCB0aGlzLnBvc1sxXSA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFuYW5hOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7QUFDekMsSUFBSUMsWUFBWSxHQUFHRixNQUFNLENBQUNHLFdBQVcsR0FBRyxHQUFHO0FBRTNDLFNBQVNDLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO0VBRXBCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNDLEdBQUc7RUFDckIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0UsR0FBRztFQUNyQixJQUFJLENBQUNDLEtBQUssR0FBR0gsTUFBTSxDQUFDRyxLQUFLO0VBRXpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLENBQUM7RUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUVyQixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0FBRXBCO0FBRUFQLE1BQU0sQ0FBQ1EsU0FBUyxDQUFDQyxJQUFJLEdBQUcsVUFBVUMsT0FBTyxFQUFFO0VBQ3ZDOztFQUVBQSxPQUFPLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNQLEtBQUs7RUFFOUJNLE9BQU8sQ0FBQ0UsU0FBUyxFQUFFO0VBQ25CRixPQUFPLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNLLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHTyxJQUFJLENBQUNDLEVBQUUsQ0FBQztFQUNsRUwsT0FBTyxDQUFDTSxJQUFJLEVBQUU7RUFDZE4sT0FBTyxDQUFDTyxTQUFTLEVBQUU7RUFFbkIsSUFBSSxDQUFDQyxJQUFJLEVBQUU7RUFFWCxJQUFJQyxJQUFJLEdBQUcsSUFBSTs7RUFFZjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUosQ0FBQzs7QUFFRG5CLE1BQU0sQ0FBQ1EsU0FBUyxDQUFDVSxJQUFJLEdBQUcsWUFBWTtFQUVoQyxJQUFJLENBQUNiLFFBQVEsSUFBSSxJQUFJLENBQUNDLE9BQU87RUFFN0IsSUFBSSxDQUFDSixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzFCLElBQUksQ0FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFLLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsUUFBUztBQUVoRCxDQUFDO0FBRURMLE1BQU0sQ0FBQ1EsU0FBUyxDQUFDWSxXQUFXLEdBQUcsWUFBWTtFQUN2QyxJQUFJLElBQUksQ0FBQ2xCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR1AsV0FBVyxJQUFJLElBQUksQ0FBQ08sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0osWUFBWSxFQUFFO0lBQzVFLE9BQU8sSUFBSTtFQUNmLENBQUMsTUFBTTtJQUNILE9BQU8sS0FBSztFQUNoQjtBQUNKLENBQUM7QUFHRHVCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdEIsTUFBTSJ9\n//# sourceURL=webpack-internal:///./src/scripts/banana.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Banana = __webpack_require__(/*! ./banana.js */ \"./src/scripts/banana.js\");\nconst Gorilla = __webpack_require__(/*! ./gorilla.js */ \"./src/scripts/gorilla.js\");\nlet canvasWidth = window.innerWidth * .65;\nlet canvasHeight = window.innerHeight * .65;\nconst banana1 = new Banana({\n  pos: [canvasWidth / 10, canvasHeight * (4 / 5)],\n  vel: [1.5, -2],\n  color: '#F6BE00' //yellow in hex \n});\n\nconst banana2 = new Banana({\n  pos: [canvasWidth * (9 / 10), canvasHeight * (4 / 5)],\n  vel: [-1.5, -2.5],\n  color: '#F67E80'\n});\n// window.Banana = Banana;\n\nconst gorilla1 = new Gorilla({\n  pos: [canvasWidth / 20, canvasHeight * (4 / 5)],\n  color: '#440000'\n});\nconst gorilla2 = new Gorilla({\n  pos: [canvasWidth * (17 / 20), canvasHeight * (4 / 5)],\n  color: '#964B00'\n});\nfunction Game() {\n  this.turn = 1;\n}\nGame.prototype.draw = function (context) {\n  context.clearRect(0, 0, canvasWidth, canvasHeight);\n  gorilla1.draw(context);\n  gorilla2.draw(context);\n  if (this.turn === 1) {\n    if (!banana1.outOfBounds()) {\n      banana1.draw(context);\n    } else {\n      this.turn = 2; //switch turn\n      banana1.pos = [canvasWidth / 10, canvasHeight * (4 / 5)]; //reset player's banana pos\n      banana1.vel = [1.5, -2]; //reset player's banana vel\n      banana1.gravityY = 0; //reset player's banana gravity\n    }\n  } else {\n    if (!banana2.outOfBounds()) {\n      banana2.draw(context);\n    } else {\n      this.turn = 1; //switch turn\n      banana2.pos = [canvasWidth * (9 / 10), canvasHeight * (4 / 5)]; //reset opponent's banana pos\n      banana2.vel = [-1.5, -2.5]; //reset opponent's banana vel\n      banana2.gravityY = 0; //reset opponent's banana gravity\n    }\n  }\n};\n\n// Game.prototype.hasCollided = function () {\n//     if (turn === 1) {\n\n//     }\n// }\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixPQUFPLENBQUNILEdBQUcsR0FBRyxDQUFDTixXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFRyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNoRU0sT0FBTyxDQUFDRixHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDO01BQzNCRSxPQUFPLENBQUNVLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQjtFQUVKO0FBQ0osQ0FBQzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHVCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29yaWxsYXMvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmFuYW5hID0gcmVxdWlyZShcIi4vYmFuYW5hLmpzXCIpO1xuY29uc3QgR29yaWxsYSA9IHJlcXVpcmUoXCIuL2dvcmlsbGEuanNcIik7XG5cbmxldCBjYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjY1O1xubGV0IGNhbnZhc0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC42NTtcblxuY29uc3QgYmFuYW5hMSA9IG5ldyBCYW5hbmEoe1xuICAgIHBvczogW2NhbnZhc1dpZHRoIC8gMTAsIGNhbnZhc0hlaWdodCAqICg0IC8gNSldLFxuICAgIHZlbDogWzEuNSwgLTJdLFxuICAgIGNvbG9yOiAnI0Y2QkUwMCcgLy95ZWxsb3cgaW4gaGV4IFxufSk7XG5jb25zdCBiYW5hbmEyID0gbmV3IEJhbmFuYSh7XG4gICAgcG9zOiBbY2FudmFzV2lkdGggKiAoOSAvIDEwKSwgY2FudmFzSGVpZ2h0ICogKDQgLyA1KV0sXG4gICAgdmVsOiBbLTEuNSwgLTIuNV0sXG4gICAgY29sb3I6ICcjRjY3RTgwJ1xufSk7XG4vLyB3aW5kb3cuQmFuYW5hID0gQmFuYW5hO1xuXG5jb25zdCBnb3JpbGxhMSA9IG5ldyBHb3JpbGxhKHtcbiAgICBwb3M6IFtjYW52YXNXaWR0aCAvIDIwLCBjYW52YXNIZWlnaHQgKiAoNCAvIDUpXSxcbiAgICBjb2xvcjogJyM0NDAwMDAnXG59KTtcblxuY29uc3QgZ29yaWxsYTIgPSBuZXcgR29yaWxsYSh7XG4gICAgcG9zOiBbY2FudmFzV2lkdGggKiAoMTcgLyAyMCksIGNhbnZhc0hlaWdodCAqICg0IC8gNSldLFxuICAgIGNvbG9yOiAnIzk2NEIwMCdcbn0pO1xuXG5cblxuXG5mdW5jdGlvbiBHYW1lKCkge1xuICAgIHRoaXMudHVybiA9IDE7XG59XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG5cbiAgICBnb3JpbGxhMS5kcmF3KGNvbnRleHQpO1xuICAgIGdvcmlsbGEyLmRyYXcoY29udGV4dCk7XG5cbiAgICBpZiAodGhpcy50dXJuID09PSAxKSB7XG5cbiAgICAgICAgaWYgKCFiYW5hbmExLm91dE9mQm91bmRzKCkpIHtcbiAgICAgICAgICAgIGJhbmFuYTEuZHJhdyhjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IDI7IC8vc3dpdGNoIHR1cm5cbiAgICAgICAgICAgIGJhbmFuYTEucG9zID0gW2NhbnZhc1dpZHRoIC8gMTAsIGNhbnZhc0hlaWdodCAqICg0IC8gNSldOyAvL3Jlc2V0IHBsYXllcidzIGJhbmFuYSBwb3NcbiAgICAgICAgICAgIGJhbmFuYTEudmVsID0gWzEuNSwgLTJdOyAvL3Jlc2V0IHBsYXllcidzIGJhbmFuYSB2ZWxcbiAgICAgICAgICAgIGJhbmFuYTEuZ3Jhdml0eVkgPSAwOyAvL3Jlc2V0IHBsYXllcidzIGJhbmFuYSBncmF2aXR5XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKCFiYW5hbmEyLm91dE9mQm91bmRzKCkpIHtcbiAgICAgICAgICAgIGJhbmFuYTIuZHJhdyhjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IDE7IC8vc3dpdGNoIHR1cm5cbiAgICAgICAgICAgIGJhbmFuYTIucG9zID0gW2NhbnZhc1dpZHRoICogKDkgLyAxMCksIGNhbnZhc0hlaWdodCAqICg0IC8gNSldOyAvL3Jlc2V0IG9wcG9uZW50J3MgYmFuYW5hIHBvc1xuICAgICAgICAgICAgYmFuYW5hMi52ZWwgPSBbLTEuNSwgLTIuNV0gLy9yZXNldCBvcHBvbmVudCdzIGJhbmFuYSB2ZWxcbiAgICAgICAgICAgIGJhbmFuYTIuZ3Jhdml0eVkgPSAwOyAvL3Jlc2V0IG9wcG9uZW50J3MgYmFuYW5hIGdyYXZpdHlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cbi8vIEdhbWUucHJvdG90eXBlLmhhc0NvbGxpZGVkID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGlmICh0dXJuID09PSAxKSB7XG5cbi8vICAgICB9XG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwibmFtZXMiOlsiQmFuYW5hIiwicmVxdWlyZSIsIkdvcmlsbGEiLCJjYW52YXNXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJpbm5lckhlaWdodCIsImJhbmFuYTEiLCJwb3MiLCJ2ZWwiLCJjb2xvciIsImJhbmFuYTIiLCJnb3JpbGxhMSIsImdvcmlsbGEyIiwiR2FtZSIsInR1cm4iLCJwcm90b3R5cGUiLCJkcmF3IiwiY29udGV4dCIsImNsZWFyUmVjdCIsIm91dE9mQm91bmRzIiwiZ3Jhdml0eVkiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(module) {

eval("function GameView(context, game) {\n  this.context = context;\n  this.game = game;\n}\nGameView.prototype.animate = function animate() {\n  this.game.draw(this.context);\n  requestAnimationFrame(this.animate.bind(this));\n};\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJuYW1lcyI6WyJHYW1lVmlldyIsImNvbnRleHQiLCJnYW1lIiwicHJvdG90eXBlIiwiYW5pbWF0ZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29yaWxsYXMvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBHYW1lVmlldyhjb250ZXh0LCBnYW1lKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xufVxuXG5HYW1lVmlldy5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG5cbiAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmNvbnRleHQpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFQyxJQUFJLEVBQUU7RUFDN0IsSUFBSSxDQUFDRCxPQUFPLEdBQUdBLE9BQU87RUFDdEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7QUFDcEI7QUFFQUYsUUFBUSxDQUFDRyxTQUFTLENBQUNDLE9BQU8sR0FBRyxTQUFTQSxPQUFPLEdBQUc7RUFFNUMsSUFBSSxDQUFDRixJQUFJLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUNKLE9BQU8sQ0FBQztFQUU1QksscUJBQXFCLENBQUMsSUFBSSxDQUFDRixPQUFPLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRURDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHVCxRQUFRIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/gorilla.js":
/*!********************************!*\
  !*** ./src/scripts/gorilla.js ***!
  \********************************/
/***/ (function(module) {

eval("// function Gorilla(object) {\n//     this.pos = object.pos;\n// }\n\nfunction Gorilla(object) {\n  this.pos = object.pos;\n  this.color = object.color;\n}\nlet canvasWidth = window.innerWidth * .65;\nlet canvasHeight = window.innerHeight * .65;\nGorilla.prototype.draw = function (context) {\n  context.fillStyle = this.color;\n  context.beginPath();\n  context.rect(this.pos[0], this.pos[1], canvasWidth / 10, canvasHeight / 5);\n  context.fill();\n  context.closePath();\n};\nmodule.exports = Gorilla;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nb3JpbGxhLmpzLmpzIiwibmFtZXMiOlsiR29yaWxsYSIsIm9iamVjdCIsInBvcyIsImNvbG9yIiwiY2FudmFzV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2FudmFzSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwcm90b3R5cGUiLCJkcmF3IiwiY29udGV4dCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInJlY3QiLCJmaWxsIiwiY2xvc2VQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29yaWxsYXMvLi9zcmMvc2NyaXB0cy9nb3JpbGxhLmpzP2M4ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb24gR29yaWxsYShvYmplY3QpIHtcbi8vICAgICB0aGlzLnBvcyA9IG9iamVjdC5wb3M7XG4vLyB9XG5cbmZ1bmN0aW9uIEdvcmlsbGEob2JqZWN0KSB7XG4gICAgdGhpcy5wb3MgPSBvYmplY3QucG9zO1xuICAgIHRoaXMuY29sb3IgPSBvYmplY3QuY29sb3I7XG59XG5cbmxldCBjYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogLjY1O1xubGV0IGNhbnZhc0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIC42NTtcblxuR29yaWxsYS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCAoY2FudmFzV2lkdGggLyAxMCksIChjYW52YXNIZWlnaHQgLyA1KSk7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHb3JpbGxhOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFO0VBQ3JCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNDLEdBQUc7RUFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBSztBQUM3QjtBQUVBLElBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxVQUFVLEdBQUcsR0FBRztBQUN6QyxJQUFJQyxZQUFZLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxHQUFHLEdBQUc7QUFFM0NSLE9BQU8sQ0FBQ1MsU0FBUyxDQUFDQyxJQUFJLEdBQUcsVUFBVUMsT0FBTyxFQUFFO0VBRXhDQSxPQUFPLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNULEtBQUs7RUFDOUJRLE9BQU8sQ0FBQ0UsU0FBUyxFQUFFO0VBQ25CRixPQUFPLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBR0UsV0FBVyxHQUFHLEVBQUUsRUFBSUcsWUFBWSxHQUFHLENBQUMsQ0FBRTtFQUM5RUksT0FBTyxDQUFDSSxJQUFJLEVBQUU7RUFDZEosT0FBTyxDQUFDSyxTQUFTLEVBQUU7QUFDdkIsQ0FBQztBQUVEQyxNQUFNLENBQUNDLE9BQU8sR0FBR2xCLE9BQU8ifQ==\n//# sourceURL=webpack-internal:///./src/scripts/gorilla.js\n");

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