// function Gorilla(object) {
//     this.pos = object.pos;
// }

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

function Gorilla(object) {
    this.pos = object.pos;
    this.color = object.color;
    this.width = canvasWidth / 15;
    this.height = canvasWidth / 15;
    this.center = [
        this.pos[0] + (this.width / 2),
        this.pos[1] + (this.height / 2)
    ]
}

Gorilla.prototype.draw = function (context) {

    context.fillStyle = this.color;
    context.beginPath();
    // context.rect(this.pos[0], this.pos[1], this.width, this.width);

    let img = document.getElementById("neutral");

    context.drawImage(img, this.pos[0], this.pos[1], this.width, this.width);

    context.fill();
    context.closePath();


}

module.exports = Gorilla;