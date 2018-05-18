/*ClassForPredator*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");

module.exports = class Predator extends LivingCreature {
    constructor(x, y, ser) {
        super(x, y, ser);
        this.energy = 5;
        this.reproductionReq =56;
        // if (currentWeather = 'winter') {
        //     this.reproductionReq = 12;
        // }
        // else if (currentWeather = 'spring') {
        //     this.reproductionReq = 7;
        // }
        // else {
        //     this.reproductionReq = 10;
        // }  
    }

    

    move(ch) {
        this.getNewCoordinates();
        var newTile = random(this.chooseTile(ch));
        if (newTile) {
            matrix[this.y][this.x] = 0;
            this.x = newTile[0];
            this.y = newTile[1];
            if (this.ser == "arakan") {
               matrix[this.y][this.x] = 3; 
            }
            else{
                matrix[this.y][this.x] = 3.5;
            }
            
        }
    }

    eat() {
        var newTile = random(this.chooseTile(1));
        var newTileDatark = random(this.chooseTile(0));
        var norVanXot = random(this.chooseTile(2))
        if (norVanXot) {
            this.move(2)
            for (var i in g_eArr) {
                if (this.x == g_eArr[i].x && this.y == g_eArr[i].y) {
                    g_eArr.splice(i, 1);
                    this.energy ++
                    break;
                }
            }
        }

        else if (newTile) {
            this.move(1)

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    this.energy++;
                    break;
                }
            }
        }

        else if (newTileDatark) {
            this.move(0);
            this.energy--;
        }
    }


    reproduce() {
        if (this.ser == "arakan") {
            var tile = random(this.chooseTile(2.5))
            if (tile) {
                var newTile = random(this.chooseTile(0))
            }
            if (this.energy >= this.reproductionReq && newTile) {
                var newPredator = new Predator(newTile[0], newTile[1]);
                predArr.push(newPredator);
                matrix[newTile[1]][newTile[0]] = 3;
            }
        }
    }

    die() {
        for (var i in predArr) {
            if (this.energy <= 4 && this.x == predArr[i].x && this.y == predArr[i].y) {
                matrix[this.y][this.x] = 0;
                predArr.splice(i, 1);
            }
        }

    }
}
