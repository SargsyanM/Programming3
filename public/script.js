function main() {
    
    
    var socket = io.connect('http://localhost:3000');

    socket.on("display message", function (matrix) {

        function setup() {

            frameRate(2);

            createCanvas(matrix[0].length * side, matrix.length * side);
            background("#E8E4E4");

        }

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("#A2FF59");
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
                    fill("#FA813B  ");
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
                    fill("black");
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 7) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    })
}


window.onload = main;




