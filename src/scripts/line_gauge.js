let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

function LineGauge(object) {
    this.pos = object.pos;
    this.width = ((canvasWidth / 15));
    this.height = (2 * (canvasWidth / 150))
    this.degree = 1;
    this.spacebarCounter = 0;

    this.vectorDegree;
    this.vectorWidth;
}

let originalWidth = ((canvasWidth / 15));

function calculateRadians(degree) {
    let radians = degree * (Math.PI / 180);
    return radians;
}

let spacebarPressed;

LineGauge.prototype.draw = function (context) {

    context.fillStyle = '#A020F0';

    context.save();

    context.beginPath();

    let that = this;

    document.body.onkeyup = function (event) {
        if (event.keyCode === 32 ||
            event.code === "Space" ||
            event.key === " ") {
            spacebarPressed = true;
        } else {
            spacebarPressed = false;
        }
    }

    if (spacebarPressed && this.spacebarCounter === 0) {
        // console.log("yay")
        this.spacebarCounter++;
        spacebarPressed = false;

        this.vectorDegree = this.degree;
    } else if (spacebarPressed && this.spacebarCounter === 1) {
        // console.log("yayyay")
        this.spacebarCounter++;

        spacebarPressed = false;

        this.vectorWidth = this.width;
        this.getVector(this.vectorDegree, this.vectorWidth);
    } else {
        // console.log("nah")
    }

    if (this.spacebarCounter === 0) {
        this.rotate(context);
    } else if (this.spacebarCounter === 1) {
        context.translate(this.pos[0], this.pos[1]);
        context.rotate(-1 * calculateRadians(this.degree))
        context.translate(-1 * this.pos[0], -1 * this.pos[1]);
        this.power();
    } else {
        context.translate(this.pos[0], this.pos[1]);
        context.rotate(-1 * calculateRadians(this.degree))
        context.translate(-1 * this.pos[0], -1 * this.pos[1]);
    }

    // context.rect(this.pos[0], this.pos[1], this.width, this.height);

    let arrow_img = document.getElementById("arrow");

    context.drawImage(arrow_img, this.pos[0], this.pos[1], this.width, 2 * this.height);

    // context.fill();
    context.closePath();

    context.restore();
}

let rotatingUp;
LineGauge.prototype.rotate = function (context) {
    context.translate(this.pos[0], this.pos[1]);

    if (this.degree >= 90) {
        rotatingUp = false;
    } else if (this.degree <= 1) {
        rotatingUp = true;
    }

    if (rotatingUp) {
        this.degree++;
        context.rotate(-1 * calculateRadians(this.degree));
    } else {
        this.degree--;
        context.rotate(-1 * calculateRadians(this.degree));
    }

    context.translate(-1 * this.pos[0], -1 * this.pos[1]);
}

let widthIncreasing;
LineGauge.prototype.power = function () {

    if (this.width >= (2 * originalWidth)) {
        widthIncreasing = false;
    } else if (this.width <= originalWidth) {
        widthIncreasing = true;
    }

    if (widthIncreasing) {
        this.width += (originalWidth / 100);
    } else {
        this.width -= (originalWidth / 100);
    }
}

LineGauge.prototype.getVector = function (degree, width) {

    let opposite = (width * Math.sin(calculateRadians(degree))) / 35;
    let adjacent = (width * Math.cos(calculateRadians(degree))) / 35;

    return [adjacent, (-1 * opposite)];
}


module.exports = LineGauge;