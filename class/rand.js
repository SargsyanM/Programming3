function random(arr){
    if(arr.length>0){
        var randomindex = Math.floor(Math.random()*arr.length)
        return arr[randomindex];
    }
    return false;
}
module.exports = random;