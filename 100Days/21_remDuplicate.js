// Write a function that takes an array of numbers and returns all the duplicate numbers in it.
const arr = [1, 2, 3, 4, 2, 5, 6, 5, 3, 1];
// Output: [2, 1]

// 1. Nested for loop :

function remDuplicate(arr) {
    let dupli = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                dupli.push(arr[i]);
            }
        }
    }
    return dupli;
}

console.log(remDuplicate(arr));







