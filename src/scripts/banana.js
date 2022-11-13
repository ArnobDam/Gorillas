// const canvasEle = document.getElementsByTagName("canvas")[0];
// const canvasLeft = canvasEle.getBoundingClientRect().left;
// const canvasRight = canvasEle.getBoundingClientRect().right;
// const canvasTop = canvasEle.getBoundingClientRect().top;
// const canvasBottom = canvasEle.getBoundingClientRect().bottom;

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

function Banana(object) {

    this.pos = object.pos;
    this.vel = object.vel;
    this.color = object.color;

    this.gravityY = 0;
    this.gravity = 0.0098;

    this.radius = 15;

}

Banana.prototype.draw = function (context) {
    // context.clearRect(0, 0, canvasWidth, canvasHeight);

    context.fillStyle = this.color;

    context.beginPath();
    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    this.move();

    let that = this;

    // if (!this.outOfBounds()) {
    //     window.requestAnimationFrame(function () {
    //         that.draw(context);
    //     });
    // }

}

Banana.prototype.move = function () {

    this.gravityY += this.gravity;

    this.pos[0] += this.vel[0];
    this.pos[1] += (this.vel[1] + this.gravityY);

}

Banana.prototype.outOfBounds = function () {
    if (this.pos[0] > canvasWidth || this.pos[0] < 0 || this.pos[1] > canvasHeight) {
        return true;
    } else {
        return false;
    }
}

Banana.prototype.hasCollidedWithGorilla = function (gorilla) {
    let xBanana = this.pos[0];
    let yBanana = this.pos[1];
    let radiusBanana = this.radius;

    let xGorilla = gorilla.pos[0];
    let yGorilla = gorilla.pos[1];

    let xDiff = Math.abs(xBanana - xGorilla);
    let yDiff = Math.abs(yBanana - yGorilla);

    if (xDiff <= radiusBanana && yDiff <= radiusBanana) {
        return true;
    } else {
        return false;
    }

}

Banana.prototype.hasCollided = function (gorilla) {
    if (this.outOfBounds() || this.hasCollidedWithGorilla(gorilla)) {
        return true;
    } else {
        return false;
    }
}


module.exports = Banana;