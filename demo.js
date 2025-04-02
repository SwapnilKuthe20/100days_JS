let a = 20,
    b = 5;

function divide(a, b) {
    if (b == 0) {
        throw 'Division by zero';
    }
    return a / b;
}

console.log(divide(a, b));
