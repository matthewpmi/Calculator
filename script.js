//get elements: display, buttons, display text
const display = document.querySelector('.display');

let buttons = Array.from(document.querySelectorAll('button'));

let problem = display.innerText

//function to display numbers/operators on 'click'
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC': 
                display.innerText = '';
                break;
            case 'Delete':
                if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                operate()
            default:
                display.innerText += e.target.innerText;
        };
    })
})

//function to run calculations


const operations = {
    "+" : function (operand1, operand2) {
        return operand1 + operand2;
    },
    "-" : function (operand1, operand2) {
        return operand1 - operand2;
    },
    "*" : function (operand1, operand2) {
        return operand1 * operand2;
    },
    "÷" : function (operand1, operand2) {
        return operand1 / operand2;
    },
}
function operate(list, operator) {
    return list.reduce(operations[operator]);
}

console.log(operate([3, 4, 6, 8],'*'))