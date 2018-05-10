/*ClassForGishatich*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, ser) {
        super(x, y, ser);
        this.energy = 5;
    }

    sharjvel(ch) {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(ch));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
        }
    }

    utel() {
        var norVandak = random(this.yntrelVandak(1));
        var norVandakDatark = random(this.yntrelVandak(0));
        var norVanXot = random(this.yntrelVandak(2))
        if (norVanXot) {
            this.sharjvel(2)
            for (var i in xotaArr) {
                if (this.x == xotaArr[i].x && this.y == xotaArr[i].y) {
                    xotaArr.splice(i, 1);
                    this.energy ++
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

        else if (norVandakDatark) {
            this.sharjvel(0);
            this.energy--;
        }
    }


    bazmanal() {
        if (this.ser == "arakan") {
            var vandak = random(this.yntrelVandak(2.5))
            if (vandak) {
                var norVandak = random(this.yntrelVandak(0))
            }
            if (this.energy >= 10 && norVandak) {
                var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
                gishaArr.push(norGishatich);
                matrix[norVandak[1]][norVandak[0]] = 3;
            }
        }
    }

    mahanal() {
        for (var i in gishaArr) {
            if (this.energy <= 4 && this.x == gishaArr[i].x && this.y == gishaArr[i].y) {
                matrix[this.y][this.x] = 0;
                gishaArr.splice(i, 1);
            }
        }

    }
}
