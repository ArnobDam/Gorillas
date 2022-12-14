// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });

const Game = require("./scripts/game.js");
const GameView = require("./scripts/game_view.js");

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;


document.addEventListener("DOMContentLoaded", function () {

    const canvasEle = document.getElementsByTagName("canvas")[0];

    canvasEle.width = canvasWidth;
    canvasEle.height = canvasHeight;

    const context = canvasEle.getContext("2d");

    const game = new Game();
    const gameView = new GameView(context, game);
    gameView.animate();


    // gorilla1.draw(context);
    // gorilla2.draw(context);

    // banana1.draw(context);
    // banana2.draw(context);
})

