let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

function LineGauge(object) {
    this.pos = object.pos;
    this.width = (2 * (canvasWidth / 15));
    this.height = (2 * (canvasWidth / 150))
}


let degree = 0;

function calculateRadians(degree) {
    let radians = degree * (Math.PI / 180);
    return radians;
}


LineGauge.prototype.draw = function (context) {
    // degree++;
    // if (degree > 360) degree = 0;

    context.fillStyle = '#A020F0';

    context.save();

    context.beginPath();


    this.rotate(context);


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


module.exports = LineGauge;