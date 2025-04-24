// // JavaScript Program to Check Armstrong Number

function armstrong(num) {
    const digitLength = num.toString().length;
    let sum = 0;

    for (let i = 0; i < digitLength; i++) {
        let digit = Number(num.toString()[i]);
        sum += digit ** digitLength;
    }

    if (sum === num) {
        console.log(`${num} is an Armstrong number.`);
    } else {
        console.log(`${num} is not an Armstrong number.`);
    }
}

armstrong(153); // 1³ + 5³ + 3³ = 153 → Armstrong
armstrong(12); // 1³ + 2³  = 36 → Not Armstrong
