// operate function(s)
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function operate(operand1, operand2, operator){
    switch(operator){
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '÷':
            if(operand2 === 0){
                return alert("you can't")
            }
            else{
            return divide(operand1, operand2);
            }
    }
}
// variables for operate function
let firstInput = '';
let currentOperator = '';
let secondInput = '';
let result = '';
// dom values
const display = document.querySelector('.display')
const numbers = Array.from(document.querySelectorAll('.number'))
const decimal = document.querySelector('#decimal')
const operator = Array.from(document.querySelectorAll('.operator'))
const clear = document.querySelector('#clear')
const backspace = document.querySelector('#delete')
const equals = document.querySelector('#equals')
// populate display with number click
numbers.forEach((n) => {
    n.addEventListener('click', (e) => {
        if(firstInput){
            display.innerText = e.target.innerText;
            secondInput += e.target.innerText
        }
        else{
            display.innerText += e.target.innerText;
        }
    })
})
operator.forEach((o) => {
    o.addEventListener('click', (e) => {
        if(currentOperator && secondInput){
            display.innerText = operate(Number(firstInput),Number(secondInput),currentOperator);
            secondInput = '';
        }
        e.target.classList.toggle('function-select');
        firstInput = display.innerText; // works only when firstInput is initially set to ''. doesn't work when set to null.
        currentOperator = e.target.innerText;
    })
})
clear.addEventListener('click', () => {
    display.innerText = '';
    firstInput = '';
    secondInput = '';
    result = '';
    operator.forEach((o) => o.classList.remove('function-select'));
})
backspace.addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, -1);

})
decimal.addEventListener('click', () => {
    if(!display.innerText.includes(decimal.innerText)){
        display.innerText += decimal.innerText;
    }
})
equals.addEventListener('click', () => {
    if(!display.innerText){
        return false;
    }
    else if(!firstInput || !secondInput || !currentOperator){
        return false;
    }
    else
        {result = operate(Number(firstInput),Number(secondInput),currentOperator);
        display.innerText = result;
        operator.forEach((o) => o.classList.remove('function-select'));
        currentOperator = '';
        firstInput = result;
        secondInput = '';}
})

