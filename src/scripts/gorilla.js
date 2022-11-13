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
    context.rect(this.pos[0], this.pos[1], (canvasWidth) * (13/200), (canvasHeight) * (13/100));
    // 21/320 = (3/40) * (7/8), 21/160 = (3/20) * (7/8)
    context.fill();
    context.closePath();
}

module.exports = Gorilla;