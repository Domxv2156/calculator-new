const numberBtn = document.querySelectorAll('.number')
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const decimalBtn = document.querySelector('.decimal')
const equalBtn = document.querySelector('.equal')
const previousDisplay = document.querySelector('.previousNum')
const currentDisplay = document.querySelector('.currentNum')
const backBtn = document.querySelector('.backSpace')

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
        currentDisplay.textContent = "retard"
        
    } else {
        resultt = a/b;
    }
    return parseFloat(resultt.toFixed(2))
}

function operate(previousNum, currentNum, operator ) {
    
   
    currentNum = Number(currentNum)
    previousNum = Number(previousNum)
    if(operator === '+') {
       result = add(previousNum, currentNum)
       currentDisplay.textContent = result;
       previousDisplay.textContent = "";
       } else if(operator === '-') {
    result = subtract(previousNum, currentNum)
    currentDisplay.textContent = result;
       previousDisplay.textContent = "";
 } else if(operator === '➗') {
   result = divide(previousNum, currentNum) 
   currentDisplay.textContent = result;
       previousDisplay.textContent = "";
 } else if(operator === 'x') {
   result = multiply(previousNum, currentNum)
   currentDisplay.textContent = result;
       previousDisplay.textContent = "";
 } 

}

numberBtn.forEach(button => button.addEventListener('click', function(event) {
    if(currentNum.length <=5) {
  currentNum += event.target.innerHTML;
  currentDisplay.textContent = currentNum;
}
}))

operatorBtn.forEach(opButton => opButton.addEventListener('click', function(event) {
    if(operator == "" && currentNum != "") {
operator += event.target.innerHTML;
previousNum += currentNum;
previousDisplay.textContent = operator + previousNum;
currentNum = "";
currentDisplay.textContent = currentNum = "";
}
}))

equalBtn.addEventListener('click', () => {
    if (previousNum != "" && currentNum != "" && operator !="") {
    operate(previousNum, currentNum, operator)
    previousNum = "";
    operator = "";
    currentNum = result;
}
})

decimalBtn.addEventListener('click', () => {
    if (!currentNum.includes('.') && currentNum != "") {
        currentNum += '.';
        currentDisplay.textContent = currentNum;
} 
})

backBtn.addEventListener('.click', () => {
 
})



clearBtn.addEventListener('click', () => {
    previousNum = "";
    operator = "";
    currentNum = "";
    currentDisplay.textContent = currentNum;
    previousDisplay.textContent = previousNum;
})

