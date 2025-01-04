// Write a js function that calculates the factorial of a given number.

function factorial(num) {
    let totalFactorial = 1;
    let Factorials = [];
    console.log(`Factorials of ${num} are :`);

    for (i = num; i >= 1; i--) {
        Factorials.push(i);
        totalFactorial *= i;
    }
    console.log(`Factorials of ${num} are : `, ...Factorials.join("*"));
    console.log(`Total of factorials are :`, totalFactorial);
}
factorial(5);
