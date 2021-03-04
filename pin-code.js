const getInput = require('./get-input.js');

// Your code here!
let n = 1
let sum = 0
let userGuessCor = false;
while (getInput(n) !== undefined){
    sum++
    n++
    if (getInput(n) === '1234'){
        userGuessCor = true;
        console.log('That is correct. You took', sum+1, 'guess(es).')
    }
}   
if (userGuessCor === false){
    console.log('None of the entered pin codes are correct.')
}
