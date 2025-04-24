// Write a js function that merge 2 objects, combining all their properties.

const obj1 = {
    "Name": "Swapnil",
    "Age": 28
}

const obj2 = {
    "Number": 7972021968,
    "City": "Nagpur"
}


function mergeObjects(obj1, obj2) {

    let mergeObj = { ...obj1, ...obj2 }
    return mergeObj;

}

let mergeResult = mergeObjects(obj1, obj2);
console.log("Merge Object :", mergeResult);


