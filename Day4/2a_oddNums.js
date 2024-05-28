// a. Print odd numbers in an array
// Arrow Function
var nums = [1, 2, 4, 6, 7];

var oddNums = (data = []) => {
    for (let a = 0; a < data.length; a++) {
        if (data[a] % 2 !== 0) {
            console.log(data[a]);
        }
    }
}

oddNums(nums);