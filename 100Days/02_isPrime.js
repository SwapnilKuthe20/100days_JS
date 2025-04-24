// Write a js function that Check if a number is Prime or not.
// condition --> No divisible by 1 and itself || Numbers less than or equal to 1 are not prime

function isPrime(num) {
    if (num <= 1) {
        console.log(`${num} is not a Prime`);
        return true;
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(`${num} is not a Prime`);
            return true;
        } 
    }
    console.log(`${num} is a Prime`);
}

isPrime(3);

