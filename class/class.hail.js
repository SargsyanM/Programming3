/*ClaasForHail*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");


module.exports = class Hail {
    constructor(x, y) {
        this.x = x || Math.round(random(matrix[0].length));
        this.y = y || Math.round(random(matrix.length));
    }

    

   hit() {
        for (var i in hailArr) {
             matrix[this.y][this.x] = 0;
        }
       
        this.x = Math.round(random(matrix[0].length-1))
        this.y = Math.round(random(matrix.length-1));
        matrix[this.y][this.x] = 7;

        console.log(this.x, this.y)

        for (var i in grassArr) {
            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (var i in xotaArr) {
            if (this.x == xotaArr[i].x && this.y == xotaArr[i].y) {
                xotaArr.splice(i, 1);
                break;
            }
        }
        for (var i in gishaArr) {
            if (this.x == gishaArr[i].x && this.y == gishaArr[i].y) {
                gishaArr.splice(i, 1);
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
