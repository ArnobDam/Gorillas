let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

function Banana(object) {

    this.pos = object.pos;
    this.vel = object.vel;
    this.color = object.color;

    this.gravityY = 0;
    this.gravity = 0.0098;

    // this.radius = 15;
    this.radius = canvasWidth / 55.466666666;

    this.degree = 1;
    this.player = object.player;

}

function calculateRadians(degree) {
    let radians = degree * (Math.PI / 180);
    return radians;
}

Banana.prototype.draw = function (context) {
    // context.clearRect(0, 0, canvasWidth, canvasHeight);

    context.fillStyle = this.color;

    context.save()

    context.beginPath();

    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);

    context.translate(this.pos[0], this.pos[1]);
    if (this.player === "Y") {
        context.rotate(calculateRadians(this.degree));
        this.degree = this.degree + 3;
    } else {
        context.rotate(-1 * calculateRadians(this.degree));
        this.degree = this.degree + 4;
    }

    context.translate(-1 * this.pos[0], -1 * this.pos[1]);



    // context.fill();

    let banana_img = document.getElementById("banana");

    context.drawImage(banana_img, this.pos[0] - this.radius, this.pos[1] - this.radius, 2 * this.radius, 2 * this.radius);

    context.closePath();

    context.restore();


    this.move();

    // let that = this;

}

Banana.prototype.move = function () {

    this.gravityY += this.gravity;

    this.pos[0] += this.vel[0];
    this.pos[1] += (this.vel[1] + this.gravityY);

}

Banana.prototype.outOfBounds = function () {
    if (this.pos[0] > canvasWidth || this.pos[0] < 0 || this.pos[1] > canvasHeight) {
        return true;
    } else {
        return false;
    }
}

Banana.prototype.hasCollidedWithGorilla = function (gorilla) {

    let xBanana = this.pos[0];
    let yBanana = this.pos[1];
    let radiusBanana = this.radius;

    let xGorilla = gorilla.center[0];
    let yGorilla = gorilla.center[1];

    let xDiff = Math.abs(xBanana - xGorilla);
    let yDiff = Math.abs(yBanana - yGorilla);

    if (xDiff <= (radiusBanana + (gorilla.width / 2)) && yDiff <= (radiusBanana + (gorilla.height / 2))) {
        return true;
    } else {
        return false;
    }

}

Banana.prototype.hasCollidedWithTree = function (allTrees) {

    let xBanana = this.pos[0];
    let yBanana = this.pos[1];
    let radiusBanana = this.radius;

    let collided = false;

    allTrees.forEach((tree) => {

        let xTree = tree.center[0];
        let yTree = tree.center[1];

        let xDiff = Math.abs(xBanana - xTree);
        let yDiff = Math.abs(yBanana - yTree);

        let xCollDiff = (radiusBanana + (tree.width / 2));
        let yCollDiff = (radiusBanana + (tree.height / 2));

        if (xDiff <= xCollDiff && yDiff <= yCollDiff) {
            collided = true;
        }

    });

    return collided;
}

Banana.prototype.hasCollided = function (gorilla, allTrees) {
    if (this.outOfBounds() || this.hasCollidedWithGorilla(gorilla) || this.hasCollidedWithTree(allTrees)) {
        return true;
    } else {
        return false;
    }
}


module.exports = Banana;