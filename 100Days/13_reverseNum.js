// Write js function that finds a given number, if the number is negative, the reverse number should also be negative.


function reverse(num) {

    let numStr = num.toString();
    // console.log(typeof numStr, numStr);

    let revStr = numStr.split("").reverse().join('');
    // console.log(typeof revStr, revStr);
    let revNum = parseInt(revStr) * Math.sign(num);
    // console.log(typeof revNum, revNum);
    console.log(`Reverse of ${num} is : ${revNum}`);
}

reverse(-133)
