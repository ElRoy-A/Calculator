// Set DOM elements
const PREVIOUS_VALUE = document.getElementById('previous-value');
const CURRENT_VALUE = document.getElementById('current-value');

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');

const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const deleteValue = document.getElementById('delete');
const decimal = document.getElementById('decimal');

// Set decimal button disabled to false
decimal.disabled = false;

// Set all variables to empty / 0
let previousValue = 0;
let displayValue = '';
let operatorChoice = '';
let result = 0;
PREVIOUS_VALUE.innerText = '';
CURRENT_VALUE.innerText = 0;

// Operation functions
function add(num1,num2) {
    return num1+num2;
}
function subtract(num1,num2) {
    return num1-num2;
}
function multiply(num1,num2) {
    return num1*num2;
}
function divide(num1,num2) {
    let divideResult = '';

    //  Catch error when dividing by 0
    if (num2 === 0) {
        divideResult = "Divide by 0..? Computer says no.";
    }
    else {
        divideResult = num1/num2;
    }

    return divideResult;
}

// Operate function
function operate(operator, num1, num2) {
    if (operator === 'add') {
        return add(num1,num2);
    }
    else if (operator === 'subtract') {
        return subtract(num1, num2);
    }
    else if (operator === 'multiply') {
        return multiply(num1, num2);
    }
    else if (operator === 'divide') {
        return divide(num1, num2);
    }
}

// Event listeners for digit buttons
zero.addEventListener('click', () => {
    displayValue += String(0);
    CURRENT_VALUE.innerText = displayValue;
})
one.addEventListener('click', () => {
    displayValue += String(1);
    CURRENT_VALUE.innerText = displayValue;
})
two.addEventListener('click', () => {
    displayValue += String(2);
    CURRENT_VALUE.innerText = displayValue;
})
three.addEventListener('click', () => {
    displayValue += String(3);
    CURRENT_VALUE.innerText = displayValue;
})
four.addEventListener('click', () => {
    displayValue += String(4);
    CURRENT_VALUE.innerText = displayValue;
})
five.addEventListener('click', () => {
    displayValue += String(5);
    CURRENT_VALUE.innerText = displayValue;
})
six.addEventListener('click', () => {
    displayValue += String(6);
    CURRENT_VALUE.innerText = displayValue;
})
seven.addEventListener('click', () => {
    displayValue += String(7);
    CURRENT_VALUE.innerText = displayValue;
})
eight.addEventListener('click', () => {
    displayValue += String(8);
    CURRENT_VALUE.innerText = displayValue;
})
nine.addEventListener('click', () => {
    displayValue += String(9);
    CURRENT_VALUE.innerText = displayValue;
})

decimal.addEventListener('click', () => {
    displayValue += '.';
    CURRENT_VALUE.innerText = displayValue;
    decimal.disabled = true;
})

// Event listeners for operators
addition.addEventListener('click', () => {
    changeValues();
    operatorChoice = 'add';
})
subtraction.addEventListener('click', () => {
    changeValues();
    operatorChoice = 'subtract';
})
multiplication.addEventListener('click', () => {
    changeValues();
    operatorChoice = 'multiply';
})
division.addEventListener('click', () => {
    changeValues();
    operatorChoice = 'divide';
})


// Perform arithmetic when equals button is clicked
equals.addEventListener('click', () => {
    displayValue = parseFloat(displayValue);
    result = operate(operatorChoice, previousValue, displayValue);
    previousValue = '';
    PREVIOUS_VALUE.innerText = previousValue;
    CURRENT_VALUE.innerText = result;
    
    displayValue = result;
})

// Clear both previous and current operands when clear button is clicked
clear.addEventListener('click', () => {
    displayValue = '';
    previousValue = '';
    PREVIOUS_VALUE.innerText = previousValue;
    CURRENT_VALUE.innerText = 0;
})

// Change values around when an operation is performed
function changeValues() {
    displayValue = parseFloat(displayValue);
    previousValue = displayValue;
    displayValue = '';
    PREVIOUS_VALUE.innerText = previousValue;
    CURRENT_VALUE.innerText = displayValue;
    decimal.disabled = false;
}

// Delete last string element when delete button is pressed
deleteValue.addEventListener('click', () => {
    displayValue = displayValue.slice(0,-1);
    CURRENT_VALUE.innerText = displayValue;
})