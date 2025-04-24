// Write a js function that takas array of numbers and return both the max and min value in an Array. Without Mat.min Math.max.

let arr = [12, 35, 534, 7, 367];

function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (const item of arr) {
        item > max && (max = item);
        item < min && (min = item);
    }
    console.log("Max : ", max);
    console.log("Min : ", min);
}

findMaxMin(arr);

