// function Gorilla(object) {
//     this.pos = object.pos;
// }

let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

function Gorilla(object, spriteObject) {
    this.pos = object.pos;
    this.color = object.color;
    this.width = 1.25 * (canvasWidth / 15);
    this.height = canvasWidth / 15;
    this.center = [
        this.pos[0] + (this.width / 2),
        this.pos[1] + (this.height / 2)
    ]
    this.player = object.player;

    if (spriteObject.throwingImg) this.throwingImg = spriteObject.throwingImg;
}

Gorilla.prototype.draw = function (context, sprite = null) {

    context.fillStyle = this.color;
    context.beginPath();
    // context.rect(this.pos[0], this.pos[1], this.width, this.width);

    //sprite renderer

    if (this.player === "Y") {
        let img;
        if (sprite === "throw") {
            img = this.throwingImg;
        } else if (sprite === "hit") {
            if (Math.floor(HIT_TICK / 5) % 2 === 0) {
                img = document.getElementById("upside_down_right");
            } else {
                img = document.getElementById("upside_down_left");
            }
        } else {
            img = document.getElementById("neutral2");
        }

        context.drawImage(img, this.pos[0], this.pos[1], this.width, this.width);
    } else {
        let img;
        if (sprite === "throw") {
            img = this.throwingImg;
        } else if (sprite === "hit") {
            if (Math.floor(HIT_TICK / 5) % 2 === 0) {
                img = document.getElementById("upside_down_left");
            } else {
                img = document.getElementById("upside_down_right");
            }
        } else {
            if (Math.floor(TICK / 40) % 3 === 0) {
                img = document.getElementById("neutral2");
            } else if (Math.floor(TICK / 40) % 3 === 1) {
                img = document.getElementById("jumping_right");
            } else {
                img = document.getElementById("jumping_left");
            }
        }
        context.drawImage(img, this.pos[0], this.pos[1], this.width, this.width);

    }

    // let img = document.getElementById("neutral");

    // context.drawImage(img, this.pos[0], this.pos[1], this.width, this.width);

    context.fill();
    context.closePath();

}

module.exports = Gorilla;