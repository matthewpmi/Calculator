const display = document.querySelector('.display');

let buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC': 
                display.innerText = '';
                break;
            case 'Backspace':
                if(display.innerTxt){
                display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        };
    })
})


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

let clickedOn = function(){

}

let operands = function operand(){
    return clickedOn;
}

