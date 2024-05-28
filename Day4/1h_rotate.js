// h. Rotate an array by k times
// Anonymous Function
var rightRotate = function(arr, k) {
    const n = arr.length;
    
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(arr[n + i - k] + " ");
        } else {
            console.log(arr[i - k] + " ");
        }
    }
    console.log("\n");
}

var Array = [1, 2, 3, 4, 5];
var K = 2;

rightRotate(Array, K);


//IIFE Function
var Array = [1, 2, 3, 4, 5];
var K = 2;

(function (arr, k){
    const n = arr.length;
    
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(arr[n + i - k] + " ");
        } else {
            console.log(arr[i - k] + " ");
        }
    }
    console.log("\n");
})(Array, K)
