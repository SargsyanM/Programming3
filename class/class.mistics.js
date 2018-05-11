/*ClasForMistics*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");


module.exports = class Mistics extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
    }

    sharjvel(ch) {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak(ch);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            for (var i in norVandak) {                
                this.x = norVandak[i][0];
                this.y = norVandak[i][1];
                matrix[this.y][this.x] = 6;
            }
        }
    }

    utel() {
        var norVandak = random(this.yntrelVandak(1));
        var norVandakDatark = random(this.yntrelVandak(0));
        var norVanXot = random(this.yntrelVandak(2));
        var newOne = random(this.yntrelVandak(3));
        var newTwo = random(this.yntrelVandak(4));
        var newThree = random(this.yntrelVandak(5));

        if (newOne) {
            this.sharjvel(3)

            for (var i in gishaArr) {
                if (this.x == gishaArr[i].x && this.y == gishaArr[i].y) {
                    this.energy -= 3;
                    gishaArr[i].energy -= 4;
                    break;
                }
            }
        }

        else if (norVanXot) {
            this.sharjvel(2)

            for (var i in xotaArr) {
                if (this.x == xotaArr[i].x && this.y == xotaArr[i].y) {
                    xotaArr.splice(i, 1);
                    this.energy += 2;
                    break;
                }
            }
        }

        else if (norVandak) {
            this.sharjvel(1)

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    this.energy++;
                    break;
                }
            }
        }

        else if (newTwo) {
            this.sharjvel(4)

            for (var i in fireArr) {
                if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                    fireArr.splice(i, 1);
                    this.energy -= 3;
                    break;
                }
            }
        }

        else if (newThree) {
            this.sharjvel(5)

            for (var i in fireArr) {
                if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                    humanArr.splice(i, 1);
                    this.energy -= 3;
                    break;
                }
            }
        }

        else if (norVandakDatark) {
            this.sharjvel(0);
            this.energy--;
        }
    }

    mahanal() {
        for (var i in mistArr) {
            if (this.energy <= 2 && this.x == mistArr[i].x && this.y == mistArr[i].y) {
                matrix[this.y][this.x] = 0;
                mistArr.splice(i, 1);

            }
        }

    }

}

