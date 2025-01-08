// Find Index of Element
// Given an array of strings, return the index of the first occurrence of a specific string.

const arr = ['apple', 'banana', 'cherry'];

let target = "appless";

function findIndex(arr) {
    for (let item of arr) {
        if (item === target) {
            return arr.indexOf(item);
        } else {
          return  console.log("Not found");
        }
    }

}

console.log(findIndex(arr));