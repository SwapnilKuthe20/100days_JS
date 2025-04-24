// JavaScript Program to Find the Factorial of a Number

function Factorials(num) {
    let Factorials = 1;

    for (let i = 1; i <= num; i++) {
        Factorials *= i;
    }

    console.log(`Factorials of ${num} = ${Factorials}`);
}

Factorials(4);



