var fs = require('fs');
const { callbackify } = require('util');

// console.log('A');
// //readFileSync
// var result = fs.readFileSync('syntax/simple.txt', 'utf8');
// console.log(result);
// console.log('C');

console.log('A');
//readFileSync
fs.readFile('syntax/simple.txt', 'utf8', function(err, result){
    console.log(result);
});

console.log('C');