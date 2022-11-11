function Banana() {
    this.pos = [10, 10];
    this.radius = 5;
    this.color = '#000000';
    // this.color = '#FFFF00'; //yellow in hex 
}

Banana.prototype.draw = function (context) {

    context.fillStyle = this.color;

    context.beginPath();
    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    context.fill();
    // context.closePath();

}

module.exports = Banana;