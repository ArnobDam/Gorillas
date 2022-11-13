// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

const Banana = require("./scripts/banana.js");
const Gorilla = require("./scripts/gorilla.js");

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

const gorilla1 = new Gorilla({
    pos: [canvasWidth / 20, canvasHeight * (4 / 5)],
    color: '#000000'
});

const gorilla2 = new Gorilla({
    pos: [canvasWidth * (17 / 20), canvasHeight * (4 / 5)],
    color: '#964B00'
});

let turn = 1;

document.addEventListener("DOMContentLoaded", function () {

    const canvasEle = document.getElementsByTagName("canvas")[0];

    canvasEle.width = window.innerWidth * .65;
    canvasEle.height = window.innerHeight * .65;

    const context = canvasEle.getContext("2d");

    gorilla1.draw(context);
    gorilla2.draw(context);

    // banana1.draw(context);
    // banana2.draw(context);

    // if (turn === 1) {
    //     banana1.draw(context);
    // } else {
    //     banana2.draw(context);
    // }

    // setInterval(function () {
    //     context.clearRect(0, 0, canvasEle.width, canvasEle.height);

    //     banana1.move(context);
    //     banana1.draw(context);

    //     banana2.move(context);
    //     banana2.draw(context);
    // }, 10);

    window.requestAnimationFrame(function () {
        if (turn === 1) {
            banana1.draw(context);
        } else {
            banana2.draw(context);
        }
    })
})