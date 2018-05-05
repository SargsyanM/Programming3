var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var Grass = require('./class/class.grass.js')
var Xotaker = require('./class/class.eatgrass.js');
var Fire = require('./class/class.fire.js');
var Hail = require('./class/class.hail.js');
var Human = require('./class/class.human.js');
var Gishatich = require('./class/class.predator.js');
var Mistics = require('./class/class.mistics.js');
var Mistics = require('./class/class.hail.js');
 

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.redirect("public");
});

app.listen(3000, function () {
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
var m_size = 50;

 matrix = [];
for (var k = 0; k < m_size; k++) {
    matrix[k] = [];
}

var p = [10, 68, 5, 4, 3, 2, 4, 4]; //these are the percents of characters in the world
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

        else if (temp < 100 - -p[4] - p[5] - p[6]) {
            matrix[i][j] = 7;
        }

        else {
            matrix[i][j] = 5;
        }
    }
}
console.log(matrix);

var side = 20;
var grassArr = [];
var xotaArr = [];
var gishaArr = [];
var fireArr = [];
var humanArr = [];
var mistArr = [];
var hailArr = [];


for (var y = 0; y < matrix.length; y++)
        for (var x = 0; x < matrix[y].length; x++)
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var eat = new Xotaker(x, y);
                xotaArr.push(eat);
            }
            else if (matrix[y][x] == 3) {
                var eate = new Gishatich(x, y);
                gishaArr.push(eate);
            }

            else if (matrix[y][x] == 4) {
                var varv = new Fire(x, y);
                fireArr.push(varv);
            }

            else if (matrix[y][x] == 5) {
                var mard = new Human(x, y);
                humanArr.push(mard);
            }

            else if (matrix[y][x] == 6) {
                var mistics = new Mistics(x, y);
                mistArr.push(mistics);
            }

            else if (matrix[y][x] == 7) {
                var hail = new Hail(x, y);
                hailArr.push(hail);
            }


io.on('connection', function(socket){

  setInterval(function(){
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

    }

    for (var n in humanArr) {
        humanArr[n].utel();
        humanArr[n].mahanal();
    }

    for (var l in mistArr) {
        mistArr[l].utel();
        mistArr[l].mahanal();
    }

    
    if(frameCount % 5 == 0)
    {
        for (var o in hailArr) {
            hailArr[o].hit();
        }
    }

    io.sockets.emit("display message", matrix);

  }, 1000)
 
});
