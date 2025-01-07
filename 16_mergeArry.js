// Write a js function that merge 2 arrays, combining all their elements.

let arr1 = [1, 2, 3, 4, 5,];
let arr2 = [6, 7, 8, 9, 10];

// 1. Using the Spread Operator (...)

function mergeArray(arr1, arr2) {
    let mergeArray = [...arr1, ...arr2];
    return mergeArray
}

let resultArry = mergeArray(arr1, arr2)

console.log("Merge array by Spread is :", resultArry);

// 2. Using the concat() Method

let arr3 = [3, 4, 5,];
let arr4 = [6, 7, 8];

function mergeConcat(arr3, arr4) {
    let mergeArr = arr3.concat(...arr4)
}

let conacatResult = mergeArray(arr3, arr4);

console.log("merge array by Conacat :", conacatResult);

// 3. Using the push() Method with Spread :

const arr5 = [1, 2];
const arr6 = [3, 4];
arr5.push(...arr6);
console.log(arr5); // [1, 2, 3, 4]

// 4. Using a for Loop :

const arr7 = [1, 2, 63, 32];
const arr8 = [3, 4, 43, 32];

function mergeByForOf(arr7, arr8) {

    for (let item of arr8) {
        arr7.push(item)
    }
    console.log("For of merge Array : ", arr7);
}

mergeByForOf(arr7, arr8);

