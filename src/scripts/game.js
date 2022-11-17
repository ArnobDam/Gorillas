const Banana = require("./banana.js");
const Gorilla = require("./gorilla.js");
const Tree = require("./tree.js");
const LineGauge = require("./line_gauge.js")

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

console.log(canvasWidth, canvasHeight);

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

let stump = document.getElementById("stump");

//gorillas initialization

let playerThrowImg = document.getElementById("throw_player");
let compThrowImg = document.getElementById("throw_comp");


let xGorilla1 = (canvasWidth / 15) * (3 / 4)

const gorilla1 = new Gorilla({
    pos: [xGorilla1, canvasHeight * (75 / 100)],
    color: '#440000',
    player: "Y"
},
    {
        throwingImg: playerThrowImg
    });

let xGorilla2 = (canvasWidth - ((canvasWidth / 15) * (3 / 4)) - (1.25 * (canvasWidth / 15)))

const gorilla2 = new Gorilla({
    pos: [xGorilla2, canvasHeight * (75 / 100)],
    //old xpos = canvasWidth * (177 / 200)
    color: '#964B00',
    player: "N"
},
    {
        throwingImg: compThrowImg
    });



//bananas initialization

const banana1 = new Banana({
    // pos: [xGorilla1 + ((canvasWidth / 15) * (1 / 2)), canvasHeight * (75 / 100)],
    pos: [gorilla1.center[0], gorilla1.center[1]],

    vel: [0, 0],
    // vel: [0, -100],
    color: '#F6BE00', //yellow in hex
    player: "Y"
});

const banana2 = new Banana({
    // pos: [xGorilla2 + ((canvasWidth / 15) * (1 / 2)), canvasHeight * (75 / 100)],
    pos: [gorilla2.center[0], gorilla2.center[1]],

    vel: [-1.6, -2],
    color: '#F67E80',
    player: "N"
});


//Line Gauge
const lineGauge = new LineGauge({
    pos: [gorilla1.center[0], gorilla1.center[1]]
})



function Game() {
    this.turn = 1;
}

let hit = false;

let finished = false;

let finalTwoSecondsPlayerTurn;

