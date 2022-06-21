// to add:
// if display last char string functions:
// if display last char == operator and operator selected -> replace operator with new selection
// if display last char == nothing, do not allow operator input
// if display last char == number && display includes operator && operator selected -> run operation -> return result -> allow result to be included in next calculation.


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
            case '+':
            case '-':
            case '*':
            case '÷':
                // switch(display.innerText.charAt(display.innerText.length - 1)){
                //     case [0-9]: display.innerText += e.target.innerText;
                //     case '': return false; 
                //     case '+':
                //     case '-':
                //     case '*':
                //     case '÷':
                //         display.innerText.slice(0, -1) + e.target.innerText;
                // }
                
            //     if (display.innerText.length === 0) {
            //         return false;
            //     }
            //     // else if(display.innerText && !(display.innerText.charAt(display.innerText.length - 1) == '+' || '-' || '*' || '÷')) {
            //     //     display.innerText += e.target.innerText;
            //     // }

            //     // else if (display.innerText.charAt(display.innerText.length-1) == '+' || '-' || '*' || '÷') {
            //     //     display.innerText.slice(0, -1) + e.target.innerText;
            //     // }
            //     else {
            //         display.innerText += e.target.innerText;
            //     }
            //     break;

            // // case '=':
            // //     operate()
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

console.log(display.innerText.charAt(display.innerText.length - 1))