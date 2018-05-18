/*ClassForGrass_eater*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");
var currentWeather = require("./weather.js")


module.exports = class Grass_eater extends LivingCreature {
    constructor(x, y, ser) {
        super(x, y, ser);
        this.energy = 5;

        if (currentWeather = 'winter') {
            this.reproductionReq = 6;
        }
        else if (currentWeather = 'spring') {
            this.reproductionReq = 2;
        }
        else {
            this.reproductionReq = 3;
        }
    }

    

    move(ch) {
        this.getNewCoordinates();
        var newTile = random(this.chooseTile(ch));
        if (newTile) {
            matrix[this.y][this.x] = 0;
            this.x = newTile[0];
            this.y = newTile[1];

            if (this.ser == "arakan") {
               matrix[this.y][this.x] = 2; 
            }
            else{
                matrix[this.y][this.x] = 2.5;
            }
        }
    }

    eat() {
        var newTile = random(this.chooseTile(1));
        var newTileDatark = random(this.chooseTile(0));
        if (newTile) {
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
            var vandak = random(this.chooseTile(2.5))
            if (vandak) {
                var newTile = random(this.chooseTile(0))        
            }
        if (this.energy >= this.reproductionReq && newTile) {
            var newGrassEater = new Grass_eater(newTile[0], newTile[1]);
            g_eArr.push(newGrassEater);
            matrix[newTile[1]][newTile[0]] = 2;
        }
    }
    }

    die() {
        for (var i in g_eArr) {
            if (this.energy <= this.reproductionReq && this.x == g_eArr[i].x && this.y == g_eArr[i].y) {
                matrix[this.y][this.x] = 0;
                g_eArr.splice(i, 1);

            }
        }

    }
}

