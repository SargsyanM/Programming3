/*ClassForGrass*/
var LivingCreature = require("./parent.js");
var random = require("./rand.js");

module.exports = class Grass extends LivingCreature {
constructor(x,y){
    super(x,y);
    this.multiply = Math.round(Math.random() * 3);
    

    // if (currentWeather = 'spring') {
    //     this.expandReq = 12;
    // }
    // else if (currentWeather = 'winter') {
    //     this.expandReq = 5;
    // }
    // else {
    //     this.expandReq = 8;
    // }
}


    expand() {
        this.multiply++;
        var newTile = random(this.chooseTile(0));
        if (this.multiply >= 10 && newTile) {
            var norXot = new Grass(newTile[0], newTile[1]);
            grassArr.push(norXot);
            matrix[newTile[1]][newTile[0]] = 1;
            this.multiply = 0;
        }
    }

}
