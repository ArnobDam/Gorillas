function Banana() {
    this.pos = [100, 300];
    this.radius = 15;
    this.color = '#F6BE00'; //yellow in hex 
    // this.speed = speed;
    // this.angle = angle;
    this.vel = [1, -1]
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