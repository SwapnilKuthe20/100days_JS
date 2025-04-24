// JavaScript Program to Find the Largest Among Three Numbers

function findlargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} : Greater`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`${num2} : Greater`);
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        console.log(`Check if any numbers are identicle`);
    }
    else {
        console.log(`${num3} : Greater`);
    }
}

let result1 = findlargest(12, 29, 123);
let result2 = findlargest(1112, 656, 8755);
let result3 = findlargest(245, 77, 876);
let result4 = findlargest(33, 8, 6564);
let result5 = findlargest(112, 112, 221);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
// -----------------------------------------------

console.log(Math.max(12, 14, 16));
console.log(Math.max(12, 12, 12));
console.log(Math.max(121, 122, 124));





