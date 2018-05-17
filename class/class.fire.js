/*ClassForFire*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");

module.exports = class Fire extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 5;
    }



    burn() {
        this.getNewCoordinates();
        for (var j = 0; j < 3; j++) {
            var varv = random(this.chooseTile(1));
            if (varv) {
                matrix[this.y][this.x] = 0;
                this.x = varv[0];
                this.y = varv[1];
                matrix[this.y][this.x] = 4;

                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        this.energy++;
                        break;
                    }
                }
            }
        }

    }

    hangel(){
        for (var i in fireArr) {
            if (this.energy <= 4 && this.x == fireArr[i].x && this.y == fireArr[i].y) {
                matrix[this.y][this.x] = 0;
                fireArr.splice(i, 1);
            }
        }
    }

}