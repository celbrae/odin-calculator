function add() {
    return (firstNum + secondNum);
}

function subtract() {
    return (firstNum - secondNum);
}

function multiply() {
    return (firstNum * secondNum);
}

function divide() {
    return (firstNum / secondNum);
}

function operate() {
    if (operator === "+") {
        return add();
    } else if (operator === "-") {
        return subtract();
    } else if (operator === "*") {
        return multiply();
    } else if (operator === "/") {
        return divide();
    } 
}

let firstNum = 6;
let operator = "/";
let secondNum = 3;

console.log(operate());
