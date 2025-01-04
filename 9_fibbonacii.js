// Write a js function that generate fibbonacii sequence starting from
// 2 given numbers and take the number of terms to generate as input.

// 0    F
// 1    S   F
// 1    N   S   F
// 2        N   S   F   
// 3            N   S   F 
// 5                N   S
// 8                    N

function fibbonacii(a, b, upto) {
    let first = a, second = b, next;
    for (i = 1; i <= upto; i++) {
        console.log(first);
        next = first + second;
        first = second;
        second = next;
    }
}
fibbonacii(0, 1, 6)


