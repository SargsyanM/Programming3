/*ClaasForHail*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");


module.exports = class Hail {
    constructor(x, y) {
        this.x = x || round(random(matrix[0].length));
        this.y = y || round(random(matrix.length));
    }

    

   hit() {
        for (var i in hailArr) {
             matrix[this.y][this.x] = 0;
        }

        this.x = round(random(matrix[0].length-1))
        this.y = round(random(matrix.length-1));
        matrix[this.y][this.x] = 7;

        console.log(this.x, this.y)

        for (var i in grassArr) {
            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (var i in g_eArr) {
            if (this.x == g_eArr[i].x && this.y == g_eArr[i].y) {
                g_eArr.splice(i, 1);
                break;
            }
        }
        for (var i in predArr) {
            if (this.x == predArr[i].x && this.y == predArr[i].y) {
                predArr.splice(i, 1);
                break;
            }
        }

        for (var i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                fireArr.splice(i, 1);
                break;
            }
        }

        for (var i in humanArr) {
            if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                humanArr.splice(i, 1);
                break;
            }
        }

        for (var i in mistArr) {
            if (this.x == mistArr[i].x && this.y == mistArr[i].y) {
                mistArr.splice(i, 1);
                break;
            }
        }



    }
}
