// Write a js function that merge 2 Array or Objects, Print error if inputs are differnt types. 

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let obj1 = {
    name: "Swap",
    age: 12
}

let obj2 = {
    city: "Bhandara",
    No: 7972021967
}
// console.log(typeof obj1);

let num1 = 10;

function mergeArrObj(par1, par2) {

    if (Array.isArray(par1) && Array.isArray(par2)) {
        let mergeArray = [...par1, ...par2];
        return mergeArray;
    } else if (typeof (par1) === "object" && typeof (par2) === "object") {
        let mergeObj = { ...par1, ...par2 }
        return mergeObj;
    } else {
        console.log("Please Check type of Argumnets");
    }

}

let result = mergeArrObj(obj1, num1);

console.log("Merge Inputs :", result);
