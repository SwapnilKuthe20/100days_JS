// JavaScript Program to Find the Sum of Natural Numbers

function sumOfNaturals(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(`Sum of Natural Numbers ${num} is = ${sum} `);

}

sumOfNaturals(10);