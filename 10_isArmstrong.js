// Write a js function that check if the number is an Armstrong Number.

//  153 --> Sum of Each digit raise to the power total no of digits.
// 1^3 = 3
// 5^3 = 125
// 3^3 = 27

// 3+125+27 = 153
// Sum of all the result (153) = original number (153)

function armstrong(num) {

    let totalArmstrong = 0;
    for (i = 0; i < num.toString().length; i++) {
        totalArmstrong += Number(num.toString()[i]) ** Number(num.toString().length);
    }
    console.log(totalArmstrong);
}

armstrong(153);