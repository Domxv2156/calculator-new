const numberBtn = document.querySelectorAll('.number')
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const decimalBtn = document.querySelector('.decimal')
const equalBtn = document.querySelector('.equal')
const previousDisplay = document.querySelector('.previousNum')
const currentDisplay = document.querySelector('.currentNum')

let operator = "";
let currentNum = "";
let previousNum = "";

function add(a, b) {
    return a + b;
    
}
function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a*b
}

function divide(a, b) {
    if(b === 0) {
        currentDisplay.textContent = "You can't divide by 0!"
    } else {
        result = a/b;
    }
    return result.toFixed(2)
}

function operate(previousNum, currentNum,operator ) {
    
   
    currentNum = Number(currentNum)
    previousNum = Number(previousNum)
    if(operator === '+') {
       return add(previousNum, currentNum)
       } else if(operator === '-') {
    return subtract(previousNum, currentNum)
 } else if(operator === '/') {
   return divide(previousNum, currentNum) 
 } else if(operator === '*') {
   return multiply(previousNum, currentNum)
 } else {
    currentDisplay.textContent = "Error"
 }
 
}

console.log(operate(3, 4, '-'))