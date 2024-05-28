//1. Compare two objects having the same property

let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

let object1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let object2 = JSON.stringify(obj2, Object.keys(obj2).sort());

console.log(object1);
console.log(object2);

if (object1 === object2) {
    console.log("Objects have the same properties.");
} else {
    console.log("Objects do not have the same properties.");
}