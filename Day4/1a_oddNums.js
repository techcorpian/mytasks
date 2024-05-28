// a. Print odd numbers in an array
// Anonymous Function
var nums = [1, 2, 4, 6, 7];

var oddNums = function(data = []){
    for (let a = 0; a < data.length; a++) {
        if (data[a] % 2 !== 0) {
            console.log(data[a]);
        }
    }
}

oddNums(nums);

// IIFE Function
var nums = [1, 2, 4, 6, 7];

(function(data = []){
    for (let a = 0; a < data.length; a++) {
        if (data[a] % 2 !== 0) {
            console.log(data[a]);
        }
    } 
})(nums);