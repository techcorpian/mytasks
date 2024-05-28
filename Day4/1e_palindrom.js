//e. Return all the palindromes in an array
//Anonymous Function
var findPalindromicStrings = function(arr) {
    let ans = [];

    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }

    if (ans.length === 0) {
        console.log("-1");
    } else {
        console.log(ans.join(" "));
    }
}

var arr = ["abc", "car", "ada", "racecar", "cool"];
findPalindromicStrings(arr);

//IIFE Function
var arr = ["abc", "car", "ada", "racecar", "cool"];
(function(arr) {
    let ans = [];

    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }

    if (ans.length === 0) {
        console.log("-1");
    } else {
        console.log(ans.join(" "));
    }
})(arr)