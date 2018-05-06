/*ClassForGrass*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");

module.exports = class Grass extends LivingCreature {
constructor(x,y){
    super(x,y);
    this.multiply = Math.round(Math.random() * 3);
}

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}
