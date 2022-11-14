let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

function LineGauge(object) {
    this.pos = object.pos;
    this.width = (2 * (canvasWidth / 15));
    this.height = (2 * (canvasWidth / 150))
}

LineGauge.prototype.draw = function (context) {

    context.fillStyle = '#A020F0';
    context.beginPath();
    context.rect(this.pos[0], this.pos[1], this.width, this.height);

    context.fill();
    context.closePath();
}


module.exports = LineGauge;