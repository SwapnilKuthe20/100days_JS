// JavaScript Program to Check if the Numbers Have Same Last Digit

//  divides the number by 10 and gives you the remainder, which is always the last digit of the number.

function isLastDigitSame(num1, num2) {
    let first = Math.abs(num1) % 10;
    let second = Math.abs(num2) % 10;

    if (first === second) {
        console.log(`Both ${num1} and ${num2} last Degit are same (${first})`);
    }
}
isLastDigitSame(123, 543);