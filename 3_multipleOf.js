// Write a js function that print no from 1-100
// but for : multiples of 3 print "fizz" instead of the no.
//           multiples of 5 pint "buzz"
//           multiples of both 3 & 5 print "fizzbuzz"


function multipleOf() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}
multipleOf();

