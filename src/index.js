// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });

const Banana = require("./scripts/banana.js");
const banana1 = new Banana({
    pos: [canvasWidth / 10, canvasHeight * (4 / 5)],
    vel: [1.5, -2],
    color: '#F6BE00' //yellow in hex 
});
const banana2 = new Banana({
    pos: [canvasWidth * (9 / 10), canvasHeight * (4 / 5)],
    vel: [-1.5, -2.5],
    color: '#F67E80'
});
// window.Banana = Banana;

document.addEventListener("DOMContentLoaded", function () {

    const canvasEle = document.getElementsByTagName("canvas")[0];

    canvasEle.width = window.innerWidth * .65;
    canvasEle.height = window.innerHeight * .65;

    const context = canvasEle.getContext("2d");

    banana1.draw(context);
    banana2.draw(context);

    // setInterval(function () {
    //     context.clearRect(0, 0, canvasEle.width, canvasEle.height);

    //     banana1.move(context);
    //     banana1.draw(context);

    //     banana2.move(context);
    //     banana2.draw(context);
    // }, 10);

    window.requestAnimationFrame(function () {
        context.clearRect(0, 0, canvasEle.width, canvasEle.height);

        banana1.move(context);
        banana1.draw(context);

        banana2.move(context);
        banana2.draw(context);
    })
})