// Write a js function that find all factors of a given number.
// factors --> numbers which are completely divide  given no.

function findFactors(num) {
    let factors = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            // console.log(i);
            factors.push(i);
        }
    }
    console.log(`The factors of the ${num} :`, ...factors);
    console.log(`The factors of the ${num} :`, ...factors.join(","));
}
findFactors(9);

