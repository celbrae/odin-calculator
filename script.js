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

const button1 = document.getElementById("one");
const button2 = document.getElementById("two");
const button3 = document.getElementById("three");
const button4 = document.getElementById("four");
const button5 = document.getElementById("five");
const button6 = document.getElementById("six");
const button7 = document.getElementById("seven");
const button8 = document.getElementById("eight");
const button9 = document.getElementById("nine");
const button0 = document.getElementById("zerp");
const buttonAdd = document.getElementById("plus");
const buttonSubtract = document.getElementById("minus");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("divide");
const buttonEquals = document.getElementById("equals");
const buttonClear = document.getElementById("clear");
