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
    canvasEle.width = window.innerWidth * .66;
    canvasEle.height = window.innerHeight * .65;

    const context = canvasEle.getContext("2d");

    banana.draw(context);
    setInterval(function () {
        banana.move(context);
        banana.draw(context);
    }, 10);
})