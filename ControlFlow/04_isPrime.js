// JavaScript Program to Check Prime Number
// 1.. divisible by 1 & itself && not less than 1

function isPrime(num) {

    if (num <= 1) {
        console.log(`${num} : Not Prime`);
        return false;
    } else if (num === 2) {
        console.log(`${num} : Prime Number`);
        return true;
    }

    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(`${num} : Not Prime Number`);
            return false;
        }
    }
    console.log(`${num} : Prime Number`);
}

// let result1 = isPrime(1)
let result2 = isPrime(21)
// let result3 = isPrime(7)
// let result4 = isPrime(33)
// let result5 = isPrime(9)

// console.log(result1);
console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);


