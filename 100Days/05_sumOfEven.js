// Write a js function that calculate sum of all even nos from 1 to specific limmit.

function sumOfEven(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log("Even no are", i);
            total += i;
        }
    }
    console.log(`Sum of all even numbers till ${num}:`, total);
}

sumOfEven(6);

