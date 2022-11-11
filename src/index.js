// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });


const Banana = require("./scripts/banana.js");
const banana = new Banana();
// window.Banana = Banana;

document.addEventListener("DOMContentLoaded", function () {
    const canvasEle = document.getElementsByTagName("canvas")[0];
    canvasEle.width = 500;
    canvasEle.height = 500;

    const context = canvasEle.getContext("2d");

    banana.draw(context);
})