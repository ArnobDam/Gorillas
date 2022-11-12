// const canvasEle = document.getElementsByTagName("canvas")[0];
// const canvasLeft = canvasEle.getBoundingClientRect().left;
// const canvasRight = canvasEle.getBoundingClientRect().right;
// const canvasTop = canvasEle.getBoundingClientRect().top;
// const canvasBottom = canvasEle.getBoundingClientRect().bottom;

canvasWidth = window.innerWidth * .65;
canvasHeight = window.innerHeight * .65;

function Banana() {

    this.pos = [0 + canvasWidth/10, canvasHeight*(4/5)];
    this.radius = 15;
    this.color = '#F6BE00'; //yellow in hex 

    this.vel = [1.5, -2]
    this.gravityY = 0;
    this.gravity = 0.0098;
}

Banana.prototype.draw = function (context) {

    context.fillStyle = this.color;

    context.beginPath();
    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    context.fill();
    // context.closePath();

}

Banana.prototype.move = function (context) {

    this.gravityY += this.gravity;

    this.pos[0] += this.vel[0];
    this.pos[1] += (this.vel[1] + this.gravityY);

}

module.exports = Banana;