
let canvasWidth = window.innerWidth * .65;
let canvasHeight = window.innerHeight * .65;

//gorilla1 and 2 width take up (canvaswidth) * (14/60) total, 
//gorilla one with ends at (canvaswidth) * (7/60) (1 and 3/4 gorillas)
//46/60 ticks in between
//take another 14 away, 32/60
//| | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | 

function Landscape(object) {
    this.pos = object.pos;

    this.type = object.type; //tall tree is type 1, middle tree is type 2, short tree is type 3

    this.width = canvasWidth / 20;


    // Math.random() * (max - min) + min;
    if (this.type === 1) {
        this.height = canvasHeight - (Math.random() * ((canvasHeight * (3 / 4)) - (canvasHeight * (1 / 2))) + (canvasHeight * (1 / 2)));
    } else if (this.type === 2) {
        this.height = canvasHeight - (Math.random() * ((canvasHeight * (1 / 2)) - (canvasHeight * (1 / 4))) + (canvasHeight * (1 / 4)));
    } else {
        this.height = canvasHeight - (Math.random() * ((canvasHeight * (1 / 4)) - (canvasHeight * (3 / 16))) + (canvasHeight * (3 / 16)));
    }
    this.center = [
        this.pos[0] + (this.width / 2),
        this.pos[1] + (this.height / 2)
    ]
}


module.exports = Landscape;