const Banana = require("./banana.js");
const Gorilla = require("./gorilla.js");
const Tree = require("./tree.js");
const LineGauge = require("./line_gauge.js")

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

//trees initialization
let allTrees = [];

const firstTree = new Tree({
    type: 3,
    posX: (canvasWidth * (5 / 20))
})
allTrees.push(firstTree);

const secondTree = new Tree({
    type: 2,
    posX: (canvasWidth * (7.25 / 20))
})
allTrees.push(secondTree);

const thirdTree = new Tree({
    type: 1,
    posX: (canvasWidth * (9.50 / 20))
})
allTrees.push(thirdTree);

const fourthTree = new Tree({
    type: 2,
    posX: (canvasWidth * (11.75 / 20))
})
allTrees.push(fourthTree);

const fifthTree = new Tree({
    type: 3,
    posX: (canvasWidth * (14 / 20)) //(canvasWidth * (3 / 4)) - (canvasWidth / 20)
})
allTrees.push(fifthTree);


//gorillas initialization

let xGorilla1 = (canvasWidth / 15) * (3 / 4)

const gorilla1 = new Gorilla({
    pos: [xGorilla1, canvasHeight * (75 / 100)],
    color: '#440000'
});

let xGorilla2 = (canvasWidth - ((canvasWidth / 15) * (3 / 4)) - (canvasWidth / 15))

const gorilla2 = new Gorilla({
    pos: [xGorilla2, canvasHeight * (75 / 100)],
    //old xpos = canvasWidth * (177 / 200)
    color: '#964B00'
});



//bananas initialization

const banana1 = new Banana({
    // pos: [xGorilla1 + ((canvasWidth / 15) * (1 / 2)), canvasHeight * (75 / 100)],
    pos: [gorilla1.center[0], gorilla1.center[1]],

    vel: [1.6, -1],
    color: '#F6BE00' //yellow in hex 
});

const banana2 = new Banana({
    // pos: [xGorilla2 + ((canvasWidth / 15) * (1 / 2)), canvasHeight * (75 / 100)],
    pos: [gorilla2.center[0], gorilla2.center[1]],


    vel: [-1.6, -2],
    color: '#F67E80'
});

// window.Banana = Banana;


//Line Gauge
const lineGauge = new LineGauge({
    pos: [gorilla1.center[0], gorilla1.center[1]]
})



function Game() {
    this.turn = 1;
}

Game.prototype.draw = function (context) {

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    lineGauge.draw(context);

    gorilla1.draw(context);

    gorilla2.draw(context);

    allTrees.forEach((tree) => tree.draw(context))

    if (this.turn === 1) {

        // lineGauge.draw(context);

        gorilla1.draw(context);

        gorilla2.draw(context);

        if (!banana1.hasCollided(gorilla2, allTrees)) {
            banana1.draw(context);
        } else {
            this.turn = 2; //switch turn
            banana1.pos = [xGorilla1 + ((canvasWidth / 15) * (1 / 2)), canvasHeight * (75 / 100)];
            //reset player's banana pos
            banana1.vel = [1.5, -2]; //reset player's banana vel
            banana1.gravityY = 0; //reset player's banana gravity
        }

    } else {


        if (!banana2.hasCollided(gorilla1, allTrees)) {
            banana2.draw(context);
        } else {
            this.turn = 1; //switch turn
            banana2.pos = [xGorilla2 + ((canvasWidth / 15) * (1 / 2)), canvasHeight * (75 / 100)];
            //reset opponent's banana pos
            banana2.vel = [-1.5, -2.5] //reset opponent's banana vel
            banana2.gravityY = 0; //reset opponent's banana gravity
        }

    }
}

module.exports = Game;