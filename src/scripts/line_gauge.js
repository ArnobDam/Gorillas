let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

function LineGauge(object) {
    this.pos = object.pos;
    this.width = (2 * (canvasWidth / 15));
    this.height = (2 * (canvasWidth / 150))
}

let degree = 0;
let originalWidth = (2 * (canvasWidth / 15));

function calculateRadians(degree) {
    let radians = degree * (Math.PI / 180);
    return radians;
}

let spacebarPressed;
let spacebarCounter = 0;
LineGauge.prototype.draw = function (context) {
    // degree++;
    // if (degree > 360) degree = 0;

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

    if (spacebarPressed && spacebarCounter === 0) {
        console.log("yay")
        spacebarCounter++;
        spacebarPressed = false;
    } else if (spacebarPressed && spacebarCounter === 1) {
        console.log("yayyay")
        spacebarCounter = 0;
        degree = 0;
        this.width = originalWidth;
        spacebarPressed = false;
    } else {
        console.log("nah")
    }

    if (spacebarCounter === 0) {
        this.rotate(context);
    } else if (spacebarCounter === 1) {
        context.translate(this.pos[0], this.pos[1]);
        context.rotate(-1 * calculateRadians(degree))
        context.translate(-1 * this.pos[0], -1 * this.pos[1]);
        this.power(context);
    }

    // this.rotate(context);
    // this.power(context);

    context.rect(this.pos[0], this.pos[1], this.width, this.height);

    context.fill();
    context.closePath();

    context.restore();
}

let rotatingUp;
LineGauge.prototype.rotate = function (context) {
    context.translate(this.pos[0], this.pos[1]);

    if (degree === 90) {
        rotatingUp = false;
    } else if (degree === 0) {
        rotatingUp = true;
    }

    if (rotatingUp) {
        degree++;
        context.rotate(-1 * calculateRadians(degree));
    } else {
        degree--;
        context.rotate(-1 * calculateRadians(degree));
    }

    context.translate(-1 * this.pos[0], -1 * this.pos[1]);
}

let widthIncreasing;
LineGauge.prototype.power = function (context) {

    if (this.width >= (2 * originalWidth)) {
        widthIncreasing = false;
    } else if (this.width <= originalWidth) {
        widthIncreasing = true;
    }

    if (widthIncreasing) {
        this.width += (originalWidth / 90);
    } else {
        this.width -= (originalWidth / 90);
    }
}


module.exports = LineGauge;