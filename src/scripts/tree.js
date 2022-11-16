
let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

//for reference
// Math.random() * (max - min) + min;
// let type1Height = (Math.random() * ((canvasHeight * (3 / 4)) - (canvasHeight * (1 / 2))) + (canvasHeight * (1 / 2)));
// let type2Height = (Math.random() * ((canvasHeight * (1 / 2)) - (canvasHeight * (1 / 4))) + (canvasHeight * (1 / 4)));
// let type3Height = (Math.random() * ((canvasHeight * (1 / 4)) - (canvasHeight * (1 / 8))) + (canvasHeight * (1 / 8)));

function Tree(object) {
    // this.pos = object.pos;

    this.type = object.type; //tall tree is type 1, middle tree is type 2, short tree is type 3

    this.width = canvasWidth / 15;

    // Math.random() * (max - min) + min;
    if (this.type === 1) {
        this.height = (Math.random() * ((canvasHeight * (3 / 4)) - (canvasHeight * (1 / 2))) + (canvasHeight * (1 / 2)));
    } else if (this.type === 2) {
        this.height = (Math.random() * ((canvasHeight * (1 / 2)) - (canvasHeight * (1 / 4))) + (canvasHeight * (1 / 4)));
    } else {
        this.height = (Math.random() * ((canvasHeight * (1 / 4)) - (canvasHeight * (1 / 8))) + (canvasHeight * (1 / 8)));
    }

    this.posX = object.posX;

    if (this.type === 1) {
        this.pos = [object.posX, canvasHeight - this.height + 25]
    } else {
        this.pos = [object.posX, canvasHeight - this.height]
    }


    this.center = [
        this.pos[0] + (this.width / 2),
        this.pos[1] + (this.height / 2)
    ]
}

Tree.prototype.draw = function (context) {

    context.fillStyle = '#00FF00';
    context.beginPath();
    // context.rect(this.pos[0], this.pos[1], this.width, this.height);

    let img;
    if (this.type === 1) {
        if (Math.floor(TICK / 200) % 2 === 0) {
            img = document.getElementById("trees1");
        } else {
            img = document.getElementById("trees1_mirrored");
        }

    } else if (this.type === 2) {
        if (this.posX === (canvasWidth * (7.25 / 20))) { //tree 2
            if (Math.floor(TICK / 450) % 2 === 0) {
                img = document.getElementById("trees2");
            } else {
                img = document.getElementById("trees2_mirrored");
            }
        } else { //tree 4
            if (Math.floor(TICK / 550) % 2 === 0) {
                img = document.getElementById("trees2");
            } else {
                img = document.getElementById("trees2_mirrored");
            }
        }

    } else {
        img = document.getElementById("trees3");
    }

    context.drawImage(img, this.pos[0], this.pos[1], this.width, this.height);

    //(canvasWidth/15.405) ~= 40
    // 21/320 = (3/40) * (7/8), 21/160 = (3/20) * (7/8)
    context.fill();
    context.closePath();
}

module.exports = Tree;