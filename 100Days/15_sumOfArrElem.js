// Write js function that calculate sum of all elements in an array of Numbers.

let arr = [1, 2, 3, 5, 6, 7];

function sumOfArr(arr) {

    let totalArrElements = 0;

    for (i = 0; i < arr.length; i++) {
        totalArrElements += arr[i];
    }
    return totalArrElements;
}

let result = sumOfArr(arr);

console.log("Total of Array : ", result);

