// Write a js function that calculate sum of the digits of a given no .

function digitSum(num) {
    let sum = 0;
    for (i = 0; i < num.toString().length; i++) {
        sum += Number(num.toString()[i])
    }
    console.log(`Digit sum of ${num} : ${sum}`);
}

digitSum(2345);