Game.prototype.draw = function (context) {

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    allTrees.forEach((tree) => tree.draw(context))

    context.drawImage(stump, gorilla1.pos[0] / 2, gorilla1.pos[1] + gorilla1.height,
        gorilla1.width * 1.5, gorilla1.height);

    context.drawImage(stump, gorilla2.pos[0] - (gorilla2.width / 4), gorilla2.pos[1] + gorilla2.height,
        gorilla2.width * 1.5, gorilla2.height);

    if (this.turn === 1) {

        lineGauge.draw(context);

        if (lineGauge.vectorDegree && lineGauge.vectorWidth) {

            document.body.onkeyup = function (event) {   //disable spacebar
                if (event.code === "Space" || event.key === " ") {
                    return false;
                }
            }


            banana1.vel = lineGauge.getVector(lineGauge.vectorDegree, lineGauge.vectorWidth);

            THROWING_TICK++;

            if (THROWING_TICK < 25) {
                gorilla1.draw(context, "throw");
            } else {
                gorilla1.draw(context);
            }

            gorilla2.draw(context);

            if (!banana1.hasCollided(gorilla2, allTrees)) {
                banana1.draw(context);

            } else {

                if (banana1.hasCollidedWithGorilla(gorilla2)) {

                    setTimeout(() => {

                        hit = false;
                        this.turn = 2; //switch turn
                        HIT_TICK = 0;
                        THROWING_TICK = 0;

                        finalTwoSecondsPlayerTurn = false;
                    }, 2000)

                    hit = true;

                    // THROWING_TICK = 0;

                    // this.turn = 2; //switch turn
                    TICK = 15; //gorilla2 is jumping immediately after ending throw (15 + 25 = 40)
                    banana1.pos = [gorilla1.center[0], gorilla1.center[1]]; //reset player's banana pos
                    // banana1.vel = [1.5, -2]; //reset player's banana vel
                    banana1.gravityY = 0; //reset player's banana gravity
                    lineGauge.vectorDegree = undefined;
                    lineGauge.vectorWidth = undefined;

                    banana2.degree = 1;

                    finalTwoSecondsPlayerTurn = true;

                } else {
                    setTimeout(() => {

                        this.turn = 2; //switch turn
                        THROWING_TICK = 0;

                        finalTwoSecondsPlayerTurn = false;

                    }, 2000)
                    // THROWING_TICK = 0;

                    // this.turn = 2; //switch turn
                    // TICK = 15; //gorilla2 is jumping immediately after ending throw (15 + 25 = 40)
                    banana1.pos = [gorilla1.center[0], gorilla1.center[1]]; //reset player's banana pos
                    // banana1.vel = [1.5, -2]; //reset player's banana vel
                    banana1.gravityY = 0; //reset player's banana gravity
                    lineGauge.vectorDegree = undefined;
                    lineGauge.vectorWidth = undefined;

                    banana2.degree = 1;

                    finalTwoSecondsPlayerTurn = true;
                }
            }
        } else {
            gorilla1.draw(context);


            if (hit) {
                HIT_TICK++;
                gorilla2.draw(context, "hit");
            } else {
                gorilla2.draw(context);
            }

            if (finalTwoSecondsPlayerTurn) {
                document.body.onkeyup = function (event) {   //disable spacebar
                    if (event.code === "Space" || event.key === " ") {
                        return false;
                    }
                }
            }

        }

    } else {

        document.body.onkeyup = function (event) {   //disable spacebar
            if (event.code === "Space" || event.key === " ") {
                return false;
            }
        }
        THROWING_TICK++;

        // console.log(THROWING_TICK);

        if (THROWING_TICK < 25) {
            gorilla2.draw(context, "throw");
        } else {
            gorilla2.draw(context);
        }


        if (hit) {
            HIT_TICK++;
            gorilla1.draw(context, "hit");
        } else {
            gorilla1.draw(context);
        }

        if (!banana2.hasCollided(gorilla1, allTrees)) {
            if (!finished) {
                banana2.draw(context);
            }

        } else {

            finished = true;
            if (banana2.hasCollidedWithGorilla(gorilla1)) {

                setTimeout(() => {

                    hit = false;
                    this.turn = 1; //switch turn
                    HIT_TICK = 0;

                    finished = false;
                    THROWING_TICK = 0;

                }, 2000)

                // THROWING_TICK = 0;

                hit = true;
                // this.turn = 1; //switch turn
                banana2.pos = [gorilla2.center[0], gorilla2.center[1]]; //reset opponent's banana pos
                // Math.random() * (max - min) + min;
                // let xVel = Math.random() * ()
                banana2.vel = [-5.5, -2.5] //reset opponent's banana vel

                banana2.gravityY = 0; //reset opponent's banana gravity

                banana1.degree = 1;

                lineGauge.degree = 1;
                let originalWidth = ((canvasWidth / 15));
                lineGauge.width = originalWidth;
                lineGauge.spacebarCounter = 0;
            } else {

                setTimeout(() => {

                    this.turn = 1; //switch turn
                    finished = false;
                    THROWING_TICK = 0;

                }, 2000)

                // THROWING_TICK = 0;

                // this.turn = 1; //switch turn
                banana2.pos = [gorilla2.center[0], gorilla2.center[1]]; //reset opponent's banana pos
                // Math.random() * (max - min) + min;

                //OPPNENT GORILLA AI
                banana2.vel[0] = -1 * (Math.random() * (2.2 - 1.2) + 1.2); //reset opponent's banana vel
                banana2.vel[1] = -1 * (Math.random() * (2.8 - 1.2) + 1.2); //reset opponent's banana vel
                console.log(banana2.vel);
                // banana2.vel = [-5.5, -2.5] //reset opponent's banana vel
                banana2.gravityY = 0; //reset opponent's banana gravity

                banana1.degree = 1;

                lineGauge.degree = 1;
                let originalWidth = ((canvasWidth / 15));
                lineGauge.width = originalWidth;
                lineGauge.spacebarCounter = 0;
            }

        }

    }
}

module.exports = Game;