//c. Sum of all numbers in an array
// Arrow Functions
var nums = [1, 2, 7, 8, 1, 3];
var sumNum = (data) => {
    sum=0;
    for(a=0; a<data.length; a++){
        sum += data[a];
    }
    console.log(sum);
}

sumNum(nums);