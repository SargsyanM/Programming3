var socket = io.connect('http://localhost:3000');
var side = 20;
var f = 0;

Number.random = function (minimum, maximum, precision) {
    minimum = minimum === undefined ? 0 : minimum;
    maximum = maximum === undefined ? 9007199254740992 : maximum; //900.. is the maximum number that var can keep
    precision = precision === undefined ? 0 : precision; //number of numbers after 0

    var random = Math.random() * (maximum - minimum) + minimum;

    return random.toFixed(precision);
}

var weather = ['spring', 'summer', 'autumn', 'winter'];
var w = Number.random(0,3,0);
var currentWeather ;
var time = 0;

function setup() {
    createCanvas(500, 500);
    background("#E8E4E4");
}

socket.on("display message", function (matrix) {

   console.log(matrix);

     currentWeather = weather[w];
    time++;
   //console.log(currentWeather);
    if (time == 5) {
        w++;

        if (w == 4) {
            w = 0;
        }

        time = 0;
    }

    document.getElementById('weather').innerText ="The Current Weater is " + currentWeather;
 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (currentWeather == 'winter') {
                    fill("#d5dee5");
                }
                else if (currentWeather == 'spring') {
                    fill("#A2FF59");
                }
                else if (currentWeather == 'autumn') {
                    fill("#d2c458");
                }
                else {
                    fill("#c8f71d");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#E8E4E4");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2) {
                fill("#E8FF59");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                fill("#FA813B");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) {
                fill("#DF0D0D");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5) {
                fill("#59B4FF");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 6) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 7) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
    }

});

socket.on('end', function () {
    if (f==0) {
            console.log("done");
    remove();
    var Dend = document.createElement("img");
    Dend.setAttribute('src', 'https://pre00.deviantart.net/5e88/th/pre/f/2016/027/b/4/80s_retro_game_over_wallpaper_by_leepiin-d9phs9b.png');
    document.body.appendChild(Dend);
      f++;
 
    }

});

