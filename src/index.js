var array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9];
var max = getMaxValue(array);
var min = getMinValue(array);
alert(max);
alert(min);
function getMaxValue(array){
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i]; 
    }
    return max;
}
function getMinValue(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}
function averageСost(array) {
   return array.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length; 
}
