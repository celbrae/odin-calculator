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

let firstNum = 0;
let operator = "*";
let secondNum = 5;

const button1 = document.getElementById("one");
const button2 = document.getElementById("two");
const button3 = document.getElementById("three");
const button4 = document.getElementById("four");
const button5 = document.getElementById("five");
const button6 = document.getElementById("six");
const button7 = document.getElementById("seven");
const button8 = document.getElementById("eight");
const button9 = document.getElementById("nine");
const button0 = document.getElementById("zero");
const buttonAdd = document.getElementById("plus");
const buttonSubtract = document.getElementById("minus");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("divide");
const buttonEquals = document.getElementById("equals");
const buttonClear = document.getElementById("clear");

button0.onclick = () => firstNum = 0;
button1.onclick = () => firstNum = 1;
button2.onclick = () => firstNum = 2;
button3.onclick = () => firstNum = 3;
button4.onclick = () => firstNum = 4;
button5.onclick = () => firstNum = 5;
button6.onclick = () => firstNum = 6;
button7.onclick = () => firstNum = 7;
button8.onclick = () => firstNum = 8;
button9.onclick = () => firstNum = 9;
buttonAdd.onclick = () => firstNum = "+";
buttonSubtract.onclick = () => firstNum = "-";
buttonMultiply.onclick = () => firstNum = "*";
buttonDivide.onclick = () => firstNum = "/";

buttonClear.onclick = () => firstNum = secondNum = 0;
buttonEquals.onclick = () => console.log(operate());