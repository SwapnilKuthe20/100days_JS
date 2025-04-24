
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    let num1 = +document.getElementById('inp1').value;
    let num2 = +document.getElementById('inp2').value;

    let oprator = document.getElementById("operation").value;

    let result = 0;

    switch (oprator) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break;
        default:
            result;
    }

    document.getElementById("result").innerText = "Result :" + result;

})
