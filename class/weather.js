module.exports = function Weather() {
    var weather = ['spring', 'summer', 'autumn', 'winter'];
    var w = Number.random(0, 3, 0);
   var currentWeather;
    var time = 0;

    currentWeather = weather[w];
    time++;
    console.log(currentWeather);

    if (time == 5) {
        w++;
        if (w == 4) {
            w = 0;
        }
        time = 0;
    }
}

