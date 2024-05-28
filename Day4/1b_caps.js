// b. Convert all the strings to title caps in a string array
// Anonymous Function
var strings = ["hello world", "javascript programming", "openai gpt-4"];
var toTitleCase = function(data = []){
    for (let i = 0; i < data.length; i++) {
        let words = data[i].split(' ');
        for (let j = 0; j < words.length; j++) {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
        }
        data[i] = words.join(' ');
    }
    return data;
}

var titleCasedStrings = toTitleCase(strings);
console.log(titleCasedStrings);

//IIFE Function
var strings = ["hello world", "javascript programming", "openai gpt-4"];

(function(data = []){
    for (let i = 0; i < data.length; i++) {
        let words = data[i].split(' ');
        for (let j = 0; j < words.length; j++) {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
        }
        data[i] = words.join(' ');
    }
    console.log(data);
})(strings);

