/*ClassforHail*/
var LivingCreature = require("./parent.js");

module.exports = class Hail {
    constructor(x, y) {
        this.x = x || Math.round(Math.random(matrix[0].length));
        this.y = y || Math.round(Math.random(matrix.length));
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    xpel() {
        for (var i in KarkutArr) {
            matrix[this.y][this.x] = 0;
        }

        this.x = Math.round(Math.random(matrix[0].length - 1))
        this.y = Math.round(Math.random(matrix.length - 1));
        matrix[this.y][this.x] = 5;

        console.log(this.x, this.y)

        for (var i in grassArr) {
            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (var i in XotakerArr) {
            if (this.x == XotakerArr[i].x && this.y == XotakerArr[i].y) {
                XotakerArr.splice(i, 1);
                break;
            }
        }
        for (var i in GishatichArr) {
            if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                GishatichArr.splice(i, 1);
                break;
            }
        }

        for (var i in CarArr) {
            if (this.x == CarArr[i].x && this.y == CarArr[i].y) {
                CarArr.splice(i, 1);
                break;
            }
        }


    }
}
