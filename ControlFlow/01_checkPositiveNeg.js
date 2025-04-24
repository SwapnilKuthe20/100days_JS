
// Javascript Program to Check if a number is Positive, Negative, or Zero


function checkPostiveNeg(num) {

    if (num > 0) {
        console.log(`${num} : Positive Number`);

    } else if (num < 0) {
        console.log(`${num} : Negative Number`);
    } else {
        console.log(`${num} is a Zero`);
    }
}

let result1 = checkPostiveNeg(0);
let result2 = checkPostiveNeg(2);
let result3 = checkPostiveNeg(-4);
let result4 = checkPostiveNeg(5);
let result5 = checkPostiveNeg(-7);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

