var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var Grass = require('./class/class.grass.js')
var Xotaker = require('./class/class.eatgrass.js');
var Fire = require('./class/class.fire.js');
var Human = require('./class/class.human.js');
var Gishatich = require('./class/class.predator.js');
var Mistics = require('./class/class.mistics.js');
var random = require("./class/rand.js");
 

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(3000, function () {
  console.log("Example is running on port 3000");
});

Number.random = function (minimum, maximum, precision) {
    minimum = minimum === undefined ? 0 : minimum;
    maximum = maximum === undefined ? 9007199254740992 : maximum; //900.. is the maximum number that var can keep
    precision = precision === undefined ? 0 : precision; //number of numbers after 0

    var random = Math.random() * (maximum - minimum) + minimum;

    return random.toFixed(precision);
}

var r, temp;
var m_size = 25;

 global.matrix = [];
for (var k = 0; k < m_size; k++) {
    matrix[k] = [];
}

var p = [10, 68, 5, 4, 4, 3, 6]; //these are the percents of characters in the world
for (var i = 0; i < m_size; i++) {
    for (var j = 0; j < m_size; j++) {
        temp = Number.random(0, 100, 0);
        if (temp < p[0]) {
            matrix[i][j] = 0;
        }
        else if (temp < p[0] + p[1]) {
            matrix[i][j] = 1;
        }
        else if (temp < p[0] + p[1] + p[2]) {
            matrix[i][j] = 2;
        }
        else if (temp < p[0] + p[1] + p[2] + p[3]) {
            matrix[i][j] = 3;
        }
        else if (temp < 100 - p[3] - p[4]) {
            matrix[i][j] = 4;
        }

        else if (temp < 100 - p[4] - p[5]) {
            matrix[i][j] = 6;
        }

        else {
            matrix[i][j] = 5;
        }
    }
}
console.log(matrix);

var side = 20;
global.grassArr = [];
global.xotaArr = [];
global.gishaArr = [];
global.fireArr = [];
global.humanArr = [];
global.mistArr = [];

var numgrass = 0;
var numpred = 0 ;
var numeat = 0;

for (global. y = 0; y < matrix.length; y++)
        for (var x = 0; x < matrix[y].length; x++)
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
                numgrass++;
            }
            else if (matrix[y][x] == 2) {
                var r = (Math.round(Math.random()))/2;
                var eat = new Xotaker(x, y, r);
                xotaArr.push(eat);
                numeat++;
            }
            else if (matrix[y][x] == 3) {
                var r = (Math.round(Math.random()))/2;
                var eate = new Gishatich(x, y, r);
                gishaArr.push(eate);
                numpred++;
            }

            else if (matrix[y][x] == 4) {
                var varv = new Fire(x, y);
                fireArr.push(varv);
            }

            else if (matrix[y][x] == 5) {
                var r = (Math.round(Math.random()))/2;
                var mard = new Human(x, y, r);
                humanArr.push(mard);
            }

            else if (matrix[y][x] == 6) {
                var mistics = new Mistics(x, y);
                mistArr.push(mistics);
            } 


io.on('connection', function(socket){

  setInterval(function(){

    if (humanArr.length == 0) {
        io.sockets.emit('end');
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var j in xotaArr) {
        xotaArr[j].utel();
        xotaArr[j].bazmanal();
        xotaArr[j].mahanal();

    }

    for (var k in gishaArr) {
        gishaArr[k].utel();
        gishaArr[k].bazmanal();
        gishaArr[k].mahanal();
    }

    for (var m in fireArr) {
        fireArr[m].varel();
        fireArr[m].hangel();
    }

    for (var n in humanArr) {
        humanArr[n].utel();
        humanArr[n].mahanal();
    }

    for (var l in mistArr) {
        
        mistArr[l].utel();
        mistArr[l].mahanal();
    }

    io.sockets.emit("display message", matrix);

  }, 1000)
 
});


//JSON

var fs = require('fs');

  if(true){
   var file  = "statics.txt";
    fs.appendFileSync(file,numgrass + "-This is the Number of Grasses" + '\n' + numeat + "- This is the Number of Grasseaters" + '\n' + numpred + "-This is the Number of Predators");
  }   
