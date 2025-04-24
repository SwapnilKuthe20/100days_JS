// Write js function that return dulicates values from an Array.

let arr = [1, 2, 3, 4, 1, 4];

function dupliItems(arr) {
    const unique = [];
    arr.forEach((value) => {
        if (!unique.includes(value)) {
            unique.push(value);
        }
    })
    return unique;
}

let uniqueElements = dupliItems(arr);

console.log(uniqueElements);

