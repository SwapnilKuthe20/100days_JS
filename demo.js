
// ---------------------------------------------------
// Write a js function that Check if a number is odd or even and log the result.

// function isOddEven(num) {
//     if (num % 2 === 0) {
//         console.log(`${num} is Even`);
//     } else {
//         console.log(`${num} is ODD`);

//     }
// }
// isOddEven(201);
// ---------------------------------------------------
// Write a js function that Check if a number is Prime or not.

//  Prime --> divide by 1 and itself
//            Prime start from 2 (negative and 1 are not Prime)

// function isPrime(num) {
//     if (num <= 1) {
//         return console.log(`${num} is not a Prime`);
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return console.log(`${num} is not a Prime`);
//         }
//     }
//     console.log(`${num} is a Prime`);
// }
// isPrime(13);
// ----------------------------------------

// Write a js function that print no from 1-100
// but for : multiples of 3 print "fizz" instead of the no.
//           multiples of 5 pint "buzz"
//           multiples of both 3 & 5 print "fizzbuzz"

// function multiples() {
//     for (let i = 1; i <= 100; i++) {
//         // console.log(i);
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// multiples();
// ----------------------------------------------

// Write a js function that find all factors of a given number.

// function factors(num) {
//     const factors = [];
//     for (i = 0; i < num; i++) {
//         if (num % i === 0) {
//             // console.log(i);
//             factors.push(i)
//         }
//     }
//     console.log(`factors of ${num} are :`, ...factors.join(','));
// }
// factors(20)
// ----------------------------------------------

// Write a js function that calculate sum of all even nos from 1 to specific limmit.

// function sumOfEven(num) {

//     let total = 0;
//     for (i = 1; i < num; i++) {
//         if (i % 2 === 0) {
//             console.log(i, "i");
//             total += i

//         }
//     }
//     console.log(total);

// }
// sumOfEven(10)
// -------------------------------------------------


