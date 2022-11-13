const Banana = require("./banana.js");
const Gorilla = require("./gorilla.js");

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

const banana1 = new Banana({
    pos: [(canvasWidth) * (16.5 / 200), canvasHeight * (75 / 100)],
    //16.5 = gorilla1 starting position + half gorilla width
    //75 same as gorilla1 starting height
    vel: [1.6, -2],
    color: '#F6BE00' //yellow in hex 
});

const banana2 = new Banana({
    pos: [canvasWidth * (183.5 / 200), canvasHeight * (75 / 100)],
    //183.5 = gorilla2 starting position + half gorilla width
    //75 same as gorilla2 starting height
    vel: [-1.6, -2],
    color: '#F67E80'
});

// window.Banana = Banana;



const gorilla1 = new Gorilla({
    pos: [(canvasWidth) * (10 / 200), canvasHeight * (75 / 100)],
    color: '#440000'
});

const gorilla2 = new Gorilla({
    pos: [canvasWidth * (177 / 200), canvasHeight * (75 / 100)],
    color: '#964B00'
});




function Game() {
    this.turn = 1;
}

Game.prototype.draw = function (context) {

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    gorilla1.draw(context);
    gorilla2.draw(context);

    if (this.turn === 1) {

        if (!banana1.hasCollided(gorilla2)) {
            banana1.draw(context);
        } else {
            this.turn = 2; //switch turn
            banana1.pos = [(canvasWidth) * (16.5 / 200), canvasHeight * (75 / 100)];
            //reset player's banana pos
            banana1.vel = [1.5, -2]; //reset player's banana vel
            banana1.gravityY = 0; //reset player's banana gravity
        }

    } else {

        if (!banana2.hasCollided(gorilla1)) {
            banana2.draw(context);
        } else {
            this.turn = 1; //switch turn
            banana2.pos = [canvasWidth * (183.5 / 200), canvasHeight * (75 / 100)];
            //reset opponent's banana pos
            banana2.vel = [-1.5, -2.5] //reset opponent's banana vel
            banana2.gravityY = 0; //reset opponent's banana gravity
        }

    }
}




module.exports = Game;