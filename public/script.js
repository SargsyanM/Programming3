var socket = io.connect('http://localhost:3000');
var side = 20;
var e = 0;


function setup() {
    createCanvas(500, 500);
    background("#E8E4E4");
}

socket.on("display message", function (matrix) {

    console.log(matrix);
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
    if (e==0) {
            console.log("done");
    remove();
    var Dend = document.createElement("img");
    Dend.setAttribute('src', 'https://fanart.tv/fanart/tv/78871/clearlogo/gameover-78871.png');
    document.body.appendChild(Dend);
      e++;
 
    }

   

});

