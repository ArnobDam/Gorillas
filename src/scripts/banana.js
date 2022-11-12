// const canvasEle = document.getElementsByTagName("canvas")[0];
// const canvasLeft = canvasEle.getBoundingClientRect().left;
// const canvasRight = canvasEle.getBoundingClientRect().right;
// const canvasTop = canvasEle.getBoundingClientRect().top;
// const canvasBottom = canvasEle.getBoundingClientRect().bottom;

canvasWidth = window.innerWidth * .65;
canvasHeight = window.innerHeight * .65;

function Banana(object) {

    this.pos = object.pos;
    this.vel = object.vel;
    this.color = object.color;

    this.gravityY = 0;
    this.gravity = 0.0098;

    this.radius = 15;

}

Banana.prototype.draw = function (context) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    context.fillStyle = this.color;

    context.beginPath();
    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    this.move();
    let that = this;

    window.requestAnimationFrame(function () {
        that.draw(context);
    });
}

Banana.prototype.move = function () {

    this.gravityY += this.gravity;

    this.pos[0] += this.vel[0];
    this.pos[1] += (this.vel[1] + this.gravityY);

}

module.exports = Banana;