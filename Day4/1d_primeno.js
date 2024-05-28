//d. Return all the prime numbers in an array
//Anonymous Function
var nums = [1, 2, 4, 6, 7, 11, 13, 17, 19, 23, 24, 29, 31];
var isPrime = function(num){
    if (num <= 1 || num === 2 || num % 2 === 0){
        return false;
    } 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

var printPrimes = function(data = []) {
    for (let i = 0; i < data.length; i++) {
        if (isPrime(data[i])) {
            console.log(data[i]);
        }
    }
}

printPrimes(nums);

//IIFE Function
function isPrime(num){
    if (num <= 1 || num === 2 || num % 2 === 0){
        return false;
    } 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

(function(data = []){
    for (let i = 0; i < data.length; i++) {
        if (isPrime(data[i])) {
            console.log(data[i]);
        }
    }
})(nums)
