// function Gorilla(object) {
//     this.pos = object.pos;
// }

function Gorilla(object) {
    this.pos = object.pos;
    this.color = object.color;
}

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

Gorilla.prototype.draw = function (context) {

    context.fillStyle = this.color;
    context.beginPath();
    context.rect(this.pos[0], this.pos[1], (canvasWidth / 10), (canvasHeight / 5));
    context.fill();
    context.closePath();
}

module.exports = Gorilla;