// JavaScript Program to Find Armstrong Number in an Interval

function armstrongNumbers(start, end) {

    let armstrongNum = [];

    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) {
            armstrongNum.push(i)
        }
    }
    console.log(armstrongNum.join(','));
}

function isArmstrong(num) {

    let digitLength = Number(num.toString().length);
    let sum = 0;

    for (let i = 0; i < digitLength; i++) {
        let digit = Number(num.toString()[i])
        sum += digit ** digitLength;
    }

    return sum == num;
}

armstrongNumbers(1, 500);
