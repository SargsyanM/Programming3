/*ClassForFire*/
var LivingCreature = require("./parent.js");

module.exports = class Fire extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 5;
    }

    varel() {
        this.stanalNorKordinatner();
        for (var j = 0; j < 3; j++) {
            var varv = Math.random(this.yntrelVandak(1));
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

}