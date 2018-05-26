/*ClasForHuman*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");

module.exports = class Mistics extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
            
        ];
    }

    move(ch) {
        this.getNewCoordinates();
        var newTile = random(this.chooseTile(ch));
        if (newTile) {
            matrix[this.y][this.x] = 0;
            this.x = newTile[0];
            this.y = newTile[1];
            matrix[this.y][this.x] = 6;
        }
    }

    eat() {
        var newTile = random(this.chooseTile(1));
        var newTileDatark = random(this.chooseTile(0));
        var norVanXot = random(this.chooseTile(2));
        var newOne = random(this.chooseTile(3));
        var newTwo = random(this.chooseTile(4));
        var newNew = random(this.chooseTile(5));
        

        if (newOne) {
            this.move(3)
            for (var i in predArr) {
                if (this.x == predArr[i].x && this.y == predArr[i].y) {
                    this.energy -= 3;
                    break;
                }
            }
        }

        else if (norVanXot) {
            this.move(2)
            for (var i in g_eArr) {
                if (this.x == g_eArr[i].x && this.y == g_eArr[i].y) {
                    g_eArr.splice(i, 1);
                    this.energy += 3;
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

        else if (newTwo) {
            this.move(4)
            for (var i in fireArr) {
                if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                    fireArr.splice(i, 1);
                    this.energy -= 2;
                    break;
                }
            }
        }

         else if (newNew) {
            this.move(5)
            for (var i in humanArr) {
                if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                    humanArr.splice(i, 1);
                    this.energy -= 4;
                    break;
                }
            }
        }

        else if (newTileDatark) {
            this.move(0);
            this.energy--;
        }
    }

    die() {
        for (var i in mistArr) {
            if (this.energy <= 2 && this.x == mistArr[i].x && this.y == mistArr[i].y) {
                matrix[this.y][this.x] = 0;
                mistArr.splice(i, 1);
            }
        }

    }

}

