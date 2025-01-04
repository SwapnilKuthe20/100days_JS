// Write a js function that calculates the sum of all odd nos in given range.

function sumOfOdd(num) {
    let totalOdds = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i, "Odd nos");
            totalOdds += i;
        }
    }
    console.log(`Sum of odd nos upto ${num} : `, totalOdds);
}
sumOfOdd(10);



