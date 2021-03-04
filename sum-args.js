const getInput = require('./get-input.js');

// Your code here!
let n = 1
let sum = 0
while (getInput(n) !== undefined) {
    sum += parseInt(getInput(n))
    n++
} console.log(sum